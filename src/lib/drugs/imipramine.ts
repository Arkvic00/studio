import type { Drug } from '@/lib/types';

export const imipramineDrug: Drug = {
  id: "imipramine",
  meta_data: {
    nombre_generico: "Imipramina",
    nombres_comerciales: ["Tofranil"],
    grupo_farmacologico: "Antidepresivo tricíclico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la recaptación de noradrenalina y serotonina.",
      "Uso principal en trastornos de ansiedad asociados con eliminación inadecuada de orina.",
      "Útil para la micción por sumisión, micción por excitación y narcolepsia.",
      "Se considera menos sedante que la amitriptilina.",
      "Requiere precaución en animales jóvenes por falta de estudios extensos."
    ],
    usos_principales: "Manejo de la ansiedad por separación, pánico, micción inapropiada y narcolepsia.",
    inicio_accion: "Efectos conductuales pueden tardar semanas",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota tiene la boca seca, parece muy inquieta o tiene dificultad para orinar.",
    "El medicamento puede tardar de 2 a 4 semanas en mostrar resultados claros.",
    "No suspenda el tratamiento bruscamente.",
    "Asegúrese de que el animal tenga siempre agua fresca."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ansiedad / Micción inapropiada",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Ansiedad (Dosis única diaria)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Ansiedad / Marcaje",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma.",
      "Retención urinaria.",
      "Enfermedad hepática severa.",
      "Hipersensibilidad a tricíclicos."
    ],
    efectos_adversos: [
      "Boca seca (xerostomía).",
      "Sedación.",
      "Vómitos y diarrea.",
      "Arritmias e hipotensión.",
      "Aumento del apetito."
    ],
    monitoreo_recomendado: [
      "Ritmo cardíaco",
      "Estado mental",
      "Función hepática en tratamientos largos"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Arritmias cardíacas fatales", "Convulsiones", "Sedación profunda"],
      tratamiento: "Soporte sintomático intensivo; carbón activado si la ingestión es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs", efecto: "Riesgo de síndrome de serotonina fatal.", severidad: "Grave" },
      { farmaco: "Cimetidina", efecto: "Aumenta los niveles de imipramina.", severidad: "Moderada" },
      { farmaco: "Antihistamínicos", efecto: "Potencia el efecto sedante.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la recaptación de noradrenalina y serotonina en las neuronas del SNC.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "10 mg, 25 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};