import { SectionTitle } from "@/components/ui/section-title";

const HOBBIES = [
  { label: "Running",  emoji: "🏃" },
  { label: "Crossfit", emoji: "🏋️" },
  { label: "Gaming",   emoji: "🎮" },
];

export function Hobbies() {
  return (
    <section>
      <SectionTitle>Hobbies</SectionTitle>
      <div className="flex flex-wrap gap-3">
        {HOBBIES.map(({ label, emoji }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border
              dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400
              border-zinc-200 bg-zinc-50 text-zinc-500"
          >
            <span className="text-lg">{emoji}</span>
            <span className="text-sm font-mono">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
