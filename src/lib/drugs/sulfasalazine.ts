import { Drug } from '../drug.model';

export const sulfasalazineDrug: Drug = {
  id: 'sulfasalazine',
  meta_data: {
    nombre_generico: 'Sulfasalazina',
    nombres_comerciales: ['Salazopyrin', 'Sulphasalazine'],
    grupo_farmacologico: 'Antiinflamatorio',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [
      'Profármaco: un enlace diazo que une la sulfapiridina al 5-ASA es escindido por las bacterias del colon para liberar 5-ASA libre, que actúa localmente en altas concentraciones en el colon como antiinflamatorio.',
      'Utilizado en el tratamiento de la colitis.',
      'Existe un riesgo significativo de queratoconjuntivitis seca (QCS) y se deben realizar pruebas de Schirmer periódicas.',
      'Los efectos adversos son poco frecuentes, pero incluyen QCS, vómitos, dermatitis alérgica e ictericia colestásica.',
    ],
    usos_principales: 'Utilizado en el tratamiento de la colitis.',
  },
  informacion_cliente: [
    'Administrar con alimentos para reducir las molestias gastrointestinales.',
    'Vigilar la aparición de sequedad ocular (queratoconjuntivitis seca).',
    'Informe al veterinario si su mascota está tomando otros medicamentos.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones'],
        indicacion: 'Colitis',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q8-24h'
      }
    ]
  }
};
