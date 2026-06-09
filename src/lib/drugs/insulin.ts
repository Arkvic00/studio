import type { Drug } from '@/lib/types';

export const insulinDrug: Drug = {
  id: "insulin",
  meta_data: {
    nombre_generico: "Insulina (Caninsulin, Prozinc, Lantus)",
    nombres_comerciales: ["Caninsulin", "Prozinc", "Lantus", "Actrapid", "Humulin"],
    grupo_farmacologico: "Hormona hipoglucemiante",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la formación de glucógeno a partir de glucosa.",
      "Las preparaciones veterinarias (Caninsulin - Lente; Prozinc - PZI) son preferidas legalmente.",
      "Glargina (Lantus) es una insulina de larga duración muy utilizada en gatos.",
      "Requiere jeringas específicas para la concentración (U-40 para Caninsulin/Prozinc; U-100 para Lantus/Humanas).",
      "Agitar vigorosamente las insulinas tipo Lente antes de usar."
    ],
    usos_principales: "Tratamiento de la diabetes mellitus y manejo de la hiperpotasemia severa.",
    inicio_accion: "Variable (Rápido IV/IM en cetoacidosis; Lento SC)",
    duracion_efecto: "Variable según tipo (Lente 8-12h; PZI/Glargina 12-24h)"
  },
  informacion_cliente: [
    "Mantener siempre en el refrigerador (no en la puerta).",
    "Utilizar siempre las jeringas correctas indicadas por su veterinario.",
    "Informe inmediatamente si nota temblores, desorientación o colapso (signos de bajada de azúcar).",
    "Administrar siempre después de que el animal haya comido.",
    "Aprenda a realizar la curva de glucosa en casa si es posible."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Diabetes Mellitus (Perros >25 kg)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Diabetes Mellitus (Perros <25 kg)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Hiperpotasemia (Emergencia)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "IU/kg"
        },
        notas_tecnicas: "Seguir con bolo de dextrosa (2-3g por cada unidad de insulina) para prevenir hipoglucemia."
      }
    ],
    gato: [
      {
        indicacion: "Diabetes Mellitus (Lente)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Diabetes Mellitus (PZI / Prozinc)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          dosis_min: 0.2,
          dosis_max: 0.4,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Diabetes mellitus",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.75,
          dosis_min: 0.1,
          dosis_max: 1.0,
          unidad_calculo: "IU/hurón"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Diabetes",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "IU/rata"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Diabetes (Lagartos)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 72 horas según glucemia", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipoglucemia preexistente.",
      "Hiperpotasemia asociada a Addison (riesgo de hipoglucemia fatal)."
    ],
    efectos_adversos: [
      "Hipoglucemia (temblores, debilidad, coma).",
      "Hipopotasemia.",
      "Efecto Somogyi (hiperglucemia de rebote tras dosis excesiva)."
    ],
    monitoreo_recomendado: [
      "Curva de glucosa sanguínea periódica",
      "Niveles de fructosamina",
      "Ingesta de agua y producción de orina",
      "Peso corporal"
    ],
    instrucciones_manejo: "Rodar suavemente (PZI/Glargina) o agitar fuerte (Lente) según producto. Almacenar refrigerado (2-8°C).",
    sobredosis: {
      signos: ["Convulsiones", "Coma hipoglucémico", "Debilidad extrema"],
      tratamiento: "Administración inmediata de dextrosa/miel en encías o IV; hospitalización."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides / Progestágenos / Hormonas tiroideas", efecto: "Antagonizan el efecto de la insulina (aumentan glucosa).", severidad: "Importante" },
      { farmaco: "Aspirina / Tetraciclinas", efecto: "Pueden potenciar el efecto hipoglucemiante.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "Riesgo de toxicidad por hipopotasemia inducida por insulina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Facilita la entrada de glucosa en las células musculares y adiposas, promoviendo el almacenamiento de energía y reduciendo la producción hepática de glucosa.",
    farmacocinetica: "Absorción lenta desde el sitio de inyección según la cristalización."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Veterinario)", concentracion_texto: "40 IU/ml", valor_concentracion: 40, unidad_concentracion: "IU/ml", es_divisible: false },
    { tipo: "Vial inyectable (Humano)", concentracion_texto: "100 IU/ml", valor_concentracion: 100, unidad_concentracion: "IU/ml", es_divisible: false }
  ]
};