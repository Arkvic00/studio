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
  },
  {
    id: 'panosteitis',
    nombre: 'Panosteitis (Enostosis)',
    descripcion: 'Inflamación de la superficie de los huesos largos ("dolores de crecimiento").',
    etiology: 'Desconocida, sospecha metabólica o infecciosa; afecta la cavidad medular ósea.',
    sintomas: [
      'Cojera aguda que "salta" de una pata a otra',
      'Dolor severo a la palpación de la diáfisis ósea',
      'Fiebre leve y letargo en crisis',
      'Inapetencia'
    ],
    diagnostico: [
      'Examen ortopédico',
      'Radiografía (aumento de densidad medular, manchas radio-opacas)'
    ],
    tratamiento: 'Analgésicos (AINEs) y reposo. Suele ser autolimitante al llegar a la madurez.',
    prevencion_control: 'Evitar dietas hipercalóricas en cachorros.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  }
];
