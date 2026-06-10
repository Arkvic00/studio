import type { Drug } from '../index';

export const thyroxineDrug: Drug = {
  id: 'thyroxine',
  meta_data: {
    nombre_generico: 'l-Tiroxina (T4, Levotiroxina)',
    nombres_comerciales: ['Leventa', 'Soloxine', 'Thyforon'],
    grupo_farmacologico: 'Hormona tiroidea',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento del hipotiroidismo.',
      'Las dosis en especies exóticas son anecdóticas y no se han realizado estudios.',
      'Los niveles plasmáticos de T4 total en aves son extremadamente bajos y los niveles de T4 total en reptiles varían ampliamente.',
      'El diagnóstico de hipotiroidismo verdadero en aves y reptiles es controvertido.',
      'Los casos de trastornos cardíacos preexistentes requieren dosis iniciales más bajas.',
    ],
    usos_principales: 'Tratamiento del hipotiroidismo.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['Insuficiencia suprarrenal no corregida.'],
    precauciones: [
      'Los signos clínicos de sobredosis incluyen taquicardia, excitabilidad, nerviosismo y jadeo excesivo.',
      'Puede causar distrofia de las plumas si la muda se induce demasiado rápido en las aves.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Signos clínicos de sobredosis: taquicardia, excitabilidad, nerviosismo, jadeo excesivo.',
      'Distrofia de las plumas en aves si la muda se induce demasiado rápido.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Catecolaminas y simpaticomiméticos',
        descripcion: 'Sus acciones son potenciadas por la tiroxina.',
      },
      {
        farmaco: 'Insulina',
        descripcion:
          'Los pacientes diabéticos que reciben hormonas tiroideas pueden tener requisitos de insulina alterados.',
      },
      {
        farmaco: 'Estrógenos',
        descripcion:
          'Pueden aumentar las necesidades de tiroides al aumentar la globulina fijadora de tiroxina.',
      },
      {
        farmaco: 'Ciclosporina, digoxina, digitoxina',
        descripcion:
          'El efecto terapéutico de estos fármacos puede verse reducido por las hormonas tiroideas.',
      },
      {
        farmaco: 'Ketamina',
        descripcion:
          'Pueden desarrollarse taquicardia e hipertensión cuando se administra ketamina a pacientes que reciben hormonas tiroideas.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Se une a receptores intracelulares específicos y altera la expresión génica.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['0.1 mg', '0.2 mg', '0.3 mg', '0.5 mg', '0.8 mg'],
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '1 mg/ml',
      valor_concentracion: 1,
      unidad_concentracion: 'mg/ml',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Roedores',
        dosis: '5 µg/kg p.o. q12h',
        indicacion: 'Hipotiroidismo',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '0.02 mg/kg p.o. q12-24h',
        indicacion: 'Hipotiroidismo',
      },
    ],
    reptiles: [
      {
        especie: 'Tortugas',
        dosis: '0.02 mg/kg p.o. q24-48h',
        indicacion: 'Hipotiroidismo',
      },
    ],
  },
};
