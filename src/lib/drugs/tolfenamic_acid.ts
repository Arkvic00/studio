import type { Drug } from '../index';

export const tolfenamicAcidDrug: Drug = {
  id: 'tolfenamic-acid',
  meta_data: {
    nombre_generico: 'Ácido tolfenámico',
    nombres_comerciales: ['Tolfedine'],
    grupo_farmacologico: 'AINE',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Alivio de la inflamación y el dolor agudos y crónicos.',
      'La enfermedad hepática prolongará el metabolismo del ácido tolfenámico, lo que puede llevar a la acumulación del fármaco y a una sobredosis con dosis repetidas.',
      'Usar con precaución en enfermedades renales y en el período perioperatorio.',
      'Existe evidencia emergente de que el ácido tolfenámico puede tener actividad anticancerígena contra algunos tipos de tumores.',
    ],
    usos_principales: 'Alivio de la inflamación y el dolor agudos y crónicos.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: ['Observar las precauciones normales.'],
  contraindicaciones_precauciones: {
    contraindicaciones: [
      'No administrar a pacientes deshidratados, hipovolémicos o hipotensos o a aquellos con enfermedad gastrointestinal o problemas de coagulación sanguínea.',
      'No administrar a animales gestantes o a animales de menos de 6 semanas de edad.',
    ],
    precauciones: [
      'Los signos gastrointestinales pueden ocurrir en todos los animales después de la administración de AINE. Suspender la terapia si esto persiste más de 1-2 días.',
      'Algunos animales desarrollan signos con un fármaco AINE y no con otro. Se debe permitir un período de lavado de 1 a 2 semanas antes de comenzar con otro AINE después del cese de la terapia.',
      'Suspender la terapia inmediatamente si se sospecha de sangrado gastrointestinal.',
    ],
  },
  reacciones_adversas: {
    comunes: ['Signos gastrointestinales.'],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Otros AINE y glucocorticoides',
        descripcion:
          'No administrar concomitantemente o dentro de las 24 horas posteriores.',
      },
      {
        farmaco: 'Otros agentes potencialmente nefrotóxicos (p. ej., aminoglucósidos)',
        descripcion: 'No administrar con estos agentes.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Inhibición de la ciclooxigenasa (COX), pero no está claro si inhibe preferentemente la COX-2 sobre la COX-1. La inhibición de la COX limita la producción de prostaglandinas implicadas en la inflamación. También se ha informado que tiene una acción antagonista directa sobre los receptores de prostaglandinas.',
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
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Tabletas',
      concentraciones: ['6 mg', '20 mg', '60 mg'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Cobayas',
        dosis: '2 mg/kg s.c. q24h',
        indicacion: 'Alivio de la inflamación y el dolor',
      },
    ],
  },
};
