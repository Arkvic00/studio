import type { Drug } from '@/lib/types';

export const imepitoinDrug: Drug = {
  id: "imepitoin",
  meta_data: {
    nombre_generico: "Imepitoína",
    nombres_comerciales: ["Pexion"],
    grupo_farmacologico: "Anticonvulsivo; Ansiolítico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potencia los efectos inhibidores del receptor GABAA.",
      "Posee un débil efecto bloqueador de canales de calcio.",
      "Inicio de acción más rápido que el fenobarbital (no requiere estado estacionario largo).",
      "Menos efectos secundarios que el fenobarbital (no requiere monitoreo de niveles séricos).",
      "Eficaz para la ansiedad social y no social (ruidos) en perros."
    ],
    usos_principales: "Tratamiento de la epilepsia idiopática y control de la ansiedad en perros.",
    inicio_accion: "Rápido (pocos días)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Puede causar sedación al inicio del tratamiento o en dosis altas.",
    "El perro puede presentar un aumento del hambre y la sed (polifagia/polidipsia).",
    "Si se usa para ansiedad por ruidos, debe acompañarse de un plan de modificación de conducta.",
    "Informe si nota un aumento paradójico de la sensibilidad al sonido."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Epilepsia Idiopática",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Las dosis altas (30 mg/kg) suelen ser más efectivas para el control de convulsiones."
      },
      {
        indicacion: "Control de Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Uso extra-label (Convulsiones/Ansiedad)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Bien tolerado en gatos sanos, pero la eficacia clínica aún no está totalmente probada."
      }
    ],
    roedores: [
      {
        indicacion: "Ratones (Dosis experimental)",
        vias: ["PO", "IP"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 42.5,
          dosis_min: 25,
          dosis_max: 60,
          unidad_calculo: "mg/kg"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa.",
      "Insuficiencia renal severa.",
      "Insuficiencia cardíaca severa."
    ],
    efectos_adversos: [
      "Sedación y somnolencia.",
      "Polifagia, poliuria y polidipsia.",
      "Hiperactividad transitoria.",
      "Emésis y ataxia.",
      "Aumento de la sensibilidad al sonido (paradójico)."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones",
      "Estado mental y grado de sedación"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Sedación profunda", "Ataxia", "Trastornos GI"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital", efecto: "Se ha usado en combinación sin interacciones dañinas reportadas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista parcial de los receptores GABAA que aumenta la inhibición neuronal.",
    farmacocinetica: "Absorción rápida. Vida media corta."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "100 mg, 400 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true }
  ]
};