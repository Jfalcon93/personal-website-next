import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  // Verify this is a cron request (optional security measure)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID || "PLTkaDAEbM3siPfBEpQCulhC2gIMKBncP4";
  const API_KEY = process.env.YOUTUBE_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "YouTube API key not configured" });
  }

  // Initialize Neon database connection
  const sql = neon(process.env.DATABASE_URL);

  try {
    // Fetch playlist items from YouTube Data API v3
    // snippet: contains addedToPlaylistAt (snippet.publishedAt)
    // contentDetails: contains videoPublishedAt (contentDetails.videoPublishedAt)
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();

    // Filter for videos ADDED TO PLAYLIST in the last 24 hours
    // Using snippet.publishedAt which is when the video was added to the playlist
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const recentVideos = data.items.filter((item) => {
      // snippet.publishedAt = when added to playlist (NOT when video was published!)
      const addedToPlaylistDate = new Date(item.snippet.publishedAt);
      return addedToPlaylistDate >= oneDayAgo;
    });

    // Insert videos into database
    let insertedCount = 0;
    for (const item of recentVideos) {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      const addedToPlaylistAt = item.snippet.publishedAt;  // When added to playlist
      const videoPublishedAt = item.contentDetails?.videoPublishedAt || null;  // When originally published
      const thumbnail = item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url;

      try {
        await sql`
          INSERT INTO youtube_videos (id, playlist_id, title, added_to_playlist_at, video_published_at, thumbnail)
          VALUES (${videoId}, ${PLAYLIST_ID}, ${title}, ${addedToPlaylistAt}, ${videoPublishedAt}, ${thumbnail})
          ON CONFLICT (id, playlist_id) DO UPDATE
          SET title = EXCLUDED.title,
              added_to_playlist_at = EXCLUDED.added_to_playlist_at,
              video_published_at = EXCLUDED.video_published_at,
              thumbnail = EXCLUDED.thumbnail,
              cached_at = CURRENT_TIMESTAMP
        `;
        insertedCount++;
      } catch (dbError) {
        console.error(`Error inserting video ${videoId}:`, dbError);
      }
    }

    // Clean up videos added to playlist more than 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const deleteResult = await sql`
      DELETE FROM youtube_videos
      WHERE playlist_id = ${PLAYLIST_ID}
      AND added_to_playlist_at < ${sevenDaysAgo.toISOString()}
    `;

    res.status(200).json({
      success: true,
      message: "YouTube playlist cache updated",
      stats: {
        totalFetched: data.items.length,
        recentVideos: recentVideos.length,
        inserted: insertedCount,
        deleted: deleteResult.rowCount || 0,
      },
    });
  } catch (err) {
    console.error("Cron job error:", err);
    res.status(500).json({ error: err.message });
  }
}
