import type { Drug } from '@/lib/types';

export const clazurilDrug: Drug = {
  id: "clazuril",
  meta_data: {
    nombre_generico: "Clazuril",
    nombres_comerciales: ["Appertex", "Harkers CoxiTabs"],
    grupo_farmacologico: "Antiprotozoario (Coccidiocida)",
    status_regulatorio: "AVM-GSL, ESPA"
  },
  resumen_clinico: {
    puntos_clave: [
      "Agente coccidiocida altamente efectivo contra Eimeria spp.",
      "Uso principal en palomas mensajeras y de exhibición.",
      "Recomendado tras el transporte a exposiciones o carreras por el riesgo de exposición.",
      "Suele requerir una única dosis para palomas y rapaces."
    ],
    usos_principales: "Tratamiento y control de la coccidiosis (Eimeria labbeana, E. columbarum) en aves.",
    inicio_accion: "Rápido",
    duracion_efecto: "Variable (según carga parasitaria)"
  },
  informacion_cliente: [
    "Tratar a todas las aves del palomar o aviario al mismo tiempo.",
    "No utilizar en aves destinadas al consumo humano.",
    "Informe al veterinario si el ave está recibiendo otros medicamentos, especialmente si causan vómitos.",
    "Mantener una higiene rigurosa del entorno para evitar la reinfección."
  ],
  parametros_dosificacion: {
    ave: [
      {
        indicacion: "Palomas: Coccidiosis (Cancro)",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7.5,
          dosis_min: 5,
          dosis_max: 10,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única (Tratar a todas las aves simultáneamente)",
          intervalo_horas: 0
        }
      },
      {
        indicacion: "Aves Rapaces: Coccidiosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 30,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Dosis única",
          intervalo_horas: 0
        }
      },
      {
        indicacion: "Psitácidas: Coccidiosis",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 7,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 48 horas (Total 2 dosis)",
          intervalo_horas: 48
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Aves destinadas al consumo humano."
    ],
    efectos_adversos: [
      "No hay información específica de efectos adversos reportados en las especies indicadas."
    ],
    monitoreo_recomendado: [
      "Recuento de oocistos en heces post-tratamiento",
      "Estado general de salud del ave"
    ],
    instrucciones_manejo: "Observar precauciones normales de higiene.",
    sobredosis: {
      signos: ["No reportados"],
      tratamiento: "Soporte sintomático."
    },
    interacciones_farmacologicas: [
      {
        farmaco: "Fármacos eméticos",
        efecto: "No administrar con fármacos que puedan causar vómito, ya que se pierde la eficacia de la tableta.",
        severidad: "Importante"
      }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Coccidiocida; el mecanismo de acción exacto no está totalmente aclarado pero interrumpe el ciclo de vida del parásito.",
    farmacocinetica: "Absorción oral rápida en aves."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "2.5 mg",
      valor_concentracion: 2.5,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
