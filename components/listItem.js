import Rating from "./rating";
import { motion } from "framer-motion";
import {
  listItemVariants,
  linkMotionVariants,
  dateMotionVariants,
  formatDate,
} from "../utils/theme";

export default function ListItem({
  title,
  url,
  category,
  date,
  summary,
  rating,
}) {
  const target = url.includes("https://") ? "_blank" : "_self";

  // Get the first element if category is an array
  const cat = Array.isArray(category) ? category[0] : category;

  // Determine classes based on category
  const getTitleClasses = () => {
    const baseClasses = "md:text-gray-500";

    switch (cat) {
      case "music":
        return `${baseClasses} text-sky-600 md:group-hover:text-sky-600`;
      case "books":
        return `${baseClasses} text-cyan-600 md:group-hover:text-cyan-600`;
      case "writing":
        return `${baseClasses} text-indigo-600 md:group-hover:text-indigo-600`;
      case "anime":
        return `${baseClasses} text-red-600 md:group-hover:text-red-600`;
      default:
        return `${baseClasses} text-gray-600 md:group-hover:text-gray-600`;
    }
  };

  return (
    <motion.li
      className="py-1 md:py-0.5 md:w-fit md:text-sm text-xs"
      key={title}
      variants={listItemVariants}
      layout
      layoutRoot
    >
      <motion.a
        className="flex items-center group"
        href={url}
        target={target}
        rel="noreferrer"
        variants={linkMotionVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          variants={dateMotionVariants}
          className="md:hidden hidden md:pr-2 md:group-hover:inline text-gray-400"
        >
          {formatDate(date)}
        </motion.span>
        <span className={getTitleClasses()}>{title}</span>
        <motion.span
          variants={dateMotionVariants}
          className="hidden pl-2 md:group-hover:inline text-gray-400"
        >
          - {summary}
          {rating > 1 ? <Rating category={category} rating={rating} /> : ""}
        </motion.span>
      </motion.a>
    </motion.li>
  );
}
