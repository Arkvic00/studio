import type { Drug } from '../index';

export const vitaminB1Drug: Drug = {
  id: 'vitamin_b1',
  meta_data: {
    nombre_generico: 'Vitamina B1 (Tiamina)',
    nombres_comerciales: ['Vitamina B1'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM-V, venta general',
  },
  resumen_clinico: {
    puntos_clave: [
      'Cofactor de enzimas en el metabolismo de los carbohidratos.',
      'La suplementación con tiamina es necesaria en animales deficientes.',
      'Puede ser beneficioso para aliviar los signos de intoxicación por plomo e intoxicación por etilenglicol.',
      'Se utiliza en aves, reptiles y anfibios para el tratamiento de la necrosis cortical cerebral.',
    ],
    usos_principales: 'Suplementación en deficiencia de tiamina, intoxicación por plomo, intoxicación por etilenglicol y necrosis cortical cerebral.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Proteger del aire y la luz; los viales multidosis requieren técnica aséptica para su uso repetido.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No usar en animales gestantes a menos que sea absolutamente necesario.'],
    precauciones: [
      'La anafilaxia se puede observar con el uso i.v.; diluir con fluidos y/o administrar lentamente si se usa por vía i.v.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['Anafilaxia (con uso i.v.)'],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Agentes bloqueadores neuromusculares',
        descripcion: 'La tiamina puede potenciar la actividad de los agentes bloqueadores neuromusculares.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Cofactor de enzimas en el metabolismo de los carbohidratos, forma un compuesto con el ATP para formar difosfato de tiamina/pirofosfato de tiamina empleado en el metabolismo de los carbohidratos. No afecta la glucosa en sangre.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '100 mg/ml',
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Varias',
      concentraciones: ['Varía según el producto'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones, Conejos',
        dosis: '1–2 mg/kg s.c., i.m. c/12–24h durante varios días hasta que los signos se resuelvan.',
        indicacion: 'Deficiencia de tiamina',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '10–30 mg/kg i.m. c/24h',
        indicacion: 'Deficiencia de tiamina',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '25–35 mg/kg p.o., i.m., s.c. c/24h',
        indicacion: 'Deficiencia de tiamina',
      },
    ],
    amphibians: [
      {
        especie: 'Anfibios',
        dosis: '25 mg/kg de pescado de cebo',
        indicacion: 'Deficiencia de tiamina',
      },
    ],
  },
};
