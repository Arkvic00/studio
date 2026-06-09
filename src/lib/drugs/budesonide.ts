import type { Drug } from '@/lib/types';

export const budesonideDrug: Drug = {
  id: "budesonide",
  meta_data: {
    nombre_generico: "Budesonida",
    nombres_comerciales: ["Benacort", "Budelin", "Budenofalk", "Cortiment", "Entocort", "Pulmicort", "Rhinocort"],
    grupo_farmacologico: "Glucocorticoide; Antiinflamatorio e inmunosupresor",
    status_regulatorio: "POM, P"
  },
  resumen_clinico: {
    puntos_clave: [
      "Potente corticosteroide con alto metabolismo de primer paso hepático.",
      "Teóricamente reduce los efectos secundarios sistémicos, aunque estos aún pueden ocurrir.",
      "Utilizado principalmente para enteropatías crónicas (IBD) y enfermedades bronquiales.",
      "La formulación inhalada para humanos no debe usarse vía oral (se hidroliza con el ácido gástrico).",
      "El recubrimiento entérico depende del pH: no administrar con antiácidos."
    ],
    usos_principales: "Tratamiento de la enfermedad inflamatoria intestinal (IBD) en perros, gatos y hurones. Manejo de enfermedades bronquiales (asma felina) vía inhalada.",
    inicio_accion: "Variable",
    duracion_efecto: "Dependiente de la formulación (liberación sostenida)"
  },
  informacion_cliente: [
    "No administrar junto con antiácidos, ya que impiden que el medicamento funcione correctamente.",
    "En gatos con problemas respiratorios, la inhalación puede mejorar significativamente los síntomas.",
    "Informe si nota pérdida de pelo, aumento excesivo de sed/apetito o debilidad.",
    "No suspenda el tratamiento de forma brusca tras un uso prolongado."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Enteropatía crónica (IBD)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          dosis_min: 1,
          dosis_max: 3,
          unidad_calculo: "mg/perro"
        },
        frecuencia: {
          texto_ui: "Cada 12 a 24 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Dosis según tamaño: 1 mg/día en perros pequeños; hasta 3 mg/día en perros grandes/gigantes. No exceder 3 mg c/12h."
      }
    ],
    gato: [
      {
        indicacion: "Enfermedad intestinal (IBD)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 a 24 horas",
          intervalo_horas: 8
        },
        notas_tecnicas: "La dosis oral total no debe exceder generalmente 1 mg cada 8 horas."
      },
      {
        indicacion: "Enfermedad bronquial (Inhalada)",
        vias: ["Inhalada"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 400,
          unidad_calculo: "μg (microgramos)"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ],
    huron: [
      {
        indicacion: "Enfermedad inflamatoria intestinal (IBD)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "mg/hurón"
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
      "Perforación intestinal.",
      "Insuficiencia hepática severa."
    ],
    contraindicaciones_especie: {
        "Conejo": "ALERTA: Los corticosteroides pueden causar inmunosupresión severa en esta especie. Usar con extrema precaución."
    },
    efectos_adversos: [
      "Hiperadrenocorticismo iatrogénico (pérdida de pelo, atrofia muscular).",
      "Elevación de enzimas hepáticas.",
      "Poliuria y polidipsia (aumento de sed y orina).",
      "Supresión adrenal.",
      "Hipocortisolismo si se retira bruscamente."
    ],
    monitoreo_recomendado: [
      "Enzimas hepáticas",
      "Función adrenal en uso crónico",
      "Signos de Cushing iatrogénico"
    ],
    instrucciones_manejo: "Las cápsulas de 3 mg pueden requerir formulación magistral (compounding) para animales pequeños.",
    sobredosis: {
      signos: ["Signos de exceso de glucocorticoides"],
      tratamiento: "Retiro gradual y soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antiácidos", efecto: "Interfieren con la disolución del recubrimiento entérico.", severidad: "Importante" },
      { farmaco: "Eritromicina / Itraconazol / Cimetidina", efecto: "Inhiben enzimas hepáticas, aumentando los niveles de budesonida.", severidad: "Importante" },
      { farmaco: "Otros Corticosteroides", efecto: "Efecto aditivo.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Esteroide antiinflamatorio e inmunosupresor potente.",
    farmacocinetica: "Alto metabolismo de primer paso hepático en humanos."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula gastrorresistente", concentracion_texto: "3 mg", valor_concentracion: 3, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Tableta de liberación sostenida", concentracion_texto: "9 mg", valor_concentracion: 9, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Polvo inhalado", concentracion_texto: "100-400 μg/dosis", valor_concentracion: 100, unidad_concentracion: "μg", es_divisible: false },
    { tipo: "Espuma rectal", concentracion_texto: "2 mg/dosis", valor_concentracion: 2, unidad_concentracion: "mg", es_divisible: false }
  ]
};