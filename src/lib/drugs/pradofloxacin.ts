import { Drug } from "@/lib/types/drug";

export const pradofloxacinDrug: Drug = {
  id: "pradofloxacin",
  meta_data: {
    nombre_generico: "Pradofloxacino",
    nombres_comerciales: ["Veraflox"],
    grupo_farmacologico: "Antibiótico (Fluoroquinolona)",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Infecciones donde las pruebas de cultivo y sensibilidad predicen una respuesta clínica y donde los antimicrobianos de primera y segunda línea no serían efectivos. Piodermas superficiales y profundas, infecciones de heridas, infecciones del tracto urinario, enfermedad periodontal severa e infecciones agudas severas del tracto respiratorio superior.",
    puntos_clave: [
      "Activo contra muchos organismos Gram-negativos y Gram-positivos.",
      "Actividad mucho mejorada contra anaerobios en comparación con las fluoroquinolonas de generaciones anteriores.",
      "Excepcional solubilidad en lípidos, alcanzando altas concentraciones en el tracto urogenital."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales gestantes o lactantes.",
      "No usar en animales que no están esqueléticamente maduros.",
      "No usar en animales con lesiones cartilaginosas persistentes.",
      "No usar en animales con enfermedad neurológica, especialmente epilepsia."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Disbiosis gastrointestinal potencialmente mortal."
    ]
  },
  interacciones: [
    {
      farmaco: "Absorbentes y antiácidos que contienen cationes (Mg2+, Al3+)",
      efecto: "Pueden unirse a las fluoroquinolonas, impidiendo su absorción.",
      severidad: "Moderada"
    },
    {
      farmaco: "Sucralfato y sales de zinc",
      efecto: "Pueden inhibir su absorción; separar la dosis por al menos 2 horas.",
      severidad: "Moderada"
    },
    {
      farmaco: "Teofilina",
      efecto: "Las fluoroquinolonas aumentan las concentraciones plasmáticas de teofilina.",
      severidad: "Moderada"
    },
    {
      farmaco: "Cimetidina",
      efecto: "Puede reducir el aclaramiento de las fluoroquinolonas.",
      severidad: "Leve"
    },
    {
      farmaco: "Ciclosporina y tacrolimus",
      efecto: "Algunas fluoroquinolonas pueden disminuir el metabolismo y aumentar la nefrotoxicidad.",
      severidad: "Moderada"
    },
    {
      farmaco: "Anticoagulantes orales",
      efecto: "Puede aumentar la acción de los anticoagulantes.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Conejos, roedores fermentadores del intestino posterior",
      dosis: [{ via: "N/A", dosis: "No usar, ya que puede provocar una disbiosis cecal mortal." }]
    },
    {
      especie: "Ratas",
      dosis: [{ via: "N/A", dosis: "Se ha observado diarrea y deshidratación. No se recomienda." }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "N/A", dosis: "No se recomienda su uso en aves." }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Antibiótico de amplio espectro, dependiente de la concentración, que inhibe la ADN girasa y la topoisomerasa IV, bloqueando la replicación bacteriana.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas orales", concentracion_texto: "15 mg, 60 mg, 120 mg" },
    { tipo: "Solución oral", concentracion_texto: "25 mg/ml" }
  ]
};