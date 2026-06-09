import type { Drug } from '@/lib/types';

export const milbemycinDrug: Drug = {
  id: "milbemycin",
  meta_data: {
    nombre_generico: "Milbemicina Oxima",
    nombres_comerciales: ["Milbactor", "Milbemax", "Milprazon", "Milpro", "Milquantel", "Nexgard Spectra", "Program plus", "Trifexis"],
    grupo_farmacologico: "Lactona macrocíclica; Antiparasitario",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca parálisis flácida de los parásitos al abrir canales de cloruro.",
      "Amplio espectro contra nematodos (adultos e inmaduros) y algunos artrópodos.",
      "Tratamiento de elección para el gusano pulmonar canino (*A. vasorum*).",
      "Seguro en animales de cría, gestantes y lactantes.",
      "Uso mensual para prevención de Dirofilaria en áreas endémicas."
    ],
    usos_principales: "Tratamiento de ascáridos, anquilostomas, tricuros y cestodos (con praziquantel). Prevención de Dirofilaria, Angiostrongylus y Thelazia. Control de ácaros nasales.",
    inicio_accion: "Rápido",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Administrar la tableta con un poco de comida para asegurar su absorción.",
    "Para la prevención del gusano del corazón, es vital darla mensualmente sin falta.",
    "Seguro para perras y gatas embarazadas.",
    "Informe si nota vómitos o letargo tras la administración, especialmente en perros tipo Collie.",
    "No usar en cachorros < 2 semanas o gatitos < 6 semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Nematodos / Prevención Dirofilaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      },
      {
        indicacion: "Angiostrongylus vasorum (Tratamiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Semanalmente por 4 semanas", intervalo_horas: 168 }
      },
      {
        indicacion: "Ácaros nasales / Thelazia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Semanalmente por 2 a 3 semanas", intervalo_horas: 168 }
      }
    ],
    gato: [
      {
        indicacion: "Control de Nematodos / Cestodos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ],
    huron: [
      {
        indicacion: "Control de Nematodos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.75,
          dosis_min: 1.15,
          dosis_max: 2.33,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales sospechosos de tener enfermedad del gusano del corazón (Dirofilaria) activa.",
      "Perros < 2 semanas o < 0.5 kg.",
      "Gatos < 6 semanas o < 0.5 kg."
    ],
    efectos_adversos: [
      "Vómitos y diarrea leves.",
      "Letargo y ataxia (en sobredosis o animales sensibles).",
      "Hipersalivación.",
      "Reacciones por muerte de microfilaria en animales positivos."
    ],
    monitoreo_recomendado: [
      "Test de Dirofilaria antes de iniciar prevención mensual",
      "Estado neurológico en razas con mutación MDR1"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Ataxia", "Temblores", "Depresión"],
      tratamiento: "Soporte sintomático; los efectos suelen ser transitorios."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de P-gp (Ciclosporina)", efecto: "Pueden aumentar la toxicidad en razas sensibles.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Potencia la apertura de los canales de cloruro mediados por glutamato y GABA en el parásito, causando hiperpolarización y muerte.",
    farmacocinetica: "Absorción oral rápida. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral (Dogs)", concentracion_texto: "2.5 mg, 12.5 mg", valor_concentracion: 12.5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta oral (Cats)", concentracion_texto: "4 mg, 16 mg", valor_concentracion: 16, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta combinada (Nexgard Spectra)", concentracion_texto: "Variable (milbemicina + afoxolaner)", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: false }
  ]
};
