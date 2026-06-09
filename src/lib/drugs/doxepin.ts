import type { Drug } from '@/lib/types';

export const doxepinDrug: Drug = {
  id: "doxepin",
  meta_data: {
    nombre_generico: "Doxepina",
    nombres_comerciales: ["Sinepin", "Sinequan", "Zonalon"],
    grupo_farmacologico: "Antidepresivo tricíclico; Antipruriginoso",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Bloquea la recaptación de noradrenalina y serotonina.",
      "Posee una potente actividad antihistamínica (H1 y H2), lo que le otorga efectos antipruriginosos.",
      "Útil en dermatosis psicógenas con componente de ansiedad.",
      "Evidencia limitada en perros/gatos comparado con clomipramina o amitriptilina.",
      "En aves, se utiliza para el picaje de plumas y la toxicidad por organofosforados."
    ],
    usos_principales: "Manejo del prurito, dermatitis por acicalamiento excesivo (lamido acral), trastornos compulsivos y toxicidad por organofosforados en aves.",
    inicio_accion: "Variable (efectos conductuales pueden tardar semanas)",
    duracion_efecto: "8 a 12 horas"
  },
  informacion_cliente: [
    "Informe si nota que su mascota parece muy sedada o tiene la boca seca.",
    "El medicamento se administra generalmente dos veces al día.",
    "En aves, es vital monitorear el ritmo cardíaco durante el tratamiento.",
    "No suspenda el tratamiento de forma repentina tras un uso prolongado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Prurito / Dermatosis psicógena / Trastornos compulsivos",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 4,
          dosis_min: 3,
          dosis_max: 5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis máxima absoluta de 150 mg cada 12 horas."
      }
    ],
    gato: [
      {
        indicacion: "Prurito / Ansiedad",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.75,
          dosis_min: 0.5,
          dosis_max: 1.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 24
        }
      }
    ],
    ave: [
      {
        indicacion: "Picaje de plumas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.5,
          dosis_min: 1,
          dosis_max: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Es crucial monitorear la aparición de arritmias cardíacas."
      },
      {
        indicacion: "Toxicidad por Organofosforados",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 4 horas",
          intervalo_horas: 4
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los antidepresivos tricíclicos.",
      "Glaucoma.",
      "Historial de convulsiones.",
      "Retención urinaria.",
      "Enfermedad hepática severa."
    ],
    efectos_adversos: [
      "Sedación profunda.",
      "Boca seca (xerostomía).",
      "Vómitos y diarrea.",
      "Arritmias cardíacas (especialmente en aves).",
      "Hipotensión y síncope.",
      "Aumento de peso."
    ],
    monitoreo_recomendado: [
      "Ritmo cardíaco (ECG) especialmente en aves",
      "Estado de alerta",
      "Función hepática en tratamientos prolongados"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Convulsiones", "Arritmias cardíacas graves", "Sedación profunda"],
      tratamiento: "Soporte sintomático intensivo; carbón activado si la ingestión es reciente."
    },
    interacciones_farmacologicas: [
      { farmaco: "IMAOs", efecto: "Riesgo de síndrome de serotonina fatal. No combinar.", severidad: "Grave" },
      { farmaco: "Cimetidina / Clorfenamina", efecto: "Inhiben el metabolismo de la doxepina, aumentando su toxicidad.", severidad: "Importante" },
      { farmaco: "Otros agentes serotoninérgicos", efecto: "Riesgo de síndrome de serotonina.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la recaptación de noradrenalina y serotonina. Presenta un fuerte bloqueo de receptores histaminérgicos H1 y H2.",
    farmacocinetica: "Su metabolito, la desmetildoxepina, también es psicoactivo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "25 mg, 50 mg",
      valor_concentracion: 25,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
