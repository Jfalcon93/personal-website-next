import { useEffect, useState } from "react";
import Chevron from "./icons/chevron";

export default function Dropdown({
  options,
  selectedValue,
  selectCategory,
  selectValue,
  selectRating,
  selectDate,
  category,
}) {
  const color = {
    all: "group text-gray-600 group-hover:text-gray-400",
    music: "group text-sky-600 group-hover:text-sky-400",
    books: "group text-cyan-600 group-hover:text-cyan-400",
    writing: "group text-indigo-600 group-hover:text-indigo-400",
    anime: "group text-red-600 group-hover:text-red-400",
    sort: "group text-gray-500 group-hover:text-gray-400",
  };
  const fixedClass = `${color[category]}`;
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const menuItems = options;
  const transClass = isActive ? "flex" : "hidden";
  return (
    <>
      <div className="relative group">
        <button className={fixedClass} onClick={handleClick}>
          {selectedValue}
          <Chevron color={category} />
        </button>
        <ul
          className={`absolute top-6 z-30 w-[75px] min-h-[50px] flex flex-col bg-gradient-to-r from-gray-100 to-gray-50 rounded-md ${transClass}`}
          value={selectedValue}
        >
          {menuItems.map((option) => (
            <li
              className="hover:bg-gray-200 hover:text-gray-500 cursor-pointer rounded-md px-2 py-1"
              key={option}
              value={option}
              onClick={() => {
                if (selectCategory) {
                  selectCategory(option);
                  handleClick();
                } else if (selectValue) {
                  selectValue(option);
                  handleClick();
                } else if (option === "date") {
                  console.log("date");
                  selectDate(option);
                  handleClick();
                } else if (option === "rate") {
                  console.log("rating");
                  selectRating(option);
                  handleClick();
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      {isActive ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={handleClick}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
