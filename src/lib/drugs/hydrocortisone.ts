import type { Drug } from '@/lib/types';

export const hydrocortisoneDrug: Drug = {
  id: "hydrocortisone",
  meta_data: {
    nombre_generico: "Hidrocortisona",
    nombres_comerciales: ["Solu-cortef", "Efcortesol"],
    grupo_farmacologico: "Glucocorticoide; Mineralocorticoide",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Posee actividad tanto glucocorticoide como mineralocorticoide.",
      "4 mg de hidrocortisona equivalen a 1 mg de prednisolona.",
      "Utilizado principalmente para el manejo de emergencia del Addison agudo.",
      "La corrección rápida de la hiponatremia en Addison puede causar daño cerebral; ajustar dosis si la hiponatremia es severa.",
      "El uso en shock o trauma espinal no suele ser beneficioso y puede ser perjudicial."
    ],
    usos_principales: "Tratamiento de la crisis de Addison (hipoadrenocorticismo agudo) y antiinflamatorio tópico.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "La crema tópica debe aplicarse con guantes ya que se absorbe por la piel humana.",
    "Informe si nota que su mascota bebe u orina en exceso.",
    "El tratamiento para Addison suele requerir hospitalización inicial.",
    "No suspenda el medicamento repentinamente; requiere retirada gradual."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Crisis de Addison (Aguda)",
        vias: ["IV (Infusión continua)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg/h"
        },
        notas_tecnicas: "Reducir al 50% si hay hiponatremia severa para evitar mielinólisis pontina central."
      },
      {
        indicacion: "Hipoadrenocorticismo (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Antiinflamatorio sistémico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Uso tópico",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 8
        }
      }
    ],
    gato: [
      {
        indicacion: "Uso tópico",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales gestantes.",
      "Diabetes mellitus.",
      "Enfermedad renal severa.",
      "Úlceras gastrointestinales activas."
    ],
    efectos_adversos: [
      "Hiperadrenocorticismo iatrogénico (PU/PD, enzimas hepáticas altas).",
      "Atrofia cutánea y muscular (uso crónico).",
      "Vómitos y diarrea.",
      "Retraso en la cicatrización de heridas.",
      "Supresión del eje adrenal."
    ],
    monitoreo_recomendado: [
      "Niveles de sodio y potasio séricos (crítico en Addison)",
      "Glucosa en sangre",
      "Estado de la piel y pelaje"
    ],
    instrucciones_manejo: "Usar guantes para aplicación tópica. Tapering obligatorio.",
    sobredosis: {
      signos: ["Poliuria/Polidipsia severa", "Signos de Cushing", "Vómitos"],
      tratamiento: "Retirada gradual del fármaco."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Riesgo extremo de úlceras gastrointestinales.", severidad: "Grave" },
      { farmaco: "Insulina", efecto: "Antagonismo del efecto hipoglucemiante.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de los corticoides.", severidad: "Leve" },
      { farmaco: "Anfotericina B / Diuréticos de asa", efecto: "Aumentan el riesgo de hipopotasemia.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula la transcripción del ADN alterando el metabolismo celular y reduciendo la respuesta inflamatoria/inmune.",
    farmacocinetica: "Metabolismo hepático y excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable", concentracion_texto: "100 mg, 500 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 20 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Crema tópica", concentracion_texto: "0.5% a 1%", valor_concentracion: 1, unidad_concentracion: "%", es_divisible: false }
  ]
};
