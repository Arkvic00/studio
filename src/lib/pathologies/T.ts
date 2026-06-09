import type { Pathology } from '../types';

export const pathologiesT: Pathology[] = [
  {
    id: 'torsion-lobulo-pulmonar',
    nombre: 'Torsión de Lóbulo Pulmonar',
    descripcion: 'Rotación de un lóbulo pulmonar sobre su eje pedicular, obstruyendo el flujo sanguíneo y aéreo.',
    etiology: 'Secundario a efusión pleural, trauma o idiopático (común en Galgos Afganos).',
    sintomas: [
      'Dificultad respiratoria aguda',
      'Tos con sangre (hemoptisis)',
      'Shock cardiogénico',
      'Dolor torácico'
    ],
    diagnostico: [
      'Radiografía de tórax (consolidación lobular)',
      'Ecografía torácica',
      'Tomografía Computarizada (TC)'
    ],
    tratamiento: 'Lobectomía quirúrgica de urgencia del lóbulo afectado.',
    prevencion_control: 'N/A.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-vesicales-uretrales',
    nombre: 'Tumores Vesicales y Uretrales',
    descripcion: 'Cáncer que afecta el revestimiento de la vejiga o la uretra, siendo el Carcinoma de Células Transicionales (TCC) el más común.',
    etiology: 'Multifactorial; genética (Airedales) y exposición a carcinógenos (herbicidas, humo).',
    sintomas: [
      'Sangre en la orina (hematuria)',
      'Dificultad o dolor al orinar (disuria/estranguria)',
      'Micciones frecuentes y escasas'
    ],
    diagnostico: [
      'Ecografía de vías urinarias',
      'Prueba de BRAF en orina',
      'Cistoscopia con biopsia'
    ],
    tratamiento: 'Cirugía citorreductora, quimioterapia y AINEs (Piroxicam).',
    prevencion_control: 'Evitar exposición a químicos de césped.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  },
  {
    id: 'tumores-traqueales-laringeos',
    nombre: 'Tumores Laríngeos y Traqueales',
    descripcion: 'Masas neoplásicas que obstruyen las vías respiratorias superiores.',
    etiology: 'Causas genéticas o degeneración celular.',
    sintomas: [
      'Estridor inspiratorio (ruido al respirar)',
      'Cambio o pérdida del ladrido',
      'Dificultad respiratoria progresiva'
    ],
    diagnostico: [
      'Endoscopia (Laringoscopia/Traqueoscopia)',
      'Biopsia por cepillado o quirúrgica',
      'Radiografía cervical'
    ],
    tratamiento: 'Resección quirúrgica, colocación de stent traqueal o radioterapia.',
    prevencion_control: 'Detección temprana.',
    especies_afectadas: ['Perro'],
    categoria: 'Otros'
  }
];
