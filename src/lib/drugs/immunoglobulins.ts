import type { Drug } from '@/lib/types';

export const immunoglobulinsDrug: Drug = {
  id: "immunoglobulins",
  meta_data: {
    nombre_generico: "Inmunoglobulinas (IVIG)",
    nombres_comerciales: ["Flebogamma", "Gammagard", "Kiovig"],
    grupo_farmacologico: "Inmunomodulador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Proporciona efectos inmunomoduladores inmediatos y a largo plazo.",
      "Bloquea los receptores Fc de los macrófagos para detener la destrucción de plaquetas.",
      "Eficacia demostrada en trombocitopenia inmunomediada (ITP) severa.",
      "Uso reservado para casos excepcionales que no responden a terapia estándar.",
      "Requiere administración intravenosa muy lenta y bajo supervisión constante."
    ],
    usos_principales: "Tratamiento de la trombocitopenia inmunomediada (ITP) aguda y polirradiculoneuritis canina aguda.",
    inicio_accion: "Inmediato",
    duracion_efecto: "Variable"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario de alta especialidad.",
    "Existe un riesgo de reacción alérgica grave durante la administración.",
    "El animal será monitorizado cada 15-30 minutos durante el tratamiento.",
    "Desechar cualquier sobrante tras la reconstitución."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "ITP severa / Inmunosupresión aguda",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 750,
          dosis_min: 500,
          dosis_max: 1000,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Administrar en un periodo de 6 a 8 horas",
          intervalo_horas: 0
        },
        notas_tecnicas: "Dosis de hasta 2.2 g/kg reportadas en algunos estudios para casos críticos. Iniciar a velocidad muy baja."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Pacientes con niveles de proteínas plasmáticas ya elevados (hiperproteinemia).",
      "Insuficiencia cardíaca congestiva (riesgo de sobrecarga de volumen)."
    ],
    efectos_adversos: [
      "Anafilaxia (riesgo potencial, aunque raro en perros).",
      "Sobrecarga circulatoria.",
      "Fiebre transitoria."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca y respiratoria durante la infusión",
      "Temperatura corporal",
      "Recuento de plaquetas post-infusión"
    ],
    instrucciones_manejo: "Usar inmediatamente tras la reconstitución. Administrar mediante bomba de infusión para precisión.",
    sobredosis: {
      signos: ["Sobrecarga de volumen", "Edema pulmonar"],
      tratamiento: "Cese de infusión y diuréticos (furosemida)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Vacunas", efecto: "Puede interferir con la respuesta a vacunas vivas.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueo de receptores Fc, neutralización de autoanticuerpos y modulación de la cascada de citoquinas.",
    farmacocinetica: "Vida media variable tras la infusión."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "2.5 g, 5 g, 10 g",
      valor_concentracion: 2500,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};