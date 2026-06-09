import type { Drug } from '@/lib/types';

export const sodiumChlorideDrug: Drug = {
  id: "sodium_chloride",
  meta_data: {
    nombre_generico: "Cloruro de Sodio (Salino)",
    nombres_comerciales: ["Aqupharm", "Vetivex"],
    grupo_farmacologico: "Cristaloide; Expansor de volumen plasmático",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Isotónico (0.9%) reemplaza fluidos extracelulares perdidos.",
      "Hipertónico (7%) expande volumen plasmático rápidamente atrayendo agua de los tejidos.",
      "Tratamiento de elección para hipercalcemia e hipercloremia.",
      "El ungüento al 5% reduce el edema corneal por ósmosis.",
      "Contiene más cloruro que el plasma (riesgo de acidosis en uso masivo)."
    ],
    usos_principales: "Reemplazo de fluidos, tratamiento del shock (hipertónico), diluyente de fármacos y manejo del edema corneal.",
    inicio_accion: "Inmediato (IV)",
    duracion_efecto: "Corta (distribución rápida a otros compartimentos)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para hidratación.",
    "El ungüento ocular puede causar una leve sensación de picor.",
    "Informe si nota que su mascota se hincha o tiene dificultad para respirar (sobrecarga de fluidos).",
    "No usar soluciones hipertónicas si el animal está deshidratado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Reemplazo de fluidos (Isotónico 0.9%)",
        vias: ["IV", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 55,
          dosis_min: 50,
          dosis_max: 60,
          unidad_calculo: "ml/kg/día"
        },
        notas_tecnicas: "Ajustar según grado de deshidratación y pérdidas continuas."
      },
      {
        indicacion: "Shock Hipovolémico (Hipertónico 7%)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          dosis_min: 3,
          dosis_max: 8,
          unidad_calculo: "ml/kg"
        },
        frecuencia: { texto: "Administrar lentamente; seguir con isotónicos", intervalo_horas: 0 }
      },
      {
        indicacion: "Edema Corneal (Ungüento 5%)",
        vias: ["Tópica ocular"],
        math: { tipo_calculo: "fija", dosis_recomendada: 1, unidad_calculo: "aplicación pequeña" },
        frecuencia: { texto_ui: "Cada 4 a 24 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Reemplazo / Shock",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "ml/kg (Hipertónico)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipernatremia.",
      "Insuficiencia cardíaca congestiva severa.",
      "Sobrecarga de volumen.",
      "Hipertónico: Contraindicado en deshidratación severa (empeora la deshidratación celular)."
    ],
    efectos_adversos: [
      "Edema periférico y pulmonar.",
      "Acidosis metabólica hiperclorémica.",
      "Bradicardia vagal (con hipertónico rápido).",
      "Escocimiento ocular (ungüento)."
    ],
    monitoreo_recomendado: [
      "Estado de hidratación y peso corporal",
      "Electrolitos séricos (Sodio)",
      "Presión venosa central",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "No administrar soluciones hipertónicas a más de 1 ml/kg/min.",
    sobredosis: {
      signos: ["Dificultad respiratoria", "Ingurgitación yugular", "Edema"],
      tratamiento: "Cese de infusión; diuréticos de asa (furosemida); oxigenoterapia."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Restauración de la osmolaridad y el volumen del líquido extracelular.",
    farmacocinetica: "Eliminación renal."
  },
  presentaciones_comerciales: [
    { tipo: "Bolsa de infusión", concentracion_texto: "0.45% a 7%", valor_concentracion: 0.9, unidad_concentracion: "%", es_divisible: false },
    { tipo: "Ungüento oftálmico", concentracion_texto: "5%", valor_concentracion: 5, unidad_concentracion: "%", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "300 mg, 600 mg", valor_concentracion: 600, unidad_concentracion: "mg", es_divisible: true }
  ]
};