export default function Apple({ category }) {
  const colorObj = {
    music: "group-hover:fill-sky-200",
    books: "group-hover:fill-cyan-200",
    writing: "group-hover:fill-indigo-300",
    playlists: "group-hover:fill-purple-300",
    professional: "group-hover:fill-orange-200",
    projects: "group-hover:fill-blue-300",
    anime: "group-hover:fill-red-200",
    "": "group-hover:fill-gray-500",
  };
  const fixedClass = `inline ml-1 fill-gray-400 ${
    colorObj[category.toLowerCase()]
  }`;
  return (
    <svg className={fixedClass} width="16" height="16" viewBox="0 0 20 20">
      <path d="M19.992 5.105a7.64 7.64 0 0 0-.199-1.827c-.264-1.09-.886-1.924-1.816-2.535A4.192 4.192 0 0 0 16.41.137a8.347 8.347 0 0 0-1.3-.124c-.032-.003-.068-.01-.104-.013H4.986c-.127.01-.254.016-.38.023-.622.035-1.24.1-1.827.335C1.666.797.862 1.565.393 2.672c-.162.374-.244.771-.302 1.175a8.225 8.225 0 0 0-.085.983c0 .026-.006.052-.006.078v10.186l.02.352c.042.68.13 1.354.416 1.98.54 1.182 1.449 1.959 2.696 2.333.348.108.713.157 1.077.19A14.3 14.3 0 0 0 5.596 20h9.192c.437 0 .873-.03 1.309-.084.687-.088 1.331-.29 1.914-.674a4.213 4.213 0 0 0 1.566-1.84c.156-.352.244-.725.31-1.103.094-.563.113-1.133.113-1.703-.003-3.164 0-6.328-.003-9.493l-.005.002ZM14.64 8.428v4.76c0 .347-.049.69-.205 1.005-.24.491-.631.8-1.155.95-.29.084-.59.132-.892.144a1.55 1.55 0 0 1-1.618-1.28 1.563 1.563 0 0 1 .865-1.686c.267-.13.557-.208.847-.267.315-.068.63-.13.943-.202a.515.515 0 0 0 .426-.43.653.653 0 0 0 .017-.16V6.726a.624.624 0 0 0-.023-.153c-.032-.127-.124-.202-.254-.196-.133.007-.263.03-.393.056-.635.124-1.27.25-1.902.38l-3.082.623c-.013.003-.03.01-.042.01-.232.065-.313.169-.323.41-.003.035 0 .071 0 .107-.003 2.168 0 4.337-.003 6.504 0 .352-.04.697-.179 1.022-.231.534-.641.87-1.194 1.029a3.64 3.64 0 0 1-.899.143 1.534 1.534 0 0 1-1.598-1.286 1.558 1.558 0 0 1 .96-1.732c.3-.123.609-.192.924-.257l.717-.146c.318-.068.485-.27.5-.596V5.117c0-.104.014-.208.037-.31.058-.237.228-.374.455-.43.212-.055.43-.094.644-.14.612-.123 1.221-.247 1.833-.368l1.891-.384c.56-.11 1.116-.224 1.676-.335.183-.036.368-.075.553-.088.257-.023.437.14.463.4.006.062.01.124.01.186v4.776l.001.004Z" />
    </svg>
  );
}