import type { Drug } from '@/lib/types';

export const bleomicinaDrug: Drug = {
  id: "bleomicina",
  meta_data: {
    nombre_generico: "Bleomicina",
    nombres_comerciales: ["Bleo", "Blenoxane"],
    grupo_farmacologico: "Antibiótico citotóxico; Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico de uso especializado."
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca la rotura de las hebras de ADN, impidiendo la replicación celular.",
      "Índice terapéutico muy bajo: requiere supervisión de un especialista en oncología.",
      "La toxicidad pulmonar (fibrosis) es el efecto secundario más grave y potencialmente fatal.",
      "A diferencia de otros quimioterápicos, la mielosupresión es poco frecuente pero posible.",
      "Se utiliza frecuentemente en electro-quimioterapia."
    ],
    usos_principales: "Tratamiento de linfoma canino y felino, carcinoma de células escamosas oral, teratomas y tumores tiroideos. Uso intralesional en ameloblastoma acantomatoso y melanoma.",
    inicio_accion: "Interferencia inmediata con el ADN celular",
    duracion_efecto: "Requiere administración semanal"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia de alta potencia; manejo exclusivo por personal capacitado.",
    "Informe inmediatamente si su mascota presenta dificultad para respirar o tos persistente.",
    "Se deben realizar controles periódicos de la función pulmonar y renal.",
    "Evitar el contacto de las secreciones del animal con la piel del propietario durante las 48h posteriores al tratamiento."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias sistémicas (Linfoma, Carcinomas)",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          dosis_min: 0.3,
          dosis_max: 0.5,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Una vez por semana",
          intervalo_horas: 168
        },
        notas_tecnicas: "Margen de seguridad muy estrecho. No exceder una dosis acumulativa total de 125-250 mg/m² para minimizar riesgo de fibrosis pulmonar."
      },
      {
        indicacion: "Intralesional (Melanoma, Ameloblastoma)",
        vias: ["Intralesional"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "Según tamaño del tumor"
        },
        notas_tecnicas: "Usualmente combinado con protocolos de electro-quimioterapia."
      }
    ],
    gato: [
      {
        indicacion: "Protocolos oncológicos",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.4,
          dosis_min: 0.3,
          dosis_max: 0.5,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "Una vez por semana",
          intervalo_horas: 168
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a la bleomicina.",
      "Enfermedad pulmonar preexistente.",
      "Supresión de la médula ósea preexistente."
    ],
    precauciones: [
      "Usar con extrema cautela en pacientes con función renal reducida (riesgo de acumulación).",
      "Extrema precaución si se requiere anestesia general en pacientes expuestos previamente a bleomicina."
    ],
    efectos_adversos: [
      "Toxicidad pulmonar (neumonitis, fibrosis pulmonar fatal).",
      "Dermatopatías y estomatitis.",
      "Gastrotoxicidad (anorexia, vómitos, diarrea).",
      "Nefrotoxicidad.",
      "Piréxia (fiebre) tras la administración.",
      "Elevación de enzimas hepáticas."
    ],
    monitoreo_recomendado: [
      "Radiografía de tórax periódica para detectar signos tempranos de neumonitis",
      "Función renal (Creatinina/BUN)",
      "Enzimas hepáticas",
      "Hemograma (aunque la mielosupresión es rara)"
    ],
    instrucciones_manejo: "FÁRMACO CITOTÓXICO POTENTE. Solo debe ser preparado y administrado por personal entrenado con equipo de protección adecuado.",
    sobredosis: {
      signos: ["Dificultad respiratoria aguda", "Fallo renal", "Gastroenteritis severa"],
      tratamiento: "Cese inmediato. Manejo de soporte intensivo. No existe antídoto específico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Radioterapia", efecto: "Aumenta significativamente el riesgo de toxicidad pulmonar y cutánea.", severidad: "Grave" },
      { farmaco: "Anestesia General (Oxígeno alto)", efecto: "El uso de altas concentraciones de oxígeno puede exacerbar el daño pulmonar inducido por bleomicina.", severidad: "Importante" },
      { farmaco: "Otros citotóxicos", efecto: "Aumento de la toxicidad sistémica general.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une al ADN y causa la producción de radicales libres que provocan roturas en las cadenas de nucleótidos, deteniendo el ciclo celular en la fase G2.",
    farmacocinetica: "Eliminación predominantemente renal. Pobre penetración en el SNC."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Liofilizado)",
      concentracion_texto: "15 Unidades, 30 Unidades",
      valor_concentracion: 15,
      unidad_concentracion: "IU",
      es_divisible: false
    }
  ]
};
