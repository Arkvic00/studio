
import { Drug } from "@/lib/types/drug";

export const vitaminK1Drug: Drug = {
  id: "vitamin-k1",
  meta_data: {
    nombre_generico: "Vitamina K1",
    nombres_comerciales: ["Phytomenadione", "Vitamine K1 Laboratoire TVM", "Konakion"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-V, NFA-VPS, POM"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de la toxicidad por cumarina y sus derivados, y antes de una biopsia hepática en pacientes con tiempos de coagulación prolongados.",
    puntos_clave: [
      "Estados de deficiencia pueden ocurrir en anorexia significativa y prolongada.",
      "Aunque es liposoluble, se comporta como hidrosoluble con una vida media corta y sin reservas significativas.",
      "Puede tardar 6-12 horas en hacer efecto.",
      "La absorción oral aumenta 4-5 veces en perros si se administra con comida enlatada, especialmente con alto contenido de grasa.",
      "El tiempo de protrombina es el mejor método para monitorear la terapia."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Usar una aguja de calibre pequeño para inyecciones s.c. o i.m. en pacientes con tendencias hemorrágicas."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Evitar la administración i.v. si es posible."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Se han reportado reacciones anafilácticas tras la administración i.v.",
      "Seguridad no documentada en animales gestantes.",
      "La sobredosis causa anemia hemolítica en gatos."
    ]
  },
  interacciones: [
    {
      farmaco: "Antagonistas de la vitamina K",
      efecto: "Muchos fármacos antagonizan los efectos de la vitamina K, incluyendo aspirina, cloranfenicol, alopurinol, diazóxido, cimetidina, metronidazol, eritromicina, itraconazol, propranolol y fármacos tiroideos.",
      severidad: "Grave"
    },
    {
      farmaco: "Aceite mineral",
      efecto: "Reduce la absorción de la vitamina K oral.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros y Gatos",
      dosis: [
        { indicacion: "Toxicidad por cumarina de 1ª generación o deficiencia de vitamina K1", via: "s.c., p.o.", dosis: "Inicialmente 2.5 mg/kg s.c. en varios sitios, luego 1–2.5 mg/kg en dosis divididas p.o. q8–12h por 5–7 días." },
        { indicacion: "Toxicidad por cumarina de 2ª generación (brodifacoum)", via: "s.c., p.o.", dosis: "Inicialmente 5 mg/kg s.c. en varios sitios, luego 2.5 mg/kg p.o. q12h por 3 semanas, luego reevaluar el estado de coagulación." },
        { indicacion: "Toxicidad por inandiona (difacinona) o anticoagulante desconocido", via: "s.c., p.o.", dosis: "Inicialmente 2.5–5 mg/kg s.c. en varios sitios. Luego 2.5 mg/kg p.o. dividido q8–12h por 3–4 semanas. Reevaluar el estado de coagulación 2 días después de suspender la terapia." },
        { indicacion: "Enfermedad hepática (pre-biopsia)", via: "s.c.", dosis: "0.5–1.0 mg/kg q12h. Después de 1–2 días reevaluar el tiempo de coagulación y si es normal proceder con la biopsia." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Involucrada en la formación de los factores de coagulación activos II, VII, IX y X por el hígado.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml." },
    { tipo: "Tabletas orales", concentracion_texto: "50 mg." }
  ]
};
