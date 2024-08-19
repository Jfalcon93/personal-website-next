import Head from "next/head";
import ListItem from "./listItem";
import { useEffect, useState } from "react";

export default function MainContainer({ items, categories }) {
  return (
    <div className="my-4 md:my-6">
      {items && (
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
      )}
    </div>
  );
}
