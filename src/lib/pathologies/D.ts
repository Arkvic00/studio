import type { Pathology } from '../types';

export const pathologiesD: Pathology[] = [
  {
    id: 'displasia-cadera',
    nombre: 'Displasia de Cadera',
    descripcion: 'Mala unión de la articulación coxofemoral que genera inestabilidad y artrosis.',
    etiology: 'Multifactorial; genética hereditaria agravada por crecimiento rápido, obesidad y ejercicio excesivo.',
    sintomas: [
      'Cojera de patas traseras',
      'Dificultad para levantarse',
      'Marcha de conejo (salta con ambas patas)',
      'Atrofia muscular en muslos'
    ],
    diagnostico: [
      'Prueba de Ortolani',
      'Radiografías (OFFA o PennHIP)',
      'Palpación bajo sedación'
    ],
    tratamiento: 'AINEs, condroprotectores, control de peso o cirugía (TPLO, Prótesis).',
    prevencion_control: 'Evitar sobrepeso en cachorros y selección genética rigurosa.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Ortopédica'
  },
  {
    id: 'displasia-codo',
    nombre: 'Displasia de Codo',
    descripcion: 'Grupo de anomalías del desarrollo (FCP, UAP, OCD) que afectan la articulación del codo.',
    etiology: 'Incongruencia articular de origen genético.',
    sintomas: [
      'Cojera de patas delanteras',
      'Rotación del codo hacia afuera',
      'Dolor marcado al flectar la articulación'
    ],
    diagnostico: [
      'Radiología lateral y craneocaudal',
      'Tomografía Computarizada (TC)',
      'Artroscopia diagnóstica'
    ],
    tratamiento: 'Extracción de fragmentos óseos vía artroscopia y manejo de la osteoartritis.',
    prevencion_control: 'Control estricto de dieta en cachorros de razas grandes.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  },
  {
    id: 'condrodisplasia-malamute',
    nombre: 'Condrodisplasia del Malamute',
    descripcion: 'Enanismo hereditario que deforma los huesos largos de las patas.',
    etiology: 'Hereditaria, autosómica recesiva.',
    sintomas: [
      'Patas delanteras curvas y cortas',
      'Cojera persistente',
      'Anemia ocasional'
    ],
    diagnostico: [
      'Signos clínicos en cachorros',
      'Radiografía de huesos largos',
      'Prueba genética de portadores'
    ],
    tratamiento: 'No tiene cura. Manejo paliativo del dolor articular.',
    prevencion_control: 'Eliminar portadores de los programas de reproducción.',
    especies_afectadas: ['Perro'],
    categoria: 'Genética'
  }
];
