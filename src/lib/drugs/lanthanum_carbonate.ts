import type { Drug } from '@/lib/types';

export const lanthanumCarbonateDrug: Drug = {
  id: "lanthanum_carbonate",
  meta_data: {
    nombre_generico: "Carbonato de Lantano",
    nombres_comerciales: ["Fosrenol"],
    grupo_farmacologico: "Quelante de fosfato",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Se une al fosfato ingerido en el tracto GI formando complejos insolubles.",
      "Utilizado cuando las dietas bajas en fósforo no son suficientes.",
      "Monitorizar niveles de fosfato cada 4 a 6 semanas para ajustar dosis.",
      "Proporcionar agua fresca en todo momento.",
      "No se recomienda iniciar durante una crisis urémica aguda; estabilizar primero."
    ],
    usos_principales: "Reducción de fosfato sérico en enfermedad renal crónica (ERC) en perros y gatos.",
    inicio_accion: "Inmediato (acción local)",
    duracion_efecto: "Durante el tránsito de la comida"
  },
  informacion_cliente: [
    "Debe administrarse con cada comida para atrapar el fósforo de la dieta.",
    "Asegúrese de que el animal tenga siempre agua disponible.",
    "Se requieren análisis de sangre periódicos para ajustar la dosis.",
    "Si su mascota deja de comer, consulte al veterinario antes de dar la dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg/día"
        },
        frecuencia: { texto_ui: "Dividido entre las comidas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad Renal Crónica (ERC)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 400,
          dosis_min: 400,
          dosis_max: 800,
          unidad_calculo: "mg/gato/día"
        },
        frecuencia: { texto_ui: "Dividido según horario de comidas", intervalo_horas: 12 },
        notas_tecnicas: "Iniciar con 400 mg/día. Es vital dar una parte con cada comida."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción intestinal.",
      "Hipersensibilidad conocida.",
      "Crisis urémica aguda no estabilizada."
    ],
    efectos_adversos: [
      "Trastornos gastrointestinales leves.",
      "Estreñimiento o diarrea."
    ],
    monitoreo_recomendado: [
      "Fosfato sérico cada 4-6 semanas",
      "Niveles de calcio sérico",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Administrar junto con el alimento.",
    sobredosis: {
      signos: ["Hipofosfatemia severa", "Estreñimiento"],
      tratamiento: "Soporte sintomático y ajuste de dosis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros medicamentos orales", efecto: "Pueden verse afectados en su absorción. Espaciar al menos 1-3 horas.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une selectivamente al fosfato en el lumen intestinal, impidiendo su absorción sistémica.",
    farmacocinetica: "Casi nula absorción sistémica. Se elimina por heces."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta masticable", concentracion_texto: "500 mg, 750 mg, 1 g", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};
