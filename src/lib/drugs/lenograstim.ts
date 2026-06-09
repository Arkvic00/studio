import type { Drug } from '@/lib/types';

export const lenograstimDrug: Drug = {
  id: "lenograstim",
  meta_data: {
    nombre_generico: "Lenograstim (rhG-CSF)",
    nombres_comerciales: ["Granocyte"],
    grupo_farmacologico: "Agente estimulante de colonias de granulocitos",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Factor estimulante de colonias de granulocitos humano recombinante.",
      "Potencia la producción y activación de neutrófilos.",
      "Uso principal en pacientes con neutropenia severa febril (<1 x 10⁹/l).",
      "Menos reportes de uso que el filgrastim en veterinaria.",
      "En perros sanos puede inducir la formación de anticuerpos neutralizantes."
    ],
    usos_principales: "Manejo de la neutropenia severa febril inducida por quimioterapia en perros.",
    inicio_accion: "Rápido (aumento de neutrófilos en 24h)",
    duracion_efecto: "Corta; requiere administración diaria"
  },
  informacion_cliente: [
    "Medicamento inyectable especializado para subir las defensas.",
    "Se requieren análisis de sangre diarios para controlar la respuesta.",
    "Puede causar dolor en los huesos o inflamación en el sitio de inyección.",
    "Administrar al menos 24 horas después de la quimioterapia."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neutropenia severa / Sepsis",
        vias: ["SC", "IV lenta"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 19.2,
          unidad_calculo: "millones IU/m²"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 a 5 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad al fármaco.",
      "Simultáneo con quimioterapia (esperar 24h)."
    ],
    efectos_adversos: [
      "Dolor óseo (frecuente).",
      "Inflamación en el sitio de inyección.",
      "Hipotensión transitoria.",
      "Elevación de enzimas hepáticas.",
      "Potencial neutropenia refractaria por anticuerpos (en uso crónico)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) diario",
      "Signos de dolor óseo",
      "Función hepática"
    ],
    instrucciones_manejo: "Reconstituir con el solvente proporcionado y usar inmediatamente. Mantener refrigerado.",
    sobredosis: {
      signos: ["Leucocitosis extrema", "Dolor óseo severo"],
      tratamiento: "Cese del fármaco; el recuento bajará en pocos días."
    },
    interacciones_farmacologicas: [
      { farmaco: "Quimioterápicos", efecto: "Aumentan la toxicidad hematológica si se dan el mismo día.", severidad: "Importante" },
      { farmaco: "Litio / Esteroides", efecto: "Pueden potenciar la liberación de neutrófilos.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula la maduración y proliferación de los precursores de neutrófilos en la médula ósea.",
    farmacocinetica: "Eliminación rápida tras SC."
  },
  presentaciones_comerciales: [
    { type: "Vial inyectable (Polvo)", concentracion_texto: "33.6 millones IU (263 μg)", valor_concentracion: 33.6, unidad_concentracion: "MU", es_divisible: false }
  ]
};
