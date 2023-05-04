import Head from "next/head";
import CategoryContainer from "./categoryContainer";
import MainListContainer from "./mainListContainer";
import Category from "./category";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const colorObj = {
  default: "border-gray-400",
  music: "border-sky-200",
  books: "border-cyan-200",
  writing: "border-indigo-300",
  playlists: "border-purple-300",
  professional: "border-orange-200",
  projects: "border-blue-300",
  anime: "border-red-200",
};

export default function MainContainer() {
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useSWR("/api/notion/database", fetcher);
  const {
    data: items,
    isLoading: itemsLoading,
    error: itemsError,
  } = useSWR("api/notion/", fetcher);
  const [filteredItems, setItems] = useState(items);
  const [selectedCategory, setCategory] = useState("");
  const [selectedColor, setColor] = useState("default");
  useEffect(() => {
    setItems(items?.results);
  }, [items?.results]);
  const filterItems = (items, category) => {
    let filter = items.results.map((item) => {
      if (
        item.properties.Tags.multi_select.find(
          ({ name }) => name === category
        ) !== undefined
      ) {
        return item;
      }
    });
    let filter2 = filter.filter((item) => {
      return item !== undefined;
    });
    return filter2;
  };
  const selectCategory = (category, items) => {
    if (selectedCategory === category) {
      setCategory("");
      setItems(items?.results);
      setColor("default");
    } else {
      setCategory(category);
      setColor(category.toLowerCase());
      setItems(filterItems(items, category));
    }
  };
  const lineColor = `border ${colorObj[selectedColor]} rounded-lg w-3 ml-2`;
  return (
    <div className="my-6">
      {itemsLoading && categoriesLoading ? (
        // update with better loading screen
        <>Loading...</>
      ) : (
        <>
          <div className="mb-2 mt-2 md:mb-3 md:mt-3 text-xs md:text-base">
            {categories?.properties.Tags.multi_select.options
              .filter(
                (category) =>
                  category?.name.includes(selectedCategory) ||
                  selectedCategory === ""
              )
              .map((category, i) => {
                return (
                  <Category
                    key={i}
                    category={category.name.toLowerCase()}
                    onPress={() => selectCategory(category.name, items)}
                  />
                );
              })}
          </div>
          <div className={lineColor}></div>
          <MainListContainer
            items={filteredItems}
            category={selectedCategory}
          />
        </>
      )}
    </div>
  );
}
