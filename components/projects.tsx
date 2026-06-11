import { SectionTitle } from "@/components/ui/section-title";
import { Tag } from "@/components/ui/tag";
import { IconArrow } from "@/components/icons";
import { data } from "@/lib/data";

export function Projects() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.projects.map((project, i) => (
          <a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-lg border transition-all
              dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900
              border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-sm transition-colors
                dark:text-zinc-100 dark:group-hover:text-white
                text-zinc-800 group-hover:text-zinc-900">
                {project.name}
              </span>
              <IconArrow className="transition-colors dark:text-zinc-700 dark:group-hover:text-zinc-400 text-zinc-400 group-hover:text-zinc-600" />
            </div>
            <p className="text-xs leading-relaxed mb-3 dark:text-zinc-500 text-zinc-500">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
