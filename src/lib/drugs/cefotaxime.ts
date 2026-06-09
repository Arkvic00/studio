import type { Drug } from '@/lib/types';

export const cefotaximeDrug: Drug = {
  id: "cefotaxime",
  meta_data: {
    nombre_generico: "Cefotaxima",
    nombres_comerciales: ["Cefotaxime*"],
    grupo_farmacologico: "Cefalosporina de 3ª generación",
    status_regulatorio: "POM. Categoría B (Restringido) por la EMA."
  },
  resumen_clinico: {
    puntos_clave: [
      "Bactericida tiempo-dependiente de amplio espectro.",
      "Excelente actividad contra Gram-negativos (Enterobacteriaceae).",
      "Clasificado como antibiótico de importancia crítica de alta prioridad.",
      "Reservar para sepsis aguda o infecciones graves confirmadas por cultivo.",
      "No es efectivo contra Pseudomonas spp."
    ],
    usos_principales: "Tratamiento de sepsis aguda, infecciones graves por Gram-negativos y pacientes que no pueden recibir aminoglucósidos.",
    inicio_accion: "Rápido (parenteral)",
    duracion_efecto: "Corta (requiere administración q8h)"
  },
  informacion_cliente: [
    "Medicamento de uso hospitalario para infecciones muy graves.",
    "La inyección puede resultar dolorosa para el animal.",
    "Completar el ciclo de tratamiento es vital para prevenir resistencias bacterianas.",
    "Informe si nota diarrea o falta de apetito tras la administración."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Sepsis aguda / Infecciones graves",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Dosis más bajas (10-20 mg/kg q12h) han mostrado eficacia clínica en algunos estudios."
      }
    ],
    gato: [
      {
        indicacion: "Sepsis aguda / Infecciones graves",
        vias: ["IV", "IM", "SC"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 45,
          dosis_min: 40,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    conejo: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "¡ADVERTENCIA!: Evitar la vía oral debido al riesgo de enterotoxemia fatal."
      }
    ],
    primates: [
      {
        indicacion: "Infecciones sistémicas graves",
        vias: ["IM", "IV"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 8 horas", intervalo_horas: 8 }
      }
    ],
    ave: [
      {
        indicacion: "Infecciones graves por Gram-negativos",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 75,
          dosis_min: 50,
          dosis_max: 100,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 6 a 8 horas", intervalo_horas: 8 },
        notas_tecnicas: "Se ha reportado resistencia en algunas poblaciones de aves silvestres."
      }
    ],
    reptil: [
      {
        indicacion: "Infecciones sistémicas",
        vias: ["IM"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          dosis_min: 20,
          dosis_max: 40,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a cefalosporinas o penicilinas.",
      "Administración oral en pequeños herbívoros."
    ],
    contraindicaciones_especie: {
      "Conejo": "¡ALERTA!: Prohibida la vía oral (causa enterotoxemia fatal).",
      "Hamster": "¡PROHIBIDO!: Riesgo de enterotoxemia mortal."
    },
    efectos_adversos: [
      "Dolor en el sitio de inyección.",
      "Trastornos gastrointestinales.",
      "Sobreinfección por microorganismos resistentes (uso prolongado).",
      "Enterotoxemia fatal en especies sensibles (oral)."
    ],
    monitoreo_recomendado: [
      "Función renal (especialmente si se usa con diuréticos de asa)",
      "Respuesta clínica al tratamiento"
    ],
    instrucciones_manejo: "La solución reconstituida es estable por 24h (perro/gato) o hasta 10 días (exóticos) bajo refrigeración.",
    sobredosis: {
      signos: ["Gastroenteritis severa", "Signos de hipersensibilidad"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Aminoglucósidos", efecto: "Efecto sinérgico positivo contra ciertas bacterias.", severidad: "Leve" },
      { farmaco: "Furosemida / Anfotericina B", efecto: "Aumentan el riesgo de nefrotoxicidad.", severidad: "Importante" },
      { farmaco: "Antibióticos bacteriostáticos", efecto: "Pueden interferir con el efecto bactericida.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas de unión a penicilina (PBP).",
    farmacocinetica: "Eliminación predominantemente renal. Atraviesa la barrera hematoencefálica en inflamación meningea."
  },
  presentaciones_comerciales: [
    { tipo: "Vial inyectable (Polvo)", concentracion_texto: "500 mg, 1 g, 2 g", valor_concentracion: 1000, unidad_concentracion: "mg", es_divisible: false }
  ]
};
