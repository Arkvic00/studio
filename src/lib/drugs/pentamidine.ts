import type { Drug } from '@/lib/types';

export const pentamidineDrug: Drug = {
  id: "pentamidine",
  meta_data: {
    nombre_generico: "Pentamidina (Isetionato de pentamidina)",
    nombres_comerciales: ["Pentacarinat*"],
    grupo_farmacologico: "Antiprotozoario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Fármaco altamente tóxico utilizado para protozoos resistentes.",
      "Interacciona con el ADN del parásito.",
      "Uso principal cuando fallan los antimoniales en leishmaniosis.",
      "Tratamiento de elección para neumonía por Pneumocystis en hurones.",
      "¡NUNCA administrar por vía IV rápida!: Riesgo de colapso cardiovascular."
    ],
    usos_principales: "Tratamiento de leishmaniosis canina refractaria y neumonía por Pneumocystis en hurones.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Requiere esquemas intermitentes (q48-72h)"
  },
  informacion_cliente: [
    "Fármaco de uso hospitalario exclusivo debido a su alta toxicidad.",
    "Se requieren análisis de sangre frecuentes para vigilar los riñones y el hígado.",
    "La inyección puede causar inflamación o llagas en el sitio de aplicación.",
    "Informe inmediatamente si nota vómitos intensos o debilidad extrema."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Leishmaniosis refractaria",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 48 },
        notas_tecnicas: "Consultar con especialista oncológico/infectólogo antes de usar."
      }
    ],
    huron: [
      {
        indicacion: "Neumonía por Pneumocystis",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 3.5,
          dosis_min: 3,
          dosis_max: 4,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 48 horas", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal o hepática severa.",
      "Administración IV rápida.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Dolor y necrosis en el sitio de inyección.",
      "Hipotensión severa (si es IV).",
      "Nefrotoxicidad y hepatotoxicidad.",
      "Hipoglucemia y alteraciones de la sangre (en humanos).",
      "Vómitos y salivación."
    ],
    monitoreo_recomendado: [
      "Función renal (Creatinina/BUN) y hepática",
      "Glucosa en sangre",
      "Integridad del sitio de inyección"
    ],
    instrucciones_manejo: "MANEJAR COMO CITOTÓXICO. Usar guantes y protección. Evitar contacto con piel.",
    sobredosis: {
      signos: ["Colapso cardiovascular", "Fallo renal agudo"],
      tratamiento: "Soporte sintomático intensivo."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la síntesis de ADN, ARN y proteínas del parásito.",
    farmacocinetica: "Captación rápida por el parásito. Eliminación lenta."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "300 mg", valor_concentracion: 300, unidad_concentracion: "mg", es_divisible: false }
  ]
};
