import type { Pathology } from '../types';

export const pathologiesD: Pathology[] = [
  {
    id: 'displasia-cadera',
    nombre: 'Displasia de Cadera',
    descripcion: 'Malformación de la articulación coxofemoral que resulta en una laxitud articular y posterior enfermedad articular degenerativa.',
    etiology: 'Multifactorial, con un fuerte componente genético hereditario (poligénico) agravado por nutrición y ejercicio excesivo.',
    sintomas: [
      'Cojera intermitente o persistente de patas traseras',
      'Dificultad para levantarse o subir escaleras',
      'Marcha de "salto de conejo"',
      'Atrofia muscular en muslos'
    ],
    diagnostico: [
      'Examen físico (Prueba de Ortolani)',
      'Radiografías (proyección ventrodorsal)',
      'Método PennHIP'
    ],
    tratamiento: 'Manejo médico (AINEs, condroprotectores, control de peso) o cirugía (Sinfisiodesis, TOP, Prótesis).',
    prevencion_control: 'Selección genética y evitar crecimiento acelerado.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Ortopédica'
  },
  {
    id: 'displasia-codo',
    nombre: 'Displasia de Codo',
    descripcion: 'Anomalías del desarrollo en la articulación del codo (FCP, UAP, OCD).',
    etiology: 'Incongruencia articular hereditaria.',
    sintomas: [
      'Cojera de patas delanteras',
      'Rotación externa de la pata',
      'Dolor a la flexión del codo'
    ],
    diagnostico: [
      'Radiología',
      'Tomografía Computarizada',
      'Artroscopia'
    ],
    tratamiento: 'Cirugía artroscópica o manejo médico paliativo.',
    prevencion_control: 'Control del peso y selección de reproductores.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  },
  {
    id: 'condrodisplasia-malamute',
    nombre: 'Condrodisplasia del Malamute',
    descripcion: 'Trastorno del crecimiento óseo que resulta en extremidades cortas y deformadas (enanismo).',
    etiology: 'Hereditaria, autosómica recesiva con penetrancia completa.',
    sintomas: [
      'Extremidades anteriores curvas y cortas',
      'Cojera o marcha anormal',
      'Anemia (asociada en algunos casos)',
      'Afectación visible desde las 5-12 semanas de edad'
    ],
    diagnostico: [
      'Signos clínicos evidentes',
      'Radiografía de huesos largos',
      'Pruebas genéticas'
    ],
    tratamiento: 'No hay cura. Manejo sintomático de la artritis secundaria.',
    prevencion_control: 'Eliminación de portadores de los programas de cría.',
    especies_afectadas: ['Perro'],
    categoria: 'Genética'
  }
];
