import type { Pathology } from '../types';

export const pathologiesB: Pathology[] = [
  {
    id: 'bloqueo-cardiaco-alto-grado',
    nombre: 'Bloqueo Cardíaco de Alto Grado',
    descripcion: 'Interrupción severa o completa de los impulsos eléctricos desde las aurículas a los ventrículos.',
    etiology: 'Fibrosis idiopática del sistema de conducción, procesos inflamatorios (miocarditis), degeneración por edad o causas hereditarias.',
    sintomas: [
      'Síncope (desmayos)',
      'Letargo extremo',
      'Intolerancia al ejercicio',
      'Bradicardia severa (frecuencia cardíaca muy baja)',
      'Muerte súbita'
    ],
    diagnostico: [
      'Electrocardiograma (ECG) de 12 derivaciones',
      'Holter de 24 horas',
      'Ecocardiografía'
    ],
    tratamiento: 'Implantación de marcapasos permanente es el tratamiento de elección. Manejo médico temporal con simpaticomiméticos.',
    prevencion_control: 'Chequeos geriátricos regulares en razas predispuestas.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Cardíaca'
  }
];
