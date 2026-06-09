import type { Drug } from '@/lib/types';

export const diclofenacDrug: Drug = {
  id: "diclofenac",
  meta_data: {
    nombre_generico: "Diclofenaco",
    nombres_comerciales: ["Voltarol Ophtha"],
    grupo_farmacologico: "AINE oftálmico; Inhibidor de COX",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la COX que produce efectos antiinflamatorios locales potentes.",
      "Utilizado en cirugía de cataratas para prevenir la miosis intraoperatoria.",
      "Útil en queratitis ulcerativa cuando los corticoides están contraindicados.",
      "Puede retrasar la cicatrización epitelial corneal.",
      "Riesgo de hipertensión ocular en pacientes predispuestos."
    ],
    usos_principales: "Prevención de miosis quirúrgica, manejo del dolor en cirugía corneal y tratamiento de queratoconjuntivitis.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Corta (requiere dosis frecuentes)"
  },
  informacion_cliente: [
    "Aplique las gotas siguiendo estrictamente el horario quirúrgico indicado.",
    "Informe si nota que el ojo se vuelve más rojo, doloroso o si el animal parpadea en exceso.",
    "Use con precaución si su mascota tiene glaucoma, ya que puede aumentar la presión del ojo.",
    "No lo use en aves sin consultar antes; puede ser fatal para algunas especies."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pre-operatorio (Cirugía de cataratas)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota cada 30 min (durante 2h previas)"
        },
        notas_tecnicas: "Protocolo estándar para prevenir miosis refleja durante la cirugía."
      },
      {
        indicacion: "Antiinflamatorio general",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 4 a 8 horas",
          intervalo_horas: 6
        }
      }
    ],
    gato: [
      {
        indicacion: "Pre-operatorio / Antiinflamatorio",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 6 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        notas_tecnicas: "El uso de formulaciones sistémicas se ha asociado con mortalidad masiva en aves rapaces y otras especies. No se recomienda su uso en aves."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Glaucoma no controlado (usar con precaución extrema).",
      "Hipersensibilidad a los AINEs."
    ],
    contraindicaciones_especie: {
      "Ave": "¡PROHIBIDO!: Riesgo de toxicidad severa y muerte. No administrar."
    },
    efectos_adversos: [
      "Irritación local leve.",
      "Retraso en la cicatrización corneal epitelial.",
      "Riesgo de 'melting' corneal (keratomalacia) reportado en humanos.",
      "Aumento de la presión intraocular."
    ],
    monitoreo_recomendado: [
      "Presión intraocular (PIO) regularmente",
      "Integridad epitelial corneal (Test de fluoresceína)",
      "Respuesta a la miosis quirúrgica"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos estériles.",
    sobredosis: {
      signos: ["Irritación ocular marcada", "Hipertensión ocular"],
      tratamiento: "Lavar el ojo con abundante solución salina estéril."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides tópicos", efecto: "Aumento del riesgo de complicaciones corneales graves.", severidad: "Importante" },
      { farmaco: "Gentamicina / Antibióticos epitelio-tóxicos", efecto: "Pueden aumentar la penetración corneal del diclofenaco.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la ciclooxigenasa (COX) que bloquea la síntesis de prostaglandinas inflamatorias directamente en el tejido ocular.",
    farmacocinetica: "Acción tópica local con penetración corneal efectiva."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.1% (1 mg/ml)",
      valor_concentracion: 1,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
