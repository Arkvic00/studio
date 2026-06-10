import type { Drug } from '../index';

export const vitaminADrug: Drug = {
  id: 'vitamin_a',
  meta_data: {
    nombre_generico: 'Vitamina A (Retinol, Isotretinoína, Tretinoína)',
    nombres_comerciales: ['Roaccutane'],
    grupo_farmacologico: 'Vitamina',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Hormona nutricional liposoluble que regula la expresión génica.',
      'Nutriente esencial para muchos procesos metabólicos, incluida la reproducción normal, la función inmunológica, la visión y los tejidos epiteliales.',
      'Tratamiento de la hipovitaminosis A.',
      'También se utiliza junto con otras terapias apropiadas para la adenitis sebácea en conejos.',
      'Evitar el uso concurrente de preparaciones orales y tópicas debido a la toxicidad.',
      'La vitamina A es teratogénica.',
    ],
    usos_principales: 'Tratamiento de la hipovitaminosis A y adenitis sebácea.',
    inicio_accion: 'Desconocido',
    duracion_efecto: 'Desconocido',
  },
  informacion_cliente: [
    'La vitamina A es teratogénica; se deben usar guantes al aplicar preparaciones tópicas.',
    'Evitar el contacto con los ojos, la boca o las membranas mucosas.',
    'Minimizar la exposición del fármaco a la luz solar.',
  ],
  contraindicaciones_precauciones: {
    contraindicaciones: ['No usar en animales gestantes.'],
    precauciones: [
      'Se han notificado muchos efectos adversos en humanos tras el uso de isotretinoína oral, que afectan predominantemente a la piel, los parámetros hematológicos, la hepatotoxicidad, el sistema nervioso y los cambios óseos.',
      'Teratogénico si se administra en el primer trimestre o en dosis altas.',
    ],
  },
  reacciones_adversas: {
    comunes: [
      'Depresión, anorexia y desprendimiento de la piel en reptiles tras una sobredosis.',
      'Enrojecimiento y pigmentación de la piel.',
      'Queratoconjuntivitis seca.',
      'Hiperlipidemia.',
      'Hepatotóxico a dosis altas.',
      'Pérdida de calcio del hueso e hipercalcemia con el uso prolongado.',
    ],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [
      {
        farmaco: 'Ciclosporina',
        descripcion: 'La vitamina A oral puede alterar los niveles de ciclosporina.',
      },
    ],
    potenciales: [
      'Numerosas, dependiendo de la preparación y la vía de administración. Consulte textos especializados antes de usar con otro fármaco.',
    ],
  },
  farmacologia_clinica: {
    mecanismo_accion:
      'Hormona nutricional liposoluble que regula la expresión génica. Nutriente esencial para muchos procesos metabólicos, incluida la reproducción normal, la función inmunológica, la visión y los tejidos epiteliales. La tretinoína (ácido retinoico todo-trans) es la forma ácida de la vitamina A y la isotretinoína (ácido 13-cis retinoico) es un isómero de la tretinoína.',
    farmacocinetica: 'No hay información disponible.',
  },
  presentaciones_comerciales: [
    {
      tipo: 'Inyectable',
      forma_farmaceutica: 'Solución',
      concentracion_texto: '50,000 UI/ml',
    },
    {
      tipo: 'Oral',
      forma_farmaceutica: 'Cápsulas de isotretinoína',
      concentraciones: ['10 mg', '20 mg'],
    },
    {
      tipo: 'Tópico',
      forma_farmaceutica: 'Crema de tretinoína',
      concentracion_texto: '0.025%',
    },
    {
      tipo: 'Tópico',
      forma_farmaceutica: 'Gel de tretinoína',
      concentracion_texto: '0.01%',
    },
  ],
  dosis: {
    mammals: [
      {
        especie: 'Conejos',
        dosis: '500–1000 UI/kg i.m. una vez',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Cobayas, Petauros del azúcar',
        dosis: '50–500 UI/kg i.m. o 10 mg de betacaroteno/kg de alimento',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Hámsters',
        dosis: '50–500 UI/kg i.m. o 2 μg de palmitato de vitamina A/g de alimento',
        indicacion: 'Hipovitaminosis A',
      },
      {
        especie: 'Erizos',
        dosis: '400 UI/kg p.o., i.m. c/24–48h; solo administrar por vía parenteral hasta 2 dosis, luego por vía oral.',
        indicacion: 'Hipovitaminosis A',
      },
    ],
    birds: [
      {
        especie: 'Aves',
        dosis: '1000–20,000 UI/ave i.m. una vez o p.o. c/12h',
        indicacion: 'Hipovitaminosis A',
      },
    ],
    reptiles: [
      {
        especie: 'Reptiles',
        dosis: '1000–2000 UI/kg p.o. c/7–14d',
        indicacion: 'Hipovitaminosis A',
      },
    ],
    amphibians: [
      {
        especie: 'Anfibios',
        dosis: '1000 UI/kg p.o. al día durante 14 días, luego c/7d',
        indicacion: 'Hipovitaminosis A',
      },
    ],
  },
};
