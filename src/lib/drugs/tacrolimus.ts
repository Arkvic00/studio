import type { Drug } from '@/lib/types';

export const tacrolimusDrug: Drug = {
  id: "tacrolimus",
  meta_data: {
    nombre_generico: "Tacrolimus (FK 506)",
    nombres_comerciales: ["Protopic", "Tacrolimus*"],
    grupo_farmacologico: "Inmunosupresor (Inhibidor de calcineurina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor potente de linfocitos T (10-100 veces más que la ciclosporina).",
      "Uso oftálmico para KCS inmunomediada refractaria a ciclosporina.",
      "Uso tópico para dermatitis atópica localizada y lupus eritematoso.",
      "Asociado a riesgo potencial de neoplasias locales (ej. SCC corneal).",
      "Puede afectar los niveles de glucosa en animales diabéticos."
    ],
    usos_principales: "Tratamiento de la queratoconjuntivitis seca (KCS) refractaria y dermatosis autoinmunes localizadas en perros.",
    inicio_accion: "Lento (semanas)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Usar guantes para aplicar el ungüento en la piel.",
    "Informe si nota que el ojo de su mascota parece más irritado o si parpadea mucho tras la gota.",
    "El veterinario monitoreará la salud de la superficie del ojo regularmente.",
    "Si su mascota es diabética, se requieren controles de azúcar más frecuentes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "KCS refractaria / Oftálmico",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota (0.02% o 0.03%)"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Dermatosis localizada",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación fina de ungüento 0.1%"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Uso en tumores de piel activos."
    ],
    efectos_adversos: [
      "Molestia local (blefaroespasmo) tras la aplicación ocular.",
      "Riesgo aumentado de carcinoma de células escamosas (uso prolongado).",
      "Hiperglucemia (sistémico).",
      "Pérdida de pigmento local (tópico)."
    ],
    monitoreo_recomendado: [
      "Producción de lágrima (STT)",
      "Glucosa sanguínea en diabéticos",
      "Examen citológico de lesiones cutáneas crónicas"
    ],
    instrucciones_manejo: "Usar guantes impermeables para aplicación dermatológica.",
    sobredosis: {
      signos: ["Irritación ocular marcada", "Signos sistémicos si hay ingestión"],
      tratamiento: "Lavar con abundante salino; soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "Sustratos similares; evitar uso sistémico conjunto.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la inmunofilina FKBP12, inhibiendo la calcineurina y bloqueando la transcripción de IL-2 en linfocitos T.",
    farmacocinetica: "Absorción sistémica mínima tras aplicación tópica ocular/cutánea."
  },
  presentaciones_comerciales: [
    { tipo: "Ungüento dérmico", concentracion_texto: "0.03%, 0.1%", valor_concentracion: 1, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Gotas oftálmicas", concentracion_texto: "0.02%, 0.03%", valor_concentracion: 0.2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
