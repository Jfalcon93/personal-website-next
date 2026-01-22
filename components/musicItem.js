import { motion } from "framer-motion";
import { listItemVariants } from "../utils/theme";

export default function MusicItem({ title, url }) {
  const target = url.includes("https://") ? "_blank" : "_self";

  const transformTitle = (title) => {
    if (title.includes("20")) {
      return `[ ${title.slice("2")} ]`;
    } else {
      return `${title};`;
    }
  };

  const transformedTitle = transformTitle(title);

  return (
    <motion.li
      className="py-1 md:py-0.5 pr-2 md:pr-0 md:w-fit md:text-sm text-xs"
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
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span className="text-sky-600 md:text-sky-600 group-hover:text-sky-500 hover:underline">
          {transformedTitle}
        </span>
      </motion.a>
    </motion.li>
  );
}
