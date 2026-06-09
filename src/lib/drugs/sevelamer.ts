import type { Drug } from '@/lib/types';

export const sevelamerDrug: Drug = {
  id: "sevelamer",
  meta_data: {
    nombre_generico: "Clorhidrato de Sevelamer",
    nombres_comerciales: ["Renagel"],
    grupo_farmacologico: "Quelante de fosfato; Resina de intercambio iónico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Resina de intercambio iónico orgánica que se une al fosfato intestinal.",
      "Utilizado cuando las dietas bajas en fósforo son insuficientes.",
      "No contiene calcio ni metales, reduciendo el riesgo de hipercalcemia.",
      "Las tabletas son higroscópicas y se expanden al contacto con fluidos.",
      "Puede inhibir la absorción de Vitamina K."
    ],
    usos_principales: "Reducción de fosfato sérico en enfermedad renal crónica (ERC) en perros y gatos.",
    inicio_accion: "Inmediato (acción local)",
    duracion_efecto: "Durante el tránsito de la comida"
  },
  informacion_cliente: [
    "Debe administrarse junto con las comidas.",
    "Dar al menos 1 hora antes o 3 horas después de cualquier otro medicamento.",
    "Asegúrese de que el animal tenga siempre agua fresca.",
    "Se requieren análisis de sangre periódicos para ajustar la dosis.",
    "Informe si nota estreñimiento severo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 35,
          dosis_min: 30,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas con comida", intervalo_horas: 8 },
        notas_tecnicas: "Titular según niveles de fosfato sérico cada 4-6 semanas."
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 35,
          dosis_min: 30,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas con comida", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Estreñimiento.",
      "Vómitos.",
      "Reducción de absorción de vitaminas (A, D, E, K).",
      "Hinchazón de las tabletas (riesgo de obstrucción si no se traga bien)."
    ],
    monitoreo_recomendado: [
      "Fosfato sérico cada 4-6 semanas",
      "Tiempo de protrombina (si hay uso prolongado por Vit K)",
      "Consistencia de heces"
    ],
    instrucciones_manejo: "No triturar las tabletas. Administrar enteras.",
    sobredosis: {
      signos: ["Estreñimiento severo", "Hipofosfatemia"],
      tratamiento: "Soporte sintomático; ajuste de dosis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros medicamentos orales", efecto: "Sevelamer puede reducir su absorción. Espaciar 1-3 horas.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une selectivamente al fosfato en el lumen intestinal mediante intercambio de iones cloruro.",
    farmacocinetica: "No se absorbe sistémicamente; se elimina por heces."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "800 mg", valor_concentracion: 800, unidad_concentracion: "mg", es_divisible: false }
  ]
};
