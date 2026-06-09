import type { Drug } from '@/lib/types';

export const finasterideDrug: Drug = {
  id: "finasteride",
  meta_data: {
    nombre_generico: "Finasterida",
    nombres_comerciales: ["Proscar"],
    grupo_farmacologico: "Inhibidor de la 5-alfa-reductasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor competitivo de la enzima 5-alfa-reductasa, que convierte la testosterona en dihidrotestosterona (DHT).",
      "La DHT es el principal estímulo para la hiperplasia prostática.",
      "Reduce el volumen de la próstata sin afectar la libido ni la fertilidad del perro.",
      "Alternativa médica a la castración quirúrgica.",
      "Requiere un curso prolongado (hasta 8 semanas) para ver el efecto máximo.",
      "En hurones, se utiliza para el manejo de la enfermedad adrenal con síntomas prostáticos."
    ],
    usos_principales: "Tratamiento de la hiperplasia prostática benigna (HPB) en perros y hurones.",
    inicio_accion: "Lento (semanas)",
    duracion_efecto: "Requiere administración continua diaria"
  },
  informacion_cliente: [
    "¡PELIGRO!: Las mujeres embarazadas o en edad fértil NO deben manipular tabletas rotas o trituradas, ya que puede causar malformaciones en el feto masculino.",
    "El medicamento ayuda a reducir el tamaño de la próstata pero no es una cura definitiva; los síntomas vuelven al suspenderlo.",
    "No afecta el deseo sexual ni la capacidad de reproducción de su perro.",
    "Informe si nota que el animal tiene dificultad para orinar a pesar del tratamiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hiperplasia prostática benigna",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis fija de 5 mg independientemente del peso para la mayoría de los perros."
      }
    ],
    huron: [
      {
        indicacion: "Hiperplasia prostática (Enfermedad adrenal)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros jóvenes en desarrollo sexual.",
      "Machos destinados a la cría inmediata (se excreta en el semen).",
      "Hipersensibilidad a la finasterida."
    ],
    contraindicaciones_especie: {
        "Huron": "No usar en hurones destinados a la reproducción."
    },
    efectos_adversos: [
      "Reducción del volumen de eyaculado.",
      "Potencial teratogénico (causa anomalías fetales si se expone la hembra al semen del perro tratado).",
      "Trastornos gastrointestinales leves (raro)."
    ],
    monitoreo_recomendado: [
      "Tamaño de la próstata mediante palpación o ecografía",
      "Facilidad de micción y defecación"
    ],
    instrucciones_manejo: "Manejar las tabletas con cuidado. No triturar. Las mujeres embarazadas deben usar guantes.",
    sobredosis: {
      signos: ["Generalmente bien tolerada incluso en dosis altas."],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la 5-alfa-reductasa tipo II, disminuyendo drásticamente los niveles intraprostáticos de dihidrotestosterona sin alterar los niveles de testosterona sistémica.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta recubierta",
      concentracion_texto: "5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
