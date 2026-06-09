import type { Drug } from '@/lib/types';

export const ciclosporinDrug: Drug = {
  id: "ciclosporin",
  meta_data: {
    nombre_generico: "Ciclosporina (Ciclosporina A)",
    nombres_comerciales: ["Atopica", "Atopica Cat", "Cyclavance", "Modulis", "Optimmune", "Sporimmune"],
    grupo_farmacologico: "Inhibidor de linfocitos T; Inmunosupresor",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de la calcineurina que bloquea la activación de linfocitos T.",
      "Uso sistémico para dermatitis atópica y enfermedades inmunomediadas.",
      "Uso oftálmico para queratoconjuntivitis seca (KCS) y pannus.",
      "La biodisponibilidad oral es variable; administrar preferiblemente con el estómago vacío (o según producto).",
      "No es nefrotóxico en perros como en humanos, pero requiere monitoreo en pacientes renales.",
      "Puede reducir los niveles de insulina y aumentar la glucosa."
    ],
    usos_principales: "Dermatitis atópica, fístula perianal, adenitis sebácea, KCS inmunomediada, aplasia de glóbulos rojos (hurones) y bornavirus (aves).",
    inicio_accion: "Variable (2-4 semanas para efectos dermatológicos/oftálmicos)",
    duracion_efecto: "Requiere administración diaria o según protocolo de mantenimiento"
  },
  informacion_cliente: [
    "Utilizar guantes para administrar o aplicar el medicamento para evitar la absorción por su propia piel.",
    "El vómito y la diarrea son comunes al inicio del tratamiento pero suelen desaparecer solos.",
    "No vacunar con vacunas vivas durante el tratamiento ni en las 2 semanas previas/posteriores.",
    "Informe si nota crecimiento excesivo de las encías o cambios en el pelaje.",
    "En gatos, se recomienda test previo de Toxoplasma, FeLV y FIV."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Dermatitis Atópica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta control, luego reducir frecuencia", intervalo_horas: 24 }
      },
      {
        indicacion: "Fístula perianal / Adenitis sebácea",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Enfermedades inmunomediadas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Oftálmico (KCS / Pannus)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          unidad_calculo: "cm de ungüento"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Dermatitis Atópica felina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas hasta control", intervalo_horas: 24 }
      },
      {
        indicacion: "Enfermedades inmunomediadas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          dosis_min: 3,
          dosis_max: 7,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Miositis diseminada / Aplasia de glóbulos rojos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Adenitis sebácea idiopática",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Inmunosupresión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Bornavirus (Ninfas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/animal"
        },
        notas_tecnicas: "Para detener el desarrollo de bornavirus aviar."
      },
      {
        indicacion: "Antiinflamatorio (Loros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 30,
          dosis_max: 60,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "ALERTA: En halcones Harris, esta dosis es TÓXICA. Se sugiere 5 mg/kg para mantener niveles plasmáticos seguros."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Desórdenes malignos progresivos (neoplasias).",
      "Uso de vacunas vivas durante el tratamiento.",
      "Infecciones bacterianas o fúngicas no tratadas.",
      "Gatos infectados con FeLV o FIV (no recomendado)."
    ],
    contraindicaciones_especie: {
      "Perro": "No usar en animales < 6 meses o < 2 kg de peso corporal.",
      "Gato": "No usar en animales < 6 meses o < 2.3 kg. Riesgo de toxoplasmosis clínica en gatos seronegativos.",
      "Ave": "ALERTA: Toxicidad reportada en Halcón de Harris a dosis estándar de loros."
    },
    efectos_adversos: [
      "Vómitos y diarrea transitorios (muy comunes).",
      "Hiperplasia gingival leve a moderada.",
      "Hipertrichosis (crecimiento excesivo de pelo).",
      "Lesiones cutáneas papilomatosas.",
      "Debilidad y calambres musculares.",
      "Aumento del riesgo de infecciones oportunistas.",
      "Gatos: Riesgo de toxoplasmosis fatal si se infectan durante el tratamiento."
    ],
    monitoreo_recomendado: [
      "Creatinina y función renal regularmente",
      "Niveles de glucosa en sangre (especialmente en diabéticos)",
      "Signos de infecciones oportunistas",
      "Niveles séricos (farmacodinámica) en casos no responsivos"
    ],
    instrucciones_manejo: "Usar guantes para prevenir absorción cutánea. Almacenar cápsulas en el blister hasta su uso.",
    sobredosis: {
      signos: ["Trastornos GI severos", "Supresión inmunológica profunda"],
      tratamiento: "Soporte sintomático; no existe antídoto específico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antifúngicos imidazoles (Itraconazol/Ketoconazol)", efecto: "Aumentan hasta 5 veces los niveles de ciclosporina al inhibir el P450.", severidad: "Grave" },
      { farmaco: "Diltiazem / Doxiciclina / Eritromicina", efecto: "Aumentan los niveles séricos de ciclosporina.", severidad: "Importante" },
      { farmaco: "IECAs (Enalapril/Benazepril)", efecto: "Riesgo aumentado de hiperpotasemia.", severidad: "Importante" },
      { farmaco: "Ivermectina / Milbemicina", efecto: "La ciclosporina inhibe la P-glicoproteína, aumentando el riesgo de neurotoxicidad de estas lactonas.", severidad: "Importante" },
      { farmaco: "AINEs / Aminoglucósidos / Quinolonas", efecto: "Riesgo aumentado de nefrotoxicidad.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la calcineurina que impide la transcripción de citoquinas (especialmente IL-2) en linfocitos T activados.",
    farmacocinetica: "Metabolismo hepático por el sistema citocromo P450 (CYP3A). Sustrato e inhibidor de la P-glicoproteína (MDR-1)."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas", concentracion_texto: "10 mg, 25 mg, 50 mg, 100 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Solución oral", concentracion_texto: "100 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Ungüento oftálmico", concentracion_texto: "0.2% (Optimmune)", valor_concentracion: 2, unidad_concentracion: "mg/g", es_divisible: false }
  ]
};
