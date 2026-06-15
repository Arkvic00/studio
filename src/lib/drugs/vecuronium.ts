import type { Drug } from '../index';

export const vecuroniumDrug: Drug = {
  id: 'vecuronium',
  meta_data: {
    nombre_generico: 'Vecuronio',
    nombres_comerciales: ['Norcuron'],
    grupo_farmacologico: 'Bloqueante neuromuscular no despolarizante',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Provoca bloqueo neuromuscular para mejorar la relajación muscular durante la anestesia.',
      'Duración de acción intermedia, dependiente de la dosis, de aproximadamente 20 minutos.',
      'No tiene efectos cardiovasculares y no causa liberación de histamina.',
      'Se metaboliza en el hígado; se aconseja atracurio en animales con disfunción hepática.',
      'Se recomienda la monitorización y reversión del bloqueo neuromuscular.',
      'La hipotermia, la acidosis y la hipopotasemia prolongan la duración del bloqueo.',
    ],
    usos_principales: 'Bloqueo neuromuscular durante la anestesia, facilitación de la ventilación con presión positiva, cirugía intraocular y como midriático tópico en aves.',
    inicio_accion: 'Desconocido',
    duracion_efecto: '~20 minutos',
  },
  informacion_cliente: [
    'Es inestable en solución, por lo que se presenta como un polvo liofilizado que debe ser reconstituido.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No administrar sistémicamente a menos que el animal esté adecuadamente anestesiado y se disponga de medios para proporcionar ventilación con presión positiva.',
    ],
    precauciones: [],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['No hay información disponible.'],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Anestésicos volátiles, aminoglucósidos, clindamicina y lincomicina',
        descripcion: 'El bloqueo neuromuscular es más prolongado cuando se administran en combinación.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Inhibe las acciones de la acetilcolina en la unión neuromuscular uniéndose competitivamente a la subunidad alfa del receptor nicotínico de acetilcolina en la membrana postsináptica.',
    farmacocinetica: 'Metabolizado por el hígado. En animales con disfunción hepática, se aconseja el uso de atracurio en su lugar.',
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
        dosis: '1 gota de solución de 0.8 mg/ml en suero salino al 0.9% aplicada tópicamente en el ojo; repetir después de 2 minutos.',
        indicacion: 'Midriasis',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '1 gota de solución al 0.4% aplicada tópicamente en el ojo cada 15-20 minutos.',
        indicacion: 'Midriasis',
      },
    ],
  },
};
