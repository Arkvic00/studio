import { Drug } from "@/lib/types/drug";

export const prednisoloneDrug: Drug = {
  id: "prednisolone",
  meta_data: {
    nombre_generico: "Prednisolona",
    nombres_comerciales: ["PLT", "Prednicare", "Prednidale", "Pred-forte"],
    grupo_farmacologico: "Corticosteroide",
    status_regulatorio: "POM-V, POM"
  },
  resumen_clinico: {
    usos_principales: "Manejo de condiciones alérgicas/inflamatorias crónicas (ej. atopia, enfermedad inflamatoria intestinal), condiciones inmunomediadas, hipoadrenocorticismo y neoplasias linfoproliferativas y otras.",
    puntos_clave: [
      "Tiene aproximadamente 4 veces la potencia antiinflamatoria y la mitad de la potencia mineralocorticoide relativa de la hidrocortisona.",
      "Se considera que tiene una duración de actividad intermedia y es adecuada para uso en días alternos.",
      "Los animales en terapia crónica deben ser retirados gradualmente de sus esteroides al suspender el medicamento."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Agitar la suspensión antes de usar."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales gestantes.",
      "Generalmente contraindicado en pacientes con enfermedad renal y diabetes mellitus.",
      "Los corticosteroides tópicos están contraindicados en la queratitis ulcerosa."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "El uso prolongado suprime el eje hipotalámico-pituitario-adrenal (HPA), causando atrofia adrenal.",
      "Puede causar proteinuria significativa y cambios glomerulares.",
      "Efectos catabólicos conducen a pérdida de peso y atrofia cutánea.",
      "Hiperadrenocorticismo iatrogénico con uso crónico.",
      "Vómitos, diarrea y ulceración gastrointestinal.",
      "Hiperglucemia y disminución de los valores séricos de T4.",
      "Usar con cuidado en aves y conejos.",
      "Los hurones son particularmente susceptibles a la ulceración gastrointestinal."
    ]
  },
  interacciones: [
    {
      farmaco: "AINEs",
      efecto: "Aumento del riesgo de ulceración gastrointestinal.",
      severidad: "Grave"
    },
    {
      farmaco: "Acetazolamida, amfotericina B, diuréticos que depletan potasio",
      efecto: "Puede desarrollarse hipopotasemia.",
      severidad: "Moderada"
    },
    {
      farmaco: "Insulina",
      efecto: "Los glucocorticoides pueden antagonizar el efecto de la insulina.",
      severidad: "Moderada"
    },
    {
      farmaco: "Fenitoína o fenobarbital",
      efecto: "El metabolismo de los corticosteroides puede ser mejorado.",
      severidad: "Leve"
    },
    {
      farmaco: "Antifúngicos (ej. itraconazol)",
      efecto: "El metabolismo de los corticosteroides puede ser disminuido.",
      severidad: "Leve"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [
        { indicacion: "Linfoma; antiinflamatorio", via: "p.o.", dosis: "1–2 mg/kg q24h" },
        { indicacion: "Manejo postoperatorio de adrenalectomía", via: "p.o.", dosis: "0.25–0.5 mg/kg q12h, disminuir a q48h" }
      ]
    },
    {
      especie: "Conejos",
      dosis: [{ indicacion: "Antiinflamatorio", via: "p.o.", dosis: "0.25–0.5 mg/kg q12h por 3 días, luego q24h por 3 días, luego q48h" }]
    },
    {
      especie: "Primates",
      dosis: [
        { indicacion: "Antiinflamatorio", via: "p.o., s.c., i.m.", dosis: "0.5 mg/kg q24h" },
        { indicacion: "Alergia, enfermedad autoinmune", via: "p.o., s.c., i.m.", dosis: "hasta 2 mg/kg q24h" }
      ]
    },
    {
      especie: "Petauros del azúcar",
      dosis: [{ indicacion: "Antiinflamatorio", via: "p.o., s.c., i.m.", dosis: "0.1–0.2 mg/kg q24h" }]
    },
    {
      especie: "Erizos",
      dosis: [{ indicacion: "Alergia", via: "p.o., s.c., i.m.", dosis: "2.5 mg/kg q12h" }]
    },
    {
      especie: "Oftálmico",
      dosis: [{ via: "Tópico", dosis: "1 gota en el ojo(s) afectado(s) q4–24h, disminuyendo en respuesta a la terapia." }]
    },
    {
      especie: "Aves",
      dosis: [{ indicacion: "Prurito", via: "p.o.", dosis: "1 mg/kg q12h, reducido a la dosis mínima efectiva tan pronto como sea posible." }]
    },
    {
      especie: "Reptiles",
      dosis: [
        { indicacion: "Antiinflamatorio", via: "p.o.", dosis: "2–5 mg/kg q24–48h" },
        { indicacion: "Protocolo de quimioterapia", via: "p.o.", dosis: "usado a 2 mg/kg q24h por 2 semanas, luego 1 mg/kg q24h en una iguana verde con linfoma y a 1 mg/kg q24h en dragones barbudos con leucemia linfoide" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Se une a receptores citoplasmáticos específicos que luego ingresan al núcleo y alteran la transcripción del ADN, lo que lleva a alteraciones en el metabolismo celular que resultan en efectos antiinflamatorios, inmunosupresores y antifibróticos. También tiene actividad glucocorticoide.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensiones oftálmicas", concentracion_texto: "0.5%, 1%" },
    { tipo: "Solución inyectable", concentracion_texto: "10 mg/ml" },
    { tipo: "Suspensión inyectable", concentracion_texto: "7.5 mg/ml (más 2.5 mg/ml de dexametasona)" },
    { tipo: "Tabletas orales", concentracion_texto: "1 mg, 5 mg, 25 mg" }
  ]
};