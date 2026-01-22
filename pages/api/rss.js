export default async function handler(req, res) {
  const { playlistId } = req.query;
  if (!playlistId)
    return res.status(400).json({ error: "playlistId required" });

  try {
    const rssRes = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`
    );
    const text = await rssRes.text();

    // Return with CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
