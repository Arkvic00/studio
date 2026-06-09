import type { Drug } from '@/lib/types';

export const phosphateEnemaDrug: Drug = {
  id: "phosphate_enema",
  meta_data: {
    nombre_generico: "Enema de Fosfato (Ácido sódico fosfato)",
    nombres_comerciales: ["Fleet Enema", "Fletchers'"],
    grupo_farmacologico: "Laxante osmótico rectal",
    status_regulatorio: "P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca la evacuación rápida del colon mediante ósmosis.",
      "Atrae agua hacia el lumen intestinal, ablandando las heces y estimulando el peristaltismo.",
      "¡EXTREMADAMENTE PELIGROSO! en gatos y perros pequeños.",
      "Causa desequilibrios electrolíticos que pueden ser fatales."
    ],
    usos_principales: "Tratamiento del estreñimiento severo e impactación fecal en perros medianos y grandes.",
    inicio_accion: "Casi inmediato (minutos)",
    duracion_efecto: "Hasta completar evacuación"
  },
  informacion_cliente: [
    "¡PELIGRO!: No usar nunca en gatos ni en perros de menos de 5 kg de peso corporal. Puede causarles la muerte.",
    "Se administra por vía rectal.",
    "El animal tendrá ganas de defecar casi inmediatamente tras la aplicación.",
    "Informe si nota temblores o debilidad extrema tras el uso."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estreñimiento / Impactación (Perros 5-10 kg)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 60,
          unidad_calculo: "ml (Aprox. medio envase)"
        }
      },
      {
        indicacion: "Estreñimiento / Impactación (Perros >10 kg)",
        vias: ["Rectal"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 128,
          unidad_calculo: "ml (Envase completo)"
        }
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "¡MORTAL!: Causa hipocalcemia e hiperfosfatemia fulminante."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (¡MORTAL!).",
      "Perros de menos de 5 kg.",
      "Obstrucción intestinal mecánica o perforación.",
      "Insuficiencia renal."
    ],
    efectos_adversos: [
      "Hipocalcemia severa (temblores, convulsiones).",
      "Hiperfosfatemia profunda.",
      "Hipernatremia.",
      "Deshidratación por pérdida de fluidos hacia el colon."
    ],
    monitoreo_recomendado: [
      "Electrolitos séricos post-evacuación (especialmente Calcio y Fósforo)",
      "Estado de hidratación",
      "Signos neurológicos"
    ],
    instrucciones_manejo: "Asegurar que el perro tenga acceso a abundante agua tras el procedimiento.",
    sobredosis: {
      signos: ["Tétanos / Convulsiones", "Colapso cardiovascular"],
      tratamiento: "Cese inmediato. Administración de Gluconato de Calcio IV y fluidoterapia agresiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente osmótico hipertónico que extrae agua hacia el intestino grueso.",
    farmacocinetica: "Absorción sistémica parcial de sodio y fosfato a través de la mucosa colónica."
  },
  presentaciones_comerciales: [
    { tipo: "Enema preparado", concentracion_texto: "133 ml (Fórmula Fleet)", valor_concentracion: 1, unidad_concentracion: "envase", es_divisible: false }
  ]
};