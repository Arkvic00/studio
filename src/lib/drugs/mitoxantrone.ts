import type { Drug } from '@/lib/types';

export const mitoxantroneDrug: Drug = {
  id: "mitoxantrone",
  meta_data: {
    nombre_generico: "Mitoxantrona",
    nombres_comerciales: ["Novantrone"],
    grupo_farmacologico: "Antibiótico antitumoral; Inhibidor de la topoisomerasa II",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la topoisomerasa II, impidiendo la reparación y replicación del ADN.",
      "No es específico del ciclo celular, pero es más activo en la fase S.",
      "Considerablemente más seguro para gatos con insuficiencia renal que la doxorrubicina.",
      "Mucho menos cardiotóxico que la doxorrubicina; no se han reportado casos en perros.",
      "Puede teñir la orina y la esclerótica de color azulado (raro)."
    ],
    usos_principales: "Tratamiento de linfomas (canino y felino), carcinomas de células escamosas y de células transicionales. También en adenocarcinomas renales y sarcomas.",
    inicio_accion: "Interferencia inmediata con el ciclo celular",
    duracion_efecto: "Requiere ciclos cada 3 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Riesgo de bajada de defensas; se requieren análisis de sangre a los 10 días.",
    "Evitar el contacto con las excretas del animal por 48 horas post-dosis.",
    "No se alarme si la orina o el blanco de los ojos adquieren un tono azulado.",
    "Informe si nota vómitos, pérdida de apetito o fiebre."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias sistémicas (Linfoma / Carcinomas)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 5.5,
          dosis_min: 5,
          dosis_max: 6,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 },
        notas_tecnicas: "Diluir en 50 ml de NaCl 0.9% y administrar mediante catéter verificado."
      },
      {
        indicacion: "Uso Intracavitario (Pleural/Peritoneal)",
        vias: ["Intrapleural", "Intraperitoneal"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 5.25,
          dosis_min: 5,
          dosis_max: 5.5,
          unidad_calculo: "mg/m²"
        },
        notas_tecnicas: "Diluir 1:1 en salino. Consultar con especialista oncológico antes de usar esta vía."
      }
    ],
    gato: [
      {
        indicacion: "Neoplasias sistémicas / Sarcomas",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 6,
          dosis_min: 5.5,
          dosis_max: 6.5,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 },
        notas_tecnicas: "Monitorear función renal, aunque el riesgo es menor que con doxorrubicina."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Mielosupresión preexistente.",
      "Infección activa.",
      "Insuficiencia hepática severa.",
      "Disfunción cardíaca (aunque el riesgo es bajo)."
    ],
    efectos_adversos: [
      "Mielosupresión (nadir a los 10 días).",
      "Vómitos, anorexia y diarrea.",
      "Convulsiones (reportadas en gatos).",
      "Coloración azulada de tejidos y fluidos."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) a los 10 días post-dosis",
      "Función renal y hepática",
      "Integridad del catéter IV durante la infusión"
    ],
    instrucciones_manejo: "CITOTÓXICO. Almacenar a temperatura ambiente. Incompatible con heparina.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Gastroenteritis severa"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros mielosupresores", efecto: "Riesgo de toxicidad hematológica fatal.", severidad: "Importante" },
      { farmaco: "Heparina", efecto: "Incompatibilidad química física.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la topoisomerasa II e intercala el ADN, provocando roturas en las hebras y deteniendo la síntesis de ácidos nucleicos.",
    farmacocinetica: "Mínima excreción renal; aclaramiento hepatobiliar predominante."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "2 mg/ml",
      valor_concentracion: 2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
