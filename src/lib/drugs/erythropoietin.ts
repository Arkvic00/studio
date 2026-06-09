import type { Drug } from '@/lib/types';

export const erythropoietinDrug: Drug = {
  id: "erythropoietin",
  meta_data: {
    nombre_generico: "Eritropoyetina (Epoetina alfa/beta)",
    nombres_comerciales: ["Eprex", "Neorecormon"],
    grupo_farmacologico: "Agente estimulante de la eritropoyesis",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Eritropoyetina humana recombinante (r-HuEPO).",
      "Estimula la división y diferenciación de precursores de glóbulos rojos.",
      "Uso principal en anemias no regenerativas por fallo renal crónico o FeLV.",
      "Riesgo significativo de formación de anticuerpos que causan aplasia pura de glóbulos rojos (PRCA).",
      "Darbepoetina suele ser una opción preferible por menor riesgo inmunogénico."
    ],
    usos_principales: "Tratamiento de la anemia asociada a insuficiencia renal crónica y gatos con anemia asociada a FeLV.",
    inicio_accion: "Lento (aumento del PCV visible en semanas)",
    duracion_efecto: "Requiere esquemas de 3 veces por semana inicialmente"
  },
  informacion_cliente: [
    "Medicamento inyectable para tratar anemias graves de origen renal.",
    "Puede ser necesario administrar suplementos de hierro para asegurar la respuesta.",
    "Se requieren análisis de sangre semanales (PCV) para ajustar la dosis.",
    "Informe inmediatamente si nota hinchazón en la cara, fiebre o erupciones (alergia).",
    "Existe un riesgo de que el cuerpo del animal deje de producir glóbulos rojos por completo (aplasia)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Anemia por fallo renal (Fase de Inducción)",
        vias: ["SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "3 veces por semana hasta alcanzar el objetivo de PCV",
          intervalo_horas: 56
        },
        notas_tecnicas: "Ajustar dosis solo cada 3 semanas. Una vez alcanzado el objetivo, reducir a 50-100 IU/kg 1-2 veces por semana."
      }
    ],
    gato: [
      {
        indicacion: "Anemia por fallo renal / FeLV (Inducción)",
        vias: ["SC", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "IU/kg"
        },
        frecuencia: {
          texto_ui: "3 veces por semana",
          intervalo_horas: 56
        }
      }
    ],
    huron: [
      {
        indicacion: "Anemia",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 48 }
      }
    ],
    conejo: [
      {
        indicacion: "Anemia",
        vias: ["SC", "IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 48 a 72 horas", intervalo_horas: 48 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Anemias donde ya hay niveles altos de EPO (hemolítica, pérdida de sangre aguda).",
      "Anemia por deficiencia de hierro.",
      "Hipertensión sistémica no controlada."
    ],
    efectos_adversos: [
      "Aplasia pura de glóbulos rojos (PRCA) por anticuerpos (20-70% de casos tras 4 semanas).",
      "Reacciones alérgicas locales o sistémicas.",
      "Hipertensión arterial.",
      "Pirexia y dolores articulares.",
      "Úlceras mucocutáneas."
    ],
    monitoreo_recomendado: [
      "PCV / Hematocrito semanalmente",
      "Presión arterial regularmente",
      "Niveles de hierro sérico"
    ],
    instrucciones_manejo: "Mantener refrigerado. No agitar el vial. Si se sospecha PRCA (caída rápida del PCV), suspender inmediatamente.",
    sobredosis: {
      signos: ["Policitemia (exceso de glóbulos rojos)", "Hiperviscosidad sanguínea"],
      tratamiento: "Suspensión del fármaco y sangría (flebotomía) si es necesario."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une al receptor de eritropoyetina en las células progenitoras de la médula ósea, estimulando su proliferación y maduración.",
    farmacocinetica: "Eliminación lenta."
  },
  presentaciones_comerciales: [
    {
      tipo: "Inyectable",
      concentracion_texto: "2000 IU/ml a 40,000 IU/ml",
      valor_concentracion: 2000,
      unidad_concentracion: "IU/ml",
      es_divisible: false
    },
    {
      tipo: "Vial liofilizado",
      concentracion_texto: "1000 IU, 2000 IU, 5000 IU",
      valor_concentracion: 1000,
      unidad_concentracion: "IU",
      es_divisible: false
    }
  ]
};
