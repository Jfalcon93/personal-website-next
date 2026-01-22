import { getRatingTextClass } from "../utils/theme";

export default function Rating({ category, rating }) {
  return <span className={`ml-2 overflow-visible inline ${getRatingTextClass(category)}`}>[ {rating} ]</span>;
}
