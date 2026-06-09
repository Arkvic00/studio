import type { Drug } from '@/lib/types';

export const piroxicamDrug: Drug = {
  id: "piroxicam",
  meta_data: {
    nombre_generico: "Piroxicam",
    nombres_comerciales: ["Feldene", "Brexidol"],
    grupo_farmacologico: "AINE no selectivo; Antineoplásico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "AINE que inhibe la síntesis de prostaglandinas (COX-1 y COX-2).",
      "Uso principal en oncología por su capacidad de frenar el crecimiento tumoral.",
      "Altamente efectivo en carcinomas de células transicionales (vejiga).",
      "Alto riesgo de ulceración gastrointestinal.",
      "Vida media larga en perros (36-40 horas)."
    ],
    usos_principales: "Tratamiento de carcinomas uroteliales de vejiga, carcinomas prostáticos y pólipos colorrectales. Analgesia en osteoartritis refractaria.",
    inicio_accion: "Rápido (analgesia); Semanas (efecto antitumoral)",
    duracion_efecto: "Larga (permite dosis cada 24-72 horas)"
  },
  informacion_cliente: [
    "Administrar siempre junto con la comida.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "Se requieren análisis de sangre periódicos para vigilar los riñones.",
    "No usar junto con otros antiinflamatorios o corticoides.",
    "Las cápsulas no deben abrirse."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias (Carcinoma de vejiga/Próstata)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 72 horas (Iniciar con baja frecuencia)", intervalo_horas: 48 },
        notas_tecnicas: "Iniciar q48h y aumentar a q24h solo si no hay efectos secundarios GI."
      },
      {
        indicacion: "Pólipos colorrectales (Supositorio)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 20,
          unidad_calculo: "mg/perro"
        },
        frecuencia: { texto_ui: "Cada 2 o 3 días", intervalo_horas: 48 }
      }
    ],
    gato: [
      {
        indicacion: "Neoplasias susceptibles",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.3,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 a 96 horas", intervalo_horas: 72 },
        notas_tecnicas: "Uso con precaución extrema; riesgo de lesiones cutáneas ulcerativas."
      }
    ],
    conejo: [
      {
        indicacion: "Analgesia / Inflamación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Neoplasias / Inflamación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.65,
          dosis_min: 0.5,
          dosis_max: 0.8,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Úlcera gastrointestinal activa.",
      "Insuficiencia renal o hepática severa.",
      "Deshidratación o hipovolemia.",
      "Uso concurrente de corticosteroides."
    ],
    efectos_adversos: [
      "Ulceración y hemorragia gastrointestinal (común).",
      "Nefrotoxicidad (necrosis papilar renal).",
      "Vómitos y diarrea.",
      "Gatos: Lesiones cutáneas ulcerativas."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) cada 4-8 semanas",
      "Signos de sangrado GI (melena)",
      "Proteínas plasmáticas"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal agudo"],
      tratamiento: "Lavado gástrico, carbón activado, soporte gastroprotector (misoprostol) y fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Corticosteroides / Otros AINEs", efecto: "Riesgo extremo de perforación y ulceración GI.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos", efecto: "Pueden potenciar el daño renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la ciclooxigenasa. Sus efectos antitumorales pueden deberse a la inhibición de la angiogénesis y modulación del sistema inmune.",
    farmacocinetica: "Absorción oral buena. Vida media plasmática muy larga en perros."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "10 mg, 20 mg", valor_concentracion: 10, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Supositorio rectal", concentracion_texto: "20 mg", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false }
  ]
};