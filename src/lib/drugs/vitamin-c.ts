
import { Drug } from "@/lib/types/drug";

export const vitaminCDrug: Drug = {
  id: "vitamin-c",
  meta_data: {
    nombre_generico: "Vitamina C",
    nombres_comerciales: ["Ácido Ascórbico"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM, venta general"
  },
  resumen_clinico: {
    usos_principales: "Reducir la metahemoglobinemia asociada con la toxicidad por paracetamol. Puede requerirse como suplemento en condiciones de estrés oxidativo aumentado, en pacientes caquéxicos y en aquellos que requieren soporte nutricional.",
    puntos_clave: [
      "No hay evidencia que apoye la terapia a largo plazo o a altas dosis en perros y gatos, ya que pueden sintetizarla de novo."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Evitar el uso en pacientes con enfermedad hepática."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Puede causar anafilaxia si se administra por vía intravenosa.",
      "La suplementación puede aumentar el daño hepático al incrementar la acumulación de hierro.",
      "El uso prolongado puede aumentar el riesgo de cristaluria y formación de cálculos de urato, oxalato y cistina."
    ]
  },
  interacciones: [
    {
      farmaco: "Acidificantes urinarios",
      efecto: "Grandes dosis (orales o inyectables) acidifican la orina y pueden aumentar la excreción renal de algunos fármacos (ej. mexiletina) y reducir el efecto de algunos antibacterianos en el sistema genitourinario (ej. aminoglucósidos).",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { indicacion: "Metahemoglobinemia", via: "s.c.", dosis: "30–40 mg/kg q6h por 7 tratamientos." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { indicacion: "Metahemoglobinemia", via: "s.c.", dosis: "30–40 mg/kg q6h por 7 tratamientos." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Antioxidante hidrosoluble, crítico para el entrecruzamiento de precursores de colágeno (crecimiento y reparación de tejidos) e implicado en el metabolismo de proteínas, lípidos y carbohidratos.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml." },
    { tipo: "Oral", concentracion_texto: "Tabletas, cápsulas, polvos y líquidos de varias concentraciones." }
  ]
};
