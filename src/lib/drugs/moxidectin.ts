import type { Drug } from '@/lib/types';

export const moxidectinDrug: Drug = {
  id: "moxidectin",
  meta_data: {
    nombre_generico: "Moxidectina (en combinación)",
    nombres_comerciales: ["Advocate", "Bravecto Plus", "Moxiclear", "Prinovox"],
    grupo_farmacologico: "Lactona macrocíclica; Endectocida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca parálisis flácida de los parásitos al interaccionar con canales de cloruro.",
      "Excelente actividad contra ácaros de la sarna y nematodos internos.",
      "Uso mensual para prevención de Dirofilaria immitis.",
      "En combinación con Imidacloprid o Fluralaner para cobertura total.",
      "¡ALTAMENTE TÓXICO para organismos acuáticos!"
    ],
    usos_principales: "Tratamiento y prevención de pulgas, garrapatas (con fluralaner), sarnas, nematodos intestinales y prevención de filaria en perros, gatos y hurones.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "30 días (mensual)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca.",
    "Evitar que el animal lama el producto mientras esté húmedo (babeo transitorio).",
    "No usar en cachorros menores de 7 semanas o gatitos menores de 9 semanas.",
    "No permitir que el perro nade en ríos o estanques tras la aplicación para proteger la vida acuática."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de parásitos / Prevención Filaria",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 },
        notas_tecnicas: "Dosis mínima 0.1 ml/kg. En demodicosis severa, puede aplicarse semanalmente bajo vigilancia."
      },
      {
        indicacion: "Sarna sarcóptica (Tratamiento)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "3 aplicaciones con intervalos de 2 semanas", intervalo_horas: 336 }
      }
    ],
    gato: [
      {
        indicacion: "Control de parásitos / Prevención Filaria",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ],
    huron: [
      {
        indicacion: "Pulgas y Prevención de Filaria",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 4,
          unidad_calculo: "mg/animal (pipeta de 0.4 ml)"
        },
        frecuencia: { texto_ui: "Mensualmente", intervalo_horas: 720 }
      }
    ],
    conejo: [
      {
        indicacion: "Psoroptes cuniculi (Ácaro oído)",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.2,
          dosis_max: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir a los 10 días", intervalo_horas: 240 }
      }
    ],
    ave: [
      {
        indicacion: "Infestación por ácaros",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Lizards (Ácaros y Nematodos)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.2,
          unidad_calculo: "ml/kg de combinación Imidacloprid+Moxidectin"
        },
        frecuencia: { texto_ui: "Cada 14 días (3 tratamientos)", intervalo_horas: 336 }
      }
    ],
    axolote: [
      {
        indicacion: "Anfibios: Nematodos",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg (200 μg/kg)"
        },
        frecuencia: { texto_ui: "Cada 4 meses", intervalo_horas: 2880 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales con filariosis estadio 4 (Sindrome de cava).",
      "Gatitos < 9 semanas.",
      "Perritos < 7 semanas.",
      "Uso de pipetas grandes en hurones."
    ],
    efectos_adversos: [
      "Prurito y eritema local.",
      "Dificultad respiratoria tras lamido del sitio.",
      "Vómitos y diarrea.",
      "Hipersalivación.",
      "Midriasis."
    ],
    monitoreo_recomendado: [
      "Test de Filaria previo",
      "Integridad de la piel tratada"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Depresión", "Ataxia", "Temblores"],
      tratamiento: "Lavar con detergente suave; soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros sustratos de P-gp", efecto: "Aumento potencial de la toxicidad.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los canales de cloruro mediado por glutamato y GABA, bloqueando la transmisión nerviosa y paralizando al parásito.",
    farmacocinetica: "Absorción percutánea con persistencia sistémica mensual."
  },
  presentaciones_comerciales: [
    { tipo: "Pipeta Spot-on (Dogs)", concentracion_texto: "25 mg/ml (+ Imidacloprid 100 mg/ml)", valor_concentracion: 25, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Pipeta Spot-on (Cats)", concentracion_texto: "10 mg/ml (+ Imidacloprid 100 mg/ml)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Pipeta Spot-on (Bravecto Plus)", concentracion_texto: "14 mg/ml (+ Fluralaner 280 mg/ml)", valor_concentracion: 14, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
