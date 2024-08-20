import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { loadList } from "../../utils/contentful/api";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL}api/contentful/lists`);
  const lists = await res.json();

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

export default function List({ title, socialImage, body }) {
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

  const P = ({ children }) => <p className="mb-2">{children}</p>;
  const options = {
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => <OL>{children}</OL>,
      [BLOCKS.LIST_ITEM]: (node, children) => {
        const transformedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
            [INLINES.HYPERLINK]: (node, children) => {
              const uri = node.data.uri;

              return <HL uri={uri}>{children}</HL>;
            },
          },
        });
        return <li className="mb-1">{transformedChildren}</li>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data.uri;
        return <HL uri={uri}>{children}</HL>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <P>{children}</P>;
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
        <Header category={"writing"} />
      </div>
      <div className="pt-2 mx-3 md:mx-6 min-h-screen">
        <h2 className="mt-2 md:mb-[-14px] mb-[-12px] text-gray-600 text-xs md:text-sm">
          {title}
        </h2>
        <div className="mb-6 text-xs md:text-sm">
          {documentToReactComponents(body, options)}
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const lists = await loadList(params.id);
  const list = lists.items[0];

  return {
    props: {
      title: list.fields.title,
      socialImage: list.fields.thumbnail.fields.file.url,
      body: list.fields.body,
    },
  };
}
