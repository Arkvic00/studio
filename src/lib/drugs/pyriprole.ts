import type { Drug } from '@/lib/types';

export const pyriproleDrug: Drug = {
  id: "pyriprole",
  meta_data: {
    nombre_generico: "Piriprol",
    nombres_comerciales: ["Prac-tic"],
    grupo_farmacologico: "Insecticida y acaricida (Fenilpirazol)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloqueador de los canales de cloruro mediados por GABA.",
      "Eficaz contra pulgas y garrapatas en perros.",
      "Uso en perros > 8 semanas y > 2 kg.",
      "Mantiene su eficacia tras el baño (esperar 48h post-aplicación).",
      "No debe usarse en gatos."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas y garrapatas en perros.",
    inicio_accion: "Rápido (control de pulgas en 24h)",
    duracion_efecto: "4 semanas (Mensual)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca.",
    "¡PELIGRO!: No utilizar en gatos.",
    "No bañar al perro 48h antes ni 24h después de la aplicación.",
    "Lavar bien las manos tras el uso.",
    "Producto dañino para organismos acuáticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 semanas",
          intervalo_horas: 672
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Cachorros < 8 semanas o < 2 kg.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Prurito o dermatitis local transitoria.",
      "Letargo.",
      "Ataxia y convulsiones (raro).",
      "Vómitos y diarrea."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en sitio de aplicación",
      "Estado neurológico en razas sensibles"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Trastornos neurológicos", "Vómitos"],
      tratamiento: "Lavar el área con detergente suave; soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interacciona con los canales de cloruro regulados por GABA, bloqueando la transferencia iónica y causando la muerte del parásito.",
    farmacocinetica: "Distribución por la capa lipídica cutánea."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pipeta Spot-on",
      concentracion_texto: "125 mg/ml",
      valor_concentracion: 125,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
