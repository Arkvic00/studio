import type { Drug } from '@/lib/types';

export const domperidoneDrug: Drug = {
  id: "domperidone",
  meta_data: {
    nombre_generico: "Domperidona",
    nombres_comerciales: ["Motilium", "Domperidona*"],
    grupo_farmacologico: "Antiemético; Procinético (en algunas especies)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiemético con mecanismo similar a la metoclopramida.",
      "Casi no atraviesa la barrera hematoencefálica, reduciendo efectos secundarios en el SNC.",
      "Gastrocinético probado en humanos y conejos; efecto procinético incierto en perros.",
      "Potencia la respuesta inmune celular innata.",
      "Uso estratégico en la prevención de la leishmaniosis canina en áreas de alta prevalencia."
    ],
    usos_principales: "Tratamiento del vómito y reducción de la motilidad gastrointestinal (especialmente en conejos). Prevención de leishmaniosis clínica.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Medicamento para tratar vómitos o mejorar el vaciado del estómago.",
    "Informe si nota cambios de comportamiento (excitación o agresividad), especialmente en gatos.",
    "No usar si sospecha que el animal ha ingerido un objeto extraño (obstrucción).",
    "En conejos, es fundamental para tratar el estasis gástrico."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vómitos",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      },
      {
        indicacion: "Prevención de Leishmaniosis (Estrategia)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 30 días consecutivos, repetir cada 4 meses",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Vómitos",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "Vigilar signos de agresividad o excitación dosis-dependiente."
      }
    ],
    conejo: [
      {
        indicacion: "Estasis gástrico / Procinético",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción o perforación gastrointestinal.",
      "Insuficiencia hepática severa.",
      "Prolongación existente del intervalo QT (cardiaco)."
    ],
    contraindicaciones_especie: {
      "Perro": "Usar con precaución en razas con mutación MDR1 (Collies)."
    },
    efectos_adversos: [
      "Gatroparesia paradójica (perros).",
      "Galactorrea (por aumento de prolactina).",
      "Gatos: Excitación, agresividad y alteraciones motoras.",
      "Prolongación del intervalo QT (riesgo de arritmias fatales)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardiaco",
      "Respuesta conductual en gatos",
      "Producción de leche en hembras"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Arritmias cardiacas", "Signos neurológicos", "Vómitos"],
      tratamiento: "Soporte sintomático y monitoreo ECG."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiarrítmicos Clase 1A/III (Amiodarona, Sotalol)", efecto: "Riesgo extremo de arritmias cardiacas.", severidad: "Grave" },
      { farmaco: "Eritromicina / Cisaprida", efecto: "Riesgo de interacciones cardiacas adversas.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista dopaminérgico periférico. Bloquea los receptores de dopamina en la zona gatillo quimiorreceptora y en el tracto GI superior.",
    farmacocinetica: "Absorción oral rápida. Mínima penetración en la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};