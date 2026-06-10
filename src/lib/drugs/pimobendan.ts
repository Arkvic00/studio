import { Drug } from "@/lib/types/drug";

export const pimobendanDrug: Drug = {
  id: "pimobendan",
  meta_data: {
    nombre_generico: "Pimobendan",
    nombres_comerciales: ["Cardisure", "Fortekor-Plus", "Pimocard", "Vetmedin"],
    grupo_farmacologico: "Inodilatador",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Insuficiencia cardíaca congestiva. Uso en especies exóticas es anecdótico.",
    puntos_clave: [
      "Inodilatador con efectos inotrópicos positivos y vasodilatadores.",
      "La presencia de alimentos puede reducir la biodisponibilidad."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en cardiomiopatía hipertrófica y en casos donde no es posible aumentar el gasto cardíaco por aumento de la contractilidad (ej. estenosis aórtica)."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Puede ocurrir un efecto cronotrópico positivo moderado y vómitos, que pueden evitarse con la reducción de la dosis."
    ]
  },
  interacciones: [
    {
      farmaco: "Beta-bloqueadores y bloqueadores de los canales de calcio (especialmente verapamilo)",
      efecto: "Atenúan los efectos inotrópicos positivos.",
      severidad: "Moderada"
    },
    {
      farmaco: "Glucósidos digitálicos",
      efecto: "No se ha observado interacción.",
      severidad: "Leve"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [{ via: "p.o.", dosis: "0.5 mg/kg q12h" }]
    },
    {
      especie: "Conejos",
      dosis: [{ via: "p.o.", dosis: "0.1–0.3 mg/kg q12–24h" }]
    },
    {
      especie: "Roedores",
      dosis: [{ via: "p.o.", dosis: "0.2–0.4 mg/kg q12h" }]
    },
    {
      especie: "Primates",
      dosis: [{ via: "p.o.", dosis: "0.2 mg/kg q24h" }]
    },
    {
      especie: "Petauros del azúcar",
      dosis: [{ via: "p.o.", dosis: "0.3–0.5 mg/kg q12h" }]
    },
    {
      especie: "Erizos",
      dosis: [{ via: "p.o.", dosis: "0.3 mg/kg q12h" }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "p.o.", dosis: "0.25 mg/kg q12h. Dosis de hasta 10 mg/kg p.o. q12h pueden ser necesarias en loros amazónicos." }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Inodilatador que produce efectos inotrópicos y vasodilatadores. Los efectos inotrópicos se median a través de la sensibilización del aparato contráctil del miocardio al calcio intracelular y por la inhibición de la fosfodiesterasa (PDE) III. La vasodilatación se media por la inhibición de PDE III y V, lo que resulta en arterio y venodilatación.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución inyectable", concentracion_texto: "0.75 mg/ml (Vetmedin)" },
    { tipo: "Oral", concentracion_texto: "Cápsulas de 5 mg o tabletas masticables de 1.25 mg, 5 mg o 10 mg (Vetmedin); tabletas saborizadas de 1.25 mg, 2.5 mg, 5 mg, 10 mg (Cardisure, Pimocard). Preparaciones compuestas con benazepril (Fortekor-Plus)." }
  ]
};