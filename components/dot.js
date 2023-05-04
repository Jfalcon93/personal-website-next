export default function Dot({ category }) {
  const colorObj = {
    music: "fill-sky-300 hover:fill-sky-400",
    books: "fill-cyan-200 hover:fill-cyan-300",
    writing: "fill-indigo-300 hover:fill-indigo-400",
    playlists: "fill-purple-300 hover:fill-purple-400",
    professional: "fill-orange-200 hover:fill-orange-300",
    projects: "fill-blue-300 hover:fill-blue-400",
    anime: "fill-red-200 hover:fill-red-300",
  };
  const fixedClass = `ml-2 overflow-visible inline ${colorObj[category]}`;
  return (
    <svg className={fixedClass} width="12" height="12">
      <circle cx="50%" cy="50%" r="5" />
    </svg>
  );
}
