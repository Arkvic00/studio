import { Drug } from "@/lib/types/drug";

export const praziquantelDrug: Drug = {
  id: "praziquantel",
  meta_data: {
    nombre_generico: "Praziquantel",
    nombres_comerciales: ["Anthelmin", "Broadline Spot-on", "Cazitel", "Cestem", "Dolpac", "Droncit", "Droncit Spot-on", "Dronspot Spot-on", "Drontal", "Endoguard", "Fluke-Solve", "Milbactor", "Milbemax", "MilbeVet", "Milprazon", "Milpro", "NexGard", "Prazitel", "Profender Spot-on", "Veloxa", "WormCat", "WORMclear"],
    grupo_farmacologico: "Cestocida",
    status_regulatorio: "POM-V, NFA-VPS, AVM-GSL"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de trematodos y cestodos, incluyendo infecciones por trematodos de la piel y las branquias y tenias en peces ornamentales.",
    puntos_clave: [
      "Aumenta la permeabilidad de la membrana celular de los gusanos susceptibles, lo que resulta en la pérdida de calcio intracelular y parálisis."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales.",
      "Las personas que están o pueden quedar embarazadas no deben manipular soluciones que contengan emodepside."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar al mismo tiempo que cualquier otro tratamiento para peces o estanques.",
      "Apagar los filtros UV y de carbón durante 24 horas después de agregar el producto al agua.",
      "No usar (Fluke-Solve Plus) en estanques que contengan orfe (Leuciscus spp.) o tortugas de orejas rojas."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "La administración oral puede ocasionar anorexia, vómitos, letargo y diarrea."
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
      especie: "Hurones",
      dosis: [{ via: "p.o.", dosis: "5–10 mg/kg, repetir en 10–14 días" }]
    },
    {
      especie: "Conejos",
      dosis: [{ via: "p.o.", dosis: "5–10 mg/kg, repetir en 10 días" }]
    },
    {
      especie: "Jerbos, Ratas, Ratones",
      dosis: [{ via: "p.o.", dosis: "30 mg/kg q14d (por 3 tratamientos)" }]
    },
    {
      especie: "Primates",
      dosis: [
        { via: "p.o., i.m.", dosis: "20 mg/kg una vez (cestodos)" },
        { via: "p.o., i.m.", dosis: "15–20 mg/kg una vez (trematodos), pero podría necesitar repetirse a intervalos de 10 días o 40 mg/kg una vez" }
      ]
    },
    {
      especie: "Erizos",
      dosis: [{ via: "p.o.", dosis: "7 mg/kg, repetir en 14 días" }]
    },
    {
      especie: "Petauros del azúcar",
      dosis: [{ via: "p.o., s.c.", dosis: "5–10 mg/kg, repetir en 10–14 días" }]
    },
    {
      especie: "Aves",
      dosis: [{ via: "i.m., p.o.", dosis: "10-20 mg/kg, repetir en 10–14 días" }]
    },
    {
      especie: "Reptiles",
      dosis: [{ via: "p.o.", dosis: "5–8 mg/kg, repetir en 2 semanas en la mayoría de las especies" }]
    },
    {
      especie: "Anfibios",
      dosis: [
        { via: "p.o.", dosis: "8–24 mg/kg q7–21d" },
        { via: "Baño", dosis: "10 mg/l durante 3 horas, repetir q7–21d" }
      ]
    },
    {
      especie: "Peces",
      dosis: [{ via: "Inmersión", dosis: "2 mg/l, repetir cada 3 semanas por 3 dosis" }]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Cestocida que aumenta la permeabilidad de la membrana celular de los gusanos susceptibles, lo que resulta en la pérdida de calcio intracelular y parálisis. Esto permite que los parásitos sean fagocitados o digeridos.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Variedad de tabletas y pipetas spot-on", concentracion_texto: "Disponible solo o en combinación con otros agentes" },
    { tipo: "Polvo para inmersión", concentracion_texto: "Sachets de 10 g, 50 g, 100 g" }
  ]
};