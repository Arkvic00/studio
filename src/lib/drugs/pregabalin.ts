import type { Drug } from '@/lib/types';

export const pregabalinDrug: Drug = {
  id: "pregabalin",
  meta_data: {
    nombre_generico: "Pregabalina",
    nombres_comerciales: ["Lyrica", "Alzain"],
    grupo_farmacologico: "Anticonvulsivo; Analgésico para dolor neuropático",
    status_regulatorio: "POM CD Schedule 3"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de GABA más potente que la gabapentina (3-10 veces).",
      "Alta afinidad por los canales de calcio dependientes de voltaje.",
      "No se une a proteínas plasmáticas (pocos riesgos de interacciones).",
      "Vida media más larga en gatos (permite dosis q12h).",
      "Retirar de forma gradual."
    ],
    usos_principales: "Tratamiento adjunto de epilepsia refractaria y manejo del dolor neuropático.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Puede causar sueño o que el animal camine como si estuviera borracho (ataxia).",
    "No suspenda el tratamiento de forma repentina.",
    "Generalmente se administra dos o tres veces al día.",
    "Informe si nota cambios en el apetito o aumento de peso."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Epilepsia refractaria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Dolor neuropático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Control de dolor / Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación.",
      "Insuficiencia renal severa (requiere ajuste de dosis)."
    ],
    efectos_adversos: [
      "Sedación y ataxia (frecuentes al inicio).",
      "Aumento de peso.",
      "Elevación de enzimas hepáticas en tratamientos largos."
    ],
    monitoreo_recomendado: [
      "Grado de sedación",
      "Frecuencia de convulsiones",
      "Función renal (Creatinina/BUN)"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Sedación profunda", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad alfa-2-delta de los canales de calcio neuronales, reduciendo la liberación de neurotransmisores excitatorios.",
    farmacocinetica: "Absorción oral rápida. Excreción renal casi completa sin metabolizar."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "25 mg a 300 mg", valor_concentracion: 75, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "20 mg/ml", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};