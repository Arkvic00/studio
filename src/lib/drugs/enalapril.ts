import type { Drug } from '@/lib/types';

export const enalaprilDrug: Drug = {
  id: "enalapril",
  meta_data: {
    nombre_generico: "Enalapril",
    nombres_comerciales: ["Enacard", "Vasotec"],
    grupo_farmacologico: "Inhibidor de la Enzima Convertidora de Angiotensina (IECA)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la conversión de angiotensina I en angiotensina II.",
      "Reduce la precarga y poscarga mediante vasodilatación arterial y venosa.",
      "Disminuye la presión intraglomerular, lo que reduce la proteinuria.",
      "Puede exacerbar la azotemia en animales hipotensos o con pobre perfusión renal.",
      "Requiere monitoreo regular de presión arterial, creatinina y electrolitos."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva (ICC), hipertensión sistémica y nefropatías con pérdida de proteínas (PLN).",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Monitorear si el animal parece mareado, débil o se desmaya (posible presión baja).",
    "No suspenda el medicamento sin consultar, ya que puede empeorar la falla cardíaca.",
    "Se requieren análisis de sangre periódicos para vigilar los riñones.",
    "No se recomienda su uso en hembras destinadas a la cría o gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insuficiencia Cardíaca / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (aumentar a q12h si no hay respuesta tras 2 semanas)",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Nefropatía con pérdida de proteínas (PLN)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    gato: [
      {
        indicacion: "Falla cardíaca / PLN",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 }
      }
    ],
    huron: [
      {
        indicacion: "Falla cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 }
      }
    ],
    conejo: [
      {
        indicacion: "Falla cardíaca / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.35,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas", intervalo_horas: 24 },
        notas_tecnicas: "Riesgo de hipotensión significativa y azotemia; iniciar con la dosis más baja."
      }
    ],
    roedores: [
      {
        indicacion: "Dosis general",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Hipertensión (con Amlodipino)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Bajo gasto cardíaco (shock cardiogénico).",
      "Hipotensión sistémica.",
      "Obstrucción del flujo de salida (estenosis aórtica severa)."
    ],
    efectos_adversos: [
      "Hipotensión.",
      "Hiperpotasemia.",
      "Azotemia prerenal.",
      "Anorexia y vómitos (raro)."
    ],
    monitoreo_recomendado: [
      "Presión arterial",
      "Creatinina y BUN séricos",
      "Electrolitos (especialmente Potasio)"
    ],
    instrucciones_manejo: "Almacenar a temperatura ambiente en lugar seco.",
    sobredosis: {
      signos: ["Hipotensión severa", "Colapso"],
      tratamiento: "Fluidoterapia con solución salina isotónica para soporte de volumen."
    },
    interacciones_farmacologicas: [
      { farmaco: "Espironolactona / Potasio", efecto: "Riesgo de hiperpotasemia severa.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumentan riesgo de nefrotoxicidad y reducen eficacia del IECA.", severidad: "Importante" },
      { farmaco: "Diuréticos / Vasodilatadores", efecto: "Efecto hipotensor aditivo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Pro-fármaco que se hidroliza a enalaprilato. Inhibe la ACE, disminuyendo angiotensina II y aldosterona, y aumentando bradicinina.",
    farmacocinetica: "Eliminación renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "1 mg, 2.5 mg, 5 mg, 10 mg, 20 mg", valor_concentracion: 2.5, unidad_concentracion: "mg", es_divisible: true }
  ]
};
