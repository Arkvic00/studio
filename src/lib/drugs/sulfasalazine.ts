import type { Drug } from '@/lib/types';

export const sulfasalazineDrug: Drug = {
  id: "sulfasalazine",
  meta_data: {
    nombre_generico: "Sulfasalazina",
    nombres_comerciales: ["Salazopyrin", "Sulphasalazine*"],
    grupo_farmacologico: "Derivado de aminosalicilato; Pro-fármaco 5-ASA",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Pro-fármaco que libera 5-ASA en el colon por acción bacteriana.",
      "Proporciona efectos antiinflamatorios locales potentes en la mucosa colónica.",
      "Riesgo significativo de queratoconjuntivitis seca (KCS) irreversible.",
      "Los Dobermanns son especialmente sensibles a efectos secundarios por sulfas.",
      "No atraviesa significativamente la barrera hematoencefálica."
    ],
    usos_principales: "Tratamiento de la enfermedad inflamatoria intestinal crónica (colitis) en perros y gatos.",
    inicio_accion: "Rápido (acción local tras clivaje colónico)",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Informe inmediatamente si nota que los ojos de su mascota se ven rojos, secos o si hay secreción espesa.",
    "El veterinario realizará pruebas de lágrimas (Schirmer) regularmente.",
    "Informe si nota vómitos o erupciones en la piel.",
    "El medicamento puede teñir la orina de un color amarillento-naranja."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Colitis crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 22.5,
          dosis_min: 15,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas (máximo 6 g/día)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Uso con extrema precaución en Doberman Pinschers."
      }
    ],
    gato: [
      {
        indicacion: "Colitis crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Sensibilidad a sulfonamidas o salicilatos.",
      "KCS preexistente.",
      "Obstrucción intestinal o urinaria.",
      "Insuficiencia renal o hepática severa."
    ],
    efectos_adversos: [
      "Queratoconjuntivitis seca (KCS) irreversible.",
      "Vómitos y malestar GI.",
      "Anemia y trombocitopenia.",
      "Ictericia colestásica.",
      "Erupciones alérgicas cutáneas."
    ],
    monitoreo_recomendado: [
      "Test de Schirmer (STT) antes y durante el tratamiento (cada mes)",
      "Hemograma completo (CBC) periódico",
      "Función hepática"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Vómitos", "Anorexia", "Signos de hipersensibilidad"],
      tratamiento: "Cese del tratamiento y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Digoxina", efecto: "La sulfasalazina puede reducir su absorción oral.", severidad: "Leve" },
      { farmaco: "Folato", efecto: "La absorción de folato puede verse reducida.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "La bacteria colónica rompe el enlace diazo liberando sulfapiridina y 5-ácido aminosalicílico (5-ASA). El 5-ASA actúa localmente como antiinflamatorio.",
    farmacocinetica: "Absorción sistémica parcial de los metabolitos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "500 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Suspensión oral",
      concentracion_texto: "50 mg/ml",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
