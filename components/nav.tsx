import { ThemeToggle } from "@/components/theme-toggle";
import { data } from "@/lib/data";

/* const NAV_LINKS = ["objetivo laboral", "habilidades", "experiencia", "proyectos", "educación", "hobbies"]; */
const NAV_LINKS = ["objetivo laboral", "habilidades", "experiencia", "educación", "hobbies"];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm transition-colors duration-200
      dark:border-zinc-800/60 dark:bg-zinc-950/85
      border-zinc-200/80 bg-white/85">
      <div className="max-w-3xl mx-auto px-6 h-11 flex items-center justify-between">
{/*         <span className="font-mono text-sm text-zinc-500">
          {data.name.toLowerCase().replaceAll(" ", ".")}
        </span> */}
        <span className="font-mono text-sm text-zinc-500">
          L.M.Rivas
        </span>

        <div className="hidden sm:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="font-mono text-xs capitalize transition-colors
                dark:text-zinc-500 dark:hover:text-zinc-300
                text-zinc-400 hover:text-zinc-700"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
{/*           <a
            href={`mailto:${data.email}`}
            className="text-xs font-mono px-3 py-1.5 rounded border transition-all
              dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-200
              border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}
