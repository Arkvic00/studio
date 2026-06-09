import type { Drug } from '@/lib/types';

export const terbinafineDrug: Drug = {
  id: "terbinafine",
  meta_data: {
    nombre_generico: "Terbinafina",
    nombres_comerciales: ["Osurnia", "Lamisil"],
    grupo_farmacologico: "Antifúngico (Alilamina)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ergosterol mediante la inhibición de la escualeno epoxidasa.",
      "Efecto fungicida contra dermatofitos y fungistático contra levaduras (Malassezia).",
      "Altamente lipofílica y queratinofílica; se acumula en piel, pelo y garras.",
      "Autorizado en perros para otitis externa aguda en combinación (Osurnia).",
      "Requiere tratamiento prolongado en dermatofitosis sistémica."
    ],
    usos_principales: "Tratamiento de dermatofitosis (tiñas), dermatitis por Malassezia y otitis externa fúngica.",
    inicio_accion: "Rápido (acumulación tisular)",
    duracion_efecto: "7 días (Osurnia) o persistente en piel"
  },
  informacion_cliente: [
    "Informe si nota vómitos o si la piel se ve más irritada.",
    "El tratamiento para hongos suele durar varias semanas.",
    "En uso ótico (Osurnia), no limpie el oído hasta que el veterinario lo indique.",
    "Puede administrarse con o sin comida."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatofitosis / Malassezia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Otitis externa (Osurnia)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "tubo por oído (1.2 g)"
        },
        frecuencia: { texto_ui: "Una dosis, repetir a los 7 días", intervalo_horas: 168 }
      }
    ],
    gato: [
      {
        indicacion: "Dermatofitosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal o hepática severa.",
      "Tímpano perforado (uso ótico).",
      "Animales destinados a la cría."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Elevación de enzimas hepáticas.",
      "Prurito (gatos).",
      "Sordera transitoria en perros geriátricos (inusual)."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos largos",
      "Resolución de lesiones cutáneas"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos", "Ictericia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea la síntesis de ergosterol en una etapa temprana, causando acumulación de escualeno tóxico para el hongo.",
    farmacocinetica: "Absorción oral buena. Altamente acumulativa en tejidos ricos en queratina."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Gel ótico (Osurnia)", concentracion_texto: "10 mg Terb. (+ Florfenicol/Betamet.)", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: false }
  ]
};
