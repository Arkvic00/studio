import type { Drug } from '@/lib/types';

export const betaxololDrug: Drug = {
  id: "betaxolol",
  meta_data: {
    nombre_generico: "Betaxolol",
    nombres_comerciales: ["Betoptic"],
    grupo_farmacologico: "Bloqueador beta-1 selectivo oftálmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador beta-1 selectivo que disminuye la producción de humor acuoso.",
      "Se utiliza en el manejo del glaucoma primario.",
      "Puede usarse solo o en combinación con otros fármacos (ej. inhibidores de la anhidrasa carbónica).",
      "Útil en el manejo profiláctico del ojo contralateral en perros con glaucoma primario de ángulo cerrado unilateral."
    ],
    usos_principales: "Tratamiento del glaucoma y profilaxis del ojo sano en casos de glaucoma unilateral en perros.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Administrar las gotas siguiendo estrictamente el horario indicado por el veterinario.",
    "Puede causar enrojecimiento leve o irritación en el ojo tras la aplicación.",
    "Informe si su mascota presenta dificultad para respirar, tos o debilidad inusual."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Glaucoma / Manejo profiláctico",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota por ojo"
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
      "Fallo cardíaco no controlado.",
      "Asma bronquial o enfermedad obstructiva de las vías respiratorias."
    ],
    efectos_adversos: [
      "Miosis (contracción de la pupila).",
      "Hiperemia conjuntival (enrojecimiento).",
      "Irritación local transitoria."
    ],
    monitoreo_recomendado: [
      "Presión intraocular regular",
      "Frecuencia cardíaca en pacientes con riesgo cardiovascular"
    ],
    sobredosis: {
      signos: ["Bradicardia", "Hipotensión", "Broncoespasmo (en caso de absorción sistémica excesiva)"],
      tratamiento: "Lavar el ojo con abundante solución salina estéril; soporte sintomático si hay efectos sistémicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores beta orales", efecto: "Posible potenciación de efectos adversos sistémicos.", severidad: "Moderada" },
      { farmaco: "Antagonistas de calcio / Digoxina", efecto: "Riesgo de prolongar el tiempo de conducción atrioventricular.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista selectivo de los receptores beta-1 adrenérgicos. Reduce la presión intraocular al disminuir la formación de humor acuoso mediante el bloqueo de los receptores en el cuerpo ciliar.",
    farmacocinetica: "Efecto local predominante con mínima absorción sistémica a dosis terapéuticas oftálmicas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oftálmica",
      concentracion_texto: "0.25% (frasco 5 ml)",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.5%",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
