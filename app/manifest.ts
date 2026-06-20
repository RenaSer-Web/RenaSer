import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rena.Ser — Terapia Colónica y Tratamientos Depurativos",
    short_name: "Rena.Ser",
    description: business.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2e8",
    theme_color: "#1f3d34",
    lang: "es-AR",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
