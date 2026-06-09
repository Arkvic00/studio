import type { Drug } from '@/lib/types';

export const gelatineDrug: Drug = {
  id: "gelatine",
  meta_data: {
    nombre_generico: "Gelatina (Oxipoligelatina, Poligelina)",
    nombres_comerciales: ["Gelofusine", "Haemaccel"],
    grupo_farmacologico: "Coloide sintético; Expansor plasmático",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Promueve la retención de fluidos en el sistema vascular mediante presión oncótica.",
      "Peso molecular menor que otros coloides (excreción rápida).",
      "Vida media plasmática de aprox. 8 horas (oxipoligelatina 2-4h).",
      "Pocos efectos sobre la coagulación o antigenicidad.",
      "Uso con precaución en fallo cardíaco o insuficiencia renal."
    ],
    usos_principales: "Expansión y mantenimiento del volumen sanguíneo en shock hipovolémico y hemorrágico.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Corta (comparada con almidones)"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario exclusivo para emergencias.",
    "Se monitorizará la presión arterial y la hidratación constantemente.",
    "Ayuda a estabilizar al animal tras una pérdida masiva de sangre o deshidratación severa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Expansor de volumen (Shock)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "ml/kg"
        },
        notas_tecnicas: "Administrar como bolo inicial. No exceder el reemplazo del 25% del volumen circulante total en 24h."
      }
    ],
    gato: [
      {
        indicacion: "Expansor de volumen (Shock)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "ml/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia cardíaca congestiva severa.",
      "Insuficiencia renal oligúrica.",
      "Sobrecarga de volumen."
    ],
    efectos_adversos: [
      "Sobrecarga circulatoria.",
      "Reacciones anafilactoides (raras).",
      "Dilución de factores de coagulación si se usa en exceso."
    ],
    monitoreo_recomendado: [
      "Presión arterial y PVC",
      "Producción de orina",
      "Estado respiratorio (edema pulmonar)"
    ],
    instrucciones_manejo: "Administrar solo vía IV. No mezclar con otros fluidos en la misma línea sin verificar compatibilidad.",
    sobredosis: {
      signos: ["Dificultad respiratoria", "Ingurgitación yugular", "Edema"],
      tratamiento: "Detener infusión. Administrar diuréticos (furosemida) y oxigenoterapia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Aumenta la presión oncótica intravascular, desplazando agua del espacio intersticial al vascular.",
    farmacocinetica: "Eliminación renal rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución inyectable",
      concentracion_texto: "4% (40 mg/ml)",
      valor_concentracion: 40,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
