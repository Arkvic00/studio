import type { Drug } from '@/lib/types';

export const lipidInfusionsDrug: Drug = {
  id: "lipid_infusions",
  meta_data: {
    nombre_generico: "Infusiones de Lípidos",
    nombres_comerciales: ["ClinOleic", "Intralipid", "Ivelip", "Lipidem", "Lipofundin", "Omegaven"],
    grupo_farmacologico: "Soporte nutricional parenteral; Antídoto de toxinas liposolubles",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Suministran grasa para la producción de energía y ácidos grasos esenciales.",
      "Se utilizan para secuestrar sustancias liposolubles en el compartimento plasmático (efecto 'lipid sink').",
      "Isosmolares con el plasma; pueden infundirse en venas periféricas.",
      "Eficaces en el tratamiento de sobredosis por ivermectina, moxidectina o bupivacaína.",
      "Uso con precaución en pacientes con resistencia a la insulina o riesgo de pancreatitis."
    ],
    usos_principales: "Soporte nutricional parenteral y tratamiento de toxicosis por compuestos liposolubles.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Continua durante la infusión o limitada a la eliminación de la toxina"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario.",
    "Requiere monitoreo constante de los niveles de grasas en sangre.",
    "No se debe usar si se observa una separación de las capas de la emulsión.",
    "Las líneas de administración deben ser exclusivas para este fármaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte Nutricional Parenteral",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 45,
          dosis_min: 30,
          dosis_max: 60,
          unidad_calculo: "% del requerimiento energético diario"
        }
      },
      {
        indicacion: "Toxicosis por toxinas liposolubles (Ivermectina / Bupivacaína)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.25,
          dosis_min: 1.5,
          dosis_max: 5,
          unidad_calculo: "ml/kg de solución al 20% (Bolo)"
        },
        frecuencia: { texto_ui: "Seguido de infusión 0.25-0.5 ml/kg/min por 30-60 min", intervalo_horas: 0 },
        notas_tecnicas: "Los bolos pueden repetirse. La infusión máxima es de 24 horas."
      }
    ],
    gato: [
      {
        indicacion: "Soporte Nutricional Parenteral",
        vias: ["IV (Vía central preferida)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          dosis_min: 40,
          dosis_max: 60,
          unidad_calculo: "% del requerimiento energético"
        }
      },
      {
        indicacion: "Toxicosis por toxinas liposolubles",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.25,
          dosis_min: 1.5,
          dosis_max: 5,
          unidad_calculo: "ml/kg (Bolo)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Diabetes mellitus (resistencia a la insulina).",
      "Hiperlipidemia preexistente.",
      "Separación visible de la emulsión."
    ],
    efectos_adversos: [
      "Episodios febriles (especialmente con soluciones al 20%).",
      "Vasculitis y trombosis (en concentraciones altas).",
      "Pancreatitis.",
      "Interferencia con mediciones bioquímicas (gases, calcio) si se toma la muestra antes del aclaramiento."
    ],
    monitoreo_recomendado: [
      "Aclaramiento de lípidos plasmáticos diario",
      "Temperatura corporal",
      "Integridad de la vía venosa"
    ],
    instrucciones_manejo: "No agitar vigorosamente. Usar líneas dedicadas exclusivamente a la nutrición parenteral.",
    sobredosis: {
      signos: ["Sobrecarga lipídica", "Fallo hepático (uso crónico)", "Paro cardíaco"],
      tratamiento: "Cese inmediato de la infusión y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros fármacos IV", efecto: "Incompatibilidad física frecuente. No mezclar en la misma línea.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Provee triglicéridos y ácidos grasos para el metabolismo celular. Actúa como 'lipid sink' atrapando moléculas liposolubles para evitar su unión a receptores diana.",
    farmacocinetica: "Eliminación por vía hepática similar a los quilomicrones naturales."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable IV",
      concentracion_texto: "10%, 20%",
      valor_concentracion: 1,
      unidad_concentracion: "ml",
      es_divisible: false
    }
  ]
};