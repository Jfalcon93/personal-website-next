import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

const databaseId = process.env.NOTION_DB_ID;

export default async function handler(req, res) {
  try {
    const response = await notion.databases.retrieve({
      database_id: databaseId,
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.body);
  }
}
