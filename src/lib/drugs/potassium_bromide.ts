import { Drug } from "@/lib/types/drug";

export const potassiumBromideDrug: Drug = {
  id: "potassium-bromide",
  meta_data: {
    nombre_generico: "Bromuro de potasio",
    nombres_comerciales: ["Epilease", "Libromide", "Vetbromide", "Potassium bromide solution"],
    grupo_farmacologico: "Anticonvulsivo",
    status_regulatorio: "POM-V, AVM-GSL"
  },
  resumen_clinico: {
    usos_principales: "Control de convulsiones refractarias al tratamiento con fenobarbital o donde el uso de fenobarbital o imepitoína está contraindicado.",
    puntos_clave: [
      "Generalmente se usa en conjunto con fenobarbital.",
      "Tiene una vida media larga (>20 días) y las concentraciones plasmáticas en estado estacionario pueden no alcanzarse durante 3-4 meses.",
      "Los altos niveles de sal en la dieta aumentan la eliminación renal de bromuro."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Ataxia, sedación y somnolencia con sobredosis.",
      "Reacciones cutáneas en animales con enfermedades de la piel preexistentes.",
      "Vómitos, polifagia, polidipsia y pancreatitis.",
      "Cambios de comportamiento como irritabilidad o inquietud."
    ]
  },
  interacciones: [
    {
      farmaco: "Cloruro (sal dietética, fluidos, diuréticos de asa)",
      efecto: "El bromuro compite con el cloruro por la reabsorción renal. El aumento de cloruro puede aumentar la excreción de bromuro y disminuir las concentraciones séricas de bromuro.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [
        { via: "p.o.", dosis: "22–30 mg/kg q24h en combinación con fenobarbital" },
        { via: "p.o.", dosis: "70–80 mg/kg q24h si se usa solo" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Dentro del SNC, compite con el transporte transmembrana de cloruro e inhibe el sodio, lo que resulta en la hiperpolarización de la membrana y la elevación del umbral convulsivo. Potencia el efecto del GABA.",
    farmacocinetica: "Bien absorbido por el tracto gastrointestinal y eliminado lentamente por el riñón en competencia con el cloruro."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas orales", concentracion_texto: "325 mg, 600 mg" },
    { tipo: "Cápsulas orales", concentracion_texto: "250 mg" },
    { tipo: "Solución oral", concentracion_texto: "250 mg/ml" }
  ]
};