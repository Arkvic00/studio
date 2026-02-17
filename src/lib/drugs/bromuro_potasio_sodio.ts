import type { Drug } from '@/lib/types';

export const bromuroPotasioSodioDrug: Drug = {
  "id": "bromuro_potasio_sodio",
  "meta_data": {
    "nombre_generico": "Bromuro de Potasio / Sodio",
    "nombres_comerciales": [
      "K-BroVet",
      "Libromide"
    ],
    "grupo_farmacologico": "Anticonvulsivo",
    "status_regulatorio": "Aprobado FDA condicional o suplemento. Uso extra-label común."
  },
  "resumen_clinico": {
    "puntos_clave": [
      "Fármaco antiepiléptico clásico, usado solo o con Fenobarbital.",
      "Vida media EXTREMADAMENTE larga (20-25 días en perros); tarda meses en alcanzar estado estable.",
      "La dieta (sal) afecta sus niveles: Mucha sal = Baja el bromuro (convulsiones); Poca sal = Sube bromuro (toxicidad).",
      "NO USAR EN GATOS (causa neumonitis alérgica fatal)."
    ],
    "usos_principales": "Epilepsia idiopática refractaria en perros."
  },
  "informacion_cliente": [
    "No cambie la dieta ni los premios del perro sin consultar (el contenido de sal altera la medicina).",
    "El perro puede estar sedado o tambaleante (ataxia) las primeras semanas.",
    "Aumentará mucho el consumo de agua y orina.",
    "Nunca dar a gatos."
  ],
  "monitoreo_paciente": [
    "Niveles séricos de bromuro (después de 1 y 3 meses).",
    "Signos de toxicidad (sedación profunda, debilidad patas traseras).",
    "Niveles de cloruro (el bromuro interfiere en máquinas de laboratorio antiguas, mostrando 'hipercloremia' falsa)."
  ],
  "interferencia_laboratorio": [
    "Cloruro: Falsa elevación masiva (la máquina lee bromuro como cloruro).",
    "Bicarbonato: Puede leerse falsamente alto."
  ],
  "parametros_dosificacion": {
    "perro": [
      {
        "indicacion": "Epilepsia (Mantenimiento)",
        "vias": ["PO"],
        "math": {
          "tipo_calculo": "mg_kg",
          "dosis_recomendada": 30,
          "dosis_min": 20,
          "dosis_max": 40,
          "unidad_calculo": "mg/kg"
        },
        "frecuencia": {
          "texto_ui": "Una vez al día (o dividido)",
          "intervalo_horas": 24
        },
        "notas_tecnicas": "Dosis de carga (si se necesita rápido): 400-600 mg/kg divididos en 24-48h (causa mucha sedación/vómito)."
      }
    ],
    "gato": [
      {
        "indicacion": "CONTRAINDICADO",
        "vias": [],
        "math": {
          "tipo_calculo": "fija",
          "dosis_recomendada": 0,
          "unidad_calculo": "mg"
        },
        "frecuencia": {
          "texto_ui": "NO USAR",
          "intervalo_horas": 0
        },
        "notas_tecnicas": "Riesgo alto de neumonitis eosinofílica (asma severa)."
      }
    ]
  },
  "seguridad_y_alertas": {
    "contraindicaciones": [
      "Gatos (Absoluta).",
      "Insuficiencia renal severa."
    ],
    "precauciones": [
      "Pancreatitis (se ha asociado bromuro + fenobarbital con pancreatitis).",
      "Insuficiencia renal (se acumula)."
    ],
    "efectos_adversos": [
      "Polidipsia/Poliuria (muy común).",
      "Polifagia (hambre).",
      "Sedación y ataxia (patas traseras).",
      "Vómitos (irritación gástrica directa, dar con comida).",
      "Bromismo (intoxicación crónica)."
    ],
    "sobredosis": {
      "signos": ["Ataxia severa", "Estupor", "Dolor muscular"],
      "tratamiento": "Administrar cloruro de sodio (sal) 0.9% IV para forzar la excreción renal del bromuro."
    },
    "interacciones_farmacologicas": [
      {
        "farmaco": "Dietas altas en Cloruro (Sal)",
        "efecto": "Aumentan eliminación de bromuro (riesgo de convulsiones)",
        "severidad": "Importante"
      },
      {
        "farmaco": "Diuréticos de asa (Furosemida)",
        "efecto": "Aumentan eliminación de bromuro",
        "severidad": "Moderada"
      }
    ]
  },
  "farmacologia_clinica": {
    "mecanismo_accion": "El ion bromuro compite con el cloruro en los canales iónicos, hiperpolarizando la neurona y haciéndola menos excitable.",
    "farmacocinetica": "Absorción buena. No se metaboliza en hígado. Excreción renal exclusiva. Compite con el cloruro por la reabsorción tubular."
  },
  "presentaciones_comerciales": [
    {
      "tipo": "Solución Oral",
      "concentracion_texto": "250 mg/mL",
      "valor_concentracion": 250,
      "unidad_concentracion": "mg/ml",
      "es_divisible": true
    },
    {
      "tipo": "Cápsula",
      "concentracion_texto": "Varios (formulado)",
      "valor_concentracion": 500,
      "unidad_concentracion": "mg",
      "es_divisible": false
    }
  ]
};
