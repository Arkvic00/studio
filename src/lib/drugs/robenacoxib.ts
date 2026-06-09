import type { Drug } from '@/lib/types';

export const robenacoxibDrug: Drug = {
  id: "robenacoxib",
  meta_data: {
    nombre_generico: "Robenacoxib",
    nombres_comerciales: ["Onsior"],
    grupo_farmacologico: "AINE (Inhibidor selectivo de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor altamente selectivo de la enzima COX-2.",
      "Selectividad tisular: se concentra en sitios de inflamación.",
      "Vida media plasmática corta (2h) pero persistencia prolongada en tejidos inflamados.",
      "Autorizado para uso postoperatorio y trastornos musculoesqueléticos.",
      "Las tabletas para gatos son altamente palatables."
    ],
    usos_principales: "Alivio del dolor e inflamación asociados a trastornos musculoesqueléticos y cirugía ortopédica o de tejidos blandos.",
    inicio_accion: "Rápido (SC 30 min antes de cirugía)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "En perros, no administrar con comida ya que reduce su eficacia.",
    "En gatos, puede mezclarse con una pequeña cantidad de alimento.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "No usar en animales de menos de 2.5 kg.",
    "Completar el ciclo de tratamiento indicado por el veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Uso SC máximo por 2 días. Uso oral discontinuar si no hay mejora en 10 días."
      }
    ],
    gato: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad GI activa o trastornos de la coagulación.",
      "Gestación y lactancia.",
      "Perros < 12 semanas / Gatos < 16 semanas.",
      "Animales < 2.5 kg."
    ],
    efectos_adversos: [
      "Trastornos gastrointestinales leves (vómitos, diarrea).",
      "Riesgo de nefrotoxicidad en presencia de hipotensión anestésica.",
      "Hemorragia gastrointestinal (raro)."
    ],
    monitoreo_recomendado: [
      "Función renal y hepática en tratamientos largos (>12 semanas)",
      "Presión arterial durante la cirugía",
      "Signos de sangrado digestivo"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Melena", "Letargo"],
      tratamiento: "Soporte sintomático y protectores gástricos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. Esperar 3-5 días entre fármacos.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento del riesgo de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de la ciclooxigenasa-2 (COX-2), reduciendo la síntesis de prostaglandinas proinflamatorias.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral (Dogs)", concentracion_texto: "5, 10, 20, 40 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta oral (Cats)", concentracion_texto: "6 mg", valor_concentracion: 6, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "20 mg/ml", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
