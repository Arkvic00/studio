import type { Drug } from '@/lib/types';

export const silybinDrug: Drug = {
  id: "silybin",
  meta_data: {
    nombre_generico: "Silibina (Silibinina, Silimarina, Cardo Mariano)",
    nombres_comerciales: ["Denamarin", "Doxion", "Hepaticare", "Samylin", "Zentonil"],
    grupo_farmacologico: "Antioxidante hepatoprotector; Flavonolignano",
    status_regulatorio: "Venta libre (Nutracéutico)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Componente activo principal de la silimarina (cardo mariano).",
      "Actúa como barredor de radicales libres y aumenta los niveles de glutatión.",
      "Promueve la regeneración hepatocelular mediante la síntesis de proteínas.",
      "Inhibe la producción de leucotrienos, reduciendo la respuesta inflamatoria hepática.",
      "Mejora el flujo biliar.",
      "Debe administrarse con el estómago vacío (1h antes de comer)."
    ],
    usos_principales: "Tratamiento adyuvante de hepatopatías agudas y crónicas, e intoxicación por hepatotoxinas (ej. setas Amanita, fármacos).",
    inicio_accion: "Lento (efecto acumulativo)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Administrar el medicamento al menos 1 hora antes de la comida principal.",
    "Las tabletas deben tragarse enteras para asegurar su efectividad.",
    "Es un suplemento muy seguro con casi nulos efectos secundarios.",
    "Se suele utilizar en combinación con SAMe para potenciar el efecto protector del hígado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Soporte Hepático / Intoxicación",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          dosis_min: 50,
          dosis_max: 250,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (referirse a producto específico)",
          intervalo_horas: 24
        },
        notas_tecnicas: "La dosis terapéutica exacta es desconocida; seguir las guías de cada fabricante para formas fitosomadas (de alta absorción)."
      }
    ],
    gato: [
      {
        indicacion: "Soporte Hepático",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 150,
          dosis_min: 50,
          dosis_max: 250,
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
      "No se han reportado contraindicaciones absolutas."
    ],
    efectos_adversos: [
      "Generalmente nulos.",
      "Trastornos GI leves ocasionales.",
      "Prurito (raro)."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas (ALT, ALP, GGT)",
      "Niveles de bilirrubina",
      "Estado clínico general"
    ],
    instrucciones_manejo: "Administrar en ayunas para máxima biodisponibilidad.",
    sobredosis: {
      signos: ["Trastornos GI leves"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Fármacos metabolizados por CYP2C9", efecto: "Silibina puede inhibir esta enzima, aumentando niveles de otros fármacos.", severidad: "Leve" },
      { farmaco: "Paracetamol", efecto: "Potencial efecto protector contra la toxicidad (clínicamente no definido).", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Estabilizador de membrana y antioxidante potente que previene la peroxidación lipídica de los hepatocitos.",
    farmacocinetica: "Baja biodisponibilidad oral a menos que se use en formas complejadas (fitosomas)."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta oral", concentracion_texto: "Variable (9 mg a 100 mg)", valor_concentracion: 24, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Polvo oral", concentracion_texto: "Variable", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: false }
  ]
};