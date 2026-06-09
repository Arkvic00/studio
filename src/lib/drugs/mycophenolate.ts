import type { Drug } from '@/lib/types';

export const mycophenolateDrug: Drug = {
  id: "mycophenolate",
  meta_data: {
    nombre_generico: "Micofenolato de Mofetilo (MMF)",
    nombres_comerciales: ["CellCept", "Myfenax"],
    grupo_farmacologico: "Inmunosupresor; Inhibidor de la síntesis de purinas",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor selectivo y reversible de la inosina monofosfato deshidrogenasa.",
      "Bloquea la síntesis 'de novo' de guanosina, esencial para la proliferación de linfocitos T y B.",
      "Inmunosupresor de acción rápida en comparación con la azatioprina.",
      "Utilizado en enfermedades inmunomediadas severas o refractarias.",
      "La diarrea profusa es el efecto secundario limitante más común."
    ],
    usos_principales: "Tratamiento de la anemia hemolítica inmunomediada (IMHA), trombocitopenia inmunomediada (ITP), glomerulonefritis y miastenia gravis.",
    inicio_accion: "Rápido (efecto inmunológico en pocos días)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "No triturar ni abrir las cápsulas; deben tragarse enteras.",
    "Informe inmediatamente si nota diarrea severa o sangre en las heces.",
    "Se requieren análisis de sangre frecuentes para vigilar los glóbulos blancos.",
    "Utilizar guantes para manipular el medicamento si es posible.",
    "No usar en hembras gestantes."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedades inmunomediadas (IMHA / ITP)",
        vias: ["PO", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 7,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "La dosis de 10 mg/kg q12h es la estándar. Si aparece diarrea, reducir la dosis o suspender temporalmente."
      }
    ],
    gato: [
      {
        indicacion: "Enfermedades inmunomediadas (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Experiencia limitada en gatos; monitorear estrechamente la tolerancia gastrointestinal."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad al micofenolato.",
      "Infecciones activas severas.",
      "Gestación (Altamente teratogénico)."
    ],
    efectos_adversos: [
      "Diarrea severa y vómitos (muy comunes).",
      "Mielosupresión (leucopenia).",
      "Aumento del riesgo de infecciones secundarias.",
      "Papilomatosis cutánea (reportada en perros)."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (CBC) cada 2 semanas al inicio",
      "Estado de las heces",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "CITOTÓXICO POTENCIAL. Manejar con guantes. No abrir cápsulas.",
    sobredosis: {
      signos: ["Diarrea hemorrágica", "Supresión medular profunda"],
      tratamiento: "Soporte sintomático intensivo y cese inmediato del fármaco."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiácidos (Magnesio/Aluminio)", efecto: "Reducen la absorción del micofenolato. Espaciar 2 horas.", severidad: "Importante" },
      { farmaco: "Azatioprina", efecto: "No se recomienda el uso conjunto (mecanismo similar, mayor toxicidad).", severidad: "Grave" },
      { farmaco: "Ciclosporina", efecto: "Puede reducir los niveles plasmáticos del metabolito activo del micofenolato.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la inosina monofosfato deshidrogenasa, bloqueando la síntesis 'de novo' de nucleótidos de guanina, de los cuales dependen críticamente los linfocitos T y B para proliferar.",
    farmacocinetica: "Pro-fármaco convertido rápidamente en ácido micofenólico (MPA), el metabolito activo. Metabolismo hepático y excreción renal/biliar."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Suspensión oral", concentracion_texto: "200 mg/ml", valor_concentracion: 200, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};