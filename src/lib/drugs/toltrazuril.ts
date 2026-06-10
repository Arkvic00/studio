import type { Drug } from '../index';

export const toltrazurilDrug: Drug = {
  id: 'toltrazuril',
  meta_data: {
    nombre_generico: 'Toltrazuril (Triazinona)',
    nombres_comerciales: ['Baycox', 'Zorabel'],
    grupo_farmacologico: 'Anticoccidial',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento de la coccidiosis en conejos y la microsporidiosis en peces.',
      'Puede usarse en combinación con clindamicina para el tratamiento de Choleoeimeria.',
      'La solución altamente alcalina es desagradable e irritante y debe diluirse con al menos un volumen igual de agua inmediatamente antes de la administración oral en conejos.',
      'Se ha utilizado experimental y eficazmente contra una serie de parásitos ciliados, mixozoos y microsporidios en peces.',
    ],
    usos_principales: 'Tratamiento de la coccidiosis y la microsporidiosis.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'En conejos, irritación oral cuando se usan soluciones concentradas; dosis más altas han resultado en inapetencia transitoria.',
    ],
  },
  reacciones_adversas: {
    comunes: ['Irritación oral en conejos con soluciones concentradas.'],
    raras: ['Inapetencia transitoria con dosis más altas en conejos.'],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Daña todas las etapas de desarrollo intracelular de Eimeria spp. Interfiere con la división del núcleo y con la actividad de las mitocondrias, que son responsables del metabolismo respiratorio de los coccidios. En los macrogametos, el toltrazuril daña los llamados cuerpos formadores de pared. En todas las etapas de desarrollo intracelular, se produce una vacuolización severa debido a la inflación del retículo endoplásmico.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Solución',
      concentraciones: ['25 mg/ml', '50 mg/ml'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '2.5-10 mg/kg p.o. q24h durante 2-3 días, repetir en 7-14 días',
        indicacion: 'Coccidiosis',
      },
    ],
    birds: [
      {
        especie: 'Raptors',
        dosis:
          'Coccidiosis: 10 mg/kg p.o. q24h para 2 dosis; repetir semanalmente durante 3 semanas',
        indicacion: 'Coccidiosis',
      },
      {
        especie: 'Zorzales de corona azul',
        dosis: '10 mg/kg p.o. q24h para 2 dosis; repetir semanalmente según sea necesario',
        indicacion: 'Atoxoplasmosis',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '5-15 mg/kg p.o. q24h',
        indicacion: 'Coccidiosis',
      },
      {
        especie: 'Dragones de Rankin',
        dosis:
          '10 mg/kg p.o. q24h durante 3 días repetido una vez en 7 días en combinación con clindamicina',
        indicacion: 'Tratamiento de Choleoeimeria',
      },
    ],
    fish: [
      {
        especie: 'Peces',
        dosis: '5-20 mg/l por inmersión durante 1-4 horas q48h, repetido 3 veces',
        indicacion: 'Microsporidiosis',
      },
    ],
  },
};
