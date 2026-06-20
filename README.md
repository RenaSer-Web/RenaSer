# Rena.Ser — Sitio web (Next.js)

Rebuild del sitio de **Rena.Ser — Terapia Colónica y Tratamientos Depurativos**
(Acassuso, San Isidro, Zona Norte de Buenos Aires) sobre **Next.js 16** con App
Router, TypeScript y Tailwind CSS v4. Incluye SEO técnico, datos estructurados
(JSON-LD), optimización para motores generativos (GEO) y landings de tratamientos
orientadas a Google Ads con el formulario arriba y seguimiento de conversiones.

---

## 🔒 Nota de seguridad importante (versión de Next.js)

El pedido original mencionaba **Next.js 16.2.4 con todos los CVE parcheados**. Al
auditar, esa versión todavía arrastra varios advisories de severidad **alta**
(bypass de middleware, cache poisoning, DoS en la optimización de imágenes, SSRF,
entre otros). La versión que realmente deja esos CVE corregidos es **16.2.6**, que
es la que usa este proyecto. Además se fijó un override de `postcss@8.5.15`.

Resultado de la auditoría: **`npm audit` → 0 vulnerabilidades.**

> En resumen: tu requisito de "todos los CVE parcheados" se cumple con **16.2.6**
> (la última estable de la línea 16.2), no con 16.2.4. Si por algún motivo necesitás
> exactamente 16.2.4, avisame y lo bajamos, pero no es lo recomendado.

---

## 🚀 Puesta en marcha

Requisitos: **Node.js 20+** (probado en Node 22) y npm.

```bash
# 1) Instalar dependencias
npm install

# 2) Variables de entorno
cp .env.example .env.local
#   y completá los valores (dominio, GTM, etc.)

# 3) Desarrollo
npm run dev          # http://localhost:3000

# 4) Build de producción
npm run build
npm start
```

> **Nota sobre el entorno de desarrollo en el que se entregó:** si ves un error de
> npm por `prefix`/`globalconfig`, antes de los comandos ejecutá
> `export npm_config_prefix="$HOME/.npm-global"`. En una máquina normal no hace falta.

---

## 🗂️ Estructura

```
app/
  layout.tsx              # Layout raíz: metadata global, GTM, JSON-LD, header/footer
  page.tsx                # Home
  [tratamiento]/page.tsx  # 5 landings (terapia-colonica, limpieza-colonica, etc.)
  tratamientos/           # Listado de tratamientos
  beneficios/ faq/ historia/ contacto/
  api/contacto/route.ts   # Endpoint del formulario (POST)
  sitemap.ts robots.ts manifest.ts not-found.tsx
components/
  header, footer, contact-form, treatment-landing, sections, cta,
  icons, analytics, json-ld
lib/
  site.ts                 # ⭐ Config central: NAP, tratamientos, FAQ, testimonios, stats
  jsonld.ts               # Generadores de datos estructurados (Schema.org)
  seo.ts                  # Helper de metadata por tratamiento
public/
  llms.txt                # GEO: resumen del negocio para crawlers de IA
  og.png icon.png logo.png favicon.ico
```

**Casi todo el contenido editable vive en `lib/site.ts`** (teléfono, dirección,
tratamientos, beneficios, FAQ, testimonios). Cambiá ahí y se actualiza en todo el sitio.

---

## 🔎 SEO y GEO incluidos

- **Metadata por página**: títulos, descripciones, canonical, Open Graph y Twitter Cards.
- **JSON-LD (Schema.org)**: `MedicalBusiness`/`LocalBusiness` con NAP, geo, horarios y
  `aggregateRating`; `Person` (E-E-A-T del terapeuta); `MedicalProcedure`/`Service` por
  tratamiento; `FAQPage`; `BreadcrumbList`; `WebSite`.
- **SEO local**: dirección, zona de cobertura, mapa embebido y datos de contacto
  consistentes (importante para Google Business Profile / Maps).
- **`sitemap.xml` y `robots.txt`** dinámicos.
- **URLs con barra final** (`trailingSlash: true`) idénticas al sitio actual para no
  perder lo ya indexado.
- **GEO (Generative Engine Optimization)**: `public/llms.txt` con un resumen
  estructurado del negocio para que ChatGPT, Perplexity, Gemini, etc. puedan
  entenderlo y citarlo. Se complementa con el JSON-LD y las FAQ.

---

## 📣 Landings de tratamientos para Google Ads

Cada tratamiento (`/terapia-colonica/`, `/limpieza-colonica/`, etc.) usa una plantilla
pensada para campañas:

- **Formulario arriba (above the fold)** con un único objetivo de conversión.
- CTA de **WhatsApp** y **click-to-call** reforzando la conversión.
- Señales de confianza y prueba social cerca del formulario.
- Contenido SEO en profundidad debajo del pliegue.

### Seguimiento de conversiones

Los clics y envíos empujan eventos al `dataLayer` (vía `trackConversion()` en
`components/cta.tsx`):

- `generate_lead` → envío del formulario
- `whatsapp_click` → clic en botones de WhatsApp
- `call_click` → clic en "Llamar"

En **Google Tag Manager** creá disparadores de *Custom Event* con esos nombres y
enviálos como conversiones a **Google Ads**. Si preferís el envío directo con
`gtag`, completá `NEXT_PUBLIC_ADS_CONVERSION_LABEL` (formato `AW-XXXX/xxxx`).

---

## 🖼️ Imágenes (migración recomendada)

Hoy las fotos se sirven desde el WordPress actual (`renaserhidroterapia.com`) mediante
`next/image`, configurado en `next.config.ts` → `images.remotePatterns`.

**Recomendado:** descargá las imágenes definitivas, guardalas en `public/` (por
ejemplo `public/tratamientos/...`), actualizá las rutas en `lib/site.ts` y quitá los
`remotePatterns`. Así no dependés del WordPress y cargan más rápido.

Los assets de marca (`og.png`, `icon.png`, `logo.png`, `favicon.ico`) se generaron como
punto de partida; reemplazalos por los oficiales cuando los tengas.

---

## ✉️ Formulario de contacto

`app/api/contacto/route.ts` valida los datos y, por ahora, registra el lead en la
consola del servidor (no se pierde ninguno). Para recibirlos por email o en un CRM,
descomentá el ejemplo de **Resend** del archivo (o conectá Nodemailer, SendGrid,
Google Sheets, Airtable o WhatsApp Business API) y seteá las variables del `.env.local`.

El formulario incluye validación, honeypot anti-spam y prellenado según el tratamiento.

---

## ☁️ Deploy

Compatible con cualquier hosting Node. La opción más simple es **Vercel**:

1. Subí el repo a GitHub e importalo en Vercel.
2. Cargá las variables de entorno (las de `.env.example`).
3. Deploy. El `sitemap.xml`, `robots.txt` y las imágenes se sirven automáticamente.

Recordá apuntar el dominio y actualizar `NEXT_PUBLIC_SITE_URL`.

---

## ⚙️ Stack

Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS v4 · Fuentes self-hosted
(Fraunces + Hanken Grotesk, sin llamadas a Google Fonts).
