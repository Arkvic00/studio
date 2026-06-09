import type { Drug } from '@/lib/types';

export const grapiprantDrug: Drug = {
  id: "grapiprant",
  meta_data: {
    nombre_generico: "Grapiprant",
    nombres_comerciales: ["Galliprant"],
    grupo_farmacologico: "AINE (Antagonista del receptor EP4)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista selectivo del receptor EP4 de la prostaglandina E2 (PGE2).",
      "Específicamente diseñado para el dolor y la inflamación de la osteoartritis.",
      "A diferencia de los AINEs clásicos, no inhibe las enzimas COX-1 o COX-2.",
      "Menor impacto potencial en la mucosa GI y función renal, aunque se recomienda precaución.",
      "Uso exclusivo en perros mayores de 9 meses."
    ],
    usos_principales: "Manejo del dolor leve a moderado causado por la osteoartritis en perros.",
    inicio_accion: "Rápido (pico plasmático en 1-2 horas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar una vez al día, preferiblemente a la misma hora.",
    "Lavar las manos tras manipular el producto.",
    "Informe si nota vómitos, heces blandas o pérdida de apetito (suelen ser leves).",
    "No administrar junto con otros antiinflamatorios (aspirina, meloxicam) o corticoides.",
    "No utilizar en perros que pesen menos de 3.6 kg."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis (Dolor e Inflamación)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Solo para perros > 9 meses y > 3.6 kg de peso corporal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros menores de 9 meses de edad.",
      "Perros con un peso inferior a 3.6 kg.",
      "Hipersensibilidad al grapiprant."
    ],
    efectos_adversos: [
      "Vómitos y diarrea (generalmente transitorios).",
      "Inapetencia.",
      "Heces blandas.",
      "Reducción leve de albúmina y proteínas totales (clínicamente no significativo)."
    ],
    monitoreo_recomendado: [
      "Función hepática y renal en tratamientos prolongados",
      "Niveles de proteínas plasmáticas"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Diarrea hemorrágica (muy raro)"],
      tratamiento: "Soporte sintomático y protectores gástricos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Evitar el uso conjunto; no se ha estudiado su seguridad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista específico del receptor EP4, uno de los receptores de la PGE2 que media la sensibilización al dolor y la inflamación.",
    farmacocinetica: "Absorción oral rápida. Alta unión a proteínas. Excreción biliar y fecal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg, 60 mg, 100 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true }
  ]
};
