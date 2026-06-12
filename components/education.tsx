import { SectionTitle } from "@/components/ui/section-title";
import { data } from "@/lib/data";

export function Education() {
  return (
    <section>
      <SectionTitle>Educación</SectionTitle>
      <div className="space-y-3">
        {data.education.map((edu, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5">
              <span className="text-base font-medium dark:text-zinc-100 text-zinc-800">
                {edu.school}
              </span>
              <span className="text-zinc-500 mx-2 hidden sm:inline">·</span>
              <span className="text-sm dark:text-zinc-400 text-zinc-500">{edu.degree}</span>
            </div>
            <span className="font-mono text-xs text-zinc-500">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
