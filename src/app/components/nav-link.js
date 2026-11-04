"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ link, title, onClick }) {
  const pathname = usePathname();
  const active = link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <Link
      href={link}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`border-b-2 transition-colors hover:text-purple-400 ${
        active ?
          "font-semibold text-purple-500 border-purple-500"
        : "border-transparent hover:border-purple-500"
      }`}>
      {title}
    </Link>
  );
}
