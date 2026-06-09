import type { Drug } from '@/lib/types';

export const minocyclineDrug: Drug = {
  id: "minocycline",
  meta_data: {
    nombre_generico: "Minociclina",
    nombres_comerciales: ["Aknemin", "Minocin"],
    grupo_farmacologico: "Tetraciclina de 2ª generación; Antibiótico bacteriostático",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tetraciclina más liposoluble; superior penetración tisular.",
      "Excelente en próstata, SNC y secreciones bronquiales.",
      "Apta para pacientes con fallo renal (excreción independiente de la función renal).",
      "Activa contra Gram-positivos, Gram-negativos, Rickettsia y Chlamydia.",
      "En gatos, administrar con agua para evitar esofagitis."
    ],
    usos_principales: "Infecciones bacterianas, rickettsiales, mycoplasmosis y clamidiosis en animales con o sin compromiso renal.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "En gatos, dar una pequeña cantidad de agua tras la cápsula.",
    "Puede causar náuseas o vómitos al inicio.",
    "No usar en cachorros en crecimiento ni en hembras gestantes.",
    "Completar el tratamiento según lo indicado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Rickettsias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones sistémicas / Mycoplasma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gestación.",
      "Animales jóvenes (decoloración dental).",
      "Insuficiencia hepática severa."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Decoloración dental permanente en neonatos.",
      "Esofagitis en gatos (si no se administra agua)."
    ],
    monitoreo_recomendado: [
      "Función hepática",
      "Estado digestivo"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Toxicidad hepática"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticácidos / Calcio / Hierro", efecto: "Reducen drásticamente la absorción.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Reduce niveles de minociclina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis proteica al unirse a la subunidad 30S.",
    farmacocinetica: "Eliminación hepática predominante. Alta liposolubilidad."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula / Tableta", concentracion_texto: "50 mg, 100 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: false }
  ]
};
