import type { BreedPredisposition } from './types';

export const BREED_PREDISPOSITIONS: BreedPredisposition[] = [
  {
    id: 'pastor-aleman',
    breed: 'Pastor Alemán',
    species: 'Perro',
    icon: '🐕',
    conditions: [
      { name: 'Displasia de Cadera', description: 'Malformación de la articulación de la cadera que causa cojera.', type: 'Ortopédico' },
      { name: 'Mielopatía Degenerativa', description: 'Enfermedad progresiva de la médula espinal que afecta las patas traseras.', type: 'Neurológico' },
      { name: 'Insuficiencia Pancreática Exocrina (IPE)', description: 'Falta de enzimas digestivas que causa mala absorción.', type: 'Otros' },
      { name: 'Fístulas Perianales', description: 'Inflamación crónica ulcerosa alrededor del ano.', type: 'Dermatológico' }
    ]
  },
  {
    id: 'golden-retriever',
    breed: 'Golden Retriever',
    species: 'Perro',
    icon: '🐕',
    conditions: [
      { name: 'Hemangiosarcoma', description: 'Tumor maligno agresivo en los vasos sanguíneos (común en bazo).', type: 'Otros' },
      { name: 'Displasia de Codo', description: 'Problemas en el desarrollo de la articulación del codo.', type: 'Ortopédico' },
      { name: 'Atrofia Retiniana Progresiva (PRA)', description: 'Degeneración de la retina que lleva a la ceguera nocturna y total.', type: 'Ocular' },
      { name: 'Estenosis Subaórtica', description: 'Defecto cardíaco congénito que obstruye el flujo sanguíneo.', type: 'Cardíaco' }
    ]
  },
  {
    id: 'pug',
    breed: 'Pug (Carlino)',
    species: 'Perro',
    icon: '🐶',
    conditions: [
      { name: 'Síndrome Braquicefálico', description: 'Dificultad respiratoria por paladar blando largo y narinas estenóticas.', type: 'Otros' },
      { name: 'Úlceras Corneales', description: 'Alta vulnerabilidad por ojos prominentes.', type: 'Ocular' },
      { name: 'Encefalitis del Pug', description: 'Inflamación fatal del cerebro de carácter hereditario.', type: 'Neurológico' }
    ]
  },
  {
    id: 'bulldog-frances',
    breed: 'Bulldog Francés',
    species: 'Perro',
    icon: '🐶',
    conditions: [
      { name: 'Hemivértebras', description: 'Malformación de las vértebras que puede comprimir la médula.', type: 'Ortopédico' },
      { name: 'Enfermedad del Disco Intervertebral (IVDD)', description: 'Extrusión o hernia de discos que causa parálisis.', type: 'Neurológico' },
      { name: 'Dermatitis Atópica', description: 'Hipersensibilidad ambiental que causa prurito crónico.', type: 'Dermatológico' }
    ]
  },
  {
    id: 'siames',
    breed: 'Siamés',
    species: 'Gato',
    icon: '🐱',
    conditions: [
      { name: 'Amiloidosis Hepática', description: 'Depósito de proteínas que puede causar fallo hepático.', type: 'Otros' },
      { name: 'Asma Felina', description: 'Enfermedad inflamatoria de las vías respiratorias inferiores.', type: 'Otros' },
      { name: 'Estrabismo y Nistagmo', description: 'Problemas neurológicos/visuales comunes en la raza.', type: 'Neurológico' }
    ]
  },
  {
    id: 'maine-coon',
    breed: 'Maine Coon',
    species: 'Gato',
    icon: '🐈',
    conditions: [
      { name: 'Miocardiopatía Hipertrófica (MCH)', description: 'Engrosamiento del músculo cardíaco, riesgo de fallo súbito.', type: 'Cardíaco' },
      { name: 'Displasia de Cadera', description: 'Inusual en gatos pero común en esta raza grande.', type: 'Ortopédico' },
      { name: 'Atrofia Muscular Espinal', description: 'Pérdida de neuronas motoras en la médula espinal.', type: 'Neurológico' }
    ]
  },
  {
    id: 'persa',
    breed: 'Persa',
    species: 'Gato',
    icon: '🐱',
    conditions: [
      { name: 'Enfermedad Poliquística Renal (PKD)', description: 'Formación de quistes en los riñones desde el nacimiento.', type: 'Otros' },
      { name: 'Secuestro Corneal', description: 'Necrosis de la córnea común en razas de cara plana.', type: 'Ocular' },
      { name: 'Dermatitis del Pliegue Facial', description: 'Infección crónica por la humedad en los pliegues.', type: 'Dermatológico' }
    ]
  }
];
