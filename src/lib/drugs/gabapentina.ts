import type { Drug } from '@/lib/types';

export const gabapentinaDrug: Drug = {
  id: "gabapentina",
  meta_data: {
    nombre_generico: "Gabapentina",
    nombres_comerciales: ["Neurontin"],
    grupo_farmacologico: "Análogo de GABA; Anticonvulsivo y Analgésico",
    status_regulatorio: "POM CD Schedule 3"
  },
  resumen_clinico: {
    puntos_clave: [
      "Modula los canales de calcio dependientes de voltaje, reduciendo neurotransmisores excitatorios.",
      "No se une a receptores GABA, sino que aumenta sus niveles cerebrales indirectamente.",
      "Excelente para el manejo del dolor neuropático y dolor crónico.",
      "Uso emergente para la reducción del estrés en gatos antes de visitas clínicas.",
      "Se requiere una retirada gradual (tapering) para prevenir convulsiones de rebote.",
      "Atención: Algunas soluciones orales humanas contienen Xilitol (tóxico para perros)."
    ],
    usos_principales: "Tratamiento adyuvante de convulsiones refractarias, manejo del dolor neuropático y postoperatorio, y reducción de estrés pre-visita.",
    inicio_accion: "Rápido (pico plasmático en 2 horas)",
    duracion_efecto: "Corta (requiere administración cada 8 a 12 horas)"
  },
  informacion_cliente: [
    "Puede causar somnolencia o una leve falta de coordinación (ataxia) al inicio.",
    "Si se usa para reducir el estrés en gatos, adminístrelo 2-3 horas antes de salir de casa.",
    "No suspenda el medicamento de forma repentina; siga el plan de reducción del veterinario.",
    "Asegúrese de que el producto no contenga Xilitol si se lo da a un perro.",
    "Puede administrarse con o sin comida."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor neuropático / Postoperatorio / Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas (Iniciar bajo y escalar)", intervalo_horas: 8 }
      }
    ],
    gato: [
      {
        indicacion: "Dolor crónico / Neuropático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Reducción de estrés pre-clínica",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/gato"
        },
        notas_tecnicas: "Administrar 3 horas antes del transporte."
      }
    ],
    huron: [
      {
        indicacion: "Dolor / Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    conejo: [
      {
        indicacion: "Dolor neuropático / Stress pre-transporte",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 2,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas (mantenimiento)", intervalo_horas: 8 },
        notas_tecnicas: "Para stress pre-transporte: 15-30 mg/kg una vez 3 horas antes."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Dolor / Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Hámsteres: Dolor / Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Dolor crónico / Neuropático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Uso de soluciones con Xilitol en perros."
    ],
    efectos_adversos: [
      "Sedación y ataxia (muy comunes).",
      "Polifagia (aumento del apetito).",
      "Vómitos ocasionales.",
      "Falsos positivos en pruebas de proteína urinaria en humanos."
    ],
    monitoreo_recomendado: [
      "Grado de sedación y coordinación",
      "Frecuencia de convulsiones",
      "Función renal y hepática en tratamientos crónicos"
    ],
    instrucciones_manejo: "Retirar de forma gradual. No interrumpir súbitamente.",
    sobredosis: {
      signos: ["Sedación profunda", "Incoordinación severa", "Letargo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiácidos (Aluminio/Magnesio)", efecto: "Reducen la absorción de gabapentina. Espaciar 2 horas.", severidad: "Moderada" },
      { farmaco: "Opioides", efecto: "Gabapentina reduce los requerimientos de opioides (sinergia analgésica).", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad alfa-2-delta de los canales de calcio dependientes de voltaje, reduciendo la liberación de glutamato y otros neurotransmisores excitatorios.",
    farmacocinetica: "Eliminación predominantemente renal. Metabolismo hepático parcial en algunas especies."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "100 mg, 300 mg, 400 mg", valor_concentracion: 300, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta recubierta", concentracion_texto: "600 mg, 800 mg", valor_concentracion: 600, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
