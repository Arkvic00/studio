
import { Drug } from "@/lib/types/drug";

export const vitaminBComplexDrug: Drug = {
  id: "vitamin-b-complex",
  meta_data: {
    nombre_generico: "Complejo de Vitamina B",
    nombres_comerciales: ["Anivit 4BC", "Dupharal", "Duphafral Extravite", "Multivitamin injection", "Vitamin B tablets"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-VPS, venta general"
  },
  resumen_clinico: {
    usos_principales: "Suplemento en deficiencias múltiples de vitaminas B, comunes en enfermedad renal, hepática o anorexia significativa.",
    puntos_clave: [
      "La administración parenteral de vitaminas B no sustituye el soporte nutricional.",
      "Las dosis y vías varían; revisar las recomendaciones del fabricante.",
      "Muchos productos son para animales grandes y pueden contener otras vitaminas o minerales."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Las vitaminas B son fotosensibles; proteger de la luz.",
      "Los viales multidosis requieren técnica aséptica."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Anafilaxia con uso i.v.; administrar lentamente y/o diluido.",
      "El uso de productos para animales grandes con vitaminas liposolubles (A, D, E, K) puede causar toxicidad."
    ]
  },
  interacciones: [
    {
      farmaco: "Ninguno reportado",
      efecto: "",
      severidad: "N/A"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "s.c., i.m., i.v.", dosis: "1 ml/perro (hasta 15 kg), 2–4 ml/perro (>15 kg) q24h" }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "s.c., i.m., i.v.", dosis: "1 ml/gato q24h o según sea necesario" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Cofactores para enzimas del metabolismo intermedio y la biosíntesis.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Varias preparaciones", concentracion_texto: "Cantidades variables de vitaminas, autorizadas solo para animales de granja. La mayoría para uso parenteral y son POM-VPS." }
  ]
};
