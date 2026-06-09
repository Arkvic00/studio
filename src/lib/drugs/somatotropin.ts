import type { Drug } from '@/lib/types';

export const somatotropinDrug: Drug = {
  id: "somatotropin",
  meta_data: {
    nombre_generico: "Somatotropina (Hormona de Crecimiento)",
    nombres_comerciales: ["Genotropin", "Humatrope", "Norditropin"],
    grupo_farmacologico: "Hormona hipofisaria recombinante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Hormona de crecimiento humana recombinante que mimetiza la acción endógena.",
      "Utilizada para el tratamiento del enanismo hipofisario.",
      "La formación de anticuerpos puede limitar su eficacia a largo plazo.",
      "Efecto diabetogénico: puede inducir resistencia a la insulina."
    ],
    usos_principales: "Tratamiento de la deficiencia de hormona de crecimiento (enanismo hipofisario) en perros y gatos.",
    inicio_accion: "Lento (semanas para efectos en crecimiento)",
    duracion_efecto: "Requiere administración semanal"
  },
  informacion_cliente: [
    "Medicamento inyectable especializado para problemas de crecimiento.",
    "Se requieren análisis de sangre frecuentes para controlar el nivel de azúcar (glucosa).",
    "La inyección puede ser dolorosa; alterne los sitios de aplicación.",
    "El tratamiento suele durar al menos 6 semanas para evaluar la respuesta inicial."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Deficiencia de Hormona de Crecimiento",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.3,
          dosis_max: 0.7,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Dosis semanal total, dividida en 3 a 5 aplicaciones",
          intervalo_horas: 48
        }
      }
    ],
    gato: [
      {
        indicacion: "Deficiencia de Hormona de Crecimiento",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.3,
          dosis_max: 0.7,
          unidad_calculo: "IU/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Diabetes mellitus activa.",
      "Neoplasias (puede estimular el crecimiento tumoral).",
      "Epífisis óseas cerradas."
    ],
    efectos_adversos: [
      "Hiperglucemia y diabetes mellitus iatrogénica.",
      "Reacciones locales en el sitio de inyección.",
      "Formación de anticuerpos anti-somatotropina."
    ],
    monitoreo_recomendado: [
      "Niveles de glucosa en sangre regularmente",
      "Medición de niveles de IGF-1 sérico",
      "Curva de crecimiento y peso corporal"
    ],
    instrucciones_manejo: "Mantener refrigerado. No agitar el vial al reconstituir.",
    sobredosis: {
      signos: ["Hiperglucemia marcada", "Letargo"],
      tratamiento: "Suspensión del fármaco y manejo de la hiperglucemia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula el crecimiento esquelético y de tejidos blandos mediante la inducción de la síntesis de IGF-1 en el hígado.",
    farmacocinetica: "Vida media plasmática corta, pero efectos biológicos prolongados."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo para reconstitución)",
      concentracion_texto: "2 a 16 IU",
      valor_concentracion: 4,
      unidad_concentracion: "IU",
      es_divisible: false
    }
  ]
};
