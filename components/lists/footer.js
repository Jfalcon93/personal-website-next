import Head from "next/head";
import Link from "next/link";

export default function Footer({ slug }) {
  return (
    <div className="sticky top-[100vh] px-0 pb-4 text-gray-600">
      <ul className="text-xs md:text-sm flex flex-row justify-between tracking-tight md:tracking-normal space-x-1 md:space-x-2">
        <li className="transition duration-300 ease-in-out hover:text-sky-500 hover:fill-sky-500">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            @yungyoshh
          </a>
        </li>
        <li className="transition duration-300 ease-in-out">
          <ul className="flex text-gray-400 text-sm md:flex-row">
            <li
              className={`mr-4 hover:text-indigo-600 ${
                slug === "best-songs-2021" ? "text-indigo-600" : ""
              }`}
            >
              <Link href="/lists/best-songs-2021"> [ 21 ] </Link>
            </li>
            <li
              className={`mr-4 hover:text-indigo-600 ${
                slug === "best-songs-2022" ? "text-indigo-600" : ""
              }`}
            >
              <Link href="/lists/best-songs-2022"> [ 22 ] </Link>
            </li>
            <li
              className={`mr-4 hover:text-indigo-600 ${
                slug === "best-songs-2023" ? "text-indigo-600" : ""
              }`}
            >
              <Link href="/lists/best-songs-2023"> [ 23 ] </Link>
            </li>
            <li
              className={`mr-4 hover:text-indigo-600 ${
                slug === "best-songs-2024" ? "text-indigo-600" : ""
              }`}
            >
              <Link href="/lists/best-songs-2024"> [ 24 ] </Link>
            </li>
            <li
              className={`mr-4 hover:text-indigo-600 ${
                slug === "best-songs-2025" ? "text-indigo-600" : ""
              }`}
            >
              <Link href="/lists/best-songs-2025"> [ 25 ] </Link>
            </li>
          </ul>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-indigo-500">
          <a
            href="https://github.com/Jfalcon93"
            target="_blank"
            rel="noreferrer"
          >
            @jfalcon93
          </a>
        </li>
      </ul>
    </div>
  );
}
