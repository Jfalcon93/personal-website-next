import { useEffect, useState } from "react";

/**
 * Hook to fetch YouTube playlist videos via RSS feed (no API key needed).
 * @param {string} playlistId - The YouTube playlist ID
 */
export function useYouTubePlaylistRSS(playlistId) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return;

    const fetchRSS = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/rss?playlistId=${playlistId}`);
        if (!res.ok) throw new Error(`RSS fetch error: ${res.status}`);
        const text = await res.text();

        // Parse XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        // Extract entries
        const entries = Array.from(xml.querySelectorAll("entry")).map(
          (entry) => {
            const id = entry.querySelector(
              "yt\\:videoId, videoId"
            )?.textContent;
            const title = entry.querySelector("title")?.textContent;
            const published = entry.querySelector("published")?.textContent;
            const thumbnail = entry
              .querySelector("media\\:thumbnail, thumbnail")
              ?.getAttribute("url");

            return { id, title, publishedAt: published, thumbnail };
          }
        );

        setVideos(entries);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, [playlistId]);

  return { videos, loading, error };
}
