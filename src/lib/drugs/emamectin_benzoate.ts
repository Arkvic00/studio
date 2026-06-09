import type { Drug } from '@/lib/types';

export const emamectinBenzoateDrug: Drug = {
  id: "emamectin_benzoate",
  meta_data: {
    nombre_generico: "Benzoato de Emamectina",
    nombres_comerciales: ["Fluke-Solve Plus", "Lice-Solve", "Slice"],
    grupo_farmacologico: "Lactona macrocíclica; Parasiticida",
    status_regulatorio: "POM-V, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Actúa abriendo permanentemente los canales de cloruro mediados por glutamato y GABA.",
      "Provoca parálisis flácida y muerte del parásito.",
      "Tratamiento de elección para ectoparásitos crustáceos en peces.",
      "Biodegradable por la luz solar.",
      "Requiere apagar filtros de carbón y UV durante las primeras 24h."
    ],
    usos_principales: "Tratamiento de piojos de mar y otros crustáceos parásitos (Argulus, Ergasilus) en peces de acuario y consumo.",
    inicio_accion: "Rápido tras exposición",
    duracion_efecto: "Persistente (requiere repetición al mes)"
  },
  informacion_cliente: [
    "No utilizar simultáneamente con otros tratamientos para el agua o estanque.",
    "Apagar filtros de carbón activo y luces UV durante 24 horas tras añadir el producto.",
    "Asegurar una oxigenación muy fuerte del agua durante el tratamiento.",
    "No verter el agua tratada directamente en ríos o fuentes naturales.",
    "Informe si nota comportamientos extraños en los peces tras la aplicación."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Ectoparásitos crustáceos (Inmersión)",
        vias: ["Inmersión"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 56,
          unidad_calculo: "μg/l (microgramos)"
        },
        frecuencia: { texto_ui: "Repetir después de 1 mes", intervalo_horas: 720 },
        notas_tecnicas: "Asegurar mezcla homogénea en el agua del tanque."
      },
      {
        indicacion: "Goldfish: Parasitosis (En alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.05,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Diario por 7 días", intervalo_horas: 24 }
      },
      {
        indicacion: "Carpas Koi: Parasitosis (En alimento)",
        vias: ["PO (Alimento)"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 0.005,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Diario por 7 días", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "No usar en estanques con peces de la especie Orfe (Leuciscus spp.).",
      "No usar en acuaterrarios con tortugas de agua (terrapins).",
      "Uso concurrente con otros tratamientos químicos del agua."
    ],
    efectos_adversos: [
      "Toxicidad en invertebrados no objetivo (caracoles, gambas).",
      "Estrés agudo si la aireación es insuficiente."
    ],
    monitoreo_recomendado: [
      "Niveles de oxígeno disuelto",
      "Comportamiento de nado de los peces",
      "Presencia de parásitos tras 48h"
    ],
    instrucciones_manejo: "Usar equipo de protección para evitar contacto con el polvo. No desechar en sistemas de alcantarillado abiertos.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Pérdida de equilibrio en peces"],
      tratamiento: "Cambio masivo de agua y filtración intensiva inmediata."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une irreversiblemente a los canales de cloruro regulados por glutamato y GABA, causando un flujo constante de iones cloruro que paraliza los músculos del parásito.",
    farmacocinetica: "Se absorbe por contacto branquial y cutáneo."
  },
  presentaciones_comerciales: [
    {
      tipo: "Polvo para inmersión",
      concentracion_texto: "1.4% Emamectina",
      valor_concentracion: 14,
      unidad_concentracion: "mg/g",
      es_divisible: false
    },
    {
      tipo: "Polvo para alimento",
      concentracion_texto: "5 g/2.5 kg",
      valor_concentracion: 2,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};
