import Header from "../../components/lists/header";
import Footer from "../../components/lists/footer";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { loadList, loadLists } from "../../utils/contentful/api";

export async function getStaticPaths() {
  const lists = await loadLists();

  const paths = lists.items?.map((list) => ({
    params: {
      id: list.fields.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export default function List({ title, slug, socialImage, body, yearLinks }) {
  const OL = ({ children }) => (
    <ol className="list-decimal list-inside mb-4 marker:text-gray-400">
      {children}
    </ol>
  );

  const HL = ({ uri, children }) => (
    <a
      target="_blank"
      rel="noreferrer"
      href={uri}
      className="text-indigo-600 hover:underline cursor-pointer"
    >
      {children}
    </a>
  );

  const options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (_node, children) => <OL>{children}</OL>,
      [BLOCKS.LIST_ITEM]: (node, _children) => {
        const transformedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => children,
            [BLOCKS.LIST_ITEM]: (_node, children) => children,
            [INLINES.HYPERLINK]: (node, children) => {
              const uri = node.data.uri;

              return <HL uri={uri}>{children}</HL>;
            },
          },
        });
        return <li className="mb-1">{transformedChildren}</li>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const uri = node.data.uri;
        return <HL uri={uri}>{children}</HL>;
      },
      [BLOCKS.PARAGRAPH]: (node, _children) => {
        const transformedChildren = documentToReactComponents(node, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
              const uri = node.data.uri;
              return <HL uri={uri}>{children}</HL>;
            },
          },
        });
        return <div className="mb-2">{transformedChildren}</div>;
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yungyoshh" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={socialImage} />
      </Head>
      <div className="pt-3 mx-3 md:mx-6">
        <Header category={"writing"} slug={slug} />
      </div>
      <div className="pt-2 mx-3 md:mx-6 min-h-screen">
        <h2 className="mt-2 md:mb-[-14px] mb-[-12px] text-gray-600 text-xs md:text-sm">
          {title}
        </h2>
        <div className="mb-6 text-xs md:text-sm">
          {documentToReactComponents(body, options)}
        </div>
        <Footer slug={slug} yearLinks={yearLinks} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const lists = await loadList(params.id);
  const list = lists.items[0];
  const thumbnail = `https:${list.fields.thumbnail.fields.file.url}`;

  // Load all lists to get available years
  const allLists = await loadLists();
  const yearLinks = allLists.items
    ?.filter((item) => item.fields.slug?.startsWith("best-songs-"))
    .map((item) => item.fields.slug)
    .sort();

  return {
    props: {
      title: list.fields.title,
      slug: list.fields.slug,
      socialImage: thumbnail,
      body: list.fields.body,
      yearLinks: yearLinks || [],
    },
  };
}
