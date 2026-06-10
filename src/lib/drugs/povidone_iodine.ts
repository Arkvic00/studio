import { Drug } from "@/lib/types/drug";

export const povidoneIodineDrug: Drug = {
  id: "povidone-iodine",
  meta_data: {
    nombre_generico: "Povidona yodada",
    nombres_comerciales: ["Iodophor", "Polyvinylpyrrolidone–iodine complex", "PVP", "Tamodine", "Betadine", "Vetasept"],
    grupo_farmacologico: "Antiséptico, desinfectante",
    status_regulatorio: "ESPA"
  },
  resumen_clinico: {
    usos_principales: "Limpieza y tratamiento de heridas.",
    puntos_clave: [
      "Efecto biocida sobre una amplia gama de organismos (bacterias, hongos, virus, protozoos)."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Tener cuidado al usar con pacientes sensibles al yodo, ya que existe la posibilidad de que el yodo sea absorbido por algunos animales (ej. el uso en ajolotes puede causar metamorfosis)."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "No hay información disponible."
    ]
  },
  interacciones: [
    {
      farmaco: "No hay información disponible",
      efecto: "",
      severidad: "N/A"
    }
  ],
  dosis: [
    {
      especie: "Mamíferos, Aves, Reptiles, Anfibios, Peces",
      dosis: [{ via: "Tópico", dosis: "Aplicar sin diluir con un bastoncillo de algodón o hisopo sobre la superficie húmeda y enjuagar con agua fresca." }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Efecto biocida sobre una amplia gama de organismos (bacterias, hongos, virus, protozoos) al matar las células a través de la yodación de lípidos y la oxidación de compuestos citoplasmáticos y de membrana.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución tópica", concentracion_texto: "7.5% p/p de povidona yodada (0.75% p/p de yodo disponible)" }
  ]
};