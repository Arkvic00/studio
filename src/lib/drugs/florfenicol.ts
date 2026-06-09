import type { Drug } from '@/lib/types';

export const florfenicolDrug: Drug = {
  id: "florfenicol",
  meta_data: {
    nombre_generico: "Florfenicol",
    nombres_comerciales: ["Osurnia", "Florocol", "Nuflor"],
    grupo_farmacologico: "Antimicrobiano de amplio espectro (Fenicoles)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de proteínas bacterianas.",
      "Bactericida tiempo-dependiente de amplio espectro.",
      "Uso autorizado en perros exclusivamente para otitis externa.",
      "En peces, se utiliza para infecciones bacterianas sistémicas.",
      "Requiere limpieza y secado del canal auditivo previo a la primera dosis."
    ],
    usos_principales: "Tratamiento de otitis externa en perros (Osurnia). Infecciones bacterianas en peces (Florocol/Nuflor).",
    inicio_accion: "Rápido (tópico u oral/parenteral en peces)",
    duracion_efecto: "7 días (Osurnia)"
  },
  informacion_cliente: [
    "Limpiar el oído antes de la primera aplicación.",
    "No volver a limpiar el oído tratado hasta 21 días después de la segunda dosis.",
    "Mantener el gel ótico refrigerado hasta su uso.",
    "Informe si nota pérdida de audición repentina en su perro."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Otitis Externa (Osurnia)",
        vias: ["Tópica ótica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.2,
          unidad_calculo: "g (1 tubo completo por oído)"
        },
        frecuencia: {
          texto_ui: "Una vez, repetir a los 7 días",
          intervalo_horas: 168
        },
        notas_tecnicas: "Cada dosis de 1.2g contiene 10mg de florfenicol. No usar en perros menores de 2 meses o menos de 1.4 kg."
      }
    ],
    peces: [
      {
        indicacion: "Enfermedades bacterianas (Parenteral)",
        vias: ["IM", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 37.5,
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Enfermedades bacterianas (Oral)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 5,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 10 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Tímpano perforado.",
      "Perros con demodicosis generalizada.",
      "Animales gestantes o destinados a la cría.",
      "Animales menores de 2 meses o menos de 1.4 kg."
    ],
    efectos_adversos: [
      "Sordera transitoria (especialmente en perros geriátricos).",
      "Irritación local leve."
    ],
    monitoreo_recomendado: [
      "Integridad de la membrana timpánica",
      "Estado de la audición"
    ],
    instrucciones_manejo: "Mantener refrigerado. Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sordera transitoria", "Inflamación local"],
      tratamiento: "Lavar el canal auditivo con abundante salino; soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad ribosomal 50S, impidiendo la síntesis de proteínas bacterianas.",
    farmacocinetica: "Absorción local efectiva en el canal auditivo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gel ótico (Tubo dosis única)",
      concentracion_texto: "10 mg Florfenicol + 10 mg Terbinafina + 1 mg Betametasona / 1.2 g",
      valor_concentracion: 8.33,
      unidad_concentracion: "mg/g",
      es_divisible: false
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "300 mg/ml, 450 mg/ml",
      valor_concentracion: 300,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
