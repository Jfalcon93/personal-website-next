import * as React from "react";
import Link from "next/link";

const Music = ({ yearPlaylists }) => {
  return (
    <div className="h-screen flex flex-col text-white bg-black">
      <h1 className="text-4xl md:text-5xl font-medium ml-4 mt-4">Music_</h1>
      <ul className="flex inline-flex flex-wrap ml-4 mt-7 md:mt-8 mr-4 text-xs md:text-base">
        <li className="font-bold mr-2 mt-1 md:mt-0">youtube playlists:</li>
        {yearPlaylists.map((playlist, i) => {
          return (
            <li
              key={i}
              className="mr-1 mt-1 md:mt-0 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500"
            >
              <Link href={`https://youtube.com/playlist?list=${playlist.id}`}>
                <a>
                  [ {playlist.snippet.title.toLowerCase().replace("music", "")}{" "}
                  ]
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex inline-flex ml-4 mt-4 text-xs md:text-base">
        <li className="font-bold mr-2">apple music playlists:</li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://music.apple.com/us/playlist/oh-wow-this-a-yosh-playlist/pl.u-NpXmYBksjAPZmV"
            target="_blank"
            rel="noreferrer"
          >
            [ 2020 ]
          </a>
        </li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://music.apple.com/us/playlist/omg-is-that-a-yosh-playlist/pl.u-GgA5YbbTaA9lZY"
            target="_blank"
            rel="noreferrer"
          >
            [ 2021 ]
          </a>
        </li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://music.apple.com/us/playlist/oh-my-is-that-a-yosh-playlist/pl.u-gxblM41FE7LX5a"
            target="_blank"
            rel="noreferrer"
          >
            [ 2022 ]
          </a>
        </li>
      </ul>
      <ul className="flex inline-flex ml-4 mt-4 text-xs md:text-base">
        <li className="font-bold mr-2">best songs, 2021:</li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://open.spotify.com/playlist/715u8pbHQuVJaXG88cnyul?si=281a5d7f78a4454c"
            target="_blank"
            rel="noreferrer"
          >
            [ spotify ]
          </a>
        </li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://music.apple.com/us/playlist/best-songs-2021/pl.u-NpXmYAmFjAPZmV"
            target="_blank"
            rel="noreferrer"
          >
            [ apple music ]
          </a>
        </li>
        <li className="inline mx-0.5 md:mx-1 decoration-blue-500 transition duration-300 ease-in-out hover:text-blue-500">
          <a
            href="https://youtube.com/playlist?list=PLTkaDAEbM3siU9N8d1vKeX5J6cWyuJsdc"
            target="_blank"
            rel="noreferrer"
          >
            [ youtube ]
          </a>
        </li>
      </ul>
      <h3 className="text-lg ml-4 mt-auto font-medium mb-4">
        <Link href="/">
          <a className="transition duration-300 ease-in-out hover:text-blue-500">
            [ 🏠 ]
          </a>
        </Link>
      </h3>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCpTgZ4U-AjQqcihg2_YoN0g&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`
  );
  const playlists = await res.json();
  let yearPlaylists = [];
  playlists.items.forEach((playlist) => {
    if (playlist.snippet.title.includes("Music")) {
      yearPlaylists.push(playlist);
    }
  });

  yearPlaylists.sort(function (a, b) {
    if (a.snippet.title === b.snippet.title) {
      return 0;
    } else if (a.snippet.title > b.snippet.title) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      yearPlaylists,
    },
    revalidate: 100000, // In seconds
  };
}

export default Music;
