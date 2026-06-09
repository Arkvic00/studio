import type { Drug } from '@/lib/types';

export const lomustineDrug: Drug = {
  id: "lomustine",
  meta_data: {
    nombre_generico: "Lomustina (CCNU)",
    nombres_comerciales: ["Lomustine", "CeeNU"],
    grupo_farmacologico: "Agente alquilante (Nitrosourea); Antineoplásico",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente alquilante altamente liposoluble con excelente penetración en el SNC.",
      "Forma enlaces cruzados en las hebras de ADN impidiendo la división celular.",
      "Uso principal en tumores cerebrales, mastocitomas y linfomas refractarios.",
      "Mielosupresión severa (neutropenia) es el efecto limitante de la dosis.",
      "Hepatotoxicidad acumulativa y potencialmente irreversible en perros.",
      "Se recomienda suplementar con S-adenosilmetionina (SAMe) y silibina."
    ],
    usos_principales: "Tratamiento de tumores cerebrales, mastocitomas, linfoma cutáneo, sarcoma histiocítico y protocolos de rescate oncológico.",
    inicio_accion: "Interferencia inmediata con ADN",
    duracion_efecto: "Requiere administración cada 3-6 semanas"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "Las cápsulas no deben abrirse; deben tragarse enteras.",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos (defensas).",
    "Evitar el contacto con las excretas del animal por 48 horas post-tratamiento.",
    "Informe inmediatamente si nota fiebre, ictericia (ojos amarillos) o moretones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Protocolos oncológicos (Tumores cerebrales / MCT / Linfoma)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 70,
          dosis_min: 60,
          dosis_max: 80,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 a 4 semanas",
          intervalo_horas: 504
        },
        notas_tecnicas: "Monitorear nadir de neutrófilos a los 7-14 días. Suspender si hay elevación de enzimas hepáticas."
      }
    ],
    gato: [
      {
        indicacion: "Linfoma / Otros",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 45,
          dosis_min: 30,
          dosis_max: 60,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 6 semanas",
          intervalo_horas: 672
        },
        notas_tecnicas: "La mielosupresión en gatos puede ser muy retrasada (hasta 6 semanas)."
      }
    ],
    huron: [
      {
        indicacion: "Linfoma (Extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 50,
          dosis_min: 40,
          dosis_max: 60,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 3 a 6 semanas",
          intervalo_horas: 504
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Enfermedad hepática preexistente.",
      "Infección activa."
    ],
    efectos_adversos: [
      "Mielosupresión (se manifiesta de 7 a 14 días post-dosis).",
      "Hepatotoxicidad crónica e irreversible (perros).",
      "Gastrotoxicidad (vómitos, diarrea).",
      "Estomatitis.",
      "Pérdida de pelo."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) a los 7 y 14 días post-dosis",
      "Perfil bioquímico hepático antes de cada ciclo",
      "Función renal"
    ],
    instrucciones_manejo: "CITOTÓXICO. No abrir las cápsulas. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Vómitos incoercibles", "Fallo hepático agudo"],
      tratamiento: "Soporte sintomático intensivo y factores estimulantes de colonias."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital", efecto: "Induce enzimas hepáticas acelerando el metabolismo de la lomustina.", severidad: "Moderada" },
      { farmaco: "Cimetidina", efecto: "En humanos aumenta la toxicidad de la lomustina.", severidad: "Moderada" },
      { farmaco: "Otros agentes mielosupresores", efecto: "Riesgo de aplasia medular fatal.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Alquila el ADN y el ARN, inhibiendo la síntesis de ácidos nucleicos y el ensamblaje de proteínas.",
    farmacocinetica: "Absorción oral rápida. Alta penetración en tejidos grasos y SNC. Metabolismo hepático activo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsulas",
      concentracion_texto: "40 mg",
      valor_concentracion: 40,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};