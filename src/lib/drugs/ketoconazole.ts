import type { Drug } from '@/lib/types';

export const ketoconazoleDrug: Drug = {
  id: "ketoconazole",
  meta_data: {
    nombre_generico: "Ketoconazol",
    nombres_comerciales: ["Fungiconazole"],
    grupo_farmacologico: "Antifúngico imidazólico; Inhibidor de la síntesis de cortisol",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antifúngico de amplio espectro que inhibe la síntesis de ergosterol.",
      "Potente inhibidor de la síntesis de esteroides (cortisol/testosterona) en mamíferos.",
      "Suele utilizarse en combinación con Ciclosporina para reducir la dosis necesaria de esta última (al inhibir su metabolismo).",
      "Requiere un ambiente ácido para su absorción; no administrar con antiácidos.",
      "Pobre penetración en el SNC a dosis estándar."
    ],
    usos_principales: "Tratamiento de dermatofitosis (tiñas), dermatitis por Malassezia, aspergilosis y candidiasis. Manejo médico del Hiperadrenocorticismo (Cushing) cuando el trilostano no es opción.",
    inicio_accion: "Variable",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Administrar siempre después de una comida completa.",
    "El tratamiento para hongos suele ser de muy larga duración (meses).",
    "Informe inmediatamente si nota pérdida de apetito, vómitos o si el pelaje de su mascota cambia de color.",
    "Se requieren análisis de sangre periódicos para vigilar el hígado.",
    "No usar en hembras gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Terapia Antifúngica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas con comida", intervalo_horas: 24 },
        notas_tecnicas: "Para infecciones del SNC o nasales graves: hasta 40 mg/kg/día dividido."
      },
      {
        indicacion: "Hiperadrenocorticismo (Cushing)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 7 días, luego titular", intervalo_horas: 12 },
        notas_tecnicas: "Tras 7 días, subir a 10 mg/kg q12h por 14 días. Realizar test de estimulación con ACTH para ajuste."
      }
    ],
    gato: [
        {
            indicacion: "Uso no recomendado",
            vias: ["N/A"],
            math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
            notas_tecnicas: "Los gatos son muy propensos a la hepatotoxicidad por ketoconazol. Itraconazol es la opción preferida."
        }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática.",
      "Hipersensibilidad a imidazoles.",
      "Gestación (efectos teratogénicos)."
    ],
    efectos_adversos: [
      "Hepatotoxicidad (ictericia, elevación de enzimas).",
      "Anorexia, vómitos y diarrea.",
      "Cambios en el color del pelaje (aclaramiento).",
      "Trombocitopenia (bajada de plaquetas).",
      "Insuficiencia adrenal iatrogénica.",
      "Cataratas (reportadas en perros)."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas (ALT, ALP) cada 2-4 semanas",
      "Test de ACTH en el manejo del Cushing",
      "Recuento de plaquetas"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos severos", "Apatía", "Ictericia"],
      tratamiento: "Soporte hepático y sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "El ketoconazol inhibe su metabolismo, aumentando sus niveles drásticamente.", severidad: "Grave" },
      { farmaco: "Antiácidos / IBP / Antagonistas H2", efecto: "Reducen drásticamente la absorción del ketoconazol. Espaciar 2 horas.", severidad: "Importante" },
      { farmaco: "Metilprednisolona", efecto: "Ketoconazol prolonga su actividad y efectos secundarios.", severidad: "Moderada" },
      { farmaco: "Antihistamínicos", efecto: "Posible riesgo de arritmias (en humanos).", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la enzima 14-alfa-desmetilasa fúngica mediada por P450, bloqueando la síntesis de ergosterol. En mamíferos, bloquea enzimas del citocromo P450 en la glándula adrenal.",
    farmacocinetica: "Absorción dependiente de pH ácido. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "200 mg",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
