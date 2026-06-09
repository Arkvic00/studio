import type { Drug } from '@/lib/types';

export const formaldehydeDrug: Drug = {
  id: "formaldehyde",
  meta_data: {
    nombre_generico: "Formaldehído (Formalina / Formol)",
    nombres_comerciales: ["Formaldehyde 30% Solution", "FMG Mixture"],
    grupo_farmacologico: "Biocida; Desinfectante; Ectoparasiticida (Peces)",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Biocida que provoca la muerte celular por entrecruzamiento de proteínas.",
      "Tratamiento de protozoos y algunos ectoparásitos monogeneos en peces.",
      "Actúa contra hongos en huevos de peces (water mould).",
      "Irritante branquial potente: reduce el oxígeno disuelto en el agua.",
      "Tóxico para elasmobranquios (tiburones, rayas) e invertebrados.",
      "La toxicidad aumenta con la temperatura alta y el pH bajo."
    ],
    usos_principales: "Tratamiento de ectoparásitos en peces y anfibios (ajolotes) mediante inmersión.",
    inicio_accion: "Inmediato (contacto directo)",
    duracion_efecto: "Limitada al tiempo de inmersión"
  },
  informacion_cliente: [
    "Sustancia altamente tóxica e irritante; use guantes y mascarilla al manipularla.",
    "Asegure una aireación extra fuerte en el tanque durante el tratamiento.",
    "No usar en agua con temperatura superior a 27°C.",
    "Diluir siempre el medicamento 1:100 antes de añadirlo al tanque principal.",
    "Informe si los peces boquean en la superficie o parecen estresados."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Ectoparásitos (Inmersión corta)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.187,
          dosis_min: 0.125,
          dosis_max: 0.25,
          unidad_calculo: "ml/l (Formalina al 37%)"
        },
        duracion_tratamiento: "30 a 60 minutos",
        frecuencia: { texto_ui: "Cada 24 horas por 2-3 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Inmersión prolongada",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.02,
          dosis_min: 0.015,
          dosis_max: 0.025,
          unidad_calculo: "ml/l (Formalina al 37%)"
        },
        frecuencia: { texto_ui: "Cada 48 horas (3 tratamientos)", intervalo_horas: 48 }
      }
    ],
    axolote: [
      {
        indicacion: "Protozoos ectoparásitos",
        vias: ["Inmersión estática"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.037,
          dosis_min: 0.025,
          dosis_max: 0.05,
          unidad_calculo: "ml/l (Formalina al 37%)"
        },
        duracion_tratamiento: "Baño de 8 horas en 2 días consecutivos",
        frecuencia: { texto_ui: "Diario", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Agua a temperatura > 27°C.",
      "Baja dureza del agua o pH muy bajo.",
      "Presencia de invertebrados acuáticos o elasmobranquios.",
      "No mezclar con permanganato de potasio (riesgo de explosión)."
    ],
    efectos_adversos: [
      "Irritación branquial severa.",
      "Hipoxia (por falta de oxígeno en el agua).",
      "Daño tisular agudo en peces sin escamas o crías.",
      "Potencial cancerígeno en humanos (manejar con precaución extrema)."
    ],
    monitoreo_recomendado: [
      "Niveles de oxígeno disuelto",
      "Frecuencia respiratoria de los peces",
      "Comportamiento de nado"
    ],
    instrucciones_manejo: "Manejar en áreas bien ventiladas. No usar si la solución presenta un precipitado blanco (paraformaldehído), ya que es muy tóxico.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Boqueo en superficie", "Necrosis branquial"],
      tratamiento: "Cambio total de agua limpia y aireación masiva inmediata."
    },
    interacciones_farmacologicas: [
      { farmaco: "Verde de Malaquita", efecto: "Efecto sinérgico potente contra protozoos externos.", severidad: "Leve" },
      { farmaco: "Permanganato de potasio", efecto: "Reacción química violenta. ¡PROHIBIDO MEZCLAR!", severidad: "Grave" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Agente alquilante que se une a grupos amino de proteínas y ácidos nucleicos, causando desnaturalización y muerte celular.",
    farmacocinetica: "Acción tópica externa."
  },
  presentaciones_comerciales: [
    {
      tipo: "Solución acuosa (Formalina)",
      concentracion_texto: "37% - 40% Formaldehído gas",
      valor_concentracion: 37,
      unidad_concentracion: "%",
      es_divisible: false
    }
  ]
};
