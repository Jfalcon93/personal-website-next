import Head from "next/head";

export default function Footer({ items }) {
  return (
    <div className="sticky top-[100vh] pb-4 text-gray-400">
      <ul className="text-xs md:text-base flex flex-row justify-between tracking-tight md:tracking-normal space-x-1 md:space-x-2">
        <li className="transition duration-300 ease-in-out hover:text-sky-500 hover:fill-sky-500">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            @yungyoshh
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-sky-500">
          🐧🤞🏽💙
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
