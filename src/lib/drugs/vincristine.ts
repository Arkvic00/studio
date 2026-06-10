import type { Drug } from '../index';

export const vincristineDrug: Drug = {
  id: 'vincristine',
  meta_data: {
    nombre_generico: 'Vincristina',
    nombres_comerciales: ['Oncovin', 'Vincristine'],
    grupo_farmacologico: 'Agente antineoplásico',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Interfiere con el ensamblaje de los microtúbulos, provocando la detención de la metafase y, en última instancia, la muerte celular.',
      'Se utiliza con otros agentes neoplásicos en el tratamiento de las enfermedades neoplásicas de los hurones, en particular el linfoma.',
      'Se ha utilizado para tratar el linfoma en una iguana verde.',
      'Usar con precaución en pacientes con enfermedad hepática, leucopenia, infección o enfermedad neuromuscular preexistente.',
      'La solución es irritante local y debe administrarse por vía i.v. a través de un catéter cuidadosamente colocado previamente.',
    ],
    usos_principales: 'Tratamiento de enfermedades neoplásicas, especialmente linfoma.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Fármaco citotóxico; consulte textos especializados para obtener más consejos sobre agentes quimioterapéuticos.',
    'Almacenar en refrigeración.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'Administrar i.v. a través de un catéter pre-colocado cuidadosamente.',
      'Usar con precaución en pacientes con enfermedad hepática, leucopenia, infección o enfermedad neuromuscular preexistente.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Neuropatía periférica',
      'íleo',
      'toxicidad del tracto gastrointestinal/estreñimiento',
      'irritación local grave si se administra por vía perivascular.',
      'Potencialmente mielosupresor.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Fármacos que inhiben los citocromos de la familia CYP3A',
        descripcion:
          'Puede resultar en una disminución del metabolismo de la vincristina y un aumento de la toxicidad.',
      },
      {
        farmaco: 'Asparaginasa',
        descripcion:
          'Si se usa en combinación, la vincristina debe administrarse de 12 a 24 horas antes de la enzima.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Interfiere con el ensamblaje de los microtúbulos, provocando la detención de la metafase y, en última instancia, la muerte celular.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Viales',
      concentraciones: ['1 mg', '2 mg', '5 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Hurones',
        dosis: '0.12–0.2 mg/kg i.v. como parte del protocolo de quimioterapia para el linfoma.',
        indicacion: 'Linfoma',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '0.1 mg/kg i.v. c/7–14d',
        indicacion: 'Linfoma cutáneo de células B no epiteliotrópico',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis:
          '0.008 mg/kg i.v. como parte del protocolo de quimioterapia para el linfoma (un informe de caso en la iguana verde)',
        indicacion: 'Linfoma',
      },
    ],
  },
};
