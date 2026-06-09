import type { Drug } from '@/lib/types';

export const ropivacaineDrug: Drug = {
  id: "ropivacaine",
  meta_data: {
    nombre_generico: "Ropivacaína",
    nombres_comerciales: ["Naropin"],
    grupo_farmacologico: "Anestésico local (Amida)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueante de canales de sodio con selectividad para fibras sensoriales.",
      "Menos cardiotóxica que la bupivacaína.",
      "Menor bloqueo motor asociado.",
      "Inicio de acción más rápido que bupivacaína pero más lento que lidocaína.",
      "¡NUNCA administrar por vía IV!"
    ],
    usos_principales: "Analgesia regional, bloqueos perineurales, técnicas epidurales e interpleurales.",
    inicio_accion: "10-20 min (Epidural)",
    duracion_efecto: "3 a 8 horas"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario.",
    "Bloquea el dolor de forma prolongada tras cirugías.",
    "La zona puede permanecer adormecida por varias horas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Bloqueos Perineurales / Regionales",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Volumen guía: 0.1 ml/kg por sitio. No exceder 4 mg/kg cada 8h."
      },
      {
        indicacion: "Epidural",
        vias: ["Epidural"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Combinar con morfina (0.1 mg/kg). Máximo 6 ml de volumen total."
      }
    ],
    gato: [
      {
        indicacion: "Bloqueos regionales",
        vias: ["Infiltración"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Dosis tóxica no bien establecida; no exceder 2 mg/kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Inyección IV accidental.",
      "Hipersensibilidad a amidas."
    ],
    efectos_adversos: [
      "Arritmias cardíacas por inyección intravascular.",
      "Toxicidad del SNC (convulsiones).",
      "Bloqueo motor prolongado."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco",
      "Presión arterial",
      "Estado neurológico"
    ],
    instrucciones_manejo: "Diluir con salino para ampliar distribución. Observar asepsia.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias"],
      tratamiento: "Soporte vital. Infusión de lípidos (Intralipid) IV."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueo reversible de los canales de sodio neuronales.",
    farmacocinetica: "Menor liposolubilidad que bupivacaína, lo que reduce su paso al miocardio."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "2 mg/ml a 10 mg/ml", valor_concentracion: 2, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
