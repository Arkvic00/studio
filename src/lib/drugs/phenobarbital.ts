import type { Drug } from '@/lib/types';

export const phenobarbitalDrug: Drug = {
  id: "phenobarbital",
  meta_data: {
    nombre_generico: "Fenobarbital",
    nombres_comerciales: ["Epiphen", "Phenoleptil"],
    grupo_farmacologico: "Anticonvulsivo; Barbitúrico",
    status_regulatorio: "POM-V CD"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fármaco de 1ª elección para epilepsia idiopática.",
      "Potencia inhibición por GABA.",
      "Requiere 7-10 días para estado estable.",
      "Inductor enzimático hepático."
    ],
    usos_principales: "Epilepsia idiopática, convulsiones estructurales y estatus epiléptico.",
    inicio_accion: "8-12h (PO); 20 min (IV)",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "No suspenda repentinamente.",
    "Causa mucha hambre y sed al inicio.",
    "Requiere análisis de sangre cada 6 meses.",
    "Informe si nota ojos amarillos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Mantenimiento",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          dosis_min: 2.5,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "Estatus Epiléptico",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 18,
          unidad_calculo: "mg/kg (Carga)"
        }
      }
    ],
    gato: [
      {
        indicacion: "Convulsiones",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Fallo hepático.", "Hipersensibilidad."],
    efectos_adversos: ["Sedación.", "PU/PD.", "Hepatotoxicidad."],
    monitoreo_recomendado: ["Niveles séricos (15-45 ug/ml)", "Función hepática"],
    instrucciones_manejo: "Tapering: reducir 25% al mes.",
    sobredosis: {
      signos: ["Coma", "Depresión respiratoria"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina", efecto: "Aumenta niveles de fenobarbital.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modula receptor GABA-A.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "60 mg", valor_concentracion: 60, unidad_concentracion: "mg", es_divisible: true }
  ]
};