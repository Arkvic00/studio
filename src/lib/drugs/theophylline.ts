import type { Drug } from '../index';

export const theophyllineDrug: Drug = {
  id: 'theophylline',
  meta_data: {
    nombre_generico: 'Teofilina',
    nombres_comerciales: ['Corvental-D'],
    grupo_farmacologico: 'Metilxantina',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'La teofilina tiene un índice terapéutico bajo y debe dosificarse según el peso corporal magro.',
      'Administrar con precaución en pacientes con enfermedad cardíaca grave, úlceras gástricas, hipertiroidismo, enfermedad renal o hepática, hipoxia grave o hipertensión grave.',
      'Los valores plasmáticos terapéuticos de teofilina son de 5 a 20 µg/ml.',
    ],
    usos_principales:
      'Agente espasmolítico con una leve acción diurética. Se ha utilizado en el tratamiento de la enfermedad de las vías respiratorias pequeñas.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'Pacientes con antecedentes conocidos de arritmias o convulsiones.',
    ],
    precauciones: [
      'Administrar con precaución en pacientes con enfermedad cardíaca grave, úlceras gástricas, hipertiroidismo, enfermedad renal o hepática, hipoxia grave o hipertensión grave.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Vómitos, diarrea, polidipsia, poliuria, reducción del apetito, taquicardia, arritmias, náuseas, espasmos, inquietud, agitación, excitación y convulsiones.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Cimetidina, diltiazem, eritromicina, fluoroquinolonas, alopurinol',
        descripcion: 'Pueden aumentar los niveles séricos de teofilina.',
      },
      {
        farmaco: 'Fenobarbital',
        descripcion: 'Puede disminuir la concentración sérica de teofilina.',
      },
      {
        farmaco: 'Pancuronio',
        descripcion: 'La teofilina puede disminuir los efectos del pancuronio.',
      },
      {
        farmaco: 'Bloqueadores beta-adrenérgicos (p. ej., propranolol)',
        descripcion:
          'La teofilina y los bloqueadores beta-adrenérgicos pueden antagonizar los efectos del otro.',
      },
      {
        farmaco: 'Halotano',
        descripcion:
          'La administración de teofilina con halotano puede causar una mayor incidencia de arritmias cardíacas.',
      },
      {
        farmaco: 'Ketamina',
        descripcion:
          'La administración de teofilina con ketamina puede causar una mayor incidencia de convulsiones.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Provoca la inhibición de la fosfodiesterasa, la alteración del calcio intracelular, la liberación de catecolaminas y el antagonismo de la adenosina y la prostaglandina, lo que conduce a la broncodilatación y otros efectos.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Cápsulas de liberación sostenida',
      concentraciones: ['100 mg', '200 mg', '500 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones',
        dosis: '4.25-10 mg/kg p.o. q8-12h',
        indicacion: 'Tratamiento de la enfermedad de las vías respiratorias pequeñas',
      },
      {
        especie: 'Cobayas, Ratas',
        dosis: '10-20 mg/kg p.o. q8-12h',
        indicacion: 'Tratamiento de la enfermedad de las vías respiratorias pequeñas',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '10 mg/kg p.o. q12h',
        indicacion: 'Tratamiento de la enfermedad de las vías respiratorias pequeñas',
      },
    ],
  },
};
