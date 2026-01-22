import Link from "next/link";

export default function Footer({ slug, yearLinks = [] }) {
  const currentIndex = yearLinks.indexOf(slug);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < yearLinks.length - 1;
  const previousYear = hasPrevious ? yearLinks[currentIndex - 1] : null;
  const nextYear = hasNext ? yearLinks[currentIndex + 1] : null;

  const currentYear = slug?.match(/\d{4}/)?.[0];
  const shortYear = currentYear ? currentYear.slice(2) : "";

  return (
    <div className="sticky top-[100vh] px-0 pb-4 text-gray-600">
      <ul className="text-xs md:text-sm flex flex-row tracking-tight md:tracking-normal">
        <li className="transition duration-300 ease-in-out hover:text-sky-500 hover:fill-sky-500 flex-1 text-left">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            @yungyoshh
          </a>
        </li>
        <li className="flex items-center justify-center space-x-2 flex-shrink-0">
          {hasPrevious ? (
            <Link href={`/lists/${previousYear}`}>
              <a className="text-gray-400 hover:text-indigo-600 transition duration-300 ease-in-out">
                &larr;
              </a>
            </Link>
          ) : (
            <span className="text-transparent select-none">&larr;</span>
          )}
          <span className="text-indigo-600 text-xs md:text-sm">[ {shortYear} ]</span>
          {hasNext ? (
            <Link href={`/lists/${nextYear}`}>
              <a className="text-gray-400 hover:text-indigo-600 transition duration-300 ease-in-out">
                &rarr;
              </a>
            </Link>
          ) : (
            <span className="text-transparent select-none">&rarr;</span>
          )}
        </li>
        <li className="transition duration-300 ease-in-out hover:text-indigo-500 flex-1 text-right">
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
