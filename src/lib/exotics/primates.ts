
import type { ExoticSpeciesData } from '@/lib/types';

export const primatesData: ExoticSpeciesData = {
  id: "primates",
  name: "Primates",
  sections: {
    introduccion: {
      title: "Introducción y Biología",
      icon: "Dna",
      content: [
        { 
            title: "General", 
            icon: "Info",
            items: [
                "Los primates más comunes en colecciones privadas incluyen calitrícidos (marmosets, tamarinos), cébidos (monos ardilla, capuchinos) y lémures.",
                "Son animales inteligentes y sociales que requieren un enriquecimiento ambiental significativo.",
                "Crecimiento lento, con madurez sexual tardía para permitir un aprendizaje social prolongado.",
                "Visión estereoscópica. La mayoría tiene dos mamas pectorales (excepto Varecia que tiene seis)."
            ]
        },
        { 
            title: "Adaptaciones Dentales Únicas", 
            icon: "AlertCircle",
            items: [
                "Titíes (Marmosets): Incisivos inferiores alargados, del tamaño de los caninos, para raspar la corteza de los árboles y extraer savia o goma.",
                "Lémures: Incisivos y caninos inferiores que apuntan hacia adelante, formando un 'peine dental' usado para el acicalamiento."
            ]
        },
      ]
    },
    alojamiento_dieta: {
        title: "Alojamiento y Dieta",
        icon: "Home",
        content: [
            {
                title: "Alojamiento",
                icon: "Home",
                points: [
                    { text: "Recintos interiores y exteriores, estructuralmente sólidos, a prueba de manipulaciones y que excluyan plagas (ratones, pájaros).", isProhibited: false },
                    { text: "Calitrícidos: Mínimo 2.5 m de alto, con ramas, cuerdas y al menos una caja nido por cada cinco animales.", isProhibited: false },
                    { text: "Fotoperiodo de 12h, acceso a luz UV-B (natural o artificial), temperatura de 18-24°C y humedad >60%.", isProhibited: false },
                ]
            },
            {
                title: "Dieta en Cautiverio",
                icon: "Utensils",
                points: [
                    { text: "Base de pellets comerciales para primates, suplementada con productos frescos y proteína animal.", isProhibited: false },
                    { text: "Prohibido: Evitar exceso de frutas comerciales. Tienen más azúcar y menos fibra/proteína que las silvestres. No deben superar el 30% de la energía diaria.", isProhibited: true, isCritical: true },
                    { text: "Calitrícidos: Necesitan >20% de proteína. Se benefician del acceso a goma arábiga.", isProhibited: false },
                    { text: "Monos Ardilla: Alta necesidad de insectos. El exceso de carbohidratos en gestación puede causar distocia.", isProhibited: false },
                    { text: "Lémures: Propensos a la obesidad. Requieren más forraje y menos proteína.", isProhibited: false },
                ]
            }
        ]
    },
    nutrientes_criticos: {
        title: "Nutrientes Críticos (Monos del Nuevo Mundo)",
        icon: "Beaker",
        content: [
            { title: "Vitamina C", text: "Esencial. No la producen. Suplementar con 1-25 mg/kg/día.", icon: "Pill" },
            { title: "Vitamina D3", text: "Crucial. Ineficientes con D2 de plantas. Requieren altos niveles (1000–3000 UI/kg MS) y/o acceso a UV-B para prevenir enfermedad ósea metabólica.", icon: "Thermometer", isCritical: true },
            { title: "Calcio y Fósforo", text: "Requerimientos altos. Relación Ca:P entre 1:1 y 2:1. Los insectos deben ser 'gut-loaded' con calcio.", icon: "Bone" }
        ]
    },
    reproduccion_crianza: {
        title: "Reproducción, Anticoncepción y Crianza",
        icon: "Baby",
        content: [
            {
                title: "Estructura Social y Anticoncepción",
                icon: "Users",
                items: [
                    "La mayoría vive en grupos donde una pareja dominante suprime la reproducción de los demás.",
                    "Implantes de Deslorelina (Suprelorin®) son la recomendación actual para anticoncepción química reversible.",
                    "La vasectomía (machos) y la histerectomía (hembras) son las opciones quirúrgicas preferidas para preservar el comportamiento social."
                ]
            },
            {
                title: "Crianza a Mano (Último Recurso)",
                icon: "Hand",
                items: [
                    "Produce individuos socialmente inadaptados. Requiere incubadora.",
                    "Fórmula de bebé humano (10% del peso/día) en tomas cada 2-3h.",
                    "Regla Vital: Sostener al neonato en posición vertical al dar biberón para evitar aspiración.",
                    "Estimular micción/defecación frotando zona anal con algodón húmedo."
                ]
            }
        ]
    },
    manejo_muestras: {
        title: "Manejo y Muestreo",
        icon: "Hand",
        content: [
            {
                title: "Precauciones y Sujeción",
                icon: "Ban",
                items: [
                    "Siempre usar guantes. El manejo es estresante y riesgoso (mordeduras, zoonosis).",
                    "Anestesia es la mejor opción. Primates >10kg deben ser restringidos químicamente.",
                    "Identificación: El microchip subcutáneo puede migrar."
                ]
            },
            {
                title: "Toma de Muestras",
                icon: "TestTube",
                items: [
                    "Sangre: Extraer máx. 1% del peso corporal. Vena femoral es el sitio preferido.",
                    "Glucosa por Estrés: Los niveles se elevan drásticamente con la captura; no confundir con diabetes."
                ]
            }
        ]
    },
    patologias: {
        title: "Patologías Comunes",
        icon: "Stethoscope",
        content: [
            { 
                category: "Infecciones Virales (Zoonosis Inversa)",
                icon: "Bug",
                diseases: [
                    { name: "Herpesvirus (HSV-1 y otros)", description: "Herpes simplex humano (fuegos labiales) es fatal para calitrícidos y lémures. Herpes tamarinus del mono ardilla es fatal para calitrícidos. Epstein-Barr puede causar cáncer linfático.", tags: ["Viral", "Mortal", "Zoonosis"] },
                    { name: "Sarampión (Morbillivirus)", description: "La exposición al sarampión humano es a menudo fatal. Causa edema facial severo.", tags: ["Viral", "Mortal", "Zoonosis"] },
                    { name: "Influenza y Resfriado Común", description: "Virus humanos pueden causar enfermedad respiratoria fulminante. Usar mascarilla si se está enfermo.", tags: ["Viral", "Zoonosis"] },
                    { name: "LCMV (Virus Coriomeningitis Linfocítica)", description: "Transmitido por ratones, causa hepatitis fatal en calitrícidos.", tags: ["Viral", "Mortal"] }
                ]
            },
            {
                category: "Infecciones Bacterianas",
                icon: "Bug",
                diseases: [
                    { name: "Enteritis (Salmonella, Shigella, Yersinia)", description: "Yersinia (de aves/roedores) causa brotes letales en invierno, con abscesos en hígado/bazo.", tags: ["Bacteriano", "Urgencia"] },
                    { name: "Neumonía (Bordetella, Klebsiella)", description: "K. pneumoniae es especialmente virulento en prosimios.", tags: ["Bacteriano"] },
                    { name: "Tuberculosis", description: "Rara en Monos del Nuevo Mundo, pero grave. Requiere pruebas de tuberculina en el párpado.", tags: ["Bacteriano", "Zoonosis"] }
                ]
            },
            {
                category: "Infecciones Parasitarias",
                icon: "Bug",
                diseases: [
                    { name: "Toxoplasma gondii", description: "Transmitido por heces de gato, a menudo es fatal. Es vital el control de plagas y evitar contacto con gatos.", tags: ["Parasitario", "Mortal"] },
                    { name: "Helmintos", description: "Varios nematodos y cestodos pueden ser patógenos; se controlan con antihelmínticos y buena higiene.", tags: ["Parasitario"] }
                ]
            },
            {
                category: "Enfermedades Metabólicas",
                icon: "Atom",
                diseases: [
                    { name: "Enfermedad Ósea Metabólica (MBD)", description: "Común por deficiencia de Vitamina D3 y/o desequilibrio de Ca:P. Causa 'mandíbula de goma' y fracturas.", tags: ["Nutricional", "Crónico"] },
                    { name: "Síndrome de Desgaste del Marmoset (WMS)", description: "Enfermedad crónica multifactorial con pérdida de peso y diarrea. El acceso a goma arábiga puede ayudar.", tags: ["Crónico"] },
                    { name: "Hemocromatosis", description: "Acumulación tóxica de hierro, común en lémures. Limitar hierro y vitamina C en la dieta.", tags: ["Metabólico"] }
                ]
            },
            {
                category: "Otras Condiciones",
                icon: "AlertCircle",
                diseases: [
                    { name: "Distocia", description: "Parto difícil, común en marmosets y lémures. Requiere cesárea. Asociado a dietas altas en carbohidratos.", tags: ["Reproductivo", "Urgencia"] },
                    { name: "Enfermedad Dental", description: "Frecuente por dieta inadecuada, llevando a abscesos apicales.", tags: ["Crónico"] },
                    { name: "Tromboembolismo Aórtico", description: "Similar a los gatos. Un coágulo bloquea la aorta, paralizando las patas traseras en primates con enfermedad cardíaca.", tags: ["Cardiovascular", "Urgencia"] }
                ]
            }
        ]
    }
  }
};
