import type { Drug } from '@/lib/types';

export const carbimazoleDrug: Drug = {
  id: "carbimazole",
  meta_data: {
    nombre_generico: "Carbimazol",
    nombres_comerciales: ["Vidalta"],
    grupo_farmacologico: "Antitiroideo",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se metaboliza a metimazol (tiamazol), que interfiere con la síntesis de hormonas tiroideas.",
      "Formulación de liberación sostenida diseñada para dosis única diaria.",
      "Puede desenmascarar una insuficiencia renal oculta al disminuir la tasa de filtración glomerular.",
      "No triturar ni dividir las tabletas de liberación sostenida."
    ],
    usos_principales: "Control del hipertiroidismo en gatos, perros y cobayas.",
    inicio_accion: "Efecto notable en niveles de T4 en 1-3 semanas",
    duracion_efecto: "24 horas (liberación sostenida)"
  },
  informacion_cliente: [
    "No rompa ni triture las tabletas; deben tragarse enteras para funcionar correctamente.",
    "El tratamiento puede causar vómitos o falta de apetito al inicio, pero suele ser pasajero.",
    "Se requieren análisis de sangre periódicos para controlar los riñones y los niveles de hormonas.",
    "No lo use si su mascota está en una dieta especial baja en yodo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/animal"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis inicial de 15 mg. Si la tiroxina total es <100 nmol/l, iniciar con 10 mg. Ajustar en incrementos de 5 mg. No romper tabletas."
      }
    ],
    gato: [
      {
        indicacion: "Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/animal"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis inicial de 15 mg. Si la tiroxina total es <100 nmol/l, iniciar con 10 mg. Ajustar en incrementos de 5 mg. No romper tabletas."
      }
    ],
    cobaya: [
      {
        indicacion: "Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1.0,
          dosis_max: 2.0,
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
      "Hipersensibilidad al carbimazol o metimazol.",
      "Uso conjunto con dietas de prescripción bajas en yodo."
    ],
    efectos_adversos: [
      "Vómitos y anorexia transitorios.",
      "Ictericia (fallo hepático).",
      "Citopenias sanguíneas (anemia, leucopenia).",
      "Enfermedades inmunomediadas.",
      "Cambios dermatológicos (prurito, alopecia).",
      "Aumento de urea y creatinina (desenmascaramiento de fallo renal)."
    ],
    monitoreo_recomendado: [
      "Niveles de tiroxina total (T4)",
      "Función renal (BUN, Creatinina)",
      "Hemograma completo y enzimas hepáticas"
    ],
    instrucciones_manejo: "No romper las tabletas. Lavarse las manos tras la administración.",
    sobredosis: {
      signos: ["Vómitos", "Letargo", "Signos de hipotiroidismo (obesidad, letargia)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Iodo-131 (Radioyodo)",
        efecto: "El carbimazol debe suspenderse antes del tratamiento con yodo radiactivo.",
        severidad: "Importante"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se metaboliza rápidamente a metimazol. Inhibe la enzima peroxidasa tiroidea, bloqueando la síntesis de hormonas T3 y T4.",
    farmacocinetica: "La formulación Vidalta permite una liberación gradual durante 24 horas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta de liberación sostenida",
      concentracion_texto: "10 mg, 15 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};