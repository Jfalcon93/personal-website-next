import Header from "../../components/lists/header";
import Head from "next/head";
import { useYouTubePlaylistRSS } from "./youtubeRss";
import ListItem from "../../components/listItem";

export default function YoutubeMusic({ title, slug }) {
  const { videos, loading, error } = useYouTubePlaylistRSS(
    "PLTkaDAEbM3siPfBEpQCulhC2gIMKBncP4"
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pt-3 mx-3 md:mx-6">
        <Header category={"writing"} slug={slug} />
      </div>
      <div className="pt-2 mx-3 md:mx-6 min-h-screen">
        <h2 className="mt-2 md:mb-[-14px] mb-[-12px] text-gray-600 text-xs md:text-sm">
          {title}
        </h2>
        <div>
          <h2>YouTube Playlist</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <ul className="">
            {videos.map((video) => (
              <ListItem
                key={video.id}
                date={video.publishedAt != null ? video.publishedAt : ""}
                title={video.title}
                url={`https://www.youtube.com/watch?v=${video.id}`}
                category={["music"]}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
