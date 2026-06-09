import type { Pathology } from '../types';

export const pathologiesP: Pathology[] = [
  {
    id: 'parvovirus-canino',
    nombre: 'Parvovirus Canino',
    descripcion: 'Enfermedad viral altamente contagiosa y potencialmente mortal que afecta principalmente a cachorros y perros no vacunados.',
    etiology: 'Causada por el Parvovirus Canino tipo 2 (CPV-2). Es un virus extremadamente resistente en el ambiente.',
    sintomas: [
      'Vómitos severos',
      'Diarrea sanguinolenta con olor fétido',
      'Letargo extremo',
      'Anorexia',
      'Fiebre alta o hipotermia',
      'Deshidratación rápida'
    ],
    diagnostico: [
      'Prueba rápida de antígeno en heces (ELISA)',
      'Hemograma (leucopenia severa)',
      'PCR',
      'Signología clínica'
    ],
    tratamiento: 'Soporte intensivo: Fluidoterapia intravenosa, control de vómito (antieméticos), antibióticos para prevenir sepsis secundaria, soporte nutricional (sonda) y manejo del dolor.',
    prevencion_control: 'Vacunación estricta desde las 6-8 semanas. Desinfección de áreas con cloro diluido. Cuarentena de animales enfermos.',
    especies_afectadas: ['Perro'],
    categoria: 'Infecciosa'
  }
];