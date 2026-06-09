import type { Drug } from '@/lib/types';

export const cloxacillinDrug: Drug = {
  id: "cloxacillin",
  meta_data: {
    nombre_generico: "Cloxacilina (Cloxacilina benzatínica)",
    nombres_comerciales: ["Opticlox", "Orbenin"],
    grupo_farmacologico: "Penicilina resistente a beta-lactamasa; Beta-lactámico",
    status_regulatorio: "POM-V. Categoría D (Prudencia) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente resistente a la penicilinasa estafilocócica.",
      "Indicado específicamente para infecciones oculares por Staphylococcus productores de beta-lactamasa.",
      "Menos activo que la penicilina G contra Streptococcus.",
      "Espectro reducido."
    ],
    usos_principales: "Tratamiento de infecciones oculares bacterianas susceptibles.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "24 horas (formulaciones de liberación lenta)"
  },
  informacion_cliente: [
    "Administrar la pomada en el ojo afectado una vez al día.",
    "Evite que la punta del tubo toque el ojo o cualquier superficie.",
    "¡PELIGRO!: Nunca administrar a cobayas, hámsteres o conejos (riesgo de muerte por diarrea).",
    "Completar el ciclo de tratamiento según lo prescrito.",
    "Lavar las manos tras su uso, especialmente si es alérgico a la penicilina."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Infecciones oculares susceptibles",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "g (1/10 de tubo)"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    gato: [
      {
        indicacion: "Infecciones oculares susceptibles",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "g (1/10 de tubo)"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones oculares",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 0.3,
          unidad_calculo: "g (1/10 de tubo)"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a penicilinas o cefalosporinas.",
      "Administración a pequeños herbívoros (Absoluta)."
    ],
    contraindicaciones_especie: {
      "Cobaya": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Hamster": "¡PROHIBIDO!: Causa enterotoxemia fatal.",
      "Conejo": "¡PROHIBIDO!: Causa enterotoxemia fatal. Además, en sífilis del conejo puede dejar al animal como portador.",
      "Jerbo": "¡PROHIBIDO!: Causa enterotoxemia fatal."
    },
    efectos_adversos: [
      "Irritación local leve.",
      "Reacciones de hipersensibilidad.",
      "Enterotoxemia fatal en herbívoros sensibles si se ingiere accidentalmente."
    ],
    monitoreo_recomendado: [
        "Resolución de los signos clínicos oculares",
        "Signos de hipersensibilidad"
    ],
    instrucciones_manejo: "Observar precauciones normales para alérgicos a beta-lactámicos.",
    sobredosis: {
      signos: ["No reportados en uso oftálmico"],
      tratamiento: "No requerido."
    },
    interacciones_farmacologicas: [
      { farmaco: "Antibióticos bacteriostáticos (Tetraciclinas, Macrólidos)", efecto: "Pueden antagonizar el efecto bactericida de la cloxacilina.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Se une a las proteínas de unión a penicilina (PBP) inhibiendo la síntesis de la pared celular bacteriana.",
    farmacocinetica: "La sal benzatínica proporciona una liberación lenta para una acción prolongada."
  },
  presentaciones_comerciales: [
    {
      tipo: "Suspensión oftálmica (Tubo)",
      concentracion_texto: "16.7% (167 mg/g)",
      valor_concentracion: 167,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};