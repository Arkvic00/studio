import type { Drug } from '../index';

export const propranololDrug: Drug = {
  id: 'propranolol',
  meta_data: {
    nombre_generico: 'Propranolol',
    nombres_comerciales: [],
    grupo_farmacologico: '',
    status_regulatorio: 'POM',
  },
  resumen_clinico: {
    puntos_clave: [],
    usos_principales: '',
    inicio_accion: '',
    duracion_efecto: '',
  },
  informacion_cliente: [],
  contraindicaciones_precauciones: {
    contraindicaciones: [],
    precauciones: [],
  },
  reacciones_adversas: {
    comunes: [],
    raras: [],
  },
  interacciones_farmacos: {
    observadas: [],
    potenciales: [],
  },
  farmacologia_clinica: {
    mecanismo_accion: '',
    farmacocinetica: '',
  },
  presentaciones_comerciales: [],
  dosis: {},
};
