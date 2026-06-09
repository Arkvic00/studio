export interface Patient {
  nombre: string;
  especie: string;
  peso: string | number;
}

export interface Calculation {
  id: number;
  drugId: string;
  dose: number;
  concentration: number;
  indicationIndex: number;
  presentationIndex: number;
}

export interface DrugImage {
  [key: string]: string;
}

interface MathParams {
  tipo_calculo: 'fija' | 'mg_kg';
  dosis_recomendada: number;
  dosis_min?: number | null;
  dosis_max?: number | null;
  tope_maximo_mg?: number | null;
  unidad_calculo: string;
}

interface Frecuencia {
  texto_ui: string;
  intervalo_horas: number;
}

interface Dosis {
  indicacion: string;
  vias: string[] | string;
  math: MathParams;
  frecuencia?: Frecuencia;
  duracion_tratamiento?: string;
  notas_tecnicas?: string;
}

interface Interaccion {
  farmaco: string;
  efecto: string;
  severidad: 'Grave' | 'Importante' | 'Moderada' | 'Leve';
}

interface Presentacion {
  tipo: string;
  concentracion_texto: string;
  valor_concentracion: number;
  unidad_concentracion: string;
  es_divisible: boolean;
}

export interface Drug {
  id: string;
  meta_data: {
    nombre_generico: string;
    nombres_comerciales: string[];
    grupo_farmacologico: string;
    status_regulatorio: string;
  };
  resumen_clinico: {
    puntos_clave: string[];
    usos_principales: string;
    inicio_accion?: string;
    duracion_efecto?: string;
  };
  informacion_cliente: string[];
  parametros_dosificacion: {
    [key: string]: Dosis[];
  };
  seguridad_y_alertas: {
    contraindicaciones: string[];
    precauciones?: string[];
    efectos_adversos: string[];
    monitoreo_recomendado?: string[];
    instrucciones_manejo?: string;
    seguridad_reproductiva?: {
      gestacion: string;
      lactancia: string;
    };
    sobredosis: {
      signos: string[];
      tratamiento: string;
      contraindicado_en_urgencia?: string[];
    };
    interacciones_farmacologicas: Interaccion[];
  };
  farmacologia_clinica: {
    mecanismo_accion: string;
    farmacocinetica: string | {
      general: string;
      datos_especie: {
        [key: string]: any;
      };
    };
  };
  presentaciones_comerciales: Presentacion[];
}

export interface Pathology {
  id: string;
  nombre: string;
  descripcion: string;
  etiologia: string; // Agente causal o origen
  sintomas: string[];
  diagnostico: string[];
  tratamiento: string;
  prevencion_control: string;
  especies_afectadas: string[];
  imagenes?: string[];
  categoria?: 'Infecciosa' | 'Metabólica' | 'Genética' | 'Ortopédica' | 'Cardíaca' | 'Ocular' | 'Otros';
}

export interface Breed {
  id: string;
  nombre: string;
  especie: string;
  descripcion: string;
  icon: string;
  predisposiciones: {
    patologiaId: string; // Link a la patología
    nota_especifica?: string;
  }[];
}

export interface ExoticSpeciesData {
    id: string;
    name: string;
    sections: {
        [key: string]: {
            title: string;
            icon: string;
            content: any;
        }
    }
}

export interface Constante {
  esp: string;
  icon: string;
  t_min: number;
  t_max: number;
  fc_min: number;
  fc_max: number;
  fr_min: number;
  fr_max: number;
  tllc: string;
  hemograma: { hto: string; gb: string; plaq: string; } | null;
}

export interface Vacuna {
  edad: string;
  vacuna: string;
  tipo: string;
}

export interface GestationData {
  [key: string]: {
    avg: number;
    eco: number;
    deworm: number;
    rx: number;
  };
}
