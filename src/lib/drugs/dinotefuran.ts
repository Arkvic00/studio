import type { Drug } from '@/lib/types';

export const dinotefuranDrug: Drug = {
  id: "dinotefuran",
  meta_data: {
    nombre_generico: "Dinotefuran",
    nombres_comerciales: ["Vectra 3D"],
    grupo_farmacologico: "Insecticida neonicotinoide",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Adulticida de pulgas potente que actúa sobre los receptores nicotínicos de acetilcolina.",
      "La formulación Vectra 3D incluye piriproxifeno (regulador de crecimiento) y permetrina (acaricida/repelente).",
      "Acción repelente contra flebótomos, mosquitos y moscas de los establos.",
      "Mantiene su eficacia tras la inmersión en agua (baño o natación).",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS! debido a la permetrina en Vectra 3D."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas y garrapatas, y repelencia de insectos voladores en perros.",
    inicio_accion: "Rápido (control de pulgas en horas)",
    duracion_efecto: "30 días (mensual)"
  },
  informacion_cliente: [
    "Aplicar el contenido de la pipeta directamente sobre la piel del lomo, apartando el pelo.",
    "¡PELIGRO!: No usar en gatos. Puede ser mortal para ellos por su contenido en permetrina.",
    "No fumar ni comer durante la manipulación del producto.",
    "No bañar al perro en las 48 horas previas o posteriores a la aplicación para asegurar la distribución.",
    "Evitar que el perro lama el sitio de aplicación mientras esté húmedo."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control de Pulgas, Garrapatas y Repelente de Vectores",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 30 días", intervalo_horas: 720 },
        notas_tecnicas: "No usar en perros de menos de 7 semanas de edad o menos de 1.5 kg de peso."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Cachorros < 7 semanas o < 1.5 kg.",
      "Hipersensibilidad a neonicotinoides o permetrinas."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Contiene permetrina. Riesgo de convulsiones y muerte. No aplicar ni permitir contacto con perros recién tratados.",
      "Abejas": "Altamente tóxico para insectos polinizadores."
    },
    efectos_adversos: [
      "Eritema o prurito local transitorio.",
      "Hiperactividad o ansiedad (raro).",
      "Vómitos y diarrea (raro).",
      "Temblores musculares y signos neurológicos (en casos de sensibilidad o ingestión)."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en el sitio de aplicación",
      "Ausencia de signos neurológicos transitorios"
    ],
    instrucciones_manejo: "No fumar. Lavarse las manos tras la aplicación. Mantener a los gatos alejados de los perros tratados hasta que el sitio de aplicación esté seco.",
    sobredosis: {
      signos: ["Temblores musculares", "Ataxia", "Hipersalivación"],
      tratamiento: "Bañar con detergente suave para eliminar el producto. Diazepam para controlar temblores."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los receptores nicotínicos de acetilcolina en los insectos, provocando sobreestimulación nerviosa, parálisis y muerte.",
    farmacocinetica: "Se distribuye por la capa lipídica de la piel y el pelo del animal."
  },
  presentaciones_comerciales: [
    { tipo: "Spot-on (Vectra 3D)", concentracion_texto: "Dinotefuran 54mg + Piriprox. 4.8mg + Permetrina 397mg / ml", valor_concentracion: 54, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
