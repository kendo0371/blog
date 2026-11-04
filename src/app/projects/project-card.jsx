import Link from "next/link";
import stc from "string-to-color";
import { darken, lighten } from "color2k";
import { ArrowUpRight } from "../icons/arrow-up-right";

export function ProjectCard({ project, wide }) {
  return (
    <Link href={`/blog/${project.id}`} className="group flex flex-col gap-3">
      <img
        src={project.social_image}
        alt={project.title}
        className={`w-full object-cover ${wide ? "aspect-video md:aspect-2/1" : "aspect-video"}`}
      />

      <div className="flex justify-between gap-4">
        <h3 className="font-semibold text-lg group-hover:underline">
          {project.title}
        </h3>
        <span className="shrink-0">
          <ArrowUpRight />
        </span>
      </div>

      <p className="text-muted text-sm line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tag_list?.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: lighten(stc(tag), 0.2),
              color: darken(stc(tag), 0.25),
            }}
            className="text-xs px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
