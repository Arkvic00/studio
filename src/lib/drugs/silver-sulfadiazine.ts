import { Drug } from '../drug.model';

export const silverSulfadiazineDrug: Drug = {
  id: 'silver-sulfadiazine',
  meta_data: {
    nombre_generico: 'Sulfadiazina de plata',
    nombres_comerciales: ['Flamazine'],
    grupo_farmacologico: 'Antibacteriano tópico',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Libera lentamente plata en concentraciones tóxicas para bacterias y levaduras.',
      'Activo contra organismos Gram-negativos como Pseudomonas aeruginosa.',
      'Utilizado en el tratamiento de quemaduras de segundo y tercer grado, y miasis.',
      'No usar en neonatos o animales preñados.',
      'Puede acumularse en pacientes con insuficiencia hepática o renal.',
    ],
    usos_principales: 'Fármaco antibacteriano y antifúngico tópico particularmente activo contra organismos Gram-negativos como Pseudomonas aeruginosa. Utilizado en el tratamiento de quemaduras de segundo y tercer grado, y miasis.',
  },
  informacion_cliente: [
    'Usar guantes para aplicar la crema.',
    'Aplicar una capa fina sobre la zona afectada.',
    'Mantener la zona limpia.',
    'Consultar al veterinario si no se observa mejoría o si aparecen signos de reacción.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        indicacion: 'Heridas',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        intervalo: 'q12-24h',
        notas_tecnicas: 'Aplicar con moderación en las heridas.'
      },
      {
        indicacion: 'Otitis (Pseudomonas resistente/Malassezia refractaria)',
        vias: ['Ótica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        notas_tecnicas: 'Diluir 1:1 con agua estéril y aplicar tópicamente.'
      }
    ],
    aves: [
      {
        indicacion: 'Quemaduras/infección de la piel',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        intervalo: 'Inicialmente, aplicar con la frecuencia necesaria para mantener la herida cubierta, luego reducir a medida que se produce la cicatrización a una vez al día.',
        notas_tecnicas: 'Aplicar antisépticamente en la zona afectada hasta un espesor de aproximadamente 1,5 mm.'
      },
      {
        indicacion: 'Otitis (Pseudomonas resistente/Malassezia refractaria)',
        vias: ['Ótica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        notas_tecnicas: 'Diluir 1:1 con agua estéril y aplicar tópicamente.'
      }
    ],
    reptiles: [
      {
        indicacion: 'Heridas',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        intervalo: 'q24-72h'
      }
    ],
    anfibios: [
      {
        indicacion: 'Heridas',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        intervalo: 'q24-72h'
      }
    ],
    peces: [
      {
        indicacion: 'Heridas',
        vias: ['Tópica'],
        math: {
          tipo_calculo: 'aplicacion_directa',
        },
        notas_tecnicas: 'Aplicar tópicamente en las heridas manteniendo el sitio fuera del agua durante 30-60 segundos.'
      }
    ]
  }
};
