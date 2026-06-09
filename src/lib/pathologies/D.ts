import type { Pathology } from '../types';

export const pathologiesD: Pathology[] = [
  {
    id: 'displasia-cadera',
    nombre: 'Displasia de Cadera',
    descripcion: 'Malformación de la articulación coxofemoral que resulta en una laxitud articular y posterior enfermedad articular degenerativa.',
    etiology: 'Multifactorial, con un fuerte componente genético hereditario (poligénico) agravado por factores ambientales como nutrición y ejercicio excesivo en el crecimiento.',
    sintomas: [
      'Cojera intermitente o persistente de patas traseras',
      'Dificultad para levantarse o subir escaleras',
      'Marcha de "salto de conejo"',
      'Atrofia muscular en muslos',
      'Dolor a la extensión de la cadera'
    ],
    diagnostico: [
      'Examen físico y ortopédico (Prueba de Ortolani)',
      'Radiografías (proyección ventrodorsal extendida)',
      'Método PennHIP (evaluación de laxitud)',
      'Tomografía Computarizada'
    ],
    tratamiento: 'Manejo médico (AINEs, condroprotectores, control de peso, fisioterapia). Opciones quirúrgicas: Sinfisiodesis púbica juvenil, Triple osteotomía pélvica, Ostectomía de cabeza femoral o Prótesis total de cadera.',
    prevencion_control: 'Selección genética de reproductores, evitar crecimiento acelerado en cachorros de razas grandes, control estricto de la dieta.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Ortopédica'
  },
  {
    id: 'displasia-codo',
    nombre: 'Displasia de Codo',
    descripcion: 'Término que engloba varias anomalías del desarrollo en la articulación del codo (FCP, UAP, OCD).',
    etiology: 'Incongruencia articular hereditaria que causa sobrecarga de presión en puntos específicos del cúbito y radio.',
    sintomas: [
      'Cojera de patas delanteras que empeora tras el ejercicio',
      'Rotación externa de la pata al caminar',
      'Dolor a la flexión/extensión del codo',
      'Derrame articular (hinchazón)'
    ],
    diagnostico: [
      'Radiología (vistas en flexión)',
      'Tomografía Computarizada (Estándar de oro)',
      'Artroscopia'
    ],
    tratamiento: 'Cirugía artroscópica para remover fragmentos, osteotomías de nivelación o manejo médico paliativo.',
    prevencion_control: 'Control del peso en el crecimiento y selección de reproductores libres de la enfermedad.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  }
];
