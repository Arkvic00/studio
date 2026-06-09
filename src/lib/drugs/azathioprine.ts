import type { Drug } from '@/lib/types';

export const azathioprineDrug: Drug = {
  id: "azathioprine",
  meta_data: {
    nombre_generico: "Azatioprina",
    nombres_comerciales: ["Imuran", "Azathioprine*"],
    grupo_farmacologico: "Inmunosupresor; Inhibidor de la síntesis de purinas",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de purinas, necesaria para la proliferación de leucocitos y linfocitos.",
      "Inmunosupresor de acción lenta; la respuesta clínica puede tardar hasta 6 semanas.",
      "A menudo se usa en combinación con corticosteroides para reducir la dosis de estos últimos.",
      "¡EXTREMADAMENTE TÓXICO PARA GATOS! Causa supresión medular fatal.",
      "Requiere monitoreo hematológico (plaquetas y glóbulos blancos) frecuente."
    ],
    usos_principales: "Manejo de enfermedades inmunomediadas como anemia hemolítica inmunomediada (IMHA), poliartritis inmunomediada, lupus eritematoso sistémico y enfermedad inflamatoria intestinal (IBD) severa.",
    inicio_accion: "Lento (2 a 6 semanas para efecto máximo)",
    duracion_efecto: "Prolongada"
  },
  informacion_cliente: [
    "No dividir ni triturar las tabletas; deben tragarse enteras.",
    "Utilizar guantes para manipular el medicamento si es posible.",
    "Se requieren análisis de sangre frecuentes para vigilar la médula ósea y el hígado.",
    "Informe inmediatamente si nota fiebre, moretones inusuales, vómitos o color amarillento en los ojos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Inmunosupresión (Fase de Inducción)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas por un máximo de 2-3 semanas",
          intervalo_horas: 24
        },
        notas_tecnicas: "Monitorear hematología cada 1-2 semanas al inicio."
      },
      {
        indicacion: "Inmunosupresión (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas",
          intervalo_horas: 48
        },
        notas_tecnicas: "Ajustar dosis según respuesta clínica y ausencia de toxicidad medular."
      }
    ],
    huron: [
      {
        indicacion: "Gastroenteritis eosinofílica (Evidencia limitada)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 2.75,
          dosis_min: 0.5,
          dosis_max: 5.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 48 horas",
          intervalo_horas: 24
        }
      },
      {
        indicacion: "Enfermedad Inflamatoria Intestinal (IBD)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.9,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 a 72 horas",
          intervalo_horas: 48
        },
        notas_tecnicas: "Usar en combinación con prednisolona y manejo dietético."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Absoluta).",
      "Supresión de médula ósea preexistente.",
      "Alto riesgo de infección activa.",
      "Enfermedad hepática severa."
    ],
    contraindicaciones_especie: {
      "Gato": "¡PROHIBIDO!: Los gatos desarrollan leucopenia y trombocitopenia severa, no responsiva y fatal. No usar bajo ninguna circunstancia.",
      "Perro": "Usar con precaución en pacientes con historial de enfermedad pancreática."
    },
    efectos_adversos: [
      "Supresión de médula ósea (leucopenia, trombocitopenia).",
      "Hepatotoxicidad (generalmente en las primeras 4 semanas).",
      "Pancreatitis aguda (especialmente en perros).",
      "Malestar gastrointestinal (anorexia, vómitos).",
      "Pobre crecimiento del pelaje."
    ],
    monitoreo_recomendado: [
      "Hemograma completo (incluyendo plaquetas) cada 1-2 semanas al inicio, luego cada 1-2 meses",
      "Perfil bioquímico hepático",
      "Signos clínicos de infección o sangrado"
    ],
    instrucciones_manejo: "FÁRMACO CITOTÓXICO. No dividir tabletas. Almacenar a temperatura ambiente protegido de la luz. Evitar retirada rápida para prevenir rebote hiperinmune.",
    sobredosis: {
      signos: ["Vómitos severos", "Fallo hepático agudo", "Aplasia medular"],
      tratamiento: "Soporte sintomático intensivo y manejo de complicaciones hematológicas."
    },
    interacciones_farmacologicas: [
      { farmaco: "Alopurinol", efecto: "Aumenta drásticamente los niveles y la toxicidad de la azatioprina.", severidad: "Grave" },
      { farmaco: "IECAs (Enalapril/Benazepril)", efecto: "Riesgo aumentado de anemia y leucopenia severa.", severidad: "Importante" },
      { farmaco: "Aminosalicilatos (Sulfasalazina)", efecto: "Aumentan el riesgo de toxicidad medular.", severidad: "Importante" },
      { farmaco: "Corticosteroides", efecto: "Uso sinérgico común, pero aumenta el riesgo de infecciones secundarias.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Análogo de las purinas que inhibe la síntesis de ADN y ARN, afectando principalmente a las células de división rápida como los linfocitos estimulados.",
    farmacocinetica: "Se metaboliza a 6-mercaptopurina. La actividad de la enzima tiopurina metiltransferasa (TPMT) varía genéticamente, influyendo en la toxicidad."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "25 mg, 50 mg",
      valor_concentracion: 50,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};