import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

const databaseId = process.env.NOTION_DB_ID;

export default async function handler(req, res) {
  let { category } = req.query;
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Tags",
        multi_select: {
          contains: category,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.body);
  }
}
