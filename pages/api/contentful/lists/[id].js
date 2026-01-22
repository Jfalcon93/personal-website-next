import { loadList } from "../../../../utils/contentful/api";

export default async function handler(req, res) {
  let { id } = req.query;
  try {
    const response = await loadList(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to load list" });
  }
}
