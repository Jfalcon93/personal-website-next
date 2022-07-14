import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jordan Falcon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Jordan Falcon is a software engineer based out of North Dakota."
        />
        <meta name="author" content="Jordan Falcon" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
    </>
  );
}
