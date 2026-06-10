
import { Drug } from "@/lib/types/drug";

export const zidovudineDrug: Drug = {
  id: "zidovudine",
  meta_data: {
    nombre_generico: "Zidovudina",
    nombres_comerciales: ["Azidotimidina", "AZT", "Retrovir"],
    grupo_farmacologico: "Inhibidor de la transcriptasa inversa análogo de nucleósidos",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Tratamiento de gatos positivos a FIV.",
    puntos_clave: [
      "En gatos sin signos clínicos, puede retrasar la aparición de la fase clínica.",
      "En gatos con signos clínicos, puede mejorar la recuperación en combinación con otras terapias.",
      "La combinación de zidovudina con lamivudina parece ser más efectiva para reducir la carga viral y aumentar los ratios CD4/CD8 que la zidovudina sola.",
      "Se recomienda el monitoreo hematológico."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No administrar a animales con anemia o leucopenia severa."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Hepatotoxicidad y anemia severa pueden ocurrir a dosis más altas de las recomendadas.",
      "No se han determinado los efectos adversos a largo plazo de las dosis más bajas."
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
      especie: "Gatos",
      dosis: [
        { indicacion: "Infección por FIV", via: "p.o., s.c.", dosis: "5 mg/kg diarios q12h. La dosis puede aumentarse a 10 mg/kg q12h." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Inhibición competitiva de la transcriptasa inversa. Requiere activación a la forma 5'-trifosfato por quinasas celulares.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Cápsulas orales", concentracion_texto: "100 mg, 250 mg." },
    { tipo: "Jarabe oral", concentracion_texto: "50 mg/5 ml." },
    { tipo: "Solución inyectable para infusión i.v.", concentracion_texto: "10 mg/ml." }
  ]
};
