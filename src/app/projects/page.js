import { ProjectCard } from "./project-card";

export const instant = false;

export default async function Page() {
  const data = await fetch(
    `https://dev.to/api/articles?username=sarvar_04&per_page=5`,
  );
  const projects = await data.json();

  return (
    <div className="mx-5 md:mx-20 lg:mx-28 mb-16">
      <div className="font-bold text-4xl mb-6 text-center">List Project</div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={index % 3 === 2 ? "md:col-span-2" : ""}>
            <ProjectCard project={project} wide={index % 3 === 2} />
          </div>
        ))}
      </div>
    </div>
  );
}
