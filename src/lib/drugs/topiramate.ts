import type { Drug } from '@/lib/types';

export const topiramateDrug: Drug = {
  id: "topiramate",
  meta_data: {
    nombre_generico: "Topiramato",
    nombres_comerciales: ["Topamax", "Topiramate*"],
    grupo_farmacologico: "Anticonvulsivo; Modulador de canales iónicos",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Múltiples mecanismos: bloquea canales de Na+, potencia GABA y antagoniza Glutamato.",
      "Utilizado como terapia adjunta en epilepsia refractaria.",
      "Uso reportado en dolor neuropático y dermatitis ulcerativa idiopática felina.",
      "Vida media corta en perros (2-4 horas) pero efecto biológico persistente.",
      "No requiere monitoreo de niveles séricos rutinario."
    ],
    usos_principales: "Tratamiento adjunto de convulsiones refractarias y manejo del dolor neuropático.",
    inicio_accion: "Rápido",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; requiere retirada gradual.",
    "Puede causar somnolencia o una disminución del apetito.",
    "Informe si nota que su mascota camina de forma inestable (ataxia).",
    "Generalmente se administra dos o tres veces al día."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Epilepsia refractaria (Adjunto)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 2,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas", intervalo_horas: 12 },
        notas_tecnicas: "Iniciar en el rango bajo y escalar incrementalmente según respuesta."
      }
    ],
    gato: [
      {
        indicacion: "Convulsiones / Dermatitis ulcerativa",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 25,
          unidad_calculo: "mg/gato"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida.",
      "Fallo hepático o renal severo (usar con precaución)."
    ],
    efectos_adversos: [
      "Sedación y letargo.",
      "Anorexia (pérdida de apetito).",
      "Ataxia (falta de coordinación).",
      "Vómitos."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones",
      "Peso corporal",
      "Estado mental"
    ],
    instrucciones_manejo: "Observar precauciones normales. Tapering obligatorio para evitar convulsiones de rebote.",
    sobredosis: {
      signos: ["Sedación profunda", "Vómitos", "Signos neurológicos"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros anticonvulsivos", efecto: "Efectos sedantes aditivos.", severidad: "Moderada" },
      { farmaco: "Inhibidores de la anhidrasa carbónica", efecto: "Topiramato también tiene esta acción; riesgo de acidosis.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio dependientes de voltaje, aumenta la frecuencia de activación de los receptores GABA-A y antagoniza los receptores AMPA de glutamato.",
    farmacocinetica: "Eliminación renal predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta / Cápsula", concentracion_texto: "25 mg, 50 mg, 100 mg", valor_concentracion: 50, unidad_concentracion: "mg", es_divisible: true }
  ]
};
