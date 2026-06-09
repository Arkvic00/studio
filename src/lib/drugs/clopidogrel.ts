import type { Drug } from '@/lib/types';

export const clopidogrelDrug: Drug = {
  id: "clopidogrel",
  meta_data: {
    nombre_generico: "Clopidogrel",
    nombres_comerciales: ["Plavix"],
    grupo_farmacologico: "Antiagregante plaquetario; Antagonista del receptor de ADP",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe irreversiblemente la unión de ADP a su receptor plaquetario.",
      "Tratamiento de elección para la prevención de tromboembolismo en gatos (estudio FATCAT).",
      "Superior a la aspirina en la prevención de recurrencia de eventos tromboembólicos felinos.",
      "Sabor extremadamente amargo; se recomienda administrar en cápsulas de gelatina.",
      "Uso con precaución en pacientes con fallo renal o hepático."
    ],
    usos_principales: "Prevención de trombos en gatos con enfermedad cardíaca avanzada y prevención de recurrencia tras un evento tromboembólico arterial.",
    inicio_accion: "Rápido tras dosis de carga",
    duracion_efecto: "Irreversible (toda la vida de la plaqueta: 7-10 días)"
  },
  informacion_cliente: [
    "El medicamento tiene un sabor muy amargo; no triture las tabletas para gatos.",
    "Se recomienda poner la tableta dentro de una cápsula vacía para facilitar la toma.",
    "Informe inmediatamente si nota sangrados inusuales, moretones o sangre en orina/heces.",
    "Es vital para prevenir parálisis por coágulos en gatos con soplos o corazón agrandado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prevención de tromboembolismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 1.1,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Se puede usar una dosis de carga única de 4-10 mg/kg para alcanzar niveles terapéuticos más rápido."
      }
    ],
    gato: [
      {
        indicacion: "Tromboprofilaxis (Enf. Cardíaca)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          unidad_calculo: "mg/gato (1/4 de tableta de 75mg)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis de carga opcional: 18.75-75 mg/gato una vez. Muy superior a la aspirina para prevenir recurrencias de ATE."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Trastornos hemorrágicos activos.",
      "Ulceración gastrointestinal.",
      "Cirugía mayor planificada (suspender 7 días antes)."
    ],
    efectos_adversos: [
      "Hemorragias excesivas tras trauma.",
      "Vómitos o anorexia (por mal sabor).",
      "Reacciones cutáneas (raro en humanos)."
    ],
    monitoreo_recomendado: [
      "Signos de sangrado espontáneo",
      "Función hepática en tratamientos crónicos",
      "Ecocardiografía de seguimiento"
    ],
    instrucciones_manejo: "Administrar con comida o en cápsulas para mejorar la aceptación.",
    sobredosis: {
      signos: ["Sangrado prolongado", "Hematomas"],
      tratamiento: "Transfusión de plaquetas o sangre fresca si el sangrado es crítico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticoagulantes (Heparina/Warfarina)", efecto: "Riesgo extremo de hemorragia.", severidad: "Grave" },
      { farmaco: "AINEs / Aspirina", efecto: "Efecto antiagregante aditivo; aumenta riesgo de sangrado GI.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista irreversible del receptor P2Y12 de ADP en las plaquetas, bloqueando la activación del complejo glicoproteico GPIIb/IIIa.",
    farmacocinetica: "Es una prodroga que requiere activación metabólica hepática."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta recubierta", concentracion_texto: "75 mg", valor_concentracion: 75, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta pequeña (Vet)", concentracion_texto: "18.75 mg", valor_concentracion: 18.75, unidad_concentracion: "mg", es_divisible: false }
  ]
};
