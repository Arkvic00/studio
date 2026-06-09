import type { Drug } from '@/lib/types';

export const itraconazoleDrug: Drug = {
  id: "itraconazole",
  meta_data: {
    nombre_generico: "Itraconazol",
    nombres_comerciales: ["Fungitraxx", "Itrafungol", "Sporanox"],
    grupo_farmacologico: "Antifúngico triazólico",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe los sistemas de citocromo involucrados en la síntesis de ergosterol fúngico.",
      "Amplia distribución corporal, pero niveles bajos en LCR, fluido ocular y saliva.",
      "Autorizado en gatos para el tratamiento de Microsporum canis (tiña).",
      "En aves tiene un margen de seguridad estrecho; suspender si hay vómitos o anorexia.",
      "Los Loros Grises (Yacos) son muy sensibles y toleran mal este fármaco.",
      "Potente inhibidor del metabolismo de muchos otros fármacos."
    ],
    usos_principales: "Tratamiento de aspergilosis, candidiasis, blastomicosis, criptococosis, dermatofitosis y Malassezia. Quitridiomicosis en anfibios y micosis sistémicas en peces.",
    inicio_accion: "Variable",
    duracion_efecto: "Prolongada; requiere tratamiento de 4 a 20 semanas"
  },
  informacion_cliente: [
    "Utilice guantes para administrar el medicamento (especialmente la solución oral en gatos).",
    "Informe inmediatamente si nota pérdida de apetito, vómitos, apatía o hinchazón en las patas.",
    "El tratamiento para hongos es muy largo; no lo suspenda antes de tiempo aunque el animal parezca curado.",
    "No usar en animales embarazados.",
    "Informe al veterinario de cualquier otro medicamento que esté recibiendo su mascota."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Micosis sistémicas / Piel",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Continuar hasta que el cultivo sea negativo. Puede requerir hasta 20 semanas."
      }
    ],
    gato: [
      {
        indicacion: "Dermatofitosis (Microsporum canis)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "7 días de tratamiento / 7 días descanso (repetir 3 ciclos)", intervalo_horas: 24 },
        notas_tecnicas: "Protocolo de pulsos para Itrafungol. No requiere rasurado en gatos Persas."
      },
      {
        indicacion: "Micosis sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Dermatofitosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Dermatofitosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 15 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Aspergilosis pulmonar",
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
    ],
    roedores: [
      {
        indicacion: "Micosis (Ratas/Ratones)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.25,
          dosis_min: 2.5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    primates: [
      {
        indicacion: "Dermatofitosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Gastroenteritis fúngica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Aspergilosis (Tratamiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas por 8 semanas", intervalo_horas: 12 },
        notas_tecnicas: "En rapaces pueden usarse hasta 20 mg/kg. PRECAUCIÓN en Loros Grises (Yacos): evitar o usar con precaución extrema."
      },
      {
        indicacion: "Aspergilosis (Profilaxis en riesgo)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (iniciar 5 días antes del estrés)", intervalo_horas: 24 }
      },
      {
        indicacion: "Candidiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 14 días", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Micosis sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Quitridiomicosis",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.0025,
          unidad_calculo: "% (Solución en Ringer anfibios)"
        },
        duracion_tratamiento: "5 minutos diarios por 6 días",
        notas_tecnicas: "Equivale a 2.5 ml de Sporanox 1% en 1L de Ringer. No usar con larvas."
      }
    ],
    peces: [
      {
        indicacion: "Micosis sistémicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 1 a 7 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación (Efectos teratogénicos).",
      "Enfermedad hepática preexistente.",
      "Gatos: No usar junto con cefovecina o ácido tolfenámico."
    ],
    contraindicaciones_especie: {
      "Gato": "Evitar uso conjunto con Convenia o Toltedín.",
      "Ave (Yaco)": "Alta sensibilidad; evitar o usar con precaución extrema a dosis mínima."
    },
    efectos_adversos: [
      "Vómitos, anorexia y diarrea.",
      "Hepatotoxicidad (ictericia).",
      "Dermatitis ulcerativa.",
      "Edema de extremidades.",
      "Supresión adrenal dosis-dependiente.",
      "Aves: Vómitos (signo de toxicidad, suspender)."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas mensualmente",
      "Función adrenal en tratamientos largos",
      "Apetito en aves"
    ],
    instrucciones_manejo: "Administrar preferiblemente con comida para mejorar absorción (cápsulas).",
    sobredosis: {
      signos: ["Vómitos severos", "Apatía", "Anorexia"],
      tratamiento: "Soporte sintomático y hepático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "Itraconazol aumenta drásticamente su biodisponibilidad y toxicidad.", severidad: "Grave" },
      { farmaco: "Digoxina / Benzodiazepinas / Vincristina", efecto: "Itraconazol aumenta sus niveles plasmáticos.", severidad: "Importante" },
      { farmaco: "Antiácidos / Omeprazol / Sucralfato", efecto: "Reducen la absorción de itraconazol.", severidad: "Importante" },
      { farmaco: "Metilprednisolona", efecto: "Itraconazol prolonga su actividad.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la enzima 14-alfa-desmetilasa fúngica, bloqueando la síntesis de ergosterol.",
    farmacocinetica: "Altamente lipofílico. Alta unión a proteínas. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Solución oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Cápsulas", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: false }
  ]
};