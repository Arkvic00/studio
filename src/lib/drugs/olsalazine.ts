import type { Drug } from '@/lib/types';

export const olsalazineDrug: Drug = {
  id: "olsalazine",
  meta_data: {
    nombre_generico: "Olsalazina",
    nombres_comerciales: ["Olsalazine*"],
    grupo_farmacologico: "Dímero de ácido 5-aminosalicílico (5-ASA); Antiinflamatorio local colónico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Dímero de 5-ASA que se descompone por bacterias colónicas en 5-ASA libre.",
      "Efecto antiinflamatorio local en la mucosa del colon.",
      "Útil en el manejo de la colitis, especialmente en pacientes sensibles a la sulfasalazina.",
      "Riesgo de queratoconjuntivitis seca (KCS), aunque menor que con sulfasalazina."
    ],
    usos_principales: "Manejo de la colitis crónica.",
    inicio_accion: "Variable (acción local en colon)",
    duracion_efecto: "Requiere administración cada 12 horas"
  },
  informacion_cliente: [
    "Medicamento para desinflamar el colon.",
    "Se recomiendan pruebas de lágrima (Test de Schirmer) periódicas para vigilar la sequedad ocular.",
    "Informe si nota que su mascota tiene los ojos rojos o produce menos legañas de lo normal.",
    "No usar en animales alérgicos a la aspirina o salicilatos."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Colitis crónica",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a los salicilatos.",
      "Insuficiencia renal severa."
    ],
    efectos_adversos: [
      "Queratoconjuntivitis seca (KCS).",
      "Vómitos y diarrea ocasionales.",
      "Reacciones de hipersensibilidad."
    ],
    monitoreo_recomendado: [
      "Test de Schirmer periódico",
      "Estado de las heces"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["Trastornos GI", "Signos de toxicidad por salicilatos"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      { farmaco: "Otros AINEs", efecto: "Potenciación del riesgo de efectos adversos.", severidad: "Importante" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Dímero de 5-aminosalicilato que llega intacto al colon, donde las bacterias rompen el enlace liberando el componente activo para una acción tópica antiinflamatoria.",
    farmacocinetica: "Mínima absorción sistémica de la olsalazina; la mayoría actúa localmente."
  },
  presentaciones_comerciales: [
    {
      tipo: "Cápsula oral",
      concentracion_texto: "250 mg",
      valor_concentracion: 250,
      unidad_concentracion: "mg",
      es_divisible: false
    },
    {
      tipo: "Tableta oral",
      concentracion_texto: "500 mg",
      valor_concentracion: 500,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
