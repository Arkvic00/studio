
import type { ExoticSpeciesData } from '@/lib/types';

export const axoloteData: ExoticSpeciesData = {
  id: "axolote",
  name: "Ajolote",
  sections: {
    introduccion: {
      title: "Biología y Fisiología",
      icon: "Dna",
      content: [
        { 
            title: "Identidad y Neotenia", 
            icon: "Info",
            items: [
                "El ajolote mexicano (Ambystoma mexicanum) es una especie neoténica, lo que significa que retiene sus características larvarias (branquias) durante toda su vida adulta y reproductiva.",
                "Su nombre náhuatl, 'Xolotl', significa 'perro de agua'.",
                "Neotenia facultativa vs. obligada: A diferencia de su pariente la salamandra tigre (que puede metamorfosear si su entorno se vuelve hostil), la neotenia del ajolote es obligada.",
            ]
        },
        { 
            title: "Piel y Excreción", 
            icon: "Droplet",
            items: [
                "Producen una capa de moco con propiedades antibacterianas y tóxicas. Mudan y comen esta capa regularmente.",
                "Como anfibios acuáticos, excretan desechos nitrogenados como amoníaco directamente al agua.",
                "No poseen espacio subcutáneo, por lo que las inyecciones SC no son una opción."
            ]
        },
        { 
            title: "Sistema Digestivo y Regeneración", 
            icon: "Atom",
            items: [
                "Carnívoros con un tracto digestivo corto y simple.",
                "Capacidad única de regenerar extremidades completas, aunque a menudo crecen deformes."
            ]
        }
      ]
    },
    alojamiento_manejo: {
        title: "Alojamiento y Calidad del Agua",
        icon: "Home",
        content: [
            {
                title: "Calidad del Agua (Crítico)",
                icon: "Beaker",
                points: [
                    { text: "La piel permeable los hace extremadamente susceptibles a toxinas como el cloro.", isProhibited: false },
                    { text: "Prosperan en agua moderadamente dura. El agua blanda o destilada les causa estrés osmótico severo.", isProhibited: false },
                    { text: "El pH ideal se mantiene entre 6.5 y 8.5.", isProhibited: false }
                ]
            },
            {
                title: "Entorno Físico",
                icon: "Home",
                points: [
                    { text: "Prohibido: La grava es un riesgo de impactación intestinal. Usar lajas de pizarra lisas o fondo desnudo.", isProhibited: true },
                    { text: "Iluminación tenue. La luz intensa les causa estrés crónico.", isProhibited: false },
                    { text: "Prefieren temperaturas frías; los calentadores no son necesarios.", isProhibited: false }
                ]
            }
        ]
    },
    nutricion: {
        title: "Nutrición y Alimentación",
        icon: "Utensils",
        content: [
            {
                title: "Dieta",
                text: "Son carnívoros estrictos. Se les puede alimentar con pellets comerciales, lombrices, o pequeños trozos de carne.",
                icon: "Utensils"
            },
            {
                title: "Riesgos Alimenticios",
                icon: "AlertCircle",
                points: [
                    { text: "Prohibido: Evitar dietas altas en grasa como crías de ratón ('pinkies') o gusanos de cera (waxworms).", isProhibited: true },
                    { text: "Para prevenir impactación, se recomienda alimentarlos con pinzas o sobre una superficie limpia y sin sustrato.", isProhibited: false }
                ]
            }
        ]
    },
    reproduccion_sexado: {
        title: "Reproducción y Sexado",
        icon: "Users",
        content: {
           points: [
                {
                    text: "El sexado solo es fiable en adultos (>1 año). Los machos desarrollan una región cloacal muy abultada, mientras que la de las hembras es plana y su cuerpo es más redondo.",
                    icon: "Users"
                },
                {
                    text: "Es común el canibalismo entre ellos, especialmente en tanques sobrepoblados, resultando en amputaciones de patas o branquias.",
                    icon: "AlertCircle"
                }
           ]
        }
    },
     diagnostico_laboratorio: {
        title: "Diagnóstico y Laboratorio",
        icon: "TestTube",
        content: {
            text: "El examen y los procedimientos diagnósticos deben minimizar el estrés y el contacto directo.",
            critical_points: [
                { title: "Examen Clínico 'Manos Libres'", text: "Observar al animal en un contenedor transparente con agua de su propio tanque.", icon: "Hand" },
                { title: "Radiografías", text: "Tomar con el ajolote dentro de una bolsa o recipiente de plástico con agua, usando un rayo horizontal.", icon: "Camera" },
                { title: "Extracción de Sangre", text: "Procedimiento de alto riesgo bajo anestesia. Se realiza por cardiocentesis o de la vena abdominal central (máx. 1% del peso corporal).", icon: "Droplet", isCritical: true },
                { title: "Peligro con EDTA", text: "El EDTA (tubos de tapa morada) rompe los glóbulos rojos. Usar siempre heparina de litio (tapa verde).", icon: "Ban", isCritical: true },
                { title: "Hematología Normal", text: "Los glóbulos rojos son nucleados (requiere conteo manual) y es normal un hematocrito bajo (20-30%).", icon: "TestTube" }
            ]
        }
    },
    manejo_hospitalario: {
        title: "Manejo Hospitalario y Cuidados Críticos",
        icon: "Droplet",
        content: [
            {
                title: "Técnicas de Soporte",
                icon: "Syringe",
                points: [
                    { text: "Captura: Prohibido usar redes. Se debe 'cucharear' con un recipiente.", isProhibited: true},
                    { text: "Manipulación: Usar guantes sin polvo, mojados con agua del tanque.", isProhibited: false },
                    { text: "Terapia de Frío ('Fridging'): Colocar al ajolote enfermo en un refrigerador (8-10 °C) ralentiza su metabolismo y las infecciones.", isProhibited: false },
                    { text: "Alimentación Forzada: Toleran bien la intubación (gavage) con tubos de goma suaves si dejan de comer.", isProhibited: false },
                    { text: "Fluidoterapia: Usar 'Ringer para anfibios' (Ringer lactato diluido 2:1 con agua estéril).", isProhibited: false },
                ]
            },
            {
                title: "Bioseguridad",
                icon: "Shield",
                points: [
                     { text: "Cuarentena: Estricta por 90 días para nuevos individuos debido al riesgo de quitridiomicosis.", isProhibited: false, isCritical: true },
                     { text: "Desinfección de Agua: El agua de desecho de tanques hospitalarios debe tratarse con cloro por 10 min antes de ser desechada.", isProhibited: false, isCritical: true }
                ]
            }
        ]
    },
    anestesia_cirugia: {
        title: "Anestesia y Cirugía",
        icon: "FlaskConical",
        content: [
            { title: "Anestesia por Inmersión", text: "Se realiza en baños con MS-222 (tricaina). La recuperación es lenta y requiere baños de agua limpia y oxigenada.", icon: "Beaker" },
            { title: "Ayuno Prequirúrgico", text: "Debido a su metabolismo lento, requieren un ayuno de 2 a 7 días antes de cirugía.", icon: "Calendar" },
            { title: "Riesgos y Preparación", text: "Prohibido: usar alcohol, clorhexidina fuerte o yodo para desinfectar (los quema/envenena). Usar solución salina. Prohibido: usar lubricantes o vaselina (bloquean respiración cutánea). La piel debe mantenerse mojada con esponjas.", icon: "Ban", isCritical: true },
            { title: "Técnica Quirúrgica", text: "La incisión abdominal debe ser paramediana para evitar la vena central. Usar suturas de monofilamento no absorbible y pegamento quirúrgico.", icon: "Stethoscope" }
        ]
    },
    patologias: {
        title: "Patologías Comunes",
        icon: "Stethoscope",
        content: [
            { 
                category: "Enfermedades Infecciosas",
                icon: "Bug",
                diseases: [
                    { name: "Septicemia ('Pierna Roja')", description: "Infección sistémica por bacterias del agua (ej. Aeromonas). Causa manchas rojas (petequias) en piel y branquias.", tags: ["Bacteriano", "Urgencia"] },
                    { name: "Micobacteriosis", description: "Infección bacteriana que causa nódulos en piel y órganos. Es una zoonosis de riesgo para humanos.", tags: ["Bacteriano", "Zoonosis"] },
                    { name: "Saprolegnia (Hongo de Algodón)", description: "Moho de agua oportunista que aparece como parches algodonosos sobre heridas o piel estresada.", tags: ["Hongo"] },
                    { name: "Quitridiomicosis (Batrachochytrium)", description: "Hongo devastador que ataca la piel, impidiendo la respiración y osmorregulación. Se trata con baños de itraconazol.", tags: ["Hongo", "Mortal"] }
                ]
            },
            {
                category: "Patologías Ambientales y Metabólicas",
                icon: "TriangleAlert",
                diseases: [
                    { name: "Edema (Anasarca/Ascitis)", description: "Acumulación severa de líquido por fallo renal, hepático o cardíaco. Es un signo clínico común y grave.", tags: ["Signo Clínico"] },
                    { name: "Enfermedad de la Burbuja de Gas", description: "El gas del agua sobresaturada forma embolias visibles bajo la piel.", tags: ["Ambiental"] },
                    { name: "Metamorfosis Inducida", description: "La exposición al yodo (ej. povidona) puede forzar una metamorfosis que suele ser letal.", tags: ["Iatrogénico"] },
                    { name: "Impactación por Grava", description: "Propensos a tragar sustrato, causando obstrucción intestinal.", tags: ["Manejo"] },
                    { name: "Lipidosis Corneal", description: "Depósitos de colesterol en la córnea por dietas excesivamente grasas, volviendo los ojos opacos.", tags: ["Nutricional"] }
                ]
            }
        ]
    },
    eutanasia: {
        title: "Eutanasia",
        icon: "Ban",
        content: [
            {
                title: "Método Humanitario",
                text: "La única forma aceptable es una sobredosis de MS-222 en el agua, o sedación seguida de inyección de barbitúricos. El método casero de congelación es inaceptable y cruel.",
                icon: "HeartPulse"
            }
        ]
    }
  }
};
