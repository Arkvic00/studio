import type { Drug } from '@/lib/types';

export const mavacoxibDrug: Drug = {
  id: "mavacoxib",
  meta_data: {
    nombre_generico: "Mavacoxib",
    nombres_comerciales: ["Trocoxil"],
    grupo_farmacologico: "AINE (Inhibidor selectivo de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo de la COX-2 con una vida media excepcionalmente larga.",
      "Diseñado para el manejo del dolor crónico donde se requiere tratamiento >1 mes.",
      "Aproximadamente el 5% de los perros son metabolizadores lentos (riesgo de acumulación).",
      "Debe administrarse con la comida principal.",
      "Requiere periodos de descanso ('wash-out') obligatorios.",
      "Útil en aves para evitar capturas frecuentes."
    ],
    usos_principales: "Tratamiento del dolor e inflamación asociados con la enfermedad articular degenerativa (osteoartritis) en perros y aves.",
    inicio_accion: "Lento (debido a la larga vida media)",
    duracion_efecto: "Hasta 30 días (Mensual)"
  },
  informacion_cliente: [
    "Administrar inmediatamente antes o con la comida principal.",
    "El esquema de dosis es único: una dosis, otra a los 14 días y luego cada mes.",
    "No dar ningún otro antiinflamatorio o corticoide durante el mes de tratamiento ni en el mes de descanso.",
    "Informe inmediatamente si nota vómitos, heces negras o falta de apetito.",
    "Asegúrese de que el animal esté bien hidratado si cae enfermo durante el tratamiento.",
    "No usar en perros de menos de 12 meses o menos de 5 kg."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis (Dolor crónico)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Día 1, Día 14, luego cada mes (máx 7 dosis totales)",
          intervalo_horas: 672
        },
        notas_tecnicas: "Tras 7 meses de tratamiento, es obligatorio un descanso de 1 mes."
      }
    ],
    ave: [
      {
        indicacion: "Artritis / Dolor crónico (Loros / Ninfas)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 10 a 12 días", intervalo_horas: 240 },
        notas_tecnicas: "Ideal para especies de zoológico o aves difíciles de capturar. Evaluar respuesta individual."
      },
      {
        indicacion: "Agapornis (Lovebirds)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 5 días", intervalo_horas: 120 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Perros menores de 12 meses.",
      "Perros de menos de 5 kg.",
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad GI activa o sangrado.",
      "Insuficiencia renal o hepática.",
      "Hembras gestantes o lactantes."
    ],
    contraindicaciones_especie: {
      "Gato": "¡CONTRAINDICADO!: No autorizado para su uso en gatos.",
      "Ave": "No usar en aves jóvenes; seguridad no establecida."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hemorragia gastrointestinal.",
      "Nefrotoxicidad (el efecto persiste mucho tiempo tras suspender).",
      "Riesgo de fallo cardíaco (teórico)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) rigurosa antes de cada dosis mensual",
      "Proteínas plasmáticas",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales. Las tabletas son masticables.",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal persistente"],
      tratamiento: "Soporte sintomático intensivo y gastroprotección por tiempo prolongado."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. No administrar en un periodo de 30 días.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Riesgo crítico de nefrotoxicidad debido a la larga vida media.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor altamente selectivo de la COX-2, bloqueando la síntesis de prostaglandinas inflamatorias.",
    farmacocinetica: "Unión a proteínas extremadamente alta. Vida media en perros de ~17 días (varía mucho entre especies)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta masticable", concentracion_texto: "6 mg, 20 mg, 30 mg, 75 mg, 95 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false }
  ]
};