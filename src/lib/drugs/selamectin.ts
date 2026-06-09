import type { Drug } from '@/lib/types';

export const selamectinDrug: Drug = {
  id: "selamectin",
  meta_data: {
    nombre_generico: "Selamectina",
    nombres_comerciales: ["Stronghold", "Selehold", "Stronghold Plus"],
    grupo_farmacologico: "Lactona macrocíclica; Endectocida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca parálisis flácida al interaccionar con canales de cloruro.",
      "Eficaz contra pulgas, ácaros del oído, piojos y nematodos.",
      "Prevención mensual de Dirofilaria immitis.",
      "Tratamiento de sarna sarcóptica.",
      "Seguro en gestación y lactancia.",
      "En combinación con sarolaner para gatos (Stronghold Plus)."
    ],
    usos_principales: "Control de parásitos internos y externos en perros y gatos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca.",
    "Seguro para perras y gatas embarazadas o lactantes.",
    "Para prevenir el gusano del corazón, aplicar mensualmente.",
    "El baño frecuente puede reducir su eficacia.",
    "No usar en cachorros/gatitos < 6 semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de parásitos / Prevención Filaria",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      },
      {
        indicacion: "Sarna sarcóptica (Tratamiento)",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
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
          dosis_recomendada: 6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 6 semanas.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Alopecia o irritación local transitoria.",
      "Vómitos y salivación (si se ingiere)."
    ],
    monitoreo_recomendado: [
      "Test de Filaria previo",
      "Integridad de la piel tratada"
    ],
    instrucciones_manejo: "Altamente tóxico para organismos acuáticos.",
    sobredosis: {
      signos: ["Ataxia", "Temblores", "Depresión"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros sustratos de P-gp", efecto: "Aumento potencial de la toxicidad.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Potencia la apertura de los canales de cloruro en invertebrados, causando parálisis neuromuscular.",
    farmacocinetica: "Absorción percutánea con niveles sistémicos persistentes."
  },
  presentaciones_comerciales: [
    { tipo: "Pipeta Spot-on", concentracion_texto: "60 mg/ml o 120 mg/ml", valor_concentracion: 60, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
