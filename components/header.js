import Head from "next/head";

export default function Header({ children }) {
  return (
    <>
      <div className="">
        <h2>jordan falcon</h2>
        <h2>software engineer | fargo, nd</h2>
        <h2 className="text-gray-400">updated 05-04-2023</h2>
      </div>
    </>
  );
}
