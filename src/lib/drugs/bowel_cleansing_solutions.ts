import type { Drug } from '@/lib/types';

export const bowelCleansingSolutionsDrug: Drug = {
  id: "bowel_cleansing_solutions",
  meta_data: {
    nombre_generico: "Macrogol (Polietilenglicol / PEG)",
    nombres_comerciales: ["Klean-Prep", "Moviprep"],
    grupo_farmacologico: "Laxante osmótico; Solución de limpieza intestinal",
    status_regulatorio: "P (Venta en farmacia)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Contiene polietilenglicol como laxante osmótico y electrolitos balanceados para mantener la isotonicidad.",
      "Vacía rápidamente el intestino sin causar pérdida o ganancia neta de fluidos.",
      "El polvo puede tardar varios minutos en disolverse; usar agua tibia facilita la reconstitución.",
      "Riesgo de neumonía por aspiración grave si se inhala."
    ],
    usos_principales: "Preparación intestinal previa a colonoscopia o examen radiográfico. Manejo del estreñimiento severo.",
    inicio_accion: "Rápido (acción local)",
    duracion_efecto: "Limitada al periodo de administración"
  },
  informacion_cliente: [
    "Este medicamento se utiliza para limpiar completamente el intestino antes de pruebas médicas.",
    "Provocará diarrea abundante, lo cual es el efecto buscado.",
    "No administre otros medicamentos orales dentro de la hora posterior a este fármaco, ya que no se absorberán.",
    "Asegúrese de que el animal esté bien despierto para tragar y evitar que el líquido llegue a los pulmones."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Preparación para examen del GI inferior",
        vias: ["PO", "Sonda gástrica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 22,
          dosis_max: 33,
          unidad_calculo: "ml/kg"
        },
        frecuencia: {
          texto_ui: "2 o 3 veces, con al menos 4 horas de diferencia",
          intervalo_horas: 4
        }
      }
    ],
    gato: [
      {
        indicacion: "Preparación para examen del GI inferior",
        vias: ["PO", "Sonda nasoesofágica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 27.5,
          dosis_min: 22,
          dosis_max: 33,
          unidad_calculo: "ml/kg"
        },
        notas_tecnicas: "Algunas autoridades recomiendan precaución o evitar su uso en gatos antes de la colonoscopia."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción gastrointestinal.",
      "Perforación gastrointestinal.",
      "Pacientes fuertemente sedados.",
      "Animales con reflejo de deglución reducido."
    ],
    efectos_adversos: [
      "Diarrea (efecto esperado).",
      "Vómitos ocasionales (especialmente con volúmenes máximos).",
      "Neumonía por aspiración (puede ser fatal)."
    ],
    monitoreo_recomendado: [
      "Reflejo de deglución durante la administración",
      "Estado de hidratación",
      "Frecuencia de defecación"
    ],
    instrucciones_manejo: "Reconstituir con agua tibia. No administrar si se sospecha de perforación.",
    sobredosis: {
      signos: ["Vómitos severos", "Malestar abdominal intenso"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Medicamentos orales",
        efecto: "Pueden ser 'barridos' del tracto GI sin ser absorbidos.",
        severidad: "Importante"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "El PEG actúa como un agente osmótico no absorbible que retiene agua en el lumen intestinal, aumentando el volumen fecal y estimulando la motilidad.",
    farmacocinetica: "No se absorbe sistémicamente de forma significativa."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo para reconstitución",
      concentracion_texto: "Sobres para preparar 1 litro",
      valor_concentracion: 1,
      unidad_concentracion: "sobe",
      es_divisible: false
    }
  ]
};