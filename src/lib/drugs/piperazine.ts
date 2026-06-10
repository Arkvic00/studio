import { Drug } from "@/lib/types/drug";

export const piperazineDrug: Drug = {
  id: "piperazine",
  meta_data: {
    nombre_generico: "Piperazina",
    nombres_comerciales: ["Biozine", "Easy Round Wormer", "Piperazine Citrate Worm Tablets", "Puppy Easy Worm Syrup", "Roundworm", "Soluverm"],
    grupo_farmacologico: "Antihelmíntico (Anti-ascaridiano)",
    status_regulatorio: "AVM-GSL"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de infecciones por Ascaris spp. Ineficaz contra tenias y gusanos pulmonares. Puede usarse en animales gestantes. Tratamiento de nematodos gastrointestinales no enquistados en peces.",
    puntos_clave: [
      "Bloquea la acetilcolina, afectando la neurotransmisión y paralizando al gusano adulto.",
      "No tiene actividad larvicida."
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
      "Poco comunes, pero ocasionalmente se han reportado vómitos o temblores musculares y ataxia."
    ]
  },
  interacciones: [
    {
      farmaco: "Pirantel",
      efecto: "Mecanismos de acción antagónicos; no usar juntos.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Hurones",
      dosis: [{ via: "p.o.", dosis: "50–100 mg/kg, repetir en 2–3 semanas" }]
    },
    {
      especie: "Conejos",
      dosis: [{ via: "p.o.", dosis: "200 mg/kg, repetir en 2–3 semanas" }]
    },
    {
      especie: "Chinchillas",
      dosis: [{ via: "p.o.", dosis: "100 mg/kg q24h por 2 dosis" }]
    },
    {
      especie: "Primates",
      dosis: [{ via: "p.o.", dosis: "65 mg/kg q24h por 10 días" }]
    },
    {
      especie: "Petauros del azúcar",
      dosis: [{ via: "p.o.", dosis: "50 mg/kg q24h" }]
    },
    {
      especie: "Cobayas, Hámsters",
      dosis: [{ via: "En agua", dosis: "10 mg/ml (7 días sí, 7 días no, 7 días sí)" }]
    },
    {
      especie: "Ratas, Ratones",
      dosis: [{ via: "En agua", dosis: "4–5 mg/ml (7 días sí, 7 días no, 7 días sí)" }]
    },
    {
      especie: "Palomas",
      dosis: [{ via: "En agua", dosis: "1.9 g/l de agua" }]
    },
    {
      especie: "Paseriformes",
      dosis: [{ via: "En agua", dosis: "3.7 g/l de agua durante 12h. Repetir en 2–3 semanas." }]
    },
    {
      especie: "Anfibios",
      dosis: [{ via: "p.o.", dosis: "50 mg/kg, repetir en 14 días" }]
    },
    {
      especie: "Peces",
      dosis: [
        { via: "En alimento", dosis: "10 mg/kg en el alimento q24h por 3 dosis" },
        { via: "En alimento", dosis: "110 mg/kg en el alimento una vez" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Un antihelmíntico anti-ascaridial que bloquea la acetilcolina, afectando así la neurotransmisión y paralizando al gusano adulto; no tiene actividad larvicida.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Tabletas orales", concentracion_texto: "100 mg, 105 mg, 416 mg, 500 mg" },
    { tipo: "Polvo oral", concentracion_texto: "500 mg/g (50% p/p), 510 mg/g (51% p/p)" },
    { tipo: "Jarabe oral", concentracion_texto: "58 mg/ml" }
  ]
};