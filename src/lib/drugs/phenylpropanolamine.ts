import { Drug } from "@/lib/types/drug";

export const phenylpropanolamineDrug: Drug = {
  id: "phenylpropanolamine",
  meta_data: {
    nombre_generico: "Fenilpropanolamina",
    nombres_comerciales: ["Diphenylpyraline", "Proin", "Propalin", "Urilin"],
    grupo_farmacologico: "Agente simpaticomimético",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de la incontinencia secundaria a la incompetencia del esfínter urinario. También puede ser útil en el manejo de la congestión nasal.",
    puntos_clave: [
      "Aumenta la resistencia del flujo de salida uretral.",
      "La incontinencia puede recurrir si las dosis se retrasan o se omiten.",
      "El inicio de la acción puede tardar varios días."
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
      "Inquietud, agresividad, irritabilidad e hipertensión.",
      "Se ha reportado cardiotoxicidad."
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
      especie: "Conejos",
      dosis: [
        { via: "p.o.", dosis: "5–10 mg/conejo q12h, reduciendo gradualmente a la dosis efectiva más baja." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Aumenta la resistencia del flujo de salida uretral y tiene algunos efectos vasoconstrictores periféricos.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Jarabe oral", concentracion_texto: "40 mg/ml de fenilpropanolamina (equivalente a 50 mg/ml de clorhidrato de fenilpropanolamina)" },
    { tipo: "Tabletas orales", concentracion_texto: "15 mg y 50 mg de clorhidrato de fenilpropanolamina (equivalentes a 12 mg y 40 mg de fenilpropanolamina, respectivamente)" }
  ]
};