import type { Drug } from '@/lib/types';

export const dacarbazineDrug: Drug = {
  id: "dacarbazine",
  meta_data: {
    nombre_generico: "Dacarbazina (DTIC)",
    nombres_comerciales: ["Carboxamide", "Dacarbazine", "DTIC", "Imidazole"],
    grupo_farmacologico: "Agente alquilante; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ADN, ARN y proteínas mediante metilación de ácidos nucleicos.",
      "Utilizado en el manejo de enfermedades linfoproliferativas (linfoma recidivante), melanoma y sarcoma de tejidos blandos.",
      "¡ALTAMENTE IRRITANTE!: Puede causar dolor severo y daño tisular extenso si ocurre extravasación.",
      "Debe administrarse exclusivamente a través de un catéter intravenoso precolocado."
    ],
    usos_principales: "Tratamiento de linfoma (rescate), melanoma maligno y sarcomas de tejidos blandos en perros.",
    inicio_accion: "Interferencia inmediata con la síntesis celular",
    duracion_efecto: "Ciclos cada 3-4 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Puede causar náuseas e intensos vómitos; a menudo se administra un antiemético preventivo.",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos.",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "¡NUNCA usar en gatos!"
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias (Protocolo de 5 días)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 225,
          dosis_min: 200,
          dosis_max: 250,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 5 días (repetir cada 21-28 días)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Administrar solo vía catéter IV central o periférico verificado."
      },
      {
        indicacion: "Neoplasias (Protocolo de dosis única)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 900,
          dosis_min: 800,
          dosis_max: 1000,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Dosis única (repetir cada 21 días si la médula ósea ha recuperado)",
          intervalo_horas: 504
        },
        notas_tecnicas: "Administrar en una infusión lenta de 4 a 8 horas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea.",
      "Insuficiencia hepática o renal severa.",
      "Gatos (Absoluta)."
    ],
    contraindicaciones_especie: {
      "Gato": "¡PROHIBIDO!: No se recomienda su uso ya que se desconoce su metabolismo en esta especie."
    },
    efectos_adversos: [
      "Mielosupresión severa.",
      "Náuseas y vómitos intensos.",
      "Dolor y necrosis por extravasación.",
      "Hepatotoxicidad."
    ],
    monitoreo_recomendado: [
      "Hemograma completo ( CBC) frecuente",
      "Perfil bioquímico hepático y renal",
      "Integridad del sitio de inyección"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos estrictos de bioseguridad. Considerar premedicar con antieméticos (ej. Maropitant u Ondansetrón).",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos incoercibles"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital / Fenitoína", efecto: "Aumentan la activación metabólica de la dacarbazina.", severidad: "Importante" },
      { farmaco: "Otros fármacos mielosupresores", efecto: "Aumentan el riesgo de toxicidad hematológica fatal.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Metilador de ácidos nucleicos que inhibe la síntesis de ADN, ARN y proteínas.",
    farmacocinetica: "Requiere activación metabólica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "100 mg, 200 mg, 500 mg",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
