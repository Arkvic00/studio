
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
    "monitoreo_paciente": [
      "Frecuencia cardiaca y ritmo.",
      "Presión arterial (Crítico).",
      "Temperatura (riesgo de hipotermia).",
      "PCV y Proteínas totales (especialmente en pacientes anémicos)."
    ],
    "interferencia_laboratorio": [
      "Hematocrito: Disminución transitoria por secuestro esplénico.",
      "Pruebas cutáneas de alergia: Reduce respuesta de roncha y eritema (suspender 2 semanas antes)."
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
            "dosis_min": 0.044,
            "dosis_max": 0.088,
            "unidad_calculo": "mg/kg"
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
        "tratamiento": "Fluidos IV, vasopresores (Norepinefrina). CONTRAINDICADA la Epinefrina."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Epinefrina", "efecto": "Reversión de epinefrina (empeora hipotensión)", "severidad": "Grave" },
        { "farmaco": "Opioides", "efecto": "Potencia hipotensión y sedación", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo dopaminérgico postsináptico en SNC y bloqueo alfa-1 adrenérgico periférico.",
      "farmacocinetica": "Metabolismo hepático. Metabolitos detectables en orina equina hasta 144 h."
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
    "monitoreo_paciente": [
      "Función hepática y renal (especialmente en terapia crónica).",
      "Niveles de metahemoglobina.",
      "Estado hematológico."
    ],
    "interferencia_laboratorio": [
      "Ácido 5-hidroxiindolacético urinario: Falso positivo.",
      "Glucosa: Puede interferir con ciertos métodos de medición en humanos."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgésico o antipirético (Extra-label)",
          "vias": ["PO", "Rectal"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
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
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una o dos veces al día",
            "intervalo_horas": 12
          }
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
        "tratamiento": "N-acetilcisteína (Antídoto), SAMe, fluidoterapia, oxígeno, transfusiones de sangre."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Anestésicos locales", "efecto": "Aumentan riesgo de metahemoglobinemia", "severidad": "Moderada" },
        { "farmaco": "Barbitúricos", "efecto": "Aumentan riesgo de hepatotoxicidad", "severidad": "Importante" },
        { "farmaco": "Warfarina", "efecto": "Dosis grandes pueden potenciar efectos anticoagulantes", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de la ciclooxigenasa y sitios de peroxidasa en la prostaglandina H2 sintetasa. Posible actividad serotoninérgica.",
      "farmacocinetica": "En perros: biodisponibilidad ~45%, vida media 1-4 h. En caballos: biodisponibilidad ~91%."
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
    "monitoreo_paciente": [
      "Presión intraocular (tonometría).",
      "Electrolitos séricos y estado ácido-base.",
      "Gases en sangre venosa.",
      "Hemograma completo (uso crónico)."
    ],
    "interferencia_laboratorio": [
      "Proteína urinaria: Falsos positivos con reactivo azul de bromofenol.",
      "Hormonas tiroideas: Puede disminuir la captación de yodo y bajar concentraciones de T3/T4.",
      "Teofilina: Interfiere con determinación por HPLC."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Glaucoma / Alcalosis metabólica (Extra-label)",
          "vias": ["PO", "IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg"
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
            "dosis_min": 2.2,
            "dosis_max": 4.4,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dos veces al día", "intervalo_horas": 12 }
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
        "tratamiento": "Soporte, monitoreo de gases y electrolitos. Es dializable."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Ciclosporina", "efecto": "Aumenta concentraciones de ciclosporina", "severidad": "Importante" },
        { "farmaco": "Digoxina", "efecto": "Aumenta riesgo de toxicidad por hipopotasemia", "severidad": "Moderada" },
        { "farmaco": "Fenobarbital", "efecto": "Aumenta excreción de fenobarbital por orina alcalina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibidor no competitivo reversible de la anhidrasa carbónica. Reduce formación de iones H+ y bicarbonato.",
      "farmacocinetica": "Inicio acción IOP: 30 min. Duración: 4-6 h. Excreción renal del 90% inalterada."
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
    "monitoreo_paciente": [
      "pH ruminal.",
      "Signos clínicos de toxicosis por amoníaco (nerviosismo, temblores).",
      "Estado de hidratación."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias específicas en el manual."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Envenenamiento por urea (Extra-label)",
          "vias": ["Sonda gástrica"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_min": 4,
            "dosis_max": 10,
            "unidad_calculo": "Litros/animal"
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
            "unidad_calculo": "mL/450kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 }
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
        "tratamiento": "Dilución con agua o leche."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aspirina", "efecto": "Orina ácida disminuye excreción de salicilatos", "severidad": "Leve" },
        { "farmaco": "Fenobarbital", "efecto": "Orina ácida disminuye excreción de fenobarbital", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Baja el pH ruminal, desplazando el amoníaco (NH3) a iones amonio (NH4+) para reducir su absorción.",
      "farmacocinetica": "No disponible."
    },
    "presentaciones_comerciales": [
      { "tipo": "Solución (Vinagre)", "concentracion_texto": "3% - 5%", "valor_concentracion": 5, "unidad_concentracion": "%", "es_divisible": false }
    ]
  },
  {
    "id": "acetilcisteina",
    "meta_data": {
      "nombre_generico": "Acetilcisteína (NAC)",
      "nombres_comerciales": ["Mucomyst", "Acetadote"],
      "grupo_farmacologico": "Antídoto, Mucolítico",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado por la FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento principal para toxicidad por acetaminofén.",
        "Actúa como precursor de glutatión.",
        "Uso IV requiere filtro de 0.2 micras.",
        "Vía nebulizada puede causar broncoespasmo."
      ],
      "usos_principales": "Toxicidad por acetaminofén, xilitol o fenol. Mucolítico en árbol bronquial. Tratamiento de lipidosis hepática en gatos y retención de meconio en potros."
    },
    "informacion_cliente": [
      "Debe usarse bajo supervisión clínica estricta.",
      "Tiene un olor azufrado muy desagradable.",
      "Para uso oral, se puede mezclar con jugos para ocultar el sabor."
    ],
    "monitoreo_paciente": [
      "Niveles de metahemoglobina.",
      "Perfil químico hepático.",
      "Electrolitos.",
      "Signos de broncoconstricción (si se inhala)."
    ],
    "interferencia_laboratorio": [
      "Metahemoglobina: Monitorear valores en toxicidad por acetaminofén.",
      "Cetonas urinarias: Posible falso positivo."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Toxicosis por acetaminofén (Extra-label)",
          "vias": ["IV", "PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 140,
            "dosis_min": 140,
            "dosis_max": 280,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Carga inicial, luego cada 6 horas por 7 dosis", "intervalo_horas": 6 },
          "notas_tecnicas": "Diluir al 5% (50 mg/mL). Carga IV: 140-180 mg/kg. Carga PO: 280 mg/kg."
        }
      ],
      "potro": [
        {
          "indicacion": "Retención de meconio (Extra-label)",
          "vias": ["Enema"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 150,
            "unidad_calculo": "mL"
          },
          "frecuencia": { "texto_ui": "Según sea necesario", "intervalo_horas": 0 },
          "notas_tecnicas": "Usar 100-200 mL de solución al 4%. Retener 30-45 min."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad (en uso pulmonar).",
        "Ninguna cuando se usa como antídoto de emergencia."
      ],
      "precauciones": [
        "Animales con asma o bronquitis (riesgo de broncoespasmo).",
        "Insuficiencia cardiaca (por carga de sodio en ciertas presentaciones)."
      ],
      "efectos_adversos": [
        "Náuseas y vómitos (vía oral).",
        "Urticaria.",
        "Broncoespasmo (inhalado).",
        "Cambios en presión arterial (IV rápido)."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea"],
        "tratamiento": "Soporte general."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Carbón activado", "efecto": "Puede adsorber la acetilcisteína oral", "severidad": "Moderada" },
        { "farmaco": "Nitroglicerina", "efecto": "Potencia la hipotensión", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Donador de grupos tiol, estimula síntesis de glutatión. Mucolítico: rompe enlaces disulfuro en mucoproteínas.",
      "farmacocinetica": "Bioavailabilidad oral en gatos ~20%. Vida media IV 0.8 h en gatos."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable / Inhalación", "concentracion_texto": "20% (200 mg/mL)", "valor_concentracion": 200, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "aciclovir",
    "meta_data": {
      "nombre_generico": "Aciclovir",
      "nombres_comerciales": ["Zovirax"],
      "grupo_farmacologico": "Antiviral, Nucleósido",
      "status_regulatorio": "Uso extra-label en aves, caballos y perros. CONTRAINDICADO en gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usado principalmente en aves para la Enfermedad de Pacheco.",
        "Nefrotóxico si se da IV rápido.",
        "Causa necrosis tisular en aves si se da IM.",
        "Gatos: NO USAR por toxicidad renal, hepática y mielosupresión."
      ],
      "usos_principales": "Tratamiento de infecciones por herpesvirus en aves (PsHV-1). Coadyuvante en herpesvirus canino y parvovirus en cachorros."
    },
    "informacion_cliente": [
      "Efectos secundarios limitados a problemas GI (vómitos, diarrea).",
      "En aves, se puede dar en el agua o mezclado con semillas.",
      "Requiere pruebas de laboratorio constantes para monitorear riñones."
    ],
    "monitoreo_paciente": [
      "Función renal (BUN, Creatinina) - Crítico.",
      "Hemograma completo.",
      "Sitio de inyección (en aves)."
    ],
    "interferencia_laboratorio": [
      "Valores renales: Pueden aumentar falsamente si ocurre cristaluria."
    ],
    "parametros_dosificacion": {
      "aves": [
        {
          "indicacion": "Enfermedad de Pacheco (Extra-label)",
          "vias": ["PO", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 80,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas por 7-14 días", "intervalo_horas": 8 },
          "notas_tecnicas": "PO es preferible. IM puede causar necrosis severa."
        }
      ],
      "perro": [
        {
          "indicacion": "Herpesvirus canino neonatal (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 6 horas por 5 días", "intervalo_horas": 6 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Riesgo de muerte por toxicidad).",
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Deshidratación (aumenta riesgo renal).",
        "Ajustar dosis en insuficiencia renal."
      ],
      "efectos_adversos": [
        "Falla renal aguda.",
        "Tromboflebitis.",
        "Cambios encefalopáticos (raros).",
        "En caballos IV: temblores, sudoración y cólico."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea", "Letargo", "Cristaluria"],
        "tratamiento": "Hemodiálisis, descontaminación GI si >150 mg/kg."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aminoglucósidos", "efecto": "Aumenta potencial de nefrotoxicidad", "severidad": "Grave" },
        { "farmaco": "Zidovudina", "efecto": "Aumenta depresión del SNC", "severidad": "Moderada" },
        { "farmaco": "Meperidina", "efecto": "Aumenta riesgo de convulsiones", "severidad": "Grave" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Análogo de purina. Inhibe la replicación del ADN viral tras ser convertido por la timidina quinasa viral.",
      "farmacocinetica": "Baja biodisponibilidad oral en caballos (<4%). Cruza la placenta y entra en la leche materna."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "400 mg, 800 mg", "valor_concentracion": 400, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyección", "concentracion_texto": "50 mg/mL", "valor_concentracion": 50, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "afoxolaner",
    "meta_data": {
      "nombre_generico": "Afoxolaner",
      "nombres_comerciales": ["NexGard", "NexGard Spectra"],
      "grupo_farmacologico": "Ectoparasiticida, Isoxazolina",
      "status_regulatorio": "Aprobado FDA para perros (8 semanas+)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tableta masticable de administración mensual.",
        "Mata pulgas antes de que pongan huevos (inicio 4h).",
        "Advertencia de la FDA sobre efectos neurológicos en la clase isoxazolinas.",
        "Debe administrarse a perros de al menos 1.8 kg."
      ],
      "usos_principales": "Prevención de pulgas y garrapatas. Prevención de Borrelia burgdorferi. Uso extra-label para sarna democécica y sarcóptica."
    },
    "informacion_cliente": [
      "Se puede dar con o sin comida.",
      "Si el perro vomita antes de 2 horas tras la dosis, repetir dosis completa.",
      "Asegurarse de que el animal consuma la tableta entera.",
      "Mantener fuera del alcance de otros animales y niños."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica (conteo de parásitos).",
      "Signos neurológicos (temblores, ataxia, convulsiones).",
      "Estado de la piel."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias en el manual."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Pulgas y Garrapatas (Etiqueta FDA)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al mes", "intervalo_horas": 720 },
          "notas_tecnicas": "Usar según rangos de peso del fabricante (ej. 11.3 mg para 1.8-4.5 kg)."
        },
        {
          "indicacion": "Demodicosis generalizada (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 0, 14, 28 y 56", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Ninguna cuando se usa según la etiqueta."],
      "precauciones": [
        "Perros con historial de convulsiones o epilepsia.",
        "No evaluado en perras reproductoras, preñadas o lactantes."
      ],
      "efectos_adversos": [
        "Vómitos (4.1%).",
        "Piel seca/escamosa.",
        "Letargo.",
        "Ataxia y temblores musculares."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Sin efectos relevantes a 5x la dosis en estudios"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Vacunas / Antibióticos", "efecto": "Sin interacciones reportadas", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea canales de cloruro mediados por GABA en el SNC del parásito, causando hiperexcitación neuronal y muerte.",
      "farmacocinetica": "Biodisponibilidad ~75%. Vida media de eliminación prolongada (~15 días)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta masticable", "concentracion_texto": "11.3, 28.3, 68, 136 mg", "valor_concentracion": 11.3, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  },
  {
    "id": "aglepristona",
    "meta_data": {
      "nombre_generico": "Aglepristona",
      "nombres_comerciales": ["Alizin", "Alizine"],
      "grupo_farmacologico": "Antagonista del receptor de progesterona",
      "status_regulatorio": "No disponible en EE. UU.; Registrado en Europa/Reino Unido para perros."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "No debe ser manejado por mujeres embarazadas.",
        "Casi 100% efectivo para prevenir implantación en etapa temprana.",
        "Causa inflamación localizada en el sitio de inyección.",
        "Requiere inyección subcutánea estrictamente."
      ],
      "usos_principales": "Interrupción del embarazo en perras hasta los 45 días tras el apareamiento. Inducción del parto e inducción del celo. Tratamiento médico de piómetra."
    },
    "informacion_cliente": [
      "Debe ser administrado solo por profesionales veterinarios.",
      "Esencial evaluar a la perra 10 días tras el tratamiento.",
      "Puede presentarse una descarga vaginal marrón 24h antes de la expulsión fetal.",
      "Inflamación en el sitio de inyección es común."
    ],
    "monitoreo_paciente": [
      "Ecografía (para confirmar terminación del embarazo).",
      "Progesterona sérica.",
      "Signos de piómetra recurrente.",
      "Integridad del sitio de inyección (edema, ulceración)."
    ],
    "interferencia_laboratorio": [
      "Parámetros bioquímicos: Elevación transitoria de BUN, Creatinina y enzimas hepáticas (4.5% de casos).",
      "Hemograma: Variaciones en hematocrito y recuento de leucocitos."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Interrupción del embarazo (Etiqueta)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dos dosis separadas por 24 horas", "intervalo_horas": 24 },
          "notas_tecnicas": "Inyectar en la nuca. Máximo 5 mL por sitio de inyección. Masajear suavemente."
        },
        {
          "indicacion": "Piómetra (Extra-label)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 1, 2, 7, 14", "intervalo_horas": 0 }
        }
      ],
      "gato": [
        {
          "indicacion": "Hiperplasia mamaria fibroadenomatosa (Extra-label)",
          "vias": ["SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Días 1, 2 y 7", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad.",
        "Insuficiencia hepática o renal.",
        "Diabetes mellitus.",
        "Hipoadrenocorticismo (Addison)."
      ],
      "precauciones": [
        "Mujeres embarazadas: EVITAR CONTACTO (puede inducir aborto).",
        "Enfermedad cardiovascular o pulmonar obstructiva."
      ],
      "efectos_adversos": [
        "Dolor severo en sitio de inyección.",
        "Anorexia (25%).",
        "Congestión de glándulas mamarias.",
        "Vómitos y diarrea."
      ],
      "sobredosis": {
        "signos": ["Reacciones locales severas"],
        "tratamiento": "Soporte sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Glucocorticoides", "efecto": "Reduce la eficacia del tratamiento corticoide", "severidad": "Importante" },
        { "farmaco": "Ketoconazol", "efecto": "Puede aumentar niveles de aglepristona", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista esteroideo sintético. Compete con la progesterona en los receptores uterinos (3x más afinidad que la progesterona en perras).",
      "farmacocinetica": "Excreción muy lenta (80% en 24 días). 90% se elimina vía heces."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable (Aceite)", "concentracion_texto": "30 mg/mL", "valor_concentracion": 30, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "albendazol",
    "meta_data": {
      "nombre_generico": "Albendazol",
      "nombres_comerciales": ["Valbazen", "Albenza"],
      "grupo_farmacologico": "Antiparasitario, Benzimidazol",
      "status_regulatorio": "Aprobado FDA para ganado bovino, ovino y caprino (no lactantes)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Amplio espectro: nematodos, cestodos y trematodos (fasciola).",
        "NO se recomienda en perros ni gatos por toxicidad en médula ósea.",
        "Teratogénico: evitar en el primer tercio de la gestación.",
        "Potencialmente tóxico en palomas y conejos."
      ],
      "usos_principales": "Control de fasciola hepática adulta, tenias, gusanos pulmonares e intestinales en ganado. Uso extra-label en conejos para Encephalitozoon cuniculi."
    },
    "informacion_cliente": [
      "Agitar bien antes de usar.",
      "Cumplir con los tiempos de retiro en carne.",
      "No usar en animales destinados a producción de leche para consumo humano."
    ],
    "monitoreo_paciente": [
      "Eficacia (conteo de huevos en heces).",
      "Hemograma (vigilar neutropenia si se usa extra-label).",
      "Enzimas hepáticas (en tratamientos largos)."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias específicas en el manual."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Parásitos gastrointestinales y Fasciola (Etiqueta)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 },
          "notas_tecnicas": "Tiempo de retiro en carne: 27 días."
        }
      ],
      "ovino": [
        {
          "indicacion": "Parásitos gastrointestinales (Etiqueta)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 7.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }
        }
      ],
      "conejo": [
        {
          "indicacion": "Encephalitozoon cuniculi (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día por 10 días", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Primeros 45 días de gestación en vacas.",
        "Primeros 30 días de gestación en ovejas/cabras.",
        "Ganado lechero en edad reproductiva.",
        "Falla hepática."
      ],
      "precauciones": [
        "Aves (palomas): Muy sensibles, riesgo de necrosis intestinal.",
        "Conejos: Usar con extrema precaución."
      ],
      "efectos_adversos": [
        "Neutropenia y anemia aplásica (perros/gatos).",
        "Letargo y anorexia.",
        "Muerte fetal o malformaciones."
      ],
      "sobredosis": {
        "signos": ["Diarrea severa", "Falla multiorgánica", "Muerte"],
        "tratamiento": "Descontaminación GI y soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Cimetidina", "efecto": "Aumenta niveles de albendazol en bilis", "severidad": "Leve" },
        { "farmaco": "Dexametasona", "efecto": "Aumenta concentraciones séricas de albendazol", "severidad": "Moderada" },
        { "farmaco": "Teofilina", "efecto": "Puede disminuir niveles de teofilina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la polimerización de la tubulina, interrumpiendo el transporte intracelular de los parásitos.",
      "farmacocinetica": "Metabolismo rápido a albendazol sulfóxido (activo). Pico plasmático 11h en vacas, 24h en ovejas."
    },
    "presentaciones_comerciales": [
      { "tipo": "Suspensión oral", "concentracion_texto": "113.6 mg/mL", "valor_concentracion": 113.6, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "albumina_humana",
    "meta_data": {
      "nombre_generico": "Albúmina Humana",
      "nombres_comerciales": [
        "Albuminar",
        "Albuked",
        "Albutein",
        "Buminate",
        "Plasbumin"
      ],
      "grupo_farmacologico": "Coloide sanguíneo / Expansor de volumen",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado por la FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Utilizada para el aumento agudo del volumen plasmático y soporte de presión oncótica.",
        "Alto riesgo de reacciones de hipersensibilidad (tipo I y tipo III) en perros sanos.",
        "Debe reservarse para pacientes críticamente enfermos con hipoalbuminemia severa que no responden a cristaloides.",
        "La albúmina humana al 25% es muy hiperoncótica; expande el volumen intravascular hasta 5 veces el volumen infundido."
      ],
      "usos_principales": "Tratamiento de hipoalbuminemia severa y shock hipovolémico en pacientes que no responden a otras terapias de fluidos."
    },
    "informacion_cliente": [
      "Es un producto derivado de sangre humana.",
      "El paciente debe permanecer hospitalizado bajo vigilancia constante.",
      "Existe un riesgo de reacciones alérgicas graves incluso días después de la administración."
    ],
    "monitoreo_paciente": [
      "Presión arterial y frecuencia cardiaca.",
      "Estado de hidratación y producción de orina.",
      "Albúmina sérica y proteínas totales.",
      "Signos de sobrecarga de fluidos (edema pulmonar).",
      "Signos de anafilaxia (urticaria, vómitos, colapso)."
    ],
    "interferencia_laboratorio": [
      "Albúmina sérica: Los métodos de medición (verde de bromocresol) pueden sobreestimar o subestimar la albúmina humana en suero animal."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Hipoalbuminemia crítica / Shock (Extra-label)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 0.25,
            "dosis_max": 5,
            "unidad_calculo": "mL/kg (solución al 25%)"
          },
          "frecuencia": {
            "texto_ui": "Infusión lenta (4-6 horas)",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "No exceder 2 mL/min. En shock se puede administrar más rápido, pero con monitoreo estrecho."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Anemia severa.",
        "Falla cardiaca con sobrecarga de volumen.",
        "Hipersensibilidad conocida a la albúmina humana."
      ],
      "precauciones": [
        "Riesgo de vasculitis y artritis inmunomediada 8-15 días post-infusión.",
        "Usar con precaución en pacientes con coagulopatías."
      ],
      "efectos_adversos": [
        "Anafilaxia (vómito, diarrea, disnea).",
        "Edema facial.",
        "Hipotensión.",
        "Reacciones de fase tardía (fiebre, cojera, proteinuria)."
      ],
      "sobredosis": {
        "signos": [
          "Hipervolemia",
          "Edema pulmonar"
        ],
        "tratamiento": "Suspender infusión inmediatamente y administrar diuréticos (furosemida)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Soluciones de alimentación parenteral",
          "efecto": "No mezclar en la misma línea por riesgo de precipitación",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Provee el 70-80% de la presión oncótica coloidal del plasma, moviendo fluido del espacio intersticial al vascular.",
      "farmacocinetica": "Vida media en perros críticos es mucho más corta que en humanos (horas vs días)."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial para infusión",
        "concentracion_texto": "5% (50 mg/mL) y 25% (250 mg/mL)",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "alendronato_sodico",
    "meta_data": {
      "nombre_generico": "Alendronato Sódico",
      "nombres_comerciales": ["Fosamax"],
      "grupo_farmacologico": "Bifosfonato",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibidor de la resorción ósea mediada por osteoclastos.",
        "Extremadamente irritante para el esófago.",
        "Debe administrarse con el estómago vacío y mantener al animal en pie tras la dosis.",
        "Baja biodisponibilidad oral (<1%)."
      ],
      "usos_principales": "Tratamiento de hipercalcemia idiopática en gatos y manejo adyuvante de osteosarcoma en perros."
    },
    "informacion_cliente": [
      "Administrar por la mañana con el estómago vacío.",
      "Seguir la tableta con al menos 5-10 mL de agua para asegurar que llegue al estómago.",
      "NO permitir que el animal se acueste durante 30 minutos después de la dosis para evitar quemaduras esofágicas.",
      "No dar comida ni otros medicamentos por al menos 30-60 min."
    ],
    "monitoreo_paciente": [
      "Calcio sérico (Ionizado preferiblemente).",
      "Función renal (BUN, Creatinina).",
      "Signos de esofagitis (regurgitación, inapetencia)."
    ],
    "interferencia_laboratorio": [
      "Calcio y Fosfatos: Disminución de niveles séricos debido al efecto farmacológico."
    ],
    "parametros_dosificacion": {
      "gato": [
        {
          "indicacion": "Hipercalcemia idiopática (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 10,
            "dosis_min": 5,
            "dosis_max": 30,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez por semana", "intervalo_horas": 168 },
          "notas_tecnicas": "Ajustar dosis según niveles de calcio ionizado."
        }
      ],
      "perro": [
        {
          "indicacion": "Manejo de osteosarcoma (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Anormalidades esofágicas (megaesófago, estenosis).",
        "Incapacidad para mantenerse erguido por 30 min.",
        "Hipocalcemia.",
        "Falla renal severa."
      ],
      "precauciones": [
        "Gastritis o úlceras activas.",
        "Deficiencia de Vitamina D."
      ],
      "efectos_adversos": [
        "Esofagitis severa / Estenosis esofágica.",
        "Vómitos y diarrea.",
        "Hipocalcemia e hipofosfemia."
      ],
      "sobredosis": {
        "signos": ["Hipocalcemia", "Malestar GI severo"],
        "tratamiento": "Administrar leche o antiácidos para fijar el fármaco. NO inducir el vómito."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Antiácidos / Calcio / Hierro", "efecto": "Interfieren drásticamente con la absorción", "severidad": "Grave" },
        { "farmaco": "AINEs (NSAIDs)", "efecto": "Aumentan riesgo de úlcera gástrica", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une a los cristales de hidroxiapatita en el hueso; cuando los osteoclastos intentan reabsorber el hueso, el alendronato inhibe su actividad y promueve su apoptosis.",
      "farmacocinetica": "Se almacena en el hueso por años."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "5, 10, 35, 70 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "alfaxalona",
    "meta_data": {
      "nombre_generico": "Alfaxalona",
      "nombres_comerciales": ["Alfaxan-Multidose"],
      "grupo_farmacologico": "Anestésico General / Neuroesteroide",
      "status_regulatorio": "Aprobado FDA (Perros y Gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inductor anestésico con amplio margen de seguridad cardiovascular.",
        "Puede causar apnea si se administra muy rápido IV.",
        "La recuperación puede ser agitada si el ambiente no es tranquilo.",
        "A diferencia de la formulación antigua (Saffan), no libera histamina."
      ],
      "usos_principales": "Inducción y mantenimiento de la anestesia. Sedación profunda (vía IM en gatos)."
    },
    "informacion_cliente": [
      "El animal estará bajo anestesia profesional.",
      "Tras la cirugía, la mascota debe estar en un lugar oscuro y silencioso.",
      "Es posible que presente movimientos involuntarios durante la recuperación."
    ],
    "monitoreo_paciente": [
      "Frecuencia respiratoria y EtCO2 (Riesgo de apnea).",
      "Saturación de oxígeno (SpO2).",
      "Presión arterial.",
      "Reflejos palpebrales y profundidad anestésica."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias significativas en pruebas químicas estándar."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inducción anestésica (Sin premedicación)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3,
            "dosis_min": 1.5,
            "dosis_max": 4.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única (titular a efecto)", "intervalo_horas": 0 },
          "notas_tecnicas": "Administrar 1/4 de la dosis cada 15 segundos hasta lograr intubación."
        }
      ],
      "gato": [
        {
          "indicacion": "Sedación profunda (Extra-label)",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 2,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad conocida."],
      "precauciones": [
        "Pacientes con enfermedad renal o hepática severa (metabolismo alterado).",
        "Cesáreas (cruza la placenta)."
      ],
      "efectos_adversos": [
        "Apnea post-inducción.",
        "Hipotensión (especialmente si se asocia con isoflurano).",
        "Temblores musculares durante la recuperación.",
        "Hipersensibilidad a estímulos auditivos."
      ],
      "sobredosis": {
        "signos": ["Depresión cardiorrespiratoria severa"],
        "tratamiento": "Ventilación mecánica con oxígeno y soporte de presión arterial."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Benzodiacepinas / Opioides", "efecto": "Reducen la dosis necesaria de alfaxalona", "severidad": "Moderada" },
        { "farmaco": "Anestésicos inhalados", "efecto": "Efecto aditivo depresor", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Modula el transporte de iones cloruro a través de la membrana celular al unirse a los receptores GABA-A.",
      "farmacocinetica": "Metabolismo hepático rápido. Vida media en perros ~25 min, gatos ~45 min."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "10 mg/mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "alfentanilo",
    "meta_data": {
      "nombre_generico": "Alfentanilo HCl",
      "nombres_comerciales": ["Alfenta"],
      "grupo_farmacologico": "Analgésico Opioide (Agonista Mu)",
      "status_regulatorio": "Uso extra-label; Sustancia Controlada Clase II."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Opioide de acción ultracorta.",
        "1/4 a 1/10 de la potencia del fentanilo.",
        "Inicio de acción casi inmediato (menos de 1 min).",
        "Ideal para procedimientos dolorosos muy breves o infusiones continuas."
      ],
      "usos_principales": "Analgesia intraoperatoria y componente de protocolos de inducción anestésica en perros."
    },
    "informacion_cliente": [
      "Medicamento de uso estrictamente intrahospitalario.",
      "Puede causar somnolencia profunda y respiración lenta."
    ],
    "monitoreo_paciente": [
      "Frecuencia respiratoria (riesgo alto de apnea).",
      "Saturación de oxígeno.",
      "Frecuencia cardiaca (puede causar bradicardia severa)."
    ],
    "interferencia_laboratorio": [
      "Amilasa/Lipasa: Puede causar aumentos transitorios por constricción del esfínter de Oddi."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgesia intraoperatoria (Extra-label)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 0.01,
            "dosis_max": 0.02,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Bolo inicial seguido de CRI", "intervalo_horas": 0 },
          "notas_tecnicas": "CRI: 0.5-2 mcg/kg/min."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a los opioides.",
        "Depresión respiratoria severa."
      ],
      "precauciones": [
        "Trauma craneal / Presión intracraneal elevada.",
        "Enfermedad hepática (metabolismo reducido)."
      ],
      "efectos_adversos": [
        "Bradicardia.",
        "Apnea.",
        "Rigidez muscular (dosis altas).",
        "Hipotermia."
      ],
      "sobredosis": {
        "signos": ["Paro respiratorio", "Miosis extrema", "Bradicardia"],
        "tratamiento": "Naloxona (antagonista) y ventilación asistida."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Eritromicina", "efecto": "Inhibe el metabolismo del alfentanilo", "severidad": "Moderada" },
        { "farmaco": "Anestésicos generales", "efecto": "Sinergia en depresión respiratoria", "severidad": "Grave" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista puro de los receptores opioides mu en el SNC.",
      "farmacocinetica": "Vida media extremadamente corta (~12-15 min en perros)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "500 mcg/mL", "valor_concentracion": 0.5, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
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
  },
  {
    "id": "alprazolam",
    "meta_data": {
      "nombre_generico": "Alprazolam",
      "nombres_comerciales": ["Xanax", "Niravam"],
      "grupo_farmacologico": "Benzodiacepina",
      "status_regulatorio": "Uso extra-label; Sustancia Controlada Clase IV."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Potente ansiolítico, más potente que el diazepam.",
        "Eficaz para miedos situacionales (tormentas, fuegos artificiales).",
        "Puede causar reacciones paradójicas (excitación/agresión).",
        "Debe administrarse 30-60 min antes del evento estresante."
      ],
      "usos_principales": "Tratamiento de fobias por ruido, ansiedad por separación y estimulante del apetito en gatos (raro)."
    },
    "informacion_cliente": [
      "Probar la dosis en un ambiente tranquilo antes del evento estresante.",
      "Puede causar sedación profunda o tambaleo (ataxia).",
      "No suspender abruptamente tras uso crónico (riesgo de convulsiones)."
    ],
    "monitoreo_paciente": [
      "Nivel de ansiedad/sedación.",
      "Enzimas hepáticas (en gatos, riesgo de necrosis hepática con benzodiacepinas, aunque menor que con diazepam).",
      "Cambios de conducta."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias comunes en las pruebas de rutina."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Fobias por ruido / Pánico",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 0.02,
            "dosis_max": 0.1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Antes del evento, repetir cada 6-12 horas si es necesario", "intervalo_horas": 6 }
        }
      ],
      "gato": [
        {
          "indicacion": "Ansiedad / Marcaje urinario",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_min": 0.125,
            "dosis_max": 0.25,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a benzodiacepinas.",
        "Glaucoma de ángulo cerrado.",
        "Enfermedad hepática o renal severa."
      ],
      "precauciones": [
        "Animales de trabajo/servicio (sedación).",
        "Animales agresivos (desinhibición de la agresión)."
      ],
      "efectos_adversos": [
        "Sedación y ataxia.",
        "Aumento del apetito.",
        "Excitación paradójica.",
        "Dependencia física (tras uso prolongado)."
      ],
      "sobredosis": {
        "signos": ["Depresión severa del SNC", "Coma"],
        "tratamiento": "Flumazenil (antídoto)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Ketoconazol / Itraconazol", "efecto": "Inhiben el metabolismo del alprazolam (aumenta sedación)", "severidad": "Grave" },
        { "farmaco": "Antihistamínicos / Opioides", "efecto": "Aumentan depresión del SNC", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Potencia los efectos inhibitorios del GABA en el SNC.",
      "farmacocinetica": "Absorción rápida. Vida media en perros ~2-4 h."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "0.25, 0.5, 1, 2 mg", "valor_concentracion": 0.25, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "hidroxido_aluminio",
    "meta_data": {
      "nombre_generico": "Hidróxido de Aluminio",
      "nombres_comerciales": ["Amphojel", "Alternagel"],
      "grupo_farmacologico": "Quelante de Fosfatos / Antiácido",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Uso principal en veterinaria es como quelante de fósforo en enfermedad renal.",
        "Debe mezclarse con la comida para que sea efectivo.",
        "El estreñimiento es el efecto secundario más común.",
        "Menos efectivo como antiácido en rumiantes."
      ],
      "usos_principales": "Control de hiperfosfemia en enfermedad renal crónica (perros y gatos) y como antiácido gástrico."
    },
    "informacion_cliente": [
      "Mezclar muy bien con la comida; el sabor puede ser rechazado por gatos.",
      "Si el animal se estriñe mucho, contactar al veterinario.",
      "Separar de otros medicamentos por al menos 2 horas."
    ],
    "monitoreo_paciente": [
      "Fósforo sérico (cada 2-4 semanas al inicio).",
      "Calcio sérico.",
      "Estado de las heces."
    ],
    "interferencia_laboratorio": [
      "Fósforo: Disminución de niveles séricos (efecto deseado)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Hiperfosfemia (IRC)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 30,
            "dosis_max": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en cada comida", "intervalo_horas": 8 },
          "notas_tecnicas": "Ajustar dosis según niveles de fósforo sérico."
        }
      ],
      "gato": [
        {
          "indicacion": "Hiperfosfemia (IRC)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 30,
            "dosis_max": 90,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en cada comida", "intervalo_horas": 8 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Obstrucción intestinal severa."],
      "precauciones": [
        "Pacientes con enfermedad renal severa (riesgo de acumulación de aluminio).",
        "Hipoestimulación gástrica."
      ],
      "efectos_adversos": [
        "Estreñimiento.",
        "Hipofosfemia (si se sobre-dosifica).",
        "Toxicidad por aluminio (rara, signos neurológicos)."
      ],
      "sobredosis": {
        "signos": ["Estreñimiento severo", "Hipofosfemia"],
        "tratamiento": "Laxantes y ajuste de dosis."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Tetraciclinas / Fluoroquinolonas / Digoxina", "efecto": "Reduce drásticamente su absorción", "severidad": "Importante" },
        { "farmaco": "Prednisona", "efecto": "Disminuye niveles de prednisona", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une al fósforo de la dieta en el lumen intestinal para formar fosfato de aluminio insoluble, que se excreta en heces.",
      "farmacocinetica": "Acción local en el intestino. Pequeñas cantidades de aluminio se absorben y se excretan vía renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula / Polvo", "concentracion_texto": "300, 500, 600 mg", "valor_concentracion": 300, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Suspensión oral", "concentracion_texto": "320 mg/5mL", "valor_concentracion": 64, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "amantadina",
    "meta_data": {
      "nombre_generico": "Amantadina HCl",
      "nombres_comerciales": ["Symmetrel"],
      "grupo_farmacologico": "Antagonista del receptor NMDA / Antiviral",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usada como adyuvante para dolor crónico neuropático.",
        "Ayuda a prevenir el fenómeno de 'wind-up' (sensibilización central).",
        "Rara vez es efectiva por sí sola; suele combinarse con AINEs o gabapentina.",
        "Uso prohibido en aves de corral por ser un antiviral."
      ],
      "usos_principales": "Dolor crónico por osteoartritis, dolor neuropático y sensibilización central en perros y gatos."
    },
    "informacion_cliente": [
      "Puede causar agitación o flatulencia al inicio.",
      "Los efectos analgésicos pueden tardar semanas en ser evidentes.",
      "No usar en aves de compañía sin indicación específica."
    ],
    "monitoreo_paciente": [
      "Niveles de dolor (escalas de calidad de vida).",
      "Función renal (especialmente en pacientes geriátricos).",
      "Signos neurológicos (agitación)."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias significativas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Dolor crónico adyuvante",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_min": 3,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 24 horas (o cada 12h si el dolor es severo)", "intervalo_horas": 24 }
        }
      ],
      "gato": [
        {
          "indicacion": "Dolor crónico adyuvante",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad conocida."],
      "precauciones": [
        "Enfermedad renal (requiere ajuste de dosis).",
        "Trastornos convulsivos.",
        "Insuficiencia cardiaca congestiva."
      ],
      "efectos_adversos": [
        "Agitación / Nerviosismo.",
        "Flatulencia y diarrea suave.",
        "Edema periférico (raro)."
      ],
      "sobredosis": {
        "signos": ["Hiperexcitabilidad", "Temblores", "Ataxia", "Vómitos"],
        "tratamiento": "Soporte, control de agitación con benzodiacepinas. No hay antídoto."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Anticolinérgicos", "efecto": "Potencia efectos secundarios como boca seca y taquicardia", "severidad": "Moderada" },
        { "farmaco": "Trimetoprim/Sulfa", "efecto": "Puede disminuir la excreción renal de amantadina", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea los receptores NMDA en el sistema nervioso central, impidiendo la sensibilización de las neuronas del asta dorsal a los estímulos dolorosos.",
      "farmacocinetica": "Excreción renal casi total sin cambios."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula / Tableta", "concentracion_texto": "100 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "50 mg/5mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": false }
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
    "monitoreo_paciente": [
    "Frecuencia respiratoria y esfuerzo.",
    "Frecuencia cardiaca (vigilar taquicardia).",
    "Potasio sérico (riesgo de hipopotasemia con dosis altas)."
    ],
    "interferencia_laboratorio": [
    "Potasio: Puede disminuir artificialmente los niveles séricos.",
    "Glucosa: Puede elevar ligeramente la glucemia."
    ],
    "parametros_dosificacion": {
    "gato": [
    {
    "indicacion": "Asma felina (Crisis aguda)",
    "vias": ["Inhalación (MDI)"],
    "math": {
    "tipo_calculo": "fija",
    "dosis_recomendada": 1,
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
    "unidad_calculo": "mcg/kg"
    },
    "frecuencia": { "texto_ui": "Cada 1-2 horas en crisis", "intervalo_horas": 1 }
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
    "tratamiento": "Bloqueadores beta (propranolol) si la taquicardia es severa, suplementación con potasio."
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Bloqueadores Beta (Propranolol)", "efecto": "Antagonismo mutuo (anula el efecto del albuterol)", "severidad": "Grave" },
    { "farmaco": "Digoxina", "efecto": "Riesgo de arritmias por hipopotasemia", "severidad": "Moderada" },
    { "farmaco": "Anestésicos halogenados", "efecto": "Aumenta riesgo de arritmias ventriculares", "severidad": "Grave" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Estimula receptores beta-2 adrenérgicos en el músculo liso bronquial, activando la adenilciclasa y aumentando el AMP cíclico (relajación).",
    "farmacocinetica": "Inicio por inhalación: 5-15 min. Duración: 3-6 h."
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
    "monitoreo_paciente": [
    "Actividad estral (ecografía, comportamiento).",
    "Estado uterino.",
    "Niveles de progesterona (si se usa para soporte de preñez)."
    ],
    "interferencia_laboratorio": [
    "No se reportan interferencias en pruebas de laboratorio estándar."
    ],
    "parametros_dosificacion": {
    "caballo": [
    {
    "indicacion": "Supresión del estro",
    "vias": ["PO"],
    "math": {
    "tipo_calculo": "mg_kg",
    "dosis_recomendada": 0.044,
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
    "tratamiento": "Soporte."
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Rifampicina", "efecto": "Puede disminuir la eficacia del altrenogest", "severidad": "Leve" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Produce efectos similares a la progesterona natural, inhibiendo la liberación de gonadotropinas (LH/FSH) de la pituitaria.",
    "farmacocinetica": "Se une a proteínas plasmáticas. Metabolismo hepático."
    },
    "presentaciones_comerciales": [
    { "tipo": "Solución oral", "concentracion_texto": "2.2 mg/mL (0.22%)", "valor_concentracion": 2.2, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "amikacina_sulfato",
    "meta_data": {
      "nombre_generico": "Amikacina Sulfato",
      "nombres_comerciales": ["Amiglyde-V", "Amikin"],
      "grupo_farmacologico": "Antibiótico Aminoglucósido",
      "status_regulatorio": "Aprobado FDA (Perros y Caballos); Uso extra-label en gatos y exóticos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antibiótico potente para infecciones graves por bacterias Gram-negativas.",
        "Altamente nefrotóxico (daña riñones) y ototóxico (daña oído).",
        "La dosificación una vez al día es preferida para minimizar toxicidad en riñones.",
        "Es ineficaz contra bacterias anaerobias.",
        "A menudo se combina con beta-lactámicos para ampliar espectro."
      ],
      "usos_principales": "Tratamiento de infecciones graves causadas por bacilos Gram-negativos (E. coli, Pseudomonas, Klebsiella) y algunas infecciones estafilocócicas."
    },
    "informacion_cliente": [
      "Este medicamento se administra generalmente mediante inyección en el hospital.",
      "El animal debe estar bien hidratado todo el tiempo.",
      "Notificar inmediatamente si el animal deja de orinar o parece sordo/mareado."
    ],
    "monitoreo_paciente": [
      "Análisis de orina (cilindros urinarios son el primer signo de toxicidad).",
      "BUN y Creatinina (función renal).",
      "Estado de hidratación.",
      "Capacidad auditiva y equilibrio (signos vestibulares)."
    ],
    "interferencia_laboratorio": [
      "Enzimas hepáticas: Puede causar elevaciones transitorias.",
      "BUN/Creatinina: Aumentan si hay nefrotoxicidad."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles (Gram -)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "dosis_min": 15,
            "dosis_max": 30,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día (SID)", "intervalo_horas": 24 },
          "notas_tecnicas": "La administración SID (una vez al día) reduce la acumulación en la corteza renal. Administrar IV lento."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles (Gram -)",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Los gatos son muy sensibles a la toxicidad vestibular."
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones uterinas / Bacteriemia en potros",
          "vias": ["IV", "IM", "Intrauterina"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 21,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "En potros neonatos, monitorear niveles séricos es crucial (TDM)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Insuficiencia renal preexistente (a menos que sea la única opción para salvar la vida).",
        "Deshidratación severa."
      ],
      "precauciones": [
        "Animales geriátricos o neonatos.",
        "Uso concurrente con otros fármacos nefrotóxicos o diuréticos potentes."
      ],
      "efectos_adversos": [
        "Nefrotoxicidad (necrosis tubular aguda).",
        "Ototoxicidad (sordera o pérdida de equilibrio).",
        "Bloqueo neuromuscular (raro, en anestesia)."
      ],
      "sobredosis": {
        "signos": ["Falla renal aguda", "Sordera", "Ataxia"],
        "tratamiento": "Diálisis peritoneal o hemodiálisis. Fluidoterapia agresiva."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Furosemida", "efecto": "Aumenta riesgo de ototoxicidad", "severidad": "Grave" },
        { "farmaco": "AINEs (Carprofeno/Meloxicam)", "efecto": "Aumenta riesgo de nefrotoxicidad", "severidad": "Importante" },
        { "farmaco": "Anestésicos generales", "efecto": "Potencia bloqueo neuromuscular", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une irreversiblemente a la subunidad 30S del ribosoma bacteriano, inhibiendo la síntesis de proteínas. Es bactericida dependiente de la concentración.",
      "farmacocinetica": "No se absorbe oralmente. Se excreta inalterada por filtración glomerular. Vida media corta (~1-2h) pero efecto post-antibiótico prolongado."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable", "concentracion_texto": "50 mg/mL, 250 mg/mL", "valor_concentracion": 250, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "acido_aminocaproico",
    "meta_data": {
      "nombre_generico": "Ácido Aminocaproico",
      "nombres_comerciales": ["Amicar"],
      "grupo_farmacologico": "Agente Antifibrinolítico / Hemostático",
      "status_regulatorio": "Uso extra-label en veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibe la fibrinólisis (estabiliza los coágulos evitando que se rompan).",
        "Uso común en Galgos (Greyhounds) para prevenir sangrado post-quirúrgico.",
        "Tratamiento de mielopatía degenerativa en Pastores Alemanes (uso controversial/anecdótico).",
        "Eficaz en hemorragia inducida por hiperfibrinólisis."
      ],
      "usos_principales": "Prevención de hemorragia postoperatoria en galgos, tratamiento de trombocitopenia inmunomediada severa, hemofilia y hematuria renal."
    },
    "informacion_cliente": [
      "Puede causar malestar estomacal.",
      "En galgos, se inicia el día de la cirugía y se continúa por unos días.",
      "Se administra frecuentemente (3 veces al día)."
    ],
    "monitoreo_paciente": [
      "Signos de sangrado o trombosis.",
      "Potasio sérico (puede elevarse).",
      "Presión arterial (si se da IV rápido)."
    ],
    "interferencia_laboratorio": [
      "Potasio: Hiperpotasemia posible (raro).",
      "Pruebas de coagulación: No altera PT/PTT, pero estabiliza el coágulo."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Prevención sangrado en Galgos (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 500,
            "dosis_min": 500,
            "dosis_max": 1000,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas por 3 días", "intervalo_horas": 8 },
          "notas_tecnicas": "Comenzar la mañana de la cirugía. Dosis fija de 500-1000 mg por perro, no por kg."
        },
        {
          "indicacion": "Mielopatía degenerativa (Anecdótico)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 500,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": { "texto_ui": "Cada 8 horas", "intervalo_horas": 8 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Coagulación intravascular diseminada (CID) activa (riesgo de trombosis fatal).",
        "Hematuria del tracto superior (puede causar obstrucción por coágulos)."
      ],
      "precauciones": [
        "Enfermedad cardiaca o hepática.",
        "Riesgo de hiperpotasemia en insuficiencia renal."
      ],
      "efectos_adversos": [
        "Malestar gastrointestinal.",
        "Trombosis.",
        "Hipotensión/Bradicardia (si IV es muy rápido).",
        "Miopatía (debilidad muscular) en uso prolongado."
      ],
      "sobredosis": {
        "signos": ["Hipotensión", "Convulsiones (raro)", "Falla renal"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Estrógenos", "efecto": "Aumenta estado de hipercoagulabilidad", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente la activación del plasminógeno (evita que se convierta en plasmina), impidiendo así la disolución de la fibrina (el coágulo).",
      "farmacocinetica": "Buena absorción oral. Excreción renal rápida."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "500 mg, 1000 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "250 mg/mL", "valor_concentracion": 250, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "aminofilina",
    "meta_data": {
      "nombre_generico": "Aminofilina",
      "nombres_comerciales": ["Phyllocontin", "Truphylline"],
      "grupo_farmacologico": "Broncodilatador (Metilxantina)",
      "status_regulatorio": "Uso extra-label; Aprobado FDA para humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Es un complejo de Teofilina + Etilendiamina (para hacerlo soluble en agua).",
        "Libera ~80% de teofilina activa.",
        "Broncodilatador con efectos diuréticos y estimulantes cardiacos leves.",
        "Tiene un índice terapéutico estrecho (dosis tóxica cerca de la terapéutica)."
      ],
      "usos_principales": "Broncodilatación en asma, bronquitis crónica, colapso traqueal y edema pulmonar cardiogénico (insuficiencia cardiaca izquierda)."
    },
    "informacion_cliente": [
      "Puede causar excitación nerviosa, insomnio o aumento de micción.",
      "Dar con comida si causa vómitos.",
      "No cambiar de marca sin consultar al veterinario (la absorción varía)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca y respiratoria.",
      "Signos de toxicidad (vómitos, temblores, taquicardia).",
      "Niveles séricos de teofilina en terapias largas."
    ],
    "interferencia_laboratorio": [
      "Ácido úrico: Falsa elevación.",
      "Catecolaminas urinarias: Aumento."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Broncodilatación",
          "vias": ["PO", "IV lento"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 5,
            "dosis_max": 11,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 8-12 horas", "intervalo_horas": 8 },
          "notas_tecnicas": "La dosis IV debe diluirse y pasarse muy lento para evitar arritmias fatales."
        }
      ],
      "gato": [
        {
          "indicacion": "Asma felina / Bronquitis",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 6.6,
            "dosis_min": 4,
            "dosis_max": 6.6,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a xantinas (chocolate/cafeína).",
        "Arritmias cardiacas severas no controladas."
      ],
      "precauciones": [
        "Enfermedad hepática (reduce metabolismo).",
        "Úlcera gástrica.",
        "Hipertiroidismo."
      ],
      "efectos_adversos": [
        "Gastrointestinales: Vómitos, diarrea, anorexia.",
        "SNC: Excitación, temblores, convulsiones (en sobredosis).",
        "Cardiacos: Taquicardia sinusal, arritmias.",
        "Renal: Poliuria (aumento de orina)."
      ],
      "sobredosis": {
        "signos": ["Convulsiones refractarias", "Taquicardia severa"],
        "tratamiento": "Carbón activado, control de convulsiones (Diazepam), control de arritmias (Lidocaína/Beta-bloqueadores)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Fluoroquinolonas (Enrofloxacina)", "efecto": "Aumentan drásticamente los niveles de teofilina (riesgo de toxicidad)", "severidad": "Grave" },
        { "farmaco": "Fenobarbital", "efecto": "Disminuye los niveles de teofilina (falla terapéutica)", "severidad": "Moderada" },
        { "farmaco": "Cimetidina", "efecto": "Aumenta toxicidad de aminofilina", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de la fosfodiesterasa (aumenta AMPc), antagonismo de adenosina y alteración del calcio intracelular, resultando en relajación del músculo liso bronquial.",
      "farmacocinetica": "Metabolismo hepático extenso. Vida media varía mucho entre individuos."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "100 mg, 200 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Inyectable", "concentracion_texto": "25 mg/mL", "valor_concentracion": 25, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "amiodarona_hcl",
    "meta_data": {
      "nombre_generico": "Amiodarona HCl",
      "nombres_comerciales": ["Cordarone", "Pacerone"],
      "grupo_farmacologico": "Antiarrítmico Clase III",
      "status_regulatorio": "Uso extra-label en perros y caballos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Utilizado para arritmias ventriculares y supraventriculares refractarias a otros fármacos.",
        "Posee características de las 4 clases de antiarrítmicos.",
        "Vida media extremadamente larga y acumulación en tejidos.",
        "Efectos adversos serios (hígado, tiroides, anafilaxia) son comunes."
      ],
      "usos_principales": "Cardiomiopatía dilatada en Dobermans, fibrilación auricular en caballos y taquicardia ventricular maligna."
    },
    "informacion_cliente": [
      "Requiere monitoreo frecuente del hígado y tiroides.",
      "Puede causar que la piel se vuelva fotosensible.",
      "Efectos adversos como falta de apetito o vómitos deben reportarse de inmediato."
    ],
    "monitoreo_paciente": [
      "ECG continuo durante inicio de terapia.",
      "Enzimas hepáticas (ALT/ALP) - Riesgo alto de hepatotoxicidad.",
      "Panel tiroideo (T4).",
      "Presión arterial."
    ],
    "interferencia_laboratorio": [
      "T4/T3: Puede alterar pruebas de función tiroidea (hipotiroidismo o hipertiroidismo).",
      "Enzimas hepáticas: Elevación frecuente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Arritmias ventriculares refractarias",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas por 7 días (Carga), luego reducir", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis de mantenimiento usual: 5-7.5 mg/kg cada 24h. La forma IV puede causar anafilaxia severa en perros (por el vehículo Polisorbato 80)."
        }
      ],
      "caballo": [
        {
          "indicacion": "Fibrilación auricular",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 5,
            "dosis_min": 5,
            "dosis_max": 7,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Infusión lenta", "intervalo_horas": 0 },
          "notas_tecnicas": "Administrar diluido en dextrosa al 5%. Riesgo de flebitis."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Bloqueo AV de segundo o tercer grado.",
        "Bradicardia sinusal severa.",
        "Disfunción tiroidea severa.",
        "Hipersensibilidad al yodo."
      ],
      "precauciones": [
        "Enfermedad hepática.",
        "El inyectable IV en perros causa reacción anafilactoide (hipotensión masiva) - USAR CON EXTREMA PRECAUCIÓN."
      ],
      "efectos_adversos": [
        "Hepatopatía (reversible si se detecta temprano).",
        "Hipotiroidismo (común en tratamientos largos).",
        "Anorexia y vómitos.",
        "Neutropenia/Trombocitopenia.",
        "Fibrosis pulmonar (reportado en humanos, posible en animales)."
      ],
      "sobredosis": {
        "signos": ["Bradicardia", "Bloqueo AV", "Hipotensión"],
        "tratamiento": "Agonistas beta-adrenérgicos, marcapasos temporal, colestiramina para aumentar excreción."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Digoxina", "efecto": "Aumenta niveles de digoxina (reducir dosis de digoxina al 50%)", "severidad": "Grave" },
        { "farmaco": "Warfarina", "efecto": "Aumenta efecto anticoagulante", "severidad": "Importante" },
        { "farmaco": "Lidocaína", "efecto": "Riesgo de convulsiones", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Prolonga la duración del potencial de acción y el periodo refractario (bloqueo canales de K+). También bloquea canales de Na+, Ca++ y receptores beta.",
      "farmacocinetica": "Absorción lenta. Se acumula en grasa, hígado y pulmones. Vida media de eliminación de días a semanas."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "100 mg, 200 mg, 400 mg", "valor_concentracion": 200, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "amitriptilina_hcl",
    "meta_data": {
      "nombre_generico": "Amitriptilina HCl",
      "nombres_comerciales": ["Elavil"],
      "grupo_farmacologico": "Antidepresivo Tricíclico (TCA)",
      "status_regulatorio": "Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Usado para problemas de comportamiento (ansiedad por separación) y dolor neuropático.",
        "Efectos anticolinérgicos (boca seca, retención orina) son comunes.",
        "Utilizado en gatos para cistitis intersticial idiopática.",
        "No usar con collares de amitraz (riesgo de síndrome serotoninérgico)."
      ],
      "usos_principales": "Ansiedad por separación, marcaje urinario, automutilación psicógena, dolor crónico neuropático y cistitis idiopática felina (FLUTD)."
    },
    "informacion_cliente": [
      "Puede tomar semanas ver el efecto completo en comportamiento.",
      "Puede causar somnolencia.",
      "No dejar de dar abruptamente.",
      "Mantener alejado de otras mascotas (las pastillas son tóxicas en sobredosis)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca y ritmo.",
      "Signos de retención urinaria o estreñimiento.",
      "Eficacia en comportamiento."
    ],
    "interferencia_laboratorio": [
      "Glucosa: Puede alterar niveles.",
      "ECG: Cambios en el segmento ST o bloqueo AV."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Comportamiento / Dolor (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 a 24 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Para dolor neuropático dosis bajas suelen ser suficientes."
        }
      ],
      "gato": [
        {
          "indicacion": "Comportamiento / Cistitis idiopática",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 5,
            "dosis_min": 2.5,
            "dosis_max": 12.5,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez al día (preferiblemente de noche)", "intervalo_horas": 24 },
          "notas_tecnicas": "El sabor es muy amargo; gatos pueden salivar profusamente."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Uso previo de IMAO (Inhibidores Monoamino Oxidasa) en los últimos 14 días.",
        "Arritmias cardiacas o historial de convulsiones."
      ],
      "precauciones": [
        "Retención urinaria, glaucoma, KCS (ojo seco) - por efectos anticolinérgicos.",
        "Enfermedad tiroidea."
      ],
      "efectos_adversos": [
        "Sedación profunda.",
        "Efectos anticolinérgicos: Boca seca, taquicardia, estreñimiento, retención urinaria.",
        "Aumento de peso / apetito.",
        "Arritmias (a dosis altas)."
      ],
      "sobredosis": {
        "signos": ["Arritmias cardiacas letales", "Convulsiones", "Coma"],
        "tratamiento": "Bicarbonato de sodio (para arritmias), fluidos, carbón activado. Fisiostigmina (uso controversial)."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Amitraz (collares/baños)", "efecto": "Riesgo de toxicidad por interacción MAO", "severidad": "Grave" },
        { "farmaco": "Tramadol", "efecto": "Aumenta riesgo de síndrome serotoninérgico o convulsiones", "severidad": "Importante" },
        { "farmaco": "Cimetidina", "efecto": "Inhibe metabolismo de amitriptilina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea la recaptación de serotonina y norepinefrina en el SNC. También tiene fuerte actividad anticolinérgica y antihistamínica.",
      "farmacocinetica": "Bien absorbida, alto metabolismo de primer paso hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "10 mg, 25 mg, 50 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "amlodipino_besilato",
    "meta_data": {
      "nombre_generico": "Amlodipino Besilato",
      "nombres_comerciales": ["Norvasc", "Amodip"],
      "grupo_farmacologico": "Bloqueador de Canales de Calcio",
      "status_regulatorio": "Uso extra-label en perros y gatos (Amodip aprobado en Europa para gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Fármaco de elección para hipertensión en gatos.",
        "Vasodilatador periférico potente, efecto mínimo en el corazón.",
        "Inicio de acción lento, no causa hipotensión aguda severa usualmente.",
        "Puede causar hiperplasia gingival (crecimiento de encías) en uso crónico en perros."
      ],
      "usos_principales": "Tratamiento de hipertensión sistémica (especialmente felina asociada a enfermedad renal) y reducción de postcarga en insuficiencia cardiaca congestiva."
    },
    "informacion_cliente": [
      "Monitorear presión arterial regularmente.",
      "Puede causar encías agrandadas en perros tras meses de uso.",
      "Generalmente se tolera muy bien."
    ],
    "monitoreo_paciente": [
      "Presión arterial sistólica.",
      "Frecuencia cardiaca (puede haber taquicardia refleja leve).",
      "Potasio (en pacientes renales)."
    ],
    "interferencia_laboratorio": [
      "No reportadas comúnmente."
    ],
    "parametros_dosificacion": {
      "gato": [
        {
          "indicacion": "Hipertensión sistémica",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 0.625,
            "dosis_min": 0.625,
            "dosis_max": 1.25,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Una vez al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Equivale a 1/4 de tableta de 2.5 mg. Si la presión >180 mmHg, se puede subir a 1.25 mg/gato."
        }
      ],
      "perro": [
        {
          "indicacion": "Hipertensión",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.1,
            "dosis_min": 0.05,
            "dosis_max": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una o dos veces al día", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipotensión.",
        "Shock cardiogénico."
      ],
      "precauciones": [
        "Enfermedad hepática (vida media se prolonga).",
        "Estenosis aórtica."
      ],
      "efectos_adversos": [
        "Hipotensión.",
        "Inapetencia / Letargo.",
        "Hiperplasia gingival (perros).",
        "Edema periférico."
      ],
      "sobredosis": {
        "signos": ["Hipotensión severa", "Taquicardia refleja", "Bradicardia (raro)"],
        "tratamiento": "Fluidos IV, Gluconato de calcio, vasopresores."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Inhibidores ACE (Enalapril)", "efecto": "Sinergia positiva para bajar presión, seguro de combinar", "severidad": "Leve" },
        { "farmaco": "Ciclosporina", "efecto": "Amlodipino aumenta niveles de ciclosporina", "severidad": "Importante" },
        { "farmaco": "Azoles (Ketoconazol)", "efecto": "Aumentan niveles de amlodipino", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la entrada de calcio en el músculo liso vascular, causando vasodilatación de arteriolas y reducción de la resistencia vascular periférica.",
      "farmacocinetica": "Biodisponibilidad alta. Vida media larga (~30 horas en perros)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "2.5 mg, 5 mg, 10 mg", "valor_concentracion": 2.5, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "cloruro_amonio",
    "meta_data": {
      "nombre_generico": "Cloruro de Amonio",
      "nombres_comerciales": ["Uroeze"],
      "grupo_farmacologico": "Acidificante Urinario",
      "status_regulatorio": "Uso extra-label o como suplemento."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Acidifica la orina (baja el pH).",
        "Usado históricamente para disolver urolitos de estruvita, pero las dietas terapéuticas lo han reemplazado mayormente.",
        "Contraindicado en enfermedad hepática severa (riesgo de encefalopatía por amonio).",
        "Dosis excesiva causa acidosis metabólica."
      ],
      "usos_principales": "Disolución de urolitos de estruvita, tratamiento de alcalosis metabólica y aumento de excreción de ciertas toxinas (anfetaminas)."
    },
    "informacion_cliente": [
      "Puede causar malestar estomacal (dar con comida).",
      "Asegurar acceso libre al agua.",
      "El monitoreo del pH de la orina es esencial."
    ],
    "monitoreo_paciente": [
      "pH Urinario (Objetivo: < 6.5).",
      "Gases en sangre (estado ácido-base).",
      "BUN/Amomiaco sérico (en pacientes sospechosos de problema hepático)."
    ],
    "interferencia_laboratorio": [
      "pH Urinario: Disminución.",
      "Bicarbonato sérico: Disminución."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Acidificación urinaria (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dividido en 2 veces al día", "intervalo_horas": 12 },
          "notas_tecnicas": "Mezclar con comida para evitar irritación gástrica."
        }
      ],
      "gato": [
        {
          "indicacion": "Acidificación urinaria / FUS",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_min": 800,
            "dosis_max": 1000,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Dividido una o dos veces al día", "intervalo_horas": 24 },
          "notas_tecnicas": "Rara vez usado hoy día debido a dietas acidificantes."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Enfermedad hepática severa (incapacidad de metabolizar amonio a urea).",
        "Insuficiencia renal / Uremia.",
        "Acidosis metabólica preexistente."
      ],
      "precauciones": [
        "Gatos neonatos.",
        "Pacientes con diabetes mellitus."
      ],
      "efectos_adversos": [
        "Irritación gástrica (náuseas, vómitos).",
        "Acidosis metabólica (hiperventilación Kussmaul).",
        "Hipopotasemia."
      ],
      "sobredosis": {
        "signos": ["Acidosis severa", "Vómitos", "Signos de intoxicación por amonio"],
        "tratamiento": "Corregir acidosis con Bicarbonato o Lactato. Fluidos."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Sulfonamidas", "efecto": "Aumenta riesgo de cristaluria por sulfas en orina ácida", "severidad": "Importante" },
        { "farmaco": "Eritromicina", "efecto": "Disminuye eficacia de eritromicina en orina ácida", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se metaboliza a urea y ácido clorhídrico. El HCl libera iones hidrógeno que reaccionan con bicarbonato, acidificando la sangre y orina.",
      "farmacocinetica": "Absorción rápida GI."
    },
    "presentaciones_comerciales": [
      { "tipo": "Polvo / Granulado", "concentracion_texto": "Grado químico", "valor_concentracion": 100, "unidad_concentracion": "%", "es_divisible": true }
    ]
  },
  {
    "id": "amoxicilina",
    "meta_data": {
      "nombre_generico": "Amoxicilina",
      "nombres_comerciales": ["Amoxi-Tabs", "Amoxi-Drop", "Robamox"],
      "grupo_farmacologico": "Antibiótico Aminopenicilina",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Bovinos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bactericida tiempo-dependiente.",
        "Mejor absorción oral que la ampicilina (se puede dar con comida).",
        "Ineficaz contra bacterias productoras de beta-lactamasas (ej. muchos Staph, E. coli).",
        "No usar en conejos, cobayas, hámsters (disbiosis fatal)."
      ],
      "usos_principales": "Infecciones de tejidos blandos, tracto urinario, respiratorio y abscesos causados por bacterias sensibles (Streptococcus, Pasteurella)."
    },
    "informacion_cliente": [
      "Completar todo el tratamiento aunque el animal mejore.",
      "Puede causar diarrea leve.",
      "La suspensión líquida debe guardarse en refrigeración y desecharse tras 14 días.",
      "NUNCA dar a conejos."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica.",
      "Efectos adversos GI (vómito/diarrea)."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos con pruebas de sulfato de cobre."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "SC", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 11,
            "dosis_min": 10,
            "dosis_max": 22,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "SC", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 11,
            "dosis_min": 11,
            "dosis_max": 22,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Tabletas pueden ser muy grandes para gatos; suspensión preferida."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas o cefalosporinas.",
        "Pequeños herbívoros (conejos, cobayas, hámsters)."
      ],
      "precauciones": [
        "Insuficiencia renal severa (reducir dosis)."
      ],
      "efectos_adversos": [
        "Diarrea / Heces blandas.",
        "Reacciones de hipersensibilidad (rash, fiebre, anafilaxia).",
        "Neurotoxicidad (muy raro, dosis altísimas)."
      ],
      "sobredosis": {
        "signos": ["Vómitos", "Diarrea", "Cristaluria (raro)"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Antibióticos bacteriostáticos (Tetraciclinas)", "efecto": "Pueden antagonizar efecto bactericida (evitar mezcla)", "severidad": "Moderada" },
        { "farmaco": "Metotrexato", "efecto": "Aumenta niveles de metotrexato (toxicidad)", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une a las proteínas de unión a penicilina (PBPs), inhibiendo la síntesis de la pared celular bacteriana, causando lisis.",
      "farmacocinetica": "Excelente absorción oral (75-90%). Vida media corta (~1-1.5 h). Excreción renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "50, 100, 150, 200, 400 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Suspensión", "concentracion_texto": "50 mg/mL", "valor_concentracion": 50, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "amoxicilina_clavulanato",
    "meta_data": {
      "nombre_generico": "Amoxicilina / Clavulanato de Potasio",
      "nombres_comerciales": ["Clavamox", "Augmentin"],
      "grupo_farmacologico": "Penicilina Potenciada",
      "status_regulatorio": "Aprobado FDA (Perros y Gatos)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "El ácido clavulánico inhibe irreversiblemente las beta-lactamasas, permitiendo que la amoxicilina mate bacterias resistentes (ej. Staph, E. coli).",
        "Las tabletas vienen en foil y son sensibles a la humedad.",
        "Causa más vómito que la amoxicilina sola.",
        "Espectro amplio: Gram+, Gram- y Anaerobios."
      ],
      "usos_principales": "Infecciones de piel (piodermas), infecciones del tracto urinario, heridas infectadas, abscesos e infecciones orales."
    },
    "informacion_cliente": [
      "Mantener tabletas en su empaque original hasta el momento de uso.",
      "Dar con comida ayuda a reducir el vómito.",
      "Completar todo el ciclo.",
      "La suspensión líquida dura solo 10 días refrigerada."
    ],
    "monitoreo_paciente": [
      "Resolución de signos clínicos.",
      "Tolerancia gastrointestinal."
    ],
    "interferencia_laboratorio": [
      "Igual que amoxicilina."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones de piel / Tejidos blandos",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 13.75,
            "dosis_min": 12.5,
            "dosis_max": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis basada en la combinación de ambos agentes. Para infecciones severas o refractarias se usan hasta 20 mg/kg."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones urinarias / Piel",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 62.5,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis de etiqueta es 62.5 mg por gato. Muchos clínicos usan dosis basada en peso (13.75-20 mg/kg) en gatos grandes."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Historial de colestasis o ictericia asociada a amoxi/clav.",
        "Hipersensibilidad a penicilinas.",
        "Pequeños herbívoros."
      ],
      "precauciones": [
        "Enfermedad hepática."
      ],
      "efectos_adversos": [
        "Vómitos (muy común, hasta 10-15%).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Vómitos severos", "Dolor abdominal", "Diarrea"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Igual que amoxicilina", "efecto": "", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Amoxicilina: inhibe pared celular. Clavulanato: inhibe beta-lactamasas (enzimas de resistencia).",
      "farmacocinetica": "El clavulanato tiene buena absorción y penetración, similar a la amoxicilina."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "62.5, 125, 250, 375 mg", "valor_concentracion": 62.5, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Suspensión", "concentracion_texto": "62.5 mg/mL", "valor_concentracion": 62.5, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  },
  {
    "id": "anfotericina_b",
    "meta_data": {
      "nombre_generico": "Anfotericina B (Desoxicolato y Liposomal)",
      "nombres_comerciales": ["Fungizone", "Abelcet"],
      "grupo_farmacologico": "Antifúngico Poliénico",
      "status_regulatorio": "Uso extra-label en veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "El antifúngico sistémico más potente ('Estándar de oro').",
        "Extremadamente nefrotóxico (daña riñones) en su forma regular (desoxicolato).",
        "Formulaciones lipídicas/liposomales son mucho más seguras pero costosas.",
        "Requiere administración IV y fluidoterapia agresiva concurrente."
      ],
      "usos_principales": "Micosis sistémicas graves: Blastomicosis, Histoplasmosis, Criptococosis, Coccidioidomicosis y Candidiasis sistémica."
    },
    "informacion_cliente": [
      "Tratamiento intrahospitalario intensivo.",
      "Riesgo alto de daño renal; se monitoreará constantemente.",
      "Es costoso y laborioso."
    ],
    "monitoreo_paciente": [
      "BUN y Creatinina (ANTES de cada dosis) - Crítico.",
      "Análisis de orina (cilindros).",
      "Electrolitos (Potasio, Magnesio).",
      "Hemograma."
    ],
    "interferencia_laboratorio": [
      "BUN/Creatinina: Aumento casi seguro.",
      "Potasio/Magnesio: Disminución (hipopotasemia/hipomagnesemia)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Micosis sistémica (Desoxicolato)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.25,
            "dosis_max": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana (Lunes-Miér-Vie)", "intervalo_horas": 48 },
          "notas_tecnicas": "Protocolo acumulativo hasta dosis total de 4-8 mg/kg. Requiere pre-carga de fluidos salinos."
        },
        {
          "indicacion": "Micosis sistémica (Complejo Lipídico)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 1,
            "dosis_max": 3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana", "intervalo_horas": 48 },
          "notas_tecnicas": "Mucho menos tóxico, permite dosis más altas."
        }
      ],
      "gato": [
        {
          "indicacion": "Criptococosis / Histoplasmosis",
          "vias": ["SC", "IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.25,
            "dosis_min": 0.1,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "3 veces por semana", "intervalo_horas": 48 },
          "notas_tecnicas": "Vía subcutánea (SC) en gatos diluida en fluidos es un protocolo común para reducir nefrotoxicidad."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falla renal preexistente (relativa, sopesar riesgo/beneficio).",
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Uso concomitante con otros nefrotóxicos (Aminoglucósidos, AINEs)."
      ],
      "efectos_adversos": [
        "Nefrotoxicidad (dependiente de dosis acumulada).",
        "Fiebre, temblores y vómitos durante la infusión.",
        "Flebitis (inflamación vena).",
        "Anemia (uso crónico)."
      ],
      "sobredosis": {
        "signos": ["Paro cardiaco", "Falla renal aguda"],
        "tratamiento": "Suspender inmediatamente, soporte vital, diálisis."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Aminoglucósidos / Cisplatino", "efecto": "Sinergia nefrotóxica severa", "severidad": "Grave" },
        { "farmaco": "Digoxina", "efecto": "Aumenta toxicidad de digoxina por hipopotasemia", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Se une al ergosterol en la membrana celular del hongo, creando poros que causan fuga de componentes celulares y muerte.",
      "farmacocinetica": "Mala penetración en SNC y ojo. Excreción biliar y renal muy lenta (se detecta semanas después)."
    },
    "presentaciones_comerciales": [
      { "tipo": "Inyectable Liofilizado", "concentracion_texto": "50 mg", "valor_concentracion": 50, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  },
  {
    "id": "ampicilina",
    "meta_data": {
      "nombre_generico": "Ampicilina",
      "nombres_comerciales": [
        "Polyflex",
        "Principen",
        "Teven"
      ],
      "grupo_farmacologico": "Antibiótico Aminopenicilina",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Bovinos). Polyflex es la forma veterinaria inyectable."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bactericida tiempo-dependiente.",
        "La absorción oral se reduce significativamente con la presencia de comida (dar con estómago vacío, a diferencia de la amoxicilina).",
        "Vida media muy corta, requiere dosificación frecuente.",
        "Ineficaz contra bacterias productoras de beta-lactamasas."
      ],
      "usos_principales": "Infecciones sistémicas, respiratorias, urinarias y de tejidos blandos causadas por organismos sensibles."
    },
    "informacion_cliente": [
      "Administrar con el estómago vacío (1 hora antes o 2 horas después de comer) para asegurar que funcione.",
      "Puede causar diarrea leve.",
      "Completar todo el tratamiento prescrito."
    ],
    "monitoreo_paciente": [
      "Eficacia clínica.",
      "Signos de hipersensibilidad.",
      "Efectos gastrointestinales (diarrea)."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos con métodos de sulfato de cobre (Clinitest).",
      "Aminoglucósidos: Puede inactivarlos in vitro si se mezclan en la misma jeringa."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 6
          },
          "notas_tecnicas": "La vida media es corta; la administración cada 8h es el mínimo, idealmente cada 6h para infecciones serias."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones susceptibles",
          "vias": ["PO", "IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones sistémicas",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "dosis_min": 10,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas (IV) o cada 8-12 horas (IM)",
            "intervalo_horas": 8
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas o cefalosporinas.",
        "Pequeños herbívoros (conejos, cobayas) - Riesgo de enterotoxemia fatal."
      ],
      "precauciones": [
        "Insuficiencia renal (requiere ajuste de dosis).",
        "Animales con historial de alergias múltiples."
      ],
      "efectos_adversos": [
        "Hipersensibilidad (desde rash hasta anafilaxia).",
        "Diarrea / Disbiosis intestinal.",
        "Dolor en el sitio de inyección (IM)."
      ],
      "sobredosis": {
        "signos": ["Hiperexcitabilidad", "Convulsiones (dosis masivas IV)"],
        "tratamiento": "Sintomático. Diazepam para convulsiones."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Alopurinol",
          "efecto": "Aumenta la incidencia de erupciones cutáneas (rash) en perros",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Sinergia bactericida (bueno), pero inactivación química si se mezclan en la misma jeringa (malo)",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la síntesis de la pared celular bacteriana (bactericida).",
      "farmacocinetica": "Biodisponibilidad oral baja (30-50%) y afectada por comida. Difunde bien a la mayoría de tejidos excepto SNC/Ojo (salvo inflamación). Excreción renal."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Polvo para inyección (Polyflex)",
        "concentracion_texto": "10 g, 25 g (reconstituir)",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Cápsula",
        "concentracion_texto": "250 mg, 500 mg",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "ampicilina_sulbactam",
    "meta_data": {
      "nombre_generico": "Ampicilina Sódica / Sulbactam Sódico",
      "nombres_comerciales": [
        "Unasyn"
      ],
      "grupo_farmacologico": "Penicilina Potenciada (Inyectable)",
      "status_regulatorio": "Uso extra-label en veterinaria; Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Similar al Clavamox pero en versión inyectable (IV/IM).",
        "El sulbactam inhibe las beta-lactamasas, ampliando el espectro.",
        "Ideal para neumonías graves, sepsis intraabdominal e infecciones óseas.",
        "Requiere reconstitución y uso rápido (la solución pierde estabilidad)."
      ],
      "usos_principales": "Infecciones severas por bacterias resistentes a ampicilina sola, profilaxis quirúrgica en cirugías contaminadas."
    },
    "informacion_cliente": [
      "Generalmente de uso hospitalario.",
      "Si se prescribe para casa (IM), mantener refrigerado y desechar remanentes según indicación."
    ],
    "monitoreo_paciente": [
      "Sitio de catéter IV (riesgo de flebitis).",
      "Función renal y hepática en tratamientos largos.",
      "Signos de anafilaxia."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria (falso positivo).",
      "Proteínas séricas totales (puede alterar mediciones por reacción de Biuret)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones severas / Sepsis (Extra-label)",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "IV administrar lento (15-30 min). IM puede ser doloroso."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones severas (Extra-label)",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones ortopédicas / Sepsis neonatal",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 30,
            "dosis_min": 20,
            "dosis_max": 50,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 6 a 8 horas",
            "intervalo_horas": 8
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a penicilinas.",
        "Pequeños roedores/lagomorfos."
      ],
      "precauciones": [
        "Insuficiencia renal (ajustar intervalo)."
      ],
      "efectos_adversos": [
        "Dolor al inyectar IM.",
        "Tromboflebitis (IV).",
        "Diarrea.",
        "Reacciones alérgicas."
      ],
      "sobredosis": {
        "signos": ["Convulsiones", "Hiperexcitabilidad"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Incompatibilidad física en mezcla, sinergia terapéutica si se dan separados",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bactericida por inhibición de pared celular + Inhibición suicida de beta-lactamasas.",
      "farmacocinetica": "Distribución amplia en fluidos extracelulares. Excreción renal predominante."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial inyectable",
        "concentracion_texto": "1.5g (1g ampicilina + 0.5g sulbactam), 3g (2g + 1g)",
        "valor_concentracion": 30,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "amprolio",
    "meta_data": {
      "nombre_generico": "Amprolio",
      "nombres_comerciales": [
        "Corid",
        "Amprol"
      ],
      "grupo_farmacologico": "Antiprotozoario / Coccidiostato",
      "status_regulatorio": "Aprobado FDA (Bovinos, Aves). Uso extra-label en perros y gatos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Análogo estructural de la Tiamina (Vitamina B1).",
        "Mata al parásito matándolo de hambre de tiamina.",
        "El uso prolongado a dosis altas puede causar deficiencia de tiamina en el paciente (polioencefalomalacia).",
        "Efectivo contra Coccidias (Eimeria, Isospora)."
      ],
      "usos_principales": "Tratamiento y prevención de coccidiosis en terneros, aves, ovejas, perros (especialmente en perreras) y gatos."
    },
    "informacion_cliente": [
      "Suele administrarse en el agua de bebida o comida para animales de granja.",
      "El líquido sabe mal; asegurar que el animal lo consuma.",
      "Si el animal muestra signos neurológicos (temblores, mirada fija), suspender y avisar."
    ],
    "monitoreo_paciente": [
      "Conteo fecal de oocistos (para eficacia).",
      "Signos neurológicos (deficiencia de tiamina).",
      "Apetito."
    ],
    "interferencia_laboratorio": [
      "No reportadas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Coccidiosis (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 150,
            "dosis_min": 100,
            "dosis_max": 200,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 7-10 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Suele usarse la solución al 9.6% o el polvo al 20%. Alternativa: 300-400 mg/kg por 5 días."
        }
      ],
      "gato": [
        {
          "indicacion": "Coccidiosis (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 110,
            "dosis_min": 60,
            "dosis_max": 120,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 7-12 días",
            "intervalo_horas": 24
          }
        }
      ],
      "bovino": [
        {
          "indicacion": "Tratamiento Coccidiosis (Etiqueta)",
          "vias": ["PO (Agua/Comida)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Prevención: 5 mg/kg por 21 días."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Animales con deficiencia de tiamina conocida.",
        "Debilidad extrema."
      ],
      "precauciones": [
        "Uso prolongado (>14 días)."
      ],
      "efectos_adversos": [
        "Deficiencia de tiamina (SNC, ataxia, convulsiones).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Signos neurológicos centrales", "Polioencefalomalacia"],
        "tratamiento": "Tiamina parenteral inmediatamente."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Tiamina (exógena)",
          "efecto": "Antagoniza el efecto del fármaco sobre los parásitos (no suplementar tiamina durante el tratamiento a menos que haya toxicidad)",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente el transporte activo de tiamina en el parásito. La coccidia requiere tiamina para replicarse.",
      "farmacocinetica": "Baja absorción sistémica, actúa principalmente en el lumen intestinal."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Solución Oral",
        "concentracion_texto": "9.6% (96 mg/mL)",
        "valor_concentracion": 96,
        "unidad_concentracion": "mg/ml",
        "es_divisible": true
      },
      {
        "tipo": "Polvo Soluble",
        "concentracion_texto": "20%",
        "valor_concentracion": 200,
        "unidad_concentracion": "mg/g",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "antiveneno_latrodectus",
    "meta_data": {
      "nombre_generico": "Antivenin (Latrodectus mactans)",
      "nombres_comerciales": [
        "Black Widow Spider Antivenin"
      ],
      "grupo_farmacologico": "Antiveneno (Inmunoglobulina Equina)",
      "status_regulatorio": "Aprobado FDA humanos; Uso extra-label veterinaria."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Neutraliza el veneno de arañas del género Latrodectus (Viuda Negra).",
        "Alivia rápidamente el dolor, rigidez muscular y signos autonómicos.",
        "Derivado de suero equino (caballo), riesgo alto de anafilaxia.",
        "Generalmente una dosis es suficiente."
      ],
      "usos_principales": "Tratamiento de envenenamiento sintomático por mordedura de viuda negra (Latrodectismo) en perros y gatos."
    },
    "informacion_cliente": [
      "Tratamiento de emergencia que puede salvar la vida.",
      "Riesgo de reacción alérgica al suero.",
      "El alivio de los síntomas suele ser dramáticamente rápido (minutos a horas)."
    ],
    "monitoreo_paciente": [
      "Signos vitales durante la infusión (anafilaxia).",
      "Resolución de rigidez abdominal y dolor.",
      "Presión arterial."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica conocida."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Latrodectismo",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial/paciente"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Diluir el vial (6000 unidades) en 50-100 mL de solución salina y administrar en 30-60 min. Premedicar con difenhidramina."
        }
      ],
      "gato": [
        {
          "indicacion": "Latrodectismo",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial/paciente"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Muy sensibles al veneno, tratamiento temprano es crítico."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad conocida a productos equinos (relativa en emergencia mortal)."
      ],
      "precauciones": [
        "Requiere monitoreo estricto de anafilaxia."
      ],
      "efectos_adversos": [
        "Anafilaxia aguda (hipotensión, broncoespasmo).",
        "Enfermedad del suero (reacción tardía 1-2 semanas después: fiebre, dolor articular)."
      ],
      "sobredosis": {
        "signos": ["No aplica (biológico)"],
        "tratamiento": "Tratar reacciones de hipersensibilidad con epinefrina, esteroides y antihistamínicos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ninguna directa",
          "efecto": "",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Los anticuerpos se unen a la neurotoxina (alfa-latrotoxina) circulante y la neutralizan, impidiendo que siga liberando neurotransmisores.",
      "farmacocinetica": "Distribución vascular rápida tras IV. Vida media de días."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "6000 Unidades Antiveneno",
        "valor_concentracion": 6000,
        "unidad_concentracion": "U",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "antiveneno_crotalidae",
    "meta_data": {
      "nombre_generico": "Antivenin (Crotalidae) Polyvalent",
      "nombres_comerciales": [
        "Antivipmyn",
        "CroFab",
        "VenomVet"
      ],
      "grupo_farmacologico": "Antiveneno (Fragmentos Fab o IgG completa)",
      "status_regulatorio": "Aprobado FDA (VenomVet para perros). Otros uso extra-label."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Para mordeduras de víboras de foseta (Cascabel, Nauyaca, Cabeza de Cobre, Mocasín).",
        "Crucial administrarlo cuanto antes (mejores resultados en <4-6 horas).",
        "Detiene la progresión del edema y la coagulopatía, pero no revierte el tejido ya necrosado.",
        "La dosis se basa en la CARGA DE VENENO (severidad), no en el peso del perro (un perro pequeño puede necesitar más viales)."
      ],
      "usos_principales": "Envenenamiento por crótalos con signos progresivos de edema, coagulopatía o shock."
    },
    "informacion_cliente": [
      "Es un tratamiento muy costoso.",
      "Puede requerir múltiples viales.",
      "El perro necesitará hospitalización y monitoreo de coagulación.",
      "La hinchazón puede tardar días en bajar."
    ],
    "monitoreo_paciente": [
      "Circunferencia de la extremidad afectada (marcar progreso del edema).",
      "Tiempos de coagulación (PT, PTT), plaquetas y fibrinógeno.",
      "Signos de shock.",
      "Equinocitos en frotis sanguíneo."
    ],
    "interferencia_laboratorio": [
      "Ninguna por el antiveneno, pero el veneno altera todas las pruebas de coagulación."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Envenenamiento Crotálido",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 5,
            "unidad_calculo": "viales (inicial)"
          },
          "frecuencia": {
            "texto_ui": "Repetir según necesidad clínica",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis inicial típica: 1-2 viales. Si el edema progresa o la coagulación no mejora, repetir dosis. Diluir en cristaloides y dar lento."
        }
      ],
      "gato": [
        {
          "indicacion": "Envenenamiento Crotálido",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "vial"
          },
          "frecuencia": {
            "texto_ui": "Según necesidad",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Gatos suelen ser más resistentes al veneno que los perros, pero si requieren tratamiento, usar dosis completa."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad (riesgo/beneficio)."
      ],
      "precauciones": [
        "Productos de IgG completa (equinos) tienen mayor tasa de anafilaxia que los Fab (ovinos).",
        "No inyectar en el sitio de la mordedura."
      ],
      "efectos_adversos": [
        "Anafilaxia aguda.",
        "Enfermedad del suero (tardía)."
      ],
      "sobredosis": {
        "signos": ["No aplica"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Corticosteroides",
          "efecto": "Uso controversial en mordeduras de serpiente, no interactúan con el antiveneno directamente",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Une y neutraliza las toxinas del veneno, facilitando su eliminación y previniendo la unión a tejidos.",
      "farmacocinetica": "Productos Fab (CroFab) se eliminan rápido renalmente (pueden requerir redosificación por 'rebote' de veneno). Productos IgG (Antivipmyn) duran más."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "Neutraliza X cantidad de veneno (varía por marca)",
        "valor_concentracion": 1,
        "unidad_concentracion": "vial",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "antiveneno_coral",
    "meta_data": {
      "nombre_generico": "Antivenin (Micrurus fulvius)",
      "nombres_comerciales": [
        "North American Coral Snake Antivenin"
      ],
      "grupo_farmacologico": "Antiveneno (Equino)",
      "status_regulatorio": "Aprobado FDA humanos. Escaso y difícil de conseguir."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Específico para Coral Norteamericana (Micrurus fulvius). NO cruza con Coral de Arizona.",
        "El veneno es neurotóxico (parálisis flácida, falla respiratoria).",
        "El tratamiento debe ser PREVENTIVO si hay mordedura confirmada, ya que una vez que inician los signos clínicos, el antiveneno es poco eficaz para revertirlos.",
        "Signos clínicos pueden tardar hasta 18 horas en aparecer."
      ],
      "usos_principales": "Mordedura confirmada o sospechosa de serpiente de coral."
    },
    "informacion_cliente": [
      "La mordedura de coral puede parecer leve al principio (sin hinchazón), pero es mortal.",
      "El perro puede dejar de respirar y necesitar ventilador.",
      "El antiveneno es extremadamente escaso."
    ],
    "monitoreo_paciente": [
      "Función respiratoria (riesgo de parálisis diafragmática).",
      "Reflejos espinales y palpebrales.",
      "Capacidad de deglución (riesgo de neumonía por aspiración)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Mordedura Coral",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 3,
            "dosis_min": 1,
            "dosis_max": 5,
            "unidad_calculo": "viales"
          },
          "frecuencia": {
            "texto_ui": "Inmediatamente",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Administrar 1-3 viales lo antes posible. Si los signos progresan, administrar más. Dosis empírica promedio: 3 viales."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a suero equino (relativa)."
      ],
      "precauciones": [
        "Disponibilidad limitada."
      ],
      "efectos_adversos": [
        "Anafilaxia.",
        "Enfermedad del suero."
      ],
      "sobredosis": {
        "signos": ["No aplica"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ninguna",
          "efecto": "",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Neutraliza las neurotoxinas postsinápticas de bajo peso molecular.",
      "farmacocinetica": "Desconocida en perros."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial",
        "concentracion_texto": "10 mL",
        "valor_concentracion": 10,
        "unidad_concentracion": "ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "apomorfina",
    "meta_data": {
      "nombre_generico": "Apomorfina Clorhidrato",
      "nombres_comerciales": [
        "Apokyn",
        "Emetor"
      ],
      "grupo_farmacologico": "Emético (Agonista Dopaminérgico)",
      "status_regulatorio": "Uso extra-label en perros (común). Existen formulaciones oftálmicas aprobadas."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Emético de elección para PERROS.",
        "NO RECOMENDADO EN GATOS (poco efectivo y causa excitación maníaca; usar Xilacina o Dexmedetomidina en gatos).",
        "Induce el vómito rápidamente (2-10 min) tras administración IV o en saco conjuntival.",
        "Si la primera dosis no funciona, NO repetir (satura receptores y no funcionará)."
      ],
      "usos_principales": "Inducción del vómito tras ingestión de toxinas o cuerpos extraños recientes (antes de 2-4 horas)."
    },
    "informacion_cliente": [
      "Se administra para que el perro expulse el veneno.",
      "El perro puede quedar mareado o con náuseas un rato después.",
      "Los ojos pueden enrojecerse si se administra vía ocular."
    ],
    "monitoreo_paciente": [
      "Efectividad del vómito.",
      "Estado mental (sedación).",
      "Aspiración (vigilar que no inhale vómito)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inducción del vómito",
          "vias": ["IV", "IM", "Oftálmica (Saco conjuntival)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.03,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "IV: 0.03 mg/kg. Oftálmica: Disolver tableta y poner gotas en el ojo, o poner trozo de tableta en saco conjuntival; lavar el ojo profusamente en cuanto vomite para detener el efecto."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Usar Xilacina).",
        "Ingestión de cáusticos, corrosivos o destilados de petróleo (riesgo de daño esofágico o neumonía al vomitar).",
        "Pacientes en coma, con convulsiones o sin reflejo de deglución (riesgo de aspiración).",
        "Ingestión de objetos punzocortantes."
      ],
      "precauciones": [
        "Colapso circulatorio."
      ],
      "efectos_adversos": [
        "Vómito prolongado (dar Maropitant o Metoclopramida para detener).",
        "Sedación.",
        "Irritación ocular (vía conjuntival)."
      ],
      "sobredosis": {
        "signos": ["Depresión respiratoria", "Sedación excesiva", "Vómito incesante"],
        "tratamiento": "Naloxona (revierte depresión SNC pero no el vómito). Antieméticos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Antieméticos (Maropitant)",
          "efecto": "Antagonizan el efecto (obviamente)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Opiáceos",
          "efecto": "Potenciación de depresión SNC",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Estimula directamente los receptores de dopamina (D2) en la Zona Gatillo Quimiorreceptora (CRTZ) del bulbo raquídeo.",
      "farmacocinetica": "Inicio rápido. Metabolismo hepático."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "Varios",
        "valor_concentracion": 10,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Tableta Soluble",
        "concentracion_texto": "6 mg",
        "valor_concentracion": 6,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "apramicina",
    "meta_data": {
      "nombre_generico": "Apramicina Sulfato",
      "nombres_comerciales": [
        "Apralan"
      ],
      "grupo_farmacologico": "Antibiótico Aminoglucósido",
      "status_regulatorio": "Aprobado FDA (Cerdos). Uso extra-label en terneros."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Aminoglucósido usado en animales de producción.",
        "Específico para infecciones entéricas (digestivas) bacterianas.",
        "Similar a la neomicina o gentamicina.",
        "Resistencia cruzada común con gentamicina."
      ],
      "usos_principales": "Colibacilosis (infección por E. coli) en cerdos y terneros."
    },
    "informacion_cliente": [
      "Respetar tiempos de retiro en carne.",
      "Asegurar acceso al agua."
    ],
    "monitoreo_paciente": [
      "Eficacia contra diarrea.",
      "Hidratación."
    ],
    "interferencia_laboratorio": [
      "No reportada."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Colibacilosis (Terneros)",
          "vias": ["PO (Agua/Leche)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 20,
            "dosis_max": 40,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Tiempo de retiro carne: 28 días."
        }
      ],
      "cerdo": [
        {
          "indicacion": "Colibacilosis post-destete",
          "vias": ["PO (Agua)"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 12.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Diario por 7 días",
            "intervalo_horas": 24
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falla renal.",
        "Hipersensibilidad a aminoglucósidos."
      ],
      "precauciones": [
        "Gatos (muy susceptibles a ototoxicidad, no usar)."
      ],
      "efectos_adversos": [
        "Ototoxicidad.",
        "Nefrotoxicidad (menos común vía oral por baja absorción, pero posible en intestino inflamado).",
        "Diarrea."
      ],
      "sobredosis": {
        "signos": ["Daño renal", "Sordera"],
        "tratamiento": "Retirar fármaco, fluidos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros aminoglucósidos",
          "efecto": "Toxicidad aditiva",
          "severidad": "Grave"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe síntesis proteica bacteriana (Ribosoma 30S). Bactericida.",
      "farmacocinetica": "Pobre absorción oral en adultos, algo mejor en neonatos. Acción principalmente local en intestino."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Polvo Soluble",
        "concentracion_texto": "Varios (ej. 75g/sobre)",
        "valor_concentracion": 1,
        "unidad_concentracion": "g",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "acido_ascorbico",
    "meta_data": {
      "nombre_generico": "Ácido Ascórbico (Vitamina C)",
      "nombres_comerciales": [
        "Vitamin C",
        "Ascorbin"
      ],
      "grupo_farmacologico": "Vitamina Hidrosoluble / Acidificante Urinario",
      "status_regulatorio": "Suplemento / Uso extra-label."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Esencial en dietas de Cobayas (Cuyos) y Primates (no pueden sintetizarla).",
        "Perros y Gatos sintetizan su propia vitamina C en el hígado; la suplementación es raramente necesaria.",
        "Usado como acidificante urinario (poco confiable) y antioxidante.",
        "Tratamiento de metahemoglobinemia por acetaminofén (adyuvante)."
      ],
      "usos_principales": "Escorbuto en cobayas, acidificación urinaria, reducción de metahemoglobina."
    },
    "informacion_cliente": [
      "Las cobayas necesitan esto diariamente en su comida o agua.",
      "La vitamina C se degrada rápido en el agua (cambiar diario y proteger de luz).",
      "Dosis altas pueden causar diarrea."
    ],
    "monitoreo_paciente": [
      "pH urinario (si se usa para acidificar).",
      "Signos de escorbuto (sangrado encías, dolor articular) en cobayas."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos (tiras reactivas)."
    ],
    "parametros_dosificacion": {
      "cobaya": [
        {
          "indicacion": "Prevención Escorbuto",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 30,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Diario",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "En preñez o enfermedad subir a 30-50 mg/kg."
        },
        {
          "indicacion": "Tratamiento Escorbuto",
          "vias": ["PO", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 50,
            "dosis_min": 50,
            "dosis_max": 100,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ],
      "perro": [
        {
          "indicacion": "Acidificación urinaria (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "dosis_min": 15,
            "dosis_max": 25,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Eficacia dudosa."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Urolitiasis por oxalato/uratos (puede precipitar cristales)."
      ],
      "precauciones": [
        "Diabetes mellitus (interferencia en lecturas)."
      ],
      "efectos_adversos": [
        "Diarrea / Flatulencia (dosis altas).",
        "Irritación gástrica.",
        "Precipitación de cálculos de oxalato."
      ],
      "sobredosis": {
        "signos": ["Diarrea"],
        "tratamiento": "Suspender."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos",
          "efecto": "Aumenta excreción renal de aminoglucósidos (reduce eficacia)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Cofactor enzimático, antioxidante, síntesis de colágeno.",
      "farmacocinetica": "Absorción activa saturable. Exceso se excreta en orina."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "100, 250, 500 mg",
        "valor_concentracion": 500,
        "unidad_concentracion": "mg",
        "es_divisible": true
      },
      {
        "tipo": "Inyectable",
        "concentracion_texto": "250 mg/mL",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "asparaginasa",
    "meta_data": {
      "nombre_generico": "L-Asparaginasa",
      "nombres_comerciales": [
        "Elspar",
        "Oncaspar"
      ],
      "grupo_farmacologico": "Antineoplásico (Enzima)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Específico para Linfoma y Leucemia.",
        "Actúa matando de hambre a las células cancerosas quitándoles asparagina.",
        "No causa supresión de médula ósea (seguro si hay neutropenia), pero causa muchas reacciones alérgicas.",
        "Se suele dar SC o IM (menos riesgo de anafilaxia que IV)."
      ],
      "usos_principales": "Inducción de remisión en Linfoma multicéntrico canino y felino (Protocolo Wisconsin/CHOP) y leucemia linfoblástica."
    },
    "informacion_cliente": [
      "Medicamento de quimioterapia.",
      "Riesgo de reacción alérgica inmediata (hinchazón, colapso) después de la inyección.",
      "Puede causar inflamación del páncreas (pancreatitis)."
    ],
    "monitoreo_paciente": [
      "Signos de anafilaxia (quedarse con el paciente 30 min post-inyección).",
      "Signos de pancreatitis (vómito, dolor abdominal).",
      "Glucosa (hiperglucemia transitoria)."
    ],
    "interferencia_laboratorio": [
      "Amonio sérico: Aumento (subproducto de la enzima).",
      "Tiroides: Puede bajar T4."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Linfoma (Protocolo)",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 400,
            "unidad_calculo": "UI/kg"
          },
          "frecuencia": {
            "texto_ui": "Semanal o según protocolo",
            "intervalo_horas": 168
          },
          "notas_tecnicas": "Alternativa común: 10,000 UI/m2. Premedicar con difenhidramina reduce riesgo alérgico."
        }
      ],
      "gato": [
        {
          "indicacion": "Linfoma",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 400,
            "unidad_calculo": "UI/kg"
          },
          "frecuencia": {
            "texto_ui": "Según protocolo",
            "intervalo_horas": 0
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Pancreatitis previa o activa.",
        "Historia de anafilaxia a asparaginasa."
      ],
      "precauciones": [
        "Diabetes mellitus."
      ],
      "efectos_adversos": [
        "Hipersensibilidad (Anafilaxia) - Muy común con dosis repetidas.",
        "Pancreatitis aguda.",
        "Coagulopatía (raro)."
      ],
      "sobredosis": {
        "signos": ["Anafilaxia", "Hepatotoxicidad"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Metotrexato",
          "efecto": "Antagonismo si se dan juntos (dar asparaginasa 24h después)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Vincristina",
          "efecto": "Puede aumentar neurotoxicidad de vincristina",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Hidroliza la asparagina a ácido aspártico y amoníaco. Las células tumorales linfoides no pueden sintetizar asparagina y mueren, mientras las células normales sí pueden sintetizarla.",
      "farmacocinetica": "Permanece en espacio vascular. Vida media ~12-24h."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Vial Liofilizado",
        "concentracion_texto": "10,000 UI",
        "valor_concentracion": 10000,
        "unidad_concentracion": "UI",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "aspirina",
    "meta_data": {
      "nombre_generico": "Aspirina (Ácido Acetilsalicílico)",
      "nombres_comerciales": [
        "Bayer",
        "Bufferin",
        "Ecotrin"
      ],
      "grupo_farmacologico": "AINE (Antiinflamatorio No Esteroideo) / Antiplaquetario",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos y en algunos productos veterinarios antiguos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "AINE clásico con propiedades analgésicas, antipiréticas y antiinflamatorias.",
        "Efecto antiplaquetario irreversible (adelgaza la sangre) que dura la vida de la plaqueta (7-10 días).",
        "Los gatos son extremadamente sensibles debido a su incapacidad para metabolizarla rápidamente (vida media ~30-40 horas).",
        "Riesgo alto de úlceras gástricas."
      ],
      "usos_principales": "Analgesia (leve a moderada), antiinflamatorio, antipirético y prevención de tromboembolismo arterial (especialmente en gatos con enfermedad cardiaca o perros con IMHA)."
    },
    "informacion_cliente": [
      "NUNCA dar Tylenol (Acetaminofén) por error; la Aspirina es diferente pero también peligrosa si no se dosifica bien.",
      "Dar siempre con comida para proteger el estómago.",
      "Si el animal vomita "granos de café" (sangre digerida) o tiene heces negras, suspender y llamar al veterinario.",
      "En gatos, una sola dosis dura días; no repetir sin instrucción."
    ],
    "monitoreo_paciente": [
      "Signos gastrointestinales (vómito, diarrea, melena).",
      "Hematocrito (anemia por sangrado oculto).",
      "Función renal y hepática en tratamientos largos.",
      "Tiempos de coagulación de mucosas."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos (reacción de sulfato de cobre).",
      "T3/T4: Puede disminuir niveles séricos.",
      "Pruebas de coagulación: Aumenta tiempo de sangrado."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgesia / Antiinflamatorio",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        },
        {
          "indicacion": "Antiplaquetario (Prevención trombos)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.5,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 a 24 horas",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Dosis "ultra-baja" (0.5 mg/kg) es efectiva para inhibir tromboxano sin afectar prostaciclina."
        }
      ],
      "gato": [
        {
          "indicacion": "Analgesia (Uso limitado)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 48 a 72 horas (2-3 días)",
            "intervalo_horas": 48
          },
          "notas_tecnicas": "¡PELIGRO! Vida media muy larga. Usar solo si no hay alternativas más seguras (Meloxicam/Robenacoxib)."
        },
        {
          "indicacion": "Antiplaquetario (Cardiomiopatía)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 81,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": {
            "texto_ui": "Cada 72 horas (3 días)",
            "intervalo_horas": 72
          },
          "notas_tecnicas": "Comúnmente se usa 1/4 de tableta de 81 mg (aspirina de bebé) cada 3 días."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Úlcera gástrica activa o sospechada.",
        "Trastornos de la coagulación (Von Willebrand).",
        "Asma sensible a aspirina.",
        "Falla renal severa."
      ],
      "precauciones": [
        "Gatos (metabolismo deficiente).",
        "Uso concurrente con esteroides (alto riesgo de úlcera)."
      ],
      "efectos_adversos": [
        "Irritación gástrica / Ulceración / Sangrado.",
        "Vómitos.",
        "Acidosis metabólica (sobredosis).",
        "Falla renal (necrosis papilar)."
      ],
      "sobredosis": {
        "signos": ["Depresión", "Vómitos (sangre)", "Respiración rápida (acidosis)", "Fiebre", "Convulsiones"],
        "tratamiento": "Lavado gástrico, carbón activado, fluidos alcalinizantes (Bicarbonato) para forzar excreción renal, protectores gástricos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Corticosteroides (Prednisona)",
          "efecto": "Riesgo extremo de ulceración gastrointestinal",
          "severidad": "Grave"
        },
        {
          "farmaco": "Furosemida",
          "efecto": "Puede competir por excreción renal (toxicidad)",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Fenobarbital",
          "efecto": "Aumenta metabolismo de aspirina (reduce efecto)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe irreversiblemente la enzima Ciclooxigenasa (COX-1 y COX-2), reduciendo prostaglandinas y tromboxanos.",
      "farmacocinetica": "Absorción rápida en estómago/intestino (depende del pH). Metabolismo hepático (glucuronidación) que es muy lento en gatos."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "81 mg (Bebé), 325 mg (Adulto), 500 mg (Extra fuerte)",
        "valor_concentracion": 325,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "atenolol",
    "meta_data": {
      "nombre_generico": "Atenolol",
      "nombres_comerciales": [
        "Tenormin"
      ],
      "grupo_farmacologico": "Beta-bloqueador (Selectivo Beta-1)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Bloqueador beta-1 cardio-selectivo (afecta principalmente al corazón, menos a los pulmones).",
        "Reduce la frecuencia cardiaca, la presión arterial y la demanda de oxígeno del miocardio.",
        "Más seguro que el Propranolol para pacientes con asma/problemas respiratorios.",
        "No suspender abruptamente (efecto rebote)."
      ],
      "usos_principales": "Taquiarritmias (supraventriculares y ventriculares), miocardiopatía hipertrófica (especialmente en gatos), hipertensión sistémica y estenosis subaórtica."
    },
    "informacion_cliente": [
      "No dejar de dar la medicina de golpe; puede causar problemas cardiacos graves.",
      "El animal puede estar un poco más letárgico o tranquilo de lo normal.",
      "Si se desmaya o tiene debilidad extrema, contactar al veterinario."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca (Bradicardia es el principal limitante).",
      "Presión arterial.",
      "ECG (control de arritmias).",
      "Signos de insuficiencia cardiaca congestiva."
    ],
    "interferencia_laboratorio": [
      "Puede aumentar triglicéridos y potasio sérico ligeramente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Arritmias / Hipertensión",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.25,
            "dosis_max": 1,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Titular dosis hasta lograr efecto deseado sin bradicardia excesiva."
        }
      ],
      "gato": [
        {
          "indicacion": "Miocardiopatía Hipertrófica / Arritmias",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 1,
            "dosis_min": 1,
            "dosis_max": 2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          },
          "notas_tecnicas": "Dosis práctica común: 6.25 mg a 12.5 mg por gato total, cada 12h."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Bradicardia severa o bloqueo AV.",
        "Insuficiencia cardiaca congestiva descompensada (inestable).",
        "Shock cardiogénico."
      ],
      "precauciones": [
        "Diabetes mellitus (enmascara signos de hipoglucemia).",
        "Insuficiencia renal (se acumula)."
      ],
      "efectos_adversos": [
        "Bradicardia.",
        "Letargo / Depresión.",
        "Hipotensión.",
        "Broncoespasmo (raro a dosis normales por ser selectivo)."
      ],
      "sobredosis": {
        "signos": ["Bradicardia severa", "Colapso", "Convulsiones"],
        "tratamiento": "Atropina (para bradicardia), Isoproterenol, Glucagón (antídoto específico para inotropismo)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Bloqueadores de canales de calcio (Diltiazem)",
          "efecto": "Efecto aditivo depresor del miocardio y bradicardia (usar con precaución)",
          "severidad": "Importante"
        },
        {
          "farmaco": "Anestésicos",
          "efecto": "Mayor riesgo de depresión miocárdica",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloquea competitivamente receptores beta-1 adrenérgicos. Cronotrópico e inotrópico negativo.",
      "farmacocinetica": "Baja solubilidad en lípidos (pobre penetración a SNC). Excreción renal casi inalterada."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "25 mg, 50 mg, 100 mg",
        "valor_concentracion": 50,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "atipamezol",
    "meta_data": {
      "nombre_generico": "Atipamezol Clorhidrato",
      "nombres_comerciales": [
        "Antisedan",
        "Revertor"
      ],
      "grupo_farmacologico": "Antagonista Alfa-2 Adrenérgico (Agente de reversión)",
      "status_regulatorio": "Aprobado FDA (Perros). Uso extra-label en gatos y exóticos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Agente de reversión específico para Dexmedetomidina y Medetomidina.",
        "Administración IM es la estándar; la vía IV puede causar colapso cardiovascular abrupto (hipotensión/excitación).",
        "Revierte tanto la sedación como la analgesia (cuidado si el paciente tiene dolor).",
        "Relación volumen a volumen con Dexmedetomidina suele ser 1:1."
      ],
      "usos_principales": "Reversión de los efectos sedantes y analgésicos de agonistas alfa-2 (Dexmedetomidina, Medetomidina, Xilacina)."
    },
    "informacion_cliente": [
      "Su mascota despertará rápidamente (5-10 min) después de esta inyección.",
      "Puede estar un poco desorientada o temblorosa al inicio.",
      "Si llega a casa muy sedada nuevamente, llamar al veterinario."
    ],
    "monitoreo_paciente": [
      "Estado de alerta (riesgo de resedación).",
      "Dolor (al revertir analgesia).",
      "Frecuencia cardiaca y presión arterial."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Reversión de Dexmedetomidina",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 1,
            "unidad_calculo": "mL por cada mL de Dexmedetomidina usado"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "En mg: Usar 5 veces la dosis de mg de dexmedetomidina administrada. (Como Antisedan es 5 mg/mL y Dexdomitor es 0.5 mg/mL, el volumen es igual)."
        }
      ],
      "gato": [
        {
          "indicacion": "Reversión de Dexmedetomidina (Extra-label)",
          "vias": ["IM"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 0.5,
            "unidad_calculo": "mL por cada mL de Dexmedetomidina usado"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "En gatos se usa la MITAD del volumen comparado con perros (2.5 veces la dosis en mg)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Ninguna absoluta en emergencias de sobredosis alfa-2.",
        "Evitar si la reversión de analgesia es peligrosa."
      ],
      "precauciones": [
        "Administración IV rápida (evitar).",
        "Pacientes que recibieron ketamina (esperar 30 min antes de revertir o pueden tener convulsiones/excitación)."
      ],
      "efectos_adversos": [
        "Vómitos.",
        "Diarrea.",
        "Hipersalivación.",
        "Excitación / Agresión transitoria durante la recuperación.",
        "Hipotensión transitoria."
      ],
      "sobredosis": {
        "signos": ["Taquicardia", "Excitación", "Temblores"],
        "tratamiento": "Minimizar estímulos, usar sedantes no alfa-2 si es necesario."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Agonistas Alfa-2 (Dexmedetomidina)",
          "efecto": "Antagonismo directo (efecto deseado)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista alfa-2 adrenérgico altamente selectivo y potente. Desplaza al agonista del receptor.",
      "farmacocinetica": "Absorción IM rápida (pico en 10 min). Vida media ~2-3 horas."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "5.0 mg/mL",
        "valor_concentracion": 5,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "atovacuona",
    "meta_data": {
      "nombre_generico": "Atovacuona",
      "nombres_comerciales": [
        "Mepron",
        "Malarone (con Proguanil)"
      ],
      "grupo_farmacologico": "Antiprotozoario",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento principal para Babesiosis (B. gibsoni) y Cytauxzoonosis felina.",
        "Debe administrarse SIEMPRE con una comida grasa para que se absorba.",
        "Suele combinarse con Azitromicina para mayor efectividad.",
        "Es una suspensión amarilla espesa que mancha."
      ],
      "usos_principales": "Babesia gibsoni (perros), Cytauxzoon felis (gatos), Neumocistosis."
    },
    "informacion_cliente": [
      "Es CRÍTICO dar este medicamento junto con una comida rica en grasa (ej. comida enlatada), o no funcionará.",
      "El tratamiento es costoso y largo.",
      "La medicina mancha la ropa de amarillo brillante."
    ],
    "monitoreo_paciente": [
      "PCR para confirmar eliminación del parásito (seguimiento).",
      "Hematocrito (resolución de anemia).",
      "Función hepática."
    ],
    "interferencia_laboratorio": [
      "Ninguna reportada comúnmente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Babesia gibsoni",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 13.3,
            "dosis_min": 13.3,
            "dosis_max": 13.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas por 10 días",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Combinar con Azitromicina (10 mg/kg SID)."
        }
      ],
      "gato": [
        {
          "indicacion": "Cytauxzoonosis (C. felis)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas por 10 días",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Combinar con Azitromicina. Tasa de supervivencia ~60% (mejor que sin tratamiento)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Enfermedad hepática."
      ],
      "efectos_adversos": [
        "Vómitos (dar antiemético si es necesario para no perder la dosis).",
        "Diarrea.",
        "Rash cutáneo (raro)."
      ],
      "sobredosis": {
        "signos": ["Molestias GI"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Tetraciclinas / Metoclopramida",
          "efecto": "Pueden reducir niveles plasmáticos de atovacuona",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe el transporte de electrones mitocondrial en el parásito (complejo citocromo bc1), colapsando la membrana mitocondrial.",
      "farmacocinetica": "Absorción altamente dependiente de grasas. Vida media larga (~60-70h)."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Suspensión Oral",
        "concentracion_texto": "750 mg/5 mL (150 mg/mL)",
        "valor_concentracion": 150,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "atracurio",
    "meta_data": {
      "nombre_generico": "Besilato de Atracurio",
      "nombres_comerciales": [
        "Tracrium"
      ],
      "grupo_farmacologico": "Bloqueador Neuromuscular No Despolarizante",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Paraliza los músculos esqueléticos (incluyendo respiratorios).",
        "NO PROVEE ANALGESIA NI SEDACIÓN. El animal estará despierto y con dolor pero incapaz de moverse si no se anestesia.",
        "Eliminación por degradación de Hofmann (independiente de riñón/hígado), ideal para pacientes con falla orgánica.",
        "Requiere ventilación mecánica obligatoria."
      ],
      "usos_principales": "Relajación muscular total para cirugía (oftálmica, ortopédica) o ventilación mecánica."
    },
    "informacion_cliente": [
      "Uso exclusivo intrahospitalario y bajo anestesia general.",
      "Medicamento paralizante."
    ],
    "monitoreo_paciente": [
      "Estimulador de nervios periféricos (Train-of-Four) para evaluar bloqueo.",
      "Capnografía y oximetría (ventilación).",
      "Temperatura (puede bajar)."
    ],
    "interferencia_laboratorio": [
      "Ninguna."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Bloqueo neuromuscular intraoperatorio",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "dosis_min": 0.2,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Bolo inicial, luego mantenimiento",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Inicio 2-3 min. Duración 20-30 min. Mantenimiento con bolos de 1/3 de dosis inicial."
        }
      ],
      "gato": [
        {
          "indicacion": "Bloqueo neuromuscular",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única o CRI",
            "intervalo_horas": 0
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Falta de equipo de ventilación mecánica."
      ],
      "precauciones": [
        "Miastenia gravis (efecto profundo).",
        "Liberación de histamina si se da rápido (hipotensión)."
      ],
      "efectos_adversos": [
        "Liberación de histamina (rubor, hipotensión, broncoespasmo).",
        "Parálisis prolongada (si hay hipotermia o acidosis)."
      ],
      "sobredosis": {
        "signos": ["Parálisis respiratoria prolongada", "Apnea"],
        "tratamiento": "Ventilación continua. Reversión con Neostigmina + Atropina (solo cuando hay signos de recuperación espontánea)."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Aminoglucósidos / Clindamicina",
          "efecto": "Potencian el bloqueo neuromuscular",
          "severidad": "Importante"
        },
        {
          "farmaco": "Anestésicos inhalados (Isoflurano)",
          "efecto": "Potencian el bloqueo (reducir dosis de atracurio)",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Compite con la acetilcolina por los receptores colinérgicos en la placa motora terminal.",
      "farmacocinetica": "Eliminación de Hofmann (degradación química espontánea a pH y temperatura fisiológicos) y hidrólisis esterasa. No depende de hígado/riñón."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "10 mg/mL",
        "valor_concentracion": 10,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "atropina_sulfato",
    "meta_data": {
      "nombre_generico": "Sulfato de Atropina",
      "nombres_comerciales": [
        "Atropina Inyectable",
        "Atro-Ject"
      ],
      "grupo_farmacologico": "Anticolinérgico / Parasimpaticolítico",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Caballos, Ganado)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Aumenta la frecuencia cardiaca (tratamiento de bradicardia).",
        "Reduce secreciones respiratorias y salivales.",
        "Dilata la pupila (midriasis) por largo tiempo.",
        "Antídoto crucial para intoxicación por organofosforados.",
        "Atraviesa la barrera hematoencefálica (puede causar delirio en dosis altas)."
      ],
      "usos_principales": "Preanestesia (para prevenir bradicardia y salivación), tratamiento de bradicardia sinusal/bloqueo AV, antídoto de organofosforados, tratamiento de uveítis (ocular)."
    },
    "informacion_cliente": [
      "Puede causar boca seca y sed.",
      "Las pupilas estarán dilatadas y sensibles a la luz.",
      "Puede causar estreñimiento temporal (íleo)."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardiaca (riesgo de taquicardia excesiva).",
      "Sonidos intestinales (motilidad).",
      "Tamaño pupilar."
    ],
    "interferencia_laboratorio": [
      "Ninguna directa."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Preanestesia / Bradicardia",
          "vias": ["IV", "IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.04,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis bajas pueden causar bradicardia paradójica inicial. En emergencia (RCP) usar dosis alta: 0.04 mg/kg IV."
        },
        {
          "indicacion": "Intoxicación Organofosforados",
          "vias": ["IV", "IM"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.2,
            "dosis_min": 0.1,
            "dosis_max": 0.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Repetir a efecto (hasta secar secreciones)",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Dosis masivas comparadas con las cardiacas."
        }
      ],
      "gato": [
        {
          "indicacion": "Preanestesia",
          "vias": ["IM", "SC"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.02,
            "dosis_min": 0.02,
            "dosis_max": 0.04,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          }
        }
      ],
      "caballo": [
        {
          "indicacion": "Broncodilatación / Bradicardia (Usar con cautela)",
          "vias": ["IV"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.01,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Dosis única",
            "intervalo_horas": 0
          },
          "notas_tecnicas": "Alto riesgo de cólico por íleo."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Glaucoma (aumenta presión intraocular).",
        "Taquicardia.",
        "Íleo u obstrucción intestinal.",
        "Enfermedad cardiaca avanzada."
      ],
      "precauciones": [
        "Rumiantes (saliva se vuelve viscosa y puede obstruir).",
        "Caballos (cólico)."
      ],
      "efectos_adversos": [
        "Boca seca (Xerostomía).",
        "Estreñimiento / Íleo.",
        "Taquicardia sinusal.",
        "Retención urinaria.",
        "Midriasis (visión borrosa)."
      ],
      "sobredosis": {
        "signos": ["Boca seca", "Taquicardia extrema", "Delirio", "Hipertermia"],
        "tratamiento": "Fisiostigmina (si hay arritmias graves o delirio). Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros anticolinérgicos",
          "efecto": "Efecto aditivo (toxicidad)",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Metoclopramida",
          "efecto": "Atropina antagoniza el efecto procinético",
          "severidad": "Importante"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antagonista competitivo de la acetilcolina en receptores muscarínicos postganglionares.",
      "farmacocinetica": "Buena absorción. Metabolismo hepático, excreción renal. Duración sistémica corta, duración ocular muy larga."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Inyectable",
        "concentracion_texto": "0.54 mg/mL, 1/120 gr (15 mg/mL concentrado para organofosforados)",
        "valor_concentracion": 0.54,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      },
      {
        "tipo": "Ungüento/Solución Oftálmica",
        "concentracion_texto": "1%",
        "valor_concentracion": 1,
        "unidad_concentracion": "%",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "auranofina",
    "meta_data": {
      "nombre_generico": "Auranofina",
      "nombres_comerciales": [
        "Ridaura"
      ],
      "grupo_farmacologico": "Sales de Oro (Antirreumático)",
      "status_regulatorio": "Uso extra-label en veterinaria. Rara vez usado actualmente."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inmunosupresor usado para pénfigo complejo autoinmune.",
        "Alternativa oral a las sales de oro inyectables.",
        "Inicio de acción muy lento (semanas a meses).",
        "Ha caído en desuso frente a fármacos más modernos (Ciclosporina, Apoquel, etc.)."
      ],
      "usos_principales": "Enfermedades de la piel inmunomediadas (Pénfigo) en perros y gatos, Artritis reumatoide canina."
    },
    "informacion_cliente": [
      "Pueden pasar meses antes de ver mejoría.",
      "Requiere análisis de sangre frecuentes.",
      "Diarrea es un efecto común."
    ],
    "monitoreo_paciente": [
      "Plaquetas (riesgo de trombocitopenia grave) - cada 2 semanas.",
      "Análisis de orina (proteinuria).",
      "Hemograma y bioquímica."
    ],
    "interferencia_laboratorio": [
      "Proteinuria (daño renal)."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Pénfigo / Artritis",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.1,
            "dosis_min": 0.05,
            "dosis_max": 0.2,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ],
      "gato": [
        {
          "indicacion": "Pénfigo",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Trombocitopenia previa.",
        "Enfermedad renal severa.",
        "Lupus eritematoso sistémico."
      ],
      "precauciones": [
        "Animales debilitados."
      ],
      "efectos_adversos": [
        "Diarrea (común).",
        "Trombocitopenia (baja de plaquetas) - Grave.",
        "Proteinuria / Nefrosis.",
        "Erupciones cutáneas."
      ],
      "sobredosis": {
        "signos": ["Diarrea severa", "Problemas renales"],
        "tratamiento": "Soporte."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Otros inmunosupresores",
          "efecto": "Riesgo aditivo de supresión medular",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la fagocitosis y la liberación de enzimas lisosomales y prostaglandinas. Contiene 29% de oro.",
      "farmacocinetica": "Absorción oral ~20-25%. Se une a células sanguíneas."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Cápsula",
        "concentracion_texto": "3 mg",
        "valor_concentracion": 3,
        "unidad_concentracion": "mg",
        "es_divisible": false
      }
    ]
  },
  {
    "id": "azatioprina",
    "meta_data": {
      "nombre_generico": "Azatioprina",
      "nombres_comerciales": [
        "Imuran"
      ],
      "grupo_farmacologico": "Inmunosupresor (Antimetabolito)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inmunosupresor potente usado para enfermedades autoinmunes (IMHA, Pénfigo, IBD).",
        "EXTREMADAMENTE TÓXICO PARA GATOS (no pueden metabolizarla bien, causa supresión medular fatal).",
        "Efecto lento (tarda 3-6 semanas en funcionar); usar esteroides al inicio.",
        "Permite reducir la dosis de esteroides a largo plazo."
      ],
      "usos_principales": "Anemia hemolítica inmunomediada (IMHA), trombocitopenia, poliartritis, enfermedad inflamatoria intestinal (IBD) en perros."
    },
    "informacion_cliente": [
      "NUNCA DAR A GATOS (salvo indicación de experto con dosis minúscula, mejor evitar).",
      "Usar guantes al manipular las pastillas (es un agente cancerígeno potencial).",
      "Requiere monitoreo de sangre frecuente.",
      "Si hay vómito o diarrea severa, o pancreatitis, avisar."
    ],
    "monitoreo_paciente": [
      "Hemograma completo (CBC) cada 2 semanas los primeros meses (vigilar leucopenia/trombocitopenia).",
      "Enzimas hepáticas (ALT/ALP) - Hepatotoxicidad.",
      "Signos de pancreatitis."
    ],
    "interferencia_laboratorio": [
      "Leucopenia / Anemia (Efecto farmacológico).",
      "Elevación de enzimas hepáticas."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Enfermedades inmunomediadas",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 2,
            "dosis_min": 1.5,
            "dosis_max": 2.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día (luego cada 48h)",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Iniciar diario, cuando hay remisión, bajar a días alternos."
        }
      ],
      "gato": [
        {
          "indicacion": "NO RECOMENDADO",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.3,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 48 horas",
            "intervalo_horas": 48
          },
          "notas_tecnicas": "Dosis muy baja (0.3 mg/kg c/48h) si es absolutamente necesario. Clorambucilo es preferible."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Gatos (Relativa/Absoluta por toxicidad).",
        "Supresión de médula ósea preexistente.",
        "Pancreatitis previa."
      ],
      "precauciones": [
        "Embarazo (teratogénico).",
        "Manipulación humana (riesgo carcinogénico)."
      ],
      "efectos_adversos": [
        "Supresión de médula ósea (Leucopenia, Trombocitopenia).",
        "Hepatotoxicidad (necrosis hepática aguda en perros).",
        "Pancreatitis aguda.",
        "Vómitos/Diarrea."
      ],
      "sobredosis": {
        "signos": ["Infecciones secundarias (sepsis)", "Sangrado", "Falla hepática"],
        "tratamiento": "Soporte, transfusiones, antibióticos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Alopurinol",
          "efecto": "Bloquea metabolismo de azatioprina (toxicidad medular masiva y fatal)",
          "severidad": "Grave"
        },
        {
          "farmaco": "Relajantes musculares",
          "efecto": "Puede inhibir bloqueadores neuromusculares",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Antimetabolito de purina. Se convierte en 6-mercaptopurina, interfiere con síntesis de ADN/ARN y linfocitos T.",
      "farmacocinetica": "Metabolismo hepático complejo (xantina oxidasa y TPMT). Gatos tienen baja actividad de TPMT, acumulando metabolitos tóxicos."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "50 mg",
        "valor_concentracion": 50,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  },
  {
    "id": "azitromicina",
    "meta_data": {
      "nombre_generico": "Azitromicina",
      "nombres_comerciales": [
        "Zithromax"
      ],
      "grupo_farmacologico": "Antibiótico Macrólido (Azálida)",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antibiótico de larga duración (se acumula en tejidos y glóbulos blancos).",
        "Efectivo contra patógenos respiratorios y parásitos intracelulares (Babesia, Cytauxzoon).",
        "Puede causar vómitos; administrar con comida.",
        "Uso popular para rinitis crónica felina y papilomatosis oral canina."
      ],
      "usos_principales": "Infecciones respiratorias superiores (gatos), Bartonelosis, Babesiosis (con atovacuona), Criptosporidiosis, Papilomatosis, Hiperplasia gingival por ciclosporina."
    },
    "informacion_cliente": [
      "No usar en animales con problemas de hígado graves.",
      "Puede causar vómitos o diarrea.",
      "En gatos con problemas respiratorios crónicos, se usa a largo plazo en días alternos."
    ],
    "monitoreo_paciente": [
      "Tolerancia GI.",
      "Enzimas hepáticas (tratamientos largos)."
    ],
    "interferencia_laboratorio": [
      "Ninguna específica."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Babesia gibsoni (con Atovacuona)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 10 días",
            "intervalo_horas": 24
          }
        },
        {
          "indicacion": "Papilomatosis oral / Hiperplasia gingival",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Duración de 10 a 14 días para papilomas."
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones respiratorias (URI)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 5,
            "dosis_min": 5,
            "dosis_max": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 3-5 días",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Debido a su larga vida media, cursos cortos (3-5 días) mantienen niveles por más tiempo. Para crónicos: cada 48-72h."
        },
        {
          "indicacion": "Cytauxzoonosis (con Atovacuona)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Una vez al día por 10 días",
            "intervalo_horas": 24
          }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad a macrólidos.",
        "Falla hepática."
      ],
      "precauciones": [
        "Puede causar arritmias en pacientes cardiacos (prolongación QT - raro en vet pero posible)."
      ],
      "efectos_adversos": [
        "Vómitos (dosis-dependiente).",
        "Diarrea.",
        "Anorexia."
      ],
      "sobredosis": {
        "signos": ["Trastornos GI severos"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Ciclosporina",
          "efecto": "Aumenta niveles de ciclosporina",
          "severidad": "Importante"
        },
        {
          "farmaco": "Antiácidos (Aluminio/Magnesio)",
          "efecto": "Reducen tasa de absorción (separar 2 horas)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe síntesis proteica bacteriana (Ribosoma 50S). Bacteriostático.",
      "farmacocinetica": "Se concentra en fagocitos y fibroblastos, liberándose lentamente en sitios de infección. Niveles en tejido mucho mayores que en suero."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "250 mg, 600 mg",
        "valor_concentracion": 250,
        "unidad_concentracion": "mg",
        "es_divisible": true
      },
      {
        "tipo": "Suspensión Oral",
        "concentracion_texto": "100 mg/5mL, 200 mg/5mL",
        "valor_concentracion": 20,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  }
]
