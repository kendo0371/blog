import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <>
      <header className="p-5 lg:p-28">
        <div className="flex justify-between">
          <div>Your Name</div>

          <div className="md:hidden">
            <MobileMenu />
          </div>

          <div className="hidden md:flex gap-5">
            <NavLink link="/" title="Home" />
            <NavLink link="/blog" title="Blog" />
            <NavLink link="/projects" title="Projects" />
            <NavLink link="/about-us" title="About us" />
            <NavLink link="/news-letter" title="Newsletter" />

            <ThemeToggle />
          </div>
        </div>

        <div className="text-8xl md:text-[140px] lg:text-[165px] text-center mt-10 border-t border-b md:border-b-2 md:border-t-2 lg:border-b-4 lg:border-t-4 border-border font-bold">
          THE BLOG
        </div>
      </header>
    </>
  );
}
