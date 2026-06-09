import type { Drug } from '@/lib/types';

export const glipizideDrug: Drug = {
  id: "glipizide",
  meta_data: {
    nombre_generico: "Glipizida",
    nombres_comerciales: ["Minodiab", "Glipizide*"],
    grupo_farmacologico: "Agente antidiabético (Sulfonilurea)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta la secreción de insulina si existe reserva funcional de células beta.",
      "Uso exclusivo en gatos para el manejo de diabetes mellitus tipo II.",
      "Alternativa para propietarios que no pueden o no desean administrar insulina.",
      "Puede acelerar la pérdida de células beta con el tiempo.",
      "El efecto máximo sobre la glucemia puede tardar de 4 a 8 semanas en observarse."
    ],
    usos_principales: "Manejo de la diabetes mellitus no cetósica en gatos.",
    inicio_accion: "Lento (semanas para estabilización)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Administrar siempre junto con la comida.",
    "No es efectivo si el gato no produce nada de insulina (deficiencia absoluta).",
    "Informe inmediatamente si nota que el animal está muy débil, tiembla o tiene las encías amarillas.",
    "Requiere controles regulares de glucosa en sangre y orina."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Diabetes mellitus no cetósica",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas con comida",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con 2.5 mg/gato. Si no hay efectos adversos tras 2 semanas y la glucemia sigue alta, aumentar a 5 mg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Cetoacidosis diabética.",
      "Diabetes mellitus tipo I (deficiencia absoluta).",
      "Insuficiencia hepática o renal severa."
    ],
    efectos_adversos: [
      "Trastornos gastrointestinales (vómitos).",
      "Hipoglucemia.",
      "Reacciones de hipersensibilidad (ictericia, erupciones, fiebre).",
      "Hepatotoxicidad."
    ],
    monitoreo_recomendado: [
      "Glucosa sanguínea y fructosamina",
      "Enzimas hepáticas (ALT, bilirrubina)",
      "Presencia de cetonas en orina"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Hipoglucemia severa", "Debilidad", "Convulsiones"],
      tratamiento: "Administración de glucosa/dextrosa IV y alimentación inmediata."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Cloranfenicol / Fluoroquinolonas", efecto: "Pueden potenciar el efecto hipoglucemiante de la glipizida.", severidad: "Importante" },
      { farmaco: "IECAs (Enalapril)", efecto: "Pueden aumentar la sensibilidad a la insulina.", severidad: "Moderada" },
      { farmaco: "Corticosteroides", efecto: "Antagonizan el efecto de la glipizida al aumentar la glucemia.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estimula la liberación de insulina de las células beta pancreáticas al cerrar los canales de potasio dependientes de ATP.",
    farmacocinetica: "Metabolismo hepático y excreción renal/fecal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2.5 mg, 5 mg",
      valor_concentracion: 5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
