import type { Drug } from '@/lib/types';

export const praziquantelDrug: Drug = {
  id: "praziquantel",
  meta_data: {
    nombre_generico: "Praziquantel",
    nombres_comerciales: ["Droncit", "Drontal", "Milbemax", "Profender"],
    grupo_farmacologico: "Cestocida",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aumenta la permeabilidad al calcio, provocando parálisis y muerte del cestodo.",
      "Eficacia del 100% contra Echinococcus spp.",
      "No mata huevos de tenia; requiere higiene ambiental.",
      "Seguro en animales gestantes y lactantes.",
      "No requiere ayuno previo."
    ],
    usos_principales: "Tratamiento de infestaciones por tenias (Dipylidium, Taenia, Echinococcus, Mesocestoides).",
    inicio_accion: "Rápido",
    duracion_efecto: "Dosis única (repetir si hay reinfección)"
  },
  informacion_cliente: [
    "Medicamento para eliminar tenias (lombrices planas).",
    "Los parásitos suelen digerirse en el intestino, por lo que no siempre se ven en las heces.",
    "Seguro para perras y gatas embarazadas.",
    "El control de pulgas es vital para evitar que la tenia vuelva.",
    "No usar en cachorros/gatitos no destetados."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infección por Tenias",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg (PO)"
        },
        notas_tecnicas: "Dosis Spot-on: 8 mg/kg."
      }
    ],
    gato: [
      {
        indicacion: "Infección por Tenias",
        vias: ["PO", "SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Cachorros o gatitos no destetados.",
      "Animales < 1 kg (Spot-on)."
    ],
    efectos_adversos: [
      "Vómitos y salivación (si lamen sitio de aplicación).",
      "Letargo transitorio.",
      "Reacción local en sitio de inyección (especialmente en gatos)."
    ],
    monitoreo_recomendado: [
      "Presencia de proglótides en heces"
    ],
    instrucciones_manejo: "Lavar manos tras uso de spot-on. No administrar vía oral en un animal no destetado.",
    sobredosis: {
      signos: ["Vómitos", "Anorexia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Induce la contracción tetánica de la musculatura del parásito al aumentar la permeabilidad de membrana al calcio.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático de primer paso significativo."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "20 mg a 175 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Spot-on", concentracion_texto: "20 mg a 96 mg por pipeta", valor_concentracion: 1, unidad_concentracion: "pipeta", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "56.8 mg/ml", valor_concentracion: 56.8, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};