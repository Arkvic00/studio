import type { Drug } from '@/lib/types';

export const citarabinaDrug: Drug = {
  id: "citarabina",
  meta_data: {
    nombre_generico: "Citarabina (Ara-C)",
    nombres_comerciales: ["Cytarabine", "Cytosar-U"],
    grupo_farmacologico: "Antineoplásico; Antimetabolito de la pirimidina",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antimetabolito específico de la fase S del ciclo celular.",
      "Se incorpora al ADN e inhibe la síntesis de pirimidinas.",
      "Uso principal en desórdenes linfoproliferativos y mieloproliferativos.",
      "Tratamiento de elección para la meningoencefalitis de origen desconocido (MUO/GME) en perros.",
      "Atraviesa la barrera hematoencefálica.",
      "La solución reconstituida debe usarse en 48 horas."
    ],
    usos_principales: "Tratamiento de linfoma (con afectación medular), leucemias mieloides, MUO/GME en perros y linfoma en hurones.",
    inicio_accion: "Interferencia inmediata con la síntesis de ADN",
    duracion_efecto: "Variable (requiere protocolos de infusión o pulsos)"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejo exclusivo por especialistas.",
    "Riesgo de bajada de defensas; se requieren análisis de sangre frecuentes.",
    "Desechar cualquier sobrante 48h después de la preparación.",
    "Informe inmediatamente si nota fiebre, vómitos severos o llagas en la boca de su mascota."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "MUO / GME (Protocolo de Pulsos)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 50,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas por 4 dosis (2 días). Repetir según protocolo (3, 7, 11 semanas...)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Generalmente combinado con prednisolona."
      },
      {
        indicacion: "Neoplasia linfoide (Protocolo VCAA)",
        vias: ["IV", "SC"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 125,
          dosis_min: 100,
          dosis_max: 150,
          unidad_calculo: "mg/m²"
        },
        duracion_tratamiento: "Durante 2 a 5 días"
      },
      {
        indicacion: "Leucemia (CRI)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 100,
          unidad_calculo: "mg/m²"
        },
        duracion_tratamiento: "Infusión continua durante 24 a 96 horas"
      }
    ],
    gato: [
      {
        indicacion: "Neoplasia linfoide",
        vias: ["IV", "SC"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 125,
          dosis_min: 100,
          dosis_max: 150,
          unidad_calculo: "mg/m²"
        }
      }
    ],
    huron: [
      {
        indicacion: "Linfoma",
        vias: ["PO", "SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg/hurón"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 2 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia hepática sustancial."
    ],
    efectos_adversos: [
      "Mielosupresión (leucopenia marcada).",
      "Vómitos y diarrea.",
      "Ulceración oral.",
      "Hepatotoxicidad.",
      "Calcinosis cutis en el sitio de inyección (raro en perros).",
      "Fiebre."
    ],
    monitoreo_recomendado: [
      "Hemograma completo frecuente (neutrófilos)",
      "Función hepática",
      "Sitio de inyección"
    ],
    instrucciones_manejo: "CITOTÓXICO. Almacenar reconstituido a temperatura ambiente. Desechar si aparece turbidez.",
    sobredosis: {
      signos: ["Supresión medular profunda", "Gastroenteritis hemorrágica"],
      tratamiento: "Soporte sintomático intensivo y factores estimulantes de colonias."
    },
    interacciones_farmacologicas: [
      { farmaco: "Metotrexato", efecto: "Aumenta el efecto de la citarabina (sinergia).", severidad: "Importante" },
      { farmaco: "Gentamicina", efecto: "La citarabina puede antagonizar su actividad.", severidad: "Moderada" },
      { farmaco: "Digoxina", efecto: "Reduce la absorción oral de digoxina.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se convierte intracelularmente en ara-CTP, que compite con el dCTP e inhibe la ADN polimerasa, deteniendo la síntesis de ADN.",
    farmacocinetica: "Atraviesa la barrera hematoencefálica (niveles en LCR ~40-50% de los plasmáticos)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "100 mg, 500 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
