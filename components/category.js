import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function Category({ category, filter, onPress }) {
  const colorObj = {
    music: "bg-sky-200 hover:bg-sky-300",
    books: "bg-cyan-200 hover:bg-cyan-300",
    writing: "bg-indigo-300 hover:bg-indigo-400",
    playlists: "bg-purple-300 hover:bg-purple-400",
    professional: "bg-orange-200 hover:bg-orange-300",
    projects: "bg-blue-300 hover:bg-blue-400",
    anime: "bg-red-200 hover:bg-red-300",
  };
  const fixedClass = `px-2 py-0.5 mr-3 mb-3 ${colorObj[category]} btn rounded-lg relative`;
  return (
    <motion.button
      key={category}
      className={fixedClass}
      onClick={onPress}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {category}
    </motion.button>
  );
}
