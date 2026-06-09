import type { Drug } from '@/lib/types';

export const pyrantelDrug: Drug = {
  id: "pyrantel",
  meta_data: {
    nombre_generico: "Pirantel",
    nombres_comerciales: ["Drontal", "Dolpac", "Anthelmin", "Cazitel", "Prazitel", "WORMclear"],
    grupo_farmacologico: "Antihelmíntico; Agonista colinérgico",
    status_regulatorio: "POM-V, NFA-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca la parálisis espástica de los nematodos mediante activación colinérgica.",
      "Eficaz contra ascáridos, ganchudos y anquilostomas.",
      "Frecuentemente combinado con febantel y oxantel para ampliar el espectro (tricuros).",
      "Seguro en la mayoría de especies, pero no recomendado en gestación por falta de estudios.",
      "50 mg de pirantel equivalen a 144 mg de embonato de pirantel."
    ],
    usos_principales: "Tratamiento de infestaciones por Toxocara, Toxascaris, Uncinaria y Ancylostoma.",
    inicio_accion: "Rápido",
    duracion_efecto: "Dosis única (repetir según ciclo del parásito)"
  },
  informacion_cliente: [
    "Medicamento para eliminar lombrices intestinales.",
    "No utilizar en cachorros menores de 2 meses o de menos de 1 kg.",
    "Informe si nota vómitos o diarrea tras la toma.",
    "Se recomienda tratar a todos los perros del hogar simultáneamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Nematodos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg (Pirantel base)"
        },
        frecuencia: { texto_ui: "Dosis única, repetir cada 2-4 semanas según riesgo", intervalo_horas: 0 },
        notas_tecnicas: "Si se usa embonato/pamoato de pirantel, la dosis es de 14.4 mg/kg."
      }
    ],
    gato: [
      {
        indicacion: "Control de Nematodos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 57.5,
          unidad_calculo: "mg/kg (Embonato de pirantel)"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Cachorros < 2 meses o < 1 kg.",
      "Hembras gestantes o lactantes (no recomendado).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Vómitos.",
      "Diarrea.",
      "Anorexia leve transitoria."
    ],
    monitoreo_recomendado: [
      "Presencia de parásitos en heces",
      "Tolerancia digestiva"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Temblores (muy raro)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Piperazina / Levamisol", efecto: "Antagonismo mutuo de mecanismos. NO USAR JUNTOS.", severidad: "Grave" },
      { farmaco: "Inhibidores de la colinesterasa", efecto: "Potenciación de la toxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista colinérgico que bloquea la transmisión neuromuscular en los parásitos, causando parálisis y eliminación por peristaltismo.",
    farmacocinetica: "Absorción oral pobre; la mayor parte actúa en el lumen intestinal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "50 mg a 175 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Suspensión oral", concentracion_texto: "5 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
