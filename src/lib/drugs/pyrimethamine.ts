import type { Drug } from '@/lib/types';

export const pyrimethamineDrug: Drug = {
  id: "pyrimethamine",
  meta_data: {
    nombre_generico: "Pirimetamina",
    nombres_comerciales: ["Daraprim*"],
    grupo_farmacologico: "Antiprotozoario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interfiere con el metabolismo del folato en el parásito.",
      "Inhibe la síntesis de purinas y ADN.",
      "Uso principal en toxoplasmosis y neosporosis.",
      "Riesgo de supresión de médula ósea reversible (monitorear hematología).",
      "Sinergia marcada con sulfonamidas."
    ],
    usos_principales: "Tratamiento de infecciones causadas por Toxoplasma gondii y Neospora caninum.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Medicamento para tratar infecciones por parásitos internos graves.",
    "Se requieren análisis de sangre semanales para vigilar las defensas.",
    "Informe si nota que el animal está muy decaído o tiene falta de apetito.",
    "Se recomienda suplementar con Ácido Fólico (5 mg/día) para prevenir daños en la sangre.",
    "No usar en hembras gestantes sin suplementación de folato."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Toxoplasmosis / Neosporosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas por 4 semanas (con Sulfonamidas)",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Toxoplasmosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas por 4 semanas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia (sin suplementación de folato).",
      "Anemia severa preexistente."
    ],
    efectos_adversos: [
      "Supresión de médula ósea (anemia, leucopenia).",
      "Anorexia.",
      "Depresión."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) cada 1-2 semanas",
      "Resolución de signos clínicos"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Mielosupresión profunda", "Vómitos"],
      tratamiento: "Administración inmediata de ácido folínico o fólico; soporte hematológico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sulfonamidas", efecto: "Sinergia potente en el bloqueo del folato.", severidad: "Importante" },
      { farmaco: "Fenitoína", efecto: "Aumento de efectos anti-folato.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la dihidrofolato reductasa bacteriana y protozoaria.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "25 mg",
      valor_concentracion: 25,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
