const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const response = await client.getEntries({
      content_type: "item",
      select: "fields",
      order: "-fields.createdDate",
      limit: 150,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.body);
  }
}
