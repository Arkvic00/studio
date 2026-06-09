import type { Pathology } from '../types';

export const pathologiesT: Pathology[] = [
  {
    id: 'torsion-lobulo-pulmonar',
    nombre: 'Torsión de Lóbulo Pulmonar',
    descripcion: 'Rotación de un lóbulo del pulmón sobre su propio eje, estrangulando el suministro de sangre y aire.',
    etiology: 'Espontánea en razas predispuestas (pecho profundo) o secundaria a efusión pleural.',
    sintomas: [
      'Tos con sangre (hemoptisis)',
      'Disnea severa súbita',
      'Shock',
      'Dolor torácico'
    ],
    diagnostico: [
      'Radiografía de tórax',
      'Tomografía Computarizada (diagnóstico definitivo)',
      'Ecografía torácica'
    ],
    tratamiento: 'Estabilización de emergencia y lobectomía quirúrgica (extracción del lóbulo afectado).',
    prevencion_control: 'Difícil de prevenir por su naturaleza súbita.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
