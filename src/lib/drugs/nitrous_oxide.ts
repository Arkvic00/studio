import type { Drug } from '@/lib/types';

export const nitrousOxideDrug: Drug = {
  id: "nitrous_oxide",
  meta_data: {
    nombre_generico: "Óxido Nitroso (N2O)",
    nombres_comerciales: ["Entonox (con O2)", "Nitrous oxide*"],
    grupo_farmacologico: "Gas anestésico coadyuvante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca depresión del SNC y tiene propiedades analgésicas leves.",
      "Aumenta la velocidad de inducción de otros gases anestésicos (Efecto del 2do gas).",
      "Reduce la concentración necesaria de gases inhalatorios (MAC-sparing).",
      "No debe usarse solo; requiere al menos un 30% de oxígeno inspirado.",
      "Riesgo de hipoxia por difusión al final del procedimiento.",
      "Gran impacto ambiental (gas de efecto invernadero)."
    ],
    usos_principales: "Coadyuvante en la inducción y mantenimiento de la anestesia general equilibrada.",
    inicio_accion: "Inmediato (inhalatorio)",
    duracion_efecto: "Limitada al tiempo de administración"
  },
  informacion_cliente: [
    "Gas utilizado durante la anestesia para que el animal despierte más rápido y suavemente.",
    "El veterinario administrará oxígeno puro durante 5-10 minutos al final del gas para evitar falta de aire.",
    "Uso estrictamente hospitalario bajo monitorización intensiva."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mantenimiento anestésico",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 60,
          dosis_min: 50,
          dosis_max: 70,
          unidad_calculo: "% de concentración inspirada"
        },
        notas_tecnicas: "Asegurar >30% O2 inspirado. No usar en circuitos cerrados con bajo flujo sin monitor de O2."
      }
    ],
    gato: [
      {
        indicacion: "Mantenimiento anestésico",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 60,
          dosis_min: 50,
          dosis_max: 70,
          unidad_calculo: "%"
        }
      }
    ],
    ave: [
      {
        indicacion: "Mantenimiento anestésico",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 60,
          dosis_min: 50,
          dosis_max: 70,
          unidad_calculo: "%"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Mantenimiento anestésico",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 60,
          dosis_min: 50,
          dosis_max: 70,
          unidad_calculo: "%"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Neumotórax o bullas pulmonares.",
      "Dilatación gástrica o torsión (GDV).",
      "Obstrucción intestinal con gas.",
      "Compromiso respiratorio severo.",
      "Presión intracraneal elevada."
    ],
    efectos_adversos: [
      "Expansión rápida de espacios llenos de gas (cavidades).",
      "Hipoxia por difusión (al desconectar).",
      "Inhibición de la vitamina B12 (oxidación del cobalto).",
      "Riesgo de agranulocitosis en exposición prolongada de días.",
      "Aumento del flujo sanguíneo cerebral."
    ],
    monitoreo_recomendado: [
      "Fracción inspirada de Oxígeno (FiO2) - Mínimo 30%",
      "Saturación de oxígeno (SpO2)",
      "Capnografía (EtCO2)",
      "Sistemas de extracción de gases (scavenging)"
    ],
    instrucciones_manejo: "El personal debe evitar la exposición crónica. Es un potente gas de efecto invernadero.",
    sobredosis: {
      signos: ["Hipoxia severa", "Cianosis", "Expansión súbita de abdomen"],
      treatment: "Cerrar flujo de N2O inmediatamente y ventilar con O2 al 100%."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Depresor central inespecífico. Su baja solubilidad permite que al absorberse rápido, 'empuje' a otros gases hacia la sangre (efecto de concentración).",
    farmacocinetica: "Eliminación pulmonar ultra-rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gas comprimido (Cilindro)",
      concentracion_texto: "100% N2O",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};