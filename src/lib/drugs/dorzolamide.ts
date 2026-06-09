import type { Drug } from '@/lib/types';

export const dorzolamideDrug: Drug = {
  id: "dorzolamide",
  meta_data: {
    nombre_generico: "Dorzolamida",
    nombres_comerciales: ["Trusopt", "CoSopt (con Timolol)", "Dorzolamida*"],
    grupo_farmacologico: "Inhibidor de la anhidrasa carbónica oftálmico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reduce la presión intraocular (PIO) disminuyendo la producción de humor acuoso.",
      "Inhibe la formación de iones bicarbonato en el epitelio del cuerpo ciliar.",
      "Suele ser menos tolerada que la brinzolamida debido a su pH ácido (5.6).",
      "La combinación con Timolol (CoSopt) suele ser más efectiva en perros.",
      "En gatos, la dorzolamida sola suele alcanzar la máxima eficacia."
    ],
    usos_principales: "Control de todos los tipos de glaucoma en perros, gatos, conejos y aves.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Aplique las gotas siguiendo el horario estricto para evitar picos de presión dolorosos.",
    "Puede causar picor o irritación local momentánea tras la aplicación.",
    "Si usa CoSopt (con timolol), informe si el animal parece cansado o respira con dificultad.",
    "No es útil combinar este fármaco con inhibidores de la anhidrasa carbónica por boca."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Control del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    gato: [
      {
        indicacion: "Control del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    conejo: [
      {
        indicacion: "Control del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    roedores: [
      {
        indicacion: "Ratas: Glaucoma / PIO elevada",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota (diluir al 1% con agua estéril)"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    ave: [
      {
        indicacion: "Control del Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recommended: 1,
          unidad_calculo: "gota"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia hepática o renal severa.",
      "Hipersensibilidad a las sulfonamidas.",
      "Uveítis o luxación anterior de cristalino (específicamente CoSopt por el Timolol)."
    ],
    efectos_adversos: [
      "Irritación local, blefaritis y keratitis.",
      "Salivación (especialmente en gatos por sabor amargo tras drenaje nasolagrimal).",
      "Timolol: Bradicardia e hipotensión.",
      "Acidosis metabólica (perros) o hipopotasemia (gatos) por absorción sistémica rara."
    ],
    monitoreo_recomendado: [
      "Presión intraocular regular",
      "Frecuencia cardiaca si se usa con timolol",
      "Estado de la superficie corneal"
    ],
    instrucciones_manejo: "Observar precauciones normales para productos oftálmicos.",
    sobredosis: {
      signos: ["Bradicardia", "Hipotensión", "Acidosis"],
      tratamiento: "Lavar el ojo con abundante salino; soporte sintomático si hay absorción sistémica masiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibidor de la anhidrasa carbónica que reduce la formación de iones bicarbonato, disminuyendo la producción de humor acuoso.",
    farmacocinetica: "Efecto local predominante."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas (Trusopt)", concentracion_texto: "20 mg/ml (2%)", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false },
    { tipo: "Gotas oftálmicas (CoSopt)", concentracion_texto: "2% Dorzolamida + 0.5% Timolol", valor_concentracion: 20, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};