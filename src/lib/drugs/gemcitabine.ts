import type { Drug } from '@/lib/types';

export const gemcitabineDrug: Drug = {
  id: "gemcitabine",
  meta_data: {
    nombre_generico: "Gemcitabina",
    nombres_comerciales: ["Gemzar"],
    grupo_farmacologico: "Antineoplásico (Antimetabolito de la pirimidina)",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la ribonucleótido reductasa y compite con nucleótidos para su incorporación al ADN.",
      "Actúa principalmente en la fase S del ciclo celular.",
      "Uso en carcinomas uroteliales, linfoma y varios carcinomas.",
      "Potente radiosensibilizador.",
      "Uso clínico limitado; requiere supervisión oncológica experta."
    ],
    usos_principales: "Tratamiento de carcinoma urotelial de vejiga, linfoma, carcinoma pancreático exocrino (gatos) y varios carcinomas de tejidos blandos.",
    inicio_accion: "Interferencia inmediata con síntesis de ADN",
    duracion_efecto: "Requiere ciclos semanales"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Riesgo de bajada de defensas; se requieren análisis de sangre frecuentes.",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "Informe inmediatamente si nota fiebre, hemorragias inusuales o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias (Dosis Alta)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 850,
          dosis_min: 800,
          dosis_max: 900,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 7 a 14 días (máx 4 dosis)", intervalo_horas: 168 },
        notas_tecnicas: "Administrar en infusión de 20-60 minutos."
      },
      {
        indicacion: "Neoplasias (Dosis Baja / Protocolo semanal)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 37.5,
          dosis_min: 25,
          dosis_max: 50,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Una o dos veces por semana según protocolo", intervalo_horas: 168 }
      }
    ],
    gato: [
      {
        indicacion: "Carcinoma pancreático / Otros",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 22.5,
          dosis_min: 20,
          dosis_max: 25,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 7 días en infusión de 20 min", intervalo_horas: 168 },
        notas_tecnicas: "Dosis alternativa: 2 mg/kg IV."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a la gemcitabina.",
      "Supresión de la médula ósea preexistente.",
      "Fallo hepático o renal severo."
    ],
    efectos_adversos: [
      "Mielosupresión (leucopenia, trombocitopenia).",
      "Gastrotoxicidad (vómitos, diarrea).",
      "Hemorragia retinal.",
      "Mortalidad por complicaciones relacionadas al tratamiento."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) antes de cada dosis",
      "Función renal y hepática",
      "Examen oftalmológico (fondo de ojo)"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos de bioseguridad. Administrar solo vía IV mediante catéter.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos incoercibles"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Carboplatino", efecto: "Sinergia usada en algunos protocolos combinados.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo de la pirimidina que, tras ser fosforilado, inhibe la ribonucleótido reductasa y se incorpora al ADN causando la terminación de la cadena.",
    farmacocinetica: "Eliminación bifásica rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "200 mg, 1 g",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
