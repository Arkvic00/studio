import type { Drug } from '@/lib/types';

export const chlortetracyclineDrug: Drug = {
  id: "chlortetracycline",
  meta_data: {
    nombre_generico: "Clortetraciclina (Clorhidrato de clortetraciclina)",
    nombres_comerciales: ["Ophtocycline"],
    grupo_farmacologico: "Tetraciclina de 1ª generación; Antibiótico oftálmico",
    status_regulatorio: "POM-V"
  },
  resumen_clinico: {
    puntos_clave: [
      "Inhibe la síntesis de proteínas bacterianas uniéndose a la subunidad 30S.",
      "Antibiótico tiempo y concentración-dependiente.",
      "Tratamiento de elección para conjuntivitis por Chlamydia en gatos (aunque la doxiciclina oral suele preferirse).",
      "Útil en el manejo de defectos epiteliales corneales crónicos espontáneos (SCCED) en perros por su efecto inmunomodulador.",
      "Amplio espectro contra Gram-positivos, Gram-negativos, Mycoplasma, Rickettsia y Chlamydia."
    ],
    usos_principales: "Tratamiento de queratitis, conjuntivitis y blefaritis causadas por Staphylococcus spp., Streptococcus spp., Proteus spp. y Pseudomonas spp. Manejo de conjuntivitis por Mycoplasma y Chlamydia.",
    inicio_accion: "Rápido (tópico)",
    duracion_efecto: "Requiere aplicaciones frecuentes (q6h)"
  },
  informacion_cliente: [
    "Evite el contacto directo de la piel con el ungüento.",
    "No permita que la punta del tubo toque el ojo u otras superficies para evitar la contaminación.",
    "Complete el curso de 5 días incluso si el ojo parece haber mejorado antes.",
    "Informe si nota que el ojo se vuelve más rojo o doloroso tras la aplicación."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Queratitis / Conjuntivitis / Blefaritis / SCCED",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "cm de ungüento"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas por 5 días",
          intervalo_horas: 6
        },
        notas_tecnicas: "Aplicar una tira de 0.5 a 2 cm en el saco conjuntival del ojo afectado."
      }
    ],
    gato: [
      {
        indicacion: "Conjuntivitis por Chlamydia / Mycoplasma",
        vias: ["Tópica ocular"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 1.25,
          dosis_min: 0.5,
          dosis_max: 2,
          unidad_calculo: "cm de ungüento"
        },
        frecuencia: {
          texto_ui: "Cada 6 horas por 5 días",
          intervalo_horas: 6
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Hipersensibilidad a las tetraciclinas."
    ],
    efectos_adversos: [
      "Irritación local transitoria.",
      "Seguridad en gestación y lactancia desconocida (usar con precaución)."
    ],
    monitoreo_recomendado: [
      "Integridad de la superficie corneal",
      "Resolución de los signos clínicos inflamatorios"
    ],
    instrucciones_manejo: "Observar precauciones normales; evitar contacto directo con la piel. Almacenar a temperatura ambiente.",
    sobredosis: {
      signos: ["Irritación ocular marcada"],
      tratamiento: "Lavar el ojo con abundante solución salina estéril."
    },
    interacciones_farmacologicas: []
  },
  farmacologia_clinica: {
    mecanismo_accion: "Inhibe la síntesis de proteínas bacterianas al unirse de forma reversible a la subunidad ribosomal 30S, bloqueando el acceso del aminoacil-tRNA al sitio aceptor en el complejo mRNA-ribosoma.",
    farmacocinetica: "Acción tópica local sobre la conjuntiva y la córnea."
  },
  presentaciones_comerciales: [
    {
      tipo: "Ungüento oftálmico",
      concentracion_texto: "10 mg/g (1%)",
      valor_concentracion: 10,
      unidad_concentracion: "mg/g",
      es_divisible: false
    }
  ]
};