import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantiene las URLs con barra final, idénticas al sitio actual (evita
  // redirecciones y preserva el SEO de los enlaces ya indexados).
  trailingSlash: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Imágenes servidas desde el WordPress actual mientras se migran a /public.
    // TODO: al subir las imágenes definitivas a /public, podés quitar estos patrones.
    remotePatterns: [
      { protocol: "https", hostname: "renaserhidroterapia.com" },
      { protocol: "https", hostname: "www.renaserhidroterapia.com" },
    ],
  },

  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
