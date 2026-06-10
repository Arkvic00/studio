import { Drug } from "@/lib/types/drug";

export const potassiumPermanganateDrug: Drug = {
  id: "potassium-permanganate",
  meta_data: {
    nombre_generico: "Permanganato de potasio",
    nombres_comerciales: ["Permanganate of potash", "Permanganate dip"],
    grupo_farmacologico: "Antiséptico, oxidante",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de infecciones bacterianas externas y ectoparásitos en peces de agua dulce. Desinfección de plantas de acuario y eliminación de algas. Cauterización de uñas/garras rotas que sangran en aves.",
    puntos_clave: [
      "Oxida la materia orgánica.",
      "Mejor usado como un tratamiento de baño separado de 30-60 min.",
      "Tóxico a pH alto.",
      "Mancha muchos materiales."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en agua de mar.",
      "No se recomienda su uso en acuarios ya que muchas especies son sensibles."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  interacciones: [
    {
      farmaco: "Formalina",
      efecto: "No usar juntos.",
      severidad: "Grave"
    }
  ],
  dosis: [
    {
      especie: "Aves",
      dosis: [{ via: "Tópico", dosis: "Eficaz por aplicación directa para cauterización de uñas/garras rotas que sangran." }]
    },
    {
      especie: "Peces",
      dosis: [
        { indicacion: "Bacterias externas y parásitos", via: "Inmersión", dosis: "5 mg/l durante 30–60 min o 2 mg/l por inmersión prolongada" },
        { indicacion: "Desinfección de plantas", via: "Inmersión", dosis: "10 mg/l durante 5–10 min" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Oxidación de la materia orgánica.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Cristales para disolución en agua", concentracion_texto: "N/A" },
    { tipo: "Solución", concentracion_texto: "Varias formulaciones propietarias disponibles" }
  ]
};