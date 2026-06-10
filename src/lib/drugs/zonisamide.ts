
import { Drug } from "@/lib/types/drug";

export const zonisamideDrug: Drug = {
  id: "zonisamide",
  meta_data: {
    nombre_generico: "Zonisamida",
    nombres_comerciales: ["Zonegran"],
    grupo_farmacologico: "Anticonvulsivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Terapia adyuvante en perros y gatos refractarios a la terapia anticonvulsiva estándar.",
    puntos_clave: [
      "Es un anticonvulsivo sulfonamida.",
      "Bien absorbido con una vida media de 15 a 17 horas en el perro.",
      "Metabolizado por el hígado y excretado principalmente por los riñones."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Evitar su uso en pacientes con insuficiencia hepática grave.",
      "No usar en animales gestantes.",
      "No suspender bruscamente."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Se han reportado ataxia, sedación, vómitos y anorexia en algunos perros y, experimentalmente, en gatos."
    ]
  },
  interacciones: [
    {
      farmaco: "Fenobarbital",
      efecto: "Aumenta el aclaramiento de la zonisamida hasta 10 semanas después de la interrupción del fenobarbital. Considere usar dosis en el extremo superior del rango de dosis si se usa como adyuvante al fenobarbital.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "p.o.", dosis: "Dosis inicial de 5–10 mg/kg q12h." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "p.o.", dosis: "Se sugiere una dosis inicial de 5–10 mg/kg q24h." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "El modo de acción exacto es desconocido, pero se especula que puede ejercer su efecto bloqueando el disparo repetitivo de los canales de sodio dependientes de voltaje, inhibiendo los canales de calcio y modulando la neurotransmisión GABAérgica y glutamatérgica.",
    farmocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas orales", concentracion_texto: "25 mg, 50 mg, 100 mg." }
  ]
};
