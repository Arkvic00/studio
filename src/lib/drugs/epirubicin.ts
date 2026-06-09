import type { Drug } from '@/lib/types';

export const epirubicinDrug: Drug = {
  id: "epirubicin",
  meta_data: {
    nombre_generico: "Epirrubicina (4’-Epi-doxorrubicina)",
    nombres_comerciales: ["Pharmorubicin", "Epirubicin*"],
    grupo_farmacologico: "Antraciclina citotóxica; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico de uso especializado."
  },
  resumen_clinico: {
    puntos_clave: [
      "Estereoisómero semisintético de la doxorrubicina con eficacia similar.",
      "Inhibe la síntesis de ADN y genera radicales libres citotóxicos.",
      "¡ALTAMENTE IRRITANTE Y VESICANTE!: La extravasación causa necrosis tisular severa.",
      "Reportada como menos cardiotóxica que la doxorrubicina, pero requiere precaución.",
      "Mielosupresión marcada; monitorear neutrófilos y plaquetas antes de cada dosis."
    ],
    usos_principales: "Tratamiento de linfoma, hemangiosarcoma esplénico, sarcoma histiocítico y carcinomas. Uso en gatos para sarcoma en sitio de inyección.",
    inicio_accion: "Interferencia inmediata con la replicación celular",
    duracion_efecto: "Requiere ciclos cada 3 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia de alta potencia; manejo exclusivo por oncólogos veterinarios.",
    "Riesgo de daño cardíaco acumulativo; se recomiendan ecografías cardíacas periódicas.",
    "Evitar el contacto con las excretas del animal durante las 48h posteriores al tratamiento.",
    "Informe inmediatamente si nota fiebre, vómitos severos o inflamación en el sitio de la vía.",
    "Suele causar pérdida de pelo (alopecia) y retraso en el crecimiento del pelaje."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Protocolos oncológicos sistémicos (Perros >10 kg)",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 30,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 },
        notas_tecnicas: "NO EXCEDER una dosis acumulativa de 240 mg/m². Administrar en un periodo de 10 min en una vía de NaCl 0.9% a flujo libre."
      },
      {
        indicacion: "Protocolos oncológicos (Perros <10 kg)",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 }
      }
    ],
    gato: [
      {
        indicacion: "Protocolos oncológicos / Sarcoma de sitio de inyección",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 25,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 },
        notas_tecnicas: "Dosis alternativa: 1 mg/kg IV. Monitorear estrechamente la función renal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad cardíaca preexistente.",
      "Mielosupresión severa.",
      "Hipersensibilidad a antraciclinas."
    ],
    efectos_adversos: [
      "Vesicante: Úlceras y necrosis severa por extravasación.",
      "Cardiotoxicidad acumulativa (MCD).",
      "Mielosupresión severa (Neutropenia).",
      "Gastroenteritis hemorrágica.",
      "Anorexia, vómitos y pancreatitis.",
      "Nefrotoxicidad (especialmente en gatos)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo y plaquetas antes de cada dosis (Neutrófilos >2.5 x 10⁹/l)",
      "ECG y ecocardiografía periódicos",
      "Integridad del catéter IV durante la infusión"
    ],
    instrucciones_manejo: "CITOTÓXICO POTENTE. Solo para administración IV mediante catéter permanente. Estable 24h tras reconstitución (28 días bajo refrigeración).",
    sobredosis: {
      signos: ["Mielosupresión profunda", "Fallo cardíaco agudo", "Vómitos incoercibles"],
      tratamiento: "Soporte sintomático intensivo. En extravasación: Dexrazoxano y compresas de hielo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Heparina", efecto: "Incompatible físicamente; forma precipitados.", severidad: "Grave" },
      { farmaco: "Ciclofosfamida", efecto: "Aumenta el riesgo de mielosupresión.", severidad: "Importante" },
      { farmaco: "Cimetidina", efecto: "Aumenta la exposición sistémica (AUC) a la epirrubicina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de ADN y ARN al intercalarse entre pares de bases y altera las funciones de la membrana celular.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "2 mg/ml",
      valor_concentracion: 2,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Polvo para reconstitución",
      concentracion_texto: "10 mg, 50 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
