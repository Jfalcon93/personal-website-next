import Head from "next/head";
import Circle from "./icons/circle";
import Chevron from "./icons/chevron";
import Search from "./search";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";

export default function Header({
  count,
  searchItems,
  categories,
  category,
  sort,
  selectValue,
  selectCategory,
  selectDate,
  selectRating,
}) {
  const color = {
    all: "flex text-gray-600 md:text-sm text-xs",
    music: "flex text-sky-600 md:text-sm text-xs",
    books: "flex text-cyan-600 md:text-sm text-xs",
    writing: "flex text-indigo-600 md:text-sm text-xs",
    anime: "flex text-red-600 md:text-sm text-xs",
  };
  return (
    <>
      <div className={color[category]}>
        <div className="flex flex-col md:flex-row">
          <ul className="flex items-center">
            <li className="mr-4">
              <Circle category={category} />
            </li>
            {categories?.length > 1 ? (
              <>
                <li className="mr-4 flex items-center">
                  <Dropdown
                    options={["all", ...categories]}
                    selectedValue={category}
                    selectCategory={selectCategory}
                    category={category}
                  />
                </li>
                {category === "all" ||
                category === "music" ||
                category === "writing" ? (
                  ""
                ) : (
                  <>
                    <li className="mr-4 flex items-center">
                      <Dropdown
                        options={["date", "rate"]}
                        selectedValue={sort}
                        selectRating={selectRating}
                        selectDate={selectDate}
                        category={category}
                      />
                    </li>
                  </>
                )}
                <li className="flex items-center">[ {count} ]</li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="absolute left-2/4">
          {categories?.length > 1 ? <Search searchItems={searchItems} /> : ""}
        </div>
        <h2 className="flex ml-auto items-center md:text-right">v. 3.0</h2>
      </div>
    </>
  );
}
