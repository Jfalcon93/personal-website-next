import { useEffect } from "react";
import Rating from "./rating";
import { motion, AnimatePresence } from "framer-motion";

export default function ListItem({
  title,
  url,
  category,
  date,
  summary,
  rating,
}) {
  const color = {
    music: "text-sky-600 md:text-gray-500 group-hover:text-sky-600",
    books: "text-cyan-600 md:text-gray-500 group-hover:text-cyan-600",
    writing: "text-indigo-600 md:text-gray-500 group-hover:text-indigo-600",
    anime: "text-red-600 md:text-gray-500 group-hover:text-red-600",
  };

  const fixedClass = `py-1 md:py-0.5 md:w-fit md:text-sm text-xs`;

  const titleClass = `${color[category]}`;

  const target = url.includes("https://") ? "_blank" : "_self";

  let formattedDate = (date) => {
    let arr = date.split("-");
    return `${arr[1]}/${arr[0].slice(2, 4)}`;
  };

  let listItem, linkMotion, dateMotion;

  listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  linkMotion = {
    rest: {
      paddingLeft: 0,
    },
    hover: {
      paddingLeft: 4,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  dateMotion = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.li
      className={fixedClass}
      key={title}
      variants={listItem}
      layout
      layoutRoot
    >
      <motion.a
        className="flex items-center group"
        href={url}
        target={target}
        rel="noreferrer"
        variants={linkMotion}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          variants={dateMotion}
          className="md:hidden hidden md:pr-2 md:group-hover:inline text-gray-400"
        >
          {formattedDate(date)}
        </motion.span>
        <span className={titleClass}>{title}</span>
        <motion.span
          variants={dateMotion}
          className="hidden pl-2 md:group-hover:inline text-gray-400"
        >
          - {summary}
          {rating > 1 ? <Rating category={category} rating={rating} /> : ""}
        </motion.span>
      </motion.a>
    </motion.li>
  );
}
