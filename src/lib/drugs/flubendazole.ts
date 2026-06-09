import type { Drug } from '@/lib/types';

export const flubendazoleDrug: Drug = {
  id: "flubendazole",
  meta_data: {
    nombre_generico: "Flubendazol",
    nombres_comerciales: ["Flubenvet", "Flukasol", "Anti Fluke & Wormer", "Flimabend", "Fluke-M"],
    grupo_farmacologico: "Antihelmíntico (Benzimidazol)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa uniéndose a las proteínas de los microtúbulos del parásito.",
      "Provoca parálisis, muerte y expulsión de los parásitos.",
      "Alta potencia clínica a pesar de su baja solubilidad.",
      "Utilizado para eliminar caracoles e hidras en acuarios."
    ],
    usos_principales: "Tratamiento de trematodos monogénicos (flukes de piel y branquias) y nematodos internos en peces.",
    inicio_accion: "Inmediato (baño)",
    duracion_efecto: "Larga (inmersión prolongada)"
  },
  informacion_cliente: [
    "No utilizar en sistemas de agua abierta sin filtración.",
    "Realizar un cambio de al menos el 30% del agua 6 días después del tratamiento.",
    "Seguir estrictamente las guías de dosificación para evitar toxicidad ambiental.",
    "Informe si nota cambios en el comportamiento de los peces tras añadir el producto."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Trematodos (Flukes) / Nematodos internos",
        vias: ["Inmersión prolongada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2,
          unidad_calculo: "mg/l"
        },
        frecuencia: { texto_ui: "Dosis única; cambio de agua al día 6", intervalo_horas: 144 },
        notas_tecnicas: "Preparar según instrucciones del fabricante para asegurar disolución."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones específicas en el uso indicado."
    ],
    efectos_adversos: [
      "Toxicidad en invertebrados no objetivo (caracoles, hidras).",
      "Baja solubilidad puede dificultar la dosificación exacta en polvos."
    ],
    monitoreo_recomendado: [
      "Calidad del agua",
      "Comportamiento de nado de los peces"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Evitar el contacto con ojos y piel.",
    sobredosis: {
      signos: ["Mortalidad en peces sensibles", "Daño tisular"],
      tratamiento: "Cambio masivo de agua inmediato."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la tubulina, bloqueando el metabolismo energético y funcional del parásito.",
    farmacocinetica: "Baja absorción sistémica; acción predominantemente local y por contacto branquial."
  },
  presentaciones_comerciales: [
    { tipo: "Polvo", concentracion_texto: "1% a 5%", valor_concentracion: 10, unidad_concentracion: "mg/g", es_divisible: false },
    { tipo: "Líquido para inmersión", concentracion_texto: "1%", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Suspensión oral (Flimabend)", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
