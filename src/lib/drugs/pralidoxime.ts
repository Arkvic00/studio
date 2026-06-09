import type { Drug } from '@/lib/types';

export const pralidoximeDrug: Drug = {
  id: "pralidoxime",
  meta_data: {
    nombre_generico: "Pralidoxima",
    nombres_comerciales: ["Protopam", "Pralidoxime*"],
    grupo_farmacologico: "Reactivador de la colinesterasa; Antídoto",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reactiva la enzima colinesterasa tras el envenenamiento por organofosforados.",
      "Detoxifica por inactivación química directa.",
      "Debe administrarse dentro de las primeras 24 horas para ser efectivo.",
      "No atraviesa significativamente la barrera hematoencefálica.",
      "Debe usarse siempre junto con Atropina."
    ],
    usos_principales: "Tratamiento de la intoxicación aguda por organofosforados.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 8 a 12 horas"
  },
  informacion_cliente: [
    "Antídoto de emergencia para ciertos venenos e insecticidas.",
    "Uso hospitalario exclusivo.",
    "El veterinario monitoreará la respiración del animal constantemente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación por Organofosforados",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 35,
          dosis_min: 20,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto: "Repetir tras 1h si es severo, luego cada 8-12h", intervalo_horas: 8 },
        notas_tecnicas: "Diluir a 20 mg/ml y administrar IV en al menos 2 minutos."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación por Organofosforados",
        vias: ["IV lenta", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Intoxicación por carbamatos (puede empeorar la toxicidad).",
      "Compuestos sin actividad anticolinesterasa."
    ],
    efectos_adversos: [
      "Náuseas y vómitos.",
      "Taquicardia.",
      "Hiperventilación.",
      "Debilidad muscular."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Estado respiratorio",
      "Función renal (ajustar dosis si hay fallo)"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Debilidad muscular severa", "Depresión respiratoria"],
      tratamiento: "Soporte ventilatorio."
    },
    interacciones_farmacologicas: [
      { farmaco: "Morfina / Teofilina / Fenotiazinas", effect: "Evitar su uso durante la intoxicación por organofosforados.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Elimina el grupo fosfato del sitio activo de la colinesterasa, restaurando su capacidad de degradar acetilcolina.",
    farmacocinetica: "Vida media corta. Eliminación renal rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "1 g (50 mg/ml reconstituido)", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};