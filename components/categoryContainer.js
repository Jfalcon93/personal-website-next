import Head from "next/head";
import Category from "./category";

export default function CategoryContainer({ categories }) {
  return (
    <div className="mb-6 mt-3 text-xs md:text-base space-y-3">
      {categories?.properties.Tags.multi_select.options.map((category, i) => {
        return <Category key={i} category={category.name.toLowerCase()} />;
      })}
    </div>
  );
}
