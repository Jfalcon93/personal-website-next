import Head from "next/head";
import ListItem from "./listItem";
import { motion, AnimatePresence } from "framer-motion";

export default function MainListContainer({ items, category }) {
  const filterByCategory = (item, category) => {
    return item.properties.Tags.multi_select.find(
      ({ name }) => name === category
    );
  };

  const listItemContainerVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="my-6">
      {items && (
        <AnimatePresence>
          <motion.ul
            variants={listItemContainerVariant}
            initial="hidden"
            animate="show"
          >
            {items
              ?.filter((item, id) => id < 25)
              .map((item, i) => {
                return (
                  <ListItem
                    key={i}
                    date={
                      item.properties.Date.date != null
                        ? item.properties.Date.date.start
                        : ""
                    }
                    note={
                      item.properties.Note.rich_text[0] != undefined
                        ? item.properties.Note.rich_text[0].plain_text
                        : ""
                    }
                    name={item.properties.Summary.title[0].plain_text}
                    url={item.properties.URL.url}
                    category={item.properties.Tags.multi_select}
                    selectedCategory={category}
                  />
                );
              })}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
}
