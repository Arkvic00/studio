import { Drug } from "@/lib/types/drug";

export const potassiumCitrateDrug: Drug = {
  id: "potassium-citrate",
  meta_data: {
    nombre_generico: "Citrato de potasio",
    nombres_comerciales: ["Cystopurin", "Potassium citrate BP"],
    grupo_farmacologico: "Alcalinizante urinario, suplemento de potasio",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    usos_principales: "Manejo de urolitiasis de oxalato de calcio y urato, e infecciones fúngicas del tracto urinario. Tratamiento de la hipopotasemia y algunas formas de acidosis metabólica.",
    puntos_clave: [
      "Mejora la reabsorción tubular renal de calcio y alcaliniza la orina."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Insuficiencia renal o enfermedad cardíaca."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Raras, pero pueden incluir signos gastrointestinales e hiperpotasemia."
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
      especie: "Conejos",
      dosis: [{ via: "p.o.", dosis: "33 mg/kg q8h" }]
    },
    {
      especie: "Cobayas",
      dosis: [{ via: "p.o.", dosis: "10–30 mg/kg q12h" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Mejora la reabsorción tubular renal de calcio y alcaliniza la orina.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución oral", concentracion_texto: "30%" }
  ]
};