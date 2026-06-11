import Image from "next/image";
import { data } from "@/lib/data";

export function Avatar() {
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (data.photo) {
    return (
      <Image
        src={data.photo}
        alt={data.name}
        width={200}
        height={200}
        className="w-48 h-48 rounded-xl object-cover ring-2 dark:ring-zinc-700 ring-zinc-200 shrink-0"
      />
    );
  }

  return (
    <div className="w-48 h-48 rounded-xl shrink-0 flex items-center justify-center
      ring-2 font-mono text-xl font-medium select-none
      dark:bg-zinc-800 dark:ring-zinc-700 dark:text-zinc-400
      bg-zinc-100 ring-zinc-200 text-zinc-500">
      {initials}
    </div>
  );
}
