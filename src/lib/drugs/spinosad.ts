import type { Drug } from '@/lib/types';

export const spinosadDrug: Drug = {
  id: "spinosad",
  meta_data: {
    nombre_generico: "Spinosad",
    nombres_comerciales: ["Comfortis", "Trifexis"],
    grupo_farmacologico: "Insecticida (Espinisinas)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Adulticida de pulgas de acción rápida.",
      "Activa los receptores nicotínicos de acetilcolina del insecto.",
      "Debe administrarse con comida o inmediatamente después.",
      "La versión Trifexis incluye milbemicina oxima para parásitos internos.",
      "No usar en animales con historial de convulsiones (epilepsia)."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas en perros y gatos.",
    inicio_accion: "30 minutos (eliminación de pulgas en 4h)",
    duracion_efecto: "4 semanas (Mensual)"
  },
  informacion_cliente: [
    "Administrar la tableta masticable siempre con el alimento.",
    "Una sola dosis protege por un mes entero.",
    "El animal puede presentar vómitos leves tras la primera dosis.",
    "No usar en cachorros o gatitos menores de 14 semanas.",
    "No administrar junto con dosis altas de Ivermectina."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 57.5,
          dosis_min: 45,
          dosis_max: 70,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 28 días con comida",
          intervalo_horas: 672
        }
      }
    ],
    gato: [
      {
        indicacion: "Control de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 62.5,
          dosis_min: 50,
          dosis_max: 75,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 28 días con comida",
          intervalo_horas: 672
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 14 semanas o < 1.2 kg.",
      "Historial de epilepsia o convulsiones.",
      "Uso conjunto con lactonas macrocíclicas (Ivermectina) a dosis altas."
    ],
    efectos_adversos: [
      "Vómitos (relativamente común).",
      "Letargo y anorexia.",
      "Ataxia y temblores musculares.",
      "Convulsiones en animales predispuestos."
    ],
    monitoreo_recomendado: [
      "Estado neurológico post-dosis",
      "Tolerancia gastrointestinal"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos severos", "Signos neurológicos transitorios"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ivermectina (dosis alta)", efecto: "Aumento drástico del riesgo de neurotoxicidad. NO COMBINAR.", severidad: "Grave" },
      { farmaco: "Digoxina / Doxorrubicina", efecto: "Spinosad es sustrato de P-gp; usar con precaución.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Sobreestimulación persistente de los receptores nicotínicos de acetilcolina del insecto, provocando parálisis y muerte.",
    farmacocinetica: "Absorción oral rápida; la comida duplica su biodisponibilidad."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta masticable",
      concentracion_texto: "90 mg a 1620 mg",
      valor_concentracion: 270,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
