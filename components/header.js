import Circle from "./icons/circle";
import Search from "./search";
import Dropdown from "./dropdown";
import { getHeaderTextClass } from "../utils/theme";

export default function Header({
  count,
  searchItems,
  categories,
  category,
  sort,
  selectCategory,
  selectDate,
  selectRating,
}) {
  return (
    <div className={getHeaderTextClass(category)}>
      <div className="flex flex-col md:flex-row">
        <ul className="flex items-center">
          <li className="mr-4">
            <Circle category={category} />
          </li>
          {categories?.length > 1 && (
            <>
              <li className="mr-4 flex items-center">
                <Dropdown
                  options={["all", ...categories]}
                  selectedValue={category}
                  selectCategory={selectCategory}
                  category={category}
                />
              </li>
              {category !== "all" &&
                category !== "music" &&
                category !== "writing" && (
                  <li className="mr-4 flex items-center">
                    <Dropdown
                      options={["date", "rate"]}
                      selectedValue={sort}
                      selectRating={selectRating}
                      selectDate={selectDate}
                      category={category}
                    />
                  </li>
                )}
              <li className="flex items-center">[ {count} ]</li>
            </>
          )}
        </ul>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        {categories?.length > 1 && <Search searchItems={searchItems} />}
      </div>
      <h2 className="flex ml-auto items-center md:text-right">v. 3.0</h2>
    </div>
  );
}
