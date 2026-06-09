import type { Drug } from '@/lib/types';

export const darbepoetinDrug: Drug = {
  id: "darbepoetin",
  meta_data: {
    nombre_generico: "Darbepoetina alfa",
    nombres_comerciales: ["Aranesp"],
    grupo_farmacologico: "Agente estimulante de la eritropoyesis",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Derivado de la eritropoyetina humana con vida media prolongada.",
      "Estimula la división y diferenciación de los precursores de glóbulos rojos en la médula ósea.",
      "Menos probable que induzca la formación de anticuerpos anti-EPO que la eritropoyetina clásica (rhEPO).",
      "Utilizado para anemias por fallo renal crónico o FeLV."
    ],
    usos_principales: "Tratamiento de la anemia asociada a insuficiencia renal crónica en perros y gatos, y anemia por FeLV en gatos.",
    inicio_accion: "Lento (el aumento del PCV tarda semanas)",
    duracion_efecto: "Larga (permite dosis semanales)"
  },
  informacion_cliente: [
    "Medicamento inyectable para tratar la anemia grave.",
    "Se requieren análisis de sangre semanales (Hematocrito/PCV) para ajustar la dosis.",
    "Puede ser necesario dar suplementos de hierro para que el medicamento funcione bien.",
    "Informe inmediatamente si su mascota presenta convulsiones o erupciones cutáneas."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Estimulación de eritropoyesis (Fase de Inducción)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.625,
          dosis_min: 0.25,
          dosis_max: 1.0,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Semanalmente hasta normalizar el PCV",
          intervalo_horas: 168
        },
        notas_tecnicas: "Algunos autores recomiendan iniciar con 1 μg/kg para mayor eficacia."
      },
      {
        indicacion: "Mantenimiento",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recommended: 0.5,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 2 a 4 semanas (ajustar según PCV)",
          intervalo_horas: 336
        }
      }
    ],
    gato: [
      {
        indicacion: "Anemia por Fallo Renal / FeLV (Inducción)",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1,
          dosis_min: 0.45,
          dosis_max: 1.0,
          unidad_calculo: "μg/kg"
        },
        frecuencia: {
          texto_ui: "Semanalmente",
          intervalo_horas: 168
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipertensión sistémica no controlada.",
      "Anemia por deficiencia de hierro.",
      "Anemia hemolítica o por pérdida de sangre (donde ya hay niveles altos de EPO)."
    ],
    efectos_adversos: [
      "Aplasia pura de glóbulos rojos (por formación de anticuerpos cross-reacting).",
      "Hipertensión arterial.",
      "Convulsiones.",
      "Reacciones alérgicas en el sitio de inyección.",
      "Dolor articular y fiebre (raro)."
    ],
    monitoreo_recommended: [
      "PCV / Hematocrito semanalmente",
      "Presión arterial regularmente",
      "Niveles de hierro sérico y ferritina"
    ],
    instrucciones_manejo: "Mantener en refrigeración (2-8°C). No congelar ni agitar vigorosamente.",
    sobredosis: {
      signos: ["Policitemia (exceso de glóbulos rojos)", "Hipertensión severa"],
      tratamiento: "Suspensión del fármaco y sangría (flebotomía) si es necesario."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une al receptor de eritropoyetina en las células progenitoras eritroides, estimulando la producción de eritrocitos.",
    farmacocinetica: "Vida media significativamente mayor que la EPO humana recombinante estándar."
  },
  presentaciones_comerciales: [
    {
      tipo: "Jeringas pre-cargadas",
      concentracion_texto: "10 μg a 500 μg",
      valor_concentracion: 10,
      unidad_concentracion: "μg",
      es_divisible: false
    }
  ]
};
