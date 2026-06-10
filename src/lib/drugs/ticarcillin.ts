import type { Drug } from '@/lib/types';

export const ticarcillinDrug: Drug = {
  id: "ticarcillin",
  meta_data: {
    nombre_generico: "Ticarcilina (con Ácido Clavulánico)",
    nombres_comerciales: ["Timentin"],
    grupo_farmacologico: "Penicilina de espectro extendido (Antipseudomonal); Inhibidor de beta-lactamasa",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico bactericida tiempo-dependiente.",
      "Indicado para el tratamiento de infecciones serias (amenazantes para la vida) causadas por Pseudomonas aeruginosa.",
      "Activo contra ciertos Gram-negativos como Proteus spp. y Bacteroides fragilis.",
      "El ácido clavulánico actúa como un inhibidor 'suicida' no competitivo de las enzimas beta-lactamasas.",
      "Crucial mantener niveles tisulares por encima de la MIC durante todo el intervalo de dosis."
    ],
    usos_principales: "Tratamiento de sepsis por Pseudomonas, infecciones sistémicas graves y otitis por Pseudomonas (como adjunto tópico).",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Corta (requiere infusión continua o dosis frecuentes)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para infecciones de extrema gravedad.",
    "Puede causar náuseas, diarrea o erupciones en la piel.",
    "El veterinario monitoreará la respuesta del animal constantemente.",
    "Se utiliza por vía intravenosa o directamente en el oído en casos de infección severa.",
    "Informe si nota cualquier tipo de reacción alérgica."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 15,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar el bolo inicial seguido de una infusión continua (CRI) a una tasa de 7.5–15 mg/kg/h."
      },
      {
        indicacion: "Otitis por Pseudomonas (Adjunto)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.375,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "ml de sol. inyectable 100 mg/ml"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 15,
          dosis_max: 25,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las penicilinas o cefalosporinas.",
      "Animales con insuficiencia renal severa (requiere ajuste de dosis)."
    ],
    efectos_adversos: [
      "Náuseas y vómitos.",
      "Diarrea.",
      "Erupciones cutáneas alérgicas.",
      "Hipersensibilidad sistémica."
    ],
    monitoreo_recomendado: [
      "Función renal y hepática",
      "Resolución de los signos clínicos de infección",
      "Signos de hipersensibilidad inmediata"
    ],
    instrucciones_manejo: "Estabilidad limitada tras reconstitución (depende del diluyente). No mezclar con aminoglucósidos en la misma jeringa.",
    sobredosis: {
      signos: ["Gastroenteritis severa", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos (Gentamicina)", efecto: "Inactivación mutua si se mezclan en la misma jeringa. Sinergia in vivo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las proteínas de unión a penicilina (PBP) inhibiendo la síntesis de la pared celular bacteriana. El ácido clavulánico protege a la ticarcilina de la degradación por beta-lactamasas.",
    farmacocinetica: "Eliminación renal predominante. Información limitada en especies veterinarias."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "3 g Ticarcilina + 200 mg Ác. Clavulánico",
      valor_concentracion: 3200,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};