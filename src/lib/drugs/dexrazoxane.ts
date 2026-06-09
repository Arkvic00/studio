import type { Drug } from '@/lib/types';

export const dexrazoxaneDrug: Drug = {
  id: "dexrazoxane",
  meta_data: {
    nombre_generico: "Dexrazoxano",
    nombres_comerciales: ["Cardioxane", "Zinecard"],
    grupo_farmacologico: "Antídoto de antraciclinas; Quelante de hierro",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Previene la formación de radicales libres del complejo antraciclina-hierro.",
      "Protege contra la cardiotoxicidad inducida por doxorrubicina.",
      "Tratamiento de elección para lesiones por extravasación de antraciclinas.",
      "Debe administrarse en una línea de infusión separada a la quimioterapia."
    ],
    usos_principales: "Manejo de complicaciones asociadas al uso de quimioterápicos tipo antraciclina (Doxorrubicina, Epirrubicina).",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Requiere protocolo de 3 días para extravasación"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario durante la quimioterapia.",
    "Utilizar guantes para cualquier manipulación.",
    "Informe si nota inflamación o dolor en el sitio donde se aplicó la inyección intravenosa.",
    "Puede contribuir a la bajada de defensas (mielosupresión)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Lesión por extravasación (Doxorrubicina)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 1000,
          dosis_min: 250,
          dosis_max: 1000,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Día 1: 1000 mg/m², Día 2: 1000 mg/m², Día 3: 500 mg/m²",
          intervalo_horas: 24
        },
        notas_tecnicas: "Iniciar idealmente dentro de las primeras 6 horas tras la extravasación. Administrar en una vena distinta a la afectada."
      },
      {
        indicacion: "Prevención de cardiotoxicidad",
        vias: ["IV"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "Ratio 10:1 (10 mg Dexrazoxano por cada 1 mg Doxorrubicina)"
        },
        notas_tecnicas: "Administrar 10 minutos antes de la doxorrubicina en una infusión de 5-10 minutos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas en emergencias de extravasación."
    ],
    efectos_adversos: [
      "Mielosupresión (potencia el efecto de la quimioterapia).",
      "Posible reducción de la eficacia antineoplásica de las antraciclinas (teórico).",
      "Dolor en el sitio de inyección."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) para vigilar neutrófilos",
      "Evolución del tejido en el área de extravasación"
    ],
    instrucciones_manejo: "CITOTÓXICO. Usar guantes impermeables. Reconstituir según instrucciones para obtener 20 mg/ml.",
    sobredosis: {
      signos: ["Mielosupresión profunda"],
      tratamiento: "Soporte sintomático y factores estimulantes de colonias."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antraciclinas", efecto: "Protege contra toxicidad pero puede reducir levemente su eficacia.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se hidroliza intracelularmente para formar un quelante de anillos abiertos que se une al hierro, impidiendo que este reaccione con las antraciclinas para formar radicales libres dañinos.",
    farmacocinetica: "Eliminación rápida tras administración IV."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "500 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
