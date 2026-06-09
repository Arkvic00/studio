import type { Drug } from '@/lib/types';

export const clofazimineDrug: Drug = {
  id: "clofazimine",
  meta_data: {
    nombre_generico: "Clofazimina",
    nombres_comerciales: ["Clofazimine*"],
    grupo_farmacologico: "Antimicobacteriano",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fármaco antimicobacteriano con propiedades de disrupción de membrana.",
      "Uso principal en infecciones por micobacterias, incluyendo la lepra felina.",
      "Requiere tratamiento a largo plazo (meses) y casi siempre en protocolos combinados.",
      "La mayoría de la información proviene de medicina humana."
    ],
    usos_principales: "Tratamiento de infecciones micobacterianas sistémicas o cutáneas (lepra felina) en perros y gatos.",
    inicio_accion: "Variable (efecto acumulativo)",
    duracion_efecto: "Prolongada; requiere administración diaria"
  },
  informacion_cliente: [
    "El tratamiento es de larga duración (de 2 a 6 meses).",
    "Puede teñir la piel, los ojos y los fluidos corporales (orina) de un color rojizo o pardusco; es un efecto esperado.",
    "Su mascota debe permanecer en interiores, ya que el medicamento puede causar sensibilidad a la luz solar (fotosensibilización).",
    "Informe si nota náuseas, diarrea o pérdida de peso.",
    "Se requieren análisis de sangre periódicos para controlar el hígado y los riñones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones micobacterianas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 2 a 6 meses",
          intervalo_horas: 24
        },
        notas_tecnicas: "Generalmente utilizado en terapia combinada con fluoroquinolonas o claritromicina."
      }
    ],
    gato: [
      {
        indicacion: "Infecciones micobacterianas / Lepra felina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6,
          dosis_min: 4,
          dosis_max: 8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 2 a 6 meses",
          intervalo_horas: 24
        },
        notas_tecnicas: "Parte fundamental del protocolo para micobacteriosis cutánea felina. Monitorear estrechamente la función renal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas reportadas en veterinaria, pero usar con cautela en insuficiencia hepática o renal severa."
    ],
    efectos_adversos: [
      "Coloración rojiza/pardusca de piel, mucosas y fluidos corporales.",
      "Náuseas, vómitos y diarrea.",
      "Fotosensibilización.",
      "Deterioro potencial de la función renal o hepática (uso crónico)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) cada 4 semanas",
      "Función hepática (ALT/ALP) cada 4 semanas",
      "Estado dermatológico"
    ],
    instrucciones_manejo: "Los animales tratados deben mantenerse protegidos de la luz solar directa. Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Trastornos gastrointestinales severos", "Aumento de la coloración tisular"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "No está totalmente esclarecido; parece actuar uniéndose al ADN de las micobacterias e interfiriendo con su crecimiento, además de alterar la función de la membrana celular.",
    farmacocinetica: "Absorción oral variable. Se acumula en los tejidos, lo que explica su larga vida media."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "100 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
