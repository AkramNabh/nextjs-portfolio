"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import Motion from "./Motion";
type Props = {};

const ThemeButton = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Check local storage for the saved theme preference
    const savedTheme = localStorage.getItem("theme");

    // Set the theme based on local storage or a default value (e.g., 'light')
    setTheme(savedTheme || "dark");

    // Component is now mounted
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }
  return (
    <Motion delay={1} direction={""}>
      <div className="fixed md:bottom-16 md:right-20 z-50 right-8 bottom-10">
        <button
          className={`md:px-5 md:py-5 px-3 py-3 rounded-full hover:duration-300 text-lg ${
            theme === "dark"
              ? "bg-[#003566] hover:bg-[#007CBE]"
              : "bg-[#007CBE] hover:bg-[#003566]"
          } duration-300`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5 text-orange-300" />
          ) : (
            <MoonIcon className="h-5 w-5 text-slate-800" />
          )}
        </button>
      </div>
    </Motion>
  );
};

export default ThemeButton;
