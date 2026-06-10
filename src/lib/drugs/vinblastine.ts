
import { Drug } from "@/lib/types/drug";

export const vinblastineDrug: Drug = {
  id: "vinblastine",
  meta_data: {
    nombre_generico: "Vinblastina",
    nombres_comerciales: ["Velbe", "Vinblastine"],
    grupo_farmacologico: "Alcaloide de la Vinca",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    usos_principales: "Se utiliza con menos frecuencia que la vincristina para el tratamiento de trastornos linfoproliferativos, junto con prednisolona para el tratamiento de mastocitomas caninos y para el tratamiento de carcinomas de células de transición de la vejiga.",
    puntos_clave: [
      "Usar con cuidado en pacientes con función hepática anormal; se recomienda reducir la dosis.",
      "Potencialmente un sustrato neurotóxico de la glucoproteína P, usar con precaución en razas de pastoreo (por ejemplo, collies) que puedan tener la mutación genética (ABCB1 (MDR1)) que causa una glucoproteína no funcional.",
      "El fármaco es irritante local y debe administrarse i.v. a través de un catéter cuidadosamente colocado previamente."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Fármaco citotóxico; consulte el Apéndice y los textos especializados para obtener más consejos sobre agentes quimioterapéuticos.",
      "Almacenar bajo refrigeración."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "Supresión de la médula ósea, se recomienda una reducción de la dosis en pacientes con disfunción hepática."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "La principal toxicidad limitante de la dosis es la mielosupresión con neutropenia.",
      "También pueden ocurrir mucositis, estomatitis, íleo, dolor de mandíbula/músculo, pérdida de los reflejos tendinosos profundos y toxicidad del tracto gastrointestinal.",
      "Los gatos pueden desarrollar neurotoxicidad que se manifiesta como estreñimiento y/o íleo."
    ]
  },
  interacciones: [
    {
      farmaco: "Inhibidores del sistema del citocromo P450 hepático (bloqueadores de los canales de calcio, cimetidina, ciclosporina, eritromicina, metoclopramida e itraconazol)",
      efecto: "Pueden reducir el metabolismo y, por lo tanto, aumentar la toxicidad de la vinblastina.",
      severidad: "Importante"
    },
    {
      farmaco: "Inhibidores de la glucoproteína P (ciclosporina, verapamilo, fenotiazinas e itraconazol)",
      efecto: "Pueden aumentar la toxicidad.",
      severidad: "Importante"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { via: "i.v.", dosis: "1.5–3 mg/m2 cada 7–14 días (dependiendo del protocolo utilizado)" }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { via: "i.v.", dosis: "1.5–3 mg/m2 cada 7–14 días (dependiendo del protocolo utilizado)" }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Interfiere con el ensamblaje de los microtúbulos, provocando la detención de la metafase y, en última instancia, la muerte celular.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Inyectable", concentracion_texto: "1 mg/ml solución" }
  ]
};
