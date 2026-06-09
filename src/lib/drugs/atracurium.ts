import type { Drug } from '@/lib/types';

export const atracuriumDrug: Drug = {
  id: "atracurium",
  meta_data: {
    nombre_generico: "Atracurio (Besilato de atracurio)",
    nombres_comerciales: ["Tracrium"],
    grupo_farmacologico: "Bloqueador neuromuscular no despolarizante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Produce parálisis muscular completa al inhibir la acción de la acetilcolina en la unión neuromuscular.",
      "Duración intermedia (15-35 min).",
      "Eliminación de Hofmann: proceso no enzimático independiente de la función renal o hepática.",
      "No es acumulativo; ideal para pacientes con enfermedad renal o hepática.",
      "Requiere obligatoriamente ventilación asistida y monitoreo con estimulador de nervios periféricos."
    ],
    usos_principales: "Bloqueo neuromuscular durante la anestesia para mejorar el acceso quirúrgico, facilitar la ventilación mecánica o para cirugía intraocular. En aves, se usa para inducir midriasis para examen ocular.",
    inicio_accion: "Rápido (1-2 minutos IV)",
    duracion_efecto: "15–35 minutos"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario bajo anestesia profunda.",
    "El animal no podrá respirar por sí mismo durante el efecto del fármaco, por lo que requerirá un respirador automático.",
    "Se monitorizará la recuperación completa de la fuerza muscular antes de despertar al paciente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueo neuromuscular (Dosis inicial)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar lentamente tras dilución. Incrementar con dosis de 0.2 mg/kg según sea necesario."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueo neuromuscular (Dosis inicial)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.2,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Cirugía intraocular / Facilitar ventilación",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.44,
          dosis_min: 0.1,
          dosis_max: 0.8,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Riesgo elevado de hipotensión e hipotermia intraoperatoria en esta especie."
      }
    ],
    ave: [
      {
        indicacion: "Midriasis para examen ocular / Cirugía",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.6,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales no anestesiados adecuadamente.",
      "Falta de instalaciones para ventilación a presión positiva.",
      "Pacientes con miastenia gravis (usar dosis mínimas).",
      "Hipersensibilidad conocida."
    ],
    precauciones: [
      "Hipotermia, acidosis e hipopotasemia prolongan significativamente el efecto.",
      "Evitar en pacientes hipovolémicos o con función cardíaca comprometida."
    ],
    efectos_adversos: [
      "Broncoespasmo e hipotensión (por liberación de histamina si se inyecta rápido).",
      "Apnea (efecto deseado pero mortal sin ventilador).",
      "Hipotermia."
    ],
    monitoreo_recomendado: [
      "Ventilación asistida constante",
      "Estimulador de nervios (Trend-of-Four)",
      "Presión arterial y EtCO2",
      "Temperatura corporal"
    ],
    instrucciones_manejo: "Mantener en refrigeración. Diluir en solución salina normal para minimizar la liberación de histamina e inyectar lentamente.",
    sobredosis: {
      signos: ["Parálisis muscular prolongada", "Hipotensión severa"],
      tratamiento: "Mantener ventilación asistida. Revertir con neostigmina o edrofonio (previa administración de atropina o glicopirrolato)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anestésicos volátiles (Isoflurano/Sevoflurano)", efecto: "Prolongan el bloqueo neuromuscular.", severidad: "Importante" },
      { farmaco: "Aminoglucósidos / Clindamicina / Lincomicina", efecto: "Potencian y prolongan el bloqueo neuromuscular.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo de los receptores nicotínicos de acetilcolina en la membrana post-unión de la placa motora.",
    farmacocinetica: "Eliminación de Hofmann (degradación espontánea en plasma a pH y temperatura fisiológica) y por hidrólisis de ésteres."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
