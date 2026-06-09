import type { Drug } from '@/lib/types';

export const climbazoleDrug: Drug = {
  id: "climbazole",
  meta_data: {
    nombre_generico: "Climbazol",
    nombres_comerciales: ["CLX wipes", "Douxo Pyo"],
    grupo_farmacologico: "Antifúngico imidazólico (Tópico)",
    status_regulatorio: "Venta libre"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antifúngico del grupo de los imidazoles.",
      "Aumenta la permeabilidad de la pared celular fúngica al inhibir la síntesis de ergosterol.",
      "Se encuentra comúnmente en formulaciones tópicas combinadas con clorhexidina.",
      "Requiere un tiempo de contacto de 5-10 minutos en formulaciones de champú."
    ],
    usos_principales: "Tratamiento tópico de infecciones cutáneas causadas por dermatofitos y Malassezia spp.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Limitada al tiempo de aplicación o persistencia residual en piel"
  },
  informacion_cliente: [
    "Si usa champús con este componente, deje que actúe sobre la piel durante al menos 5 a 10 minutos antes de enjuagar.",
    "Evite el contacto con los ojos de su mascota.",
    "Puede aplicarse diariamente o semanalmente según la gravedad de la infección."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones fúngicas cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: {
          texto_ui: "Diaria a semanalmente",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones fúngicas cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: {
          texto_ui: "Diaria a semanalmente",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a antifúngicos imidazólicos."
    ],
    efectos_adversos: [
      "Irritación local leve (poco común)."
    ],
    monitoreo_recomendado: [
      "Estado de la piel y resolución de lesiones fúngicas"
    ],
    instrucciones_manejo: "Evitar el contacto con ojos y mucosas.",
    sobredosis: {
      signos: ["Irritación cutánea marcada"],
      tratamiento: "Lavar con abundante agua limpia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de ergosterol dependiente de citocromo P450 en las células fúngicas.",
    farmacocinetica: "Acción tópica local con mínima absorción sistémica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Formulación combinada (Toallitas/Champú)",
      concentracion_texto: "0.5%",
      valor_concentracion: 0.5,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
