import type { Pathology } from '../types';

export const pathologiesB: Pathology[] = [
  {
    id: 'bloqueo-cardiaco-alto-grado',
    nombre: 'Bloqueo Cardíaco de Alto Grado',
    descripcion: 'Interrupción severa o completa de los impulsos eléctricos desde las aurículas a los ventrículos (2do o 3er grado).',
    etiology: 'Fibrosis idiopática del sistema de conducción, miocarditis, degeneración por edad o causas genéticas familiares.',
    sintomas: [
      'Síncope (desmayos)',
      'Letargo extremo y debilidad',
      'Intolerancia al ejercicio',
      'Bradicardia severa',
      'Muerte súbita'
    ],
    diagnostico: [
      'Electrocardiograma (ECG)',
      'Holter de 24 horas',
      'Ecocardiografía para evaluar función miocárdica'
    ],
    tratamiento: 'Implantación de marcapasos permanente es el estándar de oro. Atropina o teofilina como manejo temporal.',
    prevencion_control: 'Chequeos cardíacos regulares en razas predispuestas.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Cardíaca'
  }
];
