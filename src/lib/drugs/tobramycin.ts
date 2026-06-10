import type { Drug } from '../index';

export const tobramycinDrug: Drug = {
  id: 'tobramycin',
  meta_data: {
    nombre_generico: 'Tobramicina',
    nombres_comerciales: ['Nebcin', 'Tobramycin'],
    grupo_farmacologico: 'Aminoglucósido',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Tratamiento de infecciones por gramnegativos.',
      'Menos activo contra la mayoría de los organismos gramnegativos que la gentamicina, pero parece ser más activo contra Pseudomonas aeruginosa.',
      'Los aminoglucósidos son ineficaces en sitios con baja tensión de oxígeno (p. ej., abscesos).',
      'Las células cilíndricas que se encuentran en el sedimento urinario son un signo temprano de nefrotoxicidad.',
      'Administrar por vía intravenosa lentamente.',
    ],
    usos_principales:
      'Tratamiento de infecciones por gramnegativos, especialmente Pseudomonas aeruginosa.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No usar producto oftálmico donde haya ulceración corneal.',
      'Los aminoglucósidos pueden estar contraindicados en pequeños herbívoros.',
    ],
    precauciones: [
      'La tobramicina se considera menos nefrotóxica que la gentamicina.',
      'Los animales geriátricos o aquellos con función renal disminuida solo deben recibir este fármaco por vía sistémica cuando sea absolutamente necesario.',
    ],
  },
  reacciones_adversas: {
    comunes: [],
    raras: ['Nefrotoxicidad'],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Otros agentes nefrotóxicos, ototóxicos o neurotóxicos (p. ej., anfotericina B, furosemida)',
        descripcion: 'Evitar el uso concurrente.',
      },
      {
        farmaco: 'Antibióticos beta-lactámicos (p. ej., penicilinas, cefalosporinas) o heparina',
        descripcion:
          'Los aminoglucósidos pueden ser inactivados químicamente por estos fármacos cuando se mezclan in vitro.',
      },
      {
        farmaco: 'Relajantes musculares no despolarizantes (p. ej., pancuronio)',
        descripcion: 'El efecto puede ser potenciado por los aminoglucósidos.',
      },
      {
        farmaco: 'Penicilinas o cefalosporinas',
        descripcion:
          'Puede ocurrir sinergismo cuando los aminoglucósidos se usan con penicilinas o cefalosporinas.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Los aminoglucósidos inhiben la síntesis de proteínas bacterianas. Son bactericidas y su mecanismo de acción depende de la concentración, lo que conduce a un marcado efecto post-antibiótico, permitiendo regímenes de dosificación por pulsos que pueden limitar la toxicidad.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '40 mg/ml',
      valor_concentracion: 40,
      unidad_concentracion: 'mg/ml',
    },
  ],
  dosis: {
    birds: [
      {
        especie: 'Aves',
        dosis: '2.5-5 mg/kg i.m. q8-12h',
        indicacion: 'Infecciones por gramnegativos',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '2.5 mg/kg i.m. q24-72h',
        indicacion: 'Infecciones por gramnegativos',
      },
    ],
  },
};
