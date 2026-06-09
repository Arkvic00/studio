import type { Drug } from '@/lib/types';

export const bromhexineDrug: Drug = {
  id: "bromhexine",
  meta_data: {
    nombre_generico: "Bromhexina",
    nombres_comerciales: ["Bisolvon", "Bromhex-Air Forte", "Exflow", "Tudomax"],
    grupo_farmacologico: "Secretolítico bronquial; Mucolítico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Secretolítico bronquial que altera la estructura de las fibras de mucopolisacáridos.",
      "Produce un moco menos viscoso y más fácil de expectorar.",
      "Útil como adyuvante en el manejo de diversas enfermedades respiratorias.",
      "La formulación inyectable puede ser preferible para nebulización."
    ],
    usos_principales: "Ayuda en el manejo de enfermedades respiratorias que cursan con moco viscoso en mamíferos, aves y reptiles.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración cada 12 a 24 horas"
  },
  informacion_cliente: [
    "No utilizar la versión en polvo para nebulización, ya que generará espuma y bloqueará el equipo.",
    "Completar el tratamiento según las indicaciones del veterinario.",
    "Informe si nota cambios en el patrón respiratorio de su mascota."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mucólisis (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Mucólisis (Inyectable)",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 9,
          dosis_min: 3,
          dosis_max: 15,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Pequeños mamíferos / Exóticos",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.15,
          unidad_calculo: "mg/ml"
        },
        duracion_tratamiento: "20–30 minutos",
        frecuencia: { texto_ui: "1 a 3 veces al día", intervalo_horas: 8 },
        notas_tecnicas: "¡ADVERTENCIA!: No usar el polvo; genera espuma. Usar la solución inyectable."
      }
    ],
    gato: [
      {
        indicacion: "Mucólisis (Oral)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Mucólisis (Inyectable)",
        vias: ["IM"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Nebulización",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.15,
          unidad_calculo: "mg/ml"
        },
        duracion_tratamiento: "20–30 minutos",
        frecuencia: { texto_ui: "1 a 3 veces al día", intervalo_horas: 8 }
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    cobaya: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    reptil: [
      {
        indicacion: "Enfermedad respiratoria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.1,
          dosis_max: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas para uso respiratorio básico."
    ],
    efectos_adversos: [
      "Generalmente bien tolerado.",
      "Posible irritación gástrica en algunos animales."
    ],
    monitoreo_recomendado: [
      "Respuesta clínica (facilidad de expectoración)",
      "Patrón respiratorio"
    ],
    instrucciones_manejo: "No usar la presentación en polvo para nebulizar. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Trastornos digestivos leves"],
      treatment: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Secretolítico bronquial que fragmenta las fibras de mucopolisacáridos ácidos en el esputo mucoide.",
    farmacocinetica: "Absorción rápida tras administración oral."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "3 mg/ml",
      valor_concentracion: 3,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Polvo oral",
      concentracion_texto: "10 mg/g",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
