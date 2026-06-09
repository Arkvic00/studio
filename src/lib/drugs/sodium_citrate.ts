import type { Drug } from '@/lib/types';

export const sodiumCitrateDrug: Drug = {
  id: "sodium_citrate",
  meta_data: {
    nombre_generico: "Citrato de Sodio",
    nombres_comerciales: ["Micolette", "Micralax", "Relaxit"],
    grupo_farmacologico: "Laxante osmótico rectal",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca retención de agua en el lumen del intestino grueso.",
      "Formulado con ablandadores de heces (lauril sulfato).",
      "Induce la evacuación rápida.",
      "Uso para preparar el colon para pruebas radiográficas o proctoscopia."
    ],
    usos_principales: "Tratamiento del estreñimiento y preparación rectal en perros y gatos.",
    inicio_accion: "Casi inmediato (5-20 min)",
    duracion_efecto: "Hasta evacuación completa"
  },
  informacion_cliente: [
    "Se administra por vía rectal insertando la boquilla del micro-enema.",
    "El animal sentirá la necesidad de defecar muy rápido tras la aplicación.",
    "Informe si nota dolor abdominal severo.",
    "Asegúrese de que el animal esté bien hidratado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Preparación rectal",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "micro-enema (5 ml)"
        },
        frecuencia: {
          texto_ui: "Dosis única; repetir si es necesario",
          intervalo_horas: 0
        }
      }
    ],
    gato: [
      {
        indicacion: "Estreñimiento / Preparación",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "micro-enema (5 ml)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad inflamatoria intestinal (IBD).",
      "Obstrucción intestinal mecánica.",
      "Hemorragia rectal."
    ],
    efectos_adversos: [
      "Irritación local leve.",
      "Desequilibrios electrolíticos (raro si es puntual)."
    ],
    monitoreo_recomendado: [
      "Eficacia de la evacuación",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Lubricar la boquilla antes de insertar.",
    sobredosis: {
      signos: ["Diarrea profusa", "Malestar abdominal"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente osmótico que retiene agua en el colon, aumentando el volumen y estimulando el peristaltismo.",
    farmacocinetica: "Mínima absorción sistémica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Micro-enema",
      concentracion_texto: "450 mg Citrato + 45 mg Lauril sulfato / 5ml",
      valor_concentracion: 450,
      unidad_concentracion: "mg/5ml",
      es_divisible: false
    }
  ]
};