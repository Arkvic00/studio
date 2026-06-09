import type { Drug } from '@/lib/types';

export const silverSulfadiazineDrug: Drug = {
  id: "silver_sulfadiazine",
  meta_data: {
    nombre_generico: "Sulfadiazina de Plata",
    nombres_comerciales: ["Flamazine"],
    grupo_farmacologico: "Antibacteriano y antifúngico tópico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Libera lentamente iones de plata que son tóxicos para bacterias y levaduras.",
      "Componente de sulfadiazina que aporta actividad antiinfecciosa adicional.",
      "Excelente actividad contra Gram-negativos, especialmente Pseudomonas aeruginosa.",
      "Hasta un 10% puede absorberse sistémicamente en áreas extensas."
    ],
    usos_principales: "Manejo de quemaduras de segundo y tercer grado, e infecciones cutáneas bacterianas localizadas.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Usar siempre guantes para aplicar la crema.",
    "Limpiar la zona con un antiséptico suave antes de aplicar.",
    "No usar en cachorros o gatitos recién nacidos ni en hembras gestantes.",
    "Informe si nota irritación o enrojecimiento excesivo tras la aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones cutáneas / Quemaduras",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina (3 mm)"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones cutáneas / Quemaduras",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Neonatos.",
      "Gestación.",
      "Hipersensibilidad conocida a las sulfonamidas."
    ],
    efectos_adversos: [
      "Reacciones de hipersensibilidad local.",
      "Potencial acumulación sistémica en pacientes con insuficiencia renal o hepática severa.",
      "Decoloración grisácea transitoria de la piel."
    ],
    monitoreo_recomendado: [
      "Evolución de la cicatrización",
      "Función renal en aplicaciones de gran superficie"
    ],
    instrucciones_manejo: "Usar guantes estériles para evitar contaminación de la herida.",
    sobredosis: {
      signos: ["Irritación local marcada", "Cristaluria (si hay absorción masiva)"],
      tratamiento: "Limpiar la zona con agua tibia y salino; soporte renal si hay absorción sistémica masiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "La plata liberada daña la membrana celular y el ADN bacteriano; la sulfadiazina inhibe la síntesis de ácido fólico.",
    farmacocinetica: "Acción predominantemente local."
  },
  presentaciones_comerciales: [
    {
      tipo: "Crema tópica",
      concentracion_texto: "1% (10 mg/g)",
      valor_concentracion: 10,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};