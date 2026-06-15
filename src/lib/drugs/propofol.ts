import type { Drug } from '../drugs.types';

export const propofolDrug: Drug = {
    id: "propofol",
    meta_data: {
      nombre_generico: "Propofol",
      nombres_comerciales: ["Inductofol", "Propodine", "PropoFlo Plus", "PropoFol-Lipuro Vet", "Propomitor", "Proposure", "Vetofol"],
      grupo_farmacologico: "Anestésico General (Inyectable)",
      status_regulatorio: "POM-V",
    },
    resumen_clinico: {
      puntos_clave: [
        "Agente anestésico de acción corta para inducción y mantenimiento.",
        "Rápida pérdida de conciencia y recuperación.",
        "No tiene propiedades analgésicas.",
        "Puede causar apnea e hipotensión, especialmente con inyección rápida.",
        "La formulación con alcohol bencílico no debe usarse para infusión continua (CRI).",
      ],
      usos_principales: "Inducción y mantenimiento de la anestesia general.",
      inicio_accion: "Inmediato (IV)",
      duracion_efecto: "Corto (depende de la dosis y redistribución)",
    },
    informacion_cliente: [
        "Es un anestésico general administrado únicamente por personal veterinario cualificado.",
        "Puede causar dolor en el sitio de inyección."
    ],
    farmacologia_y_seguridad: {
      farmacodinamia: "Modula la actividad inhibitoria de GABA en los receptores GABA, aunque el mecanismo exacto no se comprende completamente.",
      contraindicaciones: [],
      efectos_adversos: [
        "Apnea, cianosis, bradicardia e hipotensión severa (con inyección rápida).",
        "Dolor en el sitio de inyección.",
      ],
      interacciones_farmacologicas: [],
      monitoreo_recomendado: ["Frecuencia cardíaca y respiratoria, presión arterial, saturación de oxígeno durante la anestesia."],
      instrucciones_manejo: "Agitar bien la emulsión lipídica antes de usar. No mezclar con otros agentes. Las botellas abiertas sin conservantes deben refrigerarse y usarse en 8 horas. Las que contienen conservante duran 28 días.",
      sobredosis: {},
    },
    parametros_dosificacion: {
      mamiferos: [
        { especie: "Hurón", via: "i.v.", dosis: "2–8 mg/kg" },
        { especie: "Conejo", via: "i.v.", dosis: "7.5–15 mg/kg (no premedicado), 2–6 mg/kg (premedicado)" },
        { especie: "Rata", via: "i.v.", dosis: "7.5–10 mg/kg" },
        { especie: "Ratón", via: "i.v.", dosis: "12–26 mg/kg" },
        { especie: "Primate", via: "i.v.", dosis: "2.5–5 mg/kg seguido de 0.3–0.5 mg/kg/min CRI" },
      ],
      aves: [
        { especie: "General", via: "i.v.", dosis: "10 mg/kg en infusión lenta a efecto; dosis suplementarias de hasta 3 mg/kg. CRI: 0.5 mg/kg/min." },
      ],
      reptiles: [
        { especie: "General", via: "i.v., intraóseo", dosis: "5–10 mg/kg" },
        { especie: "Trachemys scripta elegans (Tortuga de orejas rojas)", via: "i.v.", dosis: "10–20 mg/kg (dosis más altas para intubación)" },
        { especie: "Pogona vitticeps (Dragón barbudo)", via: "i.v.", dosis: "10 mg/kg" },
        { especie: "Iguana iguana (Iguana verde)", via: "intraóseo", dosis: "5–10 mg/kg" },
        { especie: "Boiga irregularis (Culebra arbórea marrón)", via: "i.v.", dosis: "5 mg/kg" },
      ],
      anfibios: [
        { especie: "Rana leopardo", via: "plexo sublingual", dosis: "10 mg/kg (sedación/anestesia ligera)" },
        { especie: "Salamandra tigre", via: "intracelómico", dosis: "10–35 mg/kg (inducción en 30 min, recuperación en 24h)" },
        { especie: "General (Eutanasia)", via: "intracelómico o tópico", dosis: "60–100 mg/kg (intracelómico) o 100–400 mg/kg (tópico)", notas: "Retirar y enjuagar después de la inducción para el método tópico." },
      ],
      peces: [
          { especie: "General", via: "inmersión", dosis: "2.5–10 mg/l" }
      ]
    },
    presentaciones_comerciales: [
      { tipo: "Inyectable", concentracion_texto: "10 mg/ml solución", valor_concentracion: 10, unidad_concentracion: "mg/ml", es_divisible: false, notas: "Emulsión lipídica, disponible con o sin conservante (alcohol bencílico)." },
    ]
  };