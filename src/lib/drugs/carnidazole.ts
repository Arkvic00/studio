import type { Drug } from '@/lib/types';

export const carnidazoleDrug: Drug = {
  id: "carnidazole",
  meta_data: {
    nombre_generico: "Carnidazol",
    nombres_comerciales: ["Harkers Carnidazole", "Spartrix"],
    grupo_farmacologico: "Antiprotozoario (Coccidiocida)",
    status_regulatorio: "AVM-GSL, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento del cancro de la paloma (Trichomonas columbae).",
      "Se debe tratar a todas las aves del palomar simultáneamente.",
      "Debe combinarse con una higiene rigurosa del palomar, incluyendo desinfección de comederos.",
      "Seguro en diversas especies de aves rapaces."
    ],
    usos_principales: "Tratamiento de tricomoniasis (cancro) en palomas y otras aves (psitácidas, rapaces)."
  },
  informacion_cliente: [
    "Evite el contacto directo con el producto; use guantes impermeables.",
    "No usar en aves destinadas al consumo humano.",
    "Desinfecte los comederos y bebederos durante el tratamiento.",
    "Un tratamiento suele ser suficiente para palomas, pero siga las indicaciones si se requieren más dosis."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Palomas: Tricomoniasis (Cancro)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/ave"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      },
      {
        indicacion: "Aves Rapaces: Tricomoniasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 25,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única (puede repetirse al día siguiente)", intervalo_horas: 24 }
      },
      {
        indicacion: "Psitácidas: Tricomoniasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 30,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir después de 2 semanas", intervalo_horas: 336 }
      },
      {
        indicacion: "Otras aves: Tricomoniasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Aves destinadas al consumo humano."
    ],
    efectos_adversos: [
      "No se han reportado efectos adversos significativos."
    ],
    monitoreo_recomendado: [
      "Resolución de lesiones en cavidad oral",
      "Estado de higiene del entorno"
    ],
    instrucciones_manejo: "Usar guantes impermeables. Evitar contacto directo con el producto.",
    sobredosis: {
      signos: ["No especificados"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Coccidiocida; el mecanismo de acción exacto no es conocido.",
    farmacocinetica: "Absorción oral en aves."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "10 mg",
      valor_concentracion: 10,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};