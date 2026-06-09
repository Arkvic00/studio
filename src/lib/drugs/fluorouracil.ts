import type { Drug } from '@/lib/types';

export const fluorouracilDrug: Drug = {
  id: "fluorouracil",
  meta_data: {
    nombre_generico: "Fluorouracilo (5-FU)",
    nombres_comerciales: ["Efudix", "Fluorouracil*"],
    grupo_farmacologico: "Antineoplásico (Antimetabolito de pirimidina)",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis y función del ADN al bloquear la producción de pirimidinas.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS!: Causa neurotoxicidad fatal incluso en forma tópica.",
      "Uso sistémico en perros para carcinomas (limitado).",
      "Uso tópico para carcinomas de células escamosas o de células basales superficiales.",
      "Requiere protocolos de bioseguridad oncológica estrictos."
    ],
    usos_principales: "Tratamiento de carcinomas cutáneos superficiales (tópico) y protocolos sistémicos para carcinomas caninos.",
    inicio_accion: "Interferencia inmediata con el ciclo celular",
    duracion_efecto: "Persistente; requiere ciclos semanales"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "¡PELIGRO!: Nunca use este medicamento (ni siquiera la crema) si tiene gatos en casa; el contacto accidental es mortal para ellos.",
    "Use guantes impermeables para aplicar la crema y evite que el animal lama la zona tratada.",
    "Se requieren análisis de sangre frecuentes para vigilar las defensas y plaquetas.",
    "Informe inmediatamente si nota fiebre, vómitos, llagas en la boca o falta de coordinación en su perro."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Carcinomas (Sistémico)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 150,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Una vez por semana por 6 semanas",
          intervalo_horas: 168
        },
        notas_tecnicas: "Si hay insuficiencia renal, hepática o medular, reducir la dosis a la mitad (75 mg/m²)."
      },
      {
        indicacion: "Carcinomas cutáneos superficiales (Tópico)",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "aplicación fina sobre el área afectada"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        frecuencia: {
          texto_ui: "PROHIBIDO",
          intervalo_horas: 0
        },
        notas_tecnicas: "¡ALERTA!: Induce neurotoxicidad fulminante y muerte en gatos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta, en cualquier forma).",
      "Supresión medular preexistente.",
      "Infección activa."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Fatal incluso vía tópica. Causa ataxia cerebelosa severa, convulsiones y muerte."
    },
    efectos_adversos: [
      "Neurotoxicidad (ataxia cerebelosa, convulsiones).",
      "Mielosupresión (nadir 7-14 días).",
      "Estomatitis y ulceración oral.",
      "Anorexia, vómitos y diarrea.",
      "Alopecia e hiperpigmentación cutánea.",
      "Dermatitis local (tópico)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) semanal",
      "Estado neurológico",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "CITOTÓXICO. Usar equipo de protección personal. Evitar contacto con mucosas.",
    sobredosis: {
      signos: ["Ataxia severa", "Convulsiones", "Supresión medular profunda"],
      tratamiento: "Soporte neurológico e intensivo agresivo. Pronóstico reservado."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina", efecto: "Inhibe el metabolismo del 5-FU, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Metotrexato", efecto: "Sinergia si se da antes; antagonismo si se da después del 5-FU.", severidad: "Moderada" },
      { farmaco: "Vincristina", efecto: "Aumenta la citotoxicidad del 5-FU.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se convierte en metabolitos que inhiben la timidilato sintetasa, impidiendo la síntesis de pirimidinas y bloqueando la replicación de ADN.",
    farmacocinetica: "Metabolismo hepático rápido. Atraviesa la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Crema tópica",
      concentracion_texto: "5% (Efudix)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/g",
      es_divisible: false
    },
    {
      tipo: "Inyectable",
      concentracion_texto: "50 mg/ml",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};