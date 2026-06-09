import type { Drug } from '@/lib/types';

export const protamineSulphateDrug: Drug = {
  id: "protamine_sulphate",
  meta_data: {
    nombre_generico: "Sulfato de Protamina",
    nombres_comerciales: ["Protamine sulphate*"],
    grupo_farmacologico: "Anticoagulante; Antídoto de heparina",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Antagonista de la heparina que forma un complejo salino inactivo.",
      "Neutraliza los efectos de la heparina en 5 minutos.",
      "El efecto persiste por aproximadamente 2 horas.",
      "Información limitada sobre la neutralización de heparinas de bajo peso molecular (LMWH).",
      "Debe administrarse IV muy lentamente."
    ],
    usos_principales: "Tratamiento de la sobredosis de heparina.",
    inicio_accion: "Rápido (5 minutos)",
    duracion_efecto: "2 horas"
  },
  informacion_cliente: [
    "Medicamento de emergencia utilizado para detener el sangrado excesivo por heparina.",
    "Uso hospitalario exclusivo bajo monitorización constante.",
    "Informe si nota que el animal parece tener dificultad para respirar tras la inyección."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Sobredosis de heparina",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg por cada 80–100 UI de heparina"
        },
        frecuencia: { texto_ui: "Dosis única (ajustar según tiempo transcurrido)", intervalo_horas: 0 },
        notas_tecnicas: "Reducir la dosis a la mitad por cada 30 min transcurridos desde la dosis de heparina. No exceder 50 mg en 10 min."
      }
    ],
    gato: [
      {
        indicacion: "Sobredosis de heparina",
        vias: ["IV muy lenta"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg por cada 80–100 UI de heparina"
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay contraindicaciones absolutas en sobredosis agudas."
    ],
    efectos_adversos: [
      "Anafilaxia.",
      "Hipotensión severa (si se inyecta rápido).",
      "Bradicardia.",
      "Vómitos y náuseas.",
      "Hipertensión pulmonar."
    ],
    monitoreo_recomendado: [
      "Parámetros de coagulación (ACT o TTPA)",
      "Presión arterial",
      "Frecuencia cardíaca"
    ],
    instrucciones_manejo: "Administrar IV muy lentamente (1-3 min). Diluir en Dextrosa 5% o Salino.",
    sobredosis: {
      signos: ["Hemorragia (la protamina sola tiene efecto anticoagulante débil)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Base fuerte que se une a la heparina (ácido fuerte) para formar un complejo de sal estable sin actividad biológica.",
    farmacocinetica: "Eliminación rápida de la circulación."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "10 mg/ml",
      valor_concentracion: 10,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
