import type { Drug } from '@/lib/types';

export const masitinibDrug: Drug = {
  id: "masitinib",
  meta_data: {
    nombre_generico: "Masitinib (Mesilato de masitinib)",
    nombres_comerciales: ["Masivet"],
    grupo_farmacologico: "Inhibidor de la tirosina quinasa; Antineoplásico",
    status_regulatorio: "POM-V. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo del receptor c-KIT mutado.",
      "Bloquea las vías de señalización esenciales para la replicación celular en mastocitomas.",
      "Utilizado en tumores de mastocitos no resecables (Grado 2 o 3).",
      "Requiere monitoreo mensual estricto de sangre y orina.",
      "Potencial uso en asma felina y dermatitis atópica (estudios preliminares)."
    ],
    usos_principales: "Tratamiento de mastocitomas no resecables en perros. Uso experimental en linfoma cutáneo, adenocarcinoma de sacos anales y asma.",
    inicio_accion: "Interferencia inmediata con la señalización celular",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia; manejar siempre con guantes impermeables.",
    "Las tabletas están recubiertas y no deben dividirse ni triturarse.",
    "Informe inmediatamente si nota diarrea severa, vómitos, pérdida de pelo o cansancio extremo.",
    "Se requieren análisis de sangre y orina mensuales obligatorios.",
    "No usar en hembras gestantes o lactantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mastocitoma / Neoplasias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 11,
          dosis_max: 14,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "No usar en perros de menos de 2 años o menos de 7 kg."
      }
    ],
    gato: [
      {
        indicacion: "Uso extra-label (Asma / Sarcomas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 },
        notas_tecnicas: "Evidencia limitada; monitorear estrechamente la función renal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros menores de 2 años.",
      "Perros con un peso menor a 7 kg.",
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia renal o hepática severa.",
      "Gestación y lactancia."
    ],
    efectos_adversos: [
      "Trastornos GI (diarrea, vómitos) muy comunes.",
      "Pérdida de proteínas (proteinuria/hipoalbuminemia).",
      "Toxicidad renal.",
      "Anemia y mielosupresión.",
      "Cambios en el color del pelaje y pérdida de pelo.",
      "Aumento de enzimas hepáticas."
    ],
    monitoreo_recommended: [
      "Urianálisis mensual (UPC para vigilar pérdida de proteína)",
      "Hemograma completo (CBC) mensual",
      "Bioquímica renal y hepática mensual",
      "Presión arterial"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos de seguridad. Lavarse las manos tras la administración.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Supresión medular", "Fallo renal"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos altamente unidos a proteínas", efecto: "Riesgo de toxicidad por desplazamiento.", severidad: "Importante" },
      { farmaco: "Inhibidores del citocromo P450", efecto: "Pueden aumentar los niveles plasmáticos de masitinib.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la tirosina quinasa que se une de forma competitiva al sitio de unión del ATP del receptor c-KIT, impidiendo la fosforilación y la activación de señales de proliferación celular.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta recubierta", concentracion_texto: "50 mg, 150 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: false }
  ]
};