const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function loadLists() {
  try {
    const response = await client.getEntries({
      content_type: "list",
      select: "fields.title,fields.slug,fields.dateCreated",
    });
    return response;
  } catch (error) {
  }
}

export async function loadItems() {
  try {
    const response = await client.getEntries({
      content_type: "item",
      select: "fields",
      order: "-fields.createdDate",
      limit: 150,
    });
    return response;
  } catch (error) {
  }
}

export async function loadList(id) {
  try {
    const response = await client.getEntries({
      content_type: "list",
      "fields.slug[match]": id,
    });
    return response;
  } catch (error) {
  }
}
