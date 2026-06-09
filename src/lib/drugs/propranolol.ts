import type { Drug } from '@/lib/types';

export const propranololDrug: Drug = {
  id: "propranolol",
  meta_data: {
    nombre_generico: "Propranolol",
    nombres_comerciales: ["Syprol", "Propranolol*"],
    grupo_farmacologico: "Beta-bloqueante no selectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea receptores beta-1 (corazón) y beta-2 (vasos/bronquios).",
      "Reduce la frecuencia cardíaca y la demanda de oxígeno del miocardio.",
      "Provoca bronconstricción y vasoconstricción periférica.",
      "Baja biodisponibilidad oral por alto primer paso hepático.",
      "Requiere una retirada gradual (tapering)."
    ],
    usos_principales: "Tratamiento de taquiarritmias supraventriculares, cardiomiopatía hipertrófica, control de hipertiroidismo y ansiedad situacional.",
    inicio_accion: "Rápido (IV); Horas (PO)",
    duracion_efecto: "8 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina.",
    "Informe si nota que su mascota respira con dificultad o tiene tos.",
    "Puede causar que el animal esté más cansado de lo normal.",
    "Se requieren controles frecuentes de la presión y el ritmo cardíaco."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias / Cardiología",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.8,
          dosis_min: 0.1,
          dosis_max: 1.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      },
      {
        indicacion: "Ansiedad / Miedos (con Fenobarbital)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          dosis_min: 2,
          dosis_max: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Arritmias agudas",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          dosis_min: 0.02,
          dosis_max: 0.08,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    gato: [
      {
        indicacion: "Taquicardia / Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bradicardia severa.",
      "Asma o enfermedad bronquial.",
      "Fallo cardíaco agudo o descompensado.",
      "Uso conjunto con adrenalina."
    ],
    efectos_adversos: [
      "Bradicardia y bloqueos de conducción.",
      "Hipotensión.",
      "Broncoespasmo marcado.",
      "Letargo y depresión.",
      "Hipoglucemia."
    ],
    monitoreo_recomendado: [
      "Frecuencia y ritmo cardíaco (ECG)",
      "Presión arterial",
      "Estado respiratorio"
    ],
    instrucciones_manejo: "Retirar de forma gradual en 1-2 semanas. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Bradicardia extrema", "Colapso cardiovascular", "Apnea"],
      tratamiento: "Atropina para bradicardia. Glucagón IV para soporte cardiaco. Agonistas beta (Dopamina)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Bloqueadores de canales de calcio (Diltiazem)", efecto: "Riesgo extremo de fallo cardíaco y bloqueos AV.", severidad: "Grave" },
      { farmaco: "Digoxina", efecto: "Potenciación de la bradicardia.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Puede potenciar la hipoglucemia y enmascarar sus signos.", severidad: "Moderada" },
      { farmaco: "Fenobarbital", efecto: "Altera el metabolismo del propranolol; requiere monitoreo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Antagonista competitivo no selectivo de receptores beta-adrenérgicos.",
    farmacocinetica: "Metabolismo hepático extenso. Alta unión a proteínas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg a 160 mg", valor_concentracion: 40, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "1 mg/ml a 10 mg/ml", valor_concentracion: 5, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "1 mg/ml", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};