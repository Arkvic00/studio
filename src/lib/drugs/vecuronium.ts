import type { Drug } from '../index';

export const vecuroniumDrug: Drug = {
  id: 'vecuronium',
  meta_data: {
    nombre_generico: 'Vecuronio',
    nombres_comerciales: ['Norcuron'],
    grupo_farmacologico: 'Bloqueador neuromuscular',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Usado tópicamente como midriático en aves.',
      'Proporciona bloqueo neuromuscular durante la anestesia para mejorar el acceso quirúrgico, facilitar la ventilación con presión positiva o para cirugía intraocular.',
      'Duración de acción intermedia de aproximadamente 20 minutos, dependiente de la dosis.',
      'No tiene efectos cardiovasculares y no causa liberación de histamina.',
      'Se recomienda la monitorización y reversión del bloqueo neuromuscular.',
      'La hipotermia, la acidosis y la hipopotasemia prolongan la duración del bloqueo.',
      'Metabolizado por el hígado; en disfunción hepática se prefiere atracurio.'
    ],
    usos_principales: 'Bloqueo neuromuscular durante la anestesia y midriasis tópica en aves.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Aproximadamente 20 minutos',
  },
  informacion_cliente: [
    'Inestable en solución, se presenta como polvo liofilizado.',
    'La solución preparada se puede diluir más si es necesario.'
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No administrar sistémicamente a menos que el animal esté anestesiado y se disponga de ventilación con presión positiva.',
    ],
    precauciones: [
      'La hipotermia, acidosis e hipopotasemia prolongan el bloqueo.',
      'En disfunción hepática, considerar atracurio.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Anestésicos volátiles, aminoglucósidos, clindamicina y lincomicina',
        descripcion: 'Prolongan el bloqueo neuromuscular.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Inhibe las acciones de la acetilcolina en la unión neuromuscular al unirse competitivamente al receptor nicotínico de acetilcolina en la membrana post-sináptica.',
    farmacocinetica: 'Metabolizado por el hígado. Las dosis repetidas son relativamente no acumulativas en animales sanos y puede administrarse por infusión i.v.'
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Polvo para reconstitución',
      concentraciones: ['10 mg'],
    },
  ],
  dosis: {
    birds: [
      {
        especie: 'Aves',
        dosis: '1 gota de solución de 0.8 mg/ml en solución salina al 0.9% aplicada tópicamente en el ojo; repetir después de 2 minutos',
        indicacion: 'Midriasis',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '1 gota de solución al 0.4% aplicada tópicamente en el ojo c/15-20min',
        indicacion: 'Midriasis',
      },
    ],
  },
};
