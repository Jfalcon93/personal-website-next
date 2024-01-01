import { NotionRenderer, createBlockRenderer } from "@notion-render/client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { render } from "react-dom";
import Head from "next/head";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "best-songs-2021",
        },
      },
      {
        params: {
          id: "best-songs-2022",
        },
      },
      {
        params: {
          id: "best-songs-2023",
        },
      },
    ],
    fallback: true, // false or "blocking"
  };
}

export default function List({ html, title, socialImage }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yungyoshh" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={socialImage} />
      </Head>
      <div className="pt-16 mx-3 md:mx-6 min-h-screen">
        <Header />
        <div className="my-4 border border-gray-400 rounded-lg w-3 h-0.5"></div>
        <h2 className="mt-4 mb-2 text-gray-500 text-xs md:text-sm">{title}</h2>
        <div
          className="mb-6 text-xs md:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  let slugToId = {
    bestsongs2021: {
      id: "8eac270354ac486798b01ebff15d4e3a",
      title: "Best Songs, 2021",
      img: `${process.env.URL}/bestsongs2021.jpg`,
    },
    bestsongs2022: {
      id: "79bc1d1a55fb4e3fa8dcbbaa4473e5ef",
      title: "Best Songs, 2022",
      img: `${process.env.URL}bestsongs2022.jpg`,
    },
    bestsongs2023: {
      id: "1ab0b59be71c4602b4697f2f60426ad2",
      title: "Best Songs, 2023",
      img: `${process.env.URL}bestsongs2023.jpg`,
    },
  };
  let id = params.id.toString().replaceAll("-", "");
  const res = await fetch(
    `${process.env.URL}api/notion/pages/${slugToId[id].id}`
  );
  const list = await res.json();
  const linkRenderer = createBlockRenderer("text", (data, renderer) => {
    let result = data.plain_text;

    if (data.href) {
      result = `<a target="_blank" href="${data.href}" class="text-blue-500 hover:underline">${result}</a>`;
    }

    if (data.annotations.color !== "default") {
      result = `<span class="notion-color-${data.annotations.color}">${result}</span>`;
    }

    if (data.annotations.bold) {
      result = `<b class="notion-text-bold">${result}</b>`;
    }

    if (data.annotations.italic) {
      result = `<i class="notion-text-italic">${result}</i>`;
    }

    if (data.annotations.strikethrough) {
      result = `<s class="notion-text-strikethrough">${result}</s>`;
    }

    if (data.annotations.underline) {
      result = `<u class="notion-text-underline">${result}</u>`;
    }

    if (data.annotations.code) {
      result = `<code class="notion-text-code">${result}</code>`;
    }

    return result;
  });
  const numberedListRenderer = createBlockRenderer(
    "numbered_list",
    async (data, renderer) => {
      return `<ol class="list-decimal list-inside mb-4 marker:text-gray-400">${await renderer.render(
        ...data.numbered_list
      )}</ol>`;
    }
  );
  const numberedListItemRenderer = createBlockRenderer(
    "numbered_list_item",
    async (data, renderer) => {
      return `
            <li class="mb-1">
                ${await renderer.render(...data.numbered_list_item.rich_text)}
            </li>
        `;
    }
  );
  const notion = new NotionRenderer({
    renderers: [linkRenderer, numberedListRenderer, numberedListItemRenderer],
  });
  const html = await notion.render(...list.results);
  return {
    props: {
      html,
      title: slugToId[id].title,
      socialImage: slugToId[id].img,
    },
  };
}
