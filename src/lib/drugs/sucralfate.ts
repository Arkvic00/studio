import type { Drug } from '@/lib/types';

export const sucralfateDrug: Drug = {
  id: "sucralfate",
  meta_data: {
    nombre_generico: "Sucralfato",
    nombres_comerciales: ["Antepsin", "Carafate"],
    grupo_farmacologico: "Citoprotector gastrointestinal",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "En medio ácido, forma una barrera adherente sobre el tejido ulcerado.",
      "Protege contra el ácido clorhídrico, la pepsina y las sales biliares.",
      "Estimula la producción de prostaglandinas locales y bicarbonato.",
      "Puede administrarse junto con protectores H2 o IBP, pero por separado.",
      "Interfiere significativamente con la absorción de muchos otros fármacos."
    ],
    usos_principales: "Tratamiento de la ulceración esofágica, gástrica y duodenal.",
    inicio_accion: "Rápido (acción local)",
    duracion_efecto: "6 a 8 horas"
  },
  informacion_cliente: [
    "Administrar el medicamento al menos 1 hora antes o 2 horas después de otros fármacos.",
    "Suele administrarse con el estómago vacío (aunque su efecto principal ocurre en sitios de úlcera).",
    "El efecto secundario más común es el estreñimiento leve.",
    "Informe si nota que su mascota tiene dificultad para tragar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Úlceras gastrointestinales",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1000,
          dosis_min: 500,
          dosis_max: 2000,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 8 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "<20kg: 500mg. >20kg: 1-2g. Usar suspensión para esofagitis."
      }
    ],
    gato: [
      {
        indicacion: "Úlceras / Esofagitis",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perforación gastrointestinal."
    ],
    efectos_adversos: [
      "Estreñimiento (principalmente en gatos).",
      "Vómitos (raro).",
      "Bezoares (en humanos)."
    ],
    monitoreo_recomendado: [
      "Consistencia de las heces",
      "Frecuencia de vómitos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Estreñimiento severo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fluoroquinolonas (Enrofloxacina) / Digoxina", efecto: "Sucralfato reduce drásticamente su absorción. Espaciar 2 horas.", severidad: "Importante" },
      { farmaco: "Antagonistas H2 / Fenitoína / Tetraciclinas", efecto: "Sucralfato reduce su absorción.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Complejo de sacarosa-aluminio que en pH bajo polimeriza formando una pasta viscosa adherente a las proteínas del lecho ulceroso.",
    farmacocinetica: "No se absorbe sistémicamente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "1 g",
      valor_concentracion: 1000,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Suspensión oral",
      concentracion_texto: "200 mg/ml",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
