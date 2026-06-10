import type { Drug } from '@/lib/types';

export const toltrazurilDrug: Drug = {
  id: "toltrazuril",
  meta_data: {
    nombre_generico: "Toltrazuril",
    nombres_comerciales: ["Procox"],
    grupo_farmacologico: "Antiprotozoario; Coccidiocida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente coccidiocida que detiene la replicación del parásito y la eliminación de oocistos.",
      "No es efectivo contra los signos clínicos si el animal ya está gravemente infectado (daño tisular previo).",
      "Muy eficaz contra Isospora spp. y Hepatozoon canis.",
      "A menudo formulado con emodepside para cobertura completa.",
      "Uso extra-label en gatos reportado como seguro y eficaz."
    ],
    usos_principales: "Tratamiento de la coccidiosis (Isospora) en cachorros y gatitos. Prevención de la diseminación de oocistos.",
    inicio_accion: "Rápido (interrupción de replicación)",
    duracion_efecto: "Dosis única (repetir solo si persiste eliminación)"
  },
  informacion_cliente: [
    "Medicamento para eliminar parásitos microscópicos (coccidios).",
    "Generalmente se administra una sola dosis por boca.",
    "No usar en cachorros/gatitos menores de 2 semanas o de menos de 0.4 kg.",
    "Informe si nota diarrea persistente tras la dosis.",
    "Mantener la higiene del entorno para evitar la reinfección."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Coccidiosis (Isospora)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 9,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 },
        notas_tecnicas: "9 mg/kg corresponde a 0.5 ml/kg de Procox. Repetir solo si el conteo de oocistos sigue alto."
      }
    ],
    gato: [
      {
        indicacion: "Coccidiosis (Isospora)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 9,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 2 semanas.",
      "Animales con un peso inferior a 0.4 kg.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Vómitos y diarrea leves ocasionales.",
      "Anorexia transitoria."
    ],
    monitoreo_recomendado: [
      "Presencia de oocistos en heces (coprológico)",
      "Consistencia de las heces"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe las enzimas de la cadena respiratoria y la síntesis de pirimidinas en todas las etapas del desarrollo del parásito.",
    farmacocinetica: "Absorción oral parcial con persistencia en el lumen intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oral",
      concentracion_texto: "18 mg/ml (+ 0.9 mg/ml Emodepside)",
      valor_concentracion: 18,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
