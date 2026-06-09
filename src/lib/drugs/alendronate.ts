import type { Drug } from '@/lib/types';

export const alendronateDrug: Drug = {
  id: "alendronate",
  meta_data: {
    nombre_generico: "Alendronato (Alendronato sódico)",
    nombres_comerciales: ["Fosamax"],
    grupo_farmacologico: "Bisfosfonato; Inhibidor de la reabsorción ósea osteoclástica",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la reabsorción ósea osteoclástica.",
      "Promueve la apoptosis e inhibe la angiogénesis y la división celular cancerosa.",
      "Información limitada en perros; la mala absorción oral limita su eficacia en esta especie."
    ],
    usos_principales: "Tratamiento de la hipercalcemia idiopática y reducción del dolor asociado a condiciones osteolíticas (ej. tumores óseos).",
    inicio_accion: "No especificado",
    duracion_efecto: "Prolongada (se une al hueso)"
  },
  informacion_cliente: [
    "Administrar estrictamente con el estómago vacío.",
    "En gatos, es vital administrar al menos 6 ml de agua inmediatamente después de la tableta.",
    "Vigilar si hay vómitos, falta de apetito o dificultad para tragar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipercalcemia / Reducción de dolor óseo",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Administrar con el estómago vacío. La eficacia es limitada debido a la pobre absorción en esta especie."
      }
    ],
    gato: [
      {
        indicacion: "Hipercalcemia idiopática",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Semanal",
          intervalo_horas: 168
        },
        notas_tecnicas: "Administrar semanalmente con el estómago vacío. SEGUIDO OBLIGATORIAMENTE de al menos 6 ml de agua con jeringa. Si se tolera bien, la dosis puede aumentarse hasta 30 mg/gato semanal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Fallo renal (evitar).",
      "Hipersensibilidad a bisfosfonatos."
    ],
    precauciones: [
      "Insuficiencia renal (usar con precaución).",
      "Posible contraindicación en enfermedad esofágica (basado en humanos)."
    ],
    efectos_adversos: [
      "Irritación esofágica (esofagitis) y úlceras gastrointestinales superiores.",
      "Vómitos e inapetencia (reportado en perros).",
      "Fracturas patológicas (reportadas en gatos tras uso prolongado de 5-9 años).",
      "Osteonecrosis y dolor musculoesquelético.",
      "Hipocalcemia."
    ],
    monitoreo_recomendado: [
      "Niveles de calcio sérico",
      "Función renal (Creatinina/BUN)",
      "Signos de malestar esofágico"
    ],
    instrucciones_manejo: "Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Hipocalcemia", "Malestar GI severo"],
      tratamiento: "Soporte sintomático y corrección de niveles de calcio si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aspirina", efecto: "Aumenta riesgo de eventos adversos GI superiores. NO USAR EN COMBINACIÓN.", severidad: "Grave" },
      { farmaco: "AINEs", efecto: "Usar con precaución por riesgo de úlceras GI.", severidad: "Importante" },
      { farmaco: "Calcio (Suplementos/Dietas)", efecto: "Disminuye la biodisponibilidad del alendronato. EVITAR administración conjunta.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Acción primaria de inhibición de la reabsorción ósea osteoclástica a través de la inhibición de la función de los osteoclastos.",
    farmacocinetica: "Pobre absorción oral en perros."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta", concentracion_texto: "70 mg", valor_concentracion: 70, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "0.7 mg/ml", valor_concentracion: 0.7, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
