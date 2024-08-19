import Link from "next/link";

export default function Circle({ category }) {
  const color = {
    all: "stroke-gray-600 hover:stroke-gray-400",
    music: "stroke-sky-600 hover:stroke-sky-400",
    books: "stroke-cyan-600 hover:stroke-cyan-400",
    writing: "stroke-indigo-600 hover:stroke-indigo-400",
    anime: "stroke-red-600 hover:stroke-red-400",
  };
  const fillColor = {
    all: "fill-gray-600 group-hover:fill-gray-400",
    music: "fill-sky-600 group-hover:fill-sky-400",
    books: "fill-cyan-600 group-hover:fill-cyan-400",
    writing: "fill-indigo-600 group-hover:fill-indigo-400",
    anime: "fill-red-600 group-hover:fill-red-400",
  };
  const fixedClass = `overflow-visible inline ${color[category]}`;
  const fillClass = `${fillColor[category]}`;
  return (
    <Link href="/">
      <svg className={fixedClass} width="24" height="24" fill="none">
        <circle cx="12" cy="12" r="11.5" />
        <path
          className={fillClass}
          d="M13.9001 12C13.9001 13.0493 13.0494 13.9 12.0001 13.9C10.9508 13.9 10.1001 13.0493 10.1001 12C10.1001 10.9506 10.9508 10.1 12.0001 10.1C13.0494 10.1 13.9001 10.9506 13.9001 12Z"
        />
      </svg>
    </Link>
  );
}
