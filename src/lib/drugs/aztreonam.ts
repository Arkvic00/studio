import type { Drug } from '@/lib/types';

export const aztreonamDrug: Drug = {
  id: "aztreonam",
  meta_data: {
    nombre_generico: "Aztreonam",
    nombres_comerciales: ["Azactam"],
    grupo_farmacologico: "Monobactámico; Antibiótico beta-lactámico",
    status_regulatorio: "POM. Clasificado como categoría A (Evitar) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Antibiótico bactericida que interfiere con la síntesis de la pared celular.",
      "Espectro reducido, actuando principalmente contra bacterias Gram-negativas aeróbicas.",
      "Uso reservado para infecciones específicas en peces donde otros tratamientos han fallado."
    ],
    usos_principales: "Tratamiento de infecciones bacterianas por Gram-negativos en peces.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Requiere administración intermitente (q48h)"
  },
  informacion_cliente: [
    "Uso exclusivo en peces bajo prescripción y supervisión veterinaria.",
    "Seguir estrictamente el número de tratamientos indicados (usualmente 7).",
    "Observar las guías de uso responsable de antibióticos."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Infecciones bacterianas Gram-negativas",
        vias: ["IM", "Intracelómica"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas (Total 7 tratamientos)",
          intervalo_horas: 48
        },
        notas_tecnicas: "Clasificado como categoría A (Evitar) por la EMA; usar con extrema prudencia y justificación clínica."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No hay información específica disponible sobre contraindicaciones en peces."
    ],
    efectos_adversos: [
      "No hay información específica disponible."
    ],
    monitoreo_recomendado: [
      "Respuesta clínica de la población de peces",
      "Signos de toxicidad aguda tras la inyección"
    ],
    instrucciones_manejo: "Observar precauciones normales para el manejo de polvos para solución inyectable.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Nado errático"],
      tratamiento: "Soporte ambiental y dilución si es aplicable."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bactericida mediante la interferencia con la síntesis de la pared celular bacteriana.",
    farmacocinetica: "Administración parenteral obligatoria para alcanzar niveles sistémicos."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "1 g, 2 g",
      valor_concentracion: 1000,
      unidad_concentracion: "mg",
      es_divisible: false
    }
  ]
};
