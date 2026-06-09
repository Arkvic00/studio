import type { Drug } from '@/lib/types';

export const acetazolamidaDrug: Drug = {
  id: "acetazolamida",
  meta_data: {
    nombre_generico: "Acetazolamida",
    nombres_comerciales: ["Diamox", "Diamox SR"],
    grupo_farmacologico: "Inhibidor de la anhidrasa carbónica sistémico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la anhidrasa carbónica que alcaliniza la orina.",
      "Uso principal: síndrome de caída episódica en CKCS.",
      "Tratamiento de elección para enfermedad de la burbuja de gas en caballitos de mar.",
      "Ya no se usa para glaucoma canino."
    ],
    usos_principales: "Discinesias paroxísticas (CKCS) y enfermedad de la burbuja de gas (peces).",
    inicio_accion: "1-2 horas",
    duracion_efecto: "8-12 horas"
  },
  informacion_cliente: [
    "Vigilar debilidad extrema o cambios en la respiración.",
    "En inmersión para peces, usar filtros de calcetín de 100 micras."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Cavalier King Charles Spaniel (CKCS): Síndrome de Caída Episódica",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, dosis_min: 4, dosis_max: 8, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8-12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Si no hay respuesta en 2 semanas, suspender."
      }
    ],
    peces: [
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas (Inmersión)",
        vias: ["Inmersión"],
        math: { tipo_calculo: "fija", dosis_recomendada: 6, unidad_calculo: "mg/l" },
        frecuencia: { texto_ui: "Cambio diario por 4-8 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas (Inyectable)",
        vias: ["IM", "Intracelómica"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 3.75, dosis_min: 2.5, dosis_max: 5.0, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 3-7 días (Máx 3 dosis)", intervalo_horas: 72 }
      },
      {
        indicacion: "Otras especies de peces: Burbuja de gas ocular",
        vias: ["Inyección peribulbar"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 6, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros anoréxicos.",
      "Disfunción hepática o renal.",
      "Hipersensibilidad a sulfonamidas.",
      "Gatos: Altamente susceptibles a efectos adversos; EVITAR."
    ],
    efectos_adversos: [
      "Debilidad, acidosis metabólica, hipopotasemia.",
      "En peces: Alteración de la flotabilidad y mortalidad en dosis altas."
    ],
    monitoreo_recomendado: [
      "Electrolitos (Potasio)",
      "Estado ácido-base",
      "Flotabilidad en peces"
    ],
    instrucciones_manejo: "Precauciones estándar de laboratorio.",
    sobredosis: {
      signos: ["Signos neurológicos", "Desequilibrio electrolítico severo"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Exacerban la pérdida de potasio.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor sistémico de la anhidrasa carbónica.",
    farmacocinetica: "Alcaliniza la orina, alterando la excreción de ácidos y bases débiles."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable (Polvo)", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: true }
  ]
};