import { useEffect, useState } from "react";

/**
 * Hook to fetch YouTube playlist videos via YouTube Data API v3.
 * @param {string} playlistId - The YouTube playlist ID
 */
export function useYouTubePlaylist(playlistId) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return;

    const fetchPlaylist = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/youtube-playlist?playlistId=${playlistId}`);

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || `API fetch error: ${res.status}`);
        }

        const data = await res.json();
        setVideos(data.videos || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  return { videos, loading, error };
}
