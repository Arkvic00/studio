import type { Drug } from '@/lib/types';

export const flucloxacillinDrug: Drug = {
  id: "flucloxacillin",
  meta_data: {
    nombre_generico: "Flucloxacilina",
    nombres_comerciales: ["Floxapen", "Flucloxacillin*"],
    grupo_farmacologico: "Penicilina resistente a beta-lactamasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente resistente a la penicilinasa estafilocócica.",
      "Menos activo que la penicilina G contra Streptococcus y anaerobios.",
      "La biodisponibilidad oral se reduce drásticamente con la comida.",
      "Uso restringido en herbívoros pequeños por riesgo de enterotoxemia fatal.",
      "Requiere administración frecuente para mantener niveles por encima de la MIC."
    ],
    usos_principales: "Tratamiento de infecciones causadas por Staphylococcus productores de beta-lactamasa (ej. osteomielitis en ratas).",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Corta (requiere dosis q8h)"
  },
  informacion_cliente: [
    "Administrar siempre con el estómago vacío.",
    "¡PELIGRO!: Nunca dar a conejos, hámsteres o cobayas (riesgo de muerte).",
    "Informe si nota erupciones cutáneas o diarrea en el animal.",
    "Cumplir estrictamente el horario de dosis indicado."
  ],
  parametros_dosificacion: {
    roedores: [
      {
        indicacion: "Ratas: Osteomielitis / Infecciones por Staphylococcus",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las penicilinas o cefalosporinas.",
      "Administración oral en pequeños herbívoros (Absoluta).",
      "Fallo hepático severo."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Riesgo de enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO!: Riesgo de enterotoxemia fatal.",
      "Hamster": "¡PROHIBIDO!: Riesgo de enterotoxemia fatal."
    },
    efectos_adversos: [
      "Náuseas, vómitos y diarrea.",
      "Erupciones cutáneas.",
      "Hepatitis colestásica (reportado en humanos).",
      "Enterotoxemia fatal en especies sensibles."
    ],
    monitoreo_recomendado: [
      "Función hepática en tratamientos largos",
      "Estado gastrointestinal",
      "Signos de hipersensibilidad"
    ],
    instrucciones_manejo: "Observar precauciones normales para alérgicos a beta-lactámicos. La solución reconstituida dura 24h.",
    sobredosis: {
      signos: ["Gastroenteritis severa", "Enterotoxemia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva; no mezclar físicamente.", severidad: "Leve" },
      { farmaco: "Antibióticos bacteriostáticos", efecto: "Pueden antagonizar el efecto bactericida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las proteínas de unión a penicilina (PBP), inhibiendo la síntesis de la pared celular bacteriana.",
    farmacocinetica: "Eliminación renal predominante. Atraviesa poco la barrera hematoencefálica normal."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "250 mg, 500 mg, 1 g", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Cápsula oral", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Suspensión oral (reconstituida)", concentracion_texto: "25 mg/ml, 50 mg/ml", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
