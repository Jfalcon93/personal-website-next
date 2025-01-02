import MusicItem from "./musicItem";

export default function Music({ items }) {
  const filterMusic = (key, arr) => {
    let yearsArr, otherArr;
    yearsArr = arr?.filter((item) => {
      if (item.fields.tags.includes(key) && item.fields.title.includes("20")) {
        return item;
      }
    });
    otherArr = arr?.filter((item) => {
      if (item.fields.tags.includes(key) && !item.fields.title.includes("20")) {
        return item;
      }
    });
    return { years: yearsArr, other: otherArr };
  };
  let apple = filterMusic("apple", items);
  let youtube = filterMusic("youtube", items);
  let unorderedListClass =
    "text-xs md:text-sm flex flex-wrap md:flex-row tracking-tight pb-2 md:pb-3 md:tracking-normal space-x-0 md:space-x-3";
  return (
    <div>
      <h3 className="pt-1 md: pt-0.5 md:mb-4 mb-2 text-gray-600 text-xs md:text-sm">
        Apple
      </h3>
      <ul className={unorderedListClass}>
        {apple.years?.map((item, i) => {
          return (
            <MusicItem
              key={i}
              url={item.fields.url}
              title={item.fields.title}
            />
          );
        })}
      </ul>
      <ul className={unorderedListClass}>
        {apple.other?.map((item, i) => {
          return (
            <MusicItem
              key={i}
              url={item.fields.url}
              title={item.fields.title}
            />
          );
        })}
      </ul>
      <h3 className="mt-2 md:mb-4 mb-2 text-gray-600 text-xs md:text-sm">
        Youtube
      </h3>
      <ul className={unorderedListClass}>
        {youtube.years?.map((item, i) => {
          return (
            <MusicItem
              key={i}
              url={item.fields.url}
              title={item.fields.title}
            />
          );
        })}
      </ul>
      <ul className={unorderedListClass}>
        {youtube.other?.map((item, i) => {
          return (
            <MusicItem
              key={i}
              url={item.fields.url}
              title={item.fields.title}
            />
          );
        })}
      </ul>
    </div>
  );
}
