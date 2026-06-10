import type { Drug } from '../drugs.types';

export const prochlorperazineDrug: Drug = {
    id: "prochlorperazine",
    meta_data: {
      nombre_generico: "Proclorperazina",
      nombres_comerciales: "Buccastem, Prochlorperazine, Stemetil",
      grupo_farmacologico: "Antiemético (Fenotiazina)",
      status_regulatorio: "POM",
    },
    resumen_clinico: {
      puntos_clave: [
        "Antiemético fenotiazínico.",
        "Bloquea receptores de dopamina, muscarínicos y 5-HT3 en la zona gatillo quimiorreceptora.",
        "Principalmente usado para controlar el mareo por movimiento y vómitos asociados a enfermedad vestibular.",
        "Puede causar sedación e hipotensión.",
      ],
      usos_principales: "Control de emesis por mareo por movimiento y enfermedad vestibular.",
      inicio_accion: "Variable",
      duracion_efecto: "Variable",
    },
    informacion_cliente: [
      "Puede causar somnolencia o debilidad.",
      "Evitar el uso con otros medicamentos sedantes sin consultar al veterinario.",
    ],
    farmacologia_y_seguridad: {
      farmacodinamia: "Bloquea receptores de dopamina, acetilcolina muscarínicos y 5-HT3 en la zona gatillo quimiorreceptora y el centro del vómito.",
      contraindicaciones: [],
      efectos_adversos: [
        "Sedación, depresión.",
        "Hipotensión.",
        "Reacciones extrapiramidales (rigidez, temblores, debilidad, inquietud).",
      ],
      interacciones_farmacologicas: [
        { interaccion: "Depresores del SNC (anestésicos, analgésicos narcóticos)", efecto: "Aumento de la depresión del SNC." },
        { interaccion: "Antiácidos o antidiarreicos (subsalicilato de bismuto, caolín/pectina)", efecto: "Pueden reducir la absorción gastrointestinal de las fenotiazinas orales." },
        { interaccion: "Propranolol", efecto: "Puede resultar en niveles sanguíneos elevados de ambos fármacos." },
        { interaccion: "Adrenalina", efecto: "Las fenotiazinas bloquean los receptores alfa-adrenérgicos, lo que puede llevar a una actividad beta sin oposición, causando vasodilatación y aumento de la frecuencia cardíaca si se administra adrenalina." },
      ],
      monitoreo_recomendado: ["Vigilar nivel de sedación.", "Monitorear la presión arterial, especialmente con dosis altas o uso concomitante de otros fármacos."],
      instrucciones_manejo: "Observar precauciones normales.",
      sobredosis: {},
    },
    parametros_dosificacion: {
      mamiferos: [
        { especie: "Conejo", via: "p.o.", dosis: "0.2–0.5 mg/kg", frecuencia: "q8h", notas: "Para reducción de posible mareo por movimiento con tortícolis." },
      ]
    },
    presentaciones_comerciales: [
      { tipo: "Inyectable", concentracion_texto: "12.5 mg/ml solución", valor_concentracion: 12.5, unidad_concentracion: "mg/ml", es_divisible: false },
      { tipo: "Oral", concentracion_texto: "3 mg, 5 mg tabletas", es_divisible: true },
      { tipo: "Oral", concentracion_texto: "5 mg/5 ml jarabe", valor_concentracion: 1, unidad_concentracion: "mg/ml", es_divisible: false },
    ]
  };