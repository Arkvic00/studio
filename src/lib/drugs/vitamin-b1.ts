
import { Drug } from "@/lib/types/drug";

export const vitaminB1Drug: Drug = {
  id: "vitamin-b1",
  meta_data: {
    nombre_generico: "Vitamina B1",
    nombres_comerciales: ["Tiamina", "Vitamin B1"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-V, venta general"
  },
  resumen_clinico: {
    usos_principales: "Suplemento en animales deficientes, y puede ser beneficioso en envenenamiento por plomo e intoxicación por etilenglicol.",
    puntos_clave: [
      "La deficiencia puede ocurrir en animales alimentados con dietas de pescado crudo o productos de soja sin cocinar."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Proteger del aire y la luz.",
      "Los viales multidosis requieren técnica aséptica."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales gestantes a menos que sea absolutamente necesario."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Anafilaxia con uso i.v.; diluir y/o administrar lentamente.",
      "Efectos adversos documentados en animales gestantes."
    ]
  },
  interacciones: [
    {
      farmaco: "Agentes bloqueadores neuromusculares",
      efecto: "La tiamina puede potenciar su actividad.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { indicacion: "Deficiencia de Vitamina B1", via: "i.m., s.c., p.o.", dosis: "50–250 mg/perro q12–24h por varios días hasta que los signos se resuelvan." },
        { indicacion: "Envenenamiento por plomo", via: "i.m., s.c.", dosis: "2 mg/kg q12h." },
        { indicacion: "Intoxicación por etilenglicol", via: "i.m., s.c., p.o.", dosis: "100 mg/perro q24h." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { indicacion: "Deficiencia de Vitamina B1", via: "i.m., s.c.", dosis: "10–25 mg/gato q12–24h por varios días hasta que los signos se resuelvan." },
        { indicacion: "Deficiencia de Vitamina B1", via: "i.m.", dosis: "10–20 mg/kg hasta que los signos se resuelvan, luego 10 mg/kg p.o. por 21 días." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Cofactor para enzimas en el metabolismo de los carbohidratos, formando tiamina difosfato/pirofosfato de tiamina. No afecta la glucosa en sangre.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "100 mg/ml solución (autorizado para uso veterinario, aunque solo en animales de granja)." },
    { tipo: "Oral", concentracion_texto: "Varios." }
  ]
};
