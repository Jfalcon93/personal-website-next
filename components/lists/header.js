import Head from "next/head";
import Circle from "../icons/circle";
import Chevron from "../icons/chevron";
import Search from "../search";
import { useEffect, useState } from "react";
import Dropdown from "../dropdown";
import Link from "next/link";

export default function Header({ category }) {
  const color = {
    writing: "flex text-gray-400 md:text-sm text-xs",
  };
  return (
    <>
      <div className={color[category]}>
        <div className="flex flex-col md:flex-row">
          <ul className="flex items-center">
            <li className="mr-4">
              <Circle category={category} />
            </li>
          </ul>
        </div>
        <h2 className="flex ml-auto items-center md:text-right text-indigo-600">
          v. 3.0
        </h2>
      </div>
    </>
  );
}
