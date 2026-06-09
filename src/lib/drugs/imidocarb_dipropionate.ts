import type { Drug } from '@/lib/types';

export const imidocarbDipropionateDrug: Drug = {
  id: "imidocarb_dipropionate",
  meta_data: {
    nombre_generico: "Imidocarb (Dipropionato de Imidocarb)",
    nombres_comerciales: ["Imizol"],
    grupo_farmacologico: "Antiprotozoario",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interfiere con el metabolismo del ácido nucleico del parásito.",
      "Tratamiento de elección para Babesia canis en perros.",
      "La cura parasitológica completa es difícil de lograr en especies pequeñas (B. gibsoni).",
      "Requiere precaución en animales con compromiso renal, hepático o pulmonar.",
      "Produce efectos secundarios colinérgicos frecuentes."
    ],
    usos_principales: "Tratamiento de la babesiosis canina y felina.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere repetición en 2-3 semanas"
  },
  informacion_cliente: [
    "La inyección puede causar salivación, jadeo o inquietud poco después de la administración.",
    "El veterinario puede administrar otro medicamento antes para reducir estos efectos.",
    "Informe si nota inflamación o llagas en el sitio donde se aplicó la inyección.",
    "No es adecuado para cachorros muy jóvenes o hembras embarazadas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Babesia canis",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 6.6,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única, repetir en 2-3 semanas",
          intervalo_horas: 336
        },
        notas_tecnicas: "Calcular dosis basado en 121.15 mg/ml de dipropionato. Considerar premedicación con atropina (0.05 mg/kg) para mitigar efectos colinérgicos."
      }
    ],
    gato: [
      {
        indicacion: "Babesiosis (Especies grandes)",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Administración intravenosa (¡PROHIBIDO!).",
      "Fallo renal o hepático severo.",
      "Compromiso pulmonar."
    ],
    efectos_adversos: [
      "Signos colinérgicos: salivación, vómitos, diarrea, jadeo.",
      "Inflamación o ulceración en el sitio de inyección.",
      "Reacciones anafilactoides (raras en perros).",
      "Letargo."
    ],
    monitoreo_recomendado: [
      "Frecuencia respiratoria tras la inyección",
      "Función renal y hepática",
      "Presencia de parásitos en frotis de control"
    ],
    instrucciones_manejo: "No inyectar IV. Observar al animal por al menos 30 min post-inyección.",
    sobredosis: {
      signos: ["Hipersalivación masiva", "Vómitos", "Convulsiones"],
      tratamiento: "Atropina como antídoto específico para los efectos colinérgicos."
    },
    interacciones_farmacologicas: [
      { farmaco: "Anticolinesterásicos", efecto: "Potenciación peligrosa de efectos colinérgicos.", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la síntesis y reparación del ADN del protozoo mediante la unión a surcos menores del ADN.",
    farmacocinetica: "Absorción rápida tras IM/SC. Persistencia tisular prolongada."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "121.15 mg/ml (Dipropionato)",
      valor_concentracion: 121.15,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};