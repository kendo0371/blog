"use client";

import { useEffect, useState } from "react";
import { Burger } from "../icons/burger";
import { Close } from "../icons/close";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About" },
  { href: "/news-letter", label: "Newsletter" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open menu">
        <Burger />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background p-5">
          <div className="flex justify-between">
            <div>Your Name</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <Close />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-xl">
            {links.map((link) => (
              <NavLink
                key={link.href}
                link={link.href}
                title={link.label}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>

          <div className="flex justify-center pb-10">
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
