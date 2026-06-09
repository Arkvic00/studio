import type { Pathology } from '../types';

export const pathologiesA: Pathology[] = [
  {
    id: 'alopecia-estacional-flancos',
    nombre: 'Alopecia Estacional de los Flancos',
    descripcion: 'Pérdida de pelo no inflamatoria que ocurre de forma cíclica y suele estar relacionada con el fotoperiodo.',
    etiology: 'Desconocida, se sospecha de una respuesta anormal de los folículos pilosos a los cambios en la luz solar y niveles de melatonina. No es de origen hormonal sexual primario.',
    sintomas: [
      'Alopecia bilateral simétrica en los flancos',
      'Piel hiperpigmentada (oscura) en áreas calvas',
      'Bordes de la lesión irregulares ("mapiformes")',
      'Ausencia de prurito (no pica)'
    ],
    diagnostico: [
      'Historia clínica (estacionalidad)',
      'Raspado cutáneo para descartar sarna',
      'Biopsia de piel (atrofia folicular característica)',
      'Exclusión de hipotiroidismo/Cushing'
    ],
    tratamiento: 'Melatonina vía oral o implantes. A menudo remite espontáneamente al cambiar la estación.',
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
      'A menudo asintomático en reposo',
      'Bloqueo AV de primer grado',
      'Desviación del eje eléctrico medio',
      'Complejos QRS de bajo voltaje'
    ],
    diagnostico: [
      'Electrocardiograma (ECG) basal',
      'Holter de 24h si hay debilidad o síncope'
    ],
    tratamiento: 'Generalmente no requiere tratamiento a menos que progrese a bloqueos de alto grado.',
    prevencion_control: 'Monitoreo cardíaco anual en adultos.',
    especies_afectadas: ['Perro'],
    categoria: 'Cardíaca'
  }
];
