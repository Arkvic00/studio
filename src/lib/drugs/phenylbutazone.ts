import type { Drug } from '@/lib/types';

export const phenylbutazoneDrug: Drug = {
  id: "phenylbutazone",
  meta_data: {
    nombre_generico: "Fenilbutazona",
    nombres_comerciales: ["Phenylbutazone"],
    grupo_farmacologico: "AINE no selectivo (Inhibidor de COX)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "AINE clásico con potente efecto antiinflamatorio.",
      "No es selectivo de COX-2; alto riesgo de efectos adversos GI y renales.",
      "Considerado anticuado en perros, superado por AINEs más seguros.",
      "¡NUNCA usar en gatos! (Metabolismo muy lento y alta toxicidad).",
      "Su vida media se prolonga significativamente en animales con enfermedad hepática."
    ],
    usos_principales: "Manejo del dolor y la inflamación moderados asociados a osteoartritis en perros.",
    inicio_accion: "Rápido (pico en 1-2 horas)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Administrar siempre junto con la comida.",
    "¡PELIGRO!: Nunca administrar a gatos. Es altamente tóxico.",
    "Informe inmediatamente si nota vómitos, heces negras o pérdida de apetito.",
    "No usar junto con otros antiinflamatorios o corticoides.",
    "Se requiere un descanso de 3 a 5 días antes de cambiar a otro antiinflamatorio."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Osteoartritis / Dolor crónico",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 2,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas (máx 800 mg/día)", intervalo_horas: 12 },
        notas_tecnicas: "Recomendado iniciar con 10 mg/kg q12h por 7 días, luego reducir a 5 mg/kg q12h."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Animales deshidratados o hipovolémicos.",
      "Enfermedad GI activa o sangrado.",
      "Trastornos de la coagulación.",
      "Animales menores de 6 semanas.",
      "Gestación."
    ],
    efectos_adversos: [
      "Ulceración y hemorragia gastrointestinal (común).",
      "Nefrotoxicidad (especialmente si hay hipotensión).",
      "Supresión de la médula ósea (anemia aplásica) - inusual pero grave.",
      "Hepatotoxicidad por acumulación."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN)",
      "Hemograma (CBC) en tratamientos largos",
      "Signos de sangrado GI (melena)"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. No usar antes de cirugías.",
    sobredosis: {
      signos: ["Vómitos severos", "Melena", "Fallo renal", "Convulsiones"],
      tratamiento: "Lavado gástrico, carbón activado y soporte intensivo gastroprotector/renal."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs / Corticosteroides", efecto: "Riesgo extremo de úlceras GI. No administrar concurrentemente.", severidad: "Grave" },
      { farmaco: "Aminoglucósidos", efecto: "Aumento significativo del riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Diuréticos", efecto: "Pueden potenciar el daño renal.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor no selectivo de la ciclooxigenasa (COX), bloqueando la síntesis de prostaglandinas inflamatorias.",
    farmacocinetica: "Metabolismo hepático extenso. Alta unión a proteínas plasmáticas."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "100 mg, 200 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: true }
  ]
};