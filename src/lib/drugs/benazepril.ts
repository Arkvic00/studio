import type { Drug } from '@/lib/types';

export const benazeprilDrug: Drug = {
  id: "benazepril",
  meta_data: {
    nombre_generico: "Benazepril",
    nombres_comerciales: [
      "Benazecare Flavour", "Benefortin", "Cardalis", "Fortekor", 
      "Fortekor-Plus", "Kelapril", "Nelio", "Prilben", "Vetpril"
    ],
    grupo_farmacologico: "Inhibidor de la Enzima Convertidora de Angiotensina (IECA)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la conversión de angiotensina I en angiotensina II.",
      "Reduce la precarga y poscarga mediante venodilatación y arteriodilatación.",
      "Disminuye la retención de agua y sal al reducir la producción de aldosterona.",
      "La dilatación de la arteriola eferente renal reduce la presión intraglomerular, ayudando a disminuir la proteinuria.",
      "Se metaboliza significativamente en el hígado, por lo que puede no requerir ajuste de dosis en falla renal."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva (perros y gatos), manejo de la hipertensión sistémica y reducción de la proteinuria asociada a enfermedad renal crónica.",
    inicio_accion: "Rápido (efecto hemodinámico en 1-2 horas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Monitorear regularmente la presión arterial y realizar análisis de sangre (riñón y electrolitos).",
    "Informe si nota debilidad extrema, desorientación o falta de apetito.",
    "El tratamiento suele ser a largo plazo o de por vida en problemas cardíacos o renales.",
    "No usar en hembras destinadas a la cría, gestantes o lactantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insuficiencia cardíaca congestiva",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "A menudo se usa junto con diuréticos (furosemida) y pimobendan."
      },
      {
        indicacion: "Hipertensión / Proteinuria (Adyuvante)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Insuficiencia renal crónica (Proteinuria)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Insuficiencia cardíaca congestiva (Adyuvante)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    huron: [
      {
        indicacion: "Insuficiencia cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    conejo: [
      {
        indicacion: "Enfermedad cardíaca / Renal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Iniciar con la dosis mínima. El benazepril puede asociarse con un aumento de la azotemia en conejos; monitorear de cerca."
      }
    ],
    cobaya: [
      {
        indicacion: "Insuficiencia cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.075,
          dosis_min: 0.05,
          dosis_max: 0.1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Nefropatía con pérdida de proteínas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
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
        indicacion: "Falla cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Falla del gasto cardíaco (shock cardiogénico).",
      "Hipotensión sistémica.",
      "Estenosis aórtica o pulmonar hemodinámicamente significativa.",
      "Animales deshidratados o hipovolémicos."
    ],
    contraindicaciones_especie: {
      "Gato": "La seguridad no se ha establecido en gatos con un peso menor a 2.5 kg.",
      "Conejo": "Las indicaciones para suspender el tratamiento incluyen hipotensión, azotemia progresiva e hiperpotasemia."
    },
    efectos_adversos: [
      "Hipotensión.",
      "Hiperpotasemia.",
      "Azotemia prerrenal.",
      "Vómitos, diarrea y anorexia (raros).",
      "Letargo y debilidad."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica",
      "Creatinina y BUN séricos",
      "Electrolitos (especialmente Potasio)",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Hipotensión severa", "Debilidad", "Colapso"],
      tratamiento: "Soporte cardiovascular y fluidoterapia intensiva con solución salina isotónica."
    },
    interacciones_farmacologicas: [
      { farmaco: "Espironolactona / Suplementos de Potasio", efecto: "Aumentan el riesgo de hiperpotasemia.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumentan el riesgo de nefrotoxicidad y pueden reducir la eficacia clínica del benazepril.", severidad: "Importante" },
      { farmaco: "Diuréticos / Vasodilatadores / Beta-bloqueadores", efecto: "Riesgo aumentado de hipotensión severa si se combinan.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la enzima convertidora de angiotensina (ACE). Reduce la formación de angiotensina II y la degradación de bradicinina, resultando en vasodilatación sistémica y reducción de la secreción de aldosterona.",
    farmacocinetica: "Sufre un metabolismo hepático significativo a benazeprilato (el metabolito activo). Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "2.5 mg, 5 mg, 20 mg", valor_concentracion: 2.5, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Combinación (Cardalis)", concentracion_texto: "Benazepril + Espironolactona", valor_concentracion: 0, unidad_concentracion: "Variable", es_divisible: false },
    { tipo: "Combinación (Fortekor-Plus)", concentracion_texto: "Benazepril + Pimobendan", valor_concentracion: 0, unidad_concentracion: "Variable", es_divisible: false }
  ]
};