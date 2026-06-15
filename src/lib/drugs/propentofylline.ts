import type { Drug } from '../drugs.types';

export const propentofyllineDrug: Drug = {
    id: "propentofylline",
    meta_data: {
      nombre_generico: "Propentofilina",
      nombres_comerciales: ["Canergy", "Vitofyllin", "Vivitonin"],
      grupo_farmacologico: "Vasodilatador (Derivado de Xantina)",
      status_regulatorio: "POM-V",
    },
    resumen_clinico: {
      puntos_clave: [
        "Derivado de xantina que mejora el flujo sanguíneo al corazón, músculos y SNC.",
        "Inhibe la fosfodiesterasa, tiene efectos antiarrítmicos, broncodilatadores, inotrópicos y cronotrópicos positivos.",
        "Uso anecdótico en rapaces para edema de punta de ala y en loros para peritonitis por yema de huevo.",
        "Puede ser útil en el tratamiento de pododermatitis (bumblefoot) en rapaces.",
      ],
      usos_principales: "Mejora de la circulación periférica y cerebral. Uso anécdotico en diversas condiciones en aves exóticas.",
      inicio_accion: "Variable",
      duracion_efecto: "Variable",
    },
    informacion_cliente: [
      "Administrar según las indicaciones del veterinario.",
    ],
    farmacologia_y_seguridad: {
      farmacodinamia: "Inhibe la fosfodiesterasa, aumentando el flujo sanguíneo al corazón, músculos y SNC. También tiene efectos antiarrítmicos, broncodilatadores, inotrópicos y cronotrópicos positivos, inhibe la agregación plaquetaria y reduce la resistencia vascular periférica.",
      contraindicaciones: [],
      efectos_adversos: [
        "Puede aumentar la demanda de oxígeno del miocardio.",
      ],
      interacciones_farmacologicas: [],
      monitoreo_recomendado: ["Vigilar la función cardíaca, especialmente en pacientes con enfermedades preexistentes."],
      instrucciones_manejo: "Observar precauciones normales.",
      sobredosis: {},
    },
    parametros_dosificacion: {
      aves: [
        { especie: "General", via: "p.o.", dosis: "5 mg/kg", frecuencia: "q12h", notas: "Uso anécdotico en rapaces para edema de punta de ala y disfunción cognitiva; en loros para peritonitis por yema de huevo; y en rapaces para pododermatitis." },
      ],
    },
    presentaciones_comerciales: [
      { tipo: "Oral", concentracion_texto: "50 mg, 100 mg tabletas", es_divisible: true },
    ]
  };