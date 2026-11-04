import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col-reverse md:flex-row m-auto mt-10 md:m-8 gap-3 text-center text-muted">
        <span>© 2023</span>
        <div className="flex flex-col gap-3 md:flex-row gap">
          <Links link="https://www.twitter.com" title="Twitter" />
          <Links link="https://www.linkedin.com/" title="LinkedIn" />
          <Links link="#" title="Email" />
          <Links link="#" title="RSS feed" />
          <Links link="#" title="Add to Feedly" />
        </div>
      </footer>
    </>
  );
}

function Links({ link, title }) {
  return (
    <Link className="hover:border-b hover:text-foreground" href={link}>
      {title}
    </Link>
  );
}
