import type { Drug } from '@/lib/types';

export const chloramineTDrug: Drug = {
  id: "chloramine_t",
  meta_data: {
    nombre_generico: "Cloramina-T (Cloramina T sódica)",
    nombres_comerciales: ["Chloramine T", "Halamid"],
    grupo_farmacologico: "Desinfectante / Antiséptico externo (Peces)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Desinfectante químico que libera cloro activo y oxígeno en el agua.",
      "Tratamiento de infecciones bacterianas externas, especialmente la enfermedad bacteriana de las branquias.",
      "Eficaz contra algunos protozoos y trematodos ectoparásitos.",
      "La toxicidad aumenta significativamente en aguas con baja dureza y pH bajo.",
      "No mezclar en recipientes metálicos."
    ],
    usos_principales: "Tratamiento de enfermedades bacterianas de las branquias y ectoparásitos en peces mediante inmersión prolongada.",
    inicio_accion: "Inmediato (liberación de cloro activo)",
    duracion_efecto: "Limitada al tiempo de inmersión; se degrada en el agua"
  },
  informacion_cliente: [
    "Producto corrosivo; evitar contacto con piel y ojos. Usar guantes y protección ocular.",
    "Apagar sistemas de filtración UV y de carbón activado durante 24 horas tras la aplicación.",
    "No usar en agua con temperatura inferior a 12°C o bajo luz solar intensa.",
    "Preparar la solución fresca inmediatamente antes de su uso.",
    "No verter el producto directamente en desagües o fuentes de agua naturales."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Infecciones bacterianas externas / Ectoparásitos",
        vias: ["Inmersión prolongada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/l"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por hasta 4 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Monitorear estrechamente la dureza y el pH del agua; el riesgo de toxicidad es mayor en aguas blandas y ácidas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No utilizar en recipientes metálicos.",
      "Agua con temperatura < 12°C.",
      "Exposición a luz solar intensa durante el tratamiento."
    ],
    efectos_adversos: [
      "Engrosamiento hiperplásico y edema del epitelio respiratorio (a dosis altas).",
      "Aumento de la frecuencia respiratoria.",
      "Toxicidad aguda en condiciones de baja dureza/pH del agua."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria y comportamiento de los peces",
      "Parámetros químicos del agua (pH, dureza, temperatura)",
      "Sistemas de filtración (mantener UV/carbón apagados por 24h)"
    ],
    instrucciones_manejo: "CORROSIVO. Manejar con guantes impermeables y protección ocular. No mezclar con otros químicos excepto sal común.",
    sobredosis: {
      signos: ["Dificultad respiratoria severa", "Mortalidad aguda", "Edema branquial"],
      tratamiento: "Dilución inmediata con abundante agua limpia o uso de agentes neutralizantes de cloro si es aplicable."
    },
    interacciones_farmacologicas: [
      { 
        farmaco: "Agentes reductores (ej. Formalina)", 
        efecto: "Incompatibilidad química peligrosa. NO USAR CONJUNTAMENTE.", 
        severidad: "Grave" 
      },
      { 
        farmaco: "Sal común (NaCl)", 
        efecto: "Generalmente compatible.", 
        severidad: "Leve" 
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se descompone en el agua en anión hipoclorito para producir ácido hipocloroso débil, que se descompone más en cloro activo y oxígeno para proporcionar un efecto desinfectante por oxidación.",
    farmacocinetica: "Acción tópica externa sobre la superficie del pez y las branquias. Se degrada rápidamente en el medio ambiente acuático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo blanco",
      concentracion_texto: "100%",
      valor_concentracion: 100,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};