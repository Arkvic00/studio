import type { Drug } from '@/lib/types';

export const dimercaprolDrug: Drug = {
  id: "dimercaprol",
  meta_data: {
    nombre_generico: "Dimercaprol (BAL)",
    nombres_comerciales: ["Dimercaprol*"],
    grupo_farmacologico: "Agente quelante de metales pesados",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente quelante que forma complejos estables y solubles con metales pesados.",
      "Uso principal en toxicidad aguda por arsénico, oro, bismuto y mercurio.",
      "Adjunto al edetato de calcio disódico en el envenenamiento por plomo.",
      "Los complejos formados son nefrotoxicos; la alcalinización de la orina puede proteger el riñón.",
      "¡CONTRAINDICADO! en intoxicaciones por hierro, selenio o cadmio (aumenta su toxicidad renal)."
    ],
    usos_principales: "Tratamiento de intoxicaciones agudas por metales pesados en perros, gatos y aves.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Requiere administración frecuente (q4h inicial)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario de emergencia.",
    "La inyección en el músculo es muy dolorosa.",
    "Se requieren análisis de sangre y orina frecuentes para vigilar los riñones y el hígado.",
    "Informe si nota que su mascota tiene dificultad para orinar o presenta vómitos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Toxicidad por metales pesados",
        vias: ["IM profunda"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto: "Cada 4 horas por 2 días, luego cada 12h", intervalo_horas: 4 },
        notas_tecnicas: "La dosis de 5 mg/kg solo debe usarse el primer día en intoxicaciones severas. Mantener soporte agresivo."
      }
    ],
    gato: [
      {
        indicacion: "Toxicidad por metales pesados",
        vias: ["IM profunda"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto: "Cada 4 horas por 2 días, luego cada 12h", intervalo_horas: 4 }
      }
    ],
    ave: [
      {
        indicacion: "Toxicidad por metales pesados",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 4 horas por 2 días, luego q12h", intervalo_horas: 4 },
        notas_tecnicas: "Continuar hasta la resolución de los signos clínicos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática severa.",
      "Intoxicaciones por Hierro, Selenio o Cadmio (los complejos son altamente tóxicos).",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Dolor severo en el sitio de inyección.",
      "Nefrotoxicidad (daño renal por el complejo quelado).",
      "Vómitos y salivación.",
      "Hipertensión transitoria.",
      "Temblores y ataxia."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) y análisis de orina",
      "pH urinario (considerar alcalinización)",
      "Función hepática"
    ],
    instrucciones_manejo: "Formulación en aceite de cacahuete; verificar alergias. Inyectar exclusivamente vía IM profunda.",
    sobredosis: {
      signos: ["Vómitos", "Convulsiones", "Fallo renal agudo"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sales de Hierro", efecto: "Forma un complejo altamente nefrotóxico. NO administrar durante la terapia.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Contiene grupos sulfhidrilo que compiten con las enzimas celulares por la unión a los metales, formando quelatos estables de 5 miembros que se excretan por el riñón.",
    farmacocinetica: "Absorción rápida. Vida media corta; la mayoría se elimina en 4-6 horas."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable (en aceite de cacahuete)",
      concentracion_texto: "50 mg/ml (5%)",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
