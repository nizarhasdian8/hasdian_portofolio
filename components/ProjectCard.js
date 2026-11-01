import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="relative aspect-video bg-zinc-800">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="p-5">
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {project.tool}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>
    </article>
  );
}