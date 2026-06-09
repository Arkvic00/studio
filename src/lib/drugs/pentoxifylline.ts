import type { Drug } from '@/lib/types';

export const pentoxifyllineDrug: Drug = {
  id: "pentoxifylline",
  meta_data: {
    nombre_generico: "Pentoxifilina",
    nombres_comerciales: ["Trental*"],
    grupo_farmacologico: "Agente reológico; Inhibidor de TNF-alfa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta la flexibilidad de los glóbulos rojos, reduciendo la viscosidad sanguínea.",
      "Mejora la microcirculación en tejidos isquémicos.",
      "Posee efectos antiinflamatorios al inhibir la producción de TNF-alfa.",
      "Uso principal en enfermedades vasculares de la piel.",
      "Efecto clínico máximo puede tardar hasta 4-8 semanas."
    ],
    usos_principales: "Tratamiento de vasculitis cutáneas, dermatomiositis, trombosis y soporte en atopia.",
    inicio_accion: "Lento (semanas)",
    duracion_efecto: "Requiere administración diaria frecuente"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida para reducir molestias estomacales.",
    "El tratamiento suele ser de larga duración.",
    "Informe si nota vómitos o diarrea.",
    "No es un tratamiento de efecto inmediato; los resultados se ven con el tiempo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Vasculitis / Vasculopatías",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hemorragias cerebrales o retinales activas.",
      "Insuficiencia renal o hepática severa.",
      "Hipersensibilidad a las xantinas."
    ],
    efectos_adversos: [
      "Vómitos y náuseas (irritación gástrica).",
      "Nerviosismo o inquietud.",
      "Taquicardia leve.",
      "Hemorragias (raro)."
    ],
    monitoreo_recomendado: [
      "Estado de las lesiones vasculares",
      "Tolerancia digestiva"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos severos", "Taquicardia", "Convulsiones"],
      tratamiento: "Soporte sintomático; lavado gástrico si es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Aspirina", efecto: "Aumento potencial del riesgo de sangrado.", severidad: "Moderada" },
      { farmaco: "Teofilina", efecto: "Aumento de efectos secundarios de las xantinas.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la fosfodiesterasa que incrementa el AMPc en los eritrocitos, mejorando su deformabilidad.",
    farmacocinetica: "Absorción oral buena. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "400 mg", valor_concentracion: 400, unidad_concentracion: "mg", es_divisible: true }
  ]
};
