import type { Drug } from '@/lib/types';

export const indoxacarbDrug: Drug = {
  id: "indoxacarb",
  meta_data: {
    nombre_generico: "Indoxacarb",
    nombres_comerciales: ["Activyl", "Activyl Tick Plus"],
    grupo_farmacologico: "Insecticida (Oxadiazina)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Pro-fármaco bioactivado por enzimas del insecto.",
      "Bloquea los canales de sodio dependientes de voltaje en el parásito.",
      "Alta especificidad por células de insectos, minimizando toxicidad en mamíferos.",
      "Eficaz contra todos los estadios de pulgas en el entorno del animal.",
      "La versión 'Tick Plus' incluye permetrina para control de garrapatas."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas (C. felis) y garrapatas (en perros).",
    inicio_accion: "Rápido (contacto)",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca.",
    "¡PELIGRO!: Nunca use Activyl Tick Plus en gatos; contiene permetrina que es mortal para ellos.",
    "Puede causar picor o pérdida de pelo leve en el sitio de aplicación.",
    "Producto tóxico para organismos acuáticos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas y Garrapatas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 semanas",
          intervalo_horas: 672
        }
      }
    ],
    gato: [
      {
        indicacion: "Infestación por Pulgas",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
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
      "Animales menores de 8 semanas.",
      "Perros < 1.5 kg / Gatos < 0.6 kg.",
      "Gatos: No usar formulación con permetrina."
    ],
    efectos_adversos: [
      "Prurito y eritema local transitorio.",
      "Signos gastrointestinales raros (vómitos).",
      "Salivación si se ingiere tras lamido."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en el sitio de aplicación"
    ],
    instrucciones_manejo: "Lavarse las manos tras su uso. Evitar contacto con ojos.",
    sobredosis: {
      signos: ["Salivación", "Letargo"],
      tratamiento: "Lavar el área con detergente suave; soporte sintomático."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador selectivo de los canales de sodio en el sistema nervioso del insecto.",
    farmacocinetica: "Se distribuye por los lípidos cutáneos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pipeta Spot-on",
      concentracion_texto: "195 mg/ml (Activyl)",
      valor_concentracion: 195,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};