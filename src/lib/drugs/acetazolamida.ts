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
      "Inhibidor de la anhidrasa carbónica sistémico.",
      "Uso principal en perros: manejo del síndrome de caída episódica en Cavalier King Charles Spaniel.",
      "Uso principal en peces: tratamiento de la enfermedad de la burbuja de gas.",
      "Ya no se utiliza para el tratamiento del glaucoma canino."
    ],
    usos_principales: "Síndrome de caída episódica (CKCS), discinesias paroxísticas y enfermedad de la burbuja de gas en peces/caballitos de mar.",
    inicio_accion: "No especificado",
    duracion_efecto: "No especificado"
  },
  informacion_cliente: [
    "Vigilar debilidad extrema o problemas digestivos.",
    "En el caso de perros con síndrome de caída episódica, si no hay respuesta favorable tras 2 semanas de tratamiento, el fármaco debe suspenderse."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Cavalier King Charles Spaniel: Síndrome de Caída Episódica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Indicado en episodios frecuentes refractarios a otros tratamientos (clonazepam/diazepam). Detener si no hay respuesta en 2 semanas."
      }
    ],
    peces: [
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 6,
          unidad_calculo: "mg/l"
        },
        frecuencia: {
          texto_ui: "Cambio diario por 4-8 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Se recomienda el uso de filtros de calcetín de 100 micras (o menores) para eliminar compuestos de las tabletas trituradas."
      },
      {
        indicacion: "Caballitos de mar (Seahorses): Enf. Burbuja de Gas (Inyectable)",
        vias: ["IM", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 3-7 días (Máx. 3 dosis)",
          intervalo_horas: 72
        }
      },
      {
        indicacion: "Otras especies de peces: Burbujas de gas oculares",
        vias: ["Inyección peribulbar"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Tratamiento para burbujas de gas intraoculares y retrobulbares causadas por supersaturación del agua."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros anoréxicos.",
      "Disfunción hepática o renal.",
      "Hipersensibilidad a las sulfonamidas."
    ],
    contraindicaciones_especie: {
      "Gato": "ALTAMENTE SUSCEPTIBLES a los efectos adversos. EVITAR SU USO en esta especie."
    },
    efectos_adversos: [
      "Debilidad y alteraciones gastrointestinales (anorexia, vómito, diarrea).",
      "Jadeo y acidosis metabólica.",
      "Diuresis y alteraciones electrolíticas (especialmente pérdida de potasio).",
      "En peces: puede interferir con la flotabilidad normal (vejiga natatoria) y causar signos neurológicos o mortalidad en dosis altas."
    ],
    monitoreo_recomendado: [
      "Niveles de potasio (electrolitos)",
      "Estado ácido-base",
      "Flotabilidad (en peces)"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Mortalidad", "Signos neurológicos (en peces)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides", efecto: "Pueden exacerbar la depleción de potasio, causando hipopotasemia.", severidad: "Importante" },
      { farmaco: "Ácidos/Bases débiles", efecto: "Alcaliniza la orina; puede disminuir la excreción de bases débiles y aumentar la de ácidos débiles.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor sistémico de la anhidrasa carbónica.",
    farmacocinetica: "No especificada en el texto original."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "500 mg (vial para reconstitución)",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Tableta oral / Cápsula",
      concentracion_texto: "250 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
