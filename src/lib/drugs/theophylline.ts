import type { Drug } from '@/lib/types';

export const theophyllineDrug: Drug = {
  id: "theophylline",
  meta_data: {
    nombre_generico: "Teofilina",
    nombres_comerciales: ["Corvental-D"],
    grupo_farmacologico: "Broncodilatador (Xantina); Inhibidor de la fosfodiesterasa",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Produce relajación del músculo liso bronquial.",
      "Aumenta el aclaramiento mucociliar y estimula el centro respiratorio.",
      "Efecto inotrópico positivo leve.",
      "Bajo índice terapéutico; dosificar según peso magro.",
      "Las formulaciones de liberación sostenida permiten dosis q24h."
    ],
    usos_principales: "Tratamiento de enfermedades de las vías respiratorias pequeñas (bronquitis crónica, colapso traqueal).",
    inicio_accion: "30 a 60 minutos",
    duracion_efecto: "24 horas (liberación sostenida)"
  },
  informacion_cliente: [
    "Informe si nota temblores, inquietud o si el animal bebe/orina mucho.",
    "No triturar las cápsulas de liberación prolongada.",
    "El ajuste de la dosis depende de la mejoría respiratoria y la ausencia de efectos secundarios.",
    "Muchos medicamentos pueden interferir con la teofilina; informe al veterinario de todo lo que toma su mascota."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Broncodilatación (Sostenida)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 20,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (puede dividirse q12h si es necesario)",
          intervalo_horas: 24
        },
        notas_tecnicas: "Dosificar según peso magro para evitar toxicidad en animales obesos."
      }
    ],
    gato: [
      {
        indicacion: "Broncodilatación (Sostenida)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 17,
          dosis_min: 15,
          dosis_max: 19,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Historial de convulsiones.",
      "Arritmias cardíacas severas.",
      "Enfermedad hepática o renal severa."
    ],
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Taquicardia y agitación.",
      "PU/PD (bebe y orina mucho).",
      "Gatos: Hipereestesia marcada.",
      "Convulsiones (en toxicidad)."
    ],
    monitoreo_recomendado: [
      "Frecuencia cardíaca",
      "Estado mental",
      "Niveles séricos (Rango: 5-20 μg/ml)"
    ],
    instrucciones_manejo: "Observar precauciones normales. No abrir las cápsulas.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias fatales", "Vómitos severos"],
      tratamiento: "Lavado gástrico, carbón activado y diazepam para convulsiones."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Eritromicina / Quinolonas", efecto: "Aumentan los niveles de teofilina (riesgo de toxicidad).", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Disminuye los niveles de teofilina.", severidad: "Moderada" },
      { farmaco: "Propranolol", efecto: "Antagonismo mutuo; riesgo de broncoespasmo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la fosfodiesterasa que aumenta el AMPc intracelular y antagoniza los receptores de adenosina.",
    farmacocinetica: "Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula de liberación sostenida",
      concentracion_texto: "100 mg, 200 mg, 500 mg",
      valor_concentracion: 200,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
