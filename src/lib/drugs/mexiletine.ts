import type { Drug } from '@/lib/types';

export const mexiletineDrug: Drug = {
  id: "mexiletine",
  meta_data: {
    nombre_generico: "Mexiletina",
    nombres_comerciales: ["Mexitil", "Ritalmex"],
    grupo_farmacologico: "Antiarrítmico Clase 1b",
    status_regulatorio: "POM. Requiere licencia de importación especial en algunas regiones."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiarrítmico oral con mecanismo similar a la lidocaína.",
      "Bloquea los canales rápidos de sodio en el miocardio.",
      "Mantenimiento ideal tras una respuesta positiva a la lidocaína intravenosa.",
      "No previene la muerte súbita pero controla la frecuencia de las arritmias.",
      "Administrar siempre con comida para mitigar náuseas y vómitos."
    ],
    usos_principales: "Control de arritmias ventriculares rápidas o hemodinámicamente significativas y taquicardias supraventriculares con vías accesorias.",
    inicio_accion: "Rápido (pico en 1-3 horas)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Administrar el medicamento siempre junto con el alimento.",
    "Informe inmediatamente si nota vómitos, temblores o si su mascota parece muy deprimida.",
    "Se requieren controles frecuentes del ritmo cardíaco (ECG).",
    "No es adecuado para animales con problemas graves de hígado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias Ventriculares",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas con comida",
          intervalo_horas: 12
        },
        notas_tecnicas: "Puede combinarse con sotalol o atenolol para mejorar la respuesta en casos refractarios."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bloqueo AV de 2do o 3er grado sin marcapasos.",
      "Insuficiencia cardíaca congestiva severa.",
      "Disfunción del nodo sinusal.",
      "Fallo hepático severo."
    ],
    efectos_adversos: [
      "Náuseas, anorexia y vómitos (muy comunes).",
      "Depresión y letargo.",
      "Convulsiones y temblores.",
      "Bradicardia e hipotensión.",
      "Ictericia y hepatitis (raro)."
    ],
    monitoreo_recomendado: [
      "ECG periódico (monitoreo de arritmias)",
      "Función hepática (enzimas)",
      "Presión arterial"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias fatales", "Vómitos severos"],
      tratamiento: "Soporte sintomático intensivo; diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina", efecto: "Reduce la eliminación de mexiletina, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Opiáceos / Atropina", efecto: "Retrasan la absorción de la mexiletina.", severidad: "Moderada" },
      { farmaco: "Acidificantes urinarios (Metionina)", efecto: "Aumentan la excreción renal de mexiletina.", severidad: "Leve" },
      { farmaco: "Hipopotasemia", efecto: "Antagoniza la acción de la mexiletina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la corriente de sodio hacia el interior de la célula (canal rápido), reduciendo la automaticidad y la velocidad de despolarización.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción renal dependiente del pH urinario."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula / Tableta oral",
      concentracion_texto: "50 mg, 100 mg, 200 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
