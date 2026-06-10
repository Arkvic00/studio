import { Drug } from '../drug.model';

export const sameDrug: Drug = {
  id: 'same',
  meta_data: {
    nombre_generico: 'S-Adenosilmetionina (SAMe)',
    nombres_comerciales: ['Denamarin', 'Denosyl', 'Doxion', 'Hepaticare', 'Hepatosyl Plus', 'MaxxiSAMe', 'Samylin', 'Zentonil Advanced'],
    grupo_farmacologico: 'Nutracéutico',
    status_regulatorio: 'GSL',
  },
  resumen_clinico: {
    puntos_clave: [
      'Molécula endógena importante en el metabolismo hepático.',
      'Efectos antidepresivos documentados en humanos.',
      'Aumenta los niveles de glutatión hepático, un potente antioxidante.',
      'Uso como coadyuvante en enfermedades hepáticas y con fármacos hepatotóxicos.',
      'Seguridad no probada en la preñez.',
      'Puede causar efectos serotoninérgicos aditivos con otros medicamentos (tramadol, ISRS, etc.).',
      'Puede aumentar el aclaramiento de fármacos que sufren glucuronidación hepática.',
    ],
    usos_principales: 'Tratamiento coadyuvante para enfermedades hepáticas, especialmente las inducidas por hepatotoxinas agudas. También se puede utilizar en pacientes en tratamiento a largo plazo con fármacos potencialmente hepatotóxicos.',
  },
  informacion_cliente: [
    'Administrar con el estómago vacío para una mejor absorción.',
    'Las tabletas no deben romperse.',
    'Consultar al veterinario si se observan efectos adversos gastrointestinales.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones', 'roedores'],
        indicacion: 'Soporte hepático',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 20,
          dosis_max: 100,
          unidad_calculo: 'mg/kg'
        },
        intervalo: '24h'
      }
    ],
    reptiles: [
      {
        indicacion: 'Soporte hepático',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 30,
          dosis_max: 30,
          unidad_calculo: 'mg/kg'
        },
        intervalo: '24h'
      }
    ]
  }
};
