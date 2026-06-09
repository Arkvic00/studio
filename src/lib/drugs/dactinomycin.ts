import type { Drug } from '@/lib/types';

export const dactinomycinDrug: Drug = {
  id: "dactinomycin",
  meta_data: {
    nombre_generico: "Dactinomicina (Actinomicina-D)",
    nombres_comerciales: ["Cosmegen", "Dactinomycin", "Lyovac"],
    grupo_farmacologico: "Antibiótico citotóxico; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis y función del ADN.",
      "Uso principal en protocolos de rescate para linfoma canino.",
      "También se utiliza en algunos sarcomas y carcinomas.",
      "¡VESICANTE POTENTE!: La extravasación causa daño tisular severo e irreversible.",
      "Debe administrarse obligatoriamente vía catéter intravenoso."
    ],
    usos_principales: "Protocolos de rescate para linfoma canino y tratamiento de sarcomas/carcinomas.",
    inicio_accion: "Interferencia inmediata con el ADN",
    duracion_efecto: "Requiere administración cada 2-3 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia de alta potencia; manejo exclusivo por oncólogos.",
    "Se requieren análisis de sangre frecuentes (glóbulos blancos y plaquetas).",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "Informe inmediatamente si nota fiebre, hematomas o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Rescate en Linfoma / Sarcomas / Carcinomas",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 0.625,
          dosis_min: 0.5,
          dosis_max: 0.75,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 2 a 3 semanas",
          intervalo_horas: 336
        },
        notas_tecnicas: "Administrar en un periodo de 20 minutos a través de un catéter verificado."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia hepática sustancial.",
      "Infección activa."
    ],
    contraindicaciones_especie: {
      "Razas con mutación MDR1 (Collies, Pastores Australianos)": "ALERTA: La dactinomicina es sustrato de la P-glicoproteína; usar con extrema precaución."
    },
    efectos_adversos: [
      "Mielosupresión (efecto limitante de la dosis).",
      "Gastrotoxicidad (vómitos, diarrea).",
      "Toxicidad hepática.",
      "Aumento del riesgo de urolitiasis por uratos en razas predispuestas.",
      "Alopecia."
    ],
    monitoreo_recomendado: [
      "Hemograma completo frecuente",
      "Función hepática",
      "Urianálisis para detectar cristales de urato"
    ],
    instrucciones_manejo: "CITOTÓXICO POTENTE. Solo debe ser manipulado por personal entrenado con equipo de protección nivel quimioterapia.",
    sobredosis: {
      signos: ["Mielosupresión severa", "Vómitos", "Fallo hepático"],
      tratamiento: "Soporte sintomático agresivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Doxorrubicina", efecto: "Aumento del riesgo de cardiotoxicidad si se usan secuencialmente.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antibiótico antineoplásico que inhibe la síntesis de ADN y ARN al intercalarse entre las bases de guanina y citocina.",
    farmacocinetica: "Transportada activamente por la P-glicoproteína."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Liofilizado)",
      concentracion_texto: "0.5 mg",
      valor_concentracion: 0.5,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
