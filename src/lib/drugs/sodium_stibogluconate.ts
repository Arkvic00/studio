import type { Drug } from '@/lib/types';

export const sodiumStibogluconateDrug: Drug = {
  id: "sodium_stibogluconate",
  meta_data: {
    nombre_generico: "Estibogluconato de Sodio",
    nombres_comerciales: ["Pentostam"],
    grupo_farmacologico: "Antileishmánico (Antimonial pentavalente)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Activo contra los estadios amastigotes de Leishmania.",
      "Utilizado para el tratamiento de la leishmaniosis canina.",
      "Los animales tratados pueden seguir siendo portadores; suele requerir seguimiento con alopurinol.",
      "Menos reportes de uso que el antimoniato de meglumina pero mecanismo similar.",
      "Requiere monitoreo renal y hepático."
    ],
    usos_principales: "Tratamiento de la leishmaniosis canina.",
    inicio_accion: "Progresivo (semanas)",
    duracion_efecto: "Requiere ciclos de 3 a 4 semanas"
  },
  informacion_cliente: [
    "Medicamento inyectable especializado para leishmaniosis.",
    "La administración por vena debe ser muy lenta (al menos 5 minutos).",
    "Informe inmediatamente si nota pérdida de apetito o vómitos.",
    "El animal necesitará análisis de sangre frecuentes para vigilar los riñones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Leishmaniosis",
        vias: ["IV lenta", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 30,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 3 a 4 semanas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Administración IV debe ser superior a 5 minutos para evitar cardiotoxicidad."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal significativa.",
      "Lactancia.",
      "Hipersensibilidad a los antimoniales."
    ],
    efectos_adversos: [
      "Dolor e inflamación local.",
      "Anorexia y vómitos.",
      "Mialgia (dolor muscular).",
      "Cardiotoxicidad (en infusión rápida)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) semanal",
      "Función hepática",
      "Carga parasitaria post-tratamiento"
    ],
    instrucciones_manejo: "Observar precauciones normales para inyectables.",
    sobredosis: {
      signos: ["Vómitos severos", "Colapso cardiovascular", "Fallo renal agudo"],
      tratamiento: "Cese inmediato y soporte intensivo."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Desconocido con precisión; probablemente interfiere con el metabolismo energético del parásito.",
    farmacocinetica: "Excreción renal rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "100 mg/ml",
      valor_concentracion: 100,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};