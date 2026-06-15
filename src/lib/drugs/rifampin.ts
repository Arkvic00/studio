import type { Drug } from '@/lib/types';

export const rifampinDrug: Drug = {
  id: "rifampin",
  meta_data: {
    nombre_generico: "Rifampicina",
    nombres_comerciales: ["Rifadin", "Rimactane"],
    grupo_farmacologico: "Antibiótico macrocíclico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida que inhibe la ARN polimerasa dependiente de ADN.",
      "Excelente penetración en tejidos y macrófagos.",
      "Se desarrolla resistencia rápidamente si se usa como monoterapia.",
      "Puede teñir la orina, saliva y lágrimas de color rojo/naranja."
    ],
    usos_principales: "Tratamiento de infecciones estafilocócicas graves (especialmente osteomielitis) y Rhodococcus equi en potros.",
    inicio_accion: "Rápido",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "La orina y las lágrimas de su mascota pueden volverse anaranjadas; es normal.",
    "Debe administrarse con el estómago vacío para mejor absorción.",
    "Informe si nota que las encías o los ojos se ponen amarillos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones estafilocócicas refractarias",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          dosis_min: 5,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 },
        notas_tecnicas: "Usar siempre en combinación con otro antibiótico."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Insuficiencia hepática severa.", "Hipersensibilidad."],
    efectos_adversos: ["Hepatotoxicidad.", "Coloración naranja de fluidos corporales.", "Anorexia y vómitos."],
    monitoreo_recomendado: ["Enzimas hepáticas (ALT/ALP) cada 2 semanas"],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Ictericia", "Vómitos", "Letargo"],
      tratamiento: "Lavado gástrico y soporte hepático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inductores enzimáticos", efecto: "Rifampicina induce fuertemente el CYP450, reduciendo niveles de muchos fármacos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de ARN al unirse a la ARN polimerasa bacteriana.",
    farmacocinetica: "Absorción oral rápida. Metabolismo hepático extenso."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "150 mg, 300 mg", valor_concentracion: 300, unidad_concentracion: "mg" }
  ]
};