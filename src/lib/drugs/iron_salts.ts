import type { Drug } from '@/lib/types';

export const ironSaltsDrug: Drug = {
  id: "iron_salts",
  meta_data: {
    nombre_generico: "Sales de Hierro (Fumarato ferroso, Gluconato ferroso, Sulfato ferroso, Hierro dextrano)",
    nombres_comerciales: ["Gleptrosil", "CosmoFer", "Diafer", "Monofer", "Venofer"],
    grupo_farmacologico: "Suplemento mineral; Hematínico",
    status_regulatorio: "POM-VPS, POM, GSL"
  },
  resumen_clinico: {
    puntos_clave: [
      "Esencial para el transporte de oxígeno en la hemoglobina y reacciones oxidativas.",
      "Vía oral preferida; parenteral solo en fallos de absorción o pérdida severa de sangre.",
      "La absorción es compleja y depende de las reservas actuales y la dieta.",
      "Evitar preparados de liberación modificada (se liberan fuera del duodeno).",
      "Administrar 1h antes o horas después de comer para máxima absorción."
    ],
    usos_principales: "Tratamiento de anemia ferropénica y condiciones de alta síntesis de eritrocitos con reservas agotadas."
  },
  informacion_cliente: [
    "Las heces se volverán oscuras o negras; es un efecto normal.",
    "Puede causar náuseas o vómitos; si ocurre, informe al veterinario para ajustar la dosis.",
    "Evite dar leche, huevos o antiácidos junto con el hierro oral.",
    "Mantener fuera del alcance de los niños; las sobredosis son peligrosas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anemia ferropénica",
        vias: ["PO"],
        math: { tipo_calculo: "fija", dosis_recomendada: 350, dosis_min: 100, dosis_max: 600, unidad_calculo: "mg/perro" },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Anemia ferropénica (Parenteral inicial)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 15, dosis_min: 10, dosis_max: 20, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Dosis única seguida de terapia oral", intervalo_horas: 0 }
      }
    ],
    gato: [
      {
        indicacion: "Anemia por fallo renal (con EPO)",
        vias: ["IM"],
        math: { tipo_calculo: "fija", dosis_recomendada: 50, unidad_calculo: "mg/gato (Hierro dextrano)" },
        frecuencia: { texto_ui: "Cada 3 a 4 semanas", intervalo_horas: 672 }
      }
    ],
    conejo: [
      {
        indicacion: "Suplementación (Hierro dextrano)",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" },
        frecuencia: { texto_ui: "Semanalmente o según necesidad", intervalo_horas: 168 }
      }
    ],
    ave: [
      {
        indicacion: "Suplementación",
        vias: ["IM"],
        math: { tipo_calculo: "mg_kg", dosis_recomendada: 10, unidad_calculo: "mg/kg" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Severe infection or inflammation.",
      "Cualquier anemia que no sea ferropénica.",
      "Presencia de úlceras gastrointestinales.",
      "Pacientes con enfermedad hepática, renal (especialmente pielonefritis) o cardíaca severa.",
      "Infecciones urinarias no tratadas."
    ],
    efectos_adversos: [
      "Parenteral: Arritmias, anafilaxia y sobrecarga de hierro.",
      "Oral: Náuseas, vómitos, estreñimiento o diarrea.",
      "Heces oscuras.",
      "Dosis altas pueden ser teratogénicas (hierro dextrano inyectable)."
    ],
    monitoreo_recomendado: [
      "Niveles de hierro sérico y ferritina",
      "Hemograma (PCV/Hematocrito y reticulocitos)",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "Inyectar IM puede ser doloroso. Rotar sitios de inyección.",
    sobredosis: {
      signos: ["Vómitos severos", "Diarrea hemorrágica", "Colapso cardiovascular"],
      tratamiento: "Soporte sintomático; considerar deferoxamina en casos graves de toxicidad aguda."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cloranfenicol", efecto: "Retrasa la respuesta al hierro dextrano. EVITAR.", severidad: "Importante" },
      { farmaco: "Tetraciclinas / Penicilamina", efecto: "El hierro oral se une a estos fármacos reduciendo su absorción.", severidad: "Importante" },
      { farmaco: "Antiácidos / Leche / Huevos", efecto: "Reducen significativamente la absorción de hierro oral.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Componente esencial del grupo hemo para el transporte de oxígeno en glóbulos rojos y cofactor en reacciones enzimáticas oxidativas.",
    farmacocinetica: "Absorción duodenal compleja. El hierro excedente se almacena como ferritina o hemosiderina."
  },
  presentaciones_comerciales: [
    { tipo: "Hierro dextrano inyectable", concentracion_texto: "50-200 mg/ml", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Sulfato ferroso (Tableta)", concentracion_texto: "200 mg", valor_concentracion: 200, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Solución oral", concentracion_texto: "Variable", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};