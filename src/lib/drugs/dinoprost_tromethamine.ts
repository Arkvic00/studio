import type { Drug } from '@/lib/types';

export const dinoprostTromethamineDrug: Drug = {
  id: "dinoprost_tromethamine",
  meta_data: {
    nombre_generico: "Dinoprost trometamina (Prostaglandina F2α)",
    nombres_comerciales: ["Enzaprost", "Lutalyse"],
    grupo_farmacologico: "Prostaglandina F2α (Estimulante uterino; Luteolítico)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula la contracción del miometrio y provoca la relajación cervical.",
      "Inhibe la producción de progesterona al causar la lisis del cuerpo lúteo.",
      "Uso principal en el manejo de la piometra abierta y terminación de la gestación.",
      "Posee efectos procinéticos en el ciego del conejo (ayuda en vaciado de impactaciones).",
      "En aves, se usa tópicamente para facilitar la expulsión de huevos retenidos.",
      "Riesgo de efectos adversos sistémicos severos tras la inyección."
    ],
    usos_principales: "Tratamiento de la piometra de cuello abierto, inducción del aborto, manejo de impactación cecal en conejos y retención de huevos en aves.",
    inicio_accion: "Rápido (minutos)",
    duracion_efecto: "Corta (efectos adversos suelen remitir en 30 min)"
  },
  informacion_cliente: [
    "¡PELIGRO!: Las personas con asma o embarazadas NO deben manipular este fármaco, ya que puede absorberse por la piel y causar broncoespasmo o aborto.",
    "Tras la inyección, es común ver babeo, jadeo, vómitos o diarrea momentáneos; suelen desaparecer en 30 minutos.",
    "No afecta negativamente la fertilidad futura de la mascota.",
    "Mantener al animal bajo observación tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Piometra de cuello abierto",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.175,
          dosis_min: 0.1,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas hasta que el útero esté vacío (usualmente 3-5 días)",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Piometra de cuello abierto",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          dosis_min: 0.1,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    conejo: [
      {
        indicacion: "Impactación cecal (Soporte procinético)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única tras 3 días de aceite mineral oral",
          intervalo_horas: 0
        }
      }
    ],
    ave: [
      {
        indicacion: "Retención de huevo",
        vias: ["IM", "Intracloacal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.06,
          dosis_min: 0.02,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        },
        notas_tecnicas: "¡ADVERTENCIA!: No usar si el esfínter ureterovaginal no está dilatado. Riesgo de efectos adversos severos en aves."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Piometra de cuello cerrado (riesgo inminente de ruptura uterina).",
      "Hipersensibilidad conocida.",
      "Aves: Esfínter ureterovaginal no dilatado."
    ],
    efectos_adversos: [
      "Hipersalivación y vómitos.",
      "Jadeo y taquicardia.",
      "Defecación y micción involuntaria.",
      "Incoordinación motora y signos leves del SNC.",
      "Hipertermia transitoria.",
      "Dolor abdominal."
    ],
    monitoreo_recomendado: [
      "Estado cardiovascular tras la inyección",
      "Evaluación ecográfica del vaciado uterino",
      "Presencia de contenido cloacal en aves"
    ],
    instrucciones_manejo: "EXTREMA PRECAUCIÓN: Usar guantes. Mujeres embarazadas y asmáticos deben evitar el contacto total con el producto.",
    sobredosis: {
      signos: ["Vómitos severos", "Colapso", "Broncoespasmo"],
      tratamiento: "Soporte sintomático; los efectos suelen ser de corta duración."
    },
    interacciones_farmacologicas: [
      { farmaco: "Oxitocina", efecto: "Efecto potenciado por las prostaglandinas (riesgo de ruptura).", severidad: "Importante" },
      { farmaco: "Progestágenos", efecto: "Inhiben la acción de las prostaglandinas en el útero.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula directamente la contracción del músculo liso miometrial y gastrointestinal. Provoca la regresión funcional del cuerpo lúteo (luteólisis).",
    farmacocinetica: "Absorción rápida tras SC o IM. Vida media plasmática muy corta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "5 mg/ml",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
