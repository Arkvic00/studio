import type { Drug } from '@/lib/types';

export const enilconazoleDrug: Drug = {
  id: "enilconazole",
  meta_data: {
    nombre_generico: "Enilconazol",
    nombres_comerciales: ["Imaverol"],
    grupo_farmacologico: "Antifúngico (Imidazol)",
    status_regulatorio: "POM-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ergosterol en la pared celular fúngica.",
      "Uso tópico para dermatofitosis y aspergilosis nasal.",
      "Hepatotóxico si se ingiere; evitar el lamido.",
      "Excelente actividad contra esporas."
    ],
    usos_principales: "Tratamiento de tiñas (dermatofitosis) y aspergilosis de cavidad nasal y senos.",
    inicio_accion: "Inmediato (tópico)",
    duracion_efecto: "Requiere aplicaciones repetidas"
  },
  informacion_cliente: [
    "Diluir siempre según las instrucciones del veterinario; no usar el concentrado puro.",
    "Evitar el contacto con los ojos de su mascota.",
    "Producto tóxico si se traga; mantenga al animal bajo observación hasta que se seque.",
    "En gatos, informe si nota babeo excesivo o temblores tras la aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatofitosis (Tiña)",
        vias: ["Tópica (Lavado)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dilución 1:50 en agua (2 mg/ml)"
        },
        frecuencia: { texto: "Cada 3 días por 3-4 aplicaciones", intervalo_horas: 72 }
      },
      {
        indicacion: "Aspergilosis Nasal",
        vias: ["Instilación Nasal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 7 a 10 días", intervalo_horas: 12 },
        notas_tecnicas: "Diluir 50:50 con agua. Mantener volumen bajo (<10ml) para evitar inhalación masiva."
      }
    ],
    gato: [
      {
        indicacion: "Dermatofitosis",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dilución 1:50"
        }
      }
    ],
    conejo: [
      {
        indicacion: "Dermatofitosis",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dilución 1:50"
        },
        frecuencia: { texto_ui: "Cada 1 a 3 días por 4 aplicaciones", intervalo_horas: 48 }
      }
    ],
    ave: [
      {
        indicacion: "Aspergilosis",
        vias: ["Intratraqueal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "ml/kg de dilución 1:10"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 7 a 14 días", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones fúngicas cutáneas",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Dilución 1:50"
        },
        frecuencia: { texto_ui: "Cada 2 a 3 días", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a imidazoles.",
      "Ingestión oral (Hepatotóxico)."
    ],
    efectos_adversos: [
      "Hepatotoxicidad si se ingiere.",
      "Irritación local.",
      "Gatos: Ptialismo (babeo) y signos musculares."
    ],
    monitoreo_recommended: [
      "Estado de la piel",
      "Función hepática en caso de ingestión accidental"
    ],
    instrucciones_manejo: "Preparar dilución fresca en cada aplicación. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Vómitos", "Ictericia", "Temblores"],
      tratamiento: "Soporte hepático y descontaminación GI si fue ingerido."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Altera la permeabilidad de la membrana fúngica inhibiendo la síntesis de ergosterol.",
    farmacocinetica: "Acción tópica con mínima absorción sistémica a través de piel sana."
  },
  presentaciones_comerciales: [
    {
      tipo: "Líquido concentrado tópico",
      concentracion_texto: "100 mg/ml (10%)",
      valor_concentracion: 100,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
