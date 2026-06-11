export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
      {children}
    </h2>
  );
}
