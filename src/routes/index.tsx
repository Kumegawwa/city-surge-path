import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenWave Emergency · Onda Verde Inteligente para Emergências" },
      {
        name: "description",
        content:
          "GreenWave Emergency sincroniza semáforos em tempo real para criar uma Onda Verde Inteligente para ambulâncias, SAMU e bombeiros — reduzindo o tempo de resposta em até 55%.",
      },
      { property: "og:title", content: "GreenWave Emergency · Smart City para salvar vidas" },
      {
        property: "og:description",
        content:
          "Plataforma GovTech que sincroniza semáforos em tempo real para acelerar veículos de emergência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});
