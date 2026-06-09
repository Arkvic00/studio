import type { Drug } from '@/lib/types';

export const secobarbitalDrug: Drug = {
  id: "secobarbital",
  meta_data: {
    nombre_generico: "Secobarbital / Cincocaína",
    nombres_comerciales: ["Somulose"],
    grupo_farmacologico: "Barbitúrico + Anestésico local; Agente de eutanasia",
    status_regulatorio: "POM-V CD SCHEDULE 2"
  },
  resumen_clinico: {
    puntos_clave: [
      "Secobarbital causa inconsciencia y apnea profunda.",
      "Cincocaína causa cardiotoxicidad y paro cardíaco temprano.",
      "Eutanasia generalmente sin jadeos agónicos.",
      "¡EXTREMADAMENTE PELIGROSO PARA HUMANOS!: La autoinyección es letal.",
      "Velocidad de inyección crítica (10-15 segundos)."
    ],
    usos_principales: "Eutanasia humanitaria en perros y gatos.",
    inicio_accion: "Ultra-rápido",
    duracion_efecto: "Letal"
  },
  informacion_cliente: [
    "Fármaco utilizado exclusivamente para la terminación indolora de la vida.",
    "El animal pierde la consciencia y fallece en segundos.",
    "Uso hospitalario bajo supervisión de dos personas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Eutanasia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "ml/kg"
        },
        notas_tecnicas: "Administrar en 10-15 segundos. Usar catéter IV obligatorio."
      }
    ],
    gato: [
      {
        indicacion: "Eutanasia",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "ml/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso para anestesia (¡PROHIBIDO!).",
      "Vía extravascular (causa dolor y excitación)."
    ],
    efectos_adversos: [
      "Paro cardíaco prematuro si se inyecta demasiado rápido.",
      "Fallo del procedimiento si la inyección es lenta."
    ],
    monitoreo_recomendado: [
      "Cese de latido y pulso",
      "Ausencia de respiración"
    ],
    instrucciones_manejo: "¡PELIGRO!: No manipular solo. Usar guantes. Inyección accidental en humanos requiere asistencia médica inmediata.",
    sobredosis: {
      signos: ["Muerte cerebral y cardíaca inmediata"],
      tratamiento: "No aplica."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Depresor central masivo (barbitúrico) y bloqueo de la conducción cardíaca (anestésico local).",
    farmacocinetica: "Acción inmediata tras IV."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "400 mg/ml Seco. + 25 mg/ml Cinco.", valor_concentracion: 400, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
