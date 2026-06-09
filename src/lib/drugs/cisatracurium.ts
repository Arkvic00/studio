import type { Drug } from '@/lib/types';

export const cisatracuriumDrug: Drug = {
  id: "cisatracurium",
  meta_data: {
    nombre_generico: "Cisatracurio (Besilato de cisatracurio)",
    nombres_comerciales: ["Nimbex"],
    grupo_farmacologico: "Bloqueador neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador neuromuscular altamente potente (3–5 veces más que el atracurio en perros).",
      "Menor liberación de histamina y menor producción de laudanosina (metabolito epileptogénico) que el atracurio.",
      "Requiere obligatoriamente ventilación asistida (presión positiva) y monitorización con estimulador de nervios periféricos.",
      "No es acumulativo y su eliminación es independiente de la función renal o hepática (Eliminación de Hofmann).",
      "La analgesia es inexistente; el animal debe estar profundamente anestesiado antes de su administración."
    ],
    usos_principales: "Bloqueo neuromuscular durante la anestesia para mejorar el acceso quirúrgico, facilitar la ventilación mecánica o para procedimientos de cirugía intraocular.",
    inicio_accion: "Rápido (2–3 minutos IV)",
    duracion_efecto: "Intermedia (20–40 minutos)"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario bajo anestesia profunda.",
    "El animal requiere un respirador automático mientras dure el efecto del medicamento.",
    "Se monitorizará la recuperación de la función muscular antes del despertar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo neuromuscular (Inducción)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar lentamente tras dilución en NaCl 0.9%. Evaluar profundidad anestésica antes de la inyección."
      },
      {
        indicacion: "Bloqueo neuromuscular (Mantenimiento)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.03,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Según necesidad (monitoreo con estimulador de nervios)", intervalo_horas: 0 },
        notas_tecnicas: "Dosis adicionales basadas en el monitoreo del Tren de Cuatro (TOF)."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular (Uso extra-label)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Información clínica limitada; estudios experimentales sugieren características similares a los perros."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales no anestesiados adecuadamente.",
      "Falta de equipo de ventilación a presión positiva.",
      "Hipersensibilidad conocida."
    ],
    precauciones: [
      "La hipotermia, acidosis e hipopotasemia prolongan significativamente el bloqueo.",
      "Usar dosis mínimas en animales con miastenia gravis."
    ],
    efectos_adversos: [
      "Hipotensión y broncoespasmo si se administra IV muy rápido (por liberación de histamina).",
      "Apnea (efecto farmacológico que requiere soporte ventilatorio).",
      "Bradicardia leve."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "Estimulador de nervios periféricos (TOF)",
      "Presión arterial y EtCO2",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "Mantener en refrigeración (2–8°C). Diluir en solución salina normal e inyectar lentamente.",
    sobredosis: {
      signos: ["Parálisis muscular prolongada", "Hipotensión"],
      tratamiento: "Mantener ventilación asistida. Considerar reversión con edrofonio o neostigmina (previa administración de un anticolinérgico)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos volátiles / Aminoglucósidos", efecto: "Prolongan significativamente el bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Clindamicina / Lincomicina", efecto: "Potencian el efecto bloqueador neuromuscular.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de la acetilcolina en los receptores nicotínicos de la unión neuromuscular.",
    farmacocinetica: "Eliminación de Hofmann (degradación química espontánea). No depende del hígado ni riñones para su aclaramiento."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "2 mg/ml, 10 mg/ml",
      valor_concentracion: 2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
