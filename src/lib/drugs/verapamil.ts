import type { Drug } from '../index';

export const verapamilDrug: Drug = {
  id: 'verapamil',
  meta_data: {
    nombre_generico: 'Verapamil',
    nombres_comerciales: ['Cordilox', 'Securon', 'Verapamil'],
    grupo_farmacologico: 'Bloqueador de los canales de calcio',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Reduce la contractilidad miocárdica, deprime la actividad eléctrica y provoca vasodilatación.',
      'En conejos, se puede usar en el perioperatorio para minimizar la formación de adherencias quirúrgicas.',
      'Reducir la dosis en un 70% en pacientes con enfermedad hepática grave.',
    ],
    usos_principales: 'Minimizar la formación de adherencias quirúrgicas en conejos.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No usar en pacientes con bloqueo AV de 2º o 3er grado, hipotensión, síndrome del seno enfermo, disfunción ventricular izquierda o insuficiencia cardíaca.',
    ],
    precauciones: [
      'La probabilidad de reacciones adversas disminuye con la dilución y la administración lenta del producto cuando se administra por vía intravenosa, pero aun así, se recomienda precaución.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [
      'Hipotensión, bradicardia, mareos, precipitación o exacerbación de la insuficiencia cardíaca congestiva, náuseas, estreñimiento y fatiga (en humanos).',
    ],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Betabloqueantes',
        descripcion:
          'No usar concomitantemente. Ambos fármacos tienen un efecto inotrópico y cronotrópico negativo y el efecto combinado puede ser profundo.',
      },
      {
        farmaco: 'Bloqueadores de los canales de sodio',
        descripcion:
          'La coadministración puede provocar depresión cardiovascular e hipotensión.',
      },
      {
        farmaco: 'Vitamina D o sales de calcio',
        descripcion: 'La actividad del verapamilo puede verse afectada negativamente.',
      },
      {
        farmaco: 'Cimetidina',
        descripcion: 'Puede aumentar los efectos del verapamilo.',
      },
      {
        farmaco: 'Digoxina, digitoxina o teofilina',
        descripcion:
          'El verapamilo puede aumentar los niveles sanguíneos de estos fármacos, lo que puede provocar efectos tóxicos.',
      },
      {
        farmaco: 'Vincristina',
        descripcion:
          'Los bloqueadores de los canales de calcio pueden aumentar los niveles de vincristina intracelular.',
      },
      {
        farmaco: 'Relajantes musculares no despolarizantes',
        descripcion:
          'Los efectos de bloqueo neuromuscular pueden ser potenciados por el verapamilo.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Inhibe el movimiento hacia adentro de los iones de calcio a través de los canales de calcio lentos (tipo L) en las células del miocardio, el tejido de conducción cardíaca y el músculo liso vascular.',
    farmacocinetica: 'Los pacientes con enfermedad hepática grave pueden tener una capacidad reducida para metabolizar el fármaco.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '2.5 mg/ml',
      valor_concentracion: 2.5,
      unidad_concentracion: 'mg/ml',
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['40 mg', '80 mg', '120 mg', '160 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '0.2 mg/kg i.v. muy lento, s.c., p.o. después de la cirugía y repetido cada 8 horas durante 9 dosis o 2.5-25 μg/kg/h i.p., s.c.',
        indicacion: 'Minimizar la formación de adherencias quirúrgicas',
        notas: [
          'La administración rápida i.v. puede causar insuficiencia cardíaca y muerte súbita, se recomiendan las vías s.c. o p.o. en su lugar.',
        ],
      },
      {
        especie: 'Hámsters',
        dosis: '0.25-0.5 mg/kg s.c. q12h',
        indicacion: 'No especificado',
      },
    ],
  },
};
