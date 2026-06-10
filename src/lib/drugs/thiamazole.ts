import type { Drug } from '../index';

export const thiamazoleDrug: Drug = {
  id: 'thiamazole',
  meta_data: {
    nombre_generico: 'Tiamazol (Metimazol)',
    nombres_comerciales: ['Felimazole', 'Thiafeline', 'Thyronorm'],
    grupo_farmacologico: 'Antitiroideo',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Se utiliza para el control de los niveles de hormona tiroidea en animales con hipertiroidismo.',
      'Controlar la terapia en función de las concentraciones séricas de tiroxina (4-6 horas después de la dosis) y ajustar la dosis en consecuencia.',
      'Evaluar la hematología, la bioquímica y la T4 sérica total con regularidad.',
      'Los geles transdérmicos de tiamazol pueden ser una alternativa para los animales que desarrollan efectos secundarios gastrointestinales con las formulaciones orales.',
    ],
    usos_principales:
      'Control de los niveles de hormona tiroidea en animales con hipertiroidismo.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No usar en animales gestantes o lactantes.'],
    precauciones: [
      'El tratamiento del hipertiroidismo puede disminuir la tasa de filtración glomerular, lo que eleva los valores séricos de urea y creatinina, y en ocasiones puede desenmascarar una insuficiencia renal oculta.',
      'Los animales que tienen una reacción adversa al carbimazol es probable que también tengan una reacción adversa al tiamazol.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Vómitos, inapetencia/anorexia (a menudo transitorios).',
      'Ictericia, citopenias, enfermedades inmunomediadas y cambios dermatológicos (prurito, alopecia y autotraumatismo) son raros.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Fenobarbital',
        descripcion: 'Puede reducir la eficacia clínica.',
      },
      {
        farmaco: 'Fármacos benzimidazólicos',
        descripcion:
          'Reducen la oxidación hepática y pueden provocar un aumento de las concentraciones del fármaco en circulación.',
      },
      {
        farmaco: 'Yodo-131',
        descripcion: 'El tiamazol debe suspenderse antes del tratamiento con yodo-131.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Interfiere en la síntesis de las hormonas tiroideas al inhibir las reacciones catalizadas por la peroxidasa (bloquea la oxidación del yoduro), la yodación de los residuos de tirosilo en la tiroglobulina y el acoplamiento de las mono- o di-yodotirosinas para formar T3 y T4.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['1.25 mg', '2.5 mg', '5 mg'],
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '5 mg/ml',
      valor_concentracion: 5,
      unidad_concentracion: 'mg/ml',
    },
    {
      tipo: 'Transdérmico',
      forma_farmaceutica: 'Gel',
      disponibilidad: 'Bajo prescripción para pacientes específicos.',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Cobayas',
        dosis: '0.5-2.0 mg/kg p.o. q24h',
        indicacion: 'Hipertiroidismo',
      },
    ],
    reptiles: [
      {
        especie: 'Serpientes',
        dosis: '1 mg/kg p.o. q24h durante 30 días',
        indicacion: 'Hipertiroidismo',
      },
    ],
  },
};
