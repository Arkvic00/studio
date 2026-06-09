import type { Pathology } from '../types';

export const pathologiesP: Pathology[] = [
  {
    id: 'parvovirus-canino',
    nombre: 'Parvovirus Canino',
    descripcion: 'Enfermedad viral altamente contagiosa.',
    etiology: 'CPV-2.',
    sintomas: ['Vómitos', 'Diarrea fétida', 'Leucopenia'],
    diagnostico: ['ELISA', 'PCR'],
    tratamiento: 'Soporte intensivo.',
    prevencion_control: 'Vacunación.',
    especies_afectadas: ['Perro'],
    categoria: 'Infecciosa'
  },
  {
    id: 'panosteitis',
    nombre: 'Panosteitis',
    descripcion: 'Inflamación ósea en perros jóvenes.',
    etiology: 'Desconocida.',
    sintomas: ['Cojera cambiante', 'Dolor óseo severo'],
    diagnostico: ['Radiografía'],
    tratamiento: 'AINEs.',
    prevencion_control: 'Evitar dietas hipercalóricas.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  },
  {
    id: 'pancreatitis',
    nombre: 'Pancreatitis',
    descripcion: 'Inflamación del páncreas que puede ser aguda o crónica.',
    etiology: 'Inducida por dietas altas en grasa, fármacos, trauma o predisposición racial.',
    sintomas: [
      'Vómitos severos',
      'Dolor abdominal (posición de rezo)',
      'Anorexia',
      'Deshidratación'
    ],
    diagnostico: [
      'cPLI / fPLI (Prueba específica de lipasa pancreática)',
      'Ecografía abdominal',
      'Leucocitosis'
    ],
    tratamiento: 'Ayuno temporal (si hay vómito), fluidoterapia agresiva, analgesia potente (opioides), dieta baja en grasa.',
    prevencion_control: 'Evitar ingesta de sobras de comida humana y grasas.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Metabólica'
  },
  {
    id: 'polineuropatia-idiopatica-malamute',
    nombre: 'Polineuropatía del Malamute',
    descripcion: 'Trastorno degenerativo de los nervios periféricos.',
    etiology: 'Genética, herencia autosómica recesiva.',
    sintomas: [
      'Debilidad progresiva del tren posterior',
      'Atrofia muscular',
      'Cambio en la voz (parálisis laríngea asociada)',
      'Pérdida de reflejos espinales'
    ],
    diagnostico: [
      'Pruebas de electrodiagnóstico (EMG)',
      'Biopsia de nervio',
      'Prueba genética'
    ],
    tratamiento: 'No hay tratamiento curativo. Soporte físico.',
    prevencion_control: 'Control genético en reproductores.',
    especies_afectadas: ['Perro'],
    categoria: 'Genética'
  },
  {
    id: 'piometra',
    nombre: 'Piometra',
    descripcion: 'Infección uterina grave con acumulación de pus.',
    etiology: 'Hiperplasia endometrial quística influenciada por progesterona seguida de invasión bacteriana (E. coli).',
    sintomas: [
      'Descarga vaginal purulenta (si es abierta)',
      'Poliuria/Polidipsia (bebe y orina mucho)',
      'Letargo y fiebre',
      'Vómitos'
    ],
    diagnostico: [
      'Ecografía abdominal (cuernos uterinos distendidos)',
      'Radiografía',
      'Hemograma (leucocitosis severa)'
    ],
    tratamiento: 'Ovariohisterectomía de urgencia (tratamiento de elección). Antibióticos.',
    prevencion_control: 'Castración temprana de hembras que no serán destinadas a cría.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  }
];
