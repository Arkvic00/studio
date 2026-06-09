import type { Drug } from '@/lib/types';

export const interferonOmegaDrug: Drug = {
  id: "interferon_omega",
  meta_data: {
    nombre_generico: "Interferón omega (Recombinante)",
    nombres_comerciales: ["Virbagen omega"],
    grupo_farmacologico: "Inmunomodulador; Citoquina",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inmunomodulador que reduce la mortalidad en parvovirosis canina.",
      "Tratamiento de soporte en infecciones virales felinas (FeLV, FIP, Calicivirus).",
      "Efectos antivirales indirectos mediante la activación de células inmunes.",
      "Uso tópico/oftálmico para herpesvirus felino (eficacia cuestionable).",
      "Requiere refrigeración estricta."
    ],
    usos_principales: "Manejo de la parvovirosis canina, leucemia felina (FeLV), peritonitis infecciosa (FIP) y gingivoestomatitis crónica.",
    inicio_accion: "Variable (días)",
    duracion_efecto: "Requiere esquemas de administración semanal o pulsos"
  },
  informacion_cliente: [
    "Medicamento inyectable especializado para enfermedades virales graves.",
    "Puede causar cansancio o fiebre transitoria tras la inyección.",
    "Se deben evitar las vacunas hasta que el animal se haya recuperado clínicamente.",
    "Mantener siempre en el refrigerador; desechar según instrucciones del veterinario tras la reconstitución."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Parvovirosis",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "MU/kg (Millones de Unidades)"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por 3 días",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones Virales (FeLV / FIP / FCV)",
        vias: ["SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.75,
          dosis_min: 1,
          dosis_max: 2.5,
          unidad_calculo: "MU/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 48 horas (hasta 5 dosis); luego semanal", intervalo_horas: 48 },
        notas_tecnicas: "La vía IV en gatos aumenta el riesgo de reacciones adversas transitorias."
      },
      {
        indicacion: "Uso Oftálmico (Herpesvirus)",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota (Dilución 0.5 MU/ml)"
        },
        frecuencia: { texto_ui: "Cada 6 a 12 horas", intervalo_horas: 8 },
        notas_tecnicas: "Reconstituir 10 MU en 4 ml salino, decantar alícuotas y congelar. Usar 0.2 ml diluidos en 0.8 ml hipromelosa."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
        "Hipersensibilidad conocida.",
        "Uso concurrente con vacunas (esperar recuperación)."
    ],
    efectos_adversos: [
      "Fatiga transitoria.",
      "Hipertermia (fiebre).",
      "Vómitos y diarrea leve.",
      "Descenso leve de glóbulos blancos y plaquetas (transitorio).",
      "Irritación ocular (uso tópico)."
    ],
    monitoreo_recomendado: [
      "Temperatura corporal post-inyección",
      "Hemograma completo periódico",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Almacenar a 2-8°C. No congelar el vial original. Reacciones adversas son más probables vía IV en gatos.",
    sobredosis: {
      signos: ["Letargo severo", "Fiebre alta"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
        { farmaco: "Vacunas", efecto: "Interferencia con la respuesta inmune. No vacunar hasta recuperación.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Activa la vía de la RNasa L y la proteína quinasa R, inhibiendo la traducción viral y estimulando la actividad de macrófagos y células NK.",
    farmacocinetica: "Eliminación lenta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial liofilizado",
      concentracion_texto: "10 MU por vial",
      valor_concentracion: 10,
      unidad_concentracion: "MU",
      es_divisible: false
    }
  ]
};