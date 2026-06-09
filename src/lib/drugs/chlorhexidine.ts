import type { Drug } from '@/lib/types';

export const chlorhexidineDrug: Drug = {
  id: "chlorhexidine",
  meta_data: {
    nombre_generico: "Clorhexidina",
    nombres_comerciales: [
      "Adaxio", "Antisept", "Clorexyderm", "CLX wipes", "Douxo Pyo", 
      "Ermidra foam", "Hibiscrub", "Malaseb", "Microbex", "Otodine", 
      "Stomidine F", "Corsodyl", "Savlon", "TrizChlor"
    ],
    grupo_farmacologico: "Antiséptico químico",
    status_regulatorio: "POM-V, GSL, Venta libre"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiséptico que interrumpe la membrana celular bacteriana.",
      "Tratamiento tópico de infecciones bacterianas, dermatofitos y Malassezia.",
      "Debe permanecer en contacto con la piel 5-10 minutos antes de enjuagar.",
      "Sinergia con Tris-EDTA en preparaciones óticas para gram-negativos.",
      "Ototóxico: no usar en oídos si no se confirma la integridad del tímpano.",
      "No debe entrar en contacto con los ojos."
    ],
    usos_principales: "Antisepsia cutánea, lavado de heridas, higiene dental, limpieza de oídos y preparación quirúrgica.",
    inicio_accion: "Inmediato (contacto local)",
    duracion_efecto: "Persistencia residual moderada en la piel"
  },
  informacion_cliente: [
    "Evite el contacto con los ojos de su mascota.",
    "Si se usa en champú, deje actuar de 5 a 10 minutos antes de aclarar.",
    "Informe si nota irritación excesiva o enrojecimiento tras la aplicación.",
    "No usar en oídos si sospecha que el tímpano está roto."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones cutáneas (Antisepsia general)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación (conc. 0.5% - 2.0%)"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Lavado de heridas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.05,
          unidad_calculo: "% (dilución en agua)"
        }
      },
      {
        indicacion: "Limpieza ótica",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "% (concentración final)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Antisepsia cutánea",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación (conc. 0.5% - 2.0%)"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Antisepsia tópica",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación"
        },
        frecuencia: { texto_ui: "2 a 3 veces por semana", intervalo_horas: 72 }
      }
    ],
    reptil: [
      {
        indicacion: "Lavado de heridas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.05,
          unidad_calculo: "% (dilución en agua)"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Preparación sitio quirúrgico",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.025,
          unidad_calculo: "% (uso muy moderado)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado (riesgo de ototoxicidad).",
      "Contacto con los ojos (riesgo de úlceras corneales).",
      "Hipersensibilidad a la clorhexidina."
    ],
    contraindicaciones_especie: {
      "Anfibios": "¡NO RECOMENDADO!: Asociado con daños severos en la piel.",
      "Gato": "Evitar contacto con mucosas orales (irritante)."
    },
    efectos_adversos: [
      "Ototoxicidad (si el tímpano está roto).",
      "Irritación de mucosas.",
      "Dermatitis de contacto en individuos sensibles."
    ],
    monitoreo_recomendado: [
      "Integridad del tímpano antes de aplicación ótica",
      "Estado de la superficie ocular si hay contacto accidental"
    ],
    instrucciones_manejo: "Observar precauciones normales. No mezclar con otros antisépticos a menos que se indique.",
    sobredosis: {
      signos: ["Irritación severa", "Sordera (si es ótico)"],
      tratamiento: "Lavado inmediato con abundante agua limpia o salino."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente antiséptico que altera la permeabilidad de la membrana celular bacteriana, provocando la lisis del contenido intracelular.",
    farmacocinetica: "Acción tópica local. Posee una excelente persistencia residual en la piel."
  },
  presentaciones_comerciales: [
    { tipo: "Champú", concentracion_texto: "2% a 4%", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Solución quirúrgica", concentracion_texto: "4% (Hibiscrub)", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Limpiador ótico", concentracion_texto: "0.15% (TrizChlor)", valor_concentracion: 1.5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Enjuague bucal", concentracion_texto: "0.12% (Chlorohex)", valor_concentracion: 1.2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
