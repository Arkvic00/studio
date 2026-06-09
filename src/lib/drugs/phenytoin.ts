import type { Drug } from '@/lib/types';

export const phenytoinDrug: Drug = {
  id: "phenytoin",
  meta_data: {
    nombre_generico: "Fenitoína (Difenilhidantoína)",
    nombres_comerciales: ["Epanutin", "Fosphenytoin"],
    grupo_farmacologico: "Antiepiléptico; Antiarrítmico Clase 1b",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Estabiliza las membranas neuronales contra la hiperexcitabilidad.",
      "En perros se metaboliza muy rápido (requiere dosis altas frecuentes).",
      "En gatos se metaboliza muy lento (riesgo extremo de toxicidad).",
      "No se recomienda para el manejo crónico de la epilepsia en perros/gatos.",
      "La fosfenitoína es una pro-droga inyectable más segura."
    ],
    usos_principales: "Tratamiento de arritmias ventriculares y manejo de emergencia del estatus epiléptico (especialmente fosfenitoína).",
    inicio_accion: "Rápido (IV); Horas (PO)",
    duracion_efecto: "Corta en perros; muy larga en gatos"
  },
  informacion_cliente: [
    "¡PELIGRO!: No utilizar en gatos para el control de convulsiones.",
    "Ya no se usa como tratamiento a largo plazo en perros por sus efectos en el hígado.",
    "Informe inmediatamente si nota vómitos, fiebre o llagas en la piel.",
    "Puede causar que el animal parezca borracho (ataxia)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias Ventriculares",
        vias: ["IV lenta", "PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "IV lenta única; PO cada 8 horas (30-50 mg/kg)", intervalo_horas: 8 }
      },
      {
        indicacion: "Estatus Epiléptico (Fosfenitoína)",
        vias: ["IV lenta"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          unidad_calculo: "mg/kg de equiv. fenitoína"
        },
        notas_tecnicas: "Administrar a 1 ml/min. Menor riesgo de flebitis que la fenitoína pura."
      }
    ],
    gato: [
      {
        indicacion: "¡CONTRAINDICADO!",
        vias: ["N/A"],
        math: { tipo_calculo: "fija", dosis_recomendada: 0, unidad_calculo: "N/A" },
        notas_tecnicas: "Gatos desarrollan toxicidad severa rápidamente debido a un metabolismo muy lento."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Gatos (Anticonvulsivo).",
      "Insuficiencia hepática severa.",
      "Bloqueos cardíacos de alto grado."
    ],
    efectos_adversos: [
      "Ataxia y sedación.",
      "Vómitos.",
      "Hepatotoxicidad.",
      "Hiperplasia gingival (uso crónico).",
      "Necrólisis epidérmica tóxica (raro).",
      "Polineuropatía periférica."
    ],
    monitoreo_recomendado: [
      "Función hepática (ALT/ALP)",
      "Niveles séricos de fenitoína",
      "ECG continuo en uso IV"
    ],
    instrucciones_manejo: "La fenitoína IV es muy irritante; evitar extravasación.",
    sobredosis: {
      signos: ["Sedación profunda", "Vómitos incoercibles", "Signos cerebelosos"],
      tratamiento: "Soporte sintomático; no existe antídoto."
    },
    interacciones_farmacologicas: [
      { farmaco: "Cimetidina / Diazepam / Metronidazol", efecto: "Aumentan los niveles de fenitoína.", severidad: "Importante" },
      { farmaco: "Fenobarbital", efecto: "Acelera el metabolismo de la fenitoína.", severidad: "Moderada" },
      { farmaco: "Doxiciclina / Teofilina", efecto: "La fenitoína reduce sus niveles plasmáticos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de sodio dependientes de voltaje en estado inactivo, previniendo la descarga neuronal repetitiva.",
    farmacocinetica: "Cinética de saturación en algunos individuos. Metabolismo hepático."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "100 mg", valor_concentracion: 100, unidad_concentracion: "mg", es_divisible: false },
    { tipo: "Inyectable", concentracion_texto: "50 mg/ml", valor_concentracion: 50, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};