import type { Drug } from '@/lib/types';

export const acarbosaDrug: Drug = {
    "id": "acarbosa",
    "meta_data": {
      "nombre_generico": "Acarbosa",
      "nombres_comerciales": [
        "Precose",
        "Glucobay"
      ],
      "grupo_farmacologico": "Agente antidiabético, inhibidor de la alfa-glucosidasa",
      "status_regulatorio": "Uso extra-label en perros y gatos; Aprobado por la FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Agente antihiperglucémico que reduce la tasa y cantidad de glucosa absorbida en el intestino después de una comida.",
        "Útil en perros y gatos con hiperglucemia leve.",
        "Poco probable que sea eficaz como terapia única para la diabetes mellitus.",
        "Debe administrarse con las comidas (preferiblemente justo antes de alimentar)."
      ],
      "usos_principales": "Reducción de concentraciones de glucosa en sangre en casos de hiperglucemia leve a moderada (rango 250-350 mg/dL) en perros y gatos con diabetes mellitus no dependiente de insulina, y como tratamiento adyuvante en diabetes dependiente de insulina."
    },
    "informacion_cliente": [
      "Dar el medicamento justo antes de alimentar al animal para mejores resultados.",
      "Las tabletas pueden dividirse o triturarse y mezclarse con la comida.",
      "Los efectos secundarios más probables son diarrea y/o gases.",
      "No causa hipoglucemia por sí solo, pero puede contribuir a ella si se usa con otros fármacos (como insulina)."
    ],
    "monitoreo_paciente": [
      "Glucosa sérica.",
      "Efectos adversos gastrointestinales (diarrea, flatulencia).",
      "Enzimas hepáticas (aumentos relacionados con la dosis reportados raramente)."
    ],
    "interferencia_laboratorio": [
      "ALT (Aminotransferasa): Aumento en niveles séricos en humanos con dosis altas a largo plazo.",
      "Bilirrubina: Posible aumento en humanos con uso prolongado."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Tratamiento adyuvante para diabetes mellitus (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 18.75,
            "dosis_min": 12.5,
            "dosis_max": 100,
            "tope_maximo_mg": 100,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": {
            "texto_ui": "Con cada comida (usualmente dos veces al día)",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Dosis inicial de 12.5-25 mg por perro (NO por kg). Si la respuesta es inadecuada tras 2 semanas, titular hasta 50 mg/perro. En perros >10-25 kg, considerar hasta 100 mg/perro."
        }
      ],
      "gato": [
        {
          "indicacion": "Tratamiento adyuvante para diabetes mellitus (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 12.5,
            "dosis_min": 12.5,
            "dosis_max": 12.5,
            "tope_maximo_mg": null,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": {
            "texto_ui": "Dos veces al día con la comida",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Ineficaz en gatos sanos alimentados con dieta baja en carbohidratos. Dar justo antes de comer."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad conocida.",
        "Cetoacidosis diabética.",
        "Enfermedad inflamatoria intestinal (IBD) o ulceración colónica.",
        "Obstrucción intestinal parcial o predisposición.",
        "Enfermedad intestinal crónica con trastornos de digestión/absorción.",
        "Pacientes con bajo peso o donde la formación excesiva de gases sea perjudicial."
      ],
      "precauciones": [
        "Disfunción renal severa (niveles séricos pueden ser 5 veces mayores).",
        "Enfermedad hepática severa.",
        "Animales con apetito reducido (ej. enfermedad renal crónica avanzada)."
      ],
      "efectos_adversos": [
        "Flatulencia.",
        "Heces blandas o acuosas.",
        "Diarrea.",
        "Pérdida de peso (en perros).",
        "Aumento de transaminasas hepáticas (raro)."
      ],
      "sobredosis": {
        "signos": [
          "Diarrea",
          "Flatulencia"
        ],
        "tratamiento": "No suele ser necesario. Si hay hipoglucemia por otros agentes, usar glucosa parenteral o dextrosa oral (la absorción de sacarosa está inhibida)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Carbón activado",
          "efecto": "Reduce la eficacia de la acarbosa",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Digoxina",
          "efecto": "Reduce concentraciones de digoxina en sangre",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Agentes hiperglucemiantes (Corticosteroides, tiazidas, hormonas tiroideas)",
          "efecto": "Reducen o niegan el efecto de la acarbosa",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Insulina / Sulfonilureas",
          "efecto": "Aumentan el riesgo de hipoglucemia",
          "severidad": "Importante"
        },
        {
          "farmaco": "Pancreatina / Amilasa",
          "efecto": "Reducen la eficacia de la acarbosa",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente la alfa-amilasa pancreática y las alfa-glucosidasas del intestino delgado, retrasando la digestión de carbohidratos complejos a glucosa.",
      "farmacocinetica": "En perros, solo se absorbe el ~4%. El resto es metabolizado por la flora bacteriana intestinal. En insuficiencia renal severa, los niveles séricos aumentan significativamente."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta oral",
        "concentracion_texto": "25 mg, 50 mg, 100 mg",
        "valor_concentracion": 25,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  };
