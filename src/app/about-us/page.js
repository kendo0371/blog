import Link from "next/link";

export const instant = false;

export default async function Page() {
  const data = await fetch(
    `https://dev.to/api/users/by_username?url=sarvar_04`,
  );

  const user = await data.json();

  const bigImage = user.profile_image.replace(
    "width = 320, height = 320",
    "width = 1200, height = 600",
  );

  const skills = [
    "AWS (7x certified), Azure (2x), GCP (1x)",
    "AI Infrastructure",
    "Cloud & DevOps Strategy",
    "Technical Writing",
  ];

  const experience = [
    "Cloud Architect",
    "Technical Writer & Moderator on dev.to",
    "40K+ followers and 300K+ reads",
  ];

  const education = [];

  return (
    <div className="mx-5 md:mx-20 lg:mx-28 mb-16">
      <div className="text-4xl md:text-6xl lg:text-7xl text-center border-t border-b border-border font-bold">
        {user.name}
      </div>
      <img
        src={bigImage}
        className="w-full aspect-2/1 object-cover object-top mt-10"
      />
      <div>
        <h2 className="text-xl font-semibold mt-8 mb-2">About Me</h2>
        <p className="text-muted">{user.summary}</p>
      </div>

      <Section title="Skills: " items={skills} />
      <Section title="Experience: " items={experience} />
      <Section title="Education: " items={education} />

      <div className="flex gap-5">
        <Link
          href={`https://github.com/${user.github_username}`}
          target="_blank"
          className="hover:text-purple-200 hover:border-b border-b-purple-300">
          Github
        </Link>
        <Link
          href={`https://github.com/${user.twitter_username}`}
          target="_blank"
          className="hover:text-purple-200 hover:border-b border-b-purple-300">
          Twitter
        </Link>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc pl-5 text-muted space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
