"use client";

import { useEffect, useState } from "react";
import {
  Home, 
  Image, 
  Video, 
  Wand2,
  Wand, 
  Compass, 
  Folder, 
  Sun,
  Moon,
  Headset,
  Bell,
} from "lucide-react";

import clsx from "clsx";

const icons = [
  { id: 1, name: "Home", icon: Home },
  { id: 2, name: "Camera", icon: Image },
  { id: 3, name: "Video", icon: Video },
  { id: 4, name: "Draw", icon: Wand2 },
  { id: 5, name: "Pointer", icon: Wand },
  { id: 6, name: "Compass", icon: Compass },
  { id: 7, name: "Folder", icon: Folder },
];

export default function Navbar() {
  const [activeIcon, setActiveIcon] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // to prevent hydration mismatch

  useEffect(() => {
    setHasMounted(true);
    const savedTheme = localStorage.getItem("theme");

    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  if (!hasMounted) return null; // prevents mismatches during SSR

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 dark:border-gray-700">
      {/* Left: Logo & Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        <span className="font-semibold text-gray-800 dark:text-white text-sm hidden sm:inline">
          benevolent-intentrobot
        </span>
      </div>

      {/* Center: Icon Toolbar */}
      <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-1 overflow-x-auto">
        {icons.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              title={item.name}
              onClick={() => setActiveIcon(item.id)}
              className={clsx(
                "py-4 px-5 rounded-xl transition",
                activeIcon === item.id
                  ? "bg-white shadow dark:bg-gray-700"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <IconComponent
                className={clsx(
                  "h-5 w-5",
                  activeIcon === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-400"
                )}
                // apply fill only for specific icons
                {...(item.name === "Video" ||
                item.name === "Folder" ||
                item.name === "Draw" ||
                item.name === "Pointer"
                  ? { fill: "currentColor" }
                  : {})}
              />
            </button>
          );
        })}
      </div>

      {/* Right: Menu */}
      <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 hover:underline bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md">
            <Image className="w-6 h-6 text-primary" />
            Gallery
          </button>
          <button className="flex items-center gap-2 hover:underline bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md">
            <Headset className="w-6 h-6 text-primary" />
            Support
          </button>
        </div>
        <div className=" bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md">
          <Bell className="h-6 w-6 " fill="currentColor" />
        </div>

        <button
          onClick={toggleTheme}
          className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {!isDarkMode ? (
            <Sun className="h-6 w-6 text-gray-700" fill="currentColor" />
          ) : (
            <Moon className="h-6 w-6 text-gray-300" fill="currentColor" />
          )}
        </button>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      </div>
    </nav>
  );
}
