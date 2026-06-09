import type { Drug } from '@/lib/types';

export const colchicineDrug: Drug = {
  id: "colchicine",
  meta_data: {
    nombre_generico: "Colquicina",
    nombres_comerciales: ["Colchicine*"],
    grupo_farmacologico: "Antifibrótico; Bloqueador de la síntesis de amiloide A",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de colágeno y puede aumentar la actividad de la colagenasa.",
      "Bloquea la síntesis y secreción del amiloide A sérico.",
      "Uso principal en fibrosis hepática y amiloidosis renal (Fiebre del Shar Pei).",
      "En aves, se utiliza para gota y cirrosis/fibrosis hepática.",
      "Margen de seguridad estrecho; las sobredosis pueden ser fatales."
    ],
    usos_principales: "Manejo de amiloidosis renal, fibrosis hepática y pulmonar. Tratamiento de gota en aves.",
    inicio_accion: "Variable (efecto acumulativo para amiloidosis)",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Vigilar estrechamente la aparición de vómitos, dolor abdominal o diarrea.",
    "Proteger el medicamento de la luz solar.",
    "No usar en hembras gestantes.",
    "Informe si nota debilidad muscular o cambios en el color de la piel."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Fibrosis / Amiloidosis (Protocolo de escalada)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.01,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas inicial",
          intervalo_horas: 24
        },
        notas_tecnicas: "Si no hay efectos adversos GI, aumentar cada 3-4 días hasta un máximo de 0.03 mg/kg q12h."
      }
    ],
    ave: [
      {
        indicacion: "Gota / Cirrosis hepática",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.04,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      },
      {
        indicacion: "Loritos arcoíris (Rainbow lorikeets): Gota",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.1,
          unidad_calculo: "mg/kg"
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
      "Gestación (Absoluta).",
      "Insuficiencia renal severa."
    ],
    efectos_adversos: [
      "Vómitos, dolor abdominal y diarrea (muy comunes).",
      "Supresión de médula ósea (anemia, leucopenia).",
      "Daño renal.",
      "Miopatía y neuropatía periférica.",
      "Aumento de la fosfatasa alcalina (ALP) sérica."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Hemograma completo (plaquetas y glóbulos blancos)",
      "Enzimas hepáticas"
    ],
    instrucciones_manejo: "Proteger de la luz. Manejar con precaución debido a su toxicidad potencial.",
    sobredosis: {
      signos: ["Gastroenteritis hemorrágica", "Fallo multiorgánico", "Muerte"],
      tratamiento: "Cese inmediato, lavado gástrico, carbón activado y soporte intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Ciclosporina", efecto: "Aumenta el riesgo de nefrotoxicidad y miotoxicidad.", severidad: "Importante" },
      { farmaco: "AINEs (Fenilbutazona)", efecto: "Aumentan el riesgo de trombocitopenia y supresión medular.", severidad: "Importante" },
      { farmaco: "Quimioterápicos", efecto: "Efectos mielosupresores aditivos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la tubulina, interfiriendo con la función de los microtúbulos, lo que inhibe la migración de leucocitos y la síntesis de colágeno.",
    farmacocinetica: "Absorción oral variable. Se concentra en leucocitos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "0.5 mg",
      valor_concentracion: 0.5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
