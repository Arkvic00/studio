import type { Drug } from '@/lib/types';

export const methionineDrug: Drug = {
  id: "methionine",
  meta_data: {
    nombre_generico: "Metionina",
    nombres_comerciales: ["Methionine"],
    grupo_farmacologico: "Acidificante urinario; Aminoácido",
    status_regulatorio: "GSL (Venta libre)"
  },
  resumen_clinico: {
    puntos_clave: [
      "Aminoácido esencial que reduce el pH urinario.",
      "Utilizado para prevenir la formación de cálculos de estruvita.",
      "Riesgo de inducir acidosis metabólica sistémica.",
      "El objetivo es mantener un pH urinario de 6.5 o inferior.",
      "Antiguamente usado para intoxicación por paracetamol, pero ya no es la primera opción."
    ],
    usos_principales: "Tratamiento y prevención de la urolitiasis por estruvita.",
    inicio_accion: "Rápido",
    duracion_efecto: "Requiere administración diaria frecuente"
  },
  informacion_cliente: [
    "Suplemento para ayudar a evitar piedras en la vejiga.",
    "El veterinario le pedirá controlar el pH de la orina de su mascota regularmente.",
    "No usar en animales muy jóvenes o con enfermedades graves de riñón o hígado.",
    "Si nota que su mascota respira muy rápido o está decaída, informe al veterinario."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Acidificación urinaria / Estruvita",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Ajustar dosis según el pH urinario obtenido (objetivo <= 6.5)."
      }
    ],
    gato: [
      {
        indicacion: "Acidificación urinaria / Estruvita",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 200,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 8 horas",
          intervalo_horas: 8
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Insuficiencia renal.",
      "Enfermedad hepática severa.",
      "Animales muy jóvenes.",
      "Cualquier estado de acidosis preexistente."
    ],
    efectos_adversos: [
      "Acidosis metabólica (en sobredosis).",
      "Trastornos digestivos leves.",
      "Anorexia."
    ],
    monitoreo_recomendado: [
      "pH urinario regularmente",
      "Estado ácido-base sanguíneo en tratamientos prolongados",
      "Función renal y hepática"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Acidosis severa", "Depresión del SNC", "Vómitos"],
      tratamiento: "Soporte sintomático y corrección de la acidosis si es necesario."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros acidificantes urinarios", efecto: "Aumento drástico del riesgo de acidosis metabólica.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Metabolismo de la metionina produce sulfatos y otros metabolitos que se eliminan por orina, bajando su pH.",
    farmacocinetica: "Absorción oral rápida."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "500 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
