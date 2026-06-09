import type { Drug } from '@/lib/types';

export const asparaginaseDrug: Drug = {
  id: "asparaginase",
  meta_data: {
    nombre_generico: "Asparaginasa (L-Asparginasa, Crisantaspasa)",
    nombres_comerciales: ["Asparginase", "Elspar", "Erwinase"],
    grupo_farmacologico: "Enzima antineoplásica",
    status_regulatorio: "POM. Fármaco citotóxico."
  },
  resumen_clinico: {
    puntos_clave: [
      "Las células tumorales linfoides no pueden sintetizar asparagina y dependen del suministro del fluido extracelular.",
      "La asparaginasa priva a las células malignas de este aminoácido, provocando el cese de la síntesis proteica y la muerte celular.",
      "Uso principal en neoplasias linfoides.",
      "Riesgo significativo de anafilaxia y pancreatitis hemorrágica."
    ],
    usos_principales: "Tratamiento de neoplasias malignas linfoides en perros, gatos, hurones y reptiles (Dragones barbudos)."
  },
  informacion_cliente: [
    "Fármaco de quimioterapia; requiere manejo especializado por el veterinario.",
    "Riesgo de reacciones alérgicas graves (anafilaxia); el animal suele ser premedicado.",
    "Vigilar signos de dolor abdominal, vómitos o letargo extremo.",
    "Mantener el producto refrigerado si se tiene en casa (poco común)."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Neoplasias linfoides (Protocolo estándar)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 400,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 7 días o según protocolo", intervalo_horas: 168 },
        notas_tecnicas: "Dosis alternativa: 10,000 IU/m². Se recomienda premedicar con antihistamínicos 30 min antes."
      }
    ],
    gato: [
      {
        indicacion: "Neoplasias linfoides (Protocolo estándar)",
        vias: ["IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 400,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 7 días o según protocolo", intervalo_horas: 168 },
        notas_tecnicas: "Dosis alternativa: 10,000 IU/m²."
      }
    ],
    huron: [
      {
        indicacion: "Protocolo quimioterápico",
        vias: ["SC"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 10000,
          unidad_calculo: "IU/m²"
        },
        frecuencia: { texto_ui: "Semanal por las primeras 3 semanas", intervalo_horas: 168 },
        notas_tecnicas: "Uso como parte de un protocolo combinado."
      }
    ],
    reptil: [
      {
        indicacion: "Dragones Barbudos: Protocolo quimioterápico",
        vias: ["SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 400,
          unidad_calculo: "IU/kg"
        },
        frecuencia: { texto_ui: "Cada 3 semanas", intervalo_horas: 504 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Pancreatitis activa o historial previo de pancreatitis.",
      "Historial de anafilaxia asociada a administración previa del fármaco."
    ],
    precauciones: [
      "Usar con extrema precaución en pacientes con disfunción hepática preexistente."
    ],
    efectos_adversos: [
      "Anafilaxia (especialmente en administraciones repetidas).",
      "Pancreatitis hemorrágica (potencialmente fatal en perros).",
      "Hepatotoxicidad e hiperamonemia (con riesgo de encefalopatía).",
      "Trastornos de la coagulación.",
      "Vómitos y diarrea."
    ],
    monitoreo_recommended: [
      "Signos de hipersensibilidad inmediata (monitorear 1h post-inyección)",
      "Enzimas pancreáticas si hay dolor abdominal",
      "Función hepática",
      "Tiempos de coagulación"
    ],
    instrucciones_manejo: "FÁRMACO CITOTÓXICO. Seguir normativas de bioseguridad para quimioterapia. Mantener en refrigeración.",
    sobredosis: {
      signos: ["Fallo hepático agudo", "Pancreatitis severa"],
      tratamiento: "Soporte sintomático intensivo y manejo de la insuficiencia orgánica."
    },
    interacciones_farmacologicas: [
      { 
        farmaco: "Vincristina", 
        efecto: "Puede reducir el aclaramiento de vincristina y aumentar su toxicidad. Administrar vincristina 12-24h ANTES que la asparaginasa.", 
        severidad: "Importante" 
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Enzima que hidroliza la asparagina extracelular. Las células linfoides carecen de asparagina sintetasa y mueren al ser privadas de este aminoácido esencial para la síntesis de proteínas.",
    farmacocinetica: "Administración IM o SC produce niveles más persistentes que IV. No atraviesa la barrera hematoencefálica."
  },
  presentaciones_comerciales: [
    {
      tipo: "Vial inyectable (Polvo)",
      concentracion_texto: "10,000 IU",
      valor_concentracion: 10000,
      unidad_concentracion: "IU",
      es_divisible: false
    }
  ]
};
