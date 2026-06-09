import type { Drug } from '@/lib/types';

export const cinchophenDrug: Drug = {
  id: "cinchophen",
  meta_data: {
    nombre_generico: "Cincofeno (con Prednisolona)",
    nombres_comerciales: ["PLT tablets"],
    grupo_farmacologico: "Antiinflamatorio (Combinación AINE + Glucocorticoide)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente antiinflamatorio comercializado en combinación fija con prednisolona.",
      "Utilizado para el manejo del dolor por osteoartritis en perros.",
      "Alto riesgo de ulceración e irritación gastrointestinal, superior a otros AINEs.",
      "Asociado a daño hepático tras la administración oral prolongada (>6 semanas).",
      "Requiere una reducción gradual de la dosis (tapering) al finalizar el tratamiento."
    ],
    usos_principales: "Manejo del dolor y la inflamación asociados a la osteoartritis en perros.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida para proteger el estómago.",
    "Informe inmediatamente si nota vómitos, pérdida de apetito o heces negras (sangre digerida).",
    "No administrar junto con otros antiinflamatorios o corticoides adicionales.",
    "No suspenda el medicamento de forma repentina; siga el plan de reducción de dosis indicado.",
    "¡NUNCA usar en gatos!"
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg (Cincofeno)"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "La dosis de 12.5 mg/kg de cincofeno aporta simultáneamente 0.0625 mg/kg de prednisolona. Equivale a 1 tableta por cada 16 kg de peso corporal dos veces al día."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Uso concurrente con otros esteroides o AINEs.",
      "Periodo perioperatorio (riesgo renal durante anestesia).",
      "Pacientes en shock o hipotensos.",
      "Insuficiencia renal o hepática preexistente.",
      "Ulceración gastrointestinal previa."
    ],
    efectos_adversos: [
      "Ulceración e irritación gastrointestinal (muy común).",
      "Hepatotoxicidad (especialmente tras 6 semanas de uso).",
      "Vómitos, náuseas y diarrea.",
      "Riesgo de precipitar fallo cardíaco en animales con enfermedad cardiovascular."
    ],
    monitoreo_recomendado: [
      "Signos de ulceración GI (melena/vómitos)",
      "Pruebas de función hepática (ALT/ALP) periódicas",
      "Función renal (Creatinina/BUN)"
    ],
    instrucciones_manejo: "Retirar de forma gradual al finalizar el curso clínico.",
    sobredosis: {
      signos: ["Vómitos severos", "Hematemesis", "Melena", "Fallo hepático"],
      tratamiento: "Cese inmediato. Terapia de soporte gastrointestinal agresiva (protectores, fluidos) y monitoreo hepático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Glucocorticoides", efecto: "Riesgo extremo de ulceración y perforación GI.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumentan significativamente el riesgo de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El cincofeno proporciona una acción antiinflamatoria no esteroidea, potenciada por el efecto glucocorticoide de la prednisolona para el manejo del dolor articular.",
    farmacocinetica: "Absorción oral rápida en perros."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "200 mg Cincofeno + 1 mg Prednisolona",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
