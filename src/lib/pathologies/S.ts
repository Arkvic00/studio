import type { Pathology } from '../types';

export const pathologiesS: Pathology[] = [
  {
    id: 'estomatocitosis',
    nombre: 'Estomatocitosis',
    descripcion: 'Anomalía de los glóbulos rojos donde presentan una palidez central en forma de boca.',
    etiology: 'Defecto en la membrana del eritrocito, a menudo asociado a condrodisplasia en el Malamute.',
    sintomas: [
      'Anemia hemolítica leve a moderada',
      'Fragilidad osmótica aumentada',
      'Suele ser un hallazgo incidental en hemogramas'
    ],
    diagnostico: [
      'Frotis de sangre periférica',
      'Hemograma completo'
    ],
    tratamiento: 'Generalmente no requiere tratamiento específico a menos que la anemia sea severa.',
    prevencion_control: 'Monitoreo en razas predispuestas.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-glandulas-sebaceas',
    nombre: 'Tumores de Glándulas Sebáceas',
    descripcion: 'Crecimientos neoplásicos en las glándulas productoras de sebo de la piel.',
    etiology: 'Desconocida; muy comunes en perros geriátricos.',
    sintomas: [
      'Nódulos cutáneos pequeños y verrugosos',
      'Pueden estar ulcerados o sangrar',
      'Crecimiento lento'
    ],
    diagnostico: [
      'Citología (PAF)',
      'Biopsia e histopatología (para diferenciar adenoma de epitelioma)'
    ],
    tratamiento: 'Extirpación quirúrgica o criocirugía si molestan al animal o se infectan.',
    prevencion_control: 'Revisiones cutáneas periódicas.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
