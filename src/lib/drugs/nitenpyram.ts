import type { Drug } from '@/lib/types';

export const nitenpyramDrug: Drug = {
  id: "nitenpyram",
  meta_data: {
    nombre_generico: "Nitenpiram",
    nombres_comerciales: ["Capstar", "Bob Martin Flea Tablets", "Johnson’s 4 Fleas"],
    grupo_farmacologico: "Insecticida neonicotinoide",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Adulticida de pulgas de acción ultra-rápida.",
      "Mata pulgas en el animal en 30 minutos.",
      "No tiene actividad persistente (efecto dura 24-48 horas).",
      "Útil para el tratamiento de la miasis (flystrike) en conejos y roedores.",
      "Seguro en animales gestantes y lactantes."
    ],
    usos_principales: "Eliminación rápida de pulgas adultas en perros y gatos. Tratamiento de miasis en conejos y roedores.",
    inicio_accion: "30 minutos",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar por vía oral. No tiene efecto preventivo a largo plazo.",
    "El animal puede rascarse más intensamente en los primeros minutos debido a la reacción de las pulgas al morir.",
    "Seguro para hembras preñadas o que están amamantando.",
    "Debe usarse junto con un programa integral de control de pulgas (limpieza del hogar)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Eliminación de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; puede repetirse q24h si es necesario", intervalo_horas: 24 },
        notas_tecnicas: "No usar tableta de 57 mg en perros < 11 kg. No usar en < 4 semanas o < 1 kg."
      }
    ],
    gato: [
      {
        indicacion: "Eliminación de Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; puede repetirse q24h", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Miasis (Flystrike) / Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    roedores: [
      {
        indicacion: "Miasis / Pulgas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 4 semanas de edad.",
      "Animales con un peso inferior a 1 kg.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Prurito transitorio intenso (reacción de las pulgas).",
      "Jadeo o inquietud leve.",
      "Vómitos (muy raro)."
    ],
    monitoreo_recomendado: [
      "Control de la carga de pulgas",
      "Estado de la piel"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une de forma post-sináptica a los receptores nicotínicos de acetilcolina del insecto, provocando parálisis y muerte.",
    farmacocinetica: "Absorción oral muy rápida. Eliminación renal casi completa en 24 horas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "11.4 mg", valor_concentracion: 11.4, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "57 mg", valor_concentracion: 57, unidad_concentracion: "mg", es_divisible: false }
  ]
};