import type { Drug } from '@/lib/types';

export const piperacillinDrug: Drug = {
  id: "piperacillin",
  meta_data: {
    nombre_generico: "Piperacilina (con Tazobactam)",
    nombres_comerciales: ["Tazocin"],
    grupo_farmacologico: "Penicilina de espectro extendido (Antipseudomonal)",
    status_regulatorio: "POM. Categoría A (Evitar) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente con amplio espectro.",
      "Actividad superior contra Pseudomonas aeruginosa y anaerobios (B. fragilis).",
      "Uso reservado para infecciones potencialmente fatales (sepsis, endocarditis).",
      "La combinación con Tazobactam supera la resistencia por beta-lactamasas.",
      "Requiere administración parenteral frecuente o infusión continua."
    ],
    usos_principales: "Tratamiento de sepsis grave, endocarditis e infecciones por Pseudomonas resistentes confirmadas.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Corta (requiere dosis q6-8h)"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario para infecciones de extrema gravedad.",
    "La inyección puede ser dolorosa.",
    "Es vital cumplir estrictamente con el horario de las dosis.",
    "¡PELIGRO!: No administrar a conejos, cobayas o hámsteres (riesgo de muerte).",
    "Informe si nota diarrea severa o erupciones cutáneas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Sepsis grave / Pseudomonas",
        vias: ["IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg (Combinado)"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Sepsis grave",
        vias: ["IV lenta", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones graves por Gram-negativos",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas / Neumonía",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 },
        notas_tecnicas: "Nebulización: 100 mg en 10 ml de salino por 20 min q8-12h."
      }
    ],
    axolote: [
      {
        indicacion: "Sepsis bacteriana (Anfibios)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a penicilinas o cefalosporinas.",
      "Pequeños herbívoros (conejos, cobayas, hámsteres) - Mortal."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Cobaya": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Hamster": "¡PROHIBIDO!: Causa enterotoxemia fatal."
    },
    efectos_adversos: [
      "Náuseas, diarrea y vómitos.",
      "Erupciones cutáneas.",
      "Dolor en el sitio de inyección.",
      "Potencial nefrotoxicidad en dosis muy altas.",
      "Enterotoxemia fatal en especies sensibles."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Respuesta clínica de la infección",
      "Signos de hipersensibilidad inmediata"
    ],
    instrucciones_manejo: "Observar precauciones para alérgicos a beta-lactámicos.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Signos neurológicos (raro)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos (Gentamicina)", efecto: "Sinergia positiva in vivo; se inactivan si se mezclan en la misma jeringa.", severidad: "Leve" },
      { farmaco: "Relajantes musculares", efecto: "Piperacilina puede potenciar su efecto.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de la pared celular bacteriana al unirse a las PBPs. El tazobactam inhibe irreversiblemente las beta-lactamasas.",
    farmacocinetica: "Eliminación renal predominante. La piperacilina inhibe la excreción del tazobactam en perros."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "2 g Pip. + 0.25 g Tazo.", valor_concentracion: 2250, unidad_concentracion: "mg", es_divisible: false }
  ]
};