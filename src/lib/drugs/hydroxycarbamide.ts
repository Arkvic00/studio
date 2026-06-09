import type { Drug } from '@/lib/types';

export const hydroxycarbamideDrug: Drug = {
  id: "hydroxycarbamide",
  meta_data: {
    nombre_generico: "Hidroxicarbamida (Hidroxiurea)",
    nombres_comerciales: ["Hydrea"],
    grupo_farmacologico: "Antineoplásico; Citotóxico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la enzima ribonucleótido reductasa, esencial para la síntesis de ADN.",
      "Actúa principalmente en la fase S del ciclo celular.",
      "Uso principal en desórdenes mieloproliferativos.",
      "Requiere monitoreo hematológico semanal al inicio (especialmente en gatos).",
      "En gatos, dosis altas se asocian con metahemoglobinemia."
    ],
    usos_principales: "Tratamiento de la policitemia vera, leucemia mieloide crónica (LMC), mastocitomas y meningioma canino adyuvante.",
    inicio_accion: "Interferencia inmediata con el ciclo celular",
    duracion_efecto: "Variable (requiere administración frecuente)"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes.",
    "Las cápsulas no deben abrirse; deben tragarse enteras.",
    "Se requieren análisis de sangre frecuentes (semanales al inicio) para vigilar las defensas.",
    "Informe inmediatamente si nota fiebre, vómitos, coloración oscura de las mucosas o moretones.",
    "Evitar contacto con las excretas del animal por 48 horas post-dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Policitemia Vera / LMC (Inducción)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 30,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas hasta normalizar hematocrito",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis alternativa: 50-80 mg/kg cada 3 días. Una vez en remisión, reducir frecuencia."
      },
      {
        indicacion: "Mastocitomas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 60,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 14 días, luego 30 mg/kg q24h", intervalo_horas: 24 }
      },
      {
        indicacion: "Meningioma canino",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas (o 50 mg/kg 3 veces por semana)", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Policitemia Vera / LMC",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas hasta remisión",
          intervalo_horas: 12
        },
        notas_tecnicas: "Extrema precaución; los gatos son muy sensibles a la mielosupresión por este fármaco. Monitorizar PCV semanalmente."
      },
      {
        indicacion: "Meningioma",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia renal severa.",
      "Historial de cálculos de urato (usar con precaución)."
    ],
    efectos_adversos: [
      "Mielosupresión (leucopenia, trombocitopenia).",
      "Signos GI (vómitos, anorexia).",
      "Metahemoglobinemia (reportada en gatos a dosis >500 mg).",
      "Desprendimiento de uñas y estomatitis.",
      "Hipotensión e hipertensión transitorias."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) semanal el primer mes, luego quincenal",
      "Función renal (Creatinina/BUN)",
      "Color de mucosas en gatos"
    ],
    instrucciones_manejo: "FÁRMACO CITOTÓXICO. Seguir protocolos de seguridad oncológica. No abrir las cápsulas.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Metahemoglobinemia aguda"],
      tratamiento: "Soporte sintomático intensivo; transfusión sanguínea si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros agentes mielosupresores", efecto: "Aumento marcado del riesgo de toxicidad hematológica.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la ribonucleótido reductasa, impidiendo la conversión de ribonucleótidos en desoxirribonucleótidos necesarios para la síntesis de ADN.",
    farmacocinetica: "Absorción oral rápida. Atraviesa la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "300 mg, 500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "100 mg, 1 g", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: true }
  ]
};
