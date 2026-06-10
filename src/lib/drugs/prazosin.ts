import { Drug } from "@/lib/types/drug";

export const prazosinDrug: Drug = {
  id: "prazosin",
  meta_data: {
    nombre_generico: "Prazosina",
    nombres_comerciales: ["Hypovase", "Prazosin"],
    grupo_farmacologico: "Bloqueador alfa-1 adrenérgico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Terapia adyuvante de la insuficiencia cardíaca congestiva secundaria a regurgitación mitral refractaria. Promoción del flujo de orina en pacientes con obstrucción uretral funcional y manejo de la hipertensión sistémica o pulmonar.",
    puntos_clave: [
      "Agente bloqueador alfa-1 postsináptico que causa vasodilatación arterial y venosa.",
      "La eficacia puede disminuir con el tiempo."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Hipotensión, insuficiencia renal."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Hipotensión, síncope, somnolencia, debilidad, trastornos gastrointestinales."
    ]
  },
  interacciones: [
    {
      farmaco: "Beta-bloqueadores (ej. propranolol) o diuréticos (ej. furosemida)",
      efecto: "Puede aumentar el riesgo de un efecto hipotensor de primera dosis.",
      severidad: "Moderada"
    },
    {
      farmaco: "Bloqueadores de los canales de calcio",
      efecto: "Puede causar hipotensión aditiva.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [{ via: "p.o.", dosis: "0.05–0.1 mg/kg q8h para la relajación del músculo liso uretral" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "La prazosina es un agente bloqueador alfa-1 postsináptico que causa vasodilatación arterial y venosa. Esto conduce a una reducción de la presión arterial y la resistencia vascular sistémica.",
    farmacocinetica: "Altamente unido a proteínas."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas orales", concentracion_texto: "0.5 mg, 1 mg, 2 mg, 5 mg" }
  ]
};