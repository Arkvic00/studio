import type { Drug } from '@/lib/types';

export const metotrexatoDrug: Drug = {
  id: "metotrexato",
  meta_data: {
    nombre_generico: "Metotrexato",
    nombres_comerciales: ["Matrex"],
    grupo_farmacologico: "Antimetabolito; Inmunosupresor; Inhibidor de la dihidrofolato reductasa",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antimetabolito específico de la fase S del ciclo celular.",
      "Inhibe la síntesis de purinas y ADN al bloquear la folic acid reductasa.",
      "Uso limitado en veterinaria debido a su potencial toxicidad.",
      "Requiere monitoreo hematológico (hemograma) muy frecuente.",
      "En humanos se usa para artritis reumatoide; falta evidencia sólida en poliartritis inmunomediada canina/felina."
    ],
    usos_principales: "Tratamiento de linfoma (especialmente como rescate) y dermatitis atópica refractaria en perros.",
    inicio_accion: "Interferencia inmediata con la replicación celular",
    duracion_efecto: "Requiere administración bisemanal"
  },
  informacion_cliente: [
    "Fármaco de quimioterapia potente; manejar siempre con guantes impermeables.",
    "No triturar ni dividir las tabletas.",
    "Informe inmediatamente si nota llagas en la boca, vómitos con sangre o fiebre.",
    "Se requieren análisis de sangre constantes para vigilar las defensas.",
    "Evitar el contacto con las excretas del animal por 48 horas post-dosis."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Linfoma / Dermatitis Atópica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 3.75,
          dosis_min: 2.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Dos veces por semana",
          intervalo_horas: 84
        },
        notas_tecnicas: "Ajustar frecuencia según toxicidad hematológica detectada."
      }
    ],
    gato: [
      {
        indicacion: "Protocolos oncológicos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_m2",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/m²"
        },
        frecuencia: {
          texto_ui: "Dos veces por semana",
          intervalo_horas: 84
        }
      }
    ],
    huron: [
      {
        indicacion: "Linfoma",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única dentro del protocolo", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Supresión de la médula ósea preexistente.",
      "Insuficiencia renal o hepática severa.",
      "Hipersensibilidad al fármaco."
    ],
    efectos_adversos: [
      "Mielosupresión profunda (anemia, leucopenia).",
      "Ulceración gastrointestinal y mucositis.",
      "Hepatotoxicidad y nefrotoxicidad.",
      "Alopecia y depigmentación.",
      "Anafilaxia (rara)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) antes de cada dosis",
      "Perfil bioquímico renal y hepático",
      "Estado de la mucosa oral"
    ],
    instrucciones_manejo: "CITOTÓXICO. Seguir protocolos estrictos de bioseguridad oncológica. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Supresión medular fatal", "Gastroenteritis hemorrágica"],
      tratamiento: "Leucovorina (Ácido folínico) como antídoto de rescate; soporte sintomático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Aumentan drásticamente el riesgo de toxicidad hematológica y renal. EVITAR.", severidad: "Grave" },
      { farmaco: "Corticosteroides / Penicilinas", efecto: "Pueden disminuir la captación celular del metotrexato.", severidad: "Moderada" },
      { farmaco: "Vincristina", efecto: "Aumenta la captación celular de metotrexato (sinergia).", severidad: "Leve" },
      { farmaco: "Ácido Fólico (Suplementos)", efecto: "Pueden inhibir la respuesta terapéutica al metotrexato.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor competitivo de la dihidrofolato reductasa, impidiendo la formación de tetrahidrofolato, esencial para la síntesis de purinas y ADN.",
    farmacocinetica: "Metabolismo hepático y excreción renal. Alta unión a albúmina sérica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2.5 mg, 10 mg",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
