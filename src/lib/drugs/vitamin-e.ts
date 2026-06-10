
import { Drug } from "@/lib/types/drug";

export const vitaminEDrug: Drug = {
  id: "vitamin-e",
  meta_data: {
    nombre_generico: "Vitamina E",
    nombres_comerciales: ["Alpha tocopheryl acetate", "Vitamin E suspension"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-VPS"
  },
  resumen_clinico: {
    usos_principales: "Pacientes con insuficiencia pancreática exocrina, enfermedad hepática (especialmente enfermedad de almacenamiento de cobre), y anécdoticamente para lupus discoide, demodicosis y fibrosis hepática.",
    puntos_clave: [
      "La suplementación es raramente necesaria en pequeños animales.",
      "Evitar formulaciones de vitaminas A, D3 y E para animales de granja por ser demasiado concentradas."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en pacientes con alto riesgo de trombosis.",
      "No usar en neonatos."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Trombosis.",
      "Se han reportado reacciones anafilactoides."
    ]
  },
  interacciones: [
    {
      farmaco: "Vitamina A",
      efecto: "La vitamina E puede potenciar la absorción, utilización y almacenamiento de la vitamina A.",
      severidad: "Moderada"
    },
    {
      farmaco: "Ciclosporina",
      efecto: "La vitamina E puede alterar la farmacocinética de la ciclosporina; monitorear los niveles de ciclosporina.",
      severidad: "Moderada"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "p.o.", dosis: "1.6–8.3 mg/kg q24h durante los primeros 30 días, luego según sea necesario." },
        { via: "p.o.", dosis: "Alternativamente, 100–400 UI/perro." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "p.o.", dosis: "1.6–8.3 mg/kg durante los primeros 30 días, luego según sea necesario." },
        { via: "p.o.", dosis: "Alternativamente, 30 UI/gato." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Antioxidante liposoluble que también regula la expresión génica y está involucrado en el metabolismo celular de los compuestos de azufre.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Suspensión oral", concentracion_texto: "20 mg/ml, 100 mg/ml." }
  ]
};
