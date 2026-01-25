-- YouTube Playlist Videos Cache Table
CREATE TABLE IF NOT EXISTS youtube_videos (
  id VARCHAR(255) PRIMARY KEY,
  playlist_id VARCHAR(255) NOT NULL,
  title TEXT NOT NULL,
  added_to_playlist_at TIMESTAMP NOT NULL,  -- When video was added to the playlist (snippet.publishedAt)
  video_published_at TIMESTAMP,              -- When video was originally published to YouTube (contentDetails.videoPublishedAt) - optional
  thumbnail TEXT,
  cached_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(id, playlist_id)
);

-- Index for faster queries by playlist and date (when added to playlist)
CREATE INDEX IF NOT EXISTS idx_playlist_added
  ON youtube_videos(playlist_id, added_to_playlist_at DESC);

-- Index for cleaning old cache entries
CREATE INDEX IF NOT EXISTS idx_cached_at
  ON youtube_videos(cached_at);
