import * as React from "react";

export async function getStaticPaths() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCpTgZ4U-AjQqcihg2_YoN0g&maxResults=10&key=AIzaSyAvL2HNb7X1gJgit8tNKRyggFomCMuNPCQ`
  );
  const playlists = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = playlists.items.map((playlist) => ({
    params: { slug: [playlist.id] },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const res =
    await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLTkaDAEbM3sjy6iFXpFLhrkw1ADuaM10J&key=AIzaSyAvL2HNb7X1gJgit8tNKRyggFomCMuNPCQ
  `);

  return {
    props: {
      slug,
    },
  };
}

const Playlist = ({ playlist }) => {
  return <h2>meow meow</h2>;
};

export default Playlist;
