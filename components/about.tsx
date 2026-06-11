import { SectionTitle } from "@/components/ui/section-title";
import { data } from "@/lib/data";

export function About() {
  return (
    <section>
      <SectionTitle>Objetivo Laboral</SectionTitle>
      <p className="text-base leading-relaxed max-w-2xl dark:text-zinc-400 text-zinc-600">
        {data.about}
      </p>
    </section>
  );
}
