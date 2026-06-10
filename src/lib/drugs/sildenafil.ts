import { Drug } from '../drug.model';

export const sildenafilDrug: Drug = {
  id: 'sildenafil',
  meta_data: {
    nombre_generico: 'Sildenafilo',
    nombres_comerciales: ['Revatio', 'Viagra'],
    grupo_farmacologico: 'Inhibidor de la fosfodiesterasa tipo 5',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Vasodilatador de la vasculatura pulmonar.',
      'Reduce y previene la nefrotoxicidad por la administración de aminoglucósidos.',
      'Indicado para el tratamiento de la hipertensión arterial pulmonar.',
      'Contraindicado en hipotensión sistémica, insuficiencia hepática o renal significativa o trastornos hemorrágicos.',
      'Evitar el uso concomitante de nitratos.',
    ],
    usos_principales: 'Tratamiento de la hipertensión arterial pulmonar y prevención del daño renal cuando se trata con fármacos nefrotóxicos.',
  },
  informacion_cliente: [
    'Administrar según la pauta prescrita por el veterinario.',
    'Vigilar la aparición de efectos adversos como vómitos o mareos.',
    'No administrar junto con otros medicamentos sin consultar al veterinario.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['ratas'],
        indicacion: 'Efectos nefroprotectores',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 5,
          dosis_max: 5,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h'
      },
      {
        especie: ['ratas'],
        indicacion: 'Efectos respiratorios',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 2,
          dosis_max: 4.5,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h'
      }
    ]
  }
};
