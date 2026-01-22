import Circle from "../icons/circle";

export default function Header({ category }) {
  return (
    <div className="flex text-gray-400 md:text-sm text-xs">
      <div className="flex flex-col md:flex-row">
        <ul className="flex items-center">
          <li className="mr-4">
            <Circle category={category} />
          </li>
        </ul>
      </div>
      <h2 className="flex ml-auto items-center md:text-right text-indigo-600">
        v. 3.0
      </h2>
    </div>
  );
}
