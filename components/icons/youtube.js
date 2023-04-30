export default function Youtube({ category }) {
  const colorObj = {
    music: "group-hover:fill-sky-200",
    books: "group-hover:fill-cyan-200",
    writing: "group-hover:fill-indigo-300",
    playlists: "group-hover:fill-purple-300",
    professional: "group-hover:fill-orange-200",
    projects: "group-hover:fill-blue-300",
    anime: "group-hover:fill-red-200",
    "": "group-hover:fill-gray-500",
  };
  const fixedClass = `inline ml-1 fill-gray-400 ${
    colorObj[category.toLowerCase()]
  }`;
  return (
    <svg
      className={fixedClass}
      width="24"
      height="16"
      fill="none"
      viewBox="0 0 28 20"
    >
      <path d="M27.416 3.253A3.51 3.51 0 0 0 24.94.775C22.756.187 14 .187 14 .187s-8.756 0-10.94.585A3.504 3.504 0 0 0 .583 3.25C0 5.438 0 10 0 10s0 4.563.584 6.747a3.51 3.51 0 0 0 2.475 2.478c2.185.587 10.941.587 10.941.587s8.756 0 10.94-.587a3.504 3.504 0 0 0 2.476-2.478C28 14.563 28 10 28 10s0-4.563-.584-6.747ZM11.219 14.187V5.813l7.25 4.156-7.25 4.219Z" />
    </svg>
  );
}
