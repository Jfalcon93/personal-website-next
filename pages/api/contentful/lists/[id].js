const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  let { id } = req.query;
  try {
    const response = await client.getEntries({
      content_type: "list",
      "fields.slug[match]": id,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.body);
  }
}
