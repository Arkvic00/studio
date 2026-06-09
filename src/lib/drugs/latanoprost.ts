import type { Drug } from '@/lib/types';

export const latanoprostDrug: Drug = {
  id: "latanoprost",
  meta_data: {
    nombre_generico: "Latanoprost",
    nombres_comerciales: ["Xalatan", "Monopost"],
    grupo_farmacologico: "Agonista de receptores de prostaglandina F",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Reduce la presión intraocular (PIO) aumentando el flujo de salida del humor acuoso.",
      "Tratamiento de elección en el glaucoma primario canino agudo.",
      "Causa una miosis (contracción de pupila) intensa en perros y gatos.",
      "Eficacia variable en gatos; uso a largo plazo poco estudiado.",
      "Eficaz en el manejo de la subluxación de cristalino."
    ],
    usos_principales: "Tratamiento de glaucoma primario y manejo de emergencia de glaucoma agudo en perros y conejos.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "12 a 24 horas"
  },
  informacion_cliente: [
    "Mantener en el refrigerador hasta su apertura; después puede estar a temperatura ambiente.",
    "La pupila de su mascota se volverá muy pequeña tras la aplicación; es un efecto esperado.",
    "Informe si nota que el ojo se vuelve muy rojo o si el animal parpadea en exceso.",
    "No usar si el ojo presenta una inflamación severa interna (uveítis)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Glaucoma primario / Emergencia",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 8 a 12 horas (o una vez por la noche)", intervalo_horas: 12 }
      }
    ],
    conejo: [
      {
        indicacion: "Glaucoma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "gota"
        },
        frecuencia: { texto_ui: "Cada 8 a 24 horas", intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Uveítis activa.",
      "Luxación anterior del cristalino.",
      "Animales gestantes (riesgo sistémico potencial)."
    ],
    efectos_adversos: [
      "Miosis intensa.",
      "Hiperemia conjuntival (enrojecimiento).",
      "Irritación local leve.",
      "Disrupción de la barrera hemato-acuosa."
    ],
    monitoreo_recomendado: [
      "Presión intraocular (PIO) regularmente",
      "Estado de la cámara anterior del ojo"
    ],
    instrucciones_manejo: "Proteger de la luz. Refrigere los envases sin abrir.",
    sobredosis: {
      signos: ["Miosis extrema", "Irritación ocular marcada"],
      tratamiento: "Lavar el ojo con abundante salino estéril."
    },
    interacciones_farmacologicas: [
      { farmaco: "Tiomersal (Conservante)", efecto: "Incompatibilidad química; no usar gotas que lo contengan.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo de la prostaglandina F2alfa que aumenta el flujo uveoescleral del humor acuoso.",
    farmacocinetica: "Absorción corneal rápida; hidrolizado a su forma activa (ácido de latanoprost)."
  },
  presentaciones_comerciales: [
    { tipo: "Gotas oftálmicas", concentracion_texto: "50 μg/ml (0.005%)", valor_concentracion: 0.05, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};
