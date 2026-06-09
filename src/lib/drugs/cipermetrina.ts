import type { Drug } from '@/lib/types';

export const cipermetrinaDrug: Drug = {
  id: "cipermetrina",
  meta_data: {
    nombre_generico: "Cipermetrina",
    nombres_comerciales: ["F10 Germicidal Wound Spray with Insecticide"],
    grupo_farmacologico: "Piretroide; Insecticida",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador de canales de sodio que provoca convulsiones musculares y muerte en artrópodos.",
      "Utilizado para repeler insectos y eliminar infestaciones por miasis (fly strike).",
      "Eficaz en el manejo de heridas contaminadas con larvas.",
      "Muy persistente; requiere reaplicación si el animal se moja."
    ],
    usos_principales: "Prevención y tratamiento de miasis (gusaneras) y repelente de insectos en mamíferos exóticos y perros.",
    inicio_accion: "Inmediato (contacto)",
    duracion_efecto: "Hasta 7 días (si se mantiene seco)"
  },
  informacion_cliente: [
    "¡PELIGRO!: No utilizar en gatos. Los piretroides son altamente tóxicos para ellos.",
    "No utilizar cerca de acuarios o estanques; es mortal para peces y vida acuática.",
    "Aplicar directamente sobre la herida o zona afectada.",
    "Reaplicar si el animal se expone a la lluvia o se baña.",
    "Evitar que el animal lama la zona tratada mientras el producto esté húmedo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Repelente / Tratamiento de Miasis (Gusanera)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación sobre la zona afectada"
        },
        frecuencia: {
          texto_ui: "Semanalmente o según sea necesario",
          intervalo_horas: 168
        },
        notas_tecnicas: "Seguir instrucciones del fabricante para el spray F10 o pomadas similares."
      }
    ],
    roedores: [
      {
        indicacion: "Miasis / Prevención de insectos",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Prevención y tratamiento de Fly Strike",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        notas_tecnicas: "Fundamental en conejos de exterior durante meses cálidos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Peces y otros organismos acuáticos.",
      "Animales con hipersensibilidad a piretroides."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Puede causar temblores, convulsiones y muerte. No usar bajo ninguna circunstancia.",
      "Peces": "¡MORTAL!: No contaminar cuerpos de agua."
    },
    efectos_adversos: [
      "Irritación local leve en raras ocasiones.",
      "Salivación si el animal lame el producto húmedo."
    ],
    monitoreo_recomendado: [
        "Resolución de la infestación por larvas",
        "Integridad de la piel tratada"
    ],
    instrucciones_manejo: "Manejar con guantes. No inhalar el aerosol. Lavarse las manos cuidadosamente tras la aplicación.",
    sobredosis: {
      signos: ["Hipersalivación", "Temblores musculares (si hay absorción masiva)"],
      tratamiento: "Bañar al animal con detergente suave para eliminar el producto; soporte neurológico si es necesario."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio abiertos en las membranas de las células nerviosas del artrópodo, impidiendo la repolarización y causando hiperexcitación nerviosa.",
    farmacocinetica: "Absorción sistémica mínima a través de la piel sana."
  },
  presentaciones_comerciales: [
    {
      tipo: "Spray germicida con insecticida",
      concentracion_texto: "0.25% Cipermetrina",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Pomada de barrera",
      concentracion_texto: "0.25%",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};
