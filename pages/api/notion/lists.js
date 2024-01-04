import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

const databaseId = process.env.NOTION_LIST_DB_ID;

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    if (response.has_more) {
      let additional = await notion.databases.query({
        database_id: databaseId,
        start_cursor: response.next_cursor,
      });
      response.results = [...response.results, ...additional.results];
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error.body);
  }
}
