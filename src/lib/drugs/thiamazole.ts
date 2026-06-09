import type { Drug } from '@/lib/types';

export const thiamazoleDrug: Drug = {
  id: "thiamazole",
  meta_data: {
    nombre_generico: "Tiamazol (Metimazol)",
    nombres_comerciales: ["Felimazole", "Thiafeline", "Thyronorm"],
    grupo_farmacologico: "Antitiroideo",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de hormonas tiroideas (bloquea la peroxidasa).",
      "Fármaco de elección para el hipertiroidismo felino.",
      "Requiere 2-3 semanas para alcanzar el estado eutiroideo.",
      "Puede desenmascarar una insuficiencia renal oculta al normalizar el metabolismo.",
      "La versión transdérmica es útil en gatos difíciles pero menos fiable."
    ],
    usos_principales: "Tratamiento médico del hipertiroidismo en gatos y perros.",
    inicio_accion: "1-3 semanas",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Informe si nota vómitos, pérdida de apetito o si su gato se rasca la cara excesivamente.",
    "Se requieren análisis de sangre frecuentes (riñones, hígado y hormonas).",
    "Si usa el gel en la oreja, use SIEMPRE guantes y no toque la zona tratada.",
    "Es vital no saltarse ninguna dosis para mantener el control.",
    "No usar en hembras embarazadas; es tóxico para el feto."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Hipertiroidismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Hipertiroidismo",
        vias: ["PO", "Tópica (Pabellón auricular)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Ajustar dosis en incrementos de 1.25-2.5 mg según T4 a las 3 y 6 semanas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad hepática severa.",
      "Enfermedades autoinmunes (ej. Miastenia gravis).",
      "Coagulopatías o trombocitopenia.",
      "Gestación y lactancia (teratogénico)."
    ],
    efectos_adversos: [
      "Vómitos y anorexia (muy comunes, a menudo transitorios).",
      "Prurito facial severo y automutilación.",
      "Citopenias (anemia, leucopenia).",
      "Ictericia colestásica.",
      "Elevación de Urea/Creatinina (por desenmascarar fallo renal)."
    ],
    monitoreo_recomendado: [
      "T4 total cada 3, 6, 10 y 20 semanas",
      "Función renal (BUN, Creatinina) periódicamente",
      "Hemograma completo y perfil bioquímico"
    ],
    instrucciones_manejo: "Transdérmico: Humano teratogénico; precaución extrema. Lavarse las manos tras contacto con tabletas.",
    sobredosis: {
      signos: ["Vómitos persistentes", "Letargo", "Hipotiroidismo"],
      tratamiento: "Soporte sintomático; suplementación con L-Tiroxina si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fenobarbital", efecto: "Puede reducir la eficacia del tiamazol.", severidad: "Moderada" },
      { farmaco: "Benzimidazoles (Fenbendazol)", efecto: "Pueden aumentar los niveles de tiamazol.", severidad: "Leve" },
      { farmaco: "Iodo-131", efecto: "Suspender tiamazol 1-2 semanas antes del tratamiento radiactivo.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la oxidación del yodo y el acoplamiento de las yodotironinas.",
    farmacocinetica: "Absorción oral rápida. Se concentra en la glándula tiroides."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta recubierta",
      concentracion_texto: "1.25 mg, 2.5 mg, 5 mg",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Solución oral",
      concentracion_texto: "5 mg/ml",
      valor_concentracion: 5,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
