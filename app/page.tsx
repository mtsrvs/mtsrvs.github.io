import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Hobbies } from "@/components/hobbies";
import { Footer } from "@/components/footer";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-200 dark:bg-zinc-950 bg-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-11">
        <Hero />
        <Divider />
        <div id="objetivo laboral"><About /></div>
        <Divider />
        <div id="habilidades"><Skills /></div>
        <Divider />
        <div id="experiencia"><Experience /></div>
        <Divider />
{/*         <div id="proyectos"><Projects /></div>
        <Divider /> */}
        <div id="educación"><Education /></div>
        <Divider />
        <div id="hobbies"><Hobbies /></div>
      </main>
      <Footer />
    </div>
  );
}
