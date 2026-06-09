import type { Drug } from '@/lib/types';

export const tetracosactideDrug: Drug = {
  id: "tetracosactide",
  meta_data: {
    nombre_generico: "Tetracosactida (ACTH sintética)",
    nombres_comerciales: ["Synacthen"],
    grupo_farmacologico: "Análogo de la ACTH; Diagnóstico endocrino",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo sintético de la hormona adrenocorticotropa.",
      "Estimula la corteza adrenal para producir cortisol.",
      "Fármaco de elección para el test de estimulación con ACTH.",
      "Utilizado para diagnosticar Hipoadrenocorticismo (Addison) e Hiperadrenocorticismo (Cushing).",
      "Monitorización del tratamiento con mitotano o trilostano."
    ],
    usos_principales: "Diagnóstico de trastornos de la glándula adrenal en perros y gatos.",
    inicio_accion: "Rápido (pico de cortisol en 60-90 min)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Medicamento utilizado para una prueba de diagnóstico hormonal.",
    "Requiere que su mascota permanezca en la clínica por 1 a 2 horas.",
    "Se tomarán muestras de sangre antes y después de la inyección.",
    "La inyección en el músculo puede ser dolorosa."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Test de estimulación con ACTH",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg (5 μg/kg)"
        },
        frecuencia: { texto_ui: "Dosis única para la prueba", intervalo_horas: 0 },
        notas_tecnicas: "Extraer sangre basal y a los 60 min post-inyección IV (o 90 min post-IM). Alícuotas diluidas pueden congelarse."
      }
    ],
    gato: [
      {
        indicacion: "Test de estimulación con ACTH",
        vias: ["IV", "IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 125,
          unidad_calculo: "μg/gato (o 5 μg/kg)"
        },
        notas_tecnicas: "Los gatos responden de forma menos dramática que los perros; requiere rangos de referencia específicos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a la ACTH.",
      "Uso terapéutico como estimulante adrenal (no recomendado)."
    ],
    efectos_adversos: [
      "Dolor local en el sitio de inyección IM.",
      "Reacciones de hipersensibilidad (raro).",
      "Vómitos (inusual)."
    ],
    monitoreo_recomendado: [
      "Niveles de cortisol plasmático según protocolo",
      "Signos de anafilaxia post-inyección"
    ],
    instrucciones_manejo: "Estable refrigerado. Se puede congelar una vez por periodos cortos.",
    sobredosis: {
      signos: ["Aumento excesivo de cortisol transitorio"],
      tratamiento: "Soporte sintomático; el efecto es breve."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Pueden suprimir la respuesta adrenal al test. Suspender 24h antes (o 48-72h si son de larga duración).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a los receptores MC2R en la zona fasciculada de la corteza suprarrenal, induciendo la esteroidogénesis.",
    farmacocinetica: "Eliminación rápida de la circulación."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "250 μg/ml (0.25 mg/ml)",
      valor_concentracion: 0.25,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
