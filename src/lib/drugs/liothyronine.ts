import type { Drug } from '@/lib/types';

export const liothyronineDrug: Drug = {
  id: "liothyronine",
  meta_data: {
    nombre_generico: "Liotironina (T3)",
    nombres_comerciales: ["Triyodotironina", "T3"],
    grupo_farmacologico: "Hormona tiroidea",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Forma activa de la hormona tiroidea (triyodotironina).",
      "Uso principal para el diagnóstico de hipertiroidismo felino (Test de supresión de T3).",
      "Sugerida en hipotiroidismo canino donde la levotiroxina (T4) no ha sido efectiva.",
      "Evidencia limitada de beneficio en el tratamiento crónico canino.",
      "Requiere un horario de administración muy estricto para el test de supresión."
    ],
    usos_principales: "Diagnóstico de hipertiroidismo felino (Test T3) y tratamiento de hipotiroidismo refractario en perros.",
    inicio_accion: "Rápido",
    duracion_efecto: "Corta (requiere dosis q8-12h)"
  },
  informacion_cliente: [
    "Informe si nota que su mascota está muy inquieta, tiene el corazón rápido o jadea en exceso.",
    "Para el test de supresión en gatos, es vital cumplir con las 7 dosis cada 8 horas exactas.",
    "Puede afectar los niveles de azúcar en animales diabéticos.",
    "Informe al veterinario de cualquier problema cardíaco previo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipotiroidismo refractario a T4",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 0.004,
          dosis_min: 0.002,
          dosis_max: 0.006,
          unidad_calculo: "mg/kg (2-6 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Test de Supresión de T3 (Diagnóstico)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "μg/gato (microgramos)"
        },
        frecuencia: { texto_ui: "Cada 8 horas por 7 dosis", intervalo_horas: 8 },
        notas_tecnicas: "Extraer sangre para T4 y T3 totales antes de la primera dosis y 2-4h después de la última dosis."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia adrenal no tratada.",
      "Tirotoxicosis.",
      "Infarto de miocardio agudo."
    ],
    efectos_adversos: [
      "Taquicardia.",
      "Excitabilidad y nerviosismo.",
      "Jadeo excesivo.",
      "Vómitos y diarrea (raros)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Niveles de T3 y T4 totales",
      "Niveles de glucosa en diabéticos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Taicardia severa", "Hiperactividad extrema", "Fiebre"],
      tratamiento: "Suspensión del fármaco; soporte sintomático; beta-bloqueadores en caso de taquicardia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Catecolaminas / Simpaticomiméticos", efecto: "Efectos cardíacos potenciados por la liotironina.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Puede alterar los requerimientos de insulina en diabéticos.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "La liotironina puede reducir el efecto terapéutico de la digoxina.", severidad: "Moderada" },
      { farmaco: "Estrógenos", efecto: "Pueden aumentar los requerimientos de hormona tiroidea.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Reemplazo de la hormona tiroidea endógena T3, responsable de la mayoría de las acciones celulares tiroideas.",
    farmacocinetica: "Absorción oral rápida. Vida media mucho más corta que la T4."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas", concentracion_texto: "20 μg (microgramos)", valor_concentracion: 0.02, unidad_concentracion: "mg", es_divisible: true }
  ]
};