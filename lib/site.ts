/**
 * Configuración central del sitio Rena.Ser.
 * Single source of truth para NAP (Name/Address/Phone), enlaces, SEO y datos
 * de tratamientos. Editá acá y se actualiza en todo el sitio + structured data.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://renaserhidroterapia.com"
).replace(/\/$/, "");

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-54J9V8BP";

/** ID de conversión de Google Ads (AW-XXXXXXXXX/abc...). Configurar en .env */
export const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL ?? "";

export const business = {
  name: "Rena.Ser",
  legalName: "Rena.Ser — Terapia Colónica y Tratamientos Depurativos",
  tagline: "Terapia Colónica y Tratamientos Depurativos",
  description:
    "Centro de hidroterapia colónica y tratamientos depurativos en Acassuso, San Isidro (Zona Norte, Buenos Aires). Terapia colónica indolora, segura y profesional para mejorar tu digestión, energía y bienestar.",
  // Contacto
  phoneDisplay: "+54 9 11 5579 1560",
  phoneE164: "+5491155791560",
  whatsapp: "https://wa.link/w9zuo7",
  email: "renaserterapiacolonica@gmail.com",
  // Ubicación (Name/Address/Phone consistente para SEO local)
  address: {
    street: "Carlos Pellegrini 1022",
    neighborhood: "Acassuso",
    locality: "San Isidro",
    region: "Provincia de Buenos Aires",
    regionCode: "B",
    postalCode: "B1641",
    country: "Argentina",
    countryCode: "AR",
  },
  // Coordenadas aproximadas de Carlos Pellegrini 1022, Acassuso.
  // TODO: verificá las coordenadas exactas en Google Maps antes de publicar.
  geo: { lat: -34.4869, lng: -58.5036 },
  mapsUrl: "https://maps.app.goo.gl/MB1Edyp2ozCA3wLG7",
  mapsEmbed:
    "https://www.google.com/maps?q=Carlos+Pellegrini+1022+Acassuso+San+Isidro&output=embed",
  areaServed: [
    "Acassuso",
    "San Isidro",
    "Martínez",
    "Olivos",
    "Vicente López",
    "Beccar",
    "Zona Norte",
    "CABA",
    "Buenos Aires",
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  priceRange: "$$",
  founded: "2019",
  social: {
    instagram: "https://www.instagram.com/",
  },
} as const;

export const therapist = {
  name: "Maximiliano Quinta",
  jobTitle: "Terapeuta Colónico",
  license: "Matrícula N.º 32",
  memberOf: "Asociación de Terapeutas Colónicos de la Región Sur y Asesor Nutricional formado en IATENA",
  photo: "/maximiliano.png",
  certificate: "/certificado-maximiliano-quinta.jpg",
} as const;

export const cotherapist = {
  name: "María Belén Fernández",
  jobTitle: "Co-terapeuta",
  license: "Terapeuta Colónica, Biodecodificación Emocional y Consteladora Familiar",
  photo: "/belen.png",
} as const;

export type TreatmentSlug =
  | "terapia-colonica"
  | "limpieza-colonica"
  | "limpieza-hepatica"
  | "tratamiento-desparasitante"
  | "detox-de-luna-llena";

export interface Treatment {
  slug: TreatmentSlug;
  eyebrow: string;
  name: string;
  shortName: string;
  claim: string;
  /** Meta description orientada a SEO + Google Ads */
  metaDescription: string;
  /** Keywords para metadata y para la copy de Ads */
  keywords: string[];
  image: string;
  imageAlt: string;
  /** H1 de la landing */
  heroHeadline: string;
  /** Bullets de valor para la landing de Ads */
  highlights: string[];
  /** Cuerpo en párrafos (copy propia, optimizada SEO/GEO) */
  body: string[];
  /** Bloques con subtítulo + items (para beneficios / síntomas / etapas) */
  sections?: { title: string; items: string[] }[];
  duration?: string;
  faqRef?: boolean;
}

export const treatments: Treatment[] = [
  {
    slug: "terapia-colonica",
    eyebrow: "Sesión Descubrimiento",
    name: "Terapia Colónica",
    shortName: "Terapia Colónica",
    claim: "Liberá tu cuerpo desde adentro",
    metaDescription:
      "Sesión descubrimiento de terapia colónica (hidroterapia de colon) en Acassuso, San Isidro. Tratamiento indoloro y seguro para desintoxicar, mejorar la digestión y recuperar energía. Pedí tu turno.",
    keywords: [
      "terapia colónica",
      "hidroterapia de colon",
      "limpieza de colon Acassuso",
      "hidroterapia colónica San Isidro",
      "sesión descubrimiento colónica",
      "desintoxicación colon Zona Norte",
    ],
    image:
      "/terapia-colonica-sistema-digestivo.webp",
    imageAlt:
      "Ilustración anatómica del sistema digestivo e intestinos para la terapia colónica en Rena.Ser, Acassuso",
    heroHeadline: "Terapia Colónica: tu primera sesión para sentirte liviano y con energía",
    highlights: [
      "Sesión ideal para experimentar la hidroterapia colónica por primera vez",
      "Desintoxica el organismo, mejora la digestión y aumenta la energía",
      "Tratamiento 100% indoloro y con material descartable de un solo uso",
      "Acompañamiento profesional antes, durante y después de la sesión",
    ],
    body: [
      "La sesión descubrimiento de terapia colónica está pensada para quienes quieren conocer los beneficios de la hidroterapia de colon sin comprometerse de entrada con un programa largo. En una sola visita ayudamos a tu cuerpo a eliminar residuos acumulados, favorecer un tránsito intestinal más regular y recuperar la sensación de liviandad y vitalidad.",
      "Es una excelente opción de mantenimiento: la recomendamos cada dos o tres meses, o cada vez que notes irregularidad intestinal, hinchazón o desvíos en tu alimentación. Muchas personas eligen esta primera sesión antes de avanzar hacia una limpieza profunda de tres días, ya que les permite despejar dudas y probar la técnica en un entorno tranquilo y contenido.",
      "Para potenciar los resultados sugerimos una preparación simple: una alimentación basada en frutas y verduras durante las 48 horas previas, y mantener una dieta liviana acompañada de probióticos en los días posteriores. Si buscás un efecto más profundo y duradero, el paquete de tres sesiones colónicas consecutivas ofrece una limpieza del colon mucho más completa.",
    ],
    duration: "Aprox. 1 hora por sesión",
    faqRef: true,
  },
  {
    slug: "limpieza-colonica",
    eyebrow: "Terapia Colónica Profunda",
    name: "Limpieza Profunda",
    shortName: "Terapia Colónica Profunda",
    claim: "Una desintoxicación completa en 3 sesiones",
    metaDescription:
      "Limpieza colónica profunda: paquete de 3 sesiones de hidroterapia de colon en Acassuso, San Isidro. Elimina toxinas acumuladas, mejora el tránsito intestinal y refuerza tus defensas. Consultá ahora.",
    keywords: [
      "limpieza colónica profunda",
      "3 sesiones hidroterapia de colon",
      "desintoxicación profunda colon",
      "limpieza de colon Buenos Aires",
      "hidroterapia colónica Zona Norte",
    ],
    image:
      "/limpieza-colonica-intestino.webp",
    imageAlt:
      "Ilustración médica detallada del intestino grueso e hidroterapia de colon en Rena.Ser",
    heroHeadline: "Limpieza Colónica Profunda: 3 sesiones para una desintoxicación real",
    highlights: [
      "Paquete de 3 sesiones colónicas para una limpieza completa del sistema digestivo",
      "Elimina toxinas y residuos antiguos acumulados durante años",
      "Mejora el tránsito intestinal y alivia el estreñimiento",
      "Refuerza el sistema inmunológico y aumenta tu energía",
    ],
    body: [
      "El paquete de limpieza colónica profunda reúne tres sesiones de hidroterapia de colon diseñadas para una desintoxicación más completa y efectiva. Recomendamos realizarlas en días consecutivos para arrastrar las toxinas más antiguas, esas que se acumulan durante años por una alimentación inadecuada, el estrés y otros hábitos poco saludables.",
      "A lo largo del programa vas a notar cómo el cuerpo recupera ritmo y liviandad: el tránsito intestinal se ordena, la hinchazón disminuye y la sensación de bienestar general aumenta sesión a sesión. Para que los resultados duren en el tiempo, acompañamos el tratamiento con recomendaciones de una dieta depurativa personalizada.",
    ],
    sections: [
      {
        title: "Beneficios de la limpieza profunda",
        items: [
          "Limpieza completa del sistema digestivo",
          "Eliminación profunda de toxinas y residuos antiguos",
          "Mejora del tránsito intestinal y alivio del estreñimiento",
          "Refuerzo del sistema inmunológico",
          "Aumento de la energía y sensación de bienestar",
        ],
      },
    ],
    duration: "3 sesiones (ideal en días consecutivos)",
    faqRef: true,
  },
  {
    slug: "limpieza-hepatica",
    eyebrow: "Limpieza Hepática",
    name: "Limpieza Hepática",
    shortName: "Limpieza Hepática",
    claim: "Un hígado sano es un cuerpo sin enfermedades",
    metaDescription:
      "Limpieza hepática en Acassuso, San Isidro: programa de 10 días con 3 sesiones de hidroterapia colónica para eliminar cálculos biliares y toxinas. Más energía, mejor digestión y claridad mental.",
    keywords: [
      "limpieza hepática",
      "limpieza de hígado",
      "cálculos biliares tratamiento natural",
      "depuración hepática Buenos Aires",
      "limpieza hígado y vesícula",
    ],
    image:
      "/limpieza-hepatica-bienestar.jpg",
    imageAlt: "Mujer disfrutando del bienestar y la vitalidad tras completar el tratamiento de limpieza hepática profunda en Rena.Ser",
    heroHeadline: "Limpieza Hepática: depurá tu hígado y recuperá tu energía",
    highlights: [
      "Programa de 10 días con 3 sesiones de hidroterapia colónica (2 previas y 1 posterior)",
      "Ayuda a eliminar cálculos biliares y toxinas acumuladas",
      "Mejora la función del hígado, la vesícula, el páncreas, los riñones y el colon",
      "Incremento de energía, claridad mental y mejor digestión",
    ],
    body: [
      "La limpieza hepática es un programa integral de diez días que prepara a tu hígado para liberar cálculos biliares y toxinas. Incluye tres sesiones de hidroterapia colónica —dos antes y una después de la limpieza— para que el proceso depurativo sea más profundo y mejore no solo la función hepática, sino también la de la vesícula, el páncreas, los riñones y el colon.",
      "Para la medicina china el hígado es el gran organizador de nuestra energía, y al mismo tiempo es uno de los órganos más castigados por el estilo de vida actual. Por eso esta limpieza resulta clave para mejorar la salud y el bienestar general.",
      "El proceso comienza con seis días de preparación durante los cuales podés mantener tu rutina habitual. En esa etapa seguís una dieta especial, rica en ácido málico para ablandar y disolver las piedras, y baja en grasas y almidones para predisponer al hígado. Luego sugerimos desconectarte de las actividades cotidianas y conectarte con tu cuerpo en un estado de relajación durante la limpieza.",
      "Muchas personas experimentan una mejora notable en el funcionamiento del hígado desde la primera limpieza, con más energía, menos dolores y mayor claridad mental. Es una herramienta poderosa y natural para mejorar tu salud integral.",
    ],
    sections: [
      {
        title: "Beneficios destacados",
        items: [
          "Alivio de dolores crónicos",
          "Incremento de energía y claridad mental",
          "Mejora digestiva y reducción de hinchazón",
          "Purificación de la sangre y mejora celular",
        ],
      },
      {
        title: "Síntomas que indican que puede ayudarte",
        items: [
          "Dolor de espalda, cabeza u oído",
          "Colesterol alto o hipertensión",
          "Problemas digestivos o hinchazón",
          "Irritabilidad, enojo o depresión",
          "Presencia de tumores o nódulos",
          "Problemas de fertilidad",
          "Acidez o hernias",
          "Hígado graso",
          "Cansancio extremo",
        ],
      },
    ],
    duration: "Programa de 10 días + 3 sesiones colónicas",
    faqRef: true,
  },
  {
    slug: "tratamiento-desparasitante",
    eyebrow: "Tratamiento Desparasitante",
    name: "Desparasitación Natural",
    shortName: "Tratamiento Desparasitante",
    claim: "Desparasitación natural en 1 mes, sin efectos secundarios",
    metaDescription:
      "Tratamiento desparasitante natural de 1 mes en Acassuso, San Isidro: terapia colónica + tinturas madre orgánicas y orientación alimentaria. Efectivo contra más de cien parásitos, sin efectos secundarios.",
    keywords: [
      "tratamiento desparasitante natural",
      "desparasitación con plantas",
      "tinturas madre antiparasitarias",
      "eliminar parásitos naturalmente",
      "desparasitación y terapia colónica",
    ],
    image:
      "/desparasitacion-natural-intestino.jpg",
    imageAlt:
      "Ilustración tridimensional del tracto digestivo e intestinos para el tratamiento desparasitante natural en Rena.Ser",
    heroHeadline: "Desparasitación Natural: un programa de 1 mes con plantas medicinales",
    highlights: [
      "Programa de 1 mes que combina terapia colónica y tinturas madre orgánicas",
      "2 tinturas a base de plantas seleccionadas para combatir parásitos",
      "Orientación alimentaria + 3 sesiones para depurar el colon",
      "Efectivo en más de cien parásitos y sin efectos secundarios",
    ],
    body: [
      "Este programa de desparasitación natural combina la hidroterapia colónica con tinturas orgánicas a base de plantas medicinales. Está diseñado para que, a lo largo de un mes, realices una desparasitación profunda con dos tinturas madre elaboradas con plantas seleccionadas para combatir parásitos.",
      "El tratamiento incluye orientación alimentaria, tres sesiones para depurar el colon y la desparasitación con tinturas. Te explicamos desde el comienzo qué alimentos fortalecen a los parásitos y cuáles ayudan a desvitalizar a estos organismos, dando énfasis al consumo de alimentos con reconocido efecto antiparasitario en paralelo con las tinturas. Todo el material teórico te lo enviamos por WhatsApp o email.",
      "Como en todos los casos, ningún medicamento es capaz de superar a la naturaleza: el tratamiento natural resulta efectivo en más de un centenar de parásitos y sin efectos secundarios. En las sesiones de lavaje de colon incorporamos al agua elementos como el vinagre de manzana y la tintura de ajo para profundizar la desparasitación.",
    ],
    sections: [
      {
        title: "Cómo se organiza el mes",
        items: [
          "Semana 1: alimentación y propóleo",
          "Semana 2: alimentación, tintura antiparasitaria y 1.ª terapia colónica",
          "Semana 3: alimentación, tintura y 2.ª terapia colónica",
          "Semana 4: alimentación, propóleo y 3.ª terapia colónica",
        ],
      },
    ],
    duration: "Programa de 1 mes",
    faqRef: true,
  },
  {
    slug: "detox-de-luna-llena",
    eyebrow: "Programa Online",
    name: "Detox de Luna Llena",
    shortName: "Detox de Luna Llena",
    claim: "3 días de ayuno con jugos naturales, en grupo y online",
    metaDescription:
      "Detox de Luna Llena: programa online de 3 días de ayuno a base de jugos naturales, con encuentros grupales por Zoom y 3 niveles de intensidad. Recalibrá cuerpo, mente y energía. Sumate al próximo grupo.",
    keywords: [
      "detox de luna llena",
      "ayuno con jugos naturales",
      "programa detox online",
      "ayuno grupal Zoom",
      "depuración con jugos verdes",
    ],
    image:
      "/jugos-naturales-detox-luna-llena.jpg",
    imageAlt: "Variedad de jugos naturales, frutas frescas y batidos saludables para el programa depurativo Detox de Luna Llena de Rena.Ser",
    heroHeadline: "Detox de Luna Llena: 3 días para recalibrar cuerpo, mente y energía",
    highlights: [
      "Programa online de 3 días de ayuno a base de jugos naturales",
      "Encuentros diarios por Zoom para compartir la experiencia en grupo",
      "3 niveles de intensidad según tu experiencia previa con el ayuno",
      "Si no podés asistir a un encuentro, queda grabado",
    ],
    body: [
      "El Detox de Luna Llena es un proceso depurativo de tres días en el que buscamos un ajuste o recalibración a nivel físico, mental y energético. Durante el programa la alimentación queda reducida a jugos, frutas, licuados, sopas, infusiones, ensaladas y verduras cocidas.",
      "Lo hacemos en comunidad: cada día nos encontramos vía Zoom (en un horario a combinar) para compartir experiencias y darnos fuerzas para atravesar el proceso juntos. Llevar adelante este tipo de procesos en grupo hace toda la diferencia, y si no podés participar de algún encuentro, queda grabado para que lo veas cuando quieras.",
      "El programa propone tres niveles para que cada persona elija según su experiencia y la intensidad deseada.",
    ],
    sections: [
      {
        title: "Niveles del programa",
        items: [
          "Nivel 1 (el más profundo, para quienes ya tienen experiencia en detox o ayunos): la ingesta se reduce a líquidos en forma de jugos y agua.",
          "Nivel 2 (intensidad intermedia): incorpora licuados y sopas además de jugos y agua.",
          "Nivel 3 (intensidad suave, ideal si nunca ayunaste): suma monodietas de frutas enteras, verduras crudas o cocidas, licuados, sopas y ensaladas.",
        ],
      },
    ],
    duration: "3 días · online por Zoom",
    faqRef: false,
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export const navTreatments = treatments.map((t) => ({
  href: `/${t.slug}/`,
  label: t.shortName,
}));

export const mainNav = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos/", label: "Tratamientos", children: navTreatments },
  { href: "/beneficios/", label: "Beneficios" },
  { href: "/faq/", label: "Preguntas frecuentes" },
  { href: "/historia/", label: "Historia" },
];

export const homeBenefits: { title: string; text: string }[] = [
  {
    title: "Patologías digestivas",
    text: "Ayuda a aliviar estreñimiento, distensión abdominal, diarreas crónicas, colitis y colon irritable, favoreciendo un tránsito intestinal más saludable.",
  },
  {
    title: "Sistema inmunológico",
    text: "Contribuye a mejorar las defensas, reduciendo alergias, infecciones recurrentes y problemas cutáneos como acné y psoriasis.",
  },
  {
    title: "Bienestar emocional",
    text: "Alivia trastornos del ánimo y de conducta, incluyendo ansiedad, irritabilidad y estrés.",
  },
  {
    title: "Mejor descanso",
    text: "Facilita la reducción de cefaleas, migrañas y fatiga crónica, promoviendo un sueño reparador.",
  },
  {
    title: "Desintoxicación",
    text: "Ideal para complementar programas de rehabilitación y acompañar procesos de intoxicación por drogas, alcohol y tabaco.",
  },
  {
    title: "Beneficios estéticos",
    text: "Acompaña el abordaje de la obesidad, la celulitis y la flacidez, mejorando la apariencia general del cuerpo.",
  },
  {
    title: "Flora intestinal",
    text: "Especialmente útil tras el uso prolongado de antibióticos, ayudando a restablecer el equilibrio de la microbiota.",
  },
  {
    title: "Apoyo en pérdida de peso",
    text: "Ayuda a maximizar resultados en programas de descenso de peso y a desbloquear el metabolismo.",
  },
  {
    title: "Preparación para estudios",
    text: "Facilita la limpieza del colon antes de procedimientos diagnósticos, para una evaluación más precisa.",
  },
  {
    title: "Prevención",
    text: "Reduce el riesgo de infecciones y complicaciones prequirúrgicas, contribuyendo a una recuperación más rápida.",
  },
];

export const stats = [
  { value: "82%", label: "Mejoró su tránsito intestinal y abandonó los laxantes" },
  { value: "87%", label: "Alivió los síntomas del colon irritable" },
  { value: "97%", label: "Nota mejorías al salir de la primera sesión" },
  { value: "100%", label: "De nuestros pacientes nos recomienda" },
];

export const trustBadges = [
  { title: "Tratamiento indoloro", icon: "feather" },
  { title: "Método 100% seguro", icon: "shield" },
  { title: "Terapia saludable", icon: "leaf" },
  { title: "Profesionalismo", icon: "award" },
];

export const testimonials = [
  {
    name: "Lorena",
    text: "Infinitas gracias por tan buen acompañamiento en este proceso tan profundo y sanador de raíz. Sin dudas lo recomendaré.",
  },
  {
    name: "Miguel",
    text: "Impecable RenaSer. Quedé muy contento con el tratamiento, sentí inmediatamente un cambio a nivel físico, emocional y mental.",
  },
  {
    name: "Luis",
    text: "Solo puedo dar gracias por haberme permitido experimentar los colónicos y el tratamiento hepático. ¡Recomiendo!",
  },
  {
    name: "Malena",
    text: "Impecabilidad en todo, tanto de los profesionales como del consultorio. Mi marido y yo, renovados al 100%. ¡Gracias Maxi!",
  },
];

export interface FaqItem {
  q: string;
  a: string[];
}

export const faqs: FaqItem[] = [
  {
    q: "¿En qué consiste la hidroterapia colónica?",
    a: [
      "Es un tratamiento que realiza una limpieza completa del intestino grueso mediante un flujo de agua a baja presión y a temperatura corporal, controlado por un equipo especialmente diseñado. Además de ser indoloro y seguro, ayuda a barrer gérmenes patógenos y residuos acumulados en las paredes intestinales, regularizando el ciclo intestinal y favoreciendo una desintoxicación profunda del organismo.",
    ],
  },
  {
    q: "¿El tratamiento es doloroso?",
    a: [
      "No. El agua, junto con los suplementos, se introduce a muy baja presión, por lo que no genera dolor. Es un procedimiento suave y bien tolerado.",
    ],
  },
  {
    q: "¿Existe algún riesgo en el tratamiento?",
    a: [
      "Es una terapia muy segura. El agua se introduce a baja presión, los materiales son descartables (de un solo uso) y, a diferencia de los laxantes, la hidroterapia colónica no genera hábito y mejora la tonicidad de la pared muscular del colon.",
    ],
  },
  {
    q: "¿Cuáles son las principales contraindicaciones?",
    a: [
      "Entre las contraindicaciones se incluyen: embarazo; hemorroides de grado avanzado, fisura anal u otras patologías anales que impidan introducir la cánula o que provoquen sangrado; diverticulitis; ciertas patologías abdominales como enfermedad de Crohn, colitis ulcerosa o abdomen agudo; cardiopatías severas; y enfermedades del hígado como cirrosis o insuficiencia renal. También cirugía o radioterapia abdominal o rectal recientes.",
      "Además, aunque es una terapia sin riesgos, recomendamos una consulta previa en casos de: cirugía abdominal o de colon reciente (menos de 6 meses), colitis ulcerativa, edad avanzada con deterioro físico marcado, problemas renales severos, fístulas anales, perforaciones intestinales, hernias prominentes, enfermedad cardíaca grave o cáncer de recto o colon.",
    ],
  },
  {
    q: "¿Puedo realizar un lavaje teniendo hemorroides?",
    a: [
      "Mientras no haya sangrado, se pueden realizar sesiones de hidroterapia. En grados agudos lo aconsejable es primero mejorar la situación con supervisión médica y el cambio alimentario correspondiente. Una vez que las condiciones mejoran, se pueden tomar sesiones sin problemas siempre que no haya dolor al introducir la cánula ni sangrado.",
    ],
  },
  {
    q: "¿Puede la hidroterapia colónica mejorar el estado de mi piel?",
    a: [
      "Sí. La piel también funciona como un sistema excretor de toxinas. Cuando el colon, el hígado y los riñones no cumplen bien esa función, es la piel la que la asume, lo que puede manifestarse en erupciones, eccemas o manchas. Una adecuada limpieza y función del colon contribuye a mantener la piel más limpia y saludable.",
    ],
  },
  {
    q: "¿Se pueden realizar tratamientos durante el período menstrual?",
    a: [
      "Sí, en los casos en que no exista molestia ni complicación. Algunas mujeres prefieren no hacerlo durante el primer o segundo día por comodidad, y en ese caso agendan su sesión para los días posteriores.",
    ],
  },
  {
    q: "¿Presentaré alguna alteración intestinal posterior a la sesión?",
    a: [
      "Habitualmente no. Inmediatamente después de la sesión podés sentir algo de fatiga o cansancio, por lo que se recomienda realizar una actividad moderada el resto del día.",
    ],
  },
  {
    q: "¿Cuándo conviene hacerse una terapia colónica?",
    a: [
      "Hay muchas razones para realizarla, y es importante no esperar a un colapso: conviene tomar sesiones de mantenimiento cuando sea necesario. Es un buen momento cuando atravesamos un desafío personal, un duelo, un cambio de trabajo o una mudanza; también al iniciar un proceso detox con monodietas o ayunos de jugos verdes, o antes y después de una limpieza hepática. Con el tiempo afinamos la percepción del propio cuerpo y aprendemos a reconocer cuándo lo necesitamos.",
    ],
  },
  {
    q: "¿Es vergonzoso realizarse una terapia colónica?",
    a: [
      "No. Cada paciente es recibido y contenido con una charla previa. La sesión se realiza en un cuarto privado: el terapeuta explica y ayuda a recostarse en la camilla y, una vez iniciada la terapia, el paciente queda cómodo y totalmente cubierto con un toallón, sin exponer ninguna parte de su cuerpo. El terapeuta permanece atento durante todo el tratamiento y disponible ante cualquier necesidad.",
    ],
  },
  {
    q: "¿Es lo mismo la hidroterapia colónica que un enema?",
    a: [
      "No. Los enemas evacuantes solo limpian una porción mínima del colon, mientras que la hidroterapia colónica realiza una limpieza completa del intestino grueso.",
    ],
  },
  {
    q: "¿Cuánto dura el tratamiento?",
    a: [
      "Cada sesión dura aproximadamente una hora. Incluimos el tiempo previo necesario para despejar dudas antes de ingresar a la camilla y, una vez finalizada, un margen para conversar: la limpieza del intestino se complementa con recomendaciones que elevan la calidad de vida de cada paciente.",
    ],
  },
  {
    q: "¿El material utilizado es descartable?",
    a: [
      "Sí, se utiliza material descartable y realizamos una esterilización total del consultorio después de cada sesión.",
    ],
  },
  {
    q: "¿Debo prepararme previamente para una sesión?",
    a: [
      "Se recomienda tomar abundante agua (unos 2 litros) durante las 24 horas previas y una ingesta normal —no excesiva— de vegetales crudos o cocidos, sopas, compotas, licuados e infusiones en las horas previas. No es necesario ningún ayuno previo para realizarla.",
    ],
  },
];
