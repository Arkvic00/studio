import type { Drug } from '@/lib/types';

export const rifampinDrug: Drug = {
  id: "rifampin",
  meta_data: {
    nombre_generico: "Rifampicina (Rifampin)",
    nombres_comerciales: ["Rifadin*", "Rimactane*"],
    grupo_farmacologico: "Antibacteriano (Rifamicina)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la RNA polimerasa bacteriana.",
      "Amplio espectro incluyendo Gram-positivos y Micobacterias.",
      "¡ALERTA!: Desarrolla resistencia muy rápido; usar SIEMPRE en combinación.",
      "Eficaz contra patógenos intracelulares (Brucella, Mycobacteria).",
      "Potente inductor enzimático hepático."
    ],
    usos_principales: "Tratamiento de micobacteriosis (lepra felina), brucelosis, piodermas resistentes y Rhodococcus equi (en combinación).",
    inicio_accion: "Rápido",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "La orina, saliva y lágrimas de su mascota se volverán de un color naranja-rojo; es un efecto inofensivo del medicamento.",
    "Las mujeres en edad fértil deben usar guantes al manipular el jarabe.",
    "Nunca use este antibiótico solo; debe darse junto con otros según indique el veterinario.",
    "Informe si nota que su mascota tiene los ojos amarillos o deja de comer.",
    "No usar en animales con problemas de hígado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones sistémicas / Micobacterias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Micobacteriosis / Lepra felina",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas",
          intervalo_horas: 24
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Enfermedad hepática preexistente.",
      "Gestación (Teratogénico en dosis altas).",
      "Uso como monoterapia."
    ],
    efectos_adversos: [
      "Hepatotoxicidad (elevación de ALT/ALP, ictericia).",
      "Coloración naranja-roja de fluidos corporales.",
      "Trastornos gastrointestinales.",
      "Anemia y trombocitopenia (raro)."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas periódicamente",
      "Hematología completa",
      "Estado de la piel y mucosas"
    ],
    instrucciones_manejo: "Manejar con guantes. Altamente persistente en el medio ambiente.",
    sobredosis: {
      signos: ["Ictericia aguda", "Vómitos", "Letargo"],
      tratamiento: "Soporte hepático intensivo."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antifúngicos (Itraconazol) / Corticosteroides", efecto: "Rifampicina acelera drásticamente su metabolismo, reduciendo su eficacia.", severidad: "Importante" },
      { farmaco: "Barbitúricos", efecto: "Reducción de los niveles de barbitúricos.", severidad: "Moderada" },
      { farmaco: "Teofilina", efecto: "Reducción de los niveles de teofilina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a la subunidad beta de la RNA polimerasa dependiente de ADN, bloqueando la síntesis de ARN bacteriano.",
    farmacocinetica: "Absorción oral excelente. Altamente lipofílica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "150 mg, 300 mg",
      valor_concentracion: 300,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Jarabe oral",
      concentracion_texto: "20 mg/ml",
      valor_concentracion: 20,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
