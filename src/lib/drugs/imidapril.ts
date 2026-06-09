import type { Drug } from '@/lib/types';

export const imidaprilDrug: Drug = {
  id: "imidapril",
  meta_data: {
    nombre_generico: "Imidapril",
    nombres_comerciales: ["Prilium"],
    grupo_farmacologico: "Inhibidor de la Enzima Convertidora de Angiotensina (IECA)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la conversión de angiotensina I en angiotensina II.",
      "Reduce la precarga y poscarga mediante venodilatación y arteriodilatación.",
      "Disminuye la retención de agua y sal al reducir la producción de aldosterona.",
      "Ayuda a disminuir la proteinuria al reducir la presión intraglomerular.",
      "Apto para el manejo de la insuficiencia cardíaca congestiva en perros.",
      "Fácil de dosificar en especies pequeñas debido a su formulación líquida tras reconstitución."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva (mitral o MCD), manejo de la hipertensión sistémica y nefropatías con pérdida de proteínas.",
    inicio_accion: "Rápido (efecto hemodinámico inicial)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy débil, se desmaya o está desorientada (posible presión baja).",
    "Se requieren análisis de sangre periódicos para controlar el potasio y la función de los riñones.",
    "No suspenda el medicamento de forma repentina.",
    "El producto viene en polvo y debe ser reconstituido por el veterinario o siguiendo instrucciones precisas.",
    "No se recomienda en hembras gestantes o lactantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Insuficiencia Cardíaca / Hipertensión / Proteinuria",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Solo para perros con un peso > 4 kg. A menudo se usa junto con diuréticos."
      }
    ],
    gato: [
      {
        indicacion: "Uso extra-label (Falla cardíaca / Proteinuria)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis anecdótica; experiencia clínica limitada en esta especie."
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Nefropatía con pérdida de proteínas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Hipertensión pulmonar / Falla cardíaca",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosis basada en estudios en pollos; parece efectiva en aves de compañía."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Fallo renal agudo.",
      "Hipotensión sistémica o hipovolemia.",
      "Estenosis aórtica hemodinámicamente relevante.",
      "Cardiomiopatía hipertrófica obstructiva."
    ],
    efectos_adversos: [
      "Hipotensión (debilidad, ataxia).",
      "Hiperpotasemia.",
      "Azotemia prerrenal.",
      "Vómitos y diarrea (raros)."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica",
      "Creatinina y Urea séricas",
      "Electrolitos (Potasio)"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Reconstituir solo con el diluyente proporcionado.",
    sobredosis: {
      signos: ["Hipotensión severa", "Colapso"],
      tratamiento: "Soporte de volumen con solución salina isotónica IV."
    },
    interacciones_farmacologicas: [
      { farmaco: "Espironolactona / Potasio", efecto: "Riesgo de hiperpotasemia severa.", severidad: "Importante" },
      { farmaco: "AINEs", efecto: "Aumentan riesgo de nefrotoxicidad y reducen eficacia del IECA.", severidad: "Importante" },
      { farmaco: "Diuréticos / Vasodilatadores / Anestésicos", efecto: "Riesgo de hipotensión severa.", severidad: "Importante" },
      { farmaco: "Beta-bloqueadores", efecto: "Efecto hipotensor aditivo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la enzima convertidora de angiotensina (ACE), reduciendo angiotensina II y aldosterona, y aumentando bradicinina.",
    farmacocinetica: "Excreción renal y biliar."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo para solución oral",
      concentracion_texto: "75 mg, 150 mg (para reconstituir)",
      valor_concentracion: 75,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};