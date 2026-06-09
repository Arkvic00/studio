import type { Drug } from '@/lib/types';

export const allopurinolDrug: Drug = {
  id: "allopurinol",
  meta_data: {
    nombre_generico: "Alopurinol",
    nombres_comerciales: ["Zyloric"],
    grupo_farmacologico: "Inhibidor de la xantina oxidasa",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la formación de ácido úrico al bloquear la conversión de hipoxantina a xantina y de xantina a ácido úrico.",
      "Se utiliza para tratar cálculos de ácido úrico y leishmaniosis.",
      "En aves y reptiles, el ácido úrico es un producto final natural; el uso es sintomático solamente.",
      "Es fundamental asegurar una hidratación adecuada del paciente."
    ],
    usos_principales: "Prevención y tratamiento de urolitos de ácido úrico en perros. Tratamiento de leishmaniosis (en combinación). Manejo de hiperuricemia y gota articular en aves y reptiles."
  },
  informacion_cliente: [
    "Asegúrese de que su mascota siempre tenga agua fresca disponible.",
    "En perros con cálculos, a menudo se requiere una dieta especial baja en purinas.",
    "El tratamiento para la leishmaniosis suele ser muy prolongado (meses o años).",
    "Informe si nota dificultad para orinar o sangre en la orina."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Urolitiasis por Ácido Úrico (Disolución)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas por hasta 4 semanas", intervalo_horas: 8 }
      },
      {
        indicacion: "Urolitiasis por Ácido Úrico (Disolución - Alternativa)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas por hasta 4 semanas", intervalo_horas: 12 }
      },
      {
        indicacion: "Urolitiasis por Ácido Úrico (Prevención)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Leishmaniosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas (Mínimo 6-12 meses)", intervalo_horas: 12 },
        notas_tecnicas: "Combinar con antimoniato de meglumina o miltefosina. No produce cura parasitológica completa."
      }
    ],
    gato: [
      {
        indicacion: "Leishmaniosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas", intervalo_horas: 12 },
        notas_tecnicas: "Experiencia limitada en esta especie."
      }
    ],
    ave: [
      {
        indicacion: "Hiperuricemia y Gota (General)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Reducir la dosis a medida que bajan los niveles de ácido úrico plasmático."
      },
      {
        indicacion: "Palomas (Pigeons): Hiperuricemia",
        vias: ["PO (Agua de bebida)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 830,
          unidad_calculo: "mg/l"
        }
      },
      {
        indicacion: "Psitácidas: Hiperuricemia",
        vias: ["PO (Agua de bebida)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 300,
          unidad_calculo: "mg/l"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Hiperuricemia y Gota (General)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      },
      {
        indicacion: "Quelonios (Tortugas): Hiperuricemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24h por 30 días, luego cada 72h", intervalo_horas: 24 }
      },
      {
        indicacion: "Iguanas Verdes: Hiperuricemia",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información de contraindicaciones absolutas en el texto provisto."
    ],
    contraindicaciones_especie: {
        "Ave": "ALERTA: En halcones de cola roja (Red-tailed hawks), dosis de 50-100 mg/kg son TÓXICAS y causan fallo renal."
    },
    precauciones: [
      "Usar con precaución en pacientes con función renal deteriorada.",
      "Asegurar hidratación constante."
    ],
    efectos_adversos: [
      "Predisposición a urolitiasis por xantina (especialmente si no se restringe la purina en la dieta).",
      "Fallo renal (reportado en halcones de cola roja a dosis altas)."
    ],
    monitoreo_recomendado: [
      "Niveles de ácido úrico plasmático",
      "Función renal (Creatinina/BUN)",
      "Análisis de orina (sedimento)"
    ],
    sobredosis: {
      signos: ["Fallo renal (en aves)", "Vómitos", "Signos de toxicidad aguda"],
      tratamiento: "Soporte sintomático y fluidoterapia intensiva para favorecer eliminación."
    },
    interacciones_farmacologicas: [
      { farmaco: "Azatioprina", efecto: "Puede potenciar sus efectos tóxicos al elevar sus niveles en sangre.", severidad: "Importante" },
      { farmaco: "Teofilina", efecto: "Puede aumentar los niveles de teofilina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la xantina oxidasa; disminuye la formación de ácido úrico al bloquear la conversión de hipoxantina a xantina, y de xantina a ácido úrico."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Tableta oral", concentracion_texto: "300 mg", valor_concentracion: 300, unidad_concentracion: "mg", es_divisible: true }
  ]
};