import { useEffect } from "react";

type KeyboardCommandCallback = (key: KeyboardCommand) => void;

export default function useKeyboardCommands(fn: KeyboardCommandCallback) {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        fn("cmd-k");
      }

      switch (event.key) {
        case "Escape":
          fn("escape");
          break;
        case "Enter":
          fn("enter");
          break;
        case "ArrowDown":
          fn("down");
          break;
        case "ArrowUp":
          fn("up");
          break;
        case "ArrowLeft":
          fn("left");
          break;
        case "ArrowRight":
          fn("right");
          break;
        case "Delete":
          fn("delete");
          break;
        case "Backspace":
          fn("backspace");
          break;
      }
    });

    return () => document.removeEventListener("keydown", () => {});
  }, [fn]);
}
