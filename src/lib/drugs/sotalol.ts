import type { Drug } from '@/lib/types';

export const sotalolDrug: Drug = {
  id: "sotalol",
  meta_data: {
    nombre_generico: "Sotalol",
    nombres_comerciales: ["Sotacor", "Sotalol*"],
    grupo_farmacologico: "Antiarrítmico de Clase III; Bloqueador beta no selectivo",
    status_regulatorio: "POM"
  },
  resumen_clinico: {
    puntos_clave: [
      "Prolonga el potencial de acción y el periodo refractario (Clase III).",
      "Beta-bloqueante no selectivo débil (aprox. 1/3 de la potencia del propranolol).",
      "Tratamiento de elección para arritmias ventriculares en Boxer y Doberman.",
      "Requiere ajuste de dosis en insuficiencia renal (eliminación renal 100%).",
      "Potencialmente proarrítmico si hay hipopotasemia."
    ],
    usos_principales: "Control de arritmias ventriculares y taquicardias supraventriculares asociadas a vías accesorias.",
    inicio_accion: "Rápido (1-2 horas)",
    duracion_efecto: "12 horas"
  },
  informacion_cliente: [
    "No suspenda el medicamento de forma repentina; debe retirarse gradualmente.",
    "Informe si nota que su mascota parece muy débil, se desmaya o tiene dificultad para respirar.",
    "Se requieren controles frecuentes del ritmo cardíaco (Holter o ECG).",
    "El medicamento puede administrarse con o sin comida."
  ],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: "Arritmias ventriculares",
        vias: ["PO"],
        math: {
          tipo_calculo: "mg_kg",
          dosis_recomendada: 1.75,
          dosis_min: 0.5,
          dosis_max: 3.0,
          unidad_calculo: "mg/kg"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        },
        notas_tecnicas: "Iniciar con dosis bajas (1-2 mg/kg) si la función miocárdica está reducida. Combinar con mexiletina para casos refractarios."
      }
    ],
    gato: [
      {
        indicacion: "Taquiarritmias",
        vias: ["PO"],
        math: {
          tipo_calculo: "fija",
          dosis_recomendada: 15,
          dosis_min: 10,
          dosis_max: 20,
          unidad_calculo: "mg/gato"
        },
        frecuencia: {
          texto_ui: "Cada 12 horas",
          intervalo_horas: 12
        }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: [
      "Asma bronquial.",
      "Bradicardia sinusal severa.",
      "Bloqueo AV de 2do o 3er grado.",
      "Falla cardíaca congestiva descompensada.",
      "Intervalo QT prolongado preexistente."
    ],
    efectos_adversos: [
      "Bradicardia e hipotensión.",
      "Broncoespasmo.",
      "Depresión y letargo.",
      "Vómitos y diarrea.",
      "Proarritmia (Torsades de pointes) si hay hipopotasemia."
    ],
    monitoreo_recomendado: [
      "ECG periódico (especialmente intervalo Q-T)",
      "Función renal (Creatinina/BUN)",
      "Niveles de potasio sérico"
    ],
    instrucciones_manejo: "Observar precauciones normales.",
    sobredosis: {
      signos: ["Bradicardia extrema", "Fallo cardíaco agudo", "Hipotensión"],
      tratamiento: "Atropina para bradicardia. Glucagón o Dobutamina para soporte cardíaco."
    },
    interacciones_farmacologicas: [
      { farmaco: "Diuréticos de asa (Furosemida)", efecto: "Riesgo de arritmias por hipopotasemia.", severidad: "Importante" },
      { farmaco: "Antagonistas de calcio", efecto: "Potenciación de la depresión miocárdica.", severidad: "Importante" },
      { farmaco: "Insulina", efecto: "Prolonga el efecto hipoglucemiante.", severidad: "Moderada" }
    ]
  },
  farmacologia_clinica: {
    mecanismo_accion: "Bloquea los canales de potasio retardando la repolarización. Bloqueo competitivo de receptores beta-1 y beta-2.",
    farmacocinetica: "Excreción renal inalterada. Sin metabolismo hepático."
  },
  presentaciones_comerciales: [
    {
      tipo: "Tableta oral",
      concentracion_texto: "40 mg, 80 mg, 160 mg",
      valor_concentracion: 80,
      unidad_concentracion: "mg",
      es_divisible: true
    }
  ]
};
