import type { Drug } from '@/lib/types';

export const prazosinDrug: Drug = {
  id: "prazosin",
  meta_data: {
    nombre_generico: "Prazosina",
    nombres_comerciales: ["Hypovase", "Prazosin*"],
    grupo_farmacologico: "Antagonista alfa-1 adrenérgico; Vasodilatador",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador alfa-1 post-sináptico selectivo.",
      "Provoca vasodilatación arterial y venosa.",
      "Reduce la resistencia del esfínter uretral interno.",
      "Menos propenso a causar taquicardia refleja que la fenoxibenzamina.",
      "La eficacia puede disminuir con el tiempo (tolerancia)."
    ],
    usos_principales: "Manejo de la obstrucción uretral funcional, hipertensión sistémica o pulmonar e ICC refractaria.",
    inicio_accion: "Rápido (1-2 horas)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Puede causar somnolencia o mareos al inicio del tratamiento.",
    "Informe si su mascota se desmaya o parece muy débil.",
    "Generalmente se administra dos o tres veces al día.",
    "No suspenda el medicamento sin consultar al veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Obstrucción uretral funcional",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg por cada 15 kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      },
      {
        indicacion: "ICC refractaria / Hipertensión",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg/perro (Dosis total)"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 8 },
        notas_tecnicas: "Perros < 15 kg: 1 mg q8-12h. Perros > 15 kg: 2 mg q8-12h."
      }
    ],
    gato: [
      {
        indicacion: "Espasmo uretral / FLUTD",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.5,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipotensión severa.",
      "Fallo renal severo."
    ],
    efectos_adversos: [
      "Hipotensión ortostática (mareos al levantarse).",
      "Síncope.",
      "Somnolencia y debilidad.",
      "Vómitos y diarrea."
    ],
    monitoreo_recomendado: [
        "Presión arterial sistémica",
        "Facilidad de micción",
        "Estado de alerta"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Hipotensión profunda", "Colapso"],
      tratamiento: "Soporte circulatorio con fluidos isotónicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Beta-bloqueadores / Diuréticos", efecto: "Aumentan significativamente el riesgo de hipotensión marcada.", severidad: "Importante" },
      { farmaco: "Bloqueadores de canales de calcio", efecto: "Potenciación del efecto hipotensor.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueo selectivo de los receptores alfa-1 adrenérgicos post-sinápticos, relajando el músculo liso vascular y uretral.",
    farmacocinetica: "Metabolismo hepático extenso. Excreción biliar y renal."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "0.5 mg, 1 mg, 2 mg, 5 mg", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: true }
  ]
};