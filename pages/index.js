import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContainer from "../components/mainContainer";
import { useEffect, useState } from "react";
import { loadItems } from "../utils/contentful/api";

export default function Home({ items, categories }) {
  const [filteredItems, setItems] = useState(items);
  const [searchedItems, setSearchedItems] = useState();
  const [selectedCategory, setCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("sort");
  const selectCategory = (option) => {
    if ("all" === option) {
      setCategory("all");
      setSelectedValue("sort");
      setSearchInput("");
      setItems(items);
    } else {
      setCategory(option);
      setSearchInput("");
      setItems(filterItems(items, option));
      setSelectedValue("sort");
    }
  };
  const selectValue = (option) => {
    setSelectedValue(option);
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const searchedItems = filteredItems.filter((item) => {
      return item.fields.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setSearchedItems(searchedItems);
  };
  const filterItems = (items, option) => {
    let filter = items.map((item) => {
      if (item.fields.category[0] === option) {
        return item;
      }
    });
    let filter2 = filter.filter((item) => {
      return item !== undefined;
    });
    return filter2;
  };
  const selectRating = (option) => {
    let sortedByRating = filteredItems.sort((a, b) =>
      a.fields.rating === undefined
        ? 1
        : b.fields.rating === undefined
        ? -1
        : a.fields.rating < b.fields?.rating
        ? 1
        : b.fields.rating < a.fields?.rating
        ? -1
        : 0
    );
    setItems(sortedByRating);
    setSelectedValue(option);
  };
  const selectDate = (option) => {
    let sortedByDate = filteredItems.sort((a, b) => {
      let aa = a.fields?.createdDate.split("-").join("");
      let bb = b.fields?.createdDate.split("-").join("");
      return aa < bb ? 1 : bb < aa ? -1 : 0;
    });
    setItems(sortedByDate);
    setSelectedValue(option);
  };

  useEffect(() => {
    setItems(items);
  }, [items]);

  return (
    <main className="pt-3 mx-3 md:mx-6 min-h-screen">
      <Header
        count={
          searchInput !== "" ? searchedItems?.length : filteredItems?.length
        }
        categories={categories}
        searchItems={searchItems}
        selectCategory={selectCategory}
        selectValue={selectValue}
        selectDate={selectDate}
        selectRating={selectRating}
        category={selectedCategory}
        sort={selectedValue}
      />
      <MainContainer
        items={searchInput !== "" ? searchedItems : filteredItems}
        categories={categories}
      />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const items = await loadItems();

  const categoriesSet = new Set();
  for (const item of items.items) {
    if (item.fields.category) {
      categoriesSet.add(item.fields.category[0]);
    }
  }

  const categories = Array.from(categoriesSet);

  return {
    props: {
      items: items.items,
      categories: categories,
    },
  };
}
