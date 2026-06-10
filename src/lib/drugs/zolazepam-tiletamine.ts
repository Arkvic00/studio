
import { Drug } from "@/lib/types/drug";

export const zolazepamTiletamineDrug: Drug = {
  id: "zolazepam-tiletamine",
  meta_data: {
    nombre_generico: "Zolazepam/Tiletamina",
    nombres_comerciales: ["Zoletil"],
    grupo_farmacologico: "Anestésico general",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Anestesia general en perros y gatos.",
    puntos_clave: [
      "Zolazepam tiene acción sedante, ansiolítica y relajante muscular.",
      "Tiletamina genera una anestesia disociativa.",
      "La duración de la anestesia es de 20 a 60 minutos dependiendo de la dosis.",
      "El producto combinado no debe usarse como único agente anestésico para operaciones dolorosas.",
      "La recuperación puede ser prolongada en animales obesos, viejos o debilitados.",
      "Retirar el collar antiparasitario 24 horas antes de la anestesia."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Las mujeres embarazadas deben evitar manipular el producto."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales con enfermedad cardíaca, respiratoria o hipertensiva severa, o insuficiencia renal, pancreática o hepática.",
      "No usar en animales con traumatismo craneoencefálico o tumores intracraneales.",
      "El producto atraviesa la placenta y puede causar depresión respiratoria fatal para cachorros y gatitos."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "La inyección a veces puede causar dolor en los gatos.",
      "Rigidez muscular durante la recuperación es común.",
      "Dosis más altas se asocian con una recuperación prolongada y excitable en perros.",
      "La recuperación de la anestesia es más prolongada en gatos que en perros."
    ]
  },
  interacciones: [
    {
      farmaco: "Tranquilizantes fenotiazínicos (ej. acepromazina)",
      efecto: "Pueden causar un aumento de la depresión cardiorrespiratoria y un mayor efecto hipotérmico.",
      severidad: "Grave"
    },
    {
      farmaco: "Medicamentos que contienen cloranfenicol",
      efecto: "Ralentizan la eliminación de los anestésicos.",
      severidad: "Grave"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "i.v.", dosis: "5–10 mg/kg." },
        { via: "i.m.", dosis: "7–25 mg/kg." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "i.v.", dosis: "5–7.5 mg/kg." },
        { via: "i.m.", dosis: "10–15 mg/kg." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Zolazepam potencia la actividad del GABA. Tiletamina antagoniza los receptores de ácido glutámico.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "Cuando se reconstituye contiene zolazepam 50 mg/ml y tiletamina 50 mg/ml (es decir, 100 mg/ml)." }
  ]
};
