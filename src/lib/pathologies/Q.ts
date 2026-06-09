import type { Pathology } from '../types';

export const pathologiesQ: Pathology[] = [
  {
    id: 'quilotorax-idiopatico',
    nombre: 'Quilotórax Idiopático',
    descripcion: 'Acumulación de quilo (líquido linfático rico en grasas) en el espacio pleural.',
    etiology: 'En la mayoría de los casos es desconocida (idiopática). Puede ser secundario a trauma o insuficiencia cardíaca.',
    sintomas: [
      'Dificultad respiratoria (disnea)',
      'Respiración rápida y superficial',
      'Tos',
      'Mucosas pálidas o azuladas'
    ],
    diagnostico: [
      'Radiografía de tórax',
      'Toracocentesis (líquido lechoso)',
      'Análisis del líquido (triglicéridos elevados)'
    ],
    tratamiento: 'Drenaje pleural, dieta baja en grasas, rutina de ruda (Rutin). Quirúrgico: ligadura del conducto torácico.',
    prevencion_control: 'No existe prevención para la forma idiopática.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
