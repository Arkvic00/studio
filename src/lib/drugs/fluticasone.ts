import type { Drug } from '@/lib/types';

export const fluticasoneDrug: Drug = {
  id: "fluticasone",
  meta_data: {
    nombre_generico: "Fluticasona (Propionato de fluticasona)",
    nombres_comerciales: ["Flixotide"],
    grupo_farmacologico: "Glucocorticoide inhalado potente",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Glucocorticoide inhalado con alta afinidad por los receptores nucleares.",
      "Manejo de enfermedades inflamatorias de las vías respiratorias (Asma, Bronquitis).",
      "Mínima absorción sistémica, lo que reduce los efectos secundarios clásicos de los esteroides.",
      "Requiere el uso de cámaras espaciadoras y máscaras específicas.",
      "No es útil para el tratamiento de broncoespasmos agudos (no es broncodilatador)."
    ],
    usos_principales: "Manejo crónico del asma felina, bronquitis crónica canina y enfermedad inflamatoria de las vías respiratorias en conejos.",
    inicio_accion: "Efecto máximo puede tardar de 1 a 2 semanas",
    duracion_efecto: "Requiere administración diaria"
  },
  informacion_cliente: [
    "Utilice siempre una cámara espaciadora (tipo AeroKat o AeroDawg) para asegurar que el medicamento llegue a los pulmones.",
    "No es un medicamento de rescate; no lo use si su mascota tiene un ataque de asma repentino.",
    "Informe si nota cambios en el comportamiento o aumento excesivo de la sed.",
    "Asegúrese de que la máscara ajuste bien alrededor de la nariz y boca del animal."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad traqueobronquial inflamatoria crónica",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 312.5,
          dosis_min: 125,
          dosis_max: 500,
          unidad_calculo: "μg (microgramos) por perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Asma felina / Enfermedad de vías bajas",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 150,
          dosis_min: 50,
          dosis_max: 250,
          unidad_calculo: "μg (microgramos) por gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ],
    conejo: [
      {
        indicacion: "Enfermedad inflamatoria de las vías respiratorias",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 150,
          dosis_min: 50,
          dosis_max: 250,
          unidad_calculo: "μg (microgramos) por conejo"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad conocida a la fluticasona.",
      "Broncoespasmo agudo (no utilizar como monoterapia)."
    ],
    efectos_adversos: [
      "Supresión leve del eje hipotálamo-hipófisis-adrenal (mucho menor que con esteroides orales).",
      "Posible irritación de las vías respiratorias o estornudos tras la inhalación.",
      "Riesgo de infecciones oportunistas locales (poco común)."
    ],
    monitoreo_recomendado: [
      "Frecuencia y esfuerzo respiratorio",
      "Función adrenal en uso de dosis muy altas a largo plazo"
    ],
    instrucciones_manejo: "Limpiar la cámara espaciadora regularmente según instrucciones del fabricante.",
    sobredosis: {
      signos: ["Signos de hipercortisolismo a largo plazo"],
      tratamiento: "Reducción gradual de la frecuencia de administración."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Glucocorticoide tópico de alta potencia que suprime la inflamación bronquial al inhibir la migración de leucocitos y la liberación de mediadores inflamatorios.",
    farmacocinetica: "Mínima biodisponibilidad sistémica tras la inhalación; el fármaco deglutido sufre un metabolismo de primer paso casi completo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inhalador de dosis medida (Evohaler)",
      concentracion_texto: "50 μg, 125 μg, 250 μg por pulsación",
      valor_concentracion: 50,
      unidad_concentracion: "μg",
      es_divisible: false
    }
  ]
};
