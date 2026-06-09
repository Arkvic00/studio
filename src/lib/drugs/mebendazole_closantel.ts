import type { Drug } from '@/lib/types';

export const mebendazoleClosantelDrug: Drug = {
  id: "mebendazole_closantel",
  meta_data: {
    nombre_generico: "Mebendazol / Closantel",
    nombres_comerciales: ["Supaverm"],
    grupo_farmacologico: "Antiparasitario (Benzimidazol / Salicilanilida)",
    status_regulatorio: "POM-VPS"
  },
  resumen_clinico: {
    puntos_clave: [
      "El mebendazol inhibe los microtúbulos del parásito causando parálisis.",
      "El closantel desacopla la fosforilación oxidativa e inhibe el ATP.",
      "Combinación sinérgica potente contra parásitos externos de peces.",
      "Uso exclusivo en carpas koi para el control de trematodos monogénicos.",
      "Tóxico para muchas otras especies animales."
    ],
    usos_principales: "Tratamiento de infestaciones por trematodos monogénicos externos (flukes) en carpas koi.",
    inicio_accion: "Inmediato (baño)",
    duracion_efecto: "Inmersión permanente"
  },
  informacion_cliente: [
    "Uso exclusivo para carpas koi en estanques o acuarios.",
    "Asegurar una oxigenación muy fuerte del agua durante el tratamiento.",
    "No utilizar en peces destinados a la cría por riesgo de malformaciones.",
    "Informe si nota que los peces boquean en la superficie o parecen estresados.",
    "No verter el agua tratada directamente en ríos o fuentes naturales."
  ],
  parametros_dosificacion: {
    peces: [
      {
        indicacion: "Trematodos monogénicos (Carpas Koi)",
        vias: ["Inmersión permanente"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1,
          unidad_calculo: "ml por cada 400 litros de agua"
        },
        notas_tecnicas: "Equivale a 0.187 mg/l de mebendazol y 0.125 mg/l de closantel. No repetir antes de 7 días."
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Peces destinados a la cría (reproductores).",
      "Uso en estanques con otras especies de peces sensibles.",
      "Hipersensibilidad conocida."
    ],
    efectos_adversos: [
      "Potencial teratogénico y embriotóxico en reproductores.",
      "Estrés respiratorio si la aireación es insuficiente."
    ],
    monitoreo_recomendado: [
      "Niveles de oxígeno disuelto",
      "Comportamiento de nado de los peces"
    ],
    instrucciones_manejo: "Observar precauciones ambientales normales. Evitar el contacto con piel y ojos humanos.",
    sobredosis: {
      signos: ["Mortalidad aguda", "Pérdida de equilibrio"],
      tratamiento: "Cambio masivo de agua inmediato y filtración intensiva."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Mebendazol altera la estructura celular del parásito; Closantel bloquea su metabolismo energético.",
    farmacocinetica: "Acción por contacto local en piel y branquias."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión oral/baño", concentracion_texto: "7.5% Mebendazol + 5% Closantel", valor_concentracion: 75, unidad_concentracion: "mg/ml", es_divisible: false }
  ]
};