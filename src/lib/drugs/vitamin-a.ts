
import { Drug } from "@/lib/types/drug";

export const vitaminADrug: Drug = {
  id: "vitamin-a",
  meta_data: {
    nombre_generico: "Vitamina A",
    nombres_comerciales: ["Retinol", "Isotretinoina", "Tretinoina", "Isotrex", "Isotrexin", "Roaccutane"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de la hipovitaminosis A y, junto con otras terapias, para la adenitis sebácea o la seborrea primaria en Cocker Spaniels.",
    puntos_clave: [
      "Monitorizar por toxicidad de vitamina A en animales con dosificación oral.",
      "Evitar el uso concurrente de preparaciones orales y tópicas por toxicidad.",
      "No usar formulaciones para animales de granja o caballos por ser demasiado concentradas."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Teratogénico; usar guantes al aplicar preparaciones tópicas.",
      "Evitar contacto con ojos, boca o mucosas.",
      "Minimizar la exposición a la luz solar."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales gestantes."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Humanos: efectos en piel, hematológicos, hepatotoxicidad, sistema nervioso y óseo. Similares en perros y gatos a dosis altas.",
      "Teratogénico en el primer trimestre o a dosis altas.",
      "Enrojecimiento y pigmentación de la piel.",
      "Puede causar queratoconjuntivitis seca (KCS).",
      "Puede causar hiperlipidemia y ser hepatotóxico a dosis altas.",
      "El uso prolongado puede causar pérdida de calcio óseo e hipercalcemia.",
      "No usar preparaciones tópicas con otros fármacos tópicos simultáneamente."
    ]
  },
  interacciones: [
    {
      farmaco: "Ciclosporina",
      efecto: "La vitamina A oral puede alterar los niveles de ciclosporina, que deben ser monitoreados de cerca.",
      severidad: "Moderada"
    },
    {
      farmaco: "Otros fármacos",
      efecto: "Numerosas interacciones dependiendo de la preparación y la vía. Consultar textos especializados.",
      severidad: "Variable"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { indicacion: "Hipovitaminosis A", via: "i.m.", dosis: "10,000–100,000 UI/perro q3d (máx. 2 dosis)" },
        { indicacion: "Hipovitaminosis A", via: "p.o.", dosis: "10,000 UI/perro q24h por 3 días" },
        { indicacion: "Lesiones dermatológicas", via: "p.o.", dosis: "10,000 UI/perro q24h" },
        { indicacion: "Lesiones dermatológicas", via: "Tópica", dosis: "Aplicar gel/crema de isotretinoína/tretinoína en piel limpia q12h" },
        { indicacion: "Lesiones dermatológicas", via: "p.o.", dosis: "1 mg isotretinoína/kg q12h por 1 mes, luego reducir a q24h si hay mejoría" }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { indicacion: "Hipovitaminosis A", via: "i.m.", dosis: "10,000–100,000 UI/gato q3d (máx. 2 dosis)" },
        { indicacion: "Hipovitaminosis A", via: "p.o.", dosis: "10,000 UI/gato q24h por 3 días" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Hormona nutricional liposoluble que regula la expresión génica. La tretinoína (ácido retinoico todo-trans) es la forma ácida de la vitamina A, y la isotretinoína (ácido 13-cis retinoico) es un isómero de la tretinoína.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "50,000 IU/ml (retinol)" },
    { tipo: "Cápsulas Orales", concentracion_texto: "10 mg, 20 mg (isotretinoína)" },
    { tipo: "Gel Tópico", concentracion_texto: "0.05% (isotretinoína)" }
  ]
};
