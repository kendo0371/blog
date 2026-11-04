"use client";

import { useSyncExternalStore } from "react";
import { Moon } from "../icons/moon";
import { Sun } from "../icons/sun";

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex gap-1 p-1 rounded-full bg-foreground text-background cursor-pointer">
      <span className="flex h-8 w-8 items-center justify-center">
        <Sun />
      </span>
      <span className="flex h-8 w-8 items-center justify-center">
        <Moon />
      </span>
      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full bg-background transition-transform duration-300 ${dark ? "translate-x-9" : "translate-x-0"}`}
      />
    </button>
  );
}
