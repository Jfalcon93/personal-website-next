import { useState } from "react";
import Chevron from "./icons/chevron";
import { getDropdownTextClass } from "../utils/theme";

export default function Dropdown({
  options,
  selectedValue,
  selectCategory,
  selectValue,
  selectRating,
  selectDate,
  category,
}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="relative group">
        <button className={getDropdownTextClass(category)} onClick={handleClick}>
          {selectedValue}
          <Chevron color={category} />
        </button>
        <ul
          className={`absolute top-6 z-30 w-[75px] min-h-[50px] flex flex-col bg-gradient-to-r from-gray-100 to-gray-50 rounded-md ${isActive ? "flex" : "hidden"}`}
          value={selectedValue}
        >
          {options.map((option) => (
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
                  selectDate(option);
                  handleClick();
                } else if (option === "rate") {
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
      {isActive && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={handleClick}
        ></div>
      )}
    </>
  );
}
