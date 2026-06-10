import { Drug } from "@/lib/types/drug";

export const phenylephrineDrug: Drug = {
  id: "phenylephrine",
  meta_data: {
    nombre_generico: "Fenilefrina",
    nombres_comerciales: ["Phenylephrine hydrochloride"],
    grupo_farmacologico: "Agente simpaticomimético alfa-adrenérgico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Midriasis preoperatoria, diagnóstico del síndrome de Horner, vasoconstricción oftálmica.",
    puntos_clave: [
      "Aplicado tópicamente al ojo causa vasoconstricción y midriasis.",
      "Usado para diferenciar la vasculatura conjuntival superficial de la episcleral profunda.",
      "Los vasoconstrictores deben usarse con cuidado ya que pueden comprometer la perfusión de órganos vitales."
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
      "Hipertensión",
      "Taquicardia",
      "Bradicardia refleja"
    ]
  },
  interacciones: [
    {
      farmaco: "Digoxina o agentes anestésicos volátiles",
      efecto: "Riesgo de arritmias.",
      severidad: "Moderada"
    },
    {
      farmaco: "Agentes oxitócicos",
      efecto: "Los efectos presores pueden ser potenciados, llevando a hipertensión severa.",
      severidad: "Grave"
    }
  ],
  dosis: [
    {
      especie: "Mamíferos",
      dosis: [
        { indicacion: "Uso oftálmico preoperatorio", via: "Tópico", dosis: "1 gota aprox. 2 horas antes de la cirugía intraocular." },
        { indicacion: "Vasoconstricción", via: "Tópico", dosis: "1 gota como dosis única." },
        { indicacion: "Diagnóstico del síndrome de Horner", via: "Tópico", dosis: "1 gota en ambos ojos." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Estimula directamente los receptores alfa-adrenérgicos en la musculatura del dilatador del iris.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución inyectable", concentracion_texto: "1% (10 mg/ml)" },
    { tipo: "Solución oftálmica", concentracion_texto: "2.5%, 10% (viales de dosis única)" }
  ]
};