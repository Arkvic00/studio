import type { Drug } from '@/lib/types';

export const famciclovirDrug: Drug = {
  id: "famciclovir",
  meta_data: {
    nombre_generico: "Famciclovir",
    nombres_comerciales: ["Famvir", "Famciclovir*"],
    grupo_farmacologico: "Antiviral",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la replicación viral (DNA polimerasa viral).",
      "Es una prodroga del penciclovir.",
      "Virostático: incapaz de erradicar infecciones latentes.",
      "La farmacocinética en gatos es compleja y no lineal."
    ],
    usos_principales: "Manejo de infecciones por Herpesvirus Felino (FHV-1). Control de hepatitis B en patos y brotes de ranavirus en tortugas.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración frecuente (q12h en gatos)"
  },
  informacion_cliente: [
    "Medicamento para tratar infecciones por virus en ojos y vías respiratorias.",
    "El tratamiento puede ser prolongado según la gravedad de la infección.",
    "Informe si nota pérdida de apetito o malestar estomacal.",
    "En gatos, se ha reportado que puede afectar la calidad de la lágrima en algunos casos."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Herpesvirus Felino-1 (FHV-1)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 90,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Reducir frecuencia en gatos con insuficiencia renal. El uso prolongado requiere monitoreo hematológico y bioquímico."
      }
    ],
    ave: [
      {
        indicacion: "Patitos: Infección por Hepatitis B",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    reptil: [
      {
        indicacion: "Tortugas de caja: Brotes de Ranavirus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida al famciclovir o penciclovir."
    ],
    efectos_adversos: [
      "Signos gastrointestinales (anorexia, vómitos, diarrea).",
      "Alteración de la calidad de la película lagrimal (reducción de densidad de células caliciformes).",
      "Polidipsia (beber más agua)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) en gatos",
      "Hemograma completo en tratamientos largos",
      "Producción de lágrima"
    ],
    instrucciones_manejo: "Observar precauciones normales. Las tabletas pueden triturarse para administración oral si es necesario.",
    sobredosis: {
      signos: ["Trastornos digestivos", "Afectación renal potencial"],
      tratamiento: "Soporte sintomático y fluidoterapia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se convierte en penciclovir, que es fosforilado por la timidina quinasa viral para inhibir competitivamente la DNA polimerasa viral.",
    farmacocinetica: "Absorción oral rápida pero con metabolismo complejo en gatos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "125 mg, 250 mg, 500 mg",
      valor_concentracion: 125,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
