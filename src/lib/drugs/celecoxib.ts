import type { Drug } from '@/lib/types';

export const celecoxibDrug: Drug = {
  id: "celecoxib",
  meta_data: {
    nombre_generico: "Celecoxib",
    nombres_comerciales: ["Celebrex", "Celecoxib*"],
    grupo_farmacologico: "AINE (Inhibidor preferencial de COX-2)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor preferencial de la enzima COX-2.",
      "Utilizado para analgesia en artritis en ratas.",
      "Históricamente usado para la enfermedad de dilatación proventricular (PDD) en loros, aunque estudios recientes cuestionan su eficacia.",
      "Se puede usar como antiinflamatorio convencional en aves.",
      "Requiere un periodo de lavado de 1-2 semanas antes de cambiar a otro AINE."
    ],
    usos_principales: "Analgesia para artritis en ratas y manejo antiinflamatorio/PDD en aves.",
    inicio_accion: "Rápido tras administración oral",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Administrar por vía oral según la dosis indicada.",
    "Informe inmediatamente si nota falta de apetito, vómitos o cambios en las heces.",
    "No administrar junto con otros antiinflamatorios o corticosteroides.",
    "Asegúrese de que el animal esté bien hidratado durante el tratamiento."
  ],
  parametros_dosificacion: {
    roedores: [
      {
        indicacion: "Ratas: Analgesia / Artritis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "PDD / Antiinflamatorio general",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Eficacia en PDD cuestionada en estudios recientes. Monitorear estrechamente la respuesta clínica."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales deshidratados, hipovolémicos o hipotensos.",
      "Enfermedad gastrointestinal activa.",
      "Problemas de coagulación.",
      "Animales menores de 6 semanas de edad."
    ],
    efectos_adversos: [
      "Signos gastrointestinales (vómitos, diarrea).",
      "Hemorragia gastrointestinal.",
      "Posible toxicidad renal en pacientes predispuestos.",
      "Riesgo potencial de insuficiencia cardíaca (basado en humanos, desconocido en animales)."
    ],
    monitoreo_recomendado: [
      "Función renal (especialmente en tratamientos prolongados)",
      "Estado gastrointestinal",
      "Estado de hidratación"
    ],
    instrucciones_manejo: "Observar precauciones normales de manejo clínico.",
    sobredosis: {
      signos: ["Trastornos gastrointestinales severos", "Letargo", "Posible daño renal"],
      tratamiento: "Soporte sintomático y gastroprotección."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Otros AINEs / Corticosteroides",
        efecto: "Aumenta significativamente el riesgo de úlceras GI. Requiere periodo de lavado.",
        severidad: "Grave"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor preferencial de la ciclooxigenasa-2 (COX-2), limitando la producción de prostaglandinas proinflamatorias.",
    farmacocinetica: "Absorción oral en ratas y aves estudiada."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "100 mg, 200 mg",
      valor_concentracion: 100,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
