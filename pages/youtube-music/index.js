import Header from "../../components/lists/header";
import Head from "next/head";
import { useYouTubePlaylist } from "../../utils/useYouTubePlaylist";
import ListItem from "../../components/listItem";

export default function YoutubeMusic({ title, slug, playlistId }) {
  const { videos, loading, error } = useYouTubePlaylist(playlistId);

  // Group videos by date (ignoring time)
  const groupedVideos = videos.reduce((groups, video) => {
    if (!video.publishedAt) return groups;

    const date = new Date(video.publishedAt);
    const dateKey = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(video);
    return groups;
  }, {});

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

          {Object.entries(groupedVideos).map(([dateKey, dateVideos]) => (
            <div key={dateKey} className="mb-8">
              <div className="text-gray-700 font-medium text-sm md:text-base mb-2 mt-6">
                {dateKey}
              </div>
              <ul className="">
                {dateVideos.map((video) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      playlistId: process.env.YOUTUBE_PLAYLIST_ID,
    },
  };
}
