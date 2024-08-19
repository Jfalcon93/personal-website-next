import { useEffect, useRef, useState } from "react";

export default function Search({ searchItems }) {
  const inputRef = useRef(null);
  const [actionKey, setActionKey] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey("⌘K");
      } else {
        setActionKey("CtrlK");
      }
    }

    const handleKeyPress = (KeyboardEvent) => {
      let hotkey = false;
      if (typeof navigator !== "undefined") {
        if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
          hotkey = event.metaKey && event.key === "k";
        } else {
          hotkey = event.ctrlKey && event.key === "k";
        }
      }
      if (hotkey && inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="⌘ + k"
        onChange={(e) => searchItems(e.target.value)}
        className="text-sm w-32 px-4 hidden md:inline rounded-md border-0 sm:text-sm sm:leading-6"
      />
    </>
  );
}
