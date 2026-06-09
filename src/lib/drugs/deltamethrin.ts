import type { Drug } from '@/lib/types';

export const deltamethrinDrug: Drug = {
  id: "deltamethrin",
  meta_data: {
    nombre_generico: "Deltametrina",
    nombres_comerciales: ["Canishield", "Scalibor Protectorband"],
    grupo_farmacologico: "Piretroide sintético; Insecticida y acaricida",
    status_regulatorio: "NFA-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "Insecticida de contacto que bloquea los canales de sodio en los artrópodos.",
      "Proporciona repelencia y eliminación de garrapatas, flebótomos y mosquitos.",
      "El collar alcanza su efecto máximo después de 1 semana de uso.",
      "Eficaz contra flebótomos (transmisores de Leishmania) hasta por 6 meses.",
      "Altamente tóxico para abejas, peces y otros organismos acuáticos."
    ],
    usos_principales: "Prevención de infestaciones por garrapatas y pulgas, y prevención de picaduras de flebótomos y mosquitos en perros.",
    inicio_accion: "7 días para eficacia completa",
    duracion_efecto: "Hasta 6 meses (según producto)"
  },
  informacion_cliente: [
    "Lávese bien las manos después de colocar el collar.",
    "Evite que niños menores de 2 años toquen o jueguen con el collar.",
    "¡PELIGRO!: Nunca usar en gatos. Es altamente tóxico para ellos.",
    "Quitar el collar antes de que el perro nade en ríos o estanques para no matar la vida acuática.",
    "Si su perro ingiere el collar accidentalmente, llévelo al veterinario de inmediato."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prevención de Ectoparásitos y Vectores",
        vias: ["Tópica (Collar)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "Collar cada 5-6 meses"
        },
        notas_tecnicas: "No usar en cachorros menores de 7 semanas de edad. No aplicar sobre piel con lesiones extensas."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Cachorros menores de 7 semanas.",
      "Perros con lesiones cutáneas extensas.",
      "Hipersensibilidad a piretroides."
    ],
    contraindicaciones_especie: {
      "Gato": "¡TÓXICO!: Puede causar reacciones neurológicas fatales. No usar bajo ninguna circunstancia.",
      "Peces / Vida Acuática": "¡ALTAMENTE TÓXICO!: Retirar antes de nadar en fuentes de agua naturales.",
      "Ave": "Tóxico para aves; evitar contacto cercano."
    },
    efectos_adversos: [
      "Dermatitis por contacto alrededor del cuello (raro).",
      "Trastornos neurológicos tras ingestión accidental del collar.",
      "Vómitos y diarrea."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel bajo el collar",
      "Ausencia de signos neurológicos"
    ],
    instrucciones_manejo: "Evitar el contacto del collar con mucosas. Mantener alejado de alimentos.",
    sobredosis: {
      signos: ["Temblores", "Ataxia", "Hipersalivación (en caso de ingestión)"],
      tratamiento: "En caso de ingestión accidental del collar: administrar diazepam para controlar signos neurológicos y tratamiento de soporte."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador de canales de sodio 'open channel', provocando hiperexcitabilidad, convulsiones musculares y muerte del parásito.",
    farmacocinetica: "Liberación lenta y continua del principio activo desde el collar a la capa lipídica de la piel."
  },
  presentaciones_comerciales: [
    {
      tipo: "Collar medicado",
      concentracion_texto: "4% (0.76 g o 1.0 g)",
      valor_concentracion: 4,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
