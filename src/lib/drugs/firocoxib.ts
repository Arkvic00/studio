import type { Drug } from '@/lib/types';

export const firocoxibDrug: Drug = {
  id: "firocoxib",
  meta_data: {
    nombre_generico: "Firocoxib",
    nombres_comerciales: ["Previcox"],
    grupo_farmacologico: "AINE (Inhibidor selectivo de COX-2)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor altamente selectivo de la ciclooxigenasa-2 (COX-2).",
      "Potente efecto analgésico y antiinflamatorio con menor impacto GI que AINEs clásicos.",
      "Uso en dolor crónico por osteoartritis y dolor agudo quirúrgico.",
      "En cirugías, administrar 2 horas antes del procedimiento.",
      "La enfermedad hepática prolonga significativamente su metabolismo."
    ],
    usos_principales: "Tratamiento del dolor e inflamación por osteoartritis y cirugía ortopédica, de tejidos blandos o dental en perros.",
    inicio_accion: "Rápido (1-2 horas)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar una vez al día, con o sin comida.",
    "Informe inmediatamente si nota heces negras, vómitos con sangre o pérdida de apetito.",
    "¡NUNCA usar en gatos! Es altamente tóxico para ellos.",
    "Asegúrese de que el perro esté bien hidratado durante el tratamiento.",
    "Periodo de lavado de 3-5 días antes de cambiar a otro antiinflamatorio."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis / Dolor Quirúrgico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Para cirugía, dar la primera dosis 2 horas antes. No usar en animales < 10 semanas o < 3 kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Perros < 10 semanas o < 3 kg.",
      "Deshidratación, hipovolemia o hipotensión.",
      "Enfermedad GI activa o sangrado.",
      "Hembras gestantes o lactantes."
    ],
    contraindicaciones_especie: {
      "Gato": "¡CONTRAINDICADO!: Riesgo de toxicidad renal y GI severa."
    },
    efectos_adversos: [
      "Vómitos y diarrea.",
      "Hemorragia gastrointestinal (raro).",
      "Nefrotoxicidad (especialmente si hay hipotensión transanestésica).",
      "Riesgo de fallo cardíaco (teórico, basado en humanos)."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) en uso crónico",
      "Función hepática",
      "Presión arterial durante anestesia"
    ],
    instrucciones_manejo: "Observar precauciones normales. Tabletas masticables muy palatables (evitar ingesta masiva accidental).",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal agudo"],
      tratamiento: "Lavado gástrico, carbón activado y soporte gastroprotector intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. No administrar en un periodo de 24h.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento significativo del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos", efecto: "Pueden reducir la eficacia analgésica y aumentar el riesgo renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor selectivo de la COX-2, bloqueando la síntesis de prostaglandinas mediadoras de la inflamación y el dolor.",
    farmacocinetica: "Metabolismo hepático por oxidación y glucuronidación. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tabletas masticables",
      concentracion_texto: "57 mg, 227 mg",
      valor_concentracion: 57,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};