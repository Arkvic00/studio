import type { Drug } from '@/lib/types';

export const pyridostigmineDrug: Drug = {
  id: "pyridostigmine",
  meta_data: {
    nombre_generico: "Piridostigmina (Bromuro de Piridostigmina)",
    nombres_comerciales: ["Mestinon*"],
    grupo_farmacologico: "Anticolinesterásico; Inhibidor reversible de la colinesterasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Prolonga la acción de la acetilcolina en la unión neuromuscular.",
      "Inicio de acción más lento que la neostigmina pero duración más larga.",
      "Tratamiento de elección para el mantenimiento de la Miastenia Gravis.",
      "En pacientes con megaesófago, requiere vía parenteral hasta poder deglutir.",
      "Requiere ajuste de dosis individualizado para maximizar fuerza y minimizar efectos secundarios."
    ],
    usos_principales: "Tratamiento de la Miastenia Gravis y reversión de bloqueadores neuromusculares no despolarizantes.",
    inicio_accion: "30-60 min (Oral)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Medicamento vital para que el animal recupere la fuerza muscular.",
    "El horario de las dosis debe ser muy estricto.",
    "Informe inmediatamente si nota babeo excesivo, diarrea, temblores o dificultad respiratoria.",
    "El ajuste de la dosis puede llevar varias semanas hasta encontrar el punto ideal.",
    "Si su mascota tiene dificultad para tragar, informe al veterinario antes de dar la tableta."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Miastenia Gravis (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.2,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con dosis baja y titular según respuesta motora. Reducir dosis un 25% si aparecen efectos muscarínicos."
      }
    ],
    gato: [
      {
        indicacion: "Miastenia Gravis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción mecánica gastrointestinal o urinaria.",
      "Peritonitis.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hipersalivación (ptialismo).",
      "Cólicos abdominales.",
      "Bradicardia.",
      "Debilidad extrema (por crisis colinérgica si hay sobredosis)."
    ],
    monitoreo_recomendado: [
      "Fuerza muscular post-dosis",
      "Frecuencia cardíaca",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "Observar precauciones normales. Tratar efectos muscarínicos con Atropina.",
    sobredosis: {
      signos: ["Crisis colinérgica: parálisis, babeo masivo, miosis, bradicardia"],
      tratamiento: "Cese inmediato; Atropina IV; soporte ventilatorio si hay parálisis respiratoria."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos / Clindamicina", efecto: "Antagonizan el efecto de la piridostigmina.", severidad: "Importante" },
      { farmaco: "Propranolol", efecto: "Antagonismo del efecto motor.", severidad: "Moderada" },
      { farmaco: "Relajantes musculares despolarizantes", efecto: "Potenciación del efecto bloqueador.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe reversiblemente la acetilcolinesterasa, aumentando la concentración de acetilcolina en la hendidura sináptica.",
    farmacocinetica: "Absorción oral variable. No atraviesa significativamente la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "60 mg",
      valor_concentracion: 60,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Jarabe oral",
      concentracion_texto: "12 mg/ml (60mg/5ml)",
      valor_concentracion: 12,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
