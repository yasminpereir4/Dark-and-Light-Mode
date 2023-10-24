import classNames from "classnames";
import Moon from "./assets/moon.png";
import Sun from "./assets/sun.png";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", true);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div
      className={classNames(
        "w-full flex flex-1 items-center justify-center min-h-screen transition-colors",
        isDarkMode ? "bg-[#1E1E1E]" : "bg-[#F1F1F1]",
      )}
    >
      <button
        className="bg-black rounded-full w-[250px] relative p-2.5 h-full flex-row flex items-center"
        onClick={handleToggle}
      >
        <div
          className={classNames(
            "bg-white rounded-full w-24 h-24 z-40 transition-transform",
            isDarkMode && "translate-x-32",
          )}
        />
        <img src={Moon} className="absolute left-2.5 pointer-events-none" />
        <img src={Sun} className="absolute right-2.5 pointer-events-none" />
      </button>
    </div>
  );
}
