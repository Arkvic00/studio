import type { Drug } from '@/lib/types';

export const nystatinDrug: Drug = {
  id: "nystatin",
  meta_data: {
    nombre_generico: "Nistatina",
    nombres_comerciales: ["Canaural", "Nystan", "Nystatin"],
    grupo_farmacologico: "Antifúngico polieno",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se une al ergosterol de la membrana fúngica creando poros que causan la muerte celular.",
      "Excelente actividad contra Candida, especialmente C. albicans.",
      "No se absorbe en el tracto gastrointestinal (acción local).",
      "Componente de Canaural (junto con framicetina, ácido fusídico y prednisolona).",
      "Muy seguro vía oral para sobrecrecimiento de levaduras intestinales."
    ],
    usos_principales: "Tratamiento de candidiasis oral/intestinal y micosis cutáneas u óticas superficiales.",
    inicio_accion: "Rápido (acción local)",
    duracion_efecto: "Requiere administración frecuente (q8-12h)"
  },
  informacion_cliente: [
    "Medicamento para tratar infecciones por hongos y levaduras.",
    "Para uso en la boca o en la piel según la indicación del veterinario.",
    "No se absorbe hacia el resto del cuerpo, por lo que es muy seguro.",
    "Informe si nota irritación severa en el sitio de aplicación.",
    "En aves y conejos, prefiera preparados sin corticosteroides."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Micosis cutáneas / Otitis fúngica",
        vias: ["Tópica", "Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Micosis cutáneas / Otitis fúngica",
        vias: ["Tópica", "Ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación local"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Sobrecrecimiento de levaduras GI",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    roedores: [
      {
        indicacion: "Chinchillas: Candidiasis GI",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75000,
          dosis_min: 60000,
          dosis_max: 90000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 7-10 días", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Candidiasis (General)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 300000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Dosis de primera elección por su alta tasa de sensibilidad (78.5% en C. albicans)."
      },
      {
        indicacion: "Palomas: Candidiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Paseriformes: Macrorhabdiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150000,
          dosis_min: 5000,
          dosis_max: 300000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Infección por Candida / Levaduras",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100000,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      }
    ],
    axolote: [
      {
        indicacion: "Micosis cutáneas (Anfibios)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "capa fina de crema 1%"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Generalmente nulos por falta de absorción sistémica.",
      "Vómitos o diarrea leve en dosis orales muy altas.",
      "Efectos de corticosteroides si se usa en preparados combinados (ej. Canaural)."
    ],
    monitoreo_recomendado: [
      "Resolución de signos clínicos",
      "Cultivos de control en candidiasis severa"
    ],
    instrucciones_manejo: "Agitar bien la suspensión oral antes de usar. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "No suele requerirse intervención médica."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Fija el ergosterol de la membrana fúngica, formando canales iónicos que alteran la permeabilidad osmótica y causan la pérdida de potasio intracelular.",
    farmacocinetica: "Absorción nula tras administración oral; se elimina íntegramente por las heces."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oral",
      concentracion_texto: "100,000 IU/ml",
      valor_concentracion: 100000,
      unidad_concentracion: "IU/ml",
      es_divisible: false
    },
    {
      tipo: "Suspensión ótica (Canaural)",
      concentracion_texto: "100,000 IU/g (+ Framicetina/Ác. Fusídico/Pred.)",
      valor_concentracion: 100000,
      unidad_concentracion: "IU/g",
      es_divisible: false
    }
  ]
};
