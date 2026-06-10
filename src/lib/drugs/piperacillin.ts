import { Drug } from "@/lib/types/drug";

export const piperacillinDrug: Drug = {
  id: "piperacillin",
  meta_data: {
    nombre_generico: "Piperacilina",
    nombres_comerciales: ["Tazocin"],
    grupo_farmacologico: "Antibiótico beta-lactámico (ureidopenicilina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Infecciones potencialmente mortales (ej. endocarditis, septicemia) donde las pruebas de cultivo y sensibilidad predicen una respuesta clínica. Activo contra Pseudomonas aeruginosa y Bacteroides fragilis.",
    puntos_clave: [
      "Reservado para infecciones graves en pacientes neutropénicos.",
      "Usualmente combinado con un inhibidor de beta-lactamasa (tazobactam).",
      "La experiencia en especies veterinarias es limitada."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Evitar en animales con sensibilidad conocida a las penicilinas.",
      "No administrar a conejos, cobayas, chinchillas, hámsters, jerbos o degús (riesgo de enterotoxemia fatal)."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Náuseas, diarrea y erupciones cutáneas.",
      "Doloroso si se administra por inyección i.m.",
      "El contenido de sodio puede ser clínicamente importante para pacientes con dietas restringidas en sodio."
    ]
  },
  interacciones: [
    {
      farmaco: "Relajantes musculares no despolarizantes",
      efecto: "Potencia los efectos.",
      severidad: "Moderada"
    },
    {
      farmaco: "Gentamicina",
      efecto: "Inactiva la piperacilina si se mezcla en la misma jeringa. Sinergismo con aminoglucósidos.",
      severidad: "Leve"
    }
  ],
  dosis: [
    {
      especie: "Erizos",
      dosis: [{ via: "s.c.", dosis: "10 mg/kg q8–12h" }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "i.m., i.v.", dosis: "100 mg/kg q12h" }]
    },
    {
      especie: "Quelonios, Lagartos",
      dosis: [{ via: "i.m.", dosis: "50–100 mg/kg q24h durante 7–14 días" }, { via: "Nebulización", dosis: "100 mg de piperacilina diluida en 10 ml de solución salina durante 15–20 min q8–12h" }]
    },
    {
      especie: "Pitones de sangre",
      dosis: [{ via: "i.m.", dosis: "<100 mg/kg q48h" }]
    },
    {
      especie: "Anfibios",
      dosis: [{ via: "s.c., i.m.", dosis: "100 mg/kg q24h" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Los antibióticos beta-lactámicos se unen a las proteínas de unión a penicilina implicadas en la síntesis de la pared celular, disminuyendo la fuerza y rigidez de la pared celular bacteriana y afectando la división celular, el crecimiento y la formación del septo.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo para inyección", concentracion_texto: "2.25 g, 4.5 g (2 g o 4 g de piperacilina sódica + 0.25 g o 0.5 g de tazobactam)" }
  ]
};