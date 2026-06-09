import type { Drug } from '@/lib/types';

export const cefovecinDrug: Drug = {
  id: "cefovecin",
  meta_data: {
    nombre_generico: "Cefovecina",
    nombres_comerciales: ["Convenia"],
    grupo_farmacologico: "Cefalosporina de 3ª generación",
    status_regulatorio: "POM-V. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente con una vida media extremadamente larga en perros y gatos.",
      "Permite un curso de tratamiento de 14 días con una sola inyección.",
      "Indicado para infecciones de piel, tejidos blandos y tracto urinario que requieran tratamiento prolongado.",
      "No debe usarse si no se requiere un curso de al menos 14 días.",
      "Ineficaz en aves y reptiles debido a su vida media muy corta (<2-20h)."
    ],
    usos_principales: "Tratamiento de piodermas, abscesos, heridas e infecciones urinarias en perros y gatos. Manejo de enfermedad periodontal severa.",
    inicio_accion: "Rápido (pico plasmático en horas)",
    duracion_efecto: "14 días (Perros/Gatos)"
  },
  informacion_cliente: [
    "Medicamento inyectable de larga duración; una dosis equivale a 14 días de tratamiento.",
    "Informe si nota hinchazón en el sitio de inyección o diarrea.",
    "No es adecuado para conejos o cobayas.",
    "El frasco reconstituido debe usarse en 28 días y mantenerse en refrigeración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones de piel / Tejidos blandos / Urinarias",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única (repetir tras 14 días si es necesario, máx 3 veces)",
          intervalo_horas: 336
        },
        notas_tecnicas: "Equivalente a 1 ml por cada 10 kg de peso corporal."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones de piel / Tejidos blandos / Urinarias",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única (repetir tras 14 días si es necesario)",
          intervalo_horas: 336
        }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones bacterianas (Uso extra-label)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 a 72 horas",
          intervalo_horas: 48
        },
        notas_tecnicas: "A diferencia de perros/gatos, en hurones la vida media es corta y requiere dosis frecuentes."
      }
    ],
    ave: [
      {
        indicacion: "¡ALERTA DE INEFICACIA!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "No practicable en aves. La vida media es < 2h en aves de corral y similar en loros."
      }
    ],
    reptil: [
      {
        indicacion: "¡ALERTA DE INEFICACIA!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "No practicable. Vida media < 4h en iguanas y ~20h en tortugas de Hermann."
      }
    ],
    peces: [
      {
        indicacion: "Tiburones bambú blancos (White bamboo sharks)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 días",
          intervalo_horas: 96
        }
      },
      {
        indicacion: "Pez roca (Copper rockfish)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 7 días",
          intervalo_horas: 168
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 8 semanas de edad.",
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "Gestación y lactancia (seguridad no establecida).",
      "Pequeños herbívoros (conejos, cobayas, etc.)."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Riesgo de enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO!: Riesgo de enterotoxemia fatal.",
      "Ave": "Uso no recomendado por vida media extremadamente corta.",
      "Reptil": "Uso no recomendado por farmacocinética desfavorable."
    },
    efectos_adversos: [
      "Trastornos gastrointestinales leves (vómitos, diarrea).",
      "Inflamación transitoria en el sitio de inyección.",
      "Reacciones de hipersensibilidad (Tipo I, II y III)."
    ],
    monitoreo_recomendado: [
      "Función renal en animales geriátricos",
      "Signos de hipersensibilidad"
    ],
    instrucciones_manejo: "Mantener en refrigeración. Una vez reconstituido, es estable por 28 días.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Furosemida", efecto: "Al ser fármacos con alta unión a proteínas plasmáticas, pueden competir con la cefovecina, aumentando el riesgo de toxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bactericida que inhibe la síntesis de la pared celular bacteriana al unirse a las PBPs.",
    farmacocinetica: "Unión a proteínas plasmáticas extremadamente alta (especialmente en perros y gatos), lo que explica su larga duración."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Liofilizado)",
      concentracion_texto: "80 mg/ml (tras reconstitución)",
      valor_concentracion: 80,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
