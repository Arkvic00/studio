import type { Drug } from '@/lib/types';

export const tolfenamicAcidDrug: Drug = {
  id: "tolfenamic_acid",
  meta_data: {
    nombre_generico: "Ácido Tolfenámico",
    nombres_comerciales: ["Tolfedine"],
    grupo_farmacologico: "AINE (Derivado del ácido antranílico)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la ciclooxigenasa (COX) y tiene acción antagonista directa sobre receptores de prostaglandinas.",
      "Potente efecto antiinflamatorio, analgésico y antipirético.",
      "Autorizado para uso preoperatorio en perros y gatos.",
      "Vida media más larga en gatos (mayor riesgo de toxicidad por acumulación).",
      "La enfermedad hepática prolonga su metabolismo."
    ],
    usos_principales: "Alivio del dolor y la inflamación (aguda y crónica) y manejo de la fiebre.",
    inicio_accion: "Rápido",
    duracion_efecto: "24 a 48 horas"
  },
  informacion_cliente: [
    "Administrar con comida.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "No usar junto con otros antiinflamatorios o corticoides.",
    "No usar en animales menores de 6 semanas.",
    "En gatos, no exceder la dosis recomendada."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["IM", "SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 3 días", intervalo_horas: 24 },
        notas_tecnicas: "El curso oral puede repetirse semanalmente (4 días de tratamiento, 3 de descanso)."
      }
    ],
    gato: [
      {
        indicacion: "Dolor e Inflamación",
        vias: ["SC", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Una dosis, repetir a las 24h si es necesario", intervalo_horas: 24 },
        notas_tecnicas: "¡PROHIBIDA la vía IM en gatos! No se recomienda repetir el curso semanalmente en esta especie."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad GI activa o sangrado.",
      "Trastornos de la coagulación.",
      "Gatos: vía intramuscular.",
      "Animales < 6 semanas.",
      "Gestación."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hemorragia gastrointestinal.",
      "Nefrotoxicidad (riesgo perioperatorio si hay hipotensión).",
      "Letargo."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Función hepática",
      "Signos de sangrado GI"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Usar jeringas graduadas de 1ml para gatos.",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal"],
      tratamiento: "Lavado gástrico, carbón activado y soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. Esperar 24h entre cambios.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento del riesgo de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la COX y antagonista de prostaglandinas.",
    farmacocinetica: "Metabolismo hepático y excreción biliar/renal."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "40 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "6 mg, 20 mg, 60 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: true }
  ]
};
