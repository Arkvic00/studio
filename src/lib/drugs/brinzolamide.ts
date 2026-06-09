import type { Drug } from '@/lib/types';

export const brinzolamideDrug: Drug = {
  id: "brinzolamide",
  meta_data: {
    nombre_generico: "Brinzolamida",
    nombres_comerciales: ["Azopt", "Azarga"],
    grupo_farmacologico: "Inhibidor de la anhidrasa carbónica oftálmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reduce la presión intraocular (PIO) al disminuir la tasa de producción de humor acuoso.",
      "Inhibe la formación de iones bicarbonato dentro del epitelio del cuerpo ciliar.",
      "Suele ser mejor tolerado que la dorzolamida debido a su pH más fisiológico (7.5).",
      "Ineficaz en gatos sanos, pero puede reducir la PIO en gatos con glaucoma.",
      "La formulación Azarga contiene timolol (betabloqueador)."
    ],
    usos_principales: "Control de todos los tipos de glaucoma en perros y gatos, ya sea solo o en combinación.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere administración cada 8 a 12 horas"
  },
  informacion_cliente: [
    "Agitar bien antes de usar.",
    "Puede causar una leve irritación o enrojecimiento momentáneo tras la aplicación.",
    "Informe si nota que los párpados se hinchan o si el animal parpadea en exceso.",
    "Si usa la combinación con timolol, informe si el animal parece inusualmente cansado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control del Glaucoma",
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
        indicacion: "Control del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Menos eficaz que la dorzolamida en gatos, pero útil en casos de intolerancia local."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática o renal severa.",
      "Hipersensibilidad a las sulfonamidas.",
      "Uveítis o luxación anterior del cristalino (específicamente para la combinación con Timolol)."
    ],
    efectos_adversos: [
      "Irritación local, queratitis o blefaritis.",
      "Miosis (si contiene timolol).",
      "Bradicardia e hipotensión (efecto sistémico del timolol).",
      "Hipopotasemia (raro en gatos) o acidosis metabólica (raro en perros)."
    ],
    monitoreo_recomendado: [
      "Presión intraocular regular",
      "Frecuencia cardíaca (si se usa Azarga)",
      "Electrolitos en tratamientos crónicos"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos oftálmicos.",
    sobredosis: {
      signos: ["Bradicardia", "Hipotensión", "Acidosis metabólica"],
      tratamiento: "Lavar el ojo con abundante salino; soporte sistémico si hay absorción masiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la anhidrasa carbónica que reduce la formación de humor acuoso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas (Azopt)",
      concentracion_texto: "10 mg/ml (1%)",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Gotas oftálmicas (Azarga)",
      concentracion_texto: "1% Brinzolamida + 0.5% Timolol",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
