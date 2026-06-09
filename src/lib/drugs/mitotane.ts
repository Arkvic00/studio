import type { Drug } from '@/lib/types';

export const mitotaneDrug: Drug = {
  id: "mitotane",
  meta_data: {
    nombre_generico: "Mitotano (o,p'-DDD)",
    nombres_comerciales: ["Lysodren"],
    grupo_farmacologico: "Agente adrenocorticolítico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Provoca necrosis selectiva de la corteza adrenal (zonas fasciculada y reticularis).",
      "Uso principal en hiperadrenocorticismo hipofisario (Cushing).",
      "Debe administrarse con comida alta en grasas para mejorar la absorción.",
      "Requiere monitoreo estricto con test de estimulación de ACTH.",
      "Riesgo de insuficiencia adrenal permanente si hay sobredosis.",
      "No recomendado como primera línea en gatos o hurones."
    ],
    usos_principales: "Tratamiento del hiperadrenocorticismo hipofisario y carcinoma adrenal en perros y hámsteres.",
    inicio_accion: "Rápido (necrosis celular en días)",
    duracion_efecto: "Persistente (efecto destructivo permanente en dosis altas)"
  },
  informacion_cliente: [
    "Utilizar guantes para manipular las tabletas y evitar inhalar el polvo.",
    "Administrar siempre con comida grasosa.",
    "Vigilar estrechamente el apetito: si disminuye, suspenda el fármaco y llame al veterinario.",
    "El perro debe tener siempre agua fresca a su disposición.",
    "Informe si nota debilidad extrema, vómitos o diarrea."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Cushing hipofisario (Inducción)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 40,
          dosis_min: 30,
          dosis_max: 50,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas con comida (aprox. 3-10 días)", intervalo_horas: 24 },
        notas_tecnicas: "Detener cuando el apetito baje o tras 10 días. Realizar test de ACTH inmediato."
      },
      {
        indicacion: "Cushing hipofisario (Mantenimiento)",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 50,
          unidad_calculo: "mg/kg/semana"
        },
        frecuencia: { texto_ui: "Dividido en 2-3 tomas por semana", intervalo_horas: 56 }
      },
      {
        indicacion: "Carcinoma Adrenal",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 100,
          dosis_min: 50,
          dosis_max: 150,
          unidad_calculo: "mg/kg"
        },
        frecuencia: { texto_ui: "Cada 24 horas", intervalo_horas: 24 }
      }
    ],
    roedores: [
      {
        indicacion: "Hámsteres: Hiperadrenocorticismo",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 5,
          unidad_calculo: "mg/animal"
        },
        frecuencia: { texto_ui: "Cada 24 horas por 4 semanas", intervalo_horas: 24 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hurones (fisiopatología adrenal distinta).",
      "Gatos (preferir trilostano).",
      "Insuficiencia adrenal preexistente."
    ],
    efectos_adversos: [
      "Anorexia y vómitos (signo de toxicidad/bajada de cortisol).",
      "Debilidad y letargo.",
      "Ataxia y signos neurológicos agudos (crecimiento de tumor hipofisario).",
      "Insuficiencia adrenal iatrogénica permanente (5% de perros).",
      "Hiponatremia e hiperpotasemia."
    ],
    monitoreo_recomendado: [
      "Test de estimulación con ACTH (regularmente)",
      "Ingesta diaria de agua y comida",
      "Electrolitos séricos",
      "Función hepática"
    ],
    instrucciones_manejo: "Usar guantes. Evitar contacto con piel y mucosas. Proteger de la luz.",
    sobredosis: {
      signos: ["Colapso por Addison agudo", "Vómitos severos", "Debilidad extrema"],
      tratamiento: "Cese inmediato. Administración de glucocorticoides y mineralocorticoides; fluidoterapia."
    },
    interacciones_farmacologicas: [
      { farmaco: "Barbitúricos / Corticosteroides", efecto: "Aceleran el metabolismo del mitotano.", severidad: "Moderada" },
      { farmaco: "Espironolactona", efecto: "Bloquea la acción del mitotano.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Reduce requerimientos de insulina en diabéticos.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Isómero del insecticida DDT que causa atrofia citotóxica y necrosis de las células adrenocorticales.",
    farmacocinetica: "Absorción oral pobre sin grasas. Se acumula en tejido adiposo."
  },
  presentaciones_comerciales: [
    { tipo: "Tableta / Cápsula", concentracion_texto: "500 mg", valor_concentracion: 500, unidad_concentracion: "mg", es_divisible: false }
  ]
};
