import type { Drug } from '@/lib/types';

export const rocuroniumDrug: Drug = {
  id: "rocuronium",
  meta_data: {
    nombre_generico: "Rocuronio",
    nombres_comerciales: ["Esmeron"],
    grupo_farmacologico: "Bloqueante neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueante neuromuscular de acción intermedia.",
      "Inicio de acción muy rápido (especialmente IV).",
      "No libera histamina significativamente.",
      "Requiere ventilación mecánica obligatoria.",
      "Sus efectos pueden revertirse con sugammadex o neostigmina."
    ],
    usos_principales: "Relajación muscular durante anestesia general y facilitación de la intubación traqueal.",
    inicio_accion: "Rápido (< 2 min)",
    duracion_efecto: "20 a 30 minutos"
  },
  informacion_cliente: [
    "Uso hospitalario exclusivo bajo anestesia.",
    "El animal no podrá respirar por sí solo mientras dure el efecto.",
    "Se utiliza para cirugías complejas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Relajación neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          dosis_min: 0.2,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Bolo único, repetir según monitoreo (tren de cuatro)", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Relajación neuromuscular",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Ausencia de medios de ventilación mecánica.", "Insuficiencia hepática severa."],
    efectos_adversos: ["Apnea.", "Taquicardia leve.", "Hipotensión (rara)."],
    monitoreo_recomendado: ["Monitorización neuromuscular (TOF)", "Capnografía", "Saturación de O2"],
    instrucciones_manejo: "Mantener refrigerado. No administrar sin anestesia profunda previa.",
    sobredosis: {
      signos: ["Parálisis prolongada"],
      treatment: "Sugammadex (antídoto de elección) o Neostigmina + Atropina/Glicopirrolato."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Potencian el bloqueo neuromuscular.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Compite con la acetilcolina por los receptores nicotínicos en la placa motora terminal.",
    farmacocinetica: "Eliminación principalmente biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml" }
  ]
};