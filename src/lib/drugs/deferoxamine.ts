import type { Drug } from '@/lib/types';

export const deferoxamineDrug: Drug = {
  id: "deferoxamine",
  meta_data: {
    nombre_generico: "Deferoxamina (Desferrioxamina)",
    nombres_comerciales: ["Desferal"],
    grupo_farmacologico: "Quelante de hierro",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Quelante de hierro que forma un complejo estable de ferrioxamina.",
      "El complejo resultante es soluble en agua y se excreta fácilmente por la orina.",
      "Uso principal en la toxicidad por hierro (ingesta de suplementos o multivitamínicos).",
      "En aves (tucanes, cálaos), se utiliza para el manejo de la hemocromatosis (acumulación de hierro).",
      "La administración IM es dolorosa."
    ],
    usos_principales: "Tratamiento de la toxicidad por hierro y manejo de la hemocromatosis en aves susceptibles.",
    inicio_accion: "Rápido (vía IV)",
    duracion_efecto: "Requiere dosis repetidas o infusión lenta"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para intoxicaciones graves.",
    "La inyección en el músculo puede ser dolorosa para el animal.",
    "La orina puede teñirse de un color rojizo ('vin rosé') durante el tratamiento; es normal.",
    "Informe si nota que el animal parece tener dificultad para respirar o está muy decaído."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Toxicidad por hierro (Aguda)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 6
        }
      },
      {
        indicacion: "Toxicidad por hierro (Infusión)",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg/h"
        },
        notas_tecnicas: "La infusión IV rápida puede causar hipotensión severa y reacciones anafilácticas."
      }
    ],
    gato: [
      {
        indicacion: "Toxicidad por hierro",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 8
        }
      }
    ],
    ave: [
      {
        indicacion: "Hemocromatosis (Manejo crónico)",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por hasta 14 semanas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Efectos equivalentes a la flebotomía regular en minás comunes (Mynahs)."
      },
      {
        indicacion: "Hemocromatosis (Protocolo frecuente)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 horas",
          intervalo_horas: 4
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad renal severa (el complejo quelado debe excretarse vía renal).",
      "Anuria."
    ],
    efectos_adversos: [
      "Dolor intenso en el sitio de inyección IM.",
      "Hipotensión (si se inyecta IV rápido).",
      "Reacciones anafilácticas.",
      "Nefrotoxicidad potencial en tratamientos muy prolongados."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Presión arterial durante infusión IV",
      "Niveles de hierro sérico",
      "Coloración de la orina"
    ],
    instrucciones_manejo: "Reconstituir con agua para inyección. La infusión IV debe ser muy lenta.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Colapso cardiovascular"],
      tratamiento: "Cese inmediato de la infusión y fluidoterapia agresiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente quelante con alta afinidad por el hierro férrico (Fe3+), formando ferrioxamina, un complejo inerte y estable.",
    farmacocinetica: "Eliminación renal predominante. Mínima absorción oral."
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
