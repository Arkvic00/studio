import type { Pathology } from '../types';

export const pathologiesE: Pathology[] = [
  {
    id: 'edema-corneal-adenovirus',
    nombre: 'Edema Corneal (Ojo Azul)',
    descripcion: 'Acumulación de líquido en el estroma corneal que le da un aspecto azulado/opaco.',
    etiology: 'Reacción de hipersensibilidad tipo III tras la infección por Adenovirus Canino tipo 1 (Hepatitis) o uso de vacunas vivas modificadas antiguas.',
    sintomas: [
      'Córnea opaca de color azul brillante',
      'Fotofobia (molestia a la luz)',
      'Lagrimeo excesivo',
      'Blefaroespasmo'
    ],
    diagnostico: [
      'Historia de vacunación o enfermedad sistémica',
      'Examen con lámpara de hendidura',
      'Test de fluoresceína'
    ],
    tratamiento: 'Suele ser autolimitante. Uso de corticoides tópicos (solo si no hay úlceras) y atropina para el dolor.',
    prevencion_control: 'Uso de vacunas modernas (Adenovirus tipo 2).',
    especies_afectadas: ['Perro'],
    categoria: 'Ocular'
  },
  {
    id: 'espondilomielopatia-cervical-wobbler',
    nombre: 'Espondilomielopatía Cervical (Síndrome de Wobbler)',
    descripcion: 'Compresión de la médula espinal cervical debido a malformaciones vertebrales o inestabilidad.',
    etiology: 'Genética y relacionada con el crecimiento rápido en razas grandes/gigantes.',
    sintomas: [
      'Ataxia (paso tambaleante) del tren posterior',
      'Debilidad progresiva',
      'Cuello bajo y rígido por dolor',
      'Desgaste de uñas por arrastre de patas'
    ],
    diagnostico: [
      'Resonancia Magnética (MRI)',
      'Mielografía',
      'Tomografía Computarizada'
    ],
    tratamiento: 'Cirugía descompresiva o manejo médico con restricción de ejercicio y corticoides en casos leves.',
    prevencion_control: 'Evitar suplementación excesiva de calcio en cachorros de razas grandes.',
    especies_afectadas: ['Perro', 'Caballo'],
    categoria: 'Neurológica'
  }
];
