import type { Drug } from '@/lib/types';

export const cefuroximeDrug: Drug = {
  id: "cefuroxime",
  meta_data: {
    nombre_generico: "Cefuroxima",
    nombres_comerciales: ["Aprokam", "Zinacef", "Zinnat"],
    grupo_farmacologico: "Cefalosporina de 2ª generación",
    status_regulatorio: "POM. Categoría C (Precaución) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente con mayor actividad contra Gram-negativos que la 1ª generación.",
      "Buena actividad contra Enterobacteriaceae (no Pseudomonas) y anaerobios.",
      "La Cefuroxima Axetilo (oral) se hidroliza en la mucosa intestinal para activarse.",
      "Fármaco de elección para profilaxis quirúrgica cuando se busca cobertura contra Gram-negativos.",
      "Mínima información farmacocinética en especies veterinarias."
    ],
    usos_principales: "Profilaxis quirúrgica en perros y gatos. Tratamiento de infecciones susceptibles en mamíferos y reptiles.",
    inicio_accion: "Rápido (parenteral u oral en ayunas)",
    duracion_efecto: "Corta (requiere dosis cada 8 a 12 horas)"
  },
  informacion_cliente: [
    "Administrar la presentación oral con el estómago vacío para mejor absorción.",
    "La inyección puede ser dolorosa.",
    "¡NUNCA administrar por vía oral a conejos! Riesgo de muerte por diarrea severa.",
    "Completar el ciclo de tratamiento según lo prescrito."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Profilaxis quirúrgica",
        vias: ["IV lenta (5 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "30 min antes de cirugía; repetir cada 1.5-3h intraoperatorio", intervalo_horas: 1.5 }
      },
      {
        indicacion: "Infecciones susceptibles",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Profilaxis quirúrgica",
        vias: ["IV lenta (5 min)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "30 min antes de cirugía; repetir cada 1.5-3h intraoperatorio", intervalo_horas: 1.5 }
      },
      {
        indicacion: "Infecciones susceptibles",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas (¡SOLO IV!)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18.75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "¡ADVERTENCIA!: La vía oral está prohibida por riesgo de enterotoxemia fatal."
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 },
        notas_tecnicas: "Mantener al reptil a su Temperatura Óptima (ej. 30°C)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "Administración oral en pequeños herbívoros."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia mortal."
    },
    efectos_adversos: [
      "Dolor en el sitio de inyección.",
      "Trastornos gastrointestinales (especialmente con la forma axetilo).",
      "Enterotoxemia en especies sensibles (oral)."
    ],
    monitoreo_recomendado: [
      "Función renal (si se usa con otros nefrotóxicos)",
      "Estado gastrointestinal"
    ],
    instrucciones_manejo: "La forma sódica inyectable es de uso inmediato. La forma axetilo oral es para administración ambulatoria.",
    sobredosis: {
      signos: ["Gastroenteritis severa", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva; no mezclar físicamente.", severidad: "Leve" },
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan el riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Antibióticos bacteriostáticos", efecto: "Pueden antagonizar el efecto bactericida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de la pared celular bacteriana al unirse a las PBPs. Mayor estabilidad frente a ciertas beta-lactamasas que la 1ª generación.",
    farmacocinetica: "Eliminación renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo para reconstitución (Sódica)", concentracion_texto: "50 mg a 1.5 g", valor_concentracion: 750, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral (Axetilo)", concentracion_texto: "125 mg, 250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral (Axetilo)", concentracion_texto: "25 mg/ml (125mg/5ml)", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
