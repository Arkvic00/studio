import type { Drug } from '@/lib/types';

export const colestyramineDrug: Drug = {
  id: "colestyramine",
  meta_data: {
    nombre_generico: "Colestiramina",
    nombres_comerciales: ["Questran*"],
    grupo_farmacologico: "Resina de intercambio iónico; Secuestrador de ácidos biliares",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Resina de intercambio iónico que se une a los ácidos biliares en el intestino.",
      "En perros, se usa para reducir el colesterol y en sobredosis de digoxina.",
      "En gatos, puede ayudar en diarreas por malabsorción de grasas.",
      "En conejos y cobayas, es vital para adsorber toxinas de Clostridium tras disbiosis.",
      "Puede causar deficiencia de taurina en gatos si se usa a largo plazo."
    ],
    usos_principales: "Tratamiento de hipercolesterolemia idiopática, diarrea por malabsorción biliar, sobredosis de digoxina y enterotoxemia por Clostridium en herbívoros.",
    inicio_accion: "Inmediato (actúa localmente en el tracto GI)",
    duracion_efecto: "Durante el tránsito intestinal"
  },
  informacion_cliente: [
    "Mezcle el polvo con agua o comida húmeda según las instrucciones.",
    "Puede causar estreñimiento; informe si nota que el animal tiene dificultad para defecar.",
    "Debe administrar otros medicamentos al menos 1 hora antes o 4-6 horas después de la colestiramina.",
    "En gatos, puede ser necesario dar suplementos de taurina si el uso es prolongado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hiperlipidemia / Malabsorción biliar",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "g/perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Diarrea por malabsorción (Anecdótico)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "g/gato"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas inicial (titular a efecto)",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Adsorción de toxinas de Clostridium",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "g/animal"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Administrar diluido en 20 ml de agua mediante jeringa con suavidad."
      }
    ],
    cobaya: [
      {
        indicacion: "Enterotoxemia (Adsorción de toxinas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "g/animal"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas mezclado con agua",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción biliar completa.",
      "Obstrucción intestinal mecánica."
    ],
    efectos_adversos: [
      "Estreñimiento (muy común).",
      "Deficiencia de taurina (en gatos).",
      "Malabsorción de vitaminas liposolubles (A, D, E, K) en uso crónico."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Niveles de taurina en gatos (uso crónico)",
      "Niveles de lípidos séricos"
    ],
    instrucciones_manejo: "No administrar en seco; siempre mezclar con fluidos para evitar aspiración e impactación.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Impactación fecal"],
      tratamiento: "Laxantes emolientes y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina / Anticoagulantes / Diuréticos / Tiroxina", efecto: "La colestiramina se une a estos fármacos y reduce drásticamente su absorción.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Resina de intercambio aniónico fuertemente básica que intercambia iones cloruro por ácidos biliares, formando complejos insolubles que se excretan en las heces.",
    farmacocinetica: "No se absorbe sistémicamente; actúa y permanece íntegramente en el lumen intestinal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo oral (Sobres)",
      concentracion_texto: "4 g por sobre",
      valor_concentracion: 4,
      unidad_concentracion: "g",
      es_divisible: true
    }
  ]
};
