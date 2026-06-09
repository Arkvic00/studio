import type { Drug } from '@/lib/types';

export const atropinaDrug: Drug = {
  id: "atropina",
  meta_data: {
    nombre_generico: "Atropina (Sulfato de Atropina)",
    nombres_comerciales: ["Atrocare", "Atropine Sulfate"],
    grupo_farmacologico: "Anticolinérgico; Antimuscarínico",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la acción de la acetilcolina en los receptores muscarínicos.",
      "Produce taquicardia, midriasis, broncodilatación e inhibición de la función GI.",
      "Inicio de acción lento (10 min IM, 2-3 min IV). Esperar antes de redosificar.",
      "No se recomienda su uso rutinario en premedicación; reservar para manejar bradicardia.",
      "En conejos y algunos roedores, la eficacia puede reducirse por la presencia de atropinasa plasmática.",
      "El uso oftálmico es ineficaz en aves y reptiles debido a la musculatura estriada del iris."
    ],
    usos_principales: "Prevención o corrección de bradicardia y bradiarritmias. Dilatación pupilar (mamíferos). Manejo de intoxicación por organofosforados y carbamatos. Antagonismo de bloqueo neuromuscular.",
    inicio_accion: "2-3 min (IV), 10 min (IM)",
    duracion_efecto: "Corta (requiere monitoreo continuo)"
  },
  informacion_cliente: [
    "La solución oftálmica es muy amarga y puede causar babeo intenso (ptialismo) en gatos.",
    "No contiene conservantes; desechar cualquier sobrante tras su apertura.",
    "Proteger de la luz solar.",
    "Vigilar si el animal presenta estreñimiento o dificultad para orinar tras el tratamiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bradiarritmias",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.02, dosis_min: 0.01, dosis_max: 0.03, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Dosis bajas pueden causar bradicardia paradójica. Repetir si es necesario para aumentar la FC."
      },
      {
        indicacion: "Prevención de bradicardia (con opioides potentes)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.035, dosis_min: 0.03, dosis_max: 0.04, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Intoxicación por Organofosforados",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.35, dosis_min: 0.2, dosis_max: 0.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar 1/4 dosis IV y el resto IM/SC. Repetir según efecto."
      },
      {
        indicacion: "Antagonismo de bloqueo neuromuscular",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.04, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar con edrofonio (0.5-1 mg/kg)."
      },
      {
        indicacion: "Oftálmico (Mydriasis)",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "gota" },
        frecuencia: { texto_ui: "Cada 12-24h para inducir, luego cada 24-96h mantenimiento", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Bradiarritmias / Emergencia",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.02, dosis_min: 0.01, dosis_max: 0.03, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Intoxicación por Organofosforados",
        vias: ["IV", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.15, dosis_min: 0.1, dosis_max: 0.2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Administrar 1/2 dosis IV y 1/2 IM, luego IM cada 6h."
      }
    ],
    huron: [
      {
        indicacion: "Premedicación / Bradicardia",
        vias: ["SC", "IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.03, dosis_min: 0.02, dosis_max: 0.04, unidad_calculo: "mg/kg" }
      }
    ],
    conejo: [
      {
        indicacion: "Anticolinérgico",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Presencia de atropinasa plasmática; puede requerir repetir dosis cada 10-15 min."
      }
    ],
    cobaya: [
      {
        indicacion: "Dosis general",
        vias: ["SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.15, dosis_min: 0.1, dosis_max: 0.2, unidad_calculo: "mg/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas/Ratones: Intoxicación Organofosforados",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, dosis_max: 10, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 20 minutos según sea necesario", intervalo_horas: 0.33 }
      }
    ],
    ave: [
      {
        indicacion: "Intoxicación por Organofosforados",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.27, dosis_min: 0.04, dosis_max: 0.5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      },
      {
        indicacion: "Bradycardia supraventricular",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.015, dosis_min: 0.01, dosis_max: 0.02, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    reptil: [
      {
        indicacion: "Bradiarritmias / Bradicardia",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.025, dosis_min: 0.01, dosis_max: 0.04, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Puede ser ineficaz en iguanas verdes. Riesgo de íleo prolongado."
      }
    ],
    axolote: [
      {
        indicacion: "Toxicidad por Organofosforados",
        vias: ["SC", "IM", "IV", "Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.1, unidad_calculo: "mg/kg" }
      }
    ],
    peces: [
      {
        indicacion: "Toxicidad por Organofosforados",
        vias: ["SC", "IM", "IV", "Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.3, dosis_min: 0.1, dosis_max: 0.5, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma.",
      "Luxación de cristalino.",
      "Queratoconjuntivitis seca (KCS)."
    ],
    contraindicaciones_especie: {
      "Ave": "Uso oftálmico INEFICAZ.",
      "Reptil": "Uso oftálmico INEFICAZ. Riesgo de íleo paralítico prolongado.",
      "Conejo": "Eficacia REDUCIDA por atropinasa plasmática."
    },
    efectos_adversos: [
      "Taquicardia sinusal.",
      "Visión borrosa por midriasis.",
      "Sequedad de secreciones bronquiales.",
      "Aumento de presión intraocular.",
      "Reducción de producción de lágrima.",
      "Íleo paralítico (especialmente en reptiles)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Presión intraocular",
      "Producción de lágrima (en uso oftálmico)"
    ],
    instrucciones_manejo: "Proteger de la luz. No mezclar con bicarbonato sódico ni noradrenalina.",
    sobredosis: {
      signos: ["Taquicardia severa", "Arritmias ventriculares", "Sedación profunda o excitación"],
      tratamiento: "Lidocaína para arritmias ventriculares si son graves. Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Agonistas Alfa-2", efecto: "Combinación NO RECOMENDADA.", severidad: "Grave" },
      { farmaco: "Amitraz", efecto: "Agrava hipertensión y estasis intestinal.", severidad: "Importante" },
      { farmaco: "Antihistamínicos / Benzodiazepinas", efecto: "Potencian la actividad de la atropina.", severidad: "Moderada" },
      { farmaco: "Bicarbonato Sódico", efecto: "Incompatible en mezcla física.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de la acetilcolina en los receptores muscarínicos post-ganglionares del sistema nervioso parasimpático.",
    farmacocinetica: "Eliminación hepática y renal. Atraviesa la barrera hematoencefálica y placentaria."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "0.6 mg/ml", valor_concentracion: 0.6, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución Oftálmica", concentracion_texto: "1%", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};