import type { Drug } from '@/lib/types';

export const ramiprilDrug: Drug = {
  id: "ramipril",
  meta_data: {
    nombre_generico: "Ramipril",
    nombres_comerciales: ["Vasotop"],
    grupo_farmacologico: "Inhibidor de la Enzima Convertidora de Angiotensina (IECA)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la conversión de angiotensina I en angiotensina II.",
      "Reduce la precarga y poscarga mediante vasodilatación equilibrada.",
      "Disminuye la retención de sodio y agua.",
      "Posee efectos de remodelación cardíaca y vascular positivos.",
      "Ayuda a reducir la proteinuria al dilatar la arteriola eferente renal.",
      "Requiere monitoreo regular de presión arterial y función renal."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva en perros y gatos, hipertensión sistémica y proteinuria.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy débil, se marea o tiene las encías pálidas.",
    "Se requieren análisis de sangre periódicos para vigilar los riñones.",
    "No suspenda el medicamento de forma repentina.",
    "Administrar una vez al día.",
    "No usar en hembras gestantes o lactantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insuficiencia Cardíaca / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (aumentar a 0.25 mg/kg tras 2 semanas si es necesario)",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Hipertensión sistémica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.125,
          dosis_max: 0.25,
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
      "Estenosis valvular hemodinámicamente relevante.",
      "Cardiomiopatía hipertrófica obstructiva.",
      "Hipotensión severa o hipovolemia."
    ],
    efectos_adversos: [
      "Hipotensión (debilidad, ataxia).",
      "Hiperpotasemia.",
      "Azotemia prerenal.",
      "Vómitos y diarrea (raros)."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica",
      "Creatinina y Urea séricas",
      "Electrolitos (Potasio)"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Colapso"],
      tratamiento: "Soporte de volumen con fluidos isotónicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Espironolactona / Potasio", efecto: "Riesgo de hiperpotasemia severa.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumentan riesgo de nefrotoxicidad y reducen eficacia del IECA.", severidad: "Importante" },
      { farmaco: "Diuréticos / Vasodilatadores", efecto: "Efecto hipotensor aditivo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Pro-fármaco convertido en ramiprilato, inhibidor potente de la ACE.",
    farmacocinetica: "Metabolismo hepático y eliminación biliar/renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "1.25 mg, 2.5 mg, 5 mg", valor_concentracion: 1.25, unidad_concentracion: "mg", es_divisible: true }
  ]
};
