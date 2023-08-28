import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export default async function handler(req, res) {
  let { id } = req.query;
  try {
    const response = await notion.blocks.children.list({
      block_id: id,
      page_size: 100,
    });
    if (response.has_more) {
      let additional = await notion.blocks.children.list({
        block_id: id,
        page_size: 100,
        start_cursor: response.next_cursor,
      });
      response.results = [...response.results, ...additional.results];
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error.body);
  }
}
