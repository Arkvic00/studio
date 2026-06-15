import type { Drug } from '../index';

export const vitaminADrug: Drug = {
  id: 'vitamin_a',
  meta_data: {
    nombre_generico: 'Vitamina A',
    nombres_comerciales: ['Roaccutane'],
    nombres_alternativos: ['Retinol', 'Isotretinoína', 'Tretinoína'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Hormona nutricional liposoluble que regula la expresión génica.',
      'Nutriente esencial para muchos procesos metabólicos, incluida la reproducción normal, la función inmunológica, la visión y los tejidos epiteliales.',
      'Se utiliza para el tratamiento de la hipovitaminosis A y, junto con otras terapias, para la adenitis sebácea en conejos.',
      'Teratogénico; se deben usar guantes al aplicar preparaciones tópicas.',
    ],
    usos_principales: 'Tratamiento de la hipovitaminosis A y adenitis sebácea.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'Evite el uso simultáneo de preparaciones orales y tópicas debido a la toxicidad.',
    'Evite el uso de formulaciones de vitaminas A, D3 y E autorizadas para animales de granja, ya que están demasiado concentradas para el uso en animales pequeños.',
    'Minimice la exposición del medicamento a la luz solar.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No usar en animales gestantes.'],
    precauciones: [
      'Los animales que reciben dosis orales deben ser monitoreados para detectar toxicidad por vitamina A.',
      'Los reptiles carnívoros e insectívoros pueden no ser capaces de convertir los carotenoides de origen vegetal en vitamina A, por lo que se recomienda una fuente animal de vitamina A (palmitato de retinilo).',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Se informan muchos efectos adversos en humanos después del uso de isotretinoína oral, que involucran predominantemente la piel, los parámetros hematológicos, la hepatotoxicidad, el sistema nervioso y los cambios óseos.',
      'Se informa depresión, anorexia y desprendimiento de la piel en reptiles después de una sobredosis.',
      'Teratogénico si se administra en el primer trimestre o en dosis altas.',
      'Puede observarse enrojecimiento y pigmentación de la piel después de varios días.',
      'Cambia el contenido de lípidos de las lágrimas, lo que puede provocar queratoconjuntivitis seca.',
      'Puede causar hiperlipidemia y puede ser hepatotóxico en dosis altas.',
      'El uso prolongado de vitamina A puede promover la pérdida de calcio de los huesos y provocar hipercalcemia.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Ciclosporina',
        descripcion: 'La vitamina A oral puede alterar los niveles de ciclosporina, que por lo tanto deben controlarse de cerca.',
      },
      {
        farmaco: 'Otras preparaciones tópicas',
        descripcion:
          'No use preparaciones tópicas simultáneamente con otros medicamentos tópicos.',
      },
    ],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: 'La tretinoína (ácido todo trans retinoico) es la forma ácida de la vitamina A y la isotretinoína (ácido 13-cis retinoico) es un isómero de la tretinoína.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '50,000 UI/ml',
      notas: ['Vitamina A (retinol)'],
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Cápsulas',
      concentraciones: ['10 mg', '20 mg'],
      notas: ['Isotretinoína (Roaccutane)'],
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Componente de varios suplementos multivitamínicos en polvo y líquidos.',
    },
    {
      tipo: 'Tópico',
      forma_farmaceutica: 'Crema',
      concentracion_texto: '0.025%',
      notas: ['Tretinoína'],
    },
    {
      tipo: 'Tópico',
      forma_farmaceutica: 'Gel',
      concentracion_texto: '0.01%',
      notas: ['Tretinoína'],
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '500-1000 UI/kg i.m. una vez',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Cobayas, petauros del azúcar',
        dosis: '50-500 UI/kg i.m. o 10 mg de betacaroteno/kg de alimento',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Hámsters',
        dosis: '50-500 UI/kg i.m. o 2 μg de palmitato de vitamina A/g de alimento',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Erizos',
        dosis: '400 UI/kg p.o., i.m. q24-48h',
        indicacion: 'Hipovitaminosis A',
        notas: ['Solo administrar por vía parenteral hasta por 2 dosis, luego por vía oral.'],
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '1000-20,000 UI/ave i.m. una vez o p.o. q12h',
        indicacion: 'Hipovitaminosis A',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '1000-2000 UI/kg p.o. q7-14d',
        indicacion: 'Hipovitaminosis A',
      },
    ],
    amphibians: [
      {
        especie: 'Anfibios',
        dosis: '1000 UI/kg p.o. diariamente durante 14 días, luego q7d',
        indicacion: 'Hipovitaminosis A',
      },
    ],
  },
};
