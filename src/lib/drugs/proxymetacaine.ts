import type { Drug } from '@/lib/types';

export const proxymetacaineDrug: Drug = {
  id: "proxymetacaine",
  meta_data: {
    nombre_generico: "Proxmetacaína (Proparacaína)",
    nombres_comerciales: ["Proxymetacaine*"],
    grupo_farmacologico: "Anestésico local oftálmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueo reversible de canales de sodio en fibras nerviosas sensoriales.",
      "Inicio de acción ultra-rápido (menos de 1 min).",
      "Duración de 25-55 min según la especie.",
      "Bloquea la producción refleja de lágrima.",
      "Tóxico para el epitelio corneal si se usa repetidamente."
    ],
    usos_principales: "Anestesia local de la superficie ocular, meato auditivo externo y narinas.",
    inicio_accion: "Inmediato (< 1 min)",
    duracion_efecto: "25 a 55 minutos"
  },
  informacion_cliente: [
    "Medicamento para quitar el dolor en el ojo durante exámenes o pruebas.",
    "No debe usarse como tratamiento prolongado en casa.",
    "El animal puede parpadear menos tras la aplicación; proteger el ojo del polvo.",
    "No aplicar antes de realizar el test de lágrima (Schirmer)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anestesia Ocular / Nasal / Ótica",
        vias: ["Tópica"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        notas_tecnicas: "Ocular: 1-2 gotas. Nasal: 5-10 gotas. Duración en perros: 45-55 min."
      }
    ],
    gato: [
      {
        indicacion: "Anestesia Ocular",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        notas_tecnicas: "Duración en gatos: 25 min."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uso terapéutico crónico (¡PROHIBIDO!).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Hiperemia conjuntival (enrojecimiento).",
      "Quemosis (inflamación de la conjuntiva).",
      "Retraso en la cicatrización de úlceras corneales.",
      "Toxicidad epitelial corneal."
    ],
    monitoreo_recomendado: [
      "Integridad corneal",
      "Respuesta al dolor durante el procedimiento"
    ],
    instrucciones_manejo: "Mantener refrigerado y protegido de la luz. Pierde eficacia si se deja a temperatura ambiente >2 semanas.",
    sobredosis: {
      signos: ["Daño corneal severo", "Irritación local marcada"],
      tratamiento: "Lavar con abundante salino estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Impide la propagación del potencial de acción en los nervios sensoriales al bloquear reversiblemente los canales de sodio.",
    farmacocinetica: "Acción tópica local inmediata."
  },
  presentaciones_comerciales: [
    {
      tipo: "Gotas oftálmicas",
      concentracion_texto: "0.5% (Viales monodosis)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
