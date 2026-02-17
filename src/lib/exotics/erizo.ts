import type { ExoticSpeciesData } from '@/lib/types';

export const erizoData: ExoticSpeciesData = {
  id: "erizo",
  name: "Erizo",
  sections: {
    introduccion: {
      title: "Introducción y Biología",
      icon: "Info",
      content: [
        { 
            title: "Generalidades", 
            icon: "Dna",
            items: [
                "Especie: Erizo pigmeo africano (*Atelerix albiventris*).",
                "Origen: África Occidental y Central.",
                "Comportamiento: Solitarios, nocturnos. No hibernan, pero entran en letargo (torpor) en temperaturas extremas."
            ]
        },
        { 
            title: "Comportamiento Defensivo y Único", 
            icon: "Shield",
            items: [
                "Defensa: Se enrollan en una bola, extienden sus espinas y emiten silbidos.",
                "Auto-unción: Producen saliva espumosa ante sustancias nuevas y la esparcen sobre sus espinas. Su propósito es desconocido."
            ]
        },
        { 
            title: "Sentidos y Constantes", 
            icon: "HeartPulse",
            items: [
                "Sentidos: Agudo sentido del olfato y oído; visión poco desarrollada.",
                "Esperanza de vida: 5-7 años (máx. 10).",
                "Temperatura: 36.1–37.2 °C.",
                "Frecuencia Cardíaca: 180–280 lpm.",
                "Frecuencia Respiratoria: 25–50 rpm."
            ]
        },
      ]
    },
    anatomia_fisiologia: {
        title: "Anatomía y Fisiología",
        icon: "Stethoscope",
        content: [
            {
                title: "Estructura y Músculos",
                icon: "Bone",
                items: [
                    "El dorso está cubierto de espinas.",
                    "Un músculo orbicular potente les permite enrollarse completamente.",
                    "Poseen gran cantidad de grasa subcutánea, incluida grasa parda para el letargo."
                ]
            },
            {
                title: "Sistema Digestivo y Dental",
                icon: "Utensils",
                items: [
                    "Estómago simple, sin ciego, y pueden vomitar.",
                    "Tránsito GI: 12-16 horas.",
                    "Fórmula Dental: I3/2, C1/1, PM3/2, M3/3 (Total: 36 dientes).",
                    "Propensos a sarro y enfermedad periodontal severa."
                ]
            },
            {
                title: "Sistema Reproductor",
                icon: "Users",
                items: [
                    "Sexado (Macho): Prepucio prominente en el abdomen medio. Testículos intraabdominales.",
                    "Sexado (Hembra): Distancia anogenital muy corta.",
                    "Glándulas accesorias (Macho): Crecen hasta el 10% del peso corporal en temporada reproductiva. No confundir con tumores."
                ]
            }
        ]
    },
    alojamiento_dieta: {
        title: "Alojamiento y Dieta",
        icon: "Home",
        content: [
            {
                title: "Alojamiento y Ambiente",
                icon: "Home",
                points: [
                    { text: "Individual, en recintos a prueba de escapes (mín. 60x90 cm).", isProhibited: false },
                    { text: "Ambiente tenue, tranquilo, con escondite y sustrato suave (periódico reciclado).", isProhibited: false },
                    { text: "Rueda de ejercicio de pared sólida es obligatoria para prevenir lesiones.", isProhibited: false },
                    { text: "Temperatura estricta: 24–30°C para evitar letargo o golpe de calor.", isProhibited: false, isCritical: true }
                ]
            },
            {
                title: "Dieta y Nutrición",
                icon: "Utensils",
                points: [
                    { text: "Insectívoros/omnívoros. Base de dieta comercial para erizos o comida para gatos/perros baja en grasa.", isProhibited: false },
                    { text: "Suplementar con insectos (gusanos, grillos) y pequeñas cantidades de frutas/verduras.", isProhibited: false },
                    { text: "Prohibido: Nunca dar nueces o granos duros (se atoran en el paladar).", isProhibited: true },
                    { text: "Prohibido: Nunca dar leche (causa diarrea).", isProhibited: true },
                    { text: "Evitar dietas exclusivas de larvas de insectos (riesgo de enfermedad ósea metabólica).", isProhibited: true, isCritical: true }
                ]
            }
        ]
    },
    reproduccion_cria: {
        title: "Reproducción y Cría",
        icon: "Baby",
        content: {
            table: {
                 headers: ["Parámetro", "Valor"],
                 rows: [
                    { param: "Madurez Sexual", value: "61-68 días" },
                    { param: "Primer Cruce Recomendado", value: "6-8 meses" },
                    { param: "Ciclo Estral", value: "Ovulación inducida" },
                    { param: "Gestación", value: "34-37 días" },
                    { param: "Tamaño de Camada", value: "3-5 crías" },
                    { param: "Apertura de Ojos", value: "13-24 días" }
                 ]
            },
            points: [
                { text: "Las crías nacen con espinas blandas que se endurecen en 24h.", isProhibited: false },
                { text: "El calostro se absorbe solo en las primeras 24-72h. Huérfanos pueden criarse con fórmula para cachorros/gatitos.", isProhibited: false },
                { text: "Crítico: El estrés causa canibalismo o abandono. Retirar al macho y no molestar el nido por 5-10 días.", isProhibited: true, isCritical: true }
            ]
        }
    },
    manejo_muestras: {
        title: "Manejo y Toma de Muestras",
        icon: "Hand",
        content: [
            {
                title: "Sujeción y Examen Físico",
                icon: "Hand",
                items: [
                    "Sujeción: Usar guantes de cuero. Para desenrollar: colocar en agua poco profunda o levantar por las patas traseras ('carretilla').",
                    "Examen ventral: Colocar sobre una superficie transparente (vidrio, malla) y mirar desde abajo.",
                    "Sonidos normales: Resoplidos, gruñidos y estornudos son comunes y no indican enfermedad."
                ]
            },
            {
                title: "Toma de Muestras e Imagenología",
                icon: "TestTube",
                items: [
                    "Sangre: Anestesia obligatoria. Vena cava craneal es el sitio de elección para volúmenes útiles.",
                    "Técnica Vena Cava: Insertar aguja en la muesca entre esternón y primera costilla, ángulo de 30° hacia la cadera opuesta.",
                    "Radiografía: Jalar el manto de espinas dorsalmente con una pinza para no obstruir la imagen de los órganos."
                ]
            },
            {
                title: "Valores de Laboratorio Únicos",
                icon: "Beaker",
                items: [
                    "Es normal encontrar niveles de BUN más altos.",
                    "Es normal encontrar niveles de Sodio más bajos que en perros/gatos."
                ]
            }
        ]
    },
    patologias: {
        title: "Patologías Comunes",
        icon: "Stethoscope",
        content: [
            {
                category: "Gastrointestinal y Zoonosis",
                icon: "Bug",
                diseases: [
                    { name: "Portadores de Salmonella", description: "Muy común que sean portadores asintomáticos, representando un riesgo de contagio para humanos.", tags: ["Zoonosis", "Bacteriano"] },
                    { name: "Herpes Simple Humano (HSV-1)", description: "Susceptibles al contagio por humanos con 'fuegos' labiales activos. Es fatal para ellos.", tags: ["Zoonosis", "Viral", "Mortal"] },
                    { name: "Obstrucción por Cuerpos Extraños", description: "Tendencia a tragar cabello humano, fibras de alfombra y trozos de goma.", tags: ["Urgencia"] }
                ]
            },
            {
                category: "Neoplasias y Odontología",
                icon: "Microscope",
                diseases: [
                    { name: "Carcinoma de Células Escamosas (Boca)", description: "Cáncer oral muy frecuente y agresivo. Causa caída de dientes y anorexia.", tags: ["Neoplasia", "Común"] },
                    { name: "Enfermedad Periodontal", description: "Acumulación severa de sarro es muy común.", tags: ["Común"] }
                ]
            },
            {
                category: "Urogenital y Cardiovascular",
                icon: "HeartPulse",
                diseases: [
                    { name: "Tumores Uterinos e Hiperplasia Endometrial", description: "Alta incidencia en hembras >1 año. Causa sangrado vaginal.", tags: ["Neoplasia", "Común"] },
                    { name: "Nefritis y Urolitiasis", description: "Inflamación renal y formación de cálculos, ligados a dietas inadecuadas.", tags: ["Metabólico"] },
                    { name: "Miocardiopatía Dilatada (MCD)", description: "Corazón agrandado y débil que lleva a falla cardíaca.", tags: ["Crónico"] }
                ]
            },
            {
                category: "Neurológico y Dermatológico",
                icon: "Brain",
                diseases: [
                    { name: "Síndrome del Erizo Tambaleante (WHS)", description: "Enfermedad genética desmielinizante progresiva, similar a esclerosis múltiple. No tiene cura.", tags: ["Genético", "Fatal"] },
                    { name: "Ácaros (Caparinia, Chorioptes)", description: "Causa principal de pérdida de espinas, costras y prurito.", tags: ["Parásito", "Común"] },
                    { name: "Dermatofitosis (Tiña)", description: "Infección por hongos (Microsporum, Trichophyton).", tags: ["Hongo"] }
                ]
            },
             {
                category: "Oculares y Respiratorios",
                icon: "Droplet",
                diseases: [
                    { name: "Proptosis Ocular", description: "El ojo se sale de la órbita fácilmente por sus órbitas poco profundas o por trauma con sus propias espinas.", tags: ["Urgencia"] },
                    { name: "Infecciones Respiratorias Bacterianas", description: "Susceptibles a *Pasteurella*, *Bordetella*. Prevenible con buena higiene y ventilación.", tags: ["Bacteriano"] }
                ]
            }
        ]
    }
  }
};