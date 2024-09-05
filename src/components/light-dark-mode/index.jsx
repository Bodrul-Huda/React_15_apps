import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div
      className={`min-w-full min-h-screen ${
        theme === "dark" ? "bg-black " : "bg-white"
      }`}
    >
      <div className="container mx-auto py-64">
        <p
          className={`my-8 font-semibold text-4xl ${
            theme === "dark" ? "text-white " : "text-black"
          }`}
        >
          Theame Changer
        </p>
        <button
          className={`py-2 px-4 rounded-md ${
            theme === "dark" ? "bg-white " : "bg-black text-white "
          }`}
          onClick={() => handleToggleTheme()}
        >
          {theme === "dark" ? "Change light" : "Change dark"}
        </button>
      </div>
    </div>
  );
}
