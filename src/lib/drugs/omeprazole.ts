import type { Drug } from '@/lib/types';

export const omeprazoleDrug: Drug = {
  id: "omeprazole",
  meta_data: {
    nombre_generico: "Omeprazol",
    nombres_comerciales: ["Gastrogard", "Losec", "Mepradec", "Mezzopram", "Zanprol"],
    grupo_farmacologico: "Inhibidor de la bomba de protones (IBP)",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor potente de la secreción ácida gástrica.",
      "Efectos significativamente mayores que los antagonistas H2 (famotidina, cimetidina).",
      "La administración preoperatoria reduce el reflujo gastroesofágico durante la anestesia.",
      "La dosificación q12h es más efectiva para mantener el pH gástrico terapéutico.",
      "El tratamiento prolongado (>8 semanas) debe evaluarse con cuidado por riesgo de hipergastrinemia."
    ],
    usos_principales: "Manejo de úlceras gástricas y duodenales, esofagitis, y condiciones hipersecretoras secundarias a gastrinoma o mastocitoma.",
    inicio_accion: "Rápido (pico en 1-2 horas)",
    duracion_efecto: "Superior a 24 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente 30 a 60 minutos antes del desayuno.",
    "No triturar ni permitir que el animal mastique las cápsulas gastro-resistentes.",
    "Informe si nota diarrea, náuseas o erupciones en la piel.",
    "El tratamiento suele limitarse a un máximo de 8 semanas.",
    "Asegúrese de que el animal complete el ciclo indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas (q12h preferido en enfermedad grave)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Máximo de 8 semanas de tratamiento continuo recomendado."
      }
    ],
    gato: [
      {
        indicacion: "Gastritis / Úlceras / Esofagitis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.85,
          dosis_min: 0.75,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    huron: [
      {
        indicacion: "Gastritis / Protección gástrica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.35,
          dosis_min: 0.7,
          dosis_max: 4.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    primates: [
      {
        indicacion: "Gastritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          unidad_calculo: "mg/kg"
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
      "No hay contraindicaciones absolutas reportadas."
    ],
    efectos_adversos: [
      "Diarrea, náuseas y estreñimiento.",
      "Erupciones cutáneas.",
      "Fracturas dentales (reportadas en uso crónico).",
      "Hipergastrinemia tras uso prolongado."
    ],
    monitoreo_recomendado: [
      "Resolución de los signos clínicos (vómitos, apetito)",
      "Función renal en pacientes predispuestos"
    ],
    instrucciones_manejo: "El inyectable IV debe diluirse únicamente en NaCl 0.9% o Dextrosa 5%. No usar si hay partículas.",
    sobredosis: {
      signos: ["Trastornos digestivos leves"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Itraconazol", efecto: "Omeprazol reduce su absorción oral al aumentar el pH.", severidad: "Importante" },
      { farmaco: "Clopidogrel", efecto: "Riesgo de reducción de la eficacia del antiagregante.", severidad: "Moderada" },
      { farmaco: "Fenitoína", efecto: "Omeprazol puede aumentar los niveles de fenitoína.", severidad: "Moderada" },
      { farmaco: "Micofenolato / Tacrolimus", efecto: "Posible alteración de niveles plasmáticos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor irreversible de la bomba de protones (H+/K+ ATPasa) en la membrana apical de la célula parietal gástrica.",
    farmacocinetica: "Requiere un ambiente ácido para activarse; se comercializa en formas gastro-resistentes. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula gastro-resistente",
      concentracion_texto: "10, 20, 40 mg",
      valor_concentracion: 20,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Vial inyectable IV",
      concentracion_texto: "40 mg",
      valor_concentracion: 40,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
