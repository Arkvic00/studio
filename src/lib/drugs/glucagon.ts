import type { Drug } from '@/lib/types';

export const glucagonDrug: Drug = {
  id: "glucagon",
  meta_data: {
    nombre_generico: "Glucagón",
    nombres_comerciales: ["GlucaGen"],
    grupo_farmacologico: "Antagonista de la insulina; Hormona hiperglucemiante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Contrarresta la mayoría de los efectos de la insulina.",
      "Uso de rescate en sobredosis de insulina o insulinoma.",
      "Reservar para casos donde la alimentación y la glucosa IV no mantienen la normoglucemia.",
      "Uso hospitalario con monitoreo constante de glucosa (cada hora).",
      "Duración de acción corta (1-2 horas)."
    ],
    usos_principales: "Tratamiento de la hipoglucemia severa refractaria y sobredosis de insulina.",
    inicio_accion: "Rápido (minutos tras IV)",
    duracion_efecto: "1 a 2 horas"
  },
  informacion_cliente: [
    "Medicamento de emergencia para tratar bajadas de azúcar mortales.",
    "Requiere hospitalización y monitoreo intensivo.",
    "El vómito es el efecto secundario más común tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipoglucemia severa / Sobredosis de insulina",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.00005,
          unidad_calculo: "mg/kg (50 ng/kg)"
        },
        frecuencia: {
          texto_ui: "Bolo único seguido de infusión (10-15 ng/kg/min)",
          intervalo_horas: 0
        },
        notas_tecnicas: "La infusión puede aumentarse hasta 40 ng/kg/min según los niveles de glucosa medidos cada hora."
      }
    ],
    gato: [
      {
        indicacion: "Hipoglucemia severa",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.00005,
          unidad_calculo: "mg/kg (50 ng/kg)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Normoglucemia (niveles de azúcar normales).",
      "Feocromocitoma.",
      "Insulinoma (usar con precaución extrema, puede causar rebote de insulina)."
    ],
    efectos_adversos: [
      "Vómitos (muy común).",
      "Hipopotasemia.",
      "Anafilaxia (rara).",
      "Hiperglucemia de rebote."
    ],
    monitoreo_recomendado: [
      "Glucosa sanguínea horaria (crítico)",
      "Electrolitos (Potasio)"
    ],
    instrucciones_manejo: "Reconstituir y usar inmediatamente. Estable a temperatura ambiente antes de abrir.",
    sobredosis: {
      signos: ["Hiperglucemia severa", "Vómitos"],
      tratamiento: "Soporte sintomático; la corta vida media limita la duración de los efectos."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula la glucogenólisis y gluconeogénesis hepática, aumentando la liberación de glucosa al torrente sanguíneo.",
    farmacocinetica: "Metabolismo hepático y renal rápido."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo para reconstitución)",
      concentracion_texto: "1 mg",
      valor_concentracion: 1,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
