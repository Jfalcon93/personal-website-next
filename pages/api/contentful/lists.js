import { loadLists } from "../../../utils/contentful/api";

export default async function handler(req, res) {
  try {
    const response = await loadLists();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.body);
  }
}
