import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState("")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
      setIcon("sun")
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        setIcon("moon")
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setIcon("moon")
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
      setIcon("sun")
    }
  };

  return (
    <button  className={"scheme-icon px-5 py-2 bg-indigo-300 dark:bg-[#2f32f8] rounded-2xl " + icon } onClick={toggleTheme}>

    </button>
  );
};

export default ThemeToggle;
