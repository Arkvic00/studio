import type { Drug } from '@/lib/types';

export const ketamineDrug: Drug = {
  id: "ketamine",
  meta_data: {
    nombre_generico: "Ketamina",
    nombres_comerciales: ["Anaestamine", "Anesketin", "Ketaset", "Ketavet", "Narketan-10", "Vetalar-V"],
    grupo_farmacologico: "Antagonista NMDA; Anestésico disociativo",
    status_regulatorio: "POM-V CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico disociativo que bloquea la sensibilización central vía receptores NMDA.",
      "Mantiene los reflejos protectores de las vías respiratorias y los ojos (estos permanecen abiertos).",
      "Produce estimulación cardiovascular leve (aumento de FC y presión arterial).",
      "Provoca rigidez muscular (hipertonicidad) si se usa sola; combinar con benzodiazepinas o alfa-2.",
      "Proporciona una excelente analgesia somática y visceral.",
      "En gatos, esperar 45 min tras la dosis antes de revertir un agonista alfa-2 concurrente."
    ],
    usos_principales: "Inducción y mantenimiento anestésico, inmovilización química, y analgesia perioperatoria (adyuvante).",
    inicio_accion: "Muy rápido (IV inmediato; IM 5-10 min)",
    duracion_efecto: "20–30 min (dosis única)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario estrictamente controlado.",
    "Su mascota puede parecer 'desconectada' o tener comportamientos extraños durante 1-2 horas en la recuperación.",
    "Los ojos permanecerán abiertos durante el procedimiento; el veterinario aplicará lubricante para protegerlos.",
    "La inyección en el músculo puede ser dolorosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción anestésica (Combinada)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con Diazepam o Midazolam."
      },
      {
        indicacion: "Analgesia perioperatoria (CRI)",
        vias: ["IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.6, unidad_calculo: "mg/kg/h (10 μg/kg/min)" },
        notas_tecnicas: "Preceder de bolo de 0.25-0.5 mg/kg. Mantenimiento postop: 2-5 μg/kg/min."
      },
      {
        indicacion: "Anestesia inyectable total",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 7, dosis_recomendada: 6, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con Medetomidina (40 μg/kg) o Dexmedetomidina (20 μg/kg)."
      }
    ],
    gato: [
      {
        indicacion: "Anestesia general (IM)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 5, dosis_max: 7.5, dosis_recomendada: 6.25, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con Medetomidina (80 μg/kg) o Dexmedetomidina (40 μg/kg). Reducir dosis si es IV."
      }
    ],
    huron: [
      {
        indicacion: "Inmovilización / Analgesia",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 30, dosis_recomendada: 20, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Pobre relajación muscular si se usa sola."
      }
    ],
    conejo: [
      {
        indicacion: "Sedación pesada / Analgesia",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 15, dosis_max: 30, dosis_recomendada: 22.5, unidad_calculo: "mg/kg" }
      }
    ],
    roedores: [
      {
        indicacion: "Cobayas / Ratas / Ratones: Inmovilización",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 10, dosis_max: 50, dosis_recomendada: 30, unidad_calculo: "mg/kg" }
      }
    ],
    reptil: [
      {
        indicacion: "Quelonios: Inmovilización",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 20, dosis_max: 60, dosis_recomendada: 40, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Lagartos: Inmovilización",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 25, dosis_max: 60, dosis_recomendada: 42.5, unidad_calculo: "mg/kg" }
      },
      {
        indicacion: "Serpientes: Inmovilización",
        vias: ["IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_min: 20, dosis_max: 80, dosis_recomendada: 50, unidad_calculo: "mg/kg" }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Sedación/Anestesia",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 20, dosis_max: 40, dosis_recomendada: 30, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Combinar con Diazepam (0.2-0.4 mg/kg IM). Sola tiene inducción y recuperación muy largas."
      }
    ],
    peces: [
      {
        indicacion: "Anestesia (Peces óseos)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 66, dosis_max: 88, dosis_recomendada: 77, unidad_calculo: "mg/kg" },
        notas_tecnicas: "No induce plano quirúrgico por sí sola. Combinar con Medetomidina."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Riesgo de perforación ocular o hipertensión intraocular.",
      "Hipertensión intracraneal.",
      "Fallo renal severo (especialmente en gatos donde se elimina sin cambios).",
      "Glaucoma."
    ],
    contraindicaciones_especie: {
        "Elasmobranquios (Tiburones/Rayas)": "ALERTA: Mucho más sensibles que los peces óseos. Reducir dosis."
    },
    efectos_adversos: [
      "Hipertonicidad muscular y temblores.",
      "Taquicardia y aumento de la presión arterial.",
      "Depresión cardiovascular en animales en shock o con tono simpático agotado.",
      "Recuperación agitada o alucinaciones.",
      "Salivación excesiva.",
      "Dolor en el sitio de inyección IM."
    ],
    monitoreo_recomendado: [
      "Lubricación ocular frecuente",
      "Frecuencia y ritmo cardíaco (ECG)",
      "Patrón respiratorio",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "Proteger de la luz. Evitar estímulos auditivos o visuales intensos durante la recuperación.",
    sobredosis: {
      signos: ["Convulsiones", "Paro respiratorio", "Hipertensión severa"],
      tratamiento: "Soporte ventilatorio, control de convulsiones con benzodiazepinas y fluidoterapia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los receptores NMDA del glutamato en el SNC, desconectando el sistema límbico de la corteza somatosensorial (anestesia disociativa).",
    farmacocinetica: "Altamente lipofílica. Metabolismo hepático a norketamina (activa) en la mayoría; los gatos la eliminan casi totalmente por vía renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "100 mg/ml",
      valor_concentracion: 100,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
