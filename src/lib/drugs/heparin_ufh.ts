import type { Drug } from '@/lib/types';

export const heparinUfhDrug: Drug = {
  id: "heparin_ufh",
  meta_data: {
    nombre_generico: "Heparina No Fraccionada (Heparina Sódica/Cálcica)",
    nombres_comerciales: ["Heparin", "Hepsal"],
    grupo_farmacologico: "Anticoagulante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anticoagulante que potencia la unión de la antitrombina III a los factores IIa, IXa, Xa, XIa y XIIa.",
      "Solo es efectiva si hay niveles suficientes de antitrombina III.",
      "No lisa coágulos ya formados, pero previene su extensión y formación de nuevos.",
      "Requiere monitorización estricta mediante el Tiempo de Tromboplastina Parcial Activada (TTPA).",
      "Uso común para mantener la permeabilidad de catéteres intravenosos."
    ],
    usos_principales: "Tratamiento de la CID, tromboembolismo pulmonar o aórtico, y mantenimiento de vías venosas.",
    inicio_accion: "Inmediato (IV); 20-60 min (SC)",
    duracion_efecto: "Corta (requiere dosis q6-8h)"
  },
  informacion_cliente: [
    "Medicamento utilizado para prevenir coágulos peligrosos.",
    "Informe inmediatamente si nota sangrado en las encías, moretones o debilidad extrema.",
    "Se requieren análisis de sangre frecuentes para ajustar la dosis exacta.",
    "La inyección en el músculo está prohibida por riesgo de sangrado interno."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anticoagulación sistémica",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 225,
          dosis_min: 150,
          dosis_max: 300,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 },
        notas_tecnicas: "Ajustar dosis para mantener el TTPA entre 1.5 y 2.0 veces el valor basal."
      },
      {
        indicacion: "Infusión Continua (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "IU/kg (Bolo carga)"
        },
        notas_tecnicas: "Seguir con infusión de 20-37.5 IU/kg/h (480-900 IU/kg/día)."
      }
    ],
    gato: [
      {
        indicacion: "Anticoagulación sistémica",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 275,
          dosis_min: 250,
          dosis_max: 300,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Mantenimiento de catéteres",
        vias: ["Intraluminal (lavado)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.25,
          unidad_calculo: "IU/ml (Dilución en salino)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Trastornos hemorrágicos mayores.",
      "Trombocitopenia severa.",
      "Trauma reciente o cirugía mayor.",
      "Falta de monitorización de laboratorio."
    ],
    efectos_adversos: [
      "Hemorragias espontáneas.",
      "Hematomas extensos (especialmente si se inyecta IM).",
      "Trombocitopenia.",
      "Osteoporosis (uso prolongado de meses).",
      "Aumento de enzimas hepáticas."
    ],
    monitoreo_recomendado: [
      "TTPA (Tiempo de Tromboplastina Parcial Activada)",
      "Recuento de plaquetas",
      "Signos de sangrado (petequias, melena)"
    ],
    instrucciones_manejo: "No administrar vía IM. Neutralizar con Sulfato de Protamina en caso de sangrado crítico.",
    sobredosis: {
      signos: ["Sangrado incontrolable", "Hematomas"],
      tratamiento: "Cese inmediato. Antídoto: Sulfato de Protamina IV (1 mg neutraliza ~100 IU de heparina)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aspirina / AINEs", efecto: "Riesgo extremo de hemorragia por doble inhibición.", severidad: "Grave" },
      { farmaco: "Antihistamínicos / Digoxina", efecto: "Pueden reducir parcialmente la eficacia de la heparina.", severidad: "Leve" },
      { farmaco: "Diazepam", efecto: "La heparina puede aumentar los niveles de diazepam en plasma.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Acelera la formación del complejo Antitrombina III-Factores de coagulación, inactivando principalmente la trombina (IIa) y el factor Xa.",
    farmacocinetica: "Eliminación hepática y renal. Vida media corta dependiente de la dosis."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "1,000 IU/ml a 25,000 IU/ml", valor_concentracion: 5000, unidad_concentracion: "IU/ml", es_divisible: false },
    { tipo: "Solución para lavado de catéteres", concentracion_texto: "10-100 IU/ml", valor_concentracion: 100, unidad_concentracion: "IU/ml", es_divisible: false }
  ]
};
