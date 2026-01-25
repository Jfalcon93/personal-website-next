import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const { playlistId } = req.query;

  if (!playlistId) {
    return res.status(400).json({ error: "playlistId required" });
  }

  // Initialize Neon database connection
  const sql = neon(process.env.DATABASE_URL);

  try {
    // Fetch cached videos from database
    const rows = await sql`
      SELECT id, title, added_to_playlist_at, video_published_at, thumbnail
      FROM youtube_videos
      WHERE playlist_id = ${playlistId}
      ORDER BY added_to_playlist_at DESC
    `;

    // Transform to match the expected format
    const videos = rows.map((row) => ({
      id: row.id,
      title: row.title,
      publishedAt: row.added_to_playlist_at,         // Backward compatibility: when added to playlist
      addedToPlaylistAt: row.added_to_playlist_at,   // When added to playlist
      videoPublishedAt: row.video_published_at,      // When originally published (may be null)
      thumbnail: row.thumbnail,
    }));

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json({ videos });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: err.message });
  }
}
