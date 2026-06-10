
import { Drug } from "@/lib/types/drug";

export const xylazineDrug: Drug = {
  id: "xylazine",
  meta_data: {
    nombre_generico: "Xilazina",
    nombres_comerciales: ["Chanazine", "Nerfasin", "Rompun", "Sedaxylan", "Virbaxyl", "Xylacare", "Xylapan"],
    grupo_farmacologico: "Agonista de los adrenoceptores alfa-2",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    usos_principales: "Sedación y premedicación, solo o en combinación. Anestesia quirúrgica de corta duración con ketamina. Prueba de estimulación de la hormona del crecimiento. Inducción de emesis en gatos.",
    puntos_clave: [
      "Ha sido reemplazado en gran medida por medetomidina o dexmedetomidina.",
      "Menos específico para el adrenoceptor alfa-2 que medetomidina y dexmedetomidina, con más efectos sobre el adrenoceptor alfa-1.",
      "Sensibiliza el miocardio a las arritmias por catecolaminas.",
      "Atipamezol puede usarse para revertir sus efectos en caso de sobredosis."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en animales con enfermedad cardiovascular o sistémica.",
      "No usar en pacientes geriátricos.",
      "No usar en animales gestantes.",
      "No se recomienda en animales diabéticos.",
      "Evitar cuando el vómito está contraindicado."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Diversos efectos en muchos sistemas de órganos.",
      "Diuresis, aumento transitorio de la glucosa en sangre, midriasis y disminución de la presión intraocular.",
      "El vómito después de la xilazina es común, especialmente en gatos."
    ]
  },
  interacciones: [
    {
      farmaco: "Otros agentes anestésicos",
      efecto: "Reduce significativamente la dosis de otros agentes anestésicos requeridos para mantener la anestesia.",
      severidad: "Importante"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { indicacion: "Prueba de respuesta de la hormona del crecimiento", via: "i.v.", dosis: "100 μg/kg." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { indicacion: "Emesis", via: "i.m.", dosis: "0.6 mg/kg una vez (efectivo en >75% de los gatos)." },
        { indicacion: "Emesis", via: "s.c.", dosis: "1 mg/kg una vez (efectivo en >75% de los gatos)." },
        { indicacion: "Prueba de supresión de la hormona del crecimiento", via: "i.v.", dosis: "100 μg/kg." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Agonista de los adrenoceptores alfa-2 periféricos y centrales, produciendo sedación, relajación muscular y analgesia dependientes de la dosis.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Solución inyectable", concentracion_texto: "20 mg/ml." }
  ]
};
