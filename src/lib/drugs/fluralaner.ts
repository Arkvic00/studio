import type { Drug } from '@/lib/types';

export const fluralanerDrug: Drug = {
  id: "fluralaner",
  meta_data: {
    nombre_generico: "Fluralaner",
    nombres_comerciales: ["Bravecto", "Exzolt"],
    grupo_farmacologico: "Isoxazolina; Insecticida y acaricida",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa sobre los canales de cloruro regulados por ligando (GABA).",
      "Eficacia inmediata y persistente contra pulgas y garrapatas por 12 semanas.",
      "Tratamiento de elección para ácaros del oído (Otodectes) y sarna (Demodex/Sarcoptes).",
      "Seguro en animales de cría, gestantes y lactantes.",
      "En aves de corral (Exzolt), se usa para el tratamiento de ácaro rojo en el agua de bebida."
    ],
    usos_principales: "Tratamiento de infestaciones por pulgas, garrapatas y ácaros en perros y gatos. Control de ácaro rojo en aves.",
    inicio_accion: "8h (pulgas), 12h (garrapatas)",
    duracion_efecto: "12 semanas (Trimestral)"
  },
  informacion_cliente: [
    "Administrar la tableta masticable con la comida principal o poco después.",
    "Una sola dosis protege a su mascota durante 3 meses completos.",
    "Para que el medicamento funcione, la pulga o garrapata debe picar al animal.",
    "Informe si nota temblores o convulsiones, especialmente si su perro ya es epiléptico.",
    "En gatos, el producto se aplica en la nuca y dura igualmente 3 meses."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Pulgas / Garrapatas / Sarnas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40.5,
          dosis_min: 25,
          dosis_max: 56,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 semanas (q3m)", intervalo_horas: 2016 },
        notas_tecnicas: "La dosis contra Rhipicephalus sanguineus es de 8 semanas. No administrar en intervalos menores a 8 semanas."
      }
    ],
    gato: [
      {
        indicacion: "Pulgas / Garrapatas / Ácaros",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso"
        },
        frecuencia: { texto_ui: "Cada 12 semanas", intervalo_horas: 2016 }
      }
    ],
    conejo: [
      {
        indicacion: "Ectoparásitos (Uso extra-label)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres: Ácaros",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    erizo: [
      {
        indicacion: "Caparinia tripilis (Ácaros)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    primates: [
      {
        indicacion: "Ectoparásitos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 32.5,
          dosis_min: 30,
          dosis_max: 35,
          unidad_calculo: "mg/kg"
        }
      }
    ],
    reptil: [
      {
        indicacion: "Pitones bola: Ácaros",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Dosis única", intervalo_horas: 0 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Animales menores de 8 semanas (perros) o 11 semanas (gatos).",
      "Perros < 2kg o gatos < 1.2 kg.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Signos gastrointestinales leves (vómitos, diarrea).",
      "Letargo y convulsiones (muy raro).",
      "Eritema o alopecia local (Spot-on).",
      "Gatos: Salivación excesiva si se ingiere tras aplicación."
    ],
    monitoreo_recomendado: [
      "Frecuencia de convulsiones en epilépticos",
      "Integridad de la piel en el sitio de aplicación"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene. No dividir tabletas.",
    sobredosis: {
      signos: ["Vómitos", "Temblores", "Ataxia"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "AINEs / Warfarina", efecto: "Competencia por la unión a proteínas plasmáticas.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloqueador potente de los canales de cloruro mediados por GABA y glutamato en el sistema nervioso de los artrópodos.",
    farmacocinetica: "Absorción sistémica rápida y persistencia tisular prolongada (especialmente en grasa)."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta masticable",
      concentracion_texto: "112.5 mg a 1400 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Pipeta Spot-on",
      concentracion_texto: "280 mg/ml",
      valor_concentracion: 280,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
