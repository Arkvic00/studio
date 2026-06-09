import type { Drug } from '@/lib/types';

export const dopamineDrug: Drug = {
  id: "dopamine",
  meta_data: {
    nombre_generico: "Dopamina",
    nombres_comerciales: ["Dopamine*"],
    grupo_farmacologico: "Catecolamina endógena; Inotrópico; Vasopresor",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Precursor de la noradrenalina con efectos dosis-dependientes.",
      "Dosis bajas (<10 μg/kg/min): Predomina efecto beta-1 (inotropía y cronotropía +).",
      "Dosis altas (>10 μg/kg/min): Predomina efecto alfa-1 (vasoconstricción periférica).",
      "Vida media muy corta; requiere administración exclusiva por infusión continua (CRI).",
      "¡VESICANTE!: La extravasación causa necrosis tisular severa."
    ],
    usos_principales: "Tratamiento del shock (tras reponer fluidos), fallo cardiaco agudo y soporte de presión arterial durante la anestesia.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Muy corta (minutos tras detener infusión)"
  },
  informacion_cliente: [
    "Fármaco de uso estrictamente hospitalario en cuidados intensivos.",
    "Requiere monitoreo constante del ritmo cardiaco y la presión arterial.",
    "Informe inmediatamente si nota que el sitio de la vía intravenosa se hincha o duele."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte Hemodinámico / Shock (CRI)",
        vias: ["IV (Infusión continua)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 2,
          dosis_max: 15,
          unidad_calculo: "μg/kg/min (microgramos)"
        },
        notas_tecnicas: "Asegurar reposición de volumen previa. Dosis >10 μg/kg/min aumentan resistencia vascular sistémica."
      }
    ],
    gato: [
      {
        indicacion: "Soporte Hemodinámico (CRI)",
        vias: ["IV (Infusión continua)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 1,
          dosis_max: 5,
          unidad_calculo: "μg/kg/min"
        }
      }
    ],
    cobaya: [
      {
        indicacion: "Soporte circulatorio",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.08,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Según sea necesario", intervalo_horas: 0 }
      }
    ],
    ave: [
      {
        indicacion: "Hipotensión transanestésica (CRI)",
        vias: ["IV", "IO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "μg/kg/min"
        },
        notas_tecnicas: "Reportada como más efectiva que la dobutamina en aves para contrarrestar hipotensión por isoflurano."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Arritmias cardiacas no controladas.",
      "Feocromocitoma.",
      "Fibrilación ventricular."
    ],
    efectos_adversos: [
      "Taquiarritmias cardiacas.",
      "Náuseas y vómitos.",
      "Necrosis por extravasación.",
      "Hipertensión o hipotensión (según dosis).",
      "Bradicardia severa refleja ante aumentos súbitos de presión."
    ],
    monitoreo_recomendado: [
      "ECG continuo (esencial)",
      "Presión arterial (idealmente invasiva)",
      "Producción de orina",
      "Sitio de cateterización"
    ],
    instrucciones_manejo: "Descartar si hay decoloración. En caso de extravasación, infiltrar el sitio con fentolamina (5-10 mg en 15 ml salino).",
    sobredosis: {
      signos: ["Arritmias fatales", "Hipertensión severa", "Vómitos"],
      tratamiento: "Cese inmediato de la infusión; el efecto desaparece en minutos."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs / Doxapram / Oxitocina", efecto: "Riesgo de hipertensión severa.", severidad: "Grave" },
      { farmaco: "Beta-bloqueadores", efecto: "Antagonismo de efectos cardiacos.", severidad: "Importante" },
      { farmaco: "Halotano", efecto: "Aumenta sensibilidad miocárdica a catecolaminas.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de receptores dopaminérgicos (DA1, DA2), beta-1 y alfa-1 adrenérgicos (directo e indirecto vía liberación de noradrenalina).",
    farmacocinetica: "Eliminación muy rápida."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "40 mg/ml", valor_concentracion: 40, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "160 mg/ml", valor_concentracion: 160, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};