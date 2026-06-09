import type { Drug } from '@/lib/types';

export const carvedilolDrug: Drug = {
  id: "carvedilol",
  meta_data: {
    nombre_generico: "Carvedilol",
    nombres_comerciales: ["Carvedilol*"],
    grupo_farmacologico: "Bloqueador beta-adrenérgico no selectivo y alfa-1 bloqueante",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador beta no selectivo con propiedades de reducción de poscarga (bloqueo alfa-1).",
      "Posee propiedades antioxidantes que pueden disminuir el estrés oxidativo en falla cardíaca.",
      "No debe iniciarse hasta que la insuficiencia cardíaca congestiva (ICC) esté estabilizada (mínimo 2 semanas).",
      "Requiere una titulación de dosis muy gradual.",
      "Experiencia clínica limitada en medicina veterinaria; beneficios no totalmente establecidos."
    ],
    usos_principales: "Terapia adyuvante en el manejo de la insuficiencia cardíaca crónica (enfermedad valvular o MCD) y como antihipertensivo en casos refractarios.",
    inicio_accion: "Lento; requiere estabilización previa de la ICC",
    duracion_efecto: "Requiere administración cada 12 a 24 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento repentinamente.",
    "El animal debe estar estable de su problema cardíaco antes de empezar este fármaco.",
    "Informe si nota debilidad extrema, desmayos o diarrea.",
    "Se requieren controles frecuentes de la presión arterial y el ritmo cardíaco.",
    "Administrar preferiblemente con comida para reducir efectos secundarios."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Falla Cardíaca Crónica / Hipertensión (Escalada)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis inicial. Incrementar gradualmente cada 2 semanas hasta el objetivo de 0.3-0.4 mg/kg cada 12h si se tolera. En estadios B2 de MMVD se han reportado hasta 1.1 mg/kg q12h."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Soporte cardíaco",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 16,
          dosis_min: 2,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Hámsteres: Soporte cardíaco",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 1,
          dosis_max: 11,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Soporte cardíaco / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 1,
          dosis_max: 9,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bradiarritmias.",
      "Insuficiencia cardíaca aguda o descompensada.",
      "Enfermedad bronquial (riesgo de broncoespasmo).",
      "Uso concurrente con agonistas alfa-adrenérgicos (ej. Adrenalina)."
    ],
    efectos_adversos: [
      "Letargo y debilidad.",
      "Diarrea.",
      "Bradicardia y bloqueo AV.",
      "Hipotensión y síncope.",
      "Exacerbación de la insuficiencia cardíaca si se inicia muy rápido.",
      "Reducción de la tasa de filtración glomerular (empeora fallo renal preexistente)."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Frecuencia y ritmo cardíaco (ECG)",
      "Función renal (Creatinina/BUN)",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Metabolismo hepático extenso; usar con precaución en insuficiencia hepática.",
    sobredosis: {
      signos: ["Bradicardia severa", "Hipotensión profunda", "Broncoespasmo"],
      tratamiento: "Glucagón IV, agentes inotrópicos, soporte de presión y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de calcio (Diltiazem)", efecto: "Riesgo extremo de bradicardia, hipotensión severa y bloqueos AV.", severidad: "Grave" },
      { farmaco: "Digoxina", effect: "Potencia la bradicardia.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Pueden antagonizar el efecto hipotensor.", severidad: "Moderada" },
      { farmaco: "Insulina", efecto: "Puede potenciar el efecto hipoglucemiante.", severidad: "Moderada" },
      { farmaco: "Ciclosporina", efecto: "El carvedilol aumenta sus concentraciones plasmáticas.", severidad: "Importante" },
      { farmaco: "Rifampicina", efecto: "Disminuye las concentraciones plasmáticas de carvedilol.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador beta-adrenérgico no selectivo (receptores beta-1 y beta-2) con actividad antagonista alfa-1. Reduce la resistencia vascular periférica y la carga de trabajo del miocardio.",
    farmacocinetica: "Sufre metabolismo de primer paso hepático extenso. Altamente lipofílico."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "3.125 mg, 6.25 mg, 12.5 mg, 25 mg",
      valor_concentracion: 3.125,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
