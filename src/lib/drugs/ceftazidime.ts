import type { Drug } from '@/lib/types';

export const ceftazidimeDrug: Drug = {
  id: "ceftazidime",
  meta_data: {
    nombre_generico: "Ceftazidima",
    nombres_comerciales: ["Fortum", "Kefadim"],
    grupo_farmacologico: "Cefalosporina de 3ª generación",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente de amplio espectro.",
      "Eficacia superior contra Pseudomonas aeruginosa en comparación con otras cefalosporinas.",
      "Clasificado como antibiótico de importancia crítica de alta prioridad.",
      "Reservar para sepsis aguda o infecciones graves con susceptibilidad confirmada.",
      "Baja actividad contra bacterias Gram-positivas en comparación con 1ª y 2ª generación."
    ],
    usos_principales: "Tratamiento de sepsis aguda, infecciones graves por Gram-negativos (especialmente Pseudomonas) y enfermedades bacterianas en peces y anfibios.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Corta (requiere administración frecuente o CRI)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para infecciones críticas.",
    "La inyección puede ser dolorosa.",
    "Es vital mantener el horario de administración para que el antibiótico funcione.",
    "¡NUNCA administrar por vía oral a conejos! Riesgo de muerte por diarrea severa.",
    "Informe si nota que el animal deja de comer o presenta diarrea."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones susceptibles (General)",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infecciones por Pseudomonas aeruginosa",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas", intervalo_horas: 4 }
      },
      {
        indicacion: "Pseudomonas (Infusión Continua - CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 4.4,
          unidad_calculo: "mg/kg (Carga)"
        },
        notas_tecnicas: "Seguir con una infusión de mantenimiento de 4.1 mg/kg/hora."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones susceptibles",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Infecciones por Pseudomonas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 2 a 4 horas", intervalo_horas: 3 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas (¡SOLO IM!)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "¡ADVERTENCIA!: La vía oral está prohibida por riesgo de enterotoxemia fatal."
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones graves (Loros/Rapaces)",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 137.5,
          dosis_min: 75,
          dosis_max: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas (Mayoría de especies)",
        vias: ["IM", "SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas", intervalo_horas: 72 }
      },
      {
        indicacion: "Camaleones (Dosis frecuente)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 36 }
      },
      {
        indicacion: "Tortugas de caja / Galápagos (Dosis larga)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 120 horas (5 días)", intervalo_horas: 120 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: General",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 60 }
      },
      {
        indicacion: "Ranas Leopardo",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Salamandras gigantes (Hellbenders)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 5 días", intervalo_horas: 120 }
      }
    ],
    peces: [
      {
        indicacion: "Enfermedades bacterianas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 72 horas (3 a 5 tratamientos)", intervalo_horas: 72 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "Administración oral en pequeños herbívoros."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO VÍA ORAL!: Causa enterotoxemia fatal. Usar solo IM.",
      "Cobaya": "¡PROHIBIDO VÍA ORAL!: Riesgo de enterotoxemia mortal."
    },
    efectos_adversos: [
      "Dolor en el sitio de inyección.",
      "Trastornos gastrointestinales.",
      "Potencial nefrotoxicidad en dosis altas o combinadas."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) en pacientes con insuficiencia previa",
      "Respuesta clínica a la terapia"
    ],
    instrucciones_manejo: "Observar precauciones normales para el manejo de polvos inyectables.",
    sobredosis: {
      signos: ["Trastornos GI", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Sinergia positiva in vivo contra Pseudomonas.", severidad: "Leve" },
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan el riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Antibióticos bacteriostáticos", efecto: "Pueden antagonizar el efecto bactericida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas de unión a penicilina (PBP).",
    farmacocinetica: "Eliminación predominantemente renal. Vida media muy variable entre especies (especialmente en reptiles y anfibios)."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "500 mg, 1 g, 2 g, 3 g", valor_concentracion: 1000, unidad_concentracion: "mg", es_divisible: false }
  ]
};