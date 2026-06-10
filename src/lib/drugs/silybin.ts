import { Drug } from '../drug.model';

export const silybinDrug: Drug = {
  id: 'silybin',
  meta_data: {
    nombre_generico: 'Silibina (Cardo mariano, Silibinina, Silimarina)',
    nombres_comerciales: ['Denamarin', 'Doxion', 'Hepaticare', 'Hepato Support', 'Hepatosyl Plus', 'Samylin', 'Zentonil Advanced'],
    grupo_farmacologico: 'Nutracéutico',
    status_regulatorio: 'AVM-GSL',
  },
  resumen_clinico: {
    puntos_clave: [
      'Actúa como antioxidante y eliminador de radicales libres.',
      'Promueve la síntesis de proteínas de los hepatocitos y aumenta el nivel de glutatión.',
      'Estimula el flujo biliar y la producción de ácidos biliares hepatoprotectores.',
      'Inhibe la producción de leucotrienos, reduciendo la respuesta inflamatoria.',
      'Puede inhibir la isoenzima 2C9 del citocromo P450 microsomal (CYP2C9).',
    ],
    usos_principales: 'Tratamiento coadyuvante de las enfermedades hepáticas, especialmente de las enfermedades hepáticas agudas inducidas por hepatotoxinas. También puede utilizarse en pacientes en tratamiento a largo plazo con fármacos potencialmente hepatotóxicos.',
  },
  informacion_cliente: [
    'Administrar según la pauta prescrita por el veterinario.',
    'Vigilar la aparición de efectos adversos gastrointestinales.',
  ],
  parametros_dosificacion: {
    mamiferos: [
      {
        especie: ['hurones'],
        indicacion: 'Soporte hepático',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 50,
          dosis_max: 250,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q24h'
      }
    ],
    aves: [
      {
        indicacion: 'Soporte hepático',
        vias: ['PO'],
        math: {
          tipo_calculo: 'mg_kg',
          dosis_min: 50,
          dosis_max: 75,
          unidad_calculo: 'mg/kg'
        },
        intervalo: 'q12h'
      }
    ]
  }
};
