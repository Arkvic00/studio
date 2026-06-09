import type { Drug } from '@/lib/types';

export const cimicoxibDrug: Drug = {
  id: "cimicoxib",
  meta_data: {
    nombre_generico: "Cimicoxib",
    nombres_comerciales: ["Cimalgex"],
    grupo_farmacologico: "AINE (Inhibidor selectivo de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de la enzima COX-2.",
      "Reduce la producción de prostaglandinas involucradas en la inflamación.",
      "Indicado para dolor de osteoartritis y manejo perioperatorio.",
      "Puede afectar la perfusión renal si ocurre hipotensión durante la anestesia."
    ],
    usos_principales: "Tratamiento del dolor e inflamación asociados con la osteoartritis y el manejo del dolor perioperatorio debido a cirugía ortopédica o de tejidos blandos en perros.",
    inicio_accion: "Pico plasmático rápido; administrar 2 horas antes de la cirugía",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Puede administrarse con o sin comida.",
    "Informe si nota pérdida de apetito, vómitos o diarrea (usualmente leves).",
    "Si sospecha de sangrado (heces negras), suspenda el uso inmediatamente.",
    "Se requiere un periodo de descanso (wash-out) de 3 a 5 días antes de cambiar a otro antiinflamatorio."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis / Dolor Perioperatorio",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Para uso perioperatorio: una dosis 2h antes de la cirugía, seguida de 3-7 días de tratamiento. En osteoartritis, evaluar respuesta tras 6 meses."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros menores de 10 semanas de edad.",
      "Animales deshidratados, hipovolémicos o hipotensos.",
      "Enfermedad gastrointestinal activa o trastornos de la coagulación.",
      "Hembras gestantes o lactantes.",
      "Uso concurrente con otros AINEs o glucocorticoides (esperar 24h)."
    ],
    contraindicaciones_especie: {
      "Gato": "¡CONTRAINDICADO!: No autorizado para su uso en gatos."
    },
    precauciones: [
      "Seguridad no determinada en perros < 6 meses; monitorear estrechamente.",
      "Enfermedad renal o hepática previa conlleva riesgo adicional."
    ],
    efectos_adversos: [
      "Signos gastrointestinales (vómitos, diarrea).",
      "Hemorragia gastrointestinal (raro).",
      "Potencial nefrotoxicidad durante hipotensión."
    ],
    monitoreo_recomendado: [
        "Función renal y hepática en tratamientos prolongados",
        "Presión arterial durante la cirugía si se administró previamente"
    ],
    instrucciones_manejo: "Observar precauciones normales. Las tabletas son masticables y palatables.",
    sobredosis: {
      signos: ["Vómitos", "Anorexia", "Gastritis"],
      tratamiento: "Soporte sintomático y protectores gástricos."
    },
    interacciones_farmacologicas: [
        { farmaco: "Otros AINEs / Corticosteroides", efecto: "Aumenta drásticamente el riesgo de úlceras GI.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de la ciclooxigenasa-2 (COX-2).",
    farmacocinetica: "Metabolismo hepático. La enfermedad hepática prolonga su metabolismo aumentando el riesgo de acumulación."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tabletas masticables",
      concentracion_texto: "8 mg, 30 mg, 80 mg",
      valor_concentracion: 8,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};