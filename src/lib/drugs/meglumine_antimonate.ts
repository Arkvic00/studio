import type { Drug } from '@/lib/types';

export const meglumineAntimonateDrug: Drug = {
  id: "meglumine_antimonate",
  meta_data: {
    nombre_generico: "Antimoniato de Meglumina",
    nombres_comerciales: ["Glucantime"],
    grupo_farmacologico: "Antiprotozoario (Antimonial pentavalente)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interfiere con el metabolismo de la glucosa del parásito Leishmania.",
      "Tratamiento estándar para la leishmaniosis canina.",
      "La cura parasitológica completa es extremadamente difícil; el objetivo es la remisión clínica.",
      "Casi siempre se utiliza en combinación con Alopurinol.",
      "Requiere monitoreo estricto de la función renal y hepática."
    ],
    usos_principales: "Tratamiento de la leishmaniosis canina.",
    inicio_accion: "Rápido (mejoría clínica en semanas)",
    duracion_efecto: "Ciclos mínimos de 28 días"
  },
  informacion_cliente: [
    "Se administra mediante inyecciones debajo de la piel.",
    "La inyección puede ser dolorosa; alterne los sitios de aplicación.",
    "El tratamiento no elimina el virus por completo, pero ayuda a que el perro no tenga síntomas.",
    "Se requieren análisis de sangre frecuentes para vigilar los riñones y el hígado.",
    "Informe inmediatamente si nota que su perro deja de comer o vomita repetidamente."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Leishmaniosis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 87.5,
          dosis_min: 75,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por al menos 28 días",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis alternativa: 40-75 mg/kg cada 12 horas. Continuar hasta remisión clínica."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa.",
      "Insuficiencia hepática severa.",
      "Enfermedad cardíaca significativa."
    ],
    efectos_adversos: [
      "Dolor e inflamación en el sitio de inyección.",
      "Nefrotoxicidad (daño renal).",
      "Vómitos y anorexia.",
      "Arritmias cardíacas (prolongación del intervalo QT)."
    ],
    monitoreo_recomendado: [
      "Creatinina y Urea séricas semanalmente",
      "Proteínas totales y albúmina",
      "Estado de hidratación",
      "ECG en animales con riesgo cardíaco"
    ],
    instrucciones_manejo: "Rotar puntos de inyección para minimizar el dolor local.",
    sobredosis: {
      signos: ["Fallo renal agudo", "Vómitos severos", "Colapso"],
      tratamiento: "Cese inmediato y fluidoterapia intensiva de soporte renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos que prolongan el QT", efecto: "Aumento del riesgo de arritmias cardíacas fatales.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe las enzimas de la glicólisis y la oxidación de ácidos grasos en el amastigote de Leishmania.",
    farmacocinetica: "Excreción renal rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "300 mg/ml (1.5 g en 5 ml)",
      valor_concentracion: 300,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
