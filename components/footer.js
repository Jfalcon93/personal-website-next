export default function Footer() {
  return (
    <div className="sticky top-[100vh] px-0 pb-4 text-gray-600">
      <ul className="text-xs md:text-sm flex flex-row justify-between tracking-tight md:tracking-normal space-x-1 md:space-x-2">
        <li className="transition duration-300 ease-in-out hover:text-sky-500 hover:fill-sky-500">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            @yungyoshh
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-sky-500">
          🐧🤞🏽💙
        </li>
        <li className="transition duration-300 ease-in-out hover:text-indigo-500">
          <a
            href="https://github.com/Jfalcon93"
            target="_blank"
            rel="noreferrer"
          >
            @jfalcon93
          </a>
        </li>
      </ul>
    </div>
  );
}
