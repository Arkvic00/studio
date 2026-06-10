
import { Drug } from "@/lib/types/drug";

export const zincSaltsDrug: Drug = {
  id: "zinc-salts",
  meta_data: {
    nombre_generico: "Sales de Zinc",
    nombres_comerciales: ["Varios"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM, P, venta general"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de dermatosis que responden al zinc, reducción de cobre en enfermedad de almacenamiento de cobre y hepatopatía asociada a cobre. Beneficios propuestos en hepatitis crónica y encefalopatía hepática.",
    puntos_clave: [
      "La biodisponibilidad varía según la formulación (acetato y quelados > gluconato > sulfato).",
      "Se aconseja la suplementación concurrente con ácidos grasos esenciales para el tratamiento de trastornos de la piel."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Pacientes con deficiencia de cobre."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Náuseas, vómitos y diarrea ocasional.",
      "Puede ocurrir hemólisis con dosis grandes o niveles séricos >10 mg/ml, particularmente si coexiste una deficiencia de cobre."
    ]
  },
  interacciones: [
    {
      farmaco: "Metales pesados divalentes (hierro, cobre)",
      efecto: "La administración a largo plazo de zinc puede llevar a una disminución de las reservas hepáticas de cobre o hierro y a una deficiencia funcional.",
      severidad: "Moderada"
    },
    {
      farmaco: "Penicilamina, ácido ursodesoxicólico",
      efecto: "Potencialmente pueden inhibir la absorción de zinc.",
      severidad: "Leve"
    },
    {
      farmaco: "Tetraciclina oral",
      efecto: "Las sales de zinc pueden quelar la tetraciclina oral y reducir su absorción; separar las dosis por al menos 2 horas.",
      severidad: "Moderada"
    },
    {
      farmaco: "Antibióticos fluoroquinolonas",
      efecto: "Las sales de zinc могут reducir la absorción de los antibióticos fluoroquinolonas.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros y Gatos",
      dosis: [
        { via: "p.o.", dosis: "1–2 mg de zinc elemental q24h. Administrar con comida para minimizar los vómitos." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Involucrado principalmente en la síntesis de ADN y ARN, así como en la síntesis de ácidos grasos esenciales, la función de los glóbulos blancos y numerosas reacciones en el metabolismo intermedio. Administrado por vía oral, puede reducir la absorción gastrointestinal y la captación hepática de cobre.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Oral", concentracion_texto: "Varias preparaciones de sulfato de zinc, gluconato de zinc, acetato de zinc y zinc quelado." }
  ]
};
