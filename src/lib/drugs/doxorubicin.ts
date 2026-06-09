import type { Drug } from '@/lib/types';

export const doxorubicinDrug: Drug = {
  id: "doxorubicin",
  meta_data: {
    nombre_generico: "Doxorrubicina (Adriamicina)",
    nombres_comerciales: ["Doxorubicin*", "Adriamycin*"],
    grupo_farmacologico: "Antraciclina citotóxica; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico de uso especializado."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ADN y ARN mediante la intercalación entre pares de bases.",
      "¡ALTAMENTE IRRITANTE Y VESICANTE!: La extravasación causa daño tisular severo e irreversible (necrosis).",
      "Cardiotoxicidad acumulativa dosis-dependiente en perros (MCD irreversible).",
      "Mielosupresión severa; requiere monitoreo estricto de neutrófilos.",
      "Nefrotoxicidad potencial en gatos (dosis >100 mg/m²).",
      "Requiere premedicación con antihistamínicos (clorfenamina) para prevenir anafilaxia."
    ],
    usos_principales: "Tratamiento de linfoma, hemangiosarcoma, osteosarcoma y diversos carcinomas y sarcomas de tejidos blandos.",
    inicio_accion: "Inmediato (interferencia con ADN)",
    duracion_efecto: "Requiere ciclos cada 3-5 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia de alta potencia; manejo exclusivo por oncólogos veterinaros.",
    "Riesgo de daño cardíaco a largo plazo; se realizarán ecografías del corazón periódicas.",
    "Evitar el contacto con las excretas del animal durante las 48h posteriores al tratamiento.",
    "Informe inmediatamente si nota fiebre, vómitos con sangre o inflamación en el sitio de la vía.",
    "El perro puede presentar un nadir (bajada de defensas) entre los días 5-10 post-tratamiento."
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
        notas_tecnicas: "NO EXCEDER una dosis acumulativa de 240 mg/m² en toda la vida del animal."
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
        indicacion: "Protocolos oncológicos",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 22.5,
          dosis_min: 20,
          dosis_max: 25,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 a 5 semanas", intervalo_horas: 504 },
        notas_tecnicas: "Alternativa: 1 mg/kg. Monitorear estrechamente la función renal."
      }
    ],
    huron: [
      {
        indicacion: "Linfoma",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 20,
          unidad_calculo: "mg/m²"
        },
        frecuencia: { texto_ui: "Cada 3 semanas (Máximo 5 dosis)", intervalo_horas: 504 },
        notas_tecnicas: "Dosis alternativa: 1-2 mg/kg IV."
      }
    ],
    ave: [
      {
        indicacion: "Neoplasias (Dosis única / Ciclos)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar diluido en salino durante 20 minutos."
      }
    ],
    reptil: [
      {
        indicacion: "Iguana verde: Linfoma",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.26,
          dosis_max: 0.75,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Reportado en protocolos exitosos de quimioterapia en reptiles."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad cardíaca preexistente (especialmente MCD).",
      "Fallo renal en gatos.",
      "Mielosupresión severa.",
      "Hipersensibilidad a antraciclinas."
    ],
    efectos_adversos: [
      "Vesicante: Úlceras y necrosis severa por extravasación.",
      "Cardiotoxicidad acumulativa e irreversible.",
      "Mielosupresión severa (Neutropenia).",
      "Gastroenteritis hemorrágica.",
      "Nefrotoxicidad (especialmente en gatos).",
      "Anafilaxia durante la infusión."
    ],
    monitoreo_recomendado: [
      "Hemograma completo y plaquetas antes de cada dosis (Neutrófilos >3 x 10⁹/l)",
      "Ecocardiografía y ECG periódicos",
      "Función renal en gatos",
      "Integridad del catéter IV durante la infusión"
    ],
    instrucciones_manejo: "CITOTÓXICO POTENTE. Administrar en un periodo mínimo de 10 min a través del puerto lateral de una vía de NaCl 0.9% a flujo libre. NO usar heparina.",
    sobredosis: {
      signos: ["Mielosupresión profunda", "Fallo cardíaco agudo", "Vómitos incoercibles"],
      tratamiento: "Soporte intensivo. En extravasación: Dexrazoxano y compresas de hielo (15 min q6h)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Dexametasona / Heparina", efecto: "Incompatibles físicamente; forman precipitados.", severidad: "Grave" },
      { farmaco: "Ciclofosfamida", efecto: "Aumenta el riesgo de nefrotoxicidad en gatos.", severidad: "Importante" },
      { farmaco: "Digoxina", efecto: "La doxorrubicina reduce los niveles de digoxina.", severidad: "Moderada" },
      { farmaco: "Spinosad", efecto: "Aumenta el riesgo de toxicidad de la doxorrubicina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de ADN mediante la intercalación y la inhibición de la topoisomerasa II. Genera radicales libres responsables de la cardiotoxicidad.",
    farmacocinetica: "Metabolismo hepático. Excreción biliar y renal."
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
