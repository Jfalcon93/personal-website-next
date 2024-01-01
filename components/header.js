import Head from "next/head";
import Link from "next/link";

export default function Header({ children }) {
  return (
    <>
      <div className="">
        <h2 className="hover:text-blue-500">
          <Link href="/">jordan falcon</Link>
        </h2>
        <h2>senior software engineer | fargo, nd</h2>
        <h2 className="text-gray-400">updated 01-02-2024</h2>
      </div>
    </>
  );
}
