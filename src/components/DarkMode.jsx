import React, { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-slate-800 dark:text-slate-100 "
    >
      {isDarkMode ? (
        <MdLightMode size={27} color="white" />
      ) : (
        <MdDarkMode size={27} color="black" />
      )}
    </button>
  );
};

export default DarkModeToggle;
