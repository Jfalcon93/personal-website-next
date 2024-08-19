export default function Rating({ category, rating }) {
  const color = {
    music: "text-sky-600 hover:text-sky-500",
    books: "text-cyan-600 hover:text-cyan-500",
    writing: "text-indigo-600 hover:text-indigo-500",
    anime: "text-red-600 hover:text-red-500",
  };
  const fixedClass = `ml-2 overflow-visible inline ${color[category]}`;
  return <span className={fixedClass}>[ {rating} ]</span>;
}
