import { Drug } from "@/lib/types/drug";

export const adequanDrug: Drug = {
  id: "polysulphated-glycosaminoglycan",
  meta_data: {
    nombre_generico: "Glicosaminoglicano polisulfatado",
    nombres_comerciales: ["Adequan"],
    grupo_farmacologico: "Condroprotector",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Manejo adyuvante de artritis no infecciosas y no mediadas por el sistema inmunitario.",
    puntos_clave: [
      "Actúa como un agente condroprotector.",
      "No es un reemplazo, sino un complemento de otras terapias.",
      "Se requiere técnica aséptica para la inyección."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en pacientes donde se anticipa una artrotomía debido a un posible aumento del sangrado.",
      "No usar cuando hay infección presente o sospechada."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "No se recomienda su uso en aves, ya que se han reportado coagulopatías mortales.",
      "La inyección intraarticular puede causar dolor e inflamación.",
      "Aunque es raro, la sepsis articular es posible."
    ]
  },
  interacciones: [
    {
      farmaco: "Ninguno descrito hasta la fecha",
      efecto: "",
      severidad: "N/A"
    }
  ],
  dosis: [
    {
      especie: "Conejos",
      dosis: [{ via: "s.c., i.m.", dosis: "2.2 mg/kg q3d durante 21–28 días, luego q14d según sea necesario" }]
    },
    {
      especie: "Primates",
      dosis: [{ via: "i.m.", dosis: "2 mg/kg q3–5d durante 2–3 meses" }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "N/A", dosis: "No usar" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Precursor de mucopolisacáridos, inhibidor de enzimas, estimula los condrocitos y las células sinoviales. Se une a la matriz del cartílago dañado y estimula la síntesis de nuevas moléculas de glicosaminoglicano e inhibe las enzimas proteolíticas.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución inyectable", concentracion_texto: "100 mg/ml" }
  ]
};