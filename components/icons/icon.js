import Youtube from "./youtube";
import Apple from "./apple";

export default function Icon({ name, category }) {
  let obj;
  if (name === "apple") {
    obj = <Apple category={category} />;
  } else {
    obj = <Youtube category={category} />;
  }
  return obj;
}
