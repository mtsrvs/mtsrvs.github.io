/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Si tu repo NO se llama "tu-usuario.github.io" (es un repo de proyecto),
  // descomentá la línea de abajo reemplazando "cv-landing" por el nombre de tu repo:
  // basePath: "/cv-landing",
  images: {
    unoptimized: true, // requerido para export estático
  },
};

export default nextConfig;
