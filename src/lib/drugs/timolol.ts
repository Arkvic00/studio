import type { Drug } from '@/lib/types';

export const timololDrug: Drug = {
  id: "timolol",
  meta_data: {
    nombre_generico: "Timolol (Maleato de Timolol)",
    nombres_comerciales: ["Azarga", "CoSopt", "Timoptol"],
    grupo_farmacologico: "Bloqueador beta-adrenérgico no selectivo oftálmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Beta-bloqueador tópico que disminuye la producción de humor acuoso.",
      "Utilizado para el manejo del glaucoma canino y felino.",
      "A menudo se combina con inhibidores de la anhidrasa carbónica (ej. dorzolamida).",
      "Provoca miosis (contracción pupilar), lo que debe considerarse en uveítis.",
      "Riesgo de absorción sistémica en animales pequeños."
    ],
    usos_principales: "Tratamiento del glaucoma primario y secundario en perros y gatos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Aplique las gotas siguiendo el horario estricto para evitar picos de presión dolorosos.",
    "Informe si nota que su mascota parece muy cansada o tiene dificultad para respirar.",
    "La pupila se verá más pequeña de lo normal tras la aplicación.",
    "No usar en animales con insuficiencia cardíaca descompensada o asma."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Manejo del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Manejo del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia cardíaca no controlada.",
      "Asma bronquial o enfermedad obstructiva de vías respiratorias.",
      "Bradicardia severa."
    ],
    efectos_adversos: [
      "Miosis (pupilas pequeñas).",
      "Hiperemia conjuntival (enrojecimiento).",
      "Bradicardia e hipotensión (por absorción sistémica).",
      "Broncoespasmo (raro)."
    ],
    monitoreo_recomendado: [
      "Presión intraocular regular",
      "Frecuencia cardíaca",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos oftálmicos estériles.",
    sobredosis: {
      signos: ["Bradicardia", "Hipotensión", "Letargo"],
      tratamiento: "Lavar el ojo con salino; soporte cardiovascular si hay efectos sistémicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores orales", efecto: "Potenciación de efectos sistémicos adversos.", severidad: "Importante" },
      { farmaco: "Bloqueadores de canales de calcio / Digoxina", efecto: "Riesgo de bloqueos de conducción cardíaca.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los receptores beta-adrenérgicos en el cuerpo ciliar, reduciendo la producción de humor acuoso.",
    farmacocinetica: "Efecto local predominante."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas",
      concentracion_texto: "0.25%, 0.5%",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
