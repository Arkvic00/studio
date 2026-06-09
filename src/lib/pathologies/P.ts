import type { Pathology } from '../types';

export const pathologiesP: Pathology[] = [
  {
    id: 'panosteitis',
    nombre: 'Panosteitis',
    descripcion: 'Inflamación dolorosa de la cavidad medular de los huesos largos en perros jóvenes.',
    etiology: 'Desconocida; posiblemente ligada a cambios vasculares o metabólicos durante el crecimiento rápido.',
    sintomas: [
      'Cojera aguda y "cambiante" entre patas',
      'Dolor marcado al presionar la diáfisis ósea',
      'Letargo y anorexia leve durante los episodios'
    ],
    diagnostico: [
      'Dolor a la palpación profunda del hueso',
      'Radiografía: Aumento de la opacidad medular ("nubes de humo")'
    ],
    tratamiento: 'Manejo del dolor con AINEs y reposo. Es autolimitante.',
    prevencion_control: 'Evitar dietas hipercalóricas en cachorros.',
    especies_afectadas: ['Perro'],
    categoria: 'Ortopédica'
  },
  {
    id: 'pancreatitis',
    nombre: 'Pancreatitis',
    descripcion: 'Inflamación del páncreas por activación prematura de enzimas digestivas.',
    etiology: 'Dietas altas en grasa, obesidad, fármacos o predisposición racial.',
    sintomas: [
      'Vómitos profusos',
      'Dolor abdominal agudo (postura de rezo)',
      'Diarrea y deshidratación'
    ],
    diagnostico: [
      'Prueba de Lipasa Pancreática Específica (cPLI/fPLI)',
      'Ecografía abdominal (páncreas hipoecoico)',
      'Leucocitosis con desviación a la izquierda'
    ],
    tratamiento: 'Fluidoterapia agresiva, analgesia potente (opioides), control de vómito y dieta baja en grasa.',
    prevencion_control: 'Control estricto de la dieta.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Metabólica'
  },
  {
    id: 'piometra',
    nombre: 'Piometra',
    descripcion: 'Infección bacteriana grave del útero mediada por hormonas.',
    etiology: 'Hiperplasia endometrial quística seguida de colonización bacteriana (E. coli).',
    sintomas: [
      'Descarga vaginal purulenta (si es abierta)',
      'Poliuria y polidipsia (bebe/orina mucho)',
      'Abdomen distendido y doloroso',
      'Fiebre y letargo'
    ],
    diagnostico: [
      'Ecografía abdominal (útero lleno de líquido)',
      'Radiografía',
      'Leucocitosis marcada'
    ],
    tratamiento: 'Ovariohisterectomía de urgencia (estándar de oro) y antibióticos.',
    prevencion_control: 'Esterilización temprana.',
    especies_afectadas: ['Perro', 'Gato'],
    categoria: 'Otros'
  },
  {
    id: 'polineuropatia-idiopatica-malamute',
    nombre: 'Polineuropatía Idiopática del Malamute',
    descripcion: 'Trastorno neuromuscular degenerativo que afecta los nervios periféricos.',
    etiology: 'Hereditaria, autosómica recesiva por mutación genética.',
    sintomas: [
      'Debilidad muscular progresiva',
      'Atrofia muscular notable',
      'Paso "de puntillas" o arrastre de patas',
      'Dificultad para tragar'
    ],
    diagnostico: [
      'Signos clínicos en adultos jóvenes',
      'Electromiografía',
      'Biopsia de nervio/músculo'
    ],
    treatment: 'Soporte paliativo; algunos perros pueden estabilizarse.',
    prevencion_control: 'Eliminar portadores del programa de cría.',
    especies_afectadas: ['Perro'],
    categoria: 'Neurológica'
  }
];
