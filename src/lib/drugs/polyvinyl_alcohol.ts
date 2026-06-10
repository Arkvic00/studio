import { Drug } from "@/lib/types/drug";

export const polyvinylAlcoholDrug: Drug = {
  id: "polyvinyl-alcohol",
  meta_data: {
    nombre_generico: "Alcohol polivinílico",
    nombres_comerciales: ["Liquifilm Tears", "Sno Tears"],
    grupo_farmacologico: "Lágrimas artificiales (Lacrimomimético)",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    usos_principales: "Lubricación de ojos secos.",
    puntos_clave: [
      "Mejora la lubricación de la superficie ocular, la retención de lágrimas y la comodidad del paciente mientras se inicia la terapia de lacrostimulación (ej. ciclosporina tópica).",
      "Es más adherente y menos viscoso que la hipromelosa.",
      "El cumplimiento del paciente es deficiente si se administra >q4h."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "No hay información disponible."
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
      especie: "Mamíferos",
      dosis: [{ via: "Tópico", dosis: "1 gota por ojo q1h" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "El alcohol polivinílico es una resina sintética sustituta de las lágrimas (lacrimomimético).",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución oftálmica", concentracion_texto: "1.4% (10 ml, 15 ml)" }
  ]
};