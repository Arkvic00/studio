import type { Drug } from '@/lib/types';

export const torasemideDrug: Drug = {
  id: "torasemide",
  meta_data: {
    nombre_generico: "Torasemida (Torsemida)",
    nombres_comerciales: ["UpCard"],
    grupo_farmacologico: "Diurético de asa de alta potencia",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor del cotransportador Na+/K+/Cl- (20 veces más potente que la furosemida).",
      "Menor excreción de potasio y calcio que la furosemida.",
      "Posee efectos antialdosteronérgicos adicionales.",
      "Mayor biodisponibilidad y duración de acción prolongada.",
      "Ideal para casos de resistencia a diuréticos en falla cardíaca avanzada.",
      "En gatos, su uso no está autorizado y debe calcularse con extrema cautela."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva en perros (estándar o refractaria).",
    inicio_accion: "Rápido (pico en 2h en perros)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Su mascota orinará más de lo normal; no restrinja el acceso al agua.",
    "El medicamento es extremadamente potente; siga la dosis exacta del veterinario.",
    "Informe inmediatamente si nota debilidad extrema, falta de apetito o colapso.",
    "Se requieren análisis de sangre frecuentes para vigilar los riñones y el potasio.",
    "No suspenda el medicamento sin consultar, riesgo de crisis respiratoria mortal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Falla Cardíaca Congestiva (Estabilización)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.1,
          dosis_max: 0.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (puede dividirse q12h)", intervalo_horas: 24 },
        notas_tecnicas: "Titular en incrementos de 0.1 mg/kg. La mayoría se estabiliza a <= 0.3 mg/kg q24h."
      }
    ],
    gato: [
      {
        indicacion: "Sustitución de Furosemida (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "1/20 de la dosis total diaria de Furosemida"
        },
        frecuencia: { texto_ui: "Dividido en 1-2 tomas al día", intervalo_horas: 12 },
        notas_tecnicas: "Ej: Si el gato toma 20 mg/día de furosemida, la dosis de torasemida sería 1 mg/día total."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Deshidratación.",
      "Anuria.",
      "Fallo renal agudo.",
      "Hipotensión severa."
    ],
    efectos_adversos: [
      "Azotemia prerrenal (aumento de Urea/Creatinina) - muy común.",
      "Hiponatremia, hipocaliemia e hipocloremia.",
      "Poliuria y polidipsia marcada.",
      "Deshidratación rápida.",
      "Ototoxicidad potencial (reportada en humanos)."
    ],
    monitoreo_recomendado: [
      "Creatinina y BUN séricos periódicamente (crítico)",
      "Electrolitos séricos (Potasio, Sodio)",
      "Frecuencia respiratoria en reposo",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales. Tabletas de UpCard son palatables.",
    sobredosis: {
      signos: ["Deshidratación extrema", "Fallo renal", "Colapso"],
      tratamiento: "Fluidoterapia inmediata con salino isotónico; corrección electrolítica."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs / Espironolactona / Pimobendan", efecto: "Sinergia estándar en falla cardíaca; vigilar función renal.", severidad: "Leve" },
      { farmaco: "AINEs", efecto: "Aumentan drásticamente el riesgo de daño renal y reducen el efecto diurético.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento del riesgo de ototoxicidad y nefrotoxicidad.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea el cotransportador Na+/K+/2Cl- en la rama ascendente del asa de Henle. Posee un efecto antialdosteronérgico adicional.",
    farmacocinetica: "Alta biodisponibilidad y vida media más larga que la furosemida."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral (UpCard)", concentracion_texto: "0.75 mg, 3 mg, 7.5 mg", valor_concentracion: 3, unidad_concentracion: "mg", es_divisible: true }
  ]
};
