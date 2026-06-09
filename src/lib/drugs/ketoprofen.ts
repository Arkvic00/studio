import type { Drug } from '@/lib/types';

export const ketoprofenDrug: Drug = {
  id: "ketoprofen",
  meta_data: {
    nombre_generico: "Ketoprofeno",
    nombres_comerciales: ["Ketofen"],
    grupo_farmacologico: "AINE (Inhibidor no selectivo de COX-1)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la COX-1 y la lipoxigenasa, bloqueando prostaglandinas y leucotrienos.",
      "Potente efecto antiinflamatorio, analgésico y antipirético.",
      "No es selectivo de COX-2; riesgo GI superior a los 'coxibs'.",
      "No está autorizado para administración preoperatoria (riesgo renal durante hipotensión).",
      "En aves, su uso es muy común pero **ESTÁ PROHIBIDO EN BUITRES** por toxicidad renal letal.",
      "Reduce la concentración anestésica mínima en peces (Goldfish)."
    ],
    usos_principales: "Alivio del dolor agudo musculoesquelético, manejo de la inflamación crónica (osteoartritis) y control de la fiebre.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "No usar junto con otros antiinflamatorios o corticoides.",
    "Asegúrese de que el animal esté bien hidratado durante el tratamiento.",
    "No usar en animales menores de 6 semanas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor agudo / Inflamación (Parenteral)",
        vias: ["SC", "IM", "IV"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por máximo 3 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Osteoartritis crónica (Oral)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 0.25, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por hasta 30 días", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Dolor agudo (Parenteral)",
        vias: ["SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por máximo 3 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Dolor agudo (Oral)",
        vias: ["PO"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 1, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas por máximo 5 días", intervalo_horas: 24 }
      }
    ],
    huron: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["PO", "SC", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 3, dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 3, dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas / Hámsteres / Jerbos: Dolor",
        vias: ["PO", "IM", "SC"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 5, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Analgesia / Inflamación (No buitres)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 1, dosis_max: 5, dosis_recomendada: 3, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "¡PROHIBIDO EN BUITRES!: Mortalidad por fallo renal agudo."
      }
    ],
    reptil: [
      {
        indicacion: "Iguanas / Dragones Barbudos",
        vias: ["IV", "IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 2, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Cada 24 horas (usar intervalos más largos según respuesta)", intervalo_horas: 24 }
      }
    ],
    peces: [
      {
        indicacion: "Inflamación (Carpas Koi)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_min: 0.5, dosis_max: 2, dosis_recomendada: 1.25, unidad_calculo: "mg/kg" },
        notas_tecnicas: "Eficacia analgésica limitada; útil para reducir daño muscular."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad gastrointestinal activa o sangrado.",
      "Trastornos de la coagulación.",
      "Insuficiencia renal o hepática severa.",
      "Animales menores de 6 semanas.",
      "Gestación."
    ],
    contraindicaciones_especie: {
      "Buitre": "¡PROHIBIDO!: Causa gota visceral y fallo renal agudo mortal.",
      "Peces": "No se ha demostrado efecto analgésico significativo en Dogfish o Koi."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hemorragia y ulceración GI.",
      "Nefrotoxicidad aguda (especialmente si hay hipotensión).",
      "Fallo cardíaco (riesgo pequeño reportado en humanos)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Función hepática en uso crónico",
      "Signos de sangrado GI"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal"],
      tratamiento: "Lavado gástrico, carbón activado y soporte intensivo gastroprotector/renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. Esperar 1-2 semanas entre cambios.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento significativo del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos de asa", efecto: "Pueden potenciar el daño renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor no selectivo de la COX-1 y COX-2. También inhibe la lipoxigenasa y tiene efectos antibradicinina.",
    farmacocinetica: "Metabolismo hepático y excreción renal. La enfermedad hepática prolonga su vida media."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml (1%)", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "5 mg, 20 mg", valor_concentracion: 5, unidad_concentracion: "mg", es_divisible: true }
  ]
};
