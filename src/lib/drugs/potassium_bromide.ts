import type { Drug } from '@/lib/types';

export const potassiumBromideDrug: Drug = {
  id: "potassium_bromide",
  meta_data: {
    nombre_generico: "Bromuro de Potasio (KBr)",
    nombres_comerciales: ["Libromide", "Epilease", "Bromilep"],
    grupo_farmacologico: "Anticonvulsivo",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potencia el efecto inhibidor del GABA mediante hiperpolarización neuronal.",
      "Uso principal en epilepsia refractaria en combinación con fenobarbital.",
      "Vida media extremadamente larga (>20 días); tarda 3-4 meses en alcanzar estado estable.",
      "Excreción renal en competencia con el cloruro; la dieta salada acelera su eliminación.",
      "¡CONTRAINDICADO EN GATOS!: Causa bronquitis eosinofílica severa y fatal."
    ],
    usos_principales: "Control de convulsiones en perros refractarios al fenobarbital o imepitoina.",
    inicio_accion: "Muy lento (semanas sin dosis de carga)",
    duracion_efecto: "Muy prolongada (semanas)"
  },
  informacion_cliente: [
    "¡PELIGRO!: Nunca dar a gatos; les causa una neumonía grave.",
    "El perro beberá y orinará mucho más; no restrinja el agua.",
    "Mantener la dieta de su perro CONSTANTE (no cambie de marca ni dé premios salados sin consultar).",
    "Puede causar que el perro parezca muy cansado o débil de las patas traseras al inicio.",
    "Informe inmediatamente si nota que el perro está muy aturdido o si aparecen costras en la piel."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Epilepsia (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (puede dividirse q12h)", intervalo_horas: 24 },
        notas_tecnicas: "Ajustar dosis según niveles séricos tras 3 meses. Rango terapéutico: 0.8-1.5 mg/ml (sin fenobarb) o 0.5-1.0 mg/ml (con fenobarb)."
      },
      {
        indicacion: "Dosis de carga (Urgencia - 5 días)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg/día"
        },
        frecuencia: { texto_ui: "Dividido en 4-6 tomas diarias por 5 días", intervalo_horas: 4 },
        notas_tecnicas: "Riesgo alto de ataxia y sedación durante la carga."
      },
      {
        indicacion: "Dosis de carga (Rectal)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg cada 4h (6 dosis)"
        },
        notas_tecnicas: "Para carga rápida en 24h. Total 600 mg/kg."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "¡MORTAL!: Causa bronquitis eosinofílica fatal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (¡MORTAL!).",
      "Fallo renal severo.",
      "Historial de pancreatitis (usar con precaución)."
    ],
    efectos_adversos: [
      "Ataxia y sedación marcada (sobre todo en carga).",
      "Polifagia, poliuria y polidipsia.",
      "Vómitos (irritación gástrica directa).",
      "Pancreatitis.",
      "Erupciones cutáneas maculopapulares.",
      "Irritabilidad y cambios de conducta."
    ],
    monitoreo_recomendado: [
      "Niveles séricos de Bromuro cada 3-4 meses (ideal 10-25 mmol/l)",
      "Función renal (Creatinina/BUN)",
      "Bilis ácidas (vigilar pancreatitis)"
    ],
    instrucciones_manejo: "Administrar con comida para reducir vómitos. El bromuro produce falsos positivos altos de cloruro en laboratorio.",
    sobredosis: {
      signos: ["Bromismo: debilidad extrema, estupor, anorexia"],
      tratamiento: "Fluidoterapia con NaCl 0.9% IV para acelerar excreción."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos de asa (Furosemida)", efecto: "Aumentan drásticamente la eliminación de bromuro, bajando su efecto.", severidad: "Importante" },
      { farmaco: "Fluidos con cloruro (Salino)", efecto: "Aceleran la eliminación del bromuro.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Compite con el transporte de cloruro a través de las membranas neuronales, causando hiperpolarización y elevación del umbral convulsivo.",
    farmacocinetica: "No se metaboliza en el hígado. Se elimina exclusivamente por el riñón."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "325 mg", valor_concentracion: 325, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Cápsulas", concentracion_texto: "100 mg a 1000 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "250 mg/ml (25%)", valor_concentracion: 250, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};