import type { Drug } from '@/lib/types';

export const piperazineDrug: Drug = {
  id: "piperazine",
  meta_data: {
    nombre_generico: "Piperazina (Citrato de piperazina)",
    nombres_comerciales: ["Biozine", "Easy Round Wormer", "Soluverm"],
    grupo_farmacologico: "Antihelmíntico (Anti-ascaridiano)",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca parálisis flácida de los gusanos adultos al bloquear la acetilcolina.",
      "Específico contra ascáridos (Ascaris spp.).",
      "No tiene actividad contra larvas, tenias ni gusanos pulmonares.",
      "Seguro para su uso en animales gestantes.",
      "Requiere repetir la dosis en 2-3 semanas para eliminar gusanos que eran larvas en la primera dosis."
    ],
    usos_principales: "Tratamiento de infecciones por ascáridos en perros, gatos, aves, mamíferos exóticos y peces.",
    inicio_accion: "Rápido (parálisis del gusano en horas)",
    duracion_efecto: "Ciclo de tratamiento puntual"
  },
  informacion_cliente: [
    "Medicamento para eliminar lombrices intestinales comunes.",
    "El animal expulsará los gusanos vivos pero paralizados; es normal.",
    "Debe repetir la dosis en 2 o 3 semanas según le indique el veterinario.",
    "Seguro para hembras preñadas.",
    "Informe si nota vómitos o temblores en su mascota."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Ascariasis (Cachorros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; repetir cada 2 semanas hasta los 3 meses", intervalo_horas: 336 }
      }
    ],
    gato: [
      {
        indicacion: "Ascariasis (Gatitos)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única; repetir cada 2 semanas", intervalo_horas: 336 }
      }
    ],
    huron: [
      {
        indicacion: "Ascariasis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir en 2 a 3 semanas", intervalo_horas: 336 }
      }
    ],
    conejo: [
      {
        indicacion: "Nematodos intestinales",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 200,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Repetir en 2 a 3 semanas", intervalo_horas: 336 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres / Cobayas (En agua)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/ml en agua de bebida"
        },
        frecuencia: { texto_ui: "7 días sí / 7 no / 7 sí", intervalo_horas: 168 }
      }
    ],
    ave: [
      {
        indicacion: "Palomas: Nematodos (Agua)",
        vias: ["PO (Agua)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.9,
          unidad_calculo: "g/l en agua de bebida"
        }
      }
    ],
    peces: [
      {
        indicacion: "Nematodos no enquistados (En alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal o hepática severa.",
      "Obstrucción intestinal masiva por gusanos."
    ],
    efectos_adversos: [
      "Vómitos y náuseas.",
      "Temblores musculares y ataxia (inusual).",
      "Diarrea."
    ],
    monitoreo_recomendado: [
      "Presencia de gusanos en heces",
      "Estado neurológico en animales debilitados"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Ataxia", "Temblores"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Pirantel", efecto: "Antagonismo mutuo de sus mecanismos de acción. NO USAR JUNTOS.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los receptores de acetilcolina en la unión neuromuscular del gusano, causando parálisis flácida e impidiendo que el parásito se mantenga en el intestino.",
    farmacocinetica: "Absorción oral parcial; el resto actúa localmente en el lumen intestinal."
  },
  presentaciones_comerciales: [
    { tipo: "Jarabe oral", concentracion_texto: "58 mg/ml", valor_concentracion: 58, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "100 mg a 500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};