import type { Drug } from '@/lib/types';

export const vecuroniumDrug: Drug = {
  id: "vecuronium",
  meta_data: {
    nombre_generico: "Vecuronio (Bromuro de vecuronio)",
    nombres_comerciales: ["Norcuron"],
    grupo_farmacologico: "Bloqueante neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Impide la acción de la acetilcolina en la unión neuromuscular.",
      "Duración intermedia (~20 min) dependiente de la dosis.",
      "Carece de efectos cardiovasculares significativos y no libera histamina.",
      "Ideal para cirugía intraocular (centraliza el globo ocular).",
      "La duración del bloqueo es menor en perros diabéticos.",
      "Requiere obligatoriamente ventilación asistida."
    ],
    usos_principales: "Bloqueo neuromuscular en anestesia general para facilitar ventilación, mejorar acceso quirúrgico o cirugía ocular.",
    inicio_accion: "Rápido (1-2 min IV)",
    duracion_efecto: "20 a 30 minutos"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario bajo anestesia profunda.",
    "El animal no podrá respirar por sí solo durante el efecto del medicamento.",
    "Se monitorizará la recuperación completa de la fuerza antes de despertar al paciente.",
    "Reversible con antídotos específicos (Sugammadex o Neostigmina)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo neuromuscular (Inducción)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Proporciona 25-30 min de bloqueo. Dosis de 0.05 mg/kg dura 16-19 min."
      },
      {
        indicacion: "Mantenimiento (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg/h"
        }
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falta de equipo de ventilación a presión positiva.",
      "Animales no anestesiados adecuadamente.",
      "Insuficiencia hepática severa (preferir atracurio)."
    ],
    efectos_adversos: [
      "Apnea (efecto deseado).",
      "Hipotermia prolonga el bloqueo.",
      "No tiene efectos cardiovasculares directos."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "Estimulador de nervios periféricos (TOF)",
      "Temperatura corporal",
      "Niveles de potasio"
    ],
    instrucciones_manejo: "Inestable en solución; reconstituir el polvo liofilizado justo antes de usar. No requiere refrigeración tras preparar por un periodo corto.",
    sobredosis: {
      signos: ["Parálisis muscular prolongada"],
      tratamiento: "Mantener ventilación asistida. Revertir con Sugammadex (8 mg/kg IV) o Neostigmina."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos inhalados (Isoflurano)", efecto: "Prolongan significativamente el bloqueo.", severidad: "Importante" },
      { farmaco: "Aminoglucósidos / Clindamicina", efecto: "Potencian el efecto bloqueador.", severidad: "Importante" },
      { farmaco: "Sugammadex", efecto: "Antagonista específico de reversión rápida.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores nicotínicos en la placa motora.",
    farmacocinetica: "Metabolismo hepático y excreción biliar/renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "10 mg (para reconstituir)",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
