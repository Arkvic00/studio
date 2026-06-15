import type { Drug } from '@/lib/types';

export const pyrimethamineDrug: Drug = {
  id: "pyrimethamine",
  meta_data: {
    nombre_generico: "Pirimetamina",
    nombres_comerciales: ["Daraprim"],
    grupo_farmacologico: "Antiprotozoario",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibidor de la dihidrofolato reductasa.",
      "Se utiliza para el tratamiento de la toxoplasmosis y la neosporosis.",
      "A menudo se utiliza en combinación con sulfonamidas para un efecto sinérgico.",
      "Puede causar supresión de la médula ósea reversible con ácido folínico."
    ],
    usos_principales: "Tratamiento de protozoos como Toxoplasma gondii y Neospora caninum.",
    inicio_accion: "Desconocido",
    duracion_efecto: "Desconocido"
  },
  informacion_cliente: [
    "Monitorear al animal para detectar signos de letargo o sangrado inusual.",
    "Se puede administrar con alimentos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Toxoplasmosis / Neosporosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.25,
          dosis_min: 0.25,
          dosis_max: 0.5,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 12 a 24 horas" }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ["Insuficiencia hepática o renal grave."],
    efectos_adversos: ["Anorexia", "Vómitos", "Anemia", "Leucopenia"],
    monitoreo_recomendado: ["Hemograma completo (CBC) en tratamientos largos"],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Depresión de la médula ósea"],
      tratamiento: "Administrar ácido folínico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Sulfonamidas", efecto: "Sinergia potente.", severidad: "Leve" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con la síntesis de ácidos nucleicos en el parásito.",
    farmacocinetica: "Bien absorbido oralmente."
  },
  presentaciones_comerciales: [
    { tipo: "Oral", concentracion_texto: "25 mg tabletas", valor_concentracion: 25, unidad_concentracion: "mg" }
  ]
};