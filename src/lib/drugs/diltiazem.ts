import type { Drug } from '@/lib/types';

export const diltiazemDrug: Drug = {
  id: "diltiazem",
  meta_data: {
    nombre_generico: "Diltiazem",
    nombres_comerciales: ["Hypercard", "Adizem", "Angitil", "Dilcardia", "Dilzem", "Tildiem", "Viazem"],
    grupo_farmacologico: "Bloqueador de los canales de calcio (No-dihidropiridina)",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe el movimiento de iones calcio hacia las células del miocardio y músculo liso vascular.",
      "Efecto inotrópico negativo (menos marcado que verapamilo).",
      "Retrasa la conducción en el nodo atrioventricular (AV).",
      "Preferido sobre verapamilo por su perfil de seguridad en falla cardíaca.",
      "Las formulaciones de liberación prolongada (-SR, -MR) tienen farmacocinética poco estudiada en animales."
    ],
    usos_principales: "Control de taquiarritmias supraventriculares, manejo de fibrilación auricular (con digoxina) y cardiomiopatía hipertrófica felina.",
    inicio_accion: "Rápido (IV 1-2 min); Oral 1-2 horas",
    duracion_efecto: "8 a 12 horas (según formulación)"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy cansada, tiene encías pálidas o presenta vómitos.",
    "El ajuste de la dosis es fundamental; no cambie de marca de medicamento sin consultar.",
    "Se requieren controles regulares del ritmo cardíaco y la presión arterial.",
    "Reducir dosis en animales con problemas de hígado o riñón."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Taquiarritmias supraventriculares",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Usar dosis bajas en presencia de falla cardíaca. Dosis de hasta 4 mg/kg q8h reportadas en casos refractarios."
      },
      {
        indicacion: "Emergencia (Bolo IV)",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.15,
          dosis_min: 0.05,
          dosis_max: 0.25,
          unidad_calculo: "mg/kg"
        },
        notas_tecnicas: "Administrar en 1-2 minutos con monitoreo ECG constante."
      }
    ],
    gato: [
      {
        indicacion: "Cardiomiopatía Hipertrófica / Taquiarritmias",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosis estándar de 0.5-2.5 mg/kg q8h. Una tableta de 10 mg suele ser adecuada para gatos de 3-6 kg."
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.5,
          dosis_min: 1.5,
          dosis_max: 7.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Control de arritmias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bloqueo AV de 2do o 3er grado.",
      "Hipotensión marcada.",
      "Síndrome del seno enfermo.",
      "Falla cardíaca congestiva aguda o descompensada."
    ],
    efectos_adversos: [
      "Bradicardia (común en perros).",
      "Vómitos (común en gatos).",
      "Letargo y debilidad.",
      "Hipotensión.",
      "Edema periférico (raro)."
    ],
    monitoreo_recomendado: [
      "Ritmo cardíaco (ECG)",
      "Presión arterial",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "Usar con extrema precaución en pacientes con disfunción sistólica severa.",
    sobredosis: {
      signs: ["Bradicardia severa", "Bloqueo cardíaco completo", "Colapso cardiovascular"],
      tratamiento: "Atropina para bradicardia. Gluconato de calcio IV. Soporte inotrópico (Dopamina/Dobutamina)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores (Propranolol/Atenolol)", efecto: "Riesgo extremo de bradicardia y falla cardíaca (efectos aditivos). NO RECOMENDADO.", severidad: "Grave" },
      { farmaco: "Sales de Calcio / Vitamina D", efecto: "Pueden antagonizar los efectos del diltiazem.", severidad: "Importante" },
      { farmaco: "Cimetidina", efecto: "Aumenta los niveles plasmáticos de diltiazem.", severidad: "Importante" },
      { farmaco: "Teofilina / Ciclosporina", efecto: "Diltiazem aumenta sus niveles (riesgo de toxicidad).", severidad: "Moderada" },
      { farmaco: "Vincristina", efecto: "Aumenta los niveles intracelulares de vincristina.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de calcio tipo L en el miocardio y vasos, reduciendo la contractilidad, la velocidad de conducción AV y la resistencia vascular periférica.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta (Hypercard)", concentracion_texto: "10 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta (Genérica/Liberación modificada)", concentracion_texto: "60 mg", valor_concentracion: 60, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "10 mg/ml", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
