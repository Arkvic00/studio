import type { Drug } from '@/lib/types';

export const lamivudineDrug: Drug = {
  id: "lamivudine",
  meta_data: {
    nombre_generico: "Lamivudina (3TC)",
    nombres_comerciales: ["Epivir", "Zeffix"],
    grupo_farmacologico: "Antiviral (Inhibidor de la transcriptasa inversa)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Análogo de nucleósido que inhibe la replicación de retrovirus.",
      "Uso específico en gatos positivos a virus de inmunodeficiencia felina (FIV).",
      "Puede retrasar la progresión a la fase clínica en gatos asintomáticos.",
      "Combinada con zidovudina (AZT) parece ser más efectiva para reducir la carga viral.",
      "Requiere monitoreo hematológico estricto."
    ],
    usos_principales: "Tratamiento adyuvante de la infección por FIV en gatos.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración q12h"
  },
  informacion_cliente: [
    "Medicamento para ayudar a controlar el virus del SIDA felino.",
    "Se requieren análisis de sangre frecuentes para vigilar la anemia y las defensas.",
    "Informe si nota palidez en las encías o falta de apetito.",
    "Siga estrictamente el horario de administración."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Infección por FIV",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Anemia severa preexistente.",
      "Supresión de la médula ósea."
    ],
    efectos_adversos: [
      "Anemia (común con el uso prolongado).",
      "Leucopenia (bajada de glóbulos blancos).",
      "Malestar gastrointestinal ocasional."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) cada 2-4 semanas inicialmente",
      "Carga viral si es posible",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Mielosupresión profunda", "Vómitos"],
      tratamiento: "Soporte sintomático y suspensión temporal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Zidovudina (AZT)", efecto: "Sinergia positiva contra retrovirus.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la transcriptasa inversa que impide la síntesis de ADN viral.",
    farmacocinetica: "Absorción oral rápida en gatos."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
