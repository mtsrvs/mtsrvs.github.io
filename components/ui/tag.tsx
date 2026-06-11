export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono rounded border
      dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700/60
      bg-zinc-100 text-zinc-500 border-zinc-200">
      {label}
    </span>
  );
}
