import type { Drug } from '@/lib/types';

export const acetaminofenDrug: Drug = {
  id: "acetaminofen",
  meta_data: {
    nombre_generico: "Acetaminofén (Paracetamol)",
    nombres_comerciales: ["Tylenol", "Panadol", "Datril"],
    grupo_farmacologico: "Analgésico no opiáceo; Antipirético",
    status_regulatorio: "OTC. ¡PROHIBIDO EN GATOS!"
  },
  resumen_clinico: {
    puntos_clave: [
      "Analgésico y antipirético.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS! Una sola dosis puede ser letal.",
      "En perros se usa con precaución, a menudo combinado con codeína.",
      "Carece de efectos antiinflamatorios significativos."
    ],
    usos_principales: "Tratamiento del dolor leve a moderado y fiebre en perros. Coadyuvante antitusivo.",
    inicio_accion: "30-60 minutos",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "¡NUNCA dar a gatos! Es mortal para ellos.",
    "En perros, administrar con comida para reducir malestar estomacal.",
    "No exceder la dosis recomendada por el veterinario.",
    "El antídoto es la Acetilcisteína si hay ingestión accidental."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Analgesia/Antipiresis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "mg"
        },
        frecuencia: {
          texto_ui: "NUNCA USAR",
          intervalo_horas: 0
        },
        notas_tecnicas: "Los gatos carecen de la enzima glucuronil transferasa, lo que genera metabolitos altamente tóxicos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Hipersensibilidad.",
      "Enfermedad hepática severa."
    ],
    efectos_adversos: [
      "Perros: Hepatotoxicidad (dosis altas).",
      "Gatos: Metahemoglobinemia (mucosas marrones), anemia de cuerpos de Heinz, edema facial, necrosis hepática."
    ],
    monitoreo_recomendado: [
      "Color de mucosas (cianosis)",
      "Enzimas hepáticas",
      "Hematocrito en gatos (toxicidad accidental)"
    ],
    sobredosis: {
      signos: ["Cianosis", "Ictericia", "Vómitos", "Muerte"],
      tratamiento: "Acetilcisteína (NAC) IV/PO, Vitamina C, Fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital", efecto: "Aumenta el riesgo de daño hepático", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibición de la COX-3 en el SNC. Bloquea la señalización de prostaglandinas responsables del dolor y la fiebre.",
    farmacocinetica: "Metabolismo hepático rápido. Vida media corta en perros (~1.2h)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta",
      concentracion_texto: "325 mg, 500 mg",
      valor_concentracion: 325,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "160 mg/5mL",
      valor_concentracion: 32,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
