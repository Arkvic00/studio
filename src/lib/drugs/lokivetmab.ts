import type { Drug } from '@/lib/types';

export const lokivetmabDrug: Drug = {
  id: "lokivetmab",
  meta_data: {
    nombre_generico: "Lokivetmab",
    nombres_comerciales: ["Cytopoint"],
    grupo_farmacologico: "Anticuerpo monoclonal caninizado (Anti-IL-31)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anticuerpo monoclonal caninizado diseñado para neutralizar la interleucina-31 (IL-31).",
      "La IL-31 es la principal citoquina responsable del prurito (picor) en la dermatitis atópica.",
      "Acción altamente específica; no interfiere con la inmunidad celular normal.",
      "Si el perro no responde tras 2 dosis con un mes de diferencia, considerar alternativas.",
      "La eficacia puede prolongarse más de un mes tras dosis repetidas."
    ],
    usos_principales: "Tratamiento de las manifestaciones clínicas de la dermatitis atópica en perros.",
    inicio_accion: "Rápido (alivio del picor en 24 horas)",
    duracion_efecto: "4 semanas (Mensual)"
  },
  informacion_cliente: [
    "Medicamento inyectable administrado mensualmente por el veterinario.",
    "Específico para el picor de la alergia ambiental (atopia).",
    "No requiere periodos de descanso ni tiene los efectos secundarios de los esteroides.",
    "Informe si nota hinchazón en la cara o erupciones tras la inyección (reacción alérgica rara)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatitis Atópica (Prurito)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada mes (según necesidad clínica)",
          intervalo_horas: 720
        },
        notas_tecnicas: "No administrar en perros de menos de 3 kg. Usar viales completos para evitar desperdicio y asegurar la dosis."
      }
    ],
    gato: [
      {
        indicacion: "¡NO INDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "Anticuerpo caninizado; no apto para gatos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros con un peso menor a 3 kg.",
      "Hipersensibilidad conocida al lokivetmab."
    ],
    efectos_adversos: [
      "Reacciones de hipersensibilidad (anafilaxia, edema facial, urticaria) - muy raras.",
      "Letargo transitorio.",
      "Vómitos y diarrea (infrecuentes)."
    ],
    monitoreo_recomendado: [
      "Grado de prurito (Escala Visual Análoga)",
      "Signos de hipersensibilidad inmediata post-inyección"
    ],
    instrucciones_manejo: "Mantener en refrigeración (2-8°C). NO AGITAR el vial vigorosamente. No mezclar con otros productos inyectables.",
    sobredosis: {
      signos: ["No reportados; alta seguridad clínica"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: [
      { farmaco: "Vacunas / Antibióticos / AINEs", efecto: "Sin interacciones reportadas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la IL-31 circulante, impidiendo que esta se acople a su receptor en las neuronas sensitivas, bloqueando la señal del picor hacia el cerebro.",
    farmacocinetica: "Eliminación vía degradación proteica normal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable",
      concentracion_texto: "10 mg, 20 mg, 30 mg, 40 mg",
      valor_concentracion: 1,
      unidad_concentracion: "vial",
      es_divisible: false
    }
  ]
};