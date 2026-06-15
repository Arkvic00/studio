import type { Drug } from '../drugs.types';

export const proligestoneDrug: Drug = {
    id: "proligestone",
    meta_data: {
      nombre_generico: "Proligestona",
      nombres_comerciales: ["Delvosteron"],
      grupo_farmacologico: "Hormonal (Progestágeno)",
      status_regulatorio: "POM-V",
    },
    resumen_clinico: {
      puntos_clave: [
        "Análogo de la progesterona.",
        "Autorizado en hurones para prevenir problemas asociados a estro prolongado.",
        "Usado en conejos para tratamiento y prevención de pseudopreñez.",
        "Puede causar cambios de color en el pelaje en el sitio de inyección.",
      ],
      usos_principales: "Prevención de patologías asociadas al estro en hurones, tratamiento y prevención de pseudopreñez en conejos.",
      inicio_accion: "Variable",
      duracion_efecto: "Variable",
    },
    informacion_cliente: [
      "Evitar en animales diabéticos.",
      "Puede causar cambios de humor, aumento de sed o apetito.",
      "Puede ocurrir irritación en el sitio de inyección.",
    ],
    farmacologia_y_seguridad: {
      farmacodinamia: "Altera la transcripción del ADN, imitando los efectos de la progesterona.",
      contraindicaciones: [
        "Animales diabéticos (requerimientos de insulina pueden cambiar).",
        "No usar en aves.",
      ],
      efectos_adversos: [
        "Cambios de temperamento (apatía, depresión).",
        "Poliuria/polidipsia, polifagia.",
        "Hiperplasia endometrial quística/piometra.",
        "Diabetes mellitus, acromegalia.",
        "Supresión adrenal.",
        "Agrandamiento mamario/neoplasia, lactación.",
        "Irritación o calcinosis en el sitio de inyección.",
      ],
      interacciones_farmacologicas: [],
      monitoreo_recomendado: ["Niveles de glucosa en sangre en pacientes diabéticos.", "Vigilar signos de piometra o problemas mamarios."],
      instrucciones_manejo: "Observar precauciones normales. En animales de piel fina o de exposición, inyectar en el lado medial del pliegue del flanco.",
      sobredosis: {},
    },
    parametros_dosificacion: {
      mamiferos: [
        { especie: "Hurón", via: "s.c.", dosis: "50 mg/hurón. Si no hay respuesta, 25 mg/hurón después de 7 días, y repetir a los 7 días.", notas: "Indicado para prevenir problemas asociados a estro prolongado." },
        { especie: "Conejo", via: "s.c.", dosis: "30 mg/kg", notas: "Para pseudopreñez." },
      ],
      aves: [
          { especie: "General", dosis: "No usar", notas: "" }
      ]
    },
    presentaciones_comerciales: [
      { tipo: "Inyectable", concentracion_texto: "100 mg/ml suspensión", valor_concentracion: 100, unidad_concentracion: "mg/ml", es_divisible: false },
    ]
  };