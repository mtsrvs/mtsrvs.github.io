import { SectionTitle } from "@/components/ui/section-title";
import { Tag } from "@/components/ui/tag";
import { data } from "@/lib/data";

export function Skills() {
  return (
    <section>
      <SectionTitle>Habilidades</SectionTitle>
      <div className="space-y-3">
        {Object.entries(data.skills).map(([category, items]) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
            <span className="text-xs font-mono text-zinc-500 sm:w-32 shrink-0 pt-0.5">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
