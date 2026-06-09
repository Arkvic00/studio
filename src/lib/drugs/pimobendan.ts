import type { Drug } from '@/lib/types';

export const pimobendanDrug: Drug = {
  id: "pimobendan",
  meta_data: {
    nombre_generico: "Pimobendan",
    nombres_comerciales: ["Vetmedin", "Cardisure", "Pimocard", "Fortekor-Plus"],
    grupo_farmacologico: "Inodilatador; Sensibilizador al calcio",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inodilatador: inotrópico positivo y vasodilatador equilibrado.",
      "Sensibiliza el miocardio al calcio sin aumentar la demanda de oxígeno.",
      "Inhibe la fosfodiesterasa (PDE) III y V.",
      "Tratamiento de elección para la falla cardíaca congestiva (mitral/MCD).",
      "Eficaz en la fase preclínica para retrasar la aparición de signos de falla cardíaca.",
      "Administrar estrictamente en ayunas (1h antes de comer)."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva (mitral o MCD), manejo preclínico de MCD en Dobermanns y enfermedad valvular en razas pequeñas. Hipertensión pulmonar.",
    inicio_accion: "Rápido (1 hora)",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Dar el medicamento siempre 1 hora ANTES de la comida.",
    "Es vital no saltarse ninguna dosis.",
    "El tratamiento suele ser de por vida para el corazón.",
    "Informe si nota que el perro parece tener el corazón muy rápido o vomita.",
    "Seguro para usar junto con diuréticos y otros medicamentos del corazón."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Falla Cardíaca / Preclínica / Hipertensión Pulmonar",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas (En ayunas)", intervalo_horas: 12 },
        notas_tecnicas: "Administrar 1h antes de alimentar. La dosis inyectable es de 0.15 mg/kg IV única vez."
      }
    ],
    gato: [
      {
        indicacion: "Falla cardíaca por disfunción sistólica (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          dosis_min: 0.1,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Cardiomiopatía dilatada",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Falla cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          dosis_min: 0.1,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    ave: [
      {
        indicacion: "Falla cardíaca / Cor pulmonale",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.125,
          dosis_min: 0.25,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Amazonas pueden requerir hasta 10 mg/kg q12h para efecto terapéutico óptimo."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Cardiomiopatía hipertrófica.",
      "Obstrucciones del tracto de salida (ej. estenosis aórtica).",
      "Fallo hepático severo (precaución)."
    ],
    efectos_adversos: [
      "Taquicardia moderada (cronotropía positiva).",
      "Vómitos y diarrea leves.",
      "Letargo.",
      "Poliuria (raro)."
    ],
    monitoreo_recomendado: [
      "Ecocardiografía de seguimiento",
      "Frecuencia y ritmo cardíaco",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Taquicardia severa", "Vómitos"],
      tratamiento: "Soporte sintomático; el efecto suele remitir al bajar la dosis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores / Calcio-antagonistas (Verapamilo)", efecto: "Antagonizan el efecto inotrópico del pimobendan.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Sensibiliza el miocardio al calcio al unirse a la troponina C. Inhibe la PDE III resultando en vasodilatación arterial y venosa.",
    farmacocinetica: "Absorción oral rápida; la comida reduce drásticamente su biodisponibilidad."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula / Tableta masticable", concentracion_texto: "1.25 mg, 2.5 mg, 5 mg, 10 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "0.75 mg/ml", valor_concentracion: 0.75, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};