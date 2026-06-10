import { Drug } from "@/lib/types/drug";

export const phenoxybenzamineDrug: Drug = {
  id: "phenoxybenzamine",
  meta_data: {
    nombre_generico: "Fenoxibenzamina",
    nombres_comerciales: ["Dibenyline"],
    grupo_farmacologico: "Bloqueador alfa-adrenérgico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Disinergia refleja/espasmo uretral. Control de la hipertensión preoperatoria en casos de feocromocitoma.",
    puntos_clave: [
      "Bloquea irreversiblemente los receptores alfa-adrenérgicos presinápticos y postsinápticos (simpatectomía química).",
      "Si se usan beta-bloqueadores concurrentemente, iniciarlos solo después de que el bloqueo alfa esté establecido (para evitar una crisis hipertensiva).",
      "Usar con extrema precaución en animales con enfermedad cardiovascular preexistente."
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
    puntos_clave: ["Hipotensión", "Miosis", "Taquicardia", "Congestión nasal"]
  },
  interacciones: [
    {
      farmaco: "Beta-bloqueadores o diuréticos",
      efecto: "Aumento del riesgo de un efecto hipotensor con la primera dosis.",
      severidad: "Moderada"
    },
    {
      farmaco: "Agentes simpaticomiméticos alfa-adrenérgicos (ej. fenilefrina)",
      efecto: "La fenoxibenzamina antagonizará los efectos.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [{ via: "p.o.", dosis: "0.5–1 mg/kg q12h" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Un bloqueador alfa-adrenérgico que bloquea irreversiblemente los receptores presinápticos y postsinápticos, produciendo una llamada simpatectomía química.",
    farmacocinetica: "Inicio de acción lento (24-48h), duración prolongada del efecto (días, debido a la unión irreversible)."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsula oral", concentracion_texto: "10 mg" },
    { tipo: "Solución inyectable", concentracion_texto: "50 mg/ml" }
  ]
};