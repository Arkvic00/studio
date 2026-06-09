import type { Drug } from '@/lib/types';

export const carboplatinDrug: Drug = {
  id: "carboplatin",
  meta_data: {
    nombre_generico: "Carboplatino",
    nombres_comerciales: ["Carboplatin", "Paraplatin"],
    grupo_farmacologico: "Antineoplásico; Compuesto de platino",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de ADN mediante la formación de enlaces cruzados.",
      "Preferido sobre el cisplatino en perros por su menor toxicidad gastrointestinal y renal.",
      "Es altamente irritante; administrar exclusivamente vía catéter intravenoso.",
      "No utilizar agujas o equipos que contengan aluminio (precipitación del fármaco)."
    ],
    usos_principales: "Tratamiento de osteosarcoma apendicular (adyuvante), carcinomas (escomocelular, nasal, tiroideo, anal), y mesoteliomas.",
    inicio_accion: "Interferencia inmediata con ADN",
    duracion_efecto: "Requiere administración cada 3-4 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Riesgo de bajada de defensas (mielosupresión); se requieren hemogramas semanales.",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "Informe inmediatamente si nota fiebre, hematomas o letargo extremo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Protocolo oncológico sistémico",
        vias: ["IV lenta (15 min)"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 300,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 a 4 semanas",
          intervalo_horas: 504
        },
        notas_tecnicas: "Administrar a través de un catéter en una línea de infusión de NaCl 0.9% a flujo libre."
      }
    ],
    gato: [
      {
        indicacion: "Protocolo oncológico sistémico",
        vias: ["IV lenta (15 min)"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 200,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 a 4 semanas",
          intervalo_horas: 504
        },
        notas_tecnicas: "Efectos adversos pueden ser retrasados o impredecibles en gatos mayores (cambios en GFR)."
      }
    ],
    ave: [
      {
        indicacion: "Adenocarcinoma renal / Carcinomas",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar en 3 minutos. Para uso intralesional en SCC: mezclar con plasma del ave (10 mg/ml)."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Hipersensibilidad a compuestos de platino.",
      "Enfermedad renal severa."
    ],
    efectos_adversos: [
      "Mielosupresión (leucopenia, trombocitopenia).",
      "Nefrotoxicidad (aunque menor que cisplatino).",
      "Ototoxicidad (pérdida auditiva).",
      "Náuseas y vómitos.",
      "Neurotoxicidad."
    ],
    monitoreo_recomendado: [
      "Hemograma completo semanal (especialmente neutrófilos y plaquetas)",
      "Creatinina y BUN séricos",
      "Función hepática"
    ],
    instrucciones_manejo: "CITOTÓXICO. No utilizar aluminio. Administrar IV exclusivamente. Seguir protocolos de bioseguridad oncológica.",
    sobredosis: {
      signos: ["Mielosupresión severa", "Vómitos incoercibles", "Fallo renal agudo"],
      tratamiento: "Soporte sintomático intensivo; factores estimulantes de colonias si hay neutropenia severa."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos / AINEs", efecto: "Aumentan significativamente el riesgo de nefrotoxicidad.", severidad: "Grave" },
      { farmaco: "Vacunas", efecto: "Puede reducir la eficacia y seguridad de las vacunas vivas.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Forma enlaces cruzados intra e inter-cadena en el ADN, inhibiendo la síntesis y función del mismo.",
    farmacocinetica: "Eliminación predominantemente renal. La vida media tisular es prolongada."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};