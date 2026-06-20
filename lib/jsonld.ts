/**
 * Generadores de datos estructurados (schema.org / JSON-LD).
 * Sirven tanto para SEO clásico (rich results de Google) como para GEO
 * (Generative Engine Optimization): los motores con IA usan estas entidades
 * para entender y citar el negocio con precisión.
 */
import { SITE_URL, business, therapist, treatments, faqs, stats, type Treatment } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#maximiliano-quinta`;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: `${business.address.neighborhood}, ${business.address.locality}`,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.countryCode,
  };
}

function openingHoursSpec() {
  return business.openingHours.map((o) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: o.days,
    opens: o.opens,
    closes: o.closes,
  }));
}

/** Negocio local de salud — entidad principal del sitio. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: therapist.photo,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: business.priceRange,
    foundingDate: business.founded,
    currenciesAccepted: "ARS",
    paymentAccepted: "Efectivo, Transferencia, Tarjeta",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: business.mapsUrl,
    openingHoursSpecification: openingHoursSpec(),
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    employee: { "@id": PERSON_ID },
    founder: { "@id": PERSON_ID },
    medicalSpecialty: "Hydrotherapy",
    sameAs: [business.mapsUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
    },
    makesOffer: treatments.map((t) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: t.shortName,
        url: `${SITE_URL}/${t.slug}/`,
      },
    })),
  };
}

/** Sitio web (habilita sitelinks / búsqueda). */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: business.name,
    inLanguage: "es-AR",
    publisher: { "@id": ORG_ID },
  };
}

/** Profesional a cargo — refuerza E-E-A-T (experiencia/autoridad). */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: therapist.name,
    jobTitle: therapist.jobTitle,
    image: therapist.photo,
    worksFor: { "@id": ORG_ID },
    memberOf: { "@type": "Organization", name: therapist.memberOf },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `${therapist.jobTitle} — ${therapist.license}`,
    },
  };
}

/** Servicio / procedimiento médico para cada tratamiento. */
export function treatmentJsonLd(t: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalProcedure", "Service"],
    name: t.shortName,
    alternateName: t.name,
    description: t.metaDescription,
    url: `${SITE_URL}/${t.slug}/`,
    image: t.image,
    procedureType: "Noninvasive",
    bodyLocation: "Colon",
    provider: { "@id": ORG_ID },
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: business.phoneE164,
      serviceUrl: business.whatsapp,
    },
  };
}

/** Migas de pan para jerarquía y rich results. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** FAQ — apto para rich results y muy valioso para GEO (respuestas citables). */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  };
}

export function reviewsJsonLd(reviews: { name: string; text: string }[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": ORG_ID },
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text,
  }));
}

/** Inserta uno o varios objetos JSON-LD como string seguro. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export { stats };
