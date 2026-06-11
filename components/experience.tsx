import { SectionTitle } from "@/components/ui/section-title";
import { data } from "@/lib/data";

export function Experience() {
  return (
    <section>
      <SectionTitle>Experiencia</SectionTitle>
      <div className="space-y-7">
        {data.experience.map((job, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
              <div>
                <span className="text-base font-medium dark:text-zinc-100 text-zinc-800">
                  {job.company}
                </span>
                <span className="text-zinc-500 mx-2">·</span>
                <span className="text-base dark:text-zinc-400 text-zinc-500">{job.role}</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                {job.period} · {job.location}
              </span>
            </div>
            <ul className="space-y-1">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed dark:text-zinc-400 text-zinc-600">
                  <span className="text-zinc-600 shrink-0 mt-1.5">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
