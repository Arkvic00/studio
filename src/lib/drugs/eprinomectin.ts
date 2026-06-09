import type { Drug } from '@/lib/types';

export const eprinomectinDrug: Drug = {
  id: "eprinomectin",
  meta_data: {
    nombre_generico: "Eprinomectina (en combinación)",
    nombres_comerciales: ["Broadline"],
    grupo_farmacologico: "Lactona macrocíclica; Antiparasitario",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Interacciona con los canales de cloruro mediados por glutamato y GABA.",
      "Provoca parálisis flácida y muerte de los parásitos.",
      "Formulación tópica específica para gatos que incluye fipronil, S-metopreno y praziquantel.",
      "Tratamiento integral: pulgas, garrapatas, nematodos y cestodos.",
      "Sustrato de la P-glicoproteína (MDR-1)."
    ],
    usos_principales: "Tratamiento y prevención de infestaciones por pulgas, garrapatas y nematodos (incluyendo gusano pulmonar felino y Capillaria plica). Prevención mensual de Dirofilaria immitis.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "30 días (Mensual)"
  },
  informacion_cliente: [
    "Aplicar directamente sobre la piel de la nuca, apartando el pelo.",
    "No usar en gatos menores de 7 semanas o que pesen menos de 0.6 kg.",
    "Evitar que el animal lama el producto mientras esté húmedo (puede causar babeo).",
    "Puede observarse un apelmazamiento leve del pelo en el sitio de aplicación.",
    "Producto tóxico para organismos acuáticos."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Control integral de parásitos",
        vias: ["Tópica (Spot-on)"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "pipeta según peso (0.3 ml o 0.9 ml)"
        },
        frecuencia: {
          texto_ui: "Administrar mensualmente",
          intervalo_horas: 720
        },
        notas_tecnicas: "Aporta 4 mg/ml de eprinomectina. Eficaz contra L3 y L4 de Dirofilaria immitis."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatitos menores de 7 semanas.",
      "Gatos de menos de 0.6 kg de peso.",
      "Hipersensibilidad conocida a lactonas macrocíclicas.",
      "No usar en perros."
    ],
    efectos_adversos: [
      "Apelmazamiento transitorio del pelo.",
      "Salivación profusa tras ingestión accidental (lamido).",
      "Reacción local leve (prurito, eritema) en el sitio de aplicación."
    ],
    monitoreo_recomendado: [
      "Integridad de la piel en el sitio de aplicación",
      "Estado clínico general"
    ],
    instrucciones_manejo: "Lavarse las manos tras su uso. Evitar contacto con ojos del animal.",
    sobredosis: {
      signos: ["Salivación", "Letargo", "Ataxia (si hay absorción masiva)"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Inhibidores de P-gp (Ciclosporina, Itraconazol)", efecto: "Potencial aumento de la toxicidad por competencia de transporte.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Potencia la apertura de los canales de cloruro en las células nerviosas y musculares del invertebrado, bloqueando la transmisión nerviosa.",
    farmacocinetica: "Absorción percutánea efectiva en gatos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Pipeta Spot-on (Broadline)",
      concentracion_texto: "4 mg/ml Eprin. (+ Fipronil/Methop./Praz.)",
      valor_concentracion: 4,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
