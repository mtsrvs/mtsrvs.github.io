import { Avatar } from "@/components/avatar";
import { IconMail, IconGithub, IconLinkedin, IconPin } from "@/components/icons";
import { data } from "@/lib/data";

export function Hero() {
  return (
    <section className="pt-16 pb-2 fade-in">
      <div className="flex items-stretch gap-6 mb-4">
        <Avatar />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-1
              dark:text-zinc-100 text-zinc-800">
              {data.name}
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-500">{data.title}</p>
          </div>

          <div className="flex flex-col gap-1.5 text-sm">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-1.5 transition-colors
                dark:text-zinc-400 dark:hover:text-zinc-100
                text-zinc-500 hover:text-zinc-800"
            >
              <IconMail /> {data.email}
            </a>
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors
                dark:text-zinc-400 dark:hover:text-zinc-100
                text-zinc-500 hover:text-zinc-800"
            >
              <IconGithub /> {data.github}
            </a>
            <a
              href={`https://www.linkedin.com/in/leandro-mat%C3%ADas-rivas-2a47b837/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors
                dark:text-zinc-400 dark:hover:text-zinc-100
                text-zinc-500 hover:text-zinc-800"
            >
              <IconLinkedin /> {data.linkedin}
            </a>
            <span className="flex items-center gap-1.5 text-zinc-500">
              <IconPin /> {data.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
