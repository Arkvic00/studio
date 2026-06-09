import type { Drug } from '@/lib/types';

export const ronidazoleDrug: Drug = {
  id: "ronidazole",
  meta_data: {
    nombre_generico: "Ronidazol",
    nombres_comerciales: ["Ronidazole (VSP)"],
    grupo_farmacologico: "Nitroimidazol; Antiprotozoario",
    status_regulatorio: "Especial (Uso bajo cascada)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Tratamiento de elección para Tritrichomonas foetus en gatos.",
      "Potencial neurotóxico marcado en gatos.",
      "Embriotóxico y potencialmente carcinogénico (manejar con guantes).",
      "Requiere formulación magistral precisa para cada paciente."
    ],
    usos_principales: "Tratamiento de la infección por Tritrichomonas foetus en gatos.",
    inicio_accion: "Rápido",
    duracion_efecto: "Ciclo de 14 días"
  },
  informacion_cliente: [
    "¡PELIGRO!: Las mujeres embarazadas NO deben manipular este medicamento.",
    "Usar guantes para administrar las cápsulas.",
    "Informe inmediatamente si nota que su gato camina raro, tiembla o está muy decaído.",
    "Es vital completar los 14 días de tratamiento exactos."
  ],
  parametros_dosificacion: {
    gato: [
      {
        indicacion: "Tritrichomonas foetus",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 25,
          dosis_min: 20,
          dosis_max: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 14 días", intervalo_horas: 24 },
        notas_tecnicas: "Reducir a 10 mg/kg en gatitos o animales con enfermedad hepática."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a nitroimidazoles.",
      "Gestación.",
      "Lactancia (usar sustituto de leche si es vital)."
    ],
    efectos_adversos: [
      "Neurotoxicidad (ataxia, nystagmus, convulsiones).",
      "Anorexia y vómitos.",
      "Agitación y temblores."
    ],
    monitoreo_recomendado: [
      "Estado neurológico diario",
      "Función hepática"
    ],
    instrucciones_manejo: "EXTREMA PRECAUCIÓN. Usar guantes impermeables. No triturar cápsulas.",
    sobredosis: {
      signos: ["Convulsiones", "Ataxia severa"],
      tratamiento: "Cese inmediato y soporte neurológico."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Ketoconazol", efecto: "Aumentan la toxicidad del ronidazol.", severidad: "Importante" },
      { farmaco: "Fenobarbital / Rifampicina", efecto: "Reducen la eficacia del ronidazol.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se reduce a radicales libres tóxicos dentro del protozoo que dañan su ADN.",
    farmacocinetica: "Metabolismo hepático similar al metronidazol."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula magistral", concentracion_texto: "Variable según peso", valor_concentracion: 1, unidad_concentracion: "mg", es_divisible: false }
  ]
};
