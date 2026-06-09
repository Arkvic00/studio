import type { Drug } from '@/lib/types';

export const ampicillinDrug: Drug = {
  id: "ampicillin",
  meta_data: {
    nombre_generico: "Ampicilina",
    nombres_comerciales: ["Amfipen", "Ampicaps", "Ampicare", "Duphacillin"],
    grupo_farmacologico: "Penicilina (Beta-lactámico)",
    status_regulatorio: "POM-V. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente.",
      "Activo contra Gram-positivos, Gram-negativos y anaerobios obligados.",
      "Inactivado por beta-lactamasas (ej. E. coli o S. aureus resistentes).",
      "Crucial mantener niveles por encima de la MIC; dosis omitidas comprometen la eficacia.",
      "Biodisponibilidad oral reducida en presencia de comida."
    ],
    usos_principales: "Infecciones sistémicas de rutina, infecciones del SNC y óseas. Tratamiento de enfermedades bacterianas en peces.",
    inicio_accion: "Rápido tras administración parenteral u oral (estómago vacío).",
    duracion_efecto: "Corta (requiere dosis frecuentes q6-q8h)."
  },
  informacion_cliente: [
    "Administrar preferiblemente con el estómago vacío para mejorar la absorción.",
    "Completar el ciclo de tratamiento estrictamente según el horario indicado.",
    "Informar si nota diarrea severa, falta de apetito o erupciones cutáneas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones de rutina",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infecciones del SNC o bacterianas graves",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones de rutina",
        vias: ["IV", "IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17.5,
          dosis_min: 5,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas y Ratones: Sistémica",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Ratas y Ratones: Sistémica (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 125,
          dosis_min: 50,
          dosis_max: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    primates: [
      {
        indicacion: "Primates: Sistémica",
        vias: ["PO", "IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones sistémicas (Inyectable)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Infecciones sistémicas (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 175,
          dosis_min: 150,
          dosis_max: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Aves: Agua de bebida",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "g/l"
        }
      },
      {
        indicacion: "Aves: Alimento blando",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: "g/kg de alimento"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas (General)",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Tortugas de Hermann (Sistémica)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    peces: [
      {
        indicacion: "Infecciones bacterianas (En alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 65,
          dosis_min: 50,
          dosis_max: 80,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a penicilinas.",
      "No usar vía oral en pacientes críticamente enfermos."
    ],
    contraindicaciones_especie: {
      "Cobaya": "¡PROHIBIDO!: No administrar por ninguna vía (riesgo de enterotoxemia fatal).",
      "Chinchilla": "¡PROHIBIDO!: No administrar por ninguna vía.",
      "Hamster": "¡PROHIBIDO!: No administrar por ninguna vía (enterotoxemia fatal).",
      "Jerbo": "¡PROHIBIDO!: No administrar por ninguna vía (enterotoxemia fatal).",
      "Degu": "¡PROHIBIDO!: No administrar por ninguna vía.",
      "Conejo": "¡ALERTA!: Prohibida la vía oral (enterotoxemia fatal). Precaución en parenteral.",
    },
    efectos_adversos: [
      "Náuseas, vómitos y diarrea.",
      "Erupciones cutáneas.",
      "Enterotoxemia fatal en pequeños herbívoros (si se da oralmente)."
    ],
    monitoreo_recommended: ["Estado gastrointestinal", "Signos de hipersensibilidad"],
    instrucciones_manejo: "La sal sódica reconstituida dura 8h refrigerada o 2h a temperatura ambiente. No mezclar con aminoglucósidos en la misma jeringa.",
    sobredosis: {
      signos: ["Trastornos digestivos severos", "Signos neurológicos (raro)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antibióticos bacteriostáticos (Tetraciclinas, Eritromicina)", efecto: "Pueden antagonizar la ampicilina.", severidad: "Moderada" },
      { farmaco: "Aminoglucósidos", efecto: "Efecto sinérgico positivo in vivo; se inactivan si se mezclan en la misma jeringa.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las PBPs (proteínas de unión a penicilina) de la pared bacteriana, debilitándola y causando la lisis celular. Efecto bactericida tiempo-dependiente.",
    farmacocinetica: "Excreción biliar y renal alta."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo para reconstitución", concentracion_texto: "250 mg, 500 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Inyectable Larga Acción (LA)", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Cápsulas", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tabletas", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};