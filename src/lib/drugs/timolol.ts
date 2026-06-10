import type { Drug } from '../index';

export const timololDrug: Drug = {
  id: 'timolol',
  meta_data: {
    nombre_generico: 'Maleato de timolol',
    nombres_comerciales: ['Azarga', 'CoSopt', 'Timolol', 'Timoptol'],
    grupo_farmacologico: 'Betabloqueante no selectivo',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Disminuye la producción de humor acuoso mediante el bloqueo de los receptores beta-adrenérgicos en el cuerpo ciliar.',
      'Se utiliza para el tratamiento del glaucoma, solo o en combinación con otros fármacos tópicos para el glaucoma.',
      'La combinación con dorzolamida/brinzolamida puede ser más eficaz que cualquiera de los fármacos por separado.',
      'Puede ser apropiado usar una solución al 0.25% en pacientes más pequeños para reducir los riesgos de absorción sistémica.',
    ],
    usos_principales: 'Tratamiento del glaucoma.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['Evitar en insuficiencia cardíaca no controlada y asma.'],
    precauciones: [
      'La absorción sistémica puede ocurrir después de la aplicación tópica, causando bradicardia y reducción de la presión arterial.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Efectos adversos oculares: miosis, hiperemia conjuntival e irritación local.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Betabloqueantes orales',
        descripcion:
          'Se pueden desarrollar efectos adversos aditivos si se administran concomitantemente.',
      },
      {
        farmaco: 'Verapamilo',
        descripcion:
          'La administración concomitante de timolol con verapamilo puede causar bradicardia y asistolia.',
      },
      {
        farmaco: 'Antagonistas del calcio o digoxina',
        descripcion:
          'Pueden producirse tiempos de conducción AV prolongados si se usan con timolol.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Bloqueador beta no selectivo tópico que disminuye la producción de humor acuoso mediante el bloqueo de los receptores beta-adrenérgicos en el cuerpo ciliar.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oftálmico',
      forma_farmaceutica: 'Solución',
      concentraciones: ['0.25%', '0.5%'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '1 gota por ojo q12h',
        indicacion: 'Glaucoma',
      },
    ],
  },
};
