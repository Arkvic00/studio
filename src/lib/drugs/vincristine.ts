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
      'Se utiliza con otros agentes neoplásicos en el tratamiento de enfermedades neoplásicas de hurones, particularmente linfoma.',
      'Se ha utilizado para tratar el linfoma en una iguana verde.',
      'La solución es irritante localmente y debe administrarse por vía intravenosa a través de un catéter precolocado cuidadosamente.',
      'Fármaco citotóxico; consulte textos especializados para obtener más consejos sobre agentes quimioterapéuticos.',
    ],
    usos_principales: 'Tratamiento de enfermedades neoplásicas, particularmente linfoma.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Almacenar bajo refrigeración.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No hay información disponible.'],
    precauciones: [
      'Usar con precaución en pacientes con enfermedad hepática, leucopenia, infección o enfermedad neuromuscular preexistente.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Neuropatía periférica, íleo, toxicidad/estreñimiento del tracto gastrointestinal e irritación local grave si se administra por vía perivascular.',
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
          'Si se usa en combinación con asparaginasa, debe administrarse 12-24 horas antes de la enzima. La administración de asparaginasa con o antes de la vincristina puede reducir el aclaramiento de la vincristina y aumentar la toxicidad.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Interfiere con el ensamblaje de microtúbulos, provocando la detención de la metafase y, en última instancia, la muerte celular.',
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
        dosis: '0.12-0.2 mg/kg i.v. como parte del protocolo de quimioterapia para el linfoma.',
        indicacion: 'Linfoma',
        notas: ['Consulte el Apéndice para los protocolos de quimioterapia en hurones.'],
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '0.1 mg/kg i.v. q7-14d',
        indicacion: 'Linfoma no epiteliotrópico de células B cutáneo (en cacatúa paraguas)',
      },
    ],
    reptiles: [
      {
        especie: 'Iguana verde',
        dosis: '0.008 mg/kg i.v. como parte del protocolo de quimioterapia para el linfoma (un informe de caso).',
        indicacion: 'Linfoma',
      },
    ],
  },
};
