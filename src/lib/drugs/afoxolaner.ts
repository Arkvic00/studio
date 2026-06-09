import type { Drug } from '@/lib/types';

export const afoxolanerDrug: Drug = {
  id: "afoxolaner",
  meta_data: {
    nombre_generico: "Afoxolaner",
    nombres_comerciales: ["Nexgard", "Nexgard Spectra"],
    grupo_farmacologico: "Isoxazolina; Insecticida y acaricida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de pulgas y garrapatas en perros.",
      "Elimina pulgas en 8 horas y garrapatas en 48 horas.",
      "Tratamiento de sarna sarcóptica y demodicosis.",
      "Las tabletas no deben dividirse."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas (Ctenocephalides felis y C. canis) y garrapatas en perros. Tratamiento de sarna sarcóptica y demodicosis.",
    inicio_accion: "8 horas (pulgas), 48 horas (garrapatas)",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Administrar una vez al mes.",
    "No dividir las tabletas para asegurar la dosis correcta.",
    "Observar si hay vómitos o diarrea tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas, Garrapatas y Sarnas (Sarcóptica/Demodécica)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4.7,
          dosis_min: 2.5,
          dosis_max: 6.9,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Administrar mensualmente",
          intervalo_horas: 720
        },
        notas_tecnicas: "No usar en cachorros menores de 8 semanas de edad o perros que pesen menos de 2 kg."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad al principio activo o excipientes.",
      "Cachorros menores de 8 semanas de edad.",
      "Perros con un peso inferior a 2 kg."
    ],
    contraindicaciones_especie: {
      "Gato": "¡CONTRAINDICADO!: No usar en gatos.",
      "Perro": "ALERTA: No usar en individuos < 8 semanas de edad o < 2 kg de peso corporal."
    },
    efectos_adversos: [
      "Signos gastrointestinales leves (vómitos, diarrea).",
      "Letargo.",
      "Anorexia.",
      "Prurito.",
      "Signos neurológicos raros (convulsiones, ataxia)."
    ],
    monitoreo_recomendado: [
      "Signos neurológicos (en animales con antecedentes de convulsiones)",
      "Tolerancia gastrointestinal"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. No dividir las tabletas.",
    sobredosis: {
      signos: ["Vómitos", "Diarrea", "Signos neurológicos"],
      treatment: "Tratamiento sintomático y de soporte."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Actúa sobre los canales de cloruro regulados por ligando, especialmente los regulados por el neurotransmisor GABA, bloqueando la transferencia pre y postsináptica de iones cloruro a través de las membranas celulares."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "11.3 mg", valor_concentracion: 11.3, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "28.3 mg", valor_concentracion: 28.3, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "68 mg", valor_concentracion: 68, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta oral", concentracion_texto: "136 mg", valor_concentracion: 136, unidad_concentracion: "mg", es_divisible: false }
  ]
};
