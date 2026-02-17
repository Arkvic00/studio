
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
      "nombres_comerciales": ["Precose", "Glucobay"],
      "grupo_farmacologico": "Inhibidor de la alfa-glucosidasa (Antidiabético)",
      "status_regulatorio": "Uso Extra-label (Fuera de etiqueta) en veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Agente antihiperglucémico que reduce la tasa de absorción de glucosa tras las comidas.",
        "Útil en perros y gatos con hiperglucemia leve o picos de insulina postprandiales.",
        "Rara vez efectivo como terapia única; suele ser adjunto a la insulina o dieta.",
        "Efectos adversos gastrointestinales (gases, diarrea) pueden limitar su uso."
      ],
      "usos_principales": "Reducción de glucosa postprandial en diabetes mellitus no insulino-dependiente o como adjunto en insulino-dependiente."
    },
    "informacion_cliente": [
      "Para que funcione, debe administrarse con la comida (preferiblemente justo antes de comer).",
      "No funciona bien si la mascota tiene comida disponible todo el día (ad libitum); debe haber horarios fijos.",
      "Los efectos secundarios más comunes son gases (flatulencia) y heces blandas o diarrea.",
      "Puede tardar hasta 2 semanas en mostrar su efecto completo.",
      "Esté atento a signos de azúcar baja (debilidad, temblores) si se combina con insulina."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Tratamiento adjunto diabetes mellitus",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 12.5,
            "dosis_min": 12.5,
            "dosis_max": 25,
            "tope_maximo_mg": 100,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas (con cada comida)",
            "intervalo_horas": 12
          },
          "duracion_tratamiento": "Indefinido (crónico)",
          "notas_tecnicas": "Dosis por PERRO, no por kg. Se puede titular hasta 50mg o 100mg en perros grandes (>10-25kg) si la respuesta es inadecuada."
        }
      ],
      "gato": [
        {
          "indicacion": "Tratamiento adjunto diabetes mellitus",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 12.5,
            "dosis_min": null,
            "dosis_max": null,
            "tope_maximo_mg": null,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas (con comida)",
            "intervalo_horas": 12
          },
          "duracion_tratamiento": "Indefinido (crónico)",
          "notas_tecnicas": "Dosis por GATO, no por kg. Más efectivo en gatos que comen su ración rápidamente."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Cetoacidosis diabética", "Enfermedad inflamatoria intestinal (IBD)", "Ulceración colónica", "Obstrucción intestinal parcial o predisposición", "Pacientes con bajo peso corporal", "Casos donde la formación excesiva de gas sea perjudicial"],
      "precauciones": ["Insuficiencia renal", "Enfermedad hepática severa", "Monitorizar enzimas hepáticas"],
      "efectos_adversos": ["Heces blandas / Diarrea (Dosis dependiente)", "Flatulencia", "Pérdida de peso", "Aumento de transaminasas hepáticas (raro)"],
      "seguridad_reproductiva": { "gestacion": "Evaluar riesgo/beneficio (sin evidencia de daño fetal en laboratorio)", "lactancia": "Probablemente seguro (mínima absorción sistémica)" },
      "sobredosis": { "signos": ["Diarrea", "Flatulencia"], "tratamiento": "Sintomático. Si hay hipoglucemia usar dextrosa parenteral o glucosa oral (NO sacarosa).", "contraindicado_en_urgencia": [] },
      "interacciones_farmacologicas": [
        { "farmaco": "Carbón activado", "efecto": "Reduce eficacia de acarbosa", "severidad": "Moderada" },
        { "farmaco": "Digoxina", "efecto": "Puede reducir niveles de digoxina", "severidad": "Moderada" },
        { "farmaco": "Enzimas pancreáticas (Amilasa)", "efecto": "Reducen eficacia de acarbosa", "severidad": "Moderada" },
        { "farmaco": "Insulina / Sulfonilureas", "efecto": "Aumenta riesgo de hipoglucemia", "severidad": "Importante" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente la alfa-amilasa pancreática y alfa-glucosidasas intestinales, retrasando la digestión de carbohidratos complejos a glucosa.",
      "farmacocinetica": { "general": "Mínima absorción sistémica (2-4%). Metabolizada por flora intestinal.", "datos_especie": { "perro": "Absorción aprox 4% dosis oral.", "gato": "Efectiva reduciendo AUC de glucosa postprandial un 5-7.5%." } }
    },
    "propiedades_fisicoquimicas": { "descripcion": "Polvo blanco a blanquecino, soluble en agua.", "almacenamiento": "Menor a 25°C, proteger de humedad.", "compatibilidad": { "compatibles": ["Alimento (mezclar justo antes)"], "incompatibles": [] } },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "25 mg", "valor_concentracion": 25, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "50 mg", "valor_concentracion": 50, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "100 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "acepromazina_maleato",
    "meta_data": {
      "nombre_generico": "Acepromazina Maleato",
      "nombres_comerciales": ["PromAce", "Aceproject", "Calmivet"],
      "grupo_farmacologico": "Sedante Fenotiazínico / Tranquilizante",
      "status_regulatorio": "Aprobado FDA (Perros, Gatos, Caballos)"
    },
    "resumen_clinico": {
      "puntos_clave": ["Sedante sin efectos analgésicos (requiere combinación con opioides para dolor).", "Causa hipotensión significativa (vasodilatación alfa-bloqueante).", "Sin agente de reversión. Duración larga (4-8 horas).", "Precaución extrema o evitar en perros con mutación MDR1 (Collies, Pastores).", "Puede causar prolapso de pene persistente en caballos sementales."],
      "usos_principales": "Sedación, preanestesia, ansiolisis (discutido), tratamiento adjunto obstrucción uretral en gatos, laminitis en equinos."
    },
    "informacion_cliente": ["La orina puede tornarse de color rosado o marrón rojizo; es inofensivo.", "El animal puede asustarse fácilmente con ruidos fuertes incluso estando sedado.", "Mantenga al animal en un lugar tranquilo y cómodo.", "Puede tardar 45-60 minutos en hacer efecto si se da por boca.", "Precaución en razas como Bóxer o perros pastores (Collies)."],
    "parametros_dosificacion": {
      "perro": [
        { "indicacion": "Sedación / Tranquilización (Extra-label - Recomendado)", "vias": ["IV", "IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.01, "dosis_max": 0.1, "tope_maximo_mg": 3, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única o repetir s/n", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Dosis mayores a 3mg totales por perro no recomendadas. Razas gigantes son más sensibles (usar dosis baja)." },
        { "indicacion": "Preanestesia", "vias": ["IV", "IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.03, "dosis_min": 0.02, "dosis_max": 0.05, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Previa inducción", "intervalo_horas": 0 }, "duracion_tratamiento": "Dosis única", "notas_tecnicas": "Permite reducir dosis de inducción un 30%." },
        { "indicacion": "Oral (Etiqueta FDA - Dosis alta)", "vias": ["PO"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 1.0, "dosis_min": 0.55, "dosis_max": 2.2, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Repetir según necesidad", "intervalo_horas": 0 }, "duracion_tratamiento": "Sintomático", "notas_tecnicas": "Muchos clínicos consideran esta dosis excesiva." }
      ],
      "gato": [
        { "indicacion": "Sedación / Preanestesia (Extra-label)", "vias": ["IV", "IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.01, "dosis_max": 0.1, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "IV administrar lento." },
        { "indicacion": "Adjunto obstrucción uretral", "vias": ["IM"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 0.25, "dosis_min": null, "dosis_max": null, "tope_maximo_mg": null, "unidad_calculo": "mg/gato" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Agudo", "notas_tecnicas": "Combinar con buprenorfina. Evitar si hay hipotensión severa." }
      ],
      "caballo": [
        { "indicacion": "Sedación / Preanestesia (Extra-label)", "vias": ["IV", "IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.02, "dosis_max": 0.1, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Esperar 15 mins tras IV para efecto." },
        { "indicacion": "Laminitis (Vasodilatación)", "vias": ["IV", "IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.04, "dosis_max": 0.066, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Según criterio (frecuentemente TID/QID)", "intervalo_horas": 8 }, "duracion_tratamiento": "Crónico/Agudo", "notas_tecnicas": "Mejora flujo sanguíneo al casco." }
      ],
      "bovino": [ { "indicacion": "Sedación (Extra-label)", "vias": ["IV", "IM"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.01, "dosis_max": 0.1, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Riesgo de regurgitación ruminal." } ],
      "ovino_caprino": [ { "indicacion": "Sedación (Extra-label)", "vias": ["IM"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.05, "dosis_min": 0.05, "dosis_max": 0.1, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Dosis baja suele ser adecuada." } ],
      "cerdo": [ { "indicacion": "Sedación (Extra-label)", "vias": ["IM", "IV", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.1, "dosis_min": 0.03, "dosis_max": 0.2, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Efecto inconsistente como agente único." } ],
      "huron": [ { "indicacion": "Tranquilización", "vias": ["IM", "SC"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.5, "dosis_min": 0.25, "dosis_max": 0.75, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Dosis baja suele ser adecuada." } ],
      "conejo": [ { "indicacion": "Sedación / Tranquilización", "vias": ["IM"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 0.8, "dosis_min": 0.75, "dosis_max": 1.0, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "Efecto dura 1-2 horas." } ],
      "roedores": [ { "indicacion": "Sedación (Ratones, Ratas, Hamsters, Cobayas)", "vias": ["IM", "SC", "PO"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 1.0, "dosis_min": 0.5, "dosis_max": 1.5, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }, "duracion_tratamiento": "Procedimiento", "notas_tecnicas": "En jerbos no recomendado por algunos clínicos." } ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Pacientes con exposición a organofosforados", "Pacientes en shock hipovolémico", "Insuficiencia cardiaca severa", "Historia de convulsiones por fenotiazinas (controversial)", "No usar Epinefrina para tratar hipotensión por Acepromazina"],
      "precauciones": ["Mutación genética MDR1 (Collies, Pastores Australianos) -> Reducir dosis 25-50% o evitar", "Razas braquicéfalas (Boxers) -> Riesgo de síncope vagal", "Animales agresivos (puede aumentar reactividad al sobresalto)", "Sementales equinos (Prolapso peneano)", "Enfermedad hepática"],
      "efectos_adversos": ["Hipotensión y bradicardia (colapso cardiovascular)", "Protrusión de la membrana nictitante", "Secuestro esplénico (baja hematocrito transitoria)", "Prolapso peneano en caballos (Paráfimosis)", "Agresión paradójica"],
      "seguridad_reproductiva": { "gestacion": "Contraindicado en etiqueta, pero usado en bovinos/hurones. Evitar en cesáreas (hipotensión fetal).", "lactancia": "Seguridad no establecida, aunque usado en yeguas para estimular lactancia." },
      "sobredosis": { "signos": ["Hipotensión severa", "Colapso", "Rigidez", "Temblores (signos extrapiramidales)"], "tratamiento": "Fluidos IV. Fenilefrina o Norepinefrina. NO USAR EPINEFRINA (Causa 'Inversión de Epinefrina' empeorando hipotensión).", "contraindicado_en_urgencia": ["Epinefrina"] },
      "interacciones_farmacologicas": [
        { "farmaco": "Organofosforados", "efecto": "Potencia toxicidad", "severidad": "Grave" },
        { "farmaco": "Epinefrina", "efecto": "Causa vasodilatación e hipotensión severa (Inversión)", "severidad": "Grave" },
        { "farmaco": "Opioides / Anestésicos", "efecto": "Potencia depresión CNS e hipotensión", "severidad": "Moderada" },
        { "farmaco": "Antiácidos", "efecto": "Reducen absorción oral", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo de receptores dopaminérgicos postsinápticos en SNC y bloqueo alfa-adrenérgico periférico (causando vasodilatación).",
      "farmacocinetica": { "general": "Inicio acción 15-30 min. Duración 3-8 horas. Metabolismo hepático.", "datos_especie": { "perro": "Biodisponibilidad oral 20%. Vida media 7h (IV) a 16h (PO).", "caballo": "Efecto sedante en 5 min IV. Vida media 3h. Metabolitos en orina hasta 144h." } }
    },
    "propiedades_fisicoquimicas": { "descripcion": "Polvo amarillo inodoro. Solución inyectable amarillo pálido.", "almacenamiento": "Proteger de luz. Temperatura ambiente (20-25°C).", "compatibilidad": { "compatibles": ["Mezclas con Ketamina/Xilacina estables si protegidas de luz"], "incompatibles": ["Glicopirrolato", "Diazepam"] } },
    "presentaciones_comerciales": [
      { "tipo": "Solución Inyectable", "concentracion_texto": "10 mg/mL", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "10 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "25 mg", "valor_concentracion": 25, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "acetaminofen",
    "meta_data": {
      "nombre_generico": "Acetaminofén / Paracetamol",
      "nombres_comerciales": ["Tylenol"],
      "grupo_farmacologico": "Analgésico no opioide / Antipirético",
      "status_regulatorio": "Uso humano (Uso Extra-label en veterinaria)"
    },
    "resumen_clinico": {
      "puntos_clave": ["CONTRAINDICADO ABSOLUTAMENTE EN GATOS (Mortal).", "Contraindicado en Hurones.", "Útil en perros para dolor crónico o postquirúrgico (alternativa a AINEs).", "Riesgo de toxicidad hepática y metahemoglobinemia en dosis altas."],
      "usos_principales": "Analgesia y control de fiebre en perros, caballos y pequeños mamíferos."
    },
    "informacion_cliente": ["NUNCA administre este medicamento a gatos. Puede causar la muerte rápidamente.", "No usar en Hurones.", "En perros, vigile si los ojos o encías se ponen amarillos, vómitos o falta de apetito.", "Mantener fuera del alcance de los niños y animales.", "No combinar con otros medicamentos para el dolor sin receta."],
    "parametros_dosificacion": {
      "perro": [
        { "indicacion": "Analgesia / Antipirético", "vias": ["PO", "Rectal"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 12.5, "dosis_min": 10, "dosis_max": 15, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Cada 8 horas (o 12h en uso crónico)", "intervalo_horas": 8 }, "duracion_tratamiento": "Según respuesta", "notas_tecnicas": "Si uso >5 días, bajar frecuencia a BID." }
      ],
      "caballo": [
        { "indicacion": "Analgesia / Antipirético", "vias": ["PO"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 20, "dosis_min": null, "dosis_max": null, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Cada 12 horas o dosis única", "intervalo_horas": 12 }, "duracion_tratamiento": "Corto plazo", "notas_tecnicas": "Monitorear hígado si uso >14 días." }
      ],
      "conejo": [
        { "indicacion": "Analgesia (Dolor leve-moderado)", "vias": ["PO (Agua)"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 1.5, "dosis_min": 1.0, "dosis_max": 2.0, "tope_maximo_mg": null, "unidad_calculo": "mg/ml_agua" }, "frecuencia": { "texto_ui": "En agua de bebida ad libitum", "intervalo_horas": 24 }, "duracion_tratamiento": "Sintomático", "notas_tecnicas": "Dosis expresada en concentración mg/mL de agua de bebida." }
      ],
      "roedores": [
        { "indicacion": "Analgesia (Dolor leve-moderado)", "vias": ["PO (Agua)"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 1.5, "dosis_min": 1.0, "dosis_max": 2.0, "tope_maximo_mg": null, "unidad_calculo": "mg/ml_agua" }, "frecuencia": { "texto_ui": "En agua de bebida ad libitum", "intervalo_horas": 24 }, "duracion_tratamiento": "Sintomático", "notas_tecnicas": "Dosis expresada en concentración mg/mL de agua de bebida." }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["GATOS (Deficiencia de glucuronil transferasa)", "Hurones", "Petauros del azúcar (Sugar Gliders)", "Erizos", "Hipersensibilidad al fármaco"],
      "precauciones": ["Insuficiencia hepática", "Uso crónico en perros (Hepatotoxicidad)", "Queratoconjuntivitis seca (dosis altas)"],
      "efectos_adversos": ["Hepatotoxicidad (Ictericia, vómitos, anorexia)", "Metahemoglobinemia (Cianosis, sangre oscura, distress respiratorio)", "Queratoconjuntivitis seca (ojo seco) en dosis altas", "Daño renal"],
      "seguridad_reproductiva": { "gestacion": "Cruza placenta. Considerado relativamente seguro para uso ocasional.", "lactancia": "Se excreta en leche en concentraciones bajas. Considerado aceptable." },
      "sobredosis": { "signos": ["Edema facial (gatos)", "Cianosis", "Ictericia", "Vómitos", "Depresión"], "tratamiento": "N-Acetilcisteína (Antídoto). SAMe. Oxígeno. Transfusiones.", "contraindicado_en_urgencia": [] },
      "interacciones_farmacologicas": [
        { "farmaco": "Barbitúricos", "efecto": "Aumenta metabolitos tóxicos hepáticos", "severidad": "Grave" },
        { "farmaco": "Doxorrubicina", "efecto": "Depleta glutatión, aumenta riesgo hepático", "severidad": "Importante" },
        { "farmaco": "Warfarina", "efecto": "Puede potenciar efectos anticoagulantes", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de COX (ciclooxigenasa) central y actividad serotoninérgica. Pobre actividad antiinflamatoria periférica.",
      "farmacocinetica": { "general": "Absorción rápida. Metabolismo hepático (Glucuronidación - Vía deficiente en gatos).", "datos_especie": { "perro": "Biodisponibilidad oral 45%. Vida media 1-4h. Absorción rectal pobre (30%).", "caballo": "Biodisponibilidad oral 91%. Vida media 2-4h." } }
    },
    "propiedades_fisicoquimicas": { "descripcion": "Polvo cristalino blanco, sabor amargo.", "almacenamiento": "Menor a 40°C. No congelar soluciones.", "compatibilidad": { "compatibles": ["Alimentos (tabletas trituradas)"], "incompatibles": [] } },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "325 mg", "valor_concentracion": 325, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "500 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Líquido Oral", "concentracion_texto": "32 mg/mL", "valor_concentracion": 32, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "acetazolamida",
    "meta_data": {
      "nombre_generico": "Acetazolamida",
      "nombres_comerciales": ["Diamox"],
      "grupo_farmacologico": "Diurético Inhibidor de Anhidrasa Carbónica / Antiglaucoma",
      "status_regulatorio": "Uso humano (Uso Extra-label en veterinaria)"
    },
    "resumen_clinico": {
      "puntos_clave": ["Usado para tratar alcalosis metabólica, glaucoma y Parálisis Periódica Hiperpotasémica (HYPP) en caballos.", "Contraindicado en insuficiencia hepática, renal, o desbalances electrolíticos graves.", "Monitorear electrolitos y estado ácido-base en terapias crónicas.", "Administrar con comida si hay molestias gástricas."],
      "usos_principales": "Glaucoma (reduce humor acuoso), Alcalosis metabólica, HYPP en equinos."
    },
    "informacion_cliente": ["El efecto secundario más común es malestar estomacal; dar con comida ayuda.", "Contacte al veterinario si ve jadeo inusual, debilidad o cambios de comportamiento.", "Los caballos deben tener acceso a agua fresca siempre.", "Se requerirán análisis de sangre frecuentes durante el tratamiento."],
    "parametros_dosificacion": {
      "perro": [
        { "indicacion": "Glaucoma / Alcalosis metabólica", "vias": ["PO", "IV"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 7, "dosis_min": 4, "dosis_max": 10, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Cada 8 a 12 horas", "intervalo_horas": 8 }, "duracion_tratamiento": "Crónico/Agudo", "notas_tecnicas": "Monitorizar presión intraocular." }
      ],
      "gato": [
        { "indicacion": "Glaucoma (Adjunto)", "vias": ["PO"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 7, "dosis_min": 6, "dosis_max": 8, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Cada 8 a 12 horas", "intervalo_horas": 8 }, "duracion_tratamiento": "Crónico", "notas_tecnicas": "Puede causar acidosis metabólica." }
      ],
      "caballo": [
        { "indicacion": "HYPP (Parálisis Periódica Hiperpotasémica)", "vias": ["PO"], "math": { "tipo_calculo": "mg_kg", "dosis_recomendada": 3.3, "dosis_min": 2.2, "dosis_max": 4.4, "tope_maximo_mg": null, "unidad_calculo": "mg/kg" }, "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 }, "duracion_tratamiento": "Crónico", "notas_tecnicas": "Preventivo o adjunto." }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Insuficiencia hepática o renal severa", "Hiponatremia o Hipopotasemia", "Acidosis hiperclorémica", "Insuficiencia adrenocortical", "Obstrucción pulmonar severa"],
      "precauciones": ["Gatos (sensibles a acidosis)", "Pacientes con cálculos renales (alcaliniza orina)"],
      "efectos_adversos": ["Disturbios GI (Vómito, diarrea)", "Sedación / Depresión SNC", "Hipopotasemia", "Acidosis metabólica", "Cristaluria"],
      "seguridad_reproductiva": { "gestacion": "Efectos teratogénicos en animales de laboratorio. Usar solo si beneficio supera riesgo.", "lactancia": "Se excreta en leche. Usar sustituto lácteo si es inevitable tratar a la madre." },
      "sobredosis": { "signos": ["Desbalance electrolítico", "Acidosis", "Signos SNC"], "tratamiento": "Soporte, corrección electrolítica. Es dializable.", "contraindicado_en_urgencia": [] },
      "interacciones_farmacologicas": [
        { "farmaco": "Aspirina (Salicilatos)", "efecto": "Riesgo de toxicidad severa y acidosis", "severidad": "Grave" },
        { "farmaco": "Digoxina", "efecto": "Hipopotasemia aumenta risco de toxicidad por digoxina", "severidad": "Importante" },
        { "farmaco": "Fenobarbital", "efecto": "Aumenta excreción (reduce eficacia) por orina alcalina", "severidad": "Moderada" },
        { "farmaco": "Bicarbonato de Sodio", "efecto": "Aumenta riesgo de cálculos renales", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición reversible de la anhidrasa carbónica. Reduce formación de humor acuoso (ojo) y aumenta excreción renal de Na, K y Bicarbonato.",
      "farmacocinetica": { "general": "Absorción oral buena. Excreción renal inalterada mayormente.", "datos_especie": { "perro": "Inicio acción IOP: 30 min. Duración 4-6h.", "caballo": "Biodisponibilidad oral baja (25%)." } }
    },
    "propiedades_fisicoquimicas": { "descripcion": "Polvo cristalino blanco. Solubilidad ligera en agua.", "almacenamiento": "Temperatura ambiente.", "compatibilidad": { "compatibles": ["Mayoría de fluidos IV"], "incompatibles": [] } },
    "presentaciones_comerciales": [
      { "tipo": "Tableta", "concentracion_texto": "250 mg", "valor_concentracion": 250, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta", "concentracion_texto": "125 mg", "valor_concentracion": 125, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "acido_acetico",
    "meta_data": {
      "nombre_generico": "Ácido Acético / Vinagre",
      "nombres_comerciales": ["Vinagre Blanco"],
      "grupo_farmacologico": "Acidificante Gastrointestinal",
      "status_regulatorio": "Suplemento / Químico"
    },
    "resumen_clinico": {
      "puntos_clave": ["Usado para tratar intoxicación por urea (amoniaco) en rumiantes.", "Prevención de enterolitos en caballos.", "USAR SOLAMENTE VINAGRE (3-5%), NO ÁCIDO CONCENTRADO.", "Contraindicado si hay sospecha de acidosis láctica (sobrecarga de granos)."],
      "usos_principales": "Intoxicación por urea en rumiantes, acidificación colónica en equinos."
    },
    "informacion_cliente": ["Use vinagre de cocina común (blanco). No use químicos industriales.", "En caballos, se puede mezclar con la comida diariamente."],
    "parametros_dosificacion": {
      "bovino": [
        { "indicacion": "Intoxicación por Urea (Extra-label)", "vias": ["Ruminal (Sonda)"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 7, "dosis_min": 4, "dosis_max": 10, "tope_maximo_mg": null, "unidad_calculo": "Litros/animal (Vinagre 5%)" }, "frecuencia": { "texto_ui": "Repetir s/n", "intervalo_horas": 0 }, "duracion_tratamiento": "Agudo", "notas_tecnicas": "Seguir con agua fría (hasta 30L)." }
      ],
      "ovino_caprino": [
        { "indicacion": "Intoxicación por Urea (Extra-label)", "vias": ["Ruminal (Sonda)"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 0.6, "dosis_min": 0.25, "dosis_max": 1.0, "tope_maximo_mg": null, "unidad_calculo": "Litros/animal (Vinagre 5%)" }, "frecuencia": { "texto_ui": "Repetir s/n", "intervalo_horas": 0 }, "duracion_tratamiento": "Agudo", "notas_tecnicas": "Seguir con agua fría (2-8L)." }
      ],
      "caballo": [
        { "indicacion": "Prevención Enterolitos (Extra-label)", "vias": ["PO"], "math": { "tipo_calculo": "fija", "dosis_recomendada": 250, "dosis_min": null, "dosis_max": null, "tope_maximo_mg": null, "unidad_calculo": "ml/caballo_450kg" }, "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 }, "duracion_tratamiento": "Preventivo", "notas_tecnicas": "Equivalente a 250ml por cada 450kg de peso." }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Acidosis láctica (Sobrecarga de granos)", "Uso de formas concentradas (corrosivo)"],
      "precauciones": ["Irritación de mucosas si no se usa sonda"],
      "efectos_adversos": ["Irritación de mucosas", "Sabor desagradable"],
      "seguridad_reproductiva": { "gestacion": "No especificado.", "lactancia": "No especificado." },
      "sobredosis": { "signos": ["Irritación GI", "Acidosis sistémica (si dosis masiva)"], "tratamiento": "Dilución. Soporte.", "contraindicado_en_urgencia": [] },
      "interacciones_farmacologicas": [
        { "farmaco": "Aspirina", "efecto": "Orina ácida disminuye excreción de salicilatos", "severidad": "Moderada" },
        { "farmaco": "Antifúngicos Azoles", "efecto": "Aumenta absorción de azoles", "severidad": "Leve" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Baja el pH ruminal, convirtiendo amoniaco (NH3) a amonio (NH4+), reduciendo su absorción.",
      "farmacocinetica": { "general": "No informacion farmacocinética disponible.", "datos_especie": {} }
    },
    "propiedades_fisicoquimicas": { "descripcion": "Líquido con olor distintivo y sabor ácido.", "almacenamiento": "Envases herméticos.", "compatibilidad": { "compatibles": ["Agua"], "incompatibles": [] } },
    "presentaciones_comerciales": [
      { "tipo": "Solución (Vinagre)", "concentracion_texto": "5%", "valor_concentracion": 5, "unidad_concentracion": "%", "es_divisible": true }
    ]
  }
];
