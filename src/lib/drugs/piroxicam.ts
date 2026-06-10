import { Drug } from "@/lib/types/drug";

export const piroxicamDrug: Drug = {
  id: "piroxicam",
  meta_data: {
    nombre_generico: "Piroxicam",
    nombres_comerciales: ["Brexidol", "Feldene", "Piroxicam"],
    grupo_farmacologico: "AINE (Inhibidor de la COX)",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de ciertos tumores que expresan receptores COX (ej. carcinoma de células de transición de la vejiga, carcinoma prostático y carcinoma colorrectal y pólipos).",
    puntos_clave: [
      "Inhibe las enzimas COX, limitando la producción de prostaglandinas.",
      "También limita el crecimiento tumoral, aunque el mecanismo aún no se ha determinado."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Ulceración gástrica, enfermedad renal, uso concurrente de corticosteroides."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Como inhibidor no específico de la COX, puede causar efectos adversos generales asociados con los AINE, incluyendo toxicidad gastrointestinal, ulceración gástrica y necrosis papilar renal (particularmente si el paciente está deshidratado).",
      "Existe un pequeño riesgo de que los AINE puedan precipitar insuficiencia cardíaca."
    ]
  },
  interacciones: [
    {
      farmaco: "Corticosteroides u otros AINE",
      efecto: "Aumento del riesgo de ulceración gástrica.",
      severidad: "Grave"
    },
    {
      farmaco: "Diuréticos o aminoglucósidos",
      efecto: "Puede aumentar el riesgo de nefrotoxicidad.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Conejos",
      dosis: [{ via: "p.o.", dosis: "0.2 mg/kg q8h" }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "p.o.", dosis: "0.5–0.8 mg/kg q12h" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "La inhibición de las enzimas COX limita la producción de prostaglandinas implicadas en la inflamación. También limita el crecimiento tumoral, pero el mecanismo aún está por determinar.",
    farmacocinetica: "Altamente unido a proteínas."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas orales", concentracion_texto: "10 mg, 20 mg" },
    { tipo: "Tableta soluble oral", concentracion_texto: "20 mg" },
    { tipo: "Solución inyectable", concentracion_texto: "20 mg/ml" }
  ]
};