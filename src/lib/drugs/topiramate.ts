import type { Drug } from '../index';

export const topiramateDrug: Drug = {
  id: 'topiramate',
  meta_data: {
    nombre_generico: 'Topiramato',
    nombres_comerciales: ['Topamax', 'Topiramate'],
    grupo_farmacologico: 'Anticonvulsivo',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Se utiliza para el tratamiento de las convulsiones y las conductas convulsivas en conejos.',
      'Los efectos adversos son comunes y pueden estar relacionados con la dosis.',
      'La vida media es de 2 a 4 horas y puede ser necesaria una dosificación frecuente.',
    ],
    usos_principales: 'Tratamiento de las convulsiones y las conductas convulsivas.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'Suspender gradualmente para minimizar la posibilidad de un aumento de la frecuencia de las convulsiones.',
    ],
  },
  reacciones_adversas: {
    comunes: ['Ataxia, sedación, disminución del apetito y pérdida de peso.'],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Fenitoína o carbamazepina',
        descripcion:
          'Pueden disminuir las concentraciones plasmáticas de topiramato hasta en un 50%.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Anticonvulsivo que potencia la actividad del GABA, reduce la actividad del glutamato y bloquea los canales de sodio y calcio dependientes del voltaje.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['25 mg', '50 mg', '100 mg', '200 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '5-10 mg/kg p.o. q12h',
        indicacion: 'Convulsiones y conductas convulsivas',
      },
    ],
  },
};
