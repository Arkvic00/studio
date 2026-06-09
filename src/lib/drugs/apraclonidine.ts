import type { Drug } from '@/lib/types';

export const apraclonidineDrug: Drug = {
  id: "apraclonidine",
  meta_data: {
    nombre_generico: "Apraclonidina",
    nombres_comerciales: ["Iopidine"],
    grupo_farmacologico: "Agonista alfa-2 selectivo tópico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agonista alfa-2 selectivo que disminuye la producción de humor acuoso.",
      "Efecto inconsistente en perros; rara vez eficaz como agente único en glaucoma.",
      "Muy útil para prevenir picos de presión tras cirugía intraocular.",
      "Uso exclusivo a corto plazo."
    ],
    usos_principales: "Reducción de la presión intraocular en glaucoma y prevención de hipertensión ocular post-quirúrgica en perros.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Corta"
  },
  informacion_cliente: [
    "Medicamento para uso a corto plazo únicamente.",
    "Para reducir la absorción hacia el resto del cuerpo, mantenga la cabeza del animal elevada y presione suavemente la esquina interna del ojo (punto lagrimal) tras aplicar la gota.",
    "Vigilar si el animal parece muy decaído o si su corazón late más lento de lo normal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Glaucoma / Hipertensión ocular post-quirúrgica",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota por ojo"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas (Solo uso a corto plazo)",
          intervalo_horas: 12
        },
        notas_tecnicas: "Monitorear frecuencia cardíaca, especialmente en perros pequeños. Comprimir el punto nasolagrimal para limitar absorción sistémica."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0,
          unidad_calculo: "N/A"
        },
        frecuencia: {
          texto_ui: "NO USAR",
          intervalo_horas: 0
        },
        notas_tecnicas: "Considerado demasiado tóxico para su uso en gatos."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Perros con enfermedad cardíaca no controlada."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Causa miosis severa y vómito profuso. No administrar bajo ninguna circunstancia."
    },
    efectos_adversos: [
      "Palidez de los vasos conjuntivales (blanching).",
      "Bradicardia (latido lento).",
      "Midriasis (pupilas dilatadas) en perros.",
      "Miosis y vómito severo en gatos."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca (especialmente en perros pequeños)",
      "Presión intraocular"
    ],
    instrucciones_manejo: "Elevar la cabeza y comprimir el punto nasolagrimal inferior tras cada administración.",
    sobredosis: {
      signos: ["Bradicardia severa", "Sedación", "Vómitos (gatos)"],
      tratamiento: "Lavar el ojo con abundante solución salina; soporte cardiovascular si hay absorción sistémica significativa."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista alfa-2 adrenérgico selectivo. Disminuye la producción de humor acuoso mediante la inhibición de la actividad de la adenilato ciclasa en el cuerpo ciliar.",
    farmacocinetica: "Efectos locales con potencial de absorción sistémica a través del conducto nasolagrimal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución oftálmica",
      concentracion_texto: "0.5% (frasco 5 ml)",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    },
    {
      tipo: "Solución oftálmica sin conservantes",
      concentracion_texto: "1% (viales monodosis)",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
