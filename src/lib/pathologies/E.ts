import type { Pathology } from '../types';

export const pathologiesE: Pathology[] = [
  {
    id: 'edema-corneal-adenovirus',
    nombre: 'Edema Corneal (Ojo Azul)',
    descripcion: 'Opacidad azul brillante de la córnea debido a inflamación endotelial.',
    etiology: 'Reacción inmunomediada tras infección natural o vacunación con CAV-1 vivo.',
    sintomas: [
      'Córnea azul pálida opaca',
      'Fotofobia',
      'Dolor ocular leve'
    ],
    diagnostico: [
      'Historia de vacunación reciente',
      'Examen con lámpara de hendidura'
    ],
    tratamiento: 'Generalmente autolimitante. Antibióticos y corticoides tópicos bajo supervisión.',
    prevencion_control: 'Uso de vacunas con Adenovirus tipo 2 (CAV-2).',
    especies_afectadas: ['Perro'],
    categoria: 'Ocular'
  },
  {
    id: 'espondilomielopatia-cervical-wobbler',
    nombre: 'Espondilomielopatía Cervical (Wobbler)',
    descripcion: 'Compresión de la médula espinal en la región del cuello.',
    etiology: 'Inestabilidad vertebral genética o relacionada con nutrición.',
    sintomas: [
      'Ataxia (paso descoordinado)',
      'Debilidad del tren posterior',
      'Cuello rígido y bajo'
    ],
    diagnostico: [
      'Resonancia Magnética (RM)',
      'Mielografía',
      'Radiografía con contraste'
    ],
    tratamiento: 'Cirugía de descompresión vertebral o manejo médico con reposo y corticoides.',
    prevencion_control: 'Evitar exceso de calcio y calorías en el crecimiento.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Neurológica'
  },
  {
    id: 'encefalopatia-mitocondrial',
    nombre: 'Encefalopatía Mitocondrial',
    descripcion: 'Degeneración neurológica por fallo en el metabolismo energético celular.',
    etiology: 'Genética, mutación en el transportador de tiamina.',
    sintomas: [
      'Convulsiones',
      'Ataxia progresiva',
      'Desorientación',
      'Ceguera'
    ],
    diagnostico: [
      'Resonancia Magnética (lesiones talámicas)',
      'Prueba genética'
    ],
    tratamiento: 'Soporte paliativo.',
    prevencion_control: 'Tamizaje genético de reproductores.',
    especies_afectadas: ['Perro'],
    categoria: 'Genética'
  }
];
