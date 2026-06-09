import type { Drug } from '@/lib/types';

export const hydralazineDrug: Drug = {
  id: "hydralazine",
  meta_data: {
    nombre_generico: "Hidralazina",
    nombres_comerciales: ["Apresoline", "Hydralazine*"],
    grupo_farmacologico: "Vasodilatador arteriolar; Reductor de poscarga",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa directamente sobre el músculo liso arteriolar provocando vasodilatación.",
      "Reduce la poscarga y aumenta el volumen sistólico y gasto cardíaco.",
      "Capaz de disminuir la resistencia vascular sistémica hasta un 50%.",
      "Suele requerir el uso concomitante de diuréticos debido a la retención de sodio/agua.",
      "Requiere hospitalización y monitoreo frecuente de la presión arterial al inicio."
    ],
    usos_principales: "Tratamiento de la insuficiencia cardíaca congestiva secundaria a insuficiencia mitral refractaria y manejo de la hipertensión sistémica severa.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Administrar preferiblemente con comida para mejorar la absorción.",
    "Requiere controles frecuentes de presión arterial.",
    "Informe si nota debilidad extrema, desmayos o vómitos (especialmente en gatos).",
    "No suspenda el medicamento sin consultar al veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "ICC refractaria / Reducción de poscarga",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.5,
          dosis_max: 3.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con 0.5-1 mg/kg q12h. Monitorizar presión arterial y titular hasta 2-3 mg/kg si es necesario."
      }
    ],
    gato: [
      {
        indicacion: "Hipertensión / ICC",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 2.5,
          dosis_min: 2.5,
          dosis_max: 10,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con la dosis más baja y titular con precaución. Vómitos y anorexia son efectos secundarios comunes en gatos."
      }
    ],
    cobaya: [
      {
        indicacion: "Soporte cardíaco (Emergencia)",
        vias: ["IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Según sea necesario", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipovolemia.",
      "Hipotensión sistémica.",
      "Insuficiencia renal severa.",
      "Hemorragia cerebral."
    ],
    efectos_adversos: [
      "Taquicardia refleja (muy común).",
      "Hipotensión severa.",
      "Anorexia y vómitos (frecuentes en gatos).",
      "Retención de líquidos."
    ],
    monitoreo_recomendado: [
      "Presión arterial sistémica (crítico)",
      "Frecuencia cardíaca",
      "Función renal (Creatinina/BUN)"
    ],
    instrucciones_manejo: "Observar precauciones normales para inyectables y tabletas.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Taquicardia extrema", "Colapso"],
      tratamiento: "Soporte cardiovascular con fluidoterapia y agentes inotrópicos si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "IECAs / Beta-bloqueadores / Diuréticos", efecto: "Potenciación del efecto hipotensor.", severidad: "Importante" },
      { farmaco: "Simpaticomiméticos", efecto: "Pueden causar taquicardia severa.", severidad: "Moderada" },
      { farmaco: "Adrenalina", efecto: "La respuesta presora de la adrenalina puede verse reducida.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Relajación directa del músculo liso arteriolar, reduciendo la resistencia vascular periférica sin afectar significativamente las venas.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "25 mg, 50 mg", valor_concentracion: 25, unidad_concentracion: "mg", es_divisible: true },
    { tipo: "Inyectable", concentracion_texto: "20 mg (polvo para reconstitución)", valor_concentracion: 20, unidad_concentracion: "mg", es_divisible: false }
  ]
};
