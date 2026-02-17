
import type { Drug, Constante, Vacuna, GestationData, ReptileVariant } from './types';

export const SPECIES_ICONS: { [key: string]: string } = { 
    'perro': '🐶', 'gato': '🐱', 'caballo': '🐴', 'bovino': '🐮', 
    'huron': '🦦', 'conejo': '🐰', 'cobaya': '🐹', 'erizo': '🦔',
    'ave': '🦜', 'reptil': '🦎', 'cerdo': '🐷', 'ovino_caprino': '🐐', 'roedores': '🐀'
};

export const CONSTANTES_DATA: Constante[] = [
  { esp: 'Perro', icon: '🐶', t_min: 37.5, t_max: 39.2, fc_min: 60, fc_max: 160, fr_min: 10, fr_max: 30, tllc: '< 2s', hemograma: { hto: '37-55%', gb: '6-17', plaq: '200-500' } },
  { esp: 'Gato', icon: '🐱', t_min: 38.0, t_max: 39.2, fc_min: 140, fc_max: 220, fr_min: 20, fr_max: 42, tllc: '< 2s', hemograma: { hto: '24-45%', gb: '5.5-19.5', plaq: '300-800' } },
  { esp: 'Caballo', icon: '🐴', t_min: 37.5, t_max: 38.5, fc_min: 28, fc_max: 40, fr_min: 8, fr_max: 16, tllc: '< 2.5s', hemograma: { hto: '32-52%', gb: '5-12.5', plaq: '100-350' } },
  { esp: 'Bovino', icon: '🐮', t_min: 38.0, t_max: 39.0, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30, tllc: '< 2s', hemograma: { hto: '24-46%', gb: '4-12', plaq: '100-800' } },
  { esp: 'Cerdo', icon: '🐷', t_min: 38.0, t_max: 39.5, fc_min: 60, fc_max: 80, fr_min: 8, fr_max: 18, tllc: '< 2s', hemograma: { hto: '32-50%', gb: '11-22', plaq: '300-700' } },
  { esp: 'Conejo', icon: '🐰', t_min: 38.3, t_max: 39.4, fc_min: 130, fc_max: 325, fr_min: 30, fr_max: 60, tllc: '< 2s', hemograma: { hto: '30-50%', gb: '5-13', plaq: '250-650' } },
  { esp: 'Hurón', icon: '🦦', t_min: 37.8, t_max: 40.0, fc_min: 200, fc_max: 400, fr_min: 33, fr_max: 36, tllc: '< 2s', hemograma: { hto: '36-48%', gb: '2-8', plaq: '200-900' } },
  { esp: 'Cobaya', icon: '🐹', t_min: 37.2, t_max: 39.5, fc_min: 240, fc_max: 310, fr_min: 40, fr_max: 100, tllc: '< 2s', hemograma: { hto: '39-55%', gb: '5-15', plaq: '250-850' } },
  { esp: 'Erizo', icon: '🦔', t_min: 36.0, t_max: 37.5, fc_min: 180, fc_max: 280, fr_min: 25, fr_max: 50, tllc: '< 2s', hemograma: { hto: '35-50%', gb: '6-13', plaq: '150-400' } },
  { esp: 'Ave', icon: '🦜', t_min: 40.0, t_max: 42.0, fc_min: 150, fc_max: 350, fr_min: 30, fr_max: 50, tllc: '< 2s', hemograma: { hto: '35-55%', gb: '5-11', plaq: 'N/A' } },
  { esp: 'Reptil', icon: '🦎', t_min: 0, t_max: 0, fc_min: 0, fc_max: 0, fr_min: 0, fr_max: 0, tllc: 'N/A', hemograma: null },
];

export const REPTILE_VARIANTS: ReptileVariant = {
  'Tortuga de Tierra': { t_min: 26, t_max: 32, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30 },
  'Camaleón': { t_min: 24, t_max: 30, fc_min: 60, fc_max: 100, fr_min: 15, fr_max: 35 },
  'Pitón Bola': { t_min: 28, t_max: 32, fc_min: 30, fc_max: 60, fr_min: 5, fr_max: 20 },
  'Dragón Barbudo': { t_min: 35, t_max: 43, fc_min: 60, fc_max: 90, fr_min: 10, fr_max: 30 },
  'Gecko Leopardo': { t_min: 28, t_max: 32, fc_min: 40, fc_max: 80, fr_min: 10, fr_max: 30 },
  'Iguana Verde': { t_min: 29, t_max: 35, fc_min: 40, fc_max: 75, fr_min: 15, fr_max: 30 },
};

export const VACUNAS_DATA: { [key: string]: Vacuna[] } = {
  Perro: [
    { edad: '6-8 Semanas', vacuna: 'Puppy DP (Parvo/Moquillo)', tipo: 'Esencial' }, 
    { edad: '10-12 Semanas', vacuna: 'Quíntuple (Refuerzo 1)', tipo: 'Esencial' }, 
    { edad: '14-16 Semanas', vacuna: 'Quíntuple + Rabia', tipo: 'Esencial' },
    { edad: 'Anual', vacuna: 'Quíntuple + Rabia + Bordetella', tipo: 'Refuerzo' }
  ],
  Gato: [
    { edad: '8-9 Semanas', vacuna: 'Triple Felina', tipo: 'Esencial' }, 
    { edad: '11-12 Semanas', vacuna: 'Triple + Leucemia', tipo: 'Esencial' },
    { edad: '16 Semanas', vacuna: 'Rabia', tipo: 'Esencial' }
  ],
  Hurón: [
    { edad: '6-8 Semanas', vacuna: 'Moquillo (Canino)', tipo: 'Esencial' },
    { edad: '10-12 Semanas', vacuna: 'Moquillo (Refuerzo)', tipo: 'Esencial' },
    { edad: '14-16 Semanas', vacuna: 'Rabia', tipo: 'Esencial' }
  ],
  Conejo: [
    { edad: '5 Semanas', vacuna: 'Mixomatosis', tipo: 'Zona Riesgo' },
    { edad: '10 Semanas', vacuna: 'Enf. Hemorrágica Viral', tipo: 'Esencial' }
  ],
  Caballo: [
    { edad: '4-6 Meses', vacuna: 'Tétanos, Encefalitis, Influenza', tipo: 'Esencial' },
    { edad: 'Anual', vacuna: 'Refuerzo Triple + Rabia', tipo: 'Refuerzo' }
  ],
  Bovino: [
    { edad: '3-4 Meses', vacuna: 'Clostridial (Mancha)', tipo: 'Esencial' },
    { edad: '4-5 Meses', vacuna: 'Viral Respiratoria', tipo: 'Esencial' },
    { edad: 'Pre-Servicio', vacuna: 'Reproductiva (IBR/DVB/Lepto)', tipo: 'Estratégica' }
  ],
  Cerdo: [
    { edad: '3 Semanas', vacuna: 'Micoplasma', tipo: 'Esencial' },
    { edad: '6-7 Semanas', vacuna: 'Erisipela + Circovirus', tipo: 'Esencial' }
  ]
};

export const GESTATION_DATA_FULL: GestationData = {
  'perro': { avg: 63, eco: 25, deworm: 40, rx: 45 },
  'gato': { avg: 65, eco: 25, deworm: 40, rx: 45 },
  'caballo': { avg: 340, eco: 14, deworm: 0, rx: 0 },
  'bovino': { avg: 283, eco: 30, deworm: 0, rx: 0 },
  'cerdo': { avg: 114, eco: 25, deworm: 100, rx: 0 },
  'conejo': { avg: 31, eco: 10, deworm: 0, rx: 0 },
  'huron': { avg: 42, eco: 20, deworm: 0, rx: 35 },
  'cobaya': { avg: 65, eco: 25, deworm: 0, rx: 45 },
  'erizo': { avg: 35, eco: 0, deworm: 0, rx: 0 },
};

export const DB_MEDICAMENTOS: Drug[] = [
  {
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
        "tratamiento": "No suele ser necesario. Si hay hipoglucemia por otros agentes, usar glucosa parenteral o dextrosa oral (la absorción de sacarosa está inhibida).",
        "contraindicado_en_urgencia": []
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
      "farmacocinetica": {
        "general": "En perros, solo se absorbe el ~4%. El resto es metabolizado por la flora bacteriana intestinal. En insuficiencia renal severa, los niveles séricos aumentan significativamente.",
        "datos_especie": {}
      }
    },
    "propiedades_fisicoquimicas": {
        "descripcion": "Polvo blanco a blanquecino, soluble en agua.",
        "almacenamiento": "Menor a 25°C, proteger de humedad.",
        "compatibilidad": {
          "compatibles": [],
          "incompatibles": []
        }
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
  },
  {
    "id": "acepromazina_maleato",
    "meta_data": {
      "nombre_generico": "Acepromazina Maleato",
      "nombres_comerciales": [
        "PromAce",
        "Aceproject",
        "Acevet",
        "ACP",
        "Atravet"
      ],
      "grupo_farmacologico": "Sedante Fenotiazínico",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Caballos)"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Sin efectos analgésicos; requiere combinación con analgésicos si hay dolor.",
        "Inicio de acción: 15 min; duración: 3-4 horas (hasta 6-8 h).",
        "Dosis clínicas son significativamente menores a las de la etiqueta FDA.",
        "No tiene agente de reversión."
      ],
      "usos_principales": "Sedante, tranquilizante, agente preanestésico. Tratamiento adyuvante de laminitis en caballos y obstrucción uretral en gatos machos."
    },
    "informacion_cliente": [
      "Efecto óptimo oral 45-60 min antes del viaje.",
      "Orina de color rosa a marrón rojizo (inofensivo).",
      "Animales sedados pueden asustarse con ruidos.",
      "Efectos pueden durar hasta 24 horas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Sedación/Premedicación (Extra-label recomendado)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.03,
            "dosis_min": 0.01,
            "dosis_max": 0.1,
            "tope_maximo_mg": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "IV administrar lento. Dosis máxima total: 3 mg/perro."
        }
      ],
      "caballo": [
        {
          "indicacion": "Ayuda en control de animales fractious",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.066,
            "dosis_min": 0.044,
            "dosis_max": 0.088,
            "unidad_calculo": "mg/kg",
            "tope_maximo_mg": null
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Asegurar retracción del pene en una hora tras protrusión."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Exposición a organofosforados o procaína.",
        "Shock, hipovolemia severa o deshidratación.",
        "Enfermedad hepática severa."
      ],
      "precauciones": [
        "Mutación MDR1: Reducir dosis 25-50%.",
        "Boxers: Riesgo de síncope vagal.",
        "Razas gigantes: Mayor sensibilidad.",
        "Galgos: Sensibles a efectos hipotensores."
      ],
      "efectos_adversos": [
        "Hipotensión significativa.",
        "Hipotermia.",
        "Prolapso de la membrana nictitante.",
        "Priapismo en caballos (raro pero grave)."
      ],
      "sobredosis": {
        "signos": ["Hipotensión severa", "Depresión SNC", "Convulsiones"],
        "tratamiento": "Fluidos IV, vasopresores (Norepinefrina). CONTRAINDICADA la Epinefrina.",
        "contraindicado_en_urgencia": ["Epinefrina"]
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Epinefrina", "efecto": "Reversión de epinefrina (empeora hipotensión)", "severidad": "Grave" },
        { "farmaco": "Opioides", "efecto": "Potencia hipotensión y sedación", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo dopaminérgico postsináptico en SNC y bloqueo alfa-1 adrenérgico periférico.",
      "farmacocinetica": {
        "general": "Metabolismo hepático. Metabolitos detectables en orina equina hasta 144 h.",
        "datos_especie": {}
      }
    },
    "propiedades_fisicoquimicas": {
      "descripcion": "Polvo amarillo inodoro. Solución inyectable amarillo pálido.",
      "almacenamiento": "Proteger de luz. Temperatura ambiente (20-25°C).",
      "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyección", "concentracion_texto": "10 mg/mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "acetaminofen",
    "meta_data": {
      "nombre_generico": "Acetaminofén",
      "nombres_comerciales": [
        "Tylenol",
        "Paracetamol"
      ],
      "grupo_farmacologico": "Analgésico, Antipirético",
      "status_regulatorio": "Uso extra-label en perros y caballos; CONTRAINDICADO en gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Contraindicado en gatos y hurones a cualquier dosis.",
        "No posee actividad antiinflamatoria significativa ni inhibe función plaquetaria.",
        "Perros son más susceptibles que humanos a toxicidad en glóbulos rojos.",
        "Útil para dolor crónico en perros cuando no se pueden usar AINEs."
      ],
      "usos_principales": "Analgésico oral o antipirético en perros, caballos y pequeños mamíferos."
    },
    "informacion_cliente": [
      "NUNCA usar en gatos ni hurones.",
      "Contactar al veterinario si el perro deja de comer o si el blanco de los ojos se pone amarillento.",
      "No dar más de lo prescrito ni combinar con otros medicamentos para la fiebre sin instrucción."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgésico o antipirético (Extra-label)",
          "vias": ["PO", "Rectal"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 12.5,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg",
            "tope_maximo_mg": null
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Si se usa >5 días, considerar cada 12 horas a dosis mínima."
        }
      ],
      "caballo": [
        {
          "indicacion": "Analgésico o antipirético (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "unidad_calculo": "mg/kg",
            "dosis_min": null,
            "dosis_max": null,
            "tope_maximo_mg": null
          },
          "frecuencia": {
            "texto_ui": "Una o dos veces al día",
            "intervalo_horas": 12
          },
          "notas_tecnicas": ""
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Cualquier dosis).",
        "Hurones.",
        "Petauros del azúcar (Sugar gliders) o erizos (seguridad no establecida)."
      ],
      "precauciones": [
        "Perros con sensibilidad idiosincrásica.",
        "Uso crónico: riesgo de hepatotoxicidad.",
        "Dosis altas: riesgo de metahemoglobinemia."
      ],
      "efectos_adversos": [
        "Metahemoglobinemia (especialmente gatos y dosis altas en perros).",
        "Hepatotoxicidad.",
        "Queratoconjuntivitis seca (KCS) en perros a dosis >3 veces la recomendada.",
        "Ictericia y hematuria."
      ],
      "sobredosis": {
        "signos": [
          "Edema facial/extremidades (gatos)",
          "Cianosis",
          "Ictericia",
          "Vómitos",
          "Dolor abdominal"
        ],
        "tratamiento": "N-acetilcisteína (Antídoto), SAMe, fluidoterapia, oxígeno, transfusiones de sangre.",
        "contraindicado_en_urgencia": []
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Anestésicos locales", "efecto": "Aumentan riesgo de metahemoglobinemia", "severidad": "Moderada" },
        { "farmaco": "Barbitúricos", "efecto": "Aumentan riesgo de hepatotoxicidad", "severidad": "Importante" },
        { "farmaco": "Warfarina", "efecto": "Dosis grandes pueden potenciar efectos anticoagulantes", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de la ciclooxigenasa y sitios de peroxidasa en la prostaglandina H2 sintetasa. Posible actividad serotoninérgica.",
      "farmacocinetica": {
        "general": "En perros: biodisponibilidad ~45%, vida media 1-4 h. En caballos: biodisponibilidad ~91%.",
        "datos_especie": {}
      }
    },
    "propiedades_fisicoquimicas": {
        "descripcion": "Polvo cristalino blanco, sabor amargo.",
        "almacenamiento": "Menor a 40°C. No congelar soluciones.",
        "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "325 mg, 500 mg", "valor_concentracion": 325, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Líquido oral", "concentracion_texto": "32 mg/mL", "valor_concentracion": 32, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "acetazolamida",
    "meta_data": {
      "nombre_generico": "Acetazolamida",
      "nombres_comerciales": ["Diamox"],
      "grupo_farmacologico": "Inhibidor de la anhidrasa carbónica, diurético, agente antiglaucoma",
      "status_regulatorio": "Uso extra-label en perros, gatos y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento de glaucoma, alcalosis metabólica y HYPP en caballos.",
        "Reduce la formación de humor acuoso.",
        "Posee actividad anticonvulsiva independiente de su efecto diurético."
      ],
      "usos_principales": "Control de presión intraocular en glaucoma, diuresis en alcalosis metabólica y prevención de parálisis periódica hiperpotasémica (HYPP) en caballos."
    },
    "informacion_cliente": [
      "Dar con comida para reducir el malestar estomacal.",
      "Contactar al veterinario si nota jadeo inusual, debilidad, tambaleo o temblores.",
      "Caballos deben tener acceso a agua fresca constante.",
      "Requiere pruebas de laboratorio periódicas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Glaucoma / Alcalosis metabólica (Extra-label)",
          "vias": ["PO", "IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 7,
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg",
            "tope_maximo_mg": null
          },
          "frecuencia": { "texto_ui": "Cada 8 a 12 horas", "intervalo_horas": 8 },
          "notas_tecnicas": "Dosis IV solo una vez."
        }
      ],
      "caballo": [
        {
          "indicacion": "Prevención/Tratamiento de episodios de HYPP (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3.3,
            "dosis_min": 2.2,
            "dosis_max": 4.4,
            "unidad_calculo": "mg/kg",
            "tope_maximo_mg": null
          },
          "frecuencia": { "texto_ui": "Dos veces al día", "intervalo_horas": 12 },
          "notas_tecnicas": ""
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Insuficiencia hepática, renal, pulmonar o adrenocortical significativa.",
        "Hiponatremia, hipopotasemia.",
        "Acidosis hiperclorémica.",
        "Obstrucción pulmonar severa."
      ],
      "precauciones": [
        "Acidosis respiratoria severa.",
        "Dosis altas crónicas: Reducen capacidad de ejercicio en caballos."
      ],
      "efectos_adversos": [
        "Cristaluria y poliuria.",
        "Hipopotasemia.",
        "Sedación y debilidad.",
        "Vómitos y diarrea.",
        "Temblores leves tras administración IV rápida."
      ],
      "sobredosis": {
        "signos": ["Alteración electrolítica severa", "Cambios en estado mental"],
        "tratamiento": "Soporte, monitoreo de gases y electrolitos. Es dializable.",
        "contraindicado_en_urgencia": []
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Ciclosporina", "efecto": "Aumenta concentraciones de ciclosporina", "severidad": "Importante" },
        { "farmaco": "Digoxina", "efecto": "Aumenta riesgo de toxicidad por hipopotasemia", "severidad": "Moderada" },
        { "farmaco": "Fenobarbital", "efecto": "Aumenta excreción de fenobarbital por orina alcalina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibidor no competitivo reversible de la anhidrasa carbónica. Reduce formación de iones H+ y bicarbonato.",
      "farmacocinetica": {
        "general": "Inicio acción IOP: 30 min. Duración: 4-6 h. Excreción renal del 90% inalterada.",
        "datos_especie": {}
      }
    },
    "propiedades_fisicoquimicas": {
      "descripcion": "Polvo cristalino blanco. Solubilidad ligera en agua.",
      "almacenamiento": "Temperatura ambiente.",
      "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "125 mg, 250 mg", "valor_concentracion": 125, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyectable (Liofilizado)", "concentracion_texto": "500 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  },
  {
    "id": "acido_acetico",
    "meta_data": {
      "nombre_generico": "Ácido Acético (Vinagre)",
      "nombres_comerciales": ["Vinagre"],
      "grupo_farmacologico": "Acidificante Gastrointestinal",
      "status_regulatorio": "Uso extra-label en rumiantes y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usar solo vinagre (3%-5%), NUNCA ácido concentrado.",
        "Administrar vía sonda gástrica debido al sabor desagradable.",
        "Contraindicado si hay sospecha de acidosis láctica."
      ],
      "usos_principales": "Tratamiento de toxicosis por amoníaco inducida por nitrógeno no proteico (urea) en rumiantes y prevención de enterolitos en caballos."
    },
    "informacion_cliente": [
      "Se administra generalmente mediante sonda gástrica por personal profesional.",
      "No usar formas concentradas por riesgo de corrosión."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Envenenamiento por urea (Extra-label)",
          "vias": ["Sonda gástrica"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 7,
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "Litros/animal",
            "tope_maximo_mg": null
          },
          "frecuencia": { "texto_ui": "Dosis única, repetir si es necesario", "intervalo_horas": 0 },
          "notas_tecnicas": "Usar vinagre al 5%. Seguir con agua fría (hasta 30L) para bajar temperatura ruminal."
        }
      ],
      "caballo": [
        {
          "indicacion": "Prevención de enterolitos (Extra-label)",
          "vias": ["PO (en comida)"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 250,
            "unidad_calculo": "mL/450kg",
            "dosis_min": null,
            "dosis_max": null,
            "tope_maximo_mg": null
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": ""
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Acidosis láctica (sobrecarga de grano).",
        "Uso de formas concentradas de ácido acético."
      ],
      "precauciones": [
        "Irritación de mucosas por contacto directo."
      ],
      "efectos_adversos": [
        "Irritación gastrointestinal si no se diluye adecuadamente.",
        "Sabor desagradable."
      ],
      "sobredosis": {
        "signos": ["Corrosión de mucosas (si es concentrado)"],
        "tratamiento": "Dilución con agua o leche.",
        "contraindicado_en_urgencia": []
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aspirina", "efecto": "Orina ácida disminuye excreción de salicilatos", "severidad": "Leve" },
        { "farmaco": "Fenobarbital", "efecto": "Orina ácida disminuye excreción de fenobarbital", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Baja el pH ruminal, desplazando el amoníaco (NH3) a iones amonio (NH4+) para reducir su absorción.",
      "farmacocinetica": {
        "general": "No disponible.",
        "datos_especie": {}
      }
    },
    "propiedades_fisicoquimicas": {
        "descripcion": "Líquido con olor distintivo y sabor ácido.",
        "almacenamiento": "Envases herméticos.",
        "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
      { "tipo": "Solución (Vinagre)", "concentracion_texto": "3% - 5%", "valor_concentracion": 5, "unidad_concentracion": "%", "es_divisible": false }
    ]
  },
  {
    "id": "albuterol_salbutamol",
    "meta_data": {
    "nombre_generico": "Albuterol (Salbutamol)",
    "nombres_comerciales": ["Proventil", "Ventolin", "Salbutol"],
    "grupo_farmacologico": "Agonista Beta-2 Adrenérgico",
    "status_regulatorio": "Uso extra-label en perros, gatos y caballos."
    },
    "resumen_clinico": {
    "puntos_clave": [
    "Broncodilatador de acción rápida.",
    "Eficaz para alivio agudo, pero el uso crónico puede disminuir la densidad de receptores (tolerancia).",
    "La inhalación reduce drásticamente los efectos secundarios sistémicos en comparación con la vía oral."
    ],
    "usos_principales": "Broncoespasmo asociado a asma felina, bronquitis crónica en perros y enfermedad inflamatoria de las vías respiratorias en caballos."
    },
    "informacion_cliente": [
    "Se requiere un espaciador (como AeroKat o AeroDawg) para administración efectiva en mascotas.",
    "Limpiar el hocico tras la administración para evitar ingestión accidental.",
    "Contactar al veterinario si el animal presenta temblores o agitación severa."
    ],
    "parametros_dosificacion": {
    "gato": [
    {
    "indicacion": "Asma felina (Crisis aguda)",
    "vias": ["Inhalación (MDI)"],
    "math": {
    "tipo_calculo": "fija",
    "dosis_recomendada": 1,
    "dosis_min": null,
    "dosis_max": null,
    "tope_maximo_mg": null,
    "unidad_calculo": "puff (90 mcg)"
    },
    "frecuencia": { "texto_ui": "Según sea necesario cada 4-6 horas", "intervalo_horas": 4 },
    "notas_tecnicas": "Usar solo para crisis. El uso diario crónico puede empeorar la inflamación de las vías respiratorias."
    }
    ],
    "caballo": [
    {
    "indicacion": "Broncoespasmo (RAO/IAD)",
    "vias": ["Inhalación"],
    "math": {
    "tipo_calculo": "mg_kg",
    "dosis_recomendada": 2,
    "dosis_min": null,
    "dosis_max": null,
    "tope_maximo_mg": null,
    "unidad_calculo": "mcg/kg"
    },
    "frecuencia": { "texto_ui": "Cada 1-2 horas en crisis", "intervalo_horas": 1 },
    "notas_tecnicas": ""
    }
    ]
    },
    "seguridad_y_alertas": {
    "contraindicaciones": [
    "Hipersensibilidad.",
    "Arritmias cardiacas severas."
    ],
    "precauciones": [
    "Diabetes mellitus (puede causar hiperglucemia).",
    "Hipertiroidismo.",
    "Enfermedad cardiaca o hipertensión."
    ],
    "efectos_adversos": [
    "Taquicardia.",
    "Temblores musculares.",
    "Hipopotasemia.",
    "Agitación / Nerviosismo."
    ],
    "sobredosis": {
    "signos": ["Taquicardia severa", "Hipopotasemia crítica", "Vómitos", "Paro cardiaco"],
    "tratamiento": "Bloqueadores beta (propranolol) si la taquicardia es severa, suplementación con potasio.",
    "contraindicado_en_urgencia": []
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Bloqueadores Beta (Propranolol)", "efecto": "Antagonismo mutuo (anula el efecto del albuterol)", "severidad": "Grave" },
    { "farmaco": "Digoxina", "efecto": "Riesgo de arritmias por hipopotasemia", "severidad": "Moderada" },
    { "farmaco": "Anestésicos halogenados", "efecto": "Aumenta riesgo de arritmias ventriculares", "severidad": "Grave" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Estimula receptores beta-2 adrenérgicos en el músculo liso bronquial, activando la adenilciclasa y aumentando el AMP cíclico (relajación).",
    "farmacocinetica": {
      "general": "Inicio por inhalación: 5-15 min. Duración: 3-6 h.",
      "datos_especie": {}
    }
    },
    "propiedades_fisicoquimicas": {
        "descripcion": "",
        "almacenamiento": "",
        "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
    { "tipo": "Inhalador (MDI)", "concentracion_texto": "90 mcg por puff", "valor_concentracion": 0.09, "unidad_concentracion": "mg", "es_divisible": false }
    ]
    },
    {
    "id": "altrenogest",
    "meta_data": {
    "nombre_generico": "Altrenogest",
    "nombres_comerciales": ["Regu-Mate", "Altosyn", "Matrix"],
    "grupo_farmacologico": "Progestina Sintética",
    "status_regulatorio": "Aprobado FDA (Equinos y Porcinos)."
    },
    "resumen_clinico": {
    "puntos_clave": [
    "ADVERTENCIA: Se absorbe fácilmente por la piel humana.",
    "Mujeres embarazadas o que planean estarlo NO deben manejarlo.",
    "Suprime el estro de forma predecible en yeguas.",
    "No es efectivo en yeguas con piómetra."
    ],
    "usos_principales": "Supresión del estro en yeguas para sincronización o control de comportamiento. Soporte del embarazo en yeguas con deficiencia de progesterona."
    },
    "informacion_cliente": [
    "Usar guantes de vinilo o polietileno (los de látex pueden ser permeables).",
    "Si hay contacto con la piel, lavar inmediatamente con agua y jabón.",
    "Administrar sobre la comida o directamente en la boca."
    ],
    "parametros_dosificacion": {
    "caballo": [
    {
    "indicacion": "Supresión del estro",
    "vias": ["PO"],
    "math": {
    "tipo_calculo": "mg_kg",
    "dosis_recomendada": 0.044,
    "dosis_min": null,
    "dosis_max": null,
    "tope_maximo_mg": null,
    "unidad_calculo": "mg/kg"
    },
    "frecuencia": { "texto_ui": "Una vez al día por 15 días", "intervalo_horas": 24 },
    "notas_tecnicas": "El estro suele ocurrir 4-5 días después de suspender el tratamiento."
    }
    ]
    },
    "seguridad_y_alertas": {
    "contraindicaciones": [
    "Yeguas con inflamación uterina (endometritis).",
    "No usar en caballos destinados al consumo humano."
    ],
    "precauciones": [
    "Manejo extremadamente cuidadoso por humanos (riesgo de interrupción del ciclo menstrual o embarazo)."
    ],
    "efectos_adversos": [
    "Cambios mínimos en yeguas a dosis terapéuticas.",
    "Alteración de parámetros de calidad espermática en sementales (si se usa accidentalmente)."
    ],
    "sobredosis": {
    "signos": ["No se han reportado efectos agudos graves en caballos"],
    "tratamiento": "Soporte.",
    "contraindicado_en_urgencia": []
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Rifampicina", "efecto": "Puede disminuir la eficacia del altrenogest", "severidad": "Leve" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Produce efectos similares a la progesterona natural, inhibiendo la liberación de gonadotropinas (LH/FSH) de la pituitaria.",
    "farmacocinetica": {
      "general": "Se une a proteínas plasmáticas. Metabolismo hepático.",
      "datos_especie": {}
    }
    },
    "propiedades_fisicoquimicas": {
        "descripcion": "",
        "almacenamiento": "",
        "compatibilidad": { "compatibles": [], "incompatibles": [] }
    },
    "presentaciones_comerciales": [
    { "tipo": "Solución oral", "concentracion_texto": "2.2 mg/mL (0.22%)", "valor_concentracion": 2.2, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
    }
];

    