import type { Drug } from '@/lib/types';

export const sevofluraneDrug: Drug = {
  id: "sevoflurane",
  meta_data: {
    nombre_generico: "Sevoflurano",
    nombres_comerciales: ["SevoFlo", "Sevotek"],
    grupo_farmacologico: "Anestésico volátil inhalatorio",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Anestésico inhalatorio potente de muy baja solubilidad en sangre.",
      "Inducción y recuperación extremadamente rápidas.",
      "Olor menos penetrante que el isoflurano (mejor tolerado para mascarilla).",
      "Causa hipotensión dosis-dependiente persistente.",
      "Se degrada en cal sodada caliente formando el compuesto A (nefrotóxico en ratas, no probado en perros).",
      "Requiere vaporizadores de precisión específicos."
    ],
    usos_principales: "Inducción y mantenimiento de la anestesia general en perros y gatos.",
    inicio_accion: "Muy rápido",
    duracion_efecto: "Limitada al tiempo de administración"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario bajo monitorización intensiva.",
    "El animal despierta casi instantáneamente tras cerrar el gas.",
    "Puede causar agitación momentánea en el despertar por su rápida acción.",
    "Suele causar una bajada de la presión arterial."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inducción (sin premedicación)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 7,
          dosis_min: 6,
          dosis_max: 8,
          unidad_calculo: "%"
        }
      },
      {
        indicacion: "Mantenimiento",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          unidad_calculo: "% (MAC)"
        },
        notas_tecnicas: "Ajustar según profundidad anestésica. La premedicación reduce estos requerimientos significativamente."
      }
    ],
    gato: [
      {
        indicacion: "Inducción / Mantenimiento",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          unidad_calculo: "% (MAC)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a gases halogenados.",
      "Predisposición a hipertermia maligna."
    ],
    efectos_adversos: [
      "Hipotensión dosis-dependiente (no remite con el tiempo).",
      "Depresión respiratoria marcada.",
      "Agitación en la recuperación.",
      "Potencial nefrotoxicidad por Compuesto A (evitar flujos muy bajos en cirugías largas).",
      "Atraviesa barrera placentaria."
    ],
    monitoreo_recomendado: [
      "Presión arterial (constante)",
      "Capnografía (EtCO2)",
      "Saturación de oxígeno (SpO2)",
      "Profundidad anestésica"
    ],
    instrucciones_manejo: "Utilizar sistemas de extracción de gases. Requiere vaporizador calibrado para sevoflurano.",
    sobredosis: {
      signos: ["Paro respiratorio", "Hipotensión profunda", "Bradicardia"],
      tratamiento: "Cerrar vaporizador, ventilar con O2 al 100%, soporte cardiovascular agresivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sedantes / Opioides / N2O", efecto: "Reducen significativamente la MAC necesaria.", severidad: "Importante" },
      { farmaco: "Relajantes musculares", efecto: "Sevoflurano potencia su efecto bloqueador.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Depresor general inespecífico del SNC.",
    farmacocinetica: "Eliminación pulmonar casi total. Metabolismo hepático mínimo (3%)."
  },
  presentaciones_comerciales: [
    { tipo: "Líquido para vaporización", concentracion_texto: "100% (botella 250 ml)", valor_concentracion: 100, unidad_concentracion: "%", es_divisible: false }
  ]
};
