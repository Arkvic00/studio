import type { Drug } from '@/lib/types';

export const edetateCalciumDisodiumDrug: Drug = {
  id: "edetate_calcium_disodium",
  meta_data: {
    nombre_generico: "Edetato de Calcio Disódico (CaEDTA)",
    nombres_comerciales: ["Ledclair"],
    grupo_farmacologico: "Agente quelante de metales pesados",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Quelante de metales pesados (plomo y zinc).",
      "Debe diluirse a 10 mg/ml en Dextrosa al 5% antes de usar.",
      "Nefrotóxico: asegurar una hidratación adecuada antes y durante el tratamiento.",
      "Eliminar cualquier residuo metálico del tracto GI (con laxantes) antes de administrar.",
      "En aves, es el tratamiento estándar para intoxicación por perdigones de plomo."
    ],
    usos_principales: "Tratamiento de la intoxicación por plomo y zinc en mamíferos, aves y reptiles.",
    inicio_accion: "Rápido (quelación inmediata en sangre)",
    duracion_efecto: "Requiere esquemas intermitentes para movilizar metales de los tejidos"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario para intoxicaciones graves.",
    "La inyección puede ser dolorosa.",
    "Se requieren análisis de sangre semanales para monitorear los riñones.",
    "El tratamiento suele ser en ciclos (ej. 5 días sí, 5 días no)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Toxicidad por plomo o zinc",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas por 2 a 5 días", intervalo_horas: 6 },
        notas_tecnicas: "Máximo 2g totales al día. Repetir tras 5 días de descanso si los niveles siguen altos."
      }
    ],
    gato: [
      {
        indicacion: "Toxicidad por plomo o zinc",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas", intervalo_horas: 6 }
      }
    ],
    huron: [
      {
        indicacion: "Toxicidad por metales",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Toxicidad por metales",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 horas (5 días on / 5 off)", intervalo_horas: 6 }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas/Hámsteres: Toxicidad",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 25,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Toxicidad por plomo/zinc (Inducción)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 42.5,
          dosis_min: 35,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por 5 días", intervalo_horas: 12 },
        notas_tecnicas: "Seguir con 2 días de descanso y repetir hasta que no se vean metales en radiografía."
      }
    ],
    reptil: [
      {
        indicacion: "Toxicidad por plomo",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 10,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal severa o anuria.",
      "Presencia de metales en el tracto GI (puede aumentar su absorción si se administra oral, aunque aquí es inyectable)."
    ],
    efectos_adversos: [
      "Nefrotoxicidad reversible (se manifiesta con vómitos y depresión).",
      "Dolor en el sitio de inyección.",
      "Vómitos y diarrea."
    ],
    monitoreo_recomendado: [
      "Niveles de plomo en sangre",
      "Función renal (Creatinina/BUN)",
      "Análisis de orina (sedimento)"
    ],
    instrucciones_manejo: "Diluir siempre a 10 mg/ml en Dextrosa 5%. No usar EDTA sódico (sin calcio), ya que causa hipocalcemia fatal.",
    sobredosis: {
      signos: ["Fallo renal agudo", "Vómitos persistentes"],
      tratamiento: "Cese inmediato y fluidoterapia intensiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente quelante que intercambia su ión calcio por metales pesados (plomo, zinc), formando complejos estables que se excretan vía renal.",
    farmacocinetica: "Eliminación casi exclusiva por filtración glomerular."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "200 mg/ml",
      valor_concentracion: 200,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
