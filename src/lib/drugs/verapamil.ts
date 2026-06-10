import type { Drug } from '../index';

export const verapamilDrug: Drug = {
  id: 'verapamil',
  meta_data: {
    nombre_generico: 'Verapamilo',
    nombres_comerciales: ['Cordilox', 'Securon', 'Verapamil'],
    grupo_farmacologico: 'Bloqueador de los canales de calcio',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Inhibe el movimiento de entrada de iones de calcio a través de los canales de calcio lentos (tipo L) en las células miocárdicas, el tejido de conducción cardíaco y el músculo liso vascular.',
      'Causa una reducción de la contractilidad miocárdica (inotropo negativo), actividad eléctrica deprimida (ralentiza la conducción AV) y vasodilatación.',
      'En conejos, puede usarse en el perioperatorio para minimizar la formación de adherencias quirúrgicas.',
      'En pacientes con enfermedad hepática grave, reducir la dosis en un 70%.',
    ],
    usos_principales: 'Minimizar las adherencias quirúrgicas perioperatorias en conejos.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No usar en pacientes con bloqueo AV de 2º o 3º grado, hipotensión, síndrome del seno enfermo, disfunción ventricular izquierda o insuficiencia cardíaca.',
    ],
    precauciones: [
      'Puede causar hipotensión, bradicardia, mareos, precipitación o exacerbación de la insuficiencia cardíaca congestiva, náuseas, estreñimiento y fatiga.',
      'La probabilidad de reacciones adversas disminuye con la dilución y la administración lenta del producto cuando se administra por vía i.v.',
      'Se recomienda encarecidamente la precaución, ya que pueden observarse reacciones cardíacas adversas.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Hipotensión',
      'bradicardia',
      'mareos',
      'precipitación o exacerbación de la insuficiencia cardíaca congestiva',
      'náuseas',
      'estreñimiento',
      'fatiga',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Betabloqueantes',
        descripcion: 'No usar concomitantemente. El efecto combinado puede ser profundo.',
      },
      {
        farmaco: 'Bloqueadores de los canales de sodio',
        descripcion: 'Puede provocar depresión cardiovascular e hipotensión.',
      },
      {
        farmaco: 'Vitamina D o sales de calcio',
        descripcion: 'Pueden afectar negativamente la actividad del verapamilo.',
      },
      {
        farmaco: 'Cimetidina',
        descripcion: 'Puede aumentar los efectos del verapamilo.',
      },
      {
        farmaco: 'Digoxina, digitoxina o teofilina',
        descripcion: 'El verapamilo puede aumentar los niveles sanguíneos de estos fármacos.',
      },
      {
        farmaco: 'Vincristina',
        descripcion: 'Los bloqueadores de los canales de calcio pueden aumentar la vincristina intracelular.',
      },
      {
        farmaco: 'Relajantes musculares no despolarizantes',
        descripcion: 'Los efectos pueden ser potenciados por el verapamilo.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Inhibe el movimiento de entrada de iones de calcio a través de los canales de calcio lentos (tipo L) en las células miocárdicas, el tejido de conducción cardíaco y el músculo liso vascular. Causa una reducción en la contractilidad miocárdica (inotropo negativo), actividad eléctrica deprimida (ralentiza la conducción AV) y vasodilatación (vasos cardíacos y arterias y arteriolas periféricas).',
    farmacocinetica:
      'Los pacientes con enfermedad hepática grave pueden tener una capacidad reducida para metabolizar el fármaco.',
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
        dosis:
          '0.2 mg/kg i.v. muy lento, s.c., p.o. después de la cirugía y repetido c/8h para 9 dosis o 2.5-25 μg/kg/h i.p., s.c.',
        indicacion: 'Prevención de adherencias',
      },
      {
        especie: 'Hámsters',
        dosis: '0.25–0.5 mg/kg s.c. c/12h',
        indicacion: 'No especificada',
      },
    ],
  },
};
