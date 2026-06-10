
import { Drug } from "@/lib/types/drug";

export const vitaminB12Drug: Drug = {
  id: "vitamin-b12",
  meta_data: {
    nombre_generico: "Vitamina B12",
    nombres_comerciales: ["Cianocobalamina", "Hidroxocobalamina", "Anivit B12 250 and 1000", "Cobalaplex", "Cyanocobalamin PXN-B12", "Neo-Cytamen", "Vitbee 250 and 1000"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-VPS"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de la deficiencia de vitamina B12, que puede desarrollarse en pacientes con enfermedad malabsortiva significativa del íleon distal e insuficiencia pancreática exocrina.",
    puntos_clave: []
  },
  seguridad_y_manejo: {
    precauciones: [
      "Las preparaciones inyectables deben protegerse de la luz."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No administrar por vía i.v."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Hipersensibilidad al conservante de fenol en las soluciones inyectables (erupción, fiebre, urticaria)."
    ]
  },
  interacciones: [
    {
      farmaco: "Ninguno reportado",
      efecto: "",
      severidad: "N/A"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "s.c., i.m.", dosis: "0.02 mg/kg q7d por 4–6 semanas hasta normalizar la concentración sérica. Luego según sea necesario." },
        { via: "p.o.", dosis: "<10 kg: ½ cápsula/día o 1 cápsula cada dos días; 10–20 kg: 1 cápsula/día; >20 kg: 2 cápsulas/día. Ajustar según sea necesario." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "s.c., i.m.", dosis: "0.02 mg/kg q7d por aproximadamente 4 semanas hasta normalizar la concentración sérica. Luego según sea necesario." },
        { via: "p.o.", dosis: "<10 kg: ½ cápsula/día o 1 cápsula cada dos días. Ajustar según sea necesario." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Cofactor esencial para enzimas implicadas en la síntesis de ADN y ARN y en el metabolismo de los carbohidratos.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "0.25 mg/ml, 1 mg/ml soluciones." },
    { tipo: "Oral", concentracion_texto: "0.5 mg cápsula (Cianocobalamina)." }
  ]
};
