import type { Drug } from '@/lib/types';

export const alopurinolDrug: Drug = {
    "id": "alopurinol",
    "meta_data": {
      "nombre_generico": "Alopurinol",
      "nombres_comerciales": ["Zyloprim", "Aloprim"],
      "grupo_farmacologico": "Inhibidor de la Xantina Oxidasa",
      "status_regulatorio": "Uso extra-label en veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Reduce la formación de ácido úrico.",
        "Riesgo de formación de cálculos de xantina si no se usa una dieta baja en purinas.",
        "Medicamento de elección para Leishmaniasis canina.",
        "No debe iniciarse durante un episodio agudo de gota (raro en veterinaria)."
      ],
      "usos_principales": "Prevención de urolitos de urato (especialmente en Dálmatas) y tratamiento de Leishmaniasis en perros."
    },
    "informacion_cliente": [
      "Es obligatorio alimentar con una dieta especial (baja en purinas).",
      "Fomentar el consumo de agua y permitir micciones frecuentes.",
      "Observar si hay sangre en la orina o dificultad para orinar."
    ],
    "monitoreo_paciente": [
      "Análisis de orina (buscar cristales de xantina).",
      "Función renal (especialmente en pacientes con enfermedad renal previa).",
      "Pruebas hepáticas.",
      "Hemograma (riesgo de anemia en raras ocasiones)."
    ],
    "interferencia_laboratorio": [
      "Ácido Úrico: Disminución de niveles séricos y urinarios (efecto buscado)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Prevención de urolitos de urato (Dálmatas)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 5,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 a 24 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Ajustar dosis para mantener uratos urinarios bajos sin formar xantina."
        },
        {
          "indicacion": "Leishmaniasis canina",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas por tiempo prolongado", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad severa previa.",
        "Pacientes con urolitiasis de xantina activa."
      ],
      "precauciones": [
        "Insuficiencia renal (requiere reducción de dosis).",
        "No usar en hembras lactantes."
      ],
      "efectos_adversos": [
        "Urolitiasis de xantina.",
        "Erupciones cutáneas.",
        "Malestar gastrointestinal.",
        "Anemia o leucopenia (raro)."
      ],
      "sobredosis": {
        "signos": ["Náuseas", "Vómitos"],
        "tratamiento": "Inducción del vómito si es reciente, fluidoterapia para promover excreción renal."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Azatioprina", "efecto": "Aumenta drásticamente la toxicidad de la azatioprina", "severidad": "Grave" },
        { "farmaco": "Diuréticos tiazídicos", "efecto": "Aumentan riesgo de hipersensibilidad", "severidad": "Moderada" },
        { "farmaco": "Amoxicilina", "efecto": "Aumenta riesgo de rash cutáneo", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la enzima xantina oxidasa, bloqueando la conversión de hipoxantina a xantina y de xantina a ácido úrico.",
      "farmacocinetica": "Metabolizado a oxipurinol (también activo). Excreción renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "100 mg, 300 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  };
