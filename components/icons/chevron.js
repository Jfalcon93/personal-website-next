export default function Chevron({ color }) {
  const colorObj = {
    all: "fill-gray-600 group-hover:fill-gray-400",
    music: "fill-sky-600 group-hover:fill-sky-400",
    books: "fill-cyan-600 group-hover:fill-cyan-400",
    writing: "fill-indigo-600 group-hover:fill-indigo-400",
    anime: "fill-red-600 group-hover:fill-red-400",
    sort: "fill-gray-500 group-hover:fill-gray-400",
  };
  const fixedClass = `ml-1 overflow-visible inline ${colorObj[color]}`;
  return (
    <svg className={fixedClass} width="12" height="12" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.22739 4.10251C2.33285 3.99717 2.47582 3.938 2.62488 3.938C2.77395 3.938 2.91692 3.99717 3.02238 4.10251L5.99988 7.08001L8.97738 4.10251C9.02888 4.04724 9.09098 4.00291 9.15998 3.97217C9.22898 3.94143 9.30347 3.9249 9.37899 3.92356C9.45452 3.92223 9.52954 3.93612 9.59958 3.96441C9.66962 3.99271 9.73325 4.03481 9.78666 4.08823C9.84008 4.14164 9.88219 4.20527 9.91048 4.27531C9.93877 4.34535 9.95266 4.42037 9.95133 4.4959C9.95 4.57143 9.93346 4.64591 9.90272 4.71491C9.87198 4.78391 9.82765 4.84601 9.77238 4.89751L6.39739 8.27251C6.29192 8.37784 6.14895 8.43701 5.99988 8.43701C5.85082 8.43701 5.70785 8.37784 5.60239 8.27251L2.22739 4.89751C2.12205 4.79204 2.06288 4.64907 2.06288 4.50001C2.06288 4.35094 2.12205 4.20798 2.22739 4.10251Z"
      />
    </svg>
  );
}
