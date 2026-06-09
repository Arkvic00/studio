import type { Drug } from '@/lib/types';

export const leflunomideDrug: Drug = {
  id: "leflunomide",
  meta_data: {
    nombre_generico: "Leflunomida",
    nombres_comerciales: ["Arava"],
    grupo_farmacologico: "Inmunosupresor (Inhibidor de la síntesis de pirimidina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la proliferación de linfocitos T y B y la producción de inmunoglobulinas.",
      "Interfiere con la adhesión de leucocitos.",
      "Utilizado para histiocitosis sistémica y enfermedades inmunomediadas refractarias.",
      "Experiencia clínica limitada en veterinaria.",
      "Requiere manejo cuidadoso de excretas por residuos del fármaco."
    ],
    usos_principales: "Tratamiento de histiocitosis sistémica, artritis reumatoide y enfermedades inmunomediadas en perros y gatos.",
    inicio_accion: "Variable (semanas)",
    duracion_efecto: "Prolongada; requiere administración diaria inicial"
  },
  informacion_cliente: [
    "Utilizar guantes desechables para manipular y administrar las tabletas.",
    "No triturar ni dividir las tabletas.",
    "Las excretas y saliva de la mascota pueden contener restos del fármaco; extreme la higiene.",
    "Informe inmediatamente si nota falta de apetito, vómitos con sangre o letargo extremo.",
    "Se requieren análisis de sangre frecuentes para vigilar el hígado y las defensas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedades inmunomediadas / Histiocitosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Artritis reumatoide (con metotrexato)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10,
          unidad_calculo: "mg/gato/día"
        },
        frecuencia: { texto_ui: "Cada 24h hasta mejoría, luego 10 mg 2 veces por semana", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia hepática severa.",
      "Infecciones activas."
    ],
    efectos_adversos: [
      "Anorexia y letargo.",
      "Mielosupresión (anemia, leucopenia).",
      "Hepatotoxicidad severa (común en humanos, riesgo en animales).",
      "Vómitos con sangre (hematemesis).",
      "Enfermedad pulmonar intersticial (reportado en humanos)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) regularmente",
      "Enzimas hepáticas mensuales",
      "Respuesta clínica de la enfermedad"
    ],
    instrucciones_manejo: "Usar guantes. No romper las tabletas.",
    sobredosis: {
      signos: ["Mielosupresión profunda", "Vómitos", "Letargo"],
      tratamiento: "Soporte sintomático intensivo; considerar colestiramina para acelerar eliminación."
    },
    interacciones_farmacologicas: [
      { farmaco: "Rifampicina", efecto: "Aumenta los niveles de leflunomida.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Pueden potenciar la hepatotoxicidad.", severidad: "Moderada" },
      { farmaco: "Vacunas vivas", efecto: "Interferencia con la respuesta inmune; riesgo de infección.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la dihidroorotato deshidrogenasa, enzima clave en la síntesis 'de novo' de pirimidinas, bloqueando la expansión de clones linfocitarios.",
    farmacocinetica: "Pro-fármaco convertido rápidamente en el metabolito activo A77 1726."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "10 mg, 20 mg, 100 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: false }
  ]
};
