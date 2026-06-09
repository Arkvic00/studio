import type { Drug } from '@/lib/types';

export const methenamineDrug: Drug = {
  id: "methenamine",
  meta_data: {
    nombre_generico: "Metenamina (Hipurato de hexamina)",
    nombres_comerciales: ["Hiprex"],
    grupo_farmacologico: "Antiséptico urinario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antiséptico urinario bacteriostático.",
      "Requiere un pH urinario ácido (<5.5) para liberar formaldehído, su forma activa.",
      "Uso principal en la prevención de infecciones urinarias recurrentes.",
      "No es efectivo para infecciones sistémicas ni para infecciones agudas graves.",
      "Generalmente mal tolerado por gatos."
    ],
    usos_principales: "Control a largo plazo de las infecciones del tracto urinario (ITU) recurrentes.",
    inicio_accion: "Variable (depende del pH urinario)",
    duracion_efecto: "Requiere administración cada 12 a 24 horas"
  },
  informacion_cliente: [
    "Medicamento para prevenir que las infecciones de orina vuelvan.",
    "El perro debe tener la orina ácida para que el fármaco funcione; el veterinario puede recomendar una dieta especial.",
    "No dar junto con medicamentos que alcalinicen la orina (como el citrato de potasio).",
    "Informe si nota erupciones en la piel o malestar estomacal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "ITU recurrente",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 500,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "ITU recurrente",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 250,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal o hepática severa.",
      "Deshidratación.",
      "Acidosis metabólica."
    ],
    efectos_adversos: [
      "Trastornos gastrointestinales (náuseas, vómitos).",
      "Irritación de la vejiga.",
      "Erupciones cutáneas.",
      "Mala tolerancia en gatos."
    ],
    monitoreo_recomendado: [
      "pH urinario (debe ser ácido)",
      "Urianálisis periódico",
      "Función renal"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Irritación vesical severa", "Vómitos"],
      tratamiento: "Soporte sintomático y forzar diuresis."
    },
    interacciones_farmacologicas: [
      { farmaco: "Alcalinizantes urinarios (Citrato potásico)", efecto: "Reducen drásticamente la eficacia al impedir la liberación de formaldehído.", severidad: "Importante" },
      { farmaco: "Sulfonamidas", efecto: "Aumentan el riesgo de cristaluria.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "En medio ácido, la metenamina se hidroliza a formaldehído, el cual posee propiedades antibacterianas inespecíficas.",
    farmacocinetica: "Absorción oral rápida. Excreción renal casi completa."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "1 g (Hiprex)",
      valor_concentracion: 1000,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Tableta combinada",
      concentracion_texto: "150 mg Metenamina + 116 mg Fosfato",
      valor_concentracion: 150,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
