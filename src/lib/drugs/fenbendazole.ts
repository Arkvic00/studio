import type { Drug } from '@/lib/types';

export const fenbendazoleDrug: Drug = {
  id: "fenbendazole",
  meta_data: {
    nombre_generico: "Fenbendazol",
    nombres_comerciales: ["Granofen", "Panacur", "Wormazole", "Zerofen", "Lapizole"],
    grupo_farmacologico: "Benzimidazol; Antihelmíntico",
    status_regulatorio: "AVM-GSL, NFA-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe el sistema de la fumarato reductasa, bloqueando el ciclo del ácido cítrico.",
      "Reduce la absorción de glucosa por parte del parásito.",
      "Seguro para su uso en animales gestantes, a diferencia de otros benzimidazoles.",
      "Eficacia del 100% en la eliminación de quistes de Giardia.",
      "Tratamiento de elección para Encephalitozoon cuniculi en conejos."
    ],
    usos_principales: "Tratamiento de ascáridos, ganchudos, tricuros, tenias (Taenia), Giardia, nematodos pulmonares (A. vasorum, A. abstrusus) y E. cuniculi.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere cursos de 3-5 días para la mayoría de parásitos intestinales"
  },
  informacion_cliente: [
    "Agitar muy bien la suspensión antes de cada dosis; de lo contrario, el medicamento se asienta y las últimas dosis podrían ser excesivas.",
    "Puede administrarse con la comida.",
    "Completar el curso de tratamiento incluso si no ve parásitos en las heces.",
    "Seguro para perras y gatas embarazadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Nematodos y Tenias (Perros <6 meses)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Nematodos y Tenias (Perros >6 meses)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Giardiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 5 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Angiostrongylus vasorum",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Perras gestantes (Prevención larvaria)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24h desde día 40 hasta 2 días post-parto", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Nematodos y Tenias (Gatos <6 meses)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 5 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Nematodos y Tenias (Gatos >6 meses)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Giardiasis / Aelurostrongylus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 5 días", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Encephalitozoon cuniculi",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 28 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Oxyuriasis (en alimento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg (o 50 ppm en comida)"
        },
        frecuencia: { texto_ui: "Diario por 5 días", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Nematodos (General)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          dosis_min: 20,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; repetir a los 10 días", intervalo_horas: 240 }
      },
      {
        indicacion: "Giardiasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 días", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Nematodos",
        vias: ["PO", "Cloacal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; repetir en 2-4 semanas", intervalo_horas: 336 }
      }
    ],
    peces: [
      {
        indicacion: "Monogeneos externos",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 25,
          unidad_calculo: "mg/l"
        },
        duracion_tratamiento: "12 horas"
      },
      {
        indicacion: "Nematodos gastrointestinales",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Diario por 2 días; repetir a los 14 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No se han reportado contraindicaciones absolutas significativamente.",
      "Uso con precaución en reptiles con sospecha de septicemia."
    ],
    contraindicaciones_especie: {
      "Buitre": "¡ALERTA!: Alta sensibilidad. Riesgo de toxicidad medular, intestinal y hepática.",
      "Cigüeña": "¡ALERTA!: Alta sensibilidad.",
      "Paloma": "ADVERTENCIA: Se ha reportado un 50% de mortalidad a 20 mg/kg por 3 días en algunas líneas. Riesgo de daño en plumas."
    },
    efectos_adversos: [
      "Vómitos y depresión (especialmente en rapaces).",
      "Hipoplasia de médula ósea (reporte raro en perro).",
      "Leucopenia profunda (reportada en Tortugas de Hermann tras dosis repetidas).",
      "Mortalidad y signos neurológicos en peces Discus."
    ],
    monitoreo_recomendado: [
      "Estado general y apetito",
      "Hemograma en especies sensibles (Tortugas, Aves de riesgo)",
      "Resolución de signos clínicos y carga parasitaria"
    ],
    instrucciones_manejo: "AGITAR BIEN antes de usar. Las pastas orales son útiles para dosificación precisa en animales pequeños.",
    sobredosis: {
      signos: ["Vómitos", "Depresión", "Muerte (en rapaces/palomas)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la tubulina de las células del parásito, impidiendo la formación de microtúbulos. Inhibe la fumarato reductasa, bloqueando el metabolismo energético.",
    farmacocinetica: "Pobre absorción sistémica; la mayor parte actúa localmente en el tracto GI."
  },
  presentaciones_comerciales: [
    { tipo: "Gránulos", concentracion_texto: "22%, 44% o 88%", valor_concentracion: 220, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Suspensión oral", concentracion_texto: "2.5% (25 mg/ml) o 10% (100 mg/ml)", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Pasta oral", concentracion_texto: "18.75% (187.5 mg/g)", valor_concentracion: 187.5, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
