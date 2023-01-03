import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col text-white bg-black">
      <h1 className="text-4xl md:text-6xl font-medium ml-4 mt-4">
        <Link href="/resume">
          <a className="transition duration-300 ease-in-out hover:text-indigo-500">
            Yosh _
          </a>
        </Link>
      </h1>
      <div className="absolute inset-x-4 bottom-4">
        <ul className="text-xs md:text-base flex flex-row tracking-tight md:tracking-normal space-x-1 md:space-x-2">
          <li>software engineer</li>
          <li>|</li>
          <li>fargo, nd</li>
        </ul>
        <div className="pb-1 md:pb-0"></div>
        <ul className="text-xs md:text-base flex flex-row flex-wrap tracking-tight md:tracking-normal space-x-1 md:space-x-2">
          <li className="transition duration-300 ease-in-out hover:text-pink-500">
            <a
              className="underline decoration-pink-500"
              href="https://mirror.xyz/0xc1000fD7dd1E016Eeb4c6EBEBB0705c1310B8c7f/xOQmiji_eiQ8UtDutTxBcpV21gpt0MbWBj_8q0UcG4A"
              target="_blank"
              rel="noreferrer"
            >
              best songs, 2022
            </a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-pink-500">
            <a
              className="underline decoration-indigo-500"
              href="https://mirror.xyz/0xc1000fD7dd1E016Eeb4c6EBEBB0705c1310B8c7f/_kJBooWM6iTZmZZKo_QDUjnXlzzD2Mco20Kl1SBnFIc"
              target="_blank"
              rel="noreferrer"
            >
              best songs, 2021
            </a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-indigo-500">
            <a
              className="underline decoration-blue-500"
              href="https://yungyosh.substack.com/p/2020-projects-list?r=3hjnu&utm_campaign=post&utm_medium=web"
              target="_blank"
              rel="noreferrer"
            >
              best projects, 2020
            </a>
          </li>
        </ul>
        <div className="pb-1 md:pb-0"></div>
        <ul className="text-xs md:text-base flex flex-row tracking-tight md:tracking-normal space-x-1 md:space-x-2">
          <li className="transition duration-300 ease-in-out hover:text-blue-500">
            <Link href="/music">
              <a>[ music ]</a>
            </Link>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-sky-500">
            <a
              href="https://twitter.com/yungyoshh"
              target="_blank"
              rel="noreferrer"
            >
              [ tweets ]
            </a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-pink-500">
            <a
              href="https://yungyosh.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              [ writing ]
            </a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-indigo-500">
            <a
              href="https://github.com/Jfalcon93"
              target="_blank"
              rel="noreferrer"
            >
              [ code ]
            </a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-purple-500">
            <a
              href="mailto:jfalcon9319@gmail.com?subject=hey 🐧"
              target="_blank"
              rel="noreferrer"
            >
              [ email ]
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
