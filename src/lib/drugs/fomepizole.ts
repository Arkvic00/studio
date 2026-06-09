import type { Drug } from '@/lib/types';

export const fomepizoleDrug: Drug = {
  id: "fomepizole",
  meta_data: {
    nombre_generico: "Fomepizol (4-Metilpirazol)",
    nombres_comerciales: ["Antizol"],
    grupo_farmacologico: "Antídoto; Inhibidor de la alcohol deshidrogenasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor competitivo de la enzima alcohol deshidrogenasa.",
      "Tratamiento de elección para la intoxicación por etilenglicol (anticongelante) en perros.",
      "Evita la formación de metabolitos altamente nefrotóxicos (ácido oxálico).",
      "Más seguro que el etanol ya que no causa depresión del SNC ni acidosis metabólica adicional.",
      "Eficacia máxima si se inicia dentro de las 8 horas posteriores a la ingestión."
    ],
    usos_principales: "Antídoto específico para la intoxicación por etilenglicol en perros y gatos.",
    inicio_accion: "Inmediato (vía IV)",
    duracion_efecto: "Requiere un protocolo de administración intermitente"
  },
  informacion_cliente: [
    "Tratamiento de emergencia hospitalaria vital.",
    "El pronóstico depende de qué tan pronto se inicie el tratamiento tras la sospecha de ingestión.",
    "A diferencia del alcohol (etanol), no causa síntomas de borrachera en el animal.",
    "Se requieren análisis de sangre frecuentes para controlar la función de los riñones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Intoxicación por Etilenglicol (Protocolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          unidad_calculo: "mg/kg (Carga inicial)"
        },
        frecuencia: {
          texto_ui: "Dosis inicial, luego 15 mg/kg a las 12 y 24h, luego 5 mg/kg q12h",
          intervalo_horas: 12
        },
        notas_tecnicas: "Continuar con 5 mg/kg q12h hasta que los niveles de etilenglicol sean insignificantes o el animal se recupere."
      }
    ],
    gato: [
      {
        indicacion: "Intoxicación por Etilenglicol (Protocolo)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 125,
          unidad_calculo: "mg/kg (Carga inicial)"
        },
        frecuencia: {
          texto_ui: "Dosis inicial, luego 31.25 mg/kg q12h por 3 dosis adicionales",
          intervalo_horas: 12
        },
        notas_tecnicas: "Eficaz en gatos si se inicia dentro de las primeras 3 horas de la ingestión."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en intoxicaciones agudas.",
      "Uso concurrente con etanol (aumenta el riesgo de toxicidad alcohólica)."
    ],
    efectos_adversos: [
      "Generalmente bien tolerado.",
      "Posibles reacciones de hipersensibilidad leves."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) cada 12-24 horas",
      "Niveles de etilenglicol en sangre/orina si es posible",
      "Estado de hidratación y pH sanguíneo"
    ],
    instrucciones_manejo: "Diluir el vial 1:19 en NaCl 0.9% para obtener una solución de 50 mg/ml. Desechar tras 72 horas.",
    sobredosis: {
      signos: ["No reportados comúnmente en veterinaria"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Etanol", efecto: "Inhiben mutuamente su metabolismo; aumenta riesgo de toxicidad por alcohol.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe competitivamente la alcohol deshidrogenasa, bloqueando la conversión del etilenglicol en glicoaldehído y posteriormente en oxalato.",
    farmacocinetica: "Eliminación renal y metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable (Líquido concentrado)",
      concentracion_texto: "1 g/ml (1.5 g en 1.5 ml)",
      valor_concentracion: 1000,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
