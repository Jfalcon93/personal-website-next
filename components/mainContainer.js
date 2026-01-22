import ListItem from "./listItem";
import Conditional from "./conditional";
import Music from "./music";

export default function MainContainer({ items, category }) {
  return (
    <div className="my-4 md:my-6">
      <Conditional showWhen={category !== "music"}>
        <>
          <ul>
            {items?.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  date={
                    item.fields.createdDate != null
                      ? item.fields.createdDate
                      : ""
                  }
                  summary={
                    item.fields.summary != undefined ? item.fields.summary : ""
                  }
                  title={
                    item.fields.title != undefined ? item.fields.title : ""
                  }
                  url={item.fields.url}
                  category={item.fields.category}
                  rating={item.fields.rating}
                />
              );
            })}
          </ul>
        </>
      </Conditional>
      <Conditional showWhen={category === "music"}>
        <Music items={items}></Music>
      </Conditional>
    </div>
  );
}
