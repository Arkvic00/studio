import { Drug } from "@/lib/types/drug";

export const phenoxyethanolDrug: Drug = {
  id: "phenoxyethanol",
  meta_data: {
    nombre_generico: "Fenoxietanol",
    nombres_comerciales: ["Ethylene glycol monophenyl ether", "Phenoxetol", "Aqua-sed", "Koi Sedate"],
    grupo_farmacologico: "Anestésico para peces",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    usos_principales: "Sedación, inmovilización, anestesia y eutanasia de peces.",
    puntos_clave: [
      "Requiere agitación vigorosa en el agua para mejorar la solubilidad.",
      "No se acumula en los tejidos de los peces.",
      "Considerado más seguro y potente a bajas temperaturas.",
      "Tiene algunas propiedades antibacterianas."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Irritante. Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Tiempo de inducción prolongado.",
      "Hiperactividad durante la inducción y la recuperación.",
      "Margen de seguridad estrecho en algunas especies.",
      "Actividad muscular involuntaria durante la anestesia."
    ]
  },
  interacciones: [
    {
      farmaco: "No hay información disponible",
      efecto: "",
      severidad: "N/A"
    }
  ],
  dosis: [
    {
      especie: "Peces",
      dosis: [
        { indicacion: "Anestesia", via: "Inmersión", dosis: "0.1–0.5 ml/l, seguir recomendaciones del fabricante.", notas: "" },
        { indicacion: "Eutanasia", via: "Inmersión", dosis: "2.0 ml/l.", notas: "" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "El mecanismo de acción preciso es desconocido, pero puede implicar un efecto sobre las membranas de las células nerviosas y suprimir la actividad en el SNC.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido para inmersión", concentracion_texto: "100%" }
  ]
};