import type { Drug } from '@/lib/types';

export const miltefosineDrug: Drug = {
  id: "miltefosine",
  meta_data: {
    nombre_generico: "Miltefosina",
    nombres_comerciales: ["Milteforan"],
    grupo_farmacologico: "Antileishmánico; Agente antiprotozoario",
    status_regulatorio: "POM-V. Autorizado en España y Alemania para uso veterinario."
  },
  resumen_clinico: {
    puntos_clave: [
      "Directamente tóxico para Leishmania e incrementa la activación de macrófagos y células T.",
      "Reduce sustancialmente la carga parasitaria sin eliminación completa.",
      "Eficacia comparable al protocolo alopurinol/antimoniato pero con menos efectos secundarios graves.",
      "Se recomienda administrar sobre el alimento para reducir molestias digestivas.",
      "Requiere uso conjunto con Alopurinol."
    ],
    usos_principales: "Tratamiento de la leishmaniosis canina.",
    inicio_accion: "Progresivo durante el curso de 28 días.",
    duracion_efecto: "Requiere un ciclo completo de 28 días."
  },
  informacion_cliente: [
    "Administrar el producto vertiéndolo directamente sobre la comida.",
    "Completar el ciclo de 28 días sin interrupciones.",
    "El animal debe seguir tomando Alopurinol tras finalizar la miltefosina.",
    "Informe si nota vómitos o diarrea persistente (suelen ser pasajeros).",
    "Utilizar guantes y gafas protectoras al manipular el producto (irritante)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Leishmaniosis canina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 28 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Es vital completar el curso y darlo junto con Alopurinol."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación y lactancia.",
      "Animales destinados a la reproducción.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Vómitos y diarrea moderados (muy comunes, duran hasta 7 días).",
      "Irritación y sensibilización ocular/cutánea (en humanos al manipular).",
      "Vómitos incontrolables tras sobredosis."
    ],
    monitoreo_recomendado: [
      "Función renal y hepática",
      "Tolerancia digestiva",
      "Carga parasitaria post-tratamiento"
    ],
    instrucciones_manejo: "No agitar el vial para evitar formación de espuma. Usar equipo de protección personal.",
    sobredosis: {
      signos: ["Vómitos incoercibles"],
      tratamiento: "Soporte sintomático intensivo y antieméticos."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con las vías de señalización celular y el metabolismo de fosfolípidos de la membrana de Leishmania, induciendo apoptosis.",
    farmacocinetica: "Absorción oral lenta y vida media larga."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oral",
      concentracion_texto: "20 mg/ml",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
