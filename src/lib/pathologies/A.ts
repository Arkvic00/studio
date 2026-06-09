import type { Pathology } from '../types';

export const pathologiesA: Pathology[] = [
  {
    id: 'alopecia-estacional-flancos',
    nombre: 'Alopecia Estacional de los Flancos',
    descripcion: 'Pérdida de pelo no inflamatoria que ocurre de forma cíclica y suele estar relacionada con el fotoperiodo.',
    etiology: 'Desconocida, se sospecha de una respuesta anormal de los folículos pilosos a los cambios en la luz solar y niveles de melatonina. No es de origen hormonal sexual.',
    sintomas: [
      'Alopecia bilateral simétrica en los flancos',
      'Piel hiperpigmentada (oscura) en áreas calvas',
      'Bordes de la lesión irregulares ("mapiformes")',
      'Ausencia de prurito (no pica)'
    ],
    diagnostico: [
      'Historia clínica (estacionalidad)',
      'Raspado cutáneo (para descartar parásitos)',
      'Biopsia de piel (atrofia folicular en "pie de bruja")',
      'Exclusión de endocrinopatías'
    ],
    tratamiento: 'Melatonina vía oral o implantes. En muchos casos el pelo vuelve a crecer sin tratamiento al cambiar la estación.',
    prevencion_control: 'Exposición controlada a luz solar.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  },
  {
    id: 'anomalias-ecg-airedale',
    nombre: 'Anomalías Electrocardiográficas del Airedale',
    descripcion: 'Alteraciones en la conducción eléctrica del corazón específicas de la raza Airedale Terrier.',
    etiology: 'Base genética sospechada debido a la alta prevalencia en la raza.',
    sintomas: [
      'A menudo asintomático',
      'Bloqueo AV de primer grado',
      'Desviación del eje eléctrico medio',
      'Complejos QRS de bajo voltaje'
    ],
    diagnostico: [
      'Electrocardiograma (ECG) de cribado',
      'Holter si hay síntomas de debilidad'
    ],
    tratamiento: 'Generalmente no requiere tratamiento si no hay signos clínicos.',
    prevencion_control: 'Monitoreo cardíaco regular.',
    especies_afectadas: ['Perro'],
    categoria: 'Cardíaca'
  }
];
