import { Drug } from '../drug.model';

export const serumGonadotrophinDrug: Drug = {
  id: 'serum-gonadotrophin',
  meta_data: {
    nombre_generico: 'Gonadotropina sérica (PMSG, Gonadotropina coriónica equina)',
    nombres_comerciales: ['PMSG-Intervet'],
    grupo_farmacologico: 'Hormona',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Mimetiza la acción de la FSH (hormona foliculoestimulante).',
      'Inducción del estro mediante la estimulación del desarrollo de los folículos ováricos.',
      'Aumenta la espermatogénesis, aunque con baja eficacia.',
      'Inducción de la ovulación en anfibios.',
      'Raramente pueden producirse reacciones anafilactoides.',
    ],
    usos_principales: 'Inducción del estro, aumento de la espermatogénesis e inducción de la ovulación.',
  },
  informacion_cliente: [
    'Fármaco de uso exclusivo veterinario.',
    'Se requiere una manipulación y dosificación cuidadosas.',
    'Monitorizar al animal para detectar posibles reacciones adversas.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['cobayas'],
        indicacion: 'Inducción de celo',
        vias: ['IM'],
        math: {
          tipo_calculo: 'dosis_unitaria',
        },
        intervalo: 'Repetir en 7-10 días',
        notas_tecnicas: '1000 UI/animal'
      }
    ],
    anfibios: [
      {
        indicacion: 'Inducción de la ovulación',
        vias: ['SC', 'IM'],
        math: {
          tipo_calculo: 'ui_kg',
          dosis_min: 50,
          dosis_max: 200,
          unidad_calculo: 'UI/kg'
        },
        notas_tecnicas: 'Seguido de 600 UI de hCG después de 72 h. Ranas arborícolas: 2 dosis de PMSG (50 UI y 25 UI a los 6 y 4 días, respectivamente), antes de 2 dosis de 100 UI de hCG con 24 h de diferencia.'
      }
    ]
  }
};
