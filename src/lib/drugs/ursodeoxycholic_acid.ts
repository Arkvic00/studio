import type { Drug } from '@/lib/types';

export const ursodeoxycholicAcidDrug: Drug = {
  id: "ursodeoxycholic_acid",
  meta_data: {
    nombre_generico: "Ácido Ursodeoxicólico (UDCA)",
    nombres_comerciales: ["Cholurso", "Destolit", "Ursofalk"],
    grupo_farmacologico: "Ácido biliar hidrofílico; Citoprotector hepático",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Ácido biliar que desplaza a los ácidos biliares hidrofóbicos tóxicos.",
      "Proporciona efectos citoprotectores en el sistema biliar.",
      "Posee actividad inmunomoduladora y reduce la apoptosis de hepatocitos.",
      "La presentación en suspensión (Ursofalk) contiene Xilitol; usar con precaución extrema en perros.",
      "No altera el test de estimulación de ácidos biliares en perros sanos."
    ],
    usos_principales: "Tratamiento adyuvante de hepatopatías colestásicas, hepatitis crónica y estasis biliar.",
    inicio_accion: "Lento (efecto progresivo)",
    duracion_efecto: "24 horas"
  },
  informacion_cliente: [
    "Informe si nota diarrea líquida o falta de apetito.",
    "El tratamiento suele ser de larga duración.",
    "Asegúrese de que el veterinario conozca todos los otros medicamentos que toma su mascota.",
    "¡ALERTA!: La versión líquida humana puede ser peligrosa para perros por su contenido en Xilitol."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enfermedad hepatobiliar colestásica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 12.5,
          dosis_min: 10,
          dosis_max: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 24 horas (o dividido en dos tomas)",
          intervalo_horas: 24
        }
      }
    ],
    gato: [
      {
        indicacion: "Colangitis / Colestasis",
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
    huron: [
      {
        indicacion: "Hepatopatías colestásicas",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    reptil: [
      {
        indicacion: "Hepatopatías / Estasis biliar",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Obstrucción biliar completa.",
      "Peritonitis biliar.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Diarrea (común).",
      "Vómitos ocasionales.",
      "Hepatotoxicidad por metabolitos (litocolato) - raro en animales."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas (ALT, ALP, GGT)",
      "Niveles de bilirrubina",
      "Estado clínico general"
    ],
    instrucciones_manejo: "Observar precauciones normales. Verificar contenido de xilitol en jarabes.",
    sobredosis: {
      signos: ["Diarrea profusa", "Vómitos"],
      tratamiento: "Soporte sintomático; el xilitol en perros requiere manejo de urgencia (glucosa/hígado)."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiácidos con Aluminio", efecto: "Se unen al UDCA reduciendo su eficacia. Espaciar 2 horas.", severidad: "Moderada" },
      { farmaco: "Ciclosporina", efecto: "UDCA puede aumentar la absorción y niveles de ciclosporina.", severidad: "Leve" },
      { farmaco: "Colestiramina", efecto: "Reduce la eficacia del UDCA.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Modifica la composición del pool de ácidos biliares, protege las membranas de los hepatocitos del daño por sales biliares hidrofóbicas y modula la respuesta inmune.",
    farmacocinetica: "Absorción ileal parcial. Circulación enterohepática extensa."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula / Tableta oral",
      concentracion_texto: "150 mg a 500 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: true
    },
    {
      tipo: "Suspensión oral",
      concentracion_texto: "50 mg/ml",
      valor_concentracion: 50,
      unidad_concentracion: "mg/ml",
      es_divisible: false
    }
  ]
};
