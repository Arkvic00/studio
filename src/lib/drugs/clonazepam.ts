import type { Drug } from '@/lib/types';

export const clonazepamDrug: Drug = {
  id: "clonazepam",
  meta_data: {
    nombre_generico: "Clonazepam",
    nombres_comerciales: ["Klonopin", "Linotril", "Rivotril"],
    grupo_farmacologico: "Benzodiazepina de acción prolongada",
    status_regulatorio: "POM (Sujeto a control de psicotrópicos)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Benzodiazepina con propiedades anticonvulsivas, miorrelajantes y ansiolíticas.",
      "Potencia la actividad del GABA en el receptor GABAA.",
      "Útil en el manejo del síndrome de caída episódica en el Cavalier King Charles Spaniel.",
      "Se desarrolla tolerancia con el uso prolongado; requiere retirada gradual (tapering).",
      "En gatos, existe riesgo de necrosis hepática aguda."
    ],
    usos_principales: "Tratamiento de la hipertonicidad muscular (episodic falling), ansiolítico para modificación de conducta y manejo de la hiperestesia felina.",
    inicio_accion: "30-60 minutos",
    duracion_efecto: "Prolongada (comparada con diazepam)"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina tras un uso prolongado.",
    "Puede causar somnolencia, debilidad o falta de coordinación (ataxia).",
    "En gatos, informe inmediatamente si nota color amarillento en los ojos o piel.",
    "El efecto puede disminuir con el tiempo debido a la tolerancia."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertonicidad muscular / Ansiolisis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis inicial sugerida. Existe un rango amplio de recomendaciones según el caso clínico."
      }
    ],
    gato: [
      {
        indicacion: "Ansiolisis / Hiperestesia / Epilepsia",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Vigilar estrechamente la función hepática. Se prefieren otros fármacos para el control crónico de la epilepsia."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Depresión marcada del SNC.",
      "Depresión respiratoria.",
      "Debilidad muscular severa (Miastenia gravis).",
      "Insuficiencia hepática severa (riesgo de encefalopatía).",
      "Glaucoma agudo de ángulo estrecho."
    ],
    efectos_adversos: [
      "Sedación y ataxia.",
      "Depresión respiratoria en dosis altas.",
      "Gatos: Necrosis hepática aguda (potencialmente fatal).",
      "Respuestas paradójicas de excitación."
    ],
    monitoreo_recomendado: [
      "Función hepática en gatos",
      "Estado de alerta y coordinación",
      "Frecuencia respiratoria"
    ],
    instrucciones_manejo: "Observar precauciones normales. Tapering obligatorio tras uso prolongado.",
    sobredosis: {
      signos: ["Sedación profunda", "Coma", "Apnea"],
      tratamiento: "Flumazenilo (antagonista específico) y soporte cardiorrespiratorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital / Fenitoína", efecto: "Aceleran el metabolismo del clonazepam.", severidad: "Moderada" },
      { farmaco: "Antifúngicos imidazoles", efecto: "Pueden aumentar los niveles de clonazepam.", severidad: "Moderada" },
      { farmaco: "Otros depresores del SNC", efecto: "Efectos sedantes aditivos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Potencia la inhibición mediada por GABA al unirse al receptor GABAA; también afecta la actividad de la glutamato decarboxilasa."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "0.5 mg, 2 mg", valor_concentracion: 0.5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "2 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
