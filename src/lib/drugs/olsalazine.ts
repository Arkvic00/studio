import type { Drug } from '@/lib/types';

export const olsalazineDrug: Drug = {
  id: "olsalazine",
  meta_data: {
    nombre_generico: "Olsalazina",
    nombres_comerciales: ["Olsalazine*"],
    grupo_farmacologico: "Derivado 5-ASA",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Dímero de 5-ASA que se activa en el colon.",
      "Efecto antiinflamatorio local.",
      "Menor riesgo de KCS que la sulfasalazina."
    ],
    usos_principales: "Manejo de la colitis crónica en perros.",
    inicio_accion: "Variable",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "Medicamento para desinflamar el colon.",
    "Realizar pruebas de lágrima periódicas.",
    "Informe si nota ojos rojos o menos lágrima."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Colitis crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Salicilatos."],
    efectos_adversos: ["Ojo seco (KCS).", "Vómitos."],
    monitoreo_recomendado: ["Test de Schirmer"],
    instrucciones_manejo: "Higiene normal.",
    sobredosis: {
      signos: ["Trastornos GI"],
      tratamiento: "Soporte."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs", efecto: "Potenciación de efectos adversos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Acción tópica antiinflamatoria en colon tras liberación bacteriana.",
    farmacocinetica: "Mínima absorción sistémica."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "250 mg", valor_concentracion: 250, unidad_concentracion: "mg", es_divisible: false }
  ]
};