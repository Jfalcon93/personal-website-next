import Dot from "./dot";
import Icon from "./icons/icon";
import { motion, AnimatePresence } from "framer-motion";

export default function ListItem({
  name,
  url,
  category,
  selectedCategory,
  date,
  note,
}) {
  const colorObj = {
    music: "hover:underline hover:decoration-sky-300",
    books: "hover:underline hover:decoration-cyan-300",
    writing: "hover:underline hover:decoration-indigo-400",
    playlists: "hover:underline hover:decoration-purple-400",
    professional: "hover:underline hover:decoration-orange-300",
    projects: "hover:underline hover:decoration-blue-400",
    anime: "hover:underline hover:decoration-red-300",
  };
  const fixedClass = `px-2 py-0.5 truncate w-auto md:w-fit md:text-sm text-xs`;
  let addSvg = "";
  if (name.includes("(Apple Music)")) {
    name = name.replace("(Apple Music)", "");
    addSvg = "apple";
  } else if (name.includes("(YouTube)")) {
    name = name.replace("(YouTube)", "");
    addSvg = "youtube";
  }

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const linkMotion = {
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

  const dateMotion = {
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

  let formattedDate = (date) => {
    if (date === "") {
      return "Ongoing";
    }
    let arr = date.split("-");
    return `${arr[1]}/${arr[0].slice(2, 4)}`;
  };

  return (
    <motion.li
      className={fixedClass}
      key={name}
      variants={listItem}
      layout
      layoutRoot
    >
      <motion.a
        className="flex items-center group"
        href={url}
        target="_blank"
        rel="noreferrer"
        variants={linkMotion}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          variants={dateMotion}
          className="hidden pr-2 group-hover:inline text-gray-400"
        >
          {formattedDate(date)}
        </motion.span>
        {name}
        <motion.span
          variants={dateMotion}
          className="hidden pl-2 group-hover:inline text-gray-400"
        >
          - {note}
        </motion.span>
        {addSvg != "" ? <Icon category={selectedCategory} name={addSvg} /> : ""}
        {category.map((item, i) => {
          return <Dot key={i} category={item.name.toLowerCase()} />;
        })}
      </motion.a>
    </motion.li>
  );
}
