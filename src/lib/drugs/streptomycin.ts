import { Drug } from '../drug.model';

export const streptomycinDrug: Drug = {
  id: 'streptomycin',
  meta_data: {
    nombre_generico: 'Estreptomicina',
    nombres_comerciales: ['Devomycin'],
    grupo_farmacologico: 'Aminoglucósido',
    status_regulatorio: 'POM-V',
  },
  resumen_clinico: {
    puntos_clave: [
      'Inhibe la síntesis de proteínas bacterianas, lo que resulta en un efecto bactericida que depende de la concentración.',
      'Activo contra una variedad de patógenos Gram-negativos y algunos Gram-positivos, aunque la resistencia está bastante extendida.',
      'Indicado específicamente en el tratamiento de infecciones causadas por Leptospira y Mycobacterium tuberculosis (en combinación con otros fármacos).',
      'No utilizar en cobayas, hámsters, jerbos, ratas y ratones.',
      'No utilizar en rapaces y utilizar con precaución en otras razas de aves.',
    ],
    usos_principales: 'Activo contra una variedad de patógenos Gram-negativos y algunos Gram-positivos, aunque la resistencia está bastante extendida y es menos activo que otros aminoglucósidos. Está específicamente indicado en el tratamiento de infecciones causadas por Leptospira y Mycobacterium tuberculosis (en combinación con otros fármacos). Los aminoglucósidos requieren un ambiente rico en oxígeno para ser efectivos, por lo que son ineficaces en sitios de baja tensión de oxígeno (abscesos, exudados) y todos los anaerobios obligados son resistentes. El uso de estreptomicina es limitado y si se indica un aminoglucósido, otros miembros de la familia se emplean más comúnmente (p. ej., gentamicina). Existe un marcado efecto post-antibiótico, lo que permite el uso de regímenes de dosificación por pulsos que pueden limitar la toxicidad. La dosificación 2-3 veces por semana se utiliza para tratar la micobacteriosis en humanos.',
  },
  informacion_cliente: [
    'Antibiótico inyectable.',
    'Puede causar toxicidad en los oídos y los riñones.',
    'No administrar a ciertas especies de roedores y aves.',
    'Informe al veterinario sobre cualquier otro medicamento que esté tomando su mascota.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['conejos'],
        indicacion: 'Infecciones bacterianas',
        vias: ['SC'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 50,
          dosis_max: 50,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h',
        notas_tecnicas: 'En combinación con 40 mg/kg de penicilina.'
      }
    ]
  }
};
