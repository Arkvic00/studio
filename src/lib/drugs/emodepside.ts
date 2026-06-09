import type { Drug } from '@/lib/types';

export const emodepsideDrug: Drug = {
  id: "emodepside",
  meta_data: {
    nombre_generico: "Emodepside (con Praziquantel)",
    nombres_comerciales: ["Dronspot", "Procox", "Profender"],
    grupo_farmacologico: "Agonista de receptores de secretina presinápticos; Antiparasitario",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estimula los receptores de secretina presinápticos provocando parálisis y muerte del parásito.",
      "Eficaz contra nematodos (adultos e inmaduros) y cestodos.",
      "Tratamiento de reinas en gestación tardía para prevenir la transmisión lactogénica de Toxocara cati.",
      "No bañar ni usar champú hasta que el producto se haya secado.",
      "Sustrato de la P-glicoproteína (MDR-1)."
    ],
    usos_principales: "Tratamiento de ascáridos, anquilostomas, tenias y gusanos pulmonares (Aelurostrongylus) en gatos. Parásitos intestinales en reptiles y conejos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Ciclo de tratamiento único (repetir según especie/parásito)"
  },
  informacion_cliente: [
    "Las mujeres en edad fértil deben evitar el contacto con el producto o usar guantes.",
    "No usar en gatitos menores de 8 semanas o de menos de 0.5 kg.",
    "Producto dañino para organismos acuáticos; evitar que el animal nade en aguas naturales tras la aplicación.",
    "La ingestión accidental (lamido) puede causar babeo o vómitos."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Endoparásitos (Nematodos y Cestodos)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.14,
          unidad_calculo: "ml/kg (Solución 21.4 mg/ml)"
        },
        frecuencia: { texto_ui: "Dosis única por ciclo de tratamiento", intervalo_horas: 0 },
        notas_tecnicas: "Dosis mínima recomendada. Para Aelurostrongylus abstrusus: dos tratamientos con 2 semanas de diferencia."
      }
    ],
    conejo: [
      {
        indicacion: "Trichostrongylus colubriformis",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.14,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    reptil: [
      {
        indicacion: "Endoparásitos (Oxiuros, ascáridos, estrongílidos)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.12,
          unidad_calculo: "ml/kg"
        },
        notas_tecnicas: "Dosis máxima reportada; corresponde a 24 mg/kg de emodepside y 96 mg/kg de praziquantel."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos menores de 8 semanas de edad.",
      "Gatos de menos de 0.5 kg de peso corporal.",
      "Mamíferos gestantes (excepto gatos según indicación específica)."
    ],
    efectos_adversos: [
      "Salivación profusa si se ingiere.",
      "Vómitos.",
      "Irritación local transitoria en el sitio de aplicación.",
      "Toxicidad en organismos acuáticos."
    ],
    monitoreo_recomendado: [
      "Presencia de huevos en heces post-tratamiento",
      "Estado clínico general"
    ],
    instrucciones_manejo: "Usar guantes desechables, especialmente personas embarazadas. Evitar contacto con ojos y piel.",
    sobredosis: {
      signos: ["Vómitos", "Salivación", "Signos neurológicos leves"],
      tratamiento: "Lavar el área de aplicación; soporte sintomático si hay ingestión masiva."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de P-gp (Ciclosporina, Ivermectina)", efecto: "Potencial aumento de la toxicidad por competencia de transporte.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores de secretina presinápticos pertenecientes a la familia de receptores acoplados a proteína G, induciendo parálisis flácida y muerte de los nematodos.",
    farmacocinetica: "Absorción percutánea efectiva en gatos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pipeta Spot-on (Gatos)",
      concentracion_texto: "21.4 mg/ml + 85.8 mg/ml Praziquantel",
      valor_concentracion: 21.4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Suspensión oral (Dogs - Procox)",
      concentracion_texto: "0.9 mg/ml + 18 mg/ml Toltrazuril",
      valor_concentracion: 0.9,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
