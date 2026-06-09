import type { Drug } from '@/lib/types';

export const ethanolDrug: Drug = {
  id: "ethanol",
  meta_data: {
    nombre_generico: "Etanol (Alcohol etílico)",
    nombres_comerciales: ["Alcohol*"],
    grupo_farmacologico: "Antídoto; Inhibidor de la alcohol deshidrogenasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor competitivo de la enzima alcohol deshidrogenasa.",
      "Evita la formación de metabolitos tóxicos a partir del etilenglicol (anticongelante) o metanol.",
      "Solo es efectivo si se administra antes de 8 horas de la ingestión del tóxico.",
      "Requiere monitoreo constante del estado de consciencia y equilibrio electrolítico.",
      "Fomepizol es una alternativa más segura si está disponible."
    ],
    usos_principales: "Tratamiento de la intoxicación por etilenglicol y metanol. Antiséptico tópico.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Requiere dosis repetidas para mantener niveles terapéuticos"
  },
  informacion_cliente: [
    "Medicamento de urgencia vital para intoxicaciones por anticongelante.",
    "Causará que el animal parezca 'borracho' o muy deprimido.",
    "El tratamiento debe iniciarse lo antes posible tras la ingestión sospechada.",
    "Se requieren análisis de sangre frecuentes para controlar los riñones y el azúcar."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación por Etilenglicol (Solución 20%)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5.5,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4h (5 dosis), luego cada 6h (4 dosis)",
          intervalo_horas: 4
        },
        notas_tecnicas: "Diluir alcohol de grado médico al 20% en agua estéril. En casos leves sin signos de SNC, puede considerarse la vía oral (vodka)."
      },
      {
        indicacion: "Intoxicación por Etilenglicol (CRI)",
        vias: ["IV (Infusión)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.42,
          unidad_calculo: "mg/kg/h"
        },
        notas_tecnicas: "Dar carga de 1.3 ml/kg de sol. 30%, seguido de la infusión por 48 horas."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación por Etilenglicol (Solución 20%)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "Cada 6h (5 dosis), luego cada 8h (4 dosis)",
          intervalo_horas: 6
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en intoxicaciones mortales.",
      "Uso concurrente con fomepizol (aumenta riesgo de toxicidad alcohólica)."
    ],
    efectos_adversos: [
      "Depresión severa del SNC (puede enmascarar signos del tóxico).",
      "Diuresis osmótica (riesgo de deshidratación).",
      "Hipotermia.",
      "Irritación venosa (flebitis).",
      "Hipoglucemia."
    ],
    monitoreo_recomendado: [
      "Niveles de etanol en sangre (>35 mg/dl)",
      "Función renal (Creatinina/BUN)",
      "Electrolitos y estado ácido-base",
      "Nivel de consciencia"
    ],
    instrucciones_manejo: "Usar un filtro de 0.22 μm para la administración IV de soluciones preparadas en el hospital.",
    sobredosis: {
      signos: ["Coma alcohólico", "Paro respiratorio"],
      tratamiento: "Soporte ventilatorio y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fomepizol", efecto: "Aumenta drásticamente el riesgo de toxicidad por alcohol.", severidad: "Grave" },
      { farmaco: "Depresores del SNC", efecto: "Potenciación de la depresión respiratoria.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor competitivo de la alcohol deshidrogenasa, impidiendo que esta procese el etilenglicol hacia sus metabolitos nefrotóxicos (ácido oxálico).",
    farmacocinetica: "Eliminación pulmonar y renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable (Grado médico)",
      concentracion_texto: "95%",
      valor_concentracion: 950,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
