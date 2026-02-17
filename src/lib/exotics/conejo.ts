import type { ExoticSpeciesData } from '@/lib/types';

export const conejoData: ExoticSpeciesData = {
  id: "conejo",
  name: "Conejo",
  sections: {
    introduccion: {
      title: "Introducción y Biología",
      icon: "Dna",
      content: [
        { title: "General", text: "Oryctolagus cuniculus es una presa social y herbívora. Son vigilantes, ligeros, rápidos y respiradores nasales obligados. No muestran signos obvios de dolor. El miedo provoca inmovilidad o intentos de huida frenéticos.", icon: "Info" },
        { title: "Esqueleto", text: "Muy ligero (7-8% del peso total) con músculos traseros potentes. Riesgo de fractura de columna lumbar si patea violentamente.", icon: "Bone" },
        { title: "Metabolismo del Calcio", text: "Absorben todo el calcio de la dieta y el exceso se elimina por los riñones, lo que hace que la orina sea naturalmente turbia (pH > 8.0) y los predispone a urolitiasis.", icon: "Beaker" }
      ]
    },
    datos_biologicos: {
        title: "Datos Biológicos",
        icon: "Calendar",
        content: {
            headers: ["Parámetro", "Valor"],
            rows: [
                { param: "Esperanza de vida", value: "5–12 años" },
                { param: "Peso promedio", value: "1–10 kg" },
                { param: "Frecuencia cardíaca", value: "180–300 lpm" },
                { param: "Frecuencia respiratoria", value: "30–60 rpm" },
                { param: "Ingesta diaria de agua", value: "50–150 ml/kg" },
                { param: "Producción diaria de orina", value: "10–35 ml/kg" }
            ]
        }
    },
    digestivo_dieta: {
        title: "Sistema Digestivo y Dieta",
        icon: "Utensils",
        content: [
            { 
                title: "Fisiología Digestiva", 
                icon: "Atom",
                items: [
                    "Fermentadores de intestino posterior.",
                    "El estómago tiene un pH bajo (1-2) y un esfínter cardíaco que impide el vómito.",
                    "El ciego es el órgano más grande, actúa como cuba de fermentación.",
                    "El Fusus Coli en el colon separa la fibra indigestible (heces duras) de la digerible (cecotrofos)."
                ]
            },
            { 
                title: "Cecotrofia",
                icon: "Droplet",
                items: [
                    "Producen cecotrofos (ricos en nutrientes, vitaminas B y K) que ingieren directamente del ano.",
                    "Si el dueño los encuentra en la jaula, puede indicar dolor, obesidad o dieta inadecuada.",
                    "Producidos principalmente de noche o madrugada."
                ]
            },
            { 
                title: "Dieta Esencial",
                icon: "Utensils",
                items: [
                    "Heno de pasto ad libitum es la base de la dieta.",
                    "Suplementar con verduras de hoja verde.",
                    "Pellets comerciales restringidos (<30 g/kg/día) y altos en fibra (>20%).",
                    "Evitar mezclas tipo muesli."
                ]
            }
        ]
    },
    denticion: {
        title: "Dentición",
        icon: "AlertCircle",
        content: [
            { text: "Fórmula: I2/1 C0/0 P3/2 M3/3. Todos los dientes son elodontos (crecimiento continuo)." },
            { text: "El segundo par de incisivos superiores son los 'dientes de clavija' (peg teeth)." },
            { text: "La masticación lateral de fibra es crucial para el desgaste dental y prevenir sobrecrecimiento." }
        ]
    },
    reproduccion: {
        title: "Reproducción",
        icon: "HeartPulse",
        content: {
            table: {
                headers: ["Parámetro", "Valor"],
                rows: [
                    { param: "Madurez sexual", value: "4–8 meses" },
                    { param: "Ciclo estral", value: "Ovulación inducida por la cópula" },
                    { param: "Gestación", value: "28–32 días" },
                    { param: "Tamaño de camada", value: "4–12 gazapos" },
                    { param: "Peso al nacer", value: "30–80 g" },
                    { param: "Destete", value: "6 semanas" }
                ]
            },
            points: [
                { title: "Anatomía Macho", text: "Los sacos escrotales se ubican craneales (delante) al pene. No tienen hueso peneano." },
                { title: "Anatomía Hembra", text: "Útero dúplex con dos cuernos y dos cérvix. Sin cuerpo uterino." },
                { title: "Apareamiento", text: "Siempre llevar la hembra al territorio del macho debido a la territorialidad de las hembras." },
                { title: "Lactancia", text: "Amamantan solo 1-2 veces al día por 3-5 minutos. La leche es extremadamente rica en nutrientes." }
            ]
        }
    },
    manejo_salud: {
        title: "Manejo y Salud Preventiva",
        icon: "Shield",
        content: [
            { title: "Alojamiento", text: "Son sociales. Proteger de climas extremos. Jaula debe permitir 3 saltos. Ejercicio diario es crucial. No alojar con cobayas." },
            { title: "Sujeción", text: "Sujetar siempre la espalda y el tren posterior para evitar fracturas lumbares. Nunca levantar por las orejas." },
            { title: "Inmovilidad Tónica ('Trancing')", text: "Ponerlos boca arriba induce una respuesta de miedo extremo, no relajación. Usar solo si es indispensable.", isCritical: true },
            { title: "Castración", text: "Muy recomendada en hembras para prevenir adenocarcinoma uterino (incidencia del 50-80% en >3 años). En machos, controla comportamiento." },
            { title: "Vacunación", text: "Esencial contra Mixomatosis y Enfermedad Hemorrágica Viral (VHD). Separar vacunas por 14 días. La de Mixomatosis requiere una parte intradérmica." },
        ]
    },
    patologias: {
        title: "Patologías Comunes",
        icon: "Stethoscope",
        content: [
            { 
                category: "Gastrointestinal y Dental",
                icon: "Utensils",
                diseases: [
                    { name: "Íleo / Hipomotilidad GI", description: "Causado por dieta baja en fibra, estrés o dolor. Se manifiesta con anorexia y reducción de heces. Tratamiento: Fluidos, analgesia, procinéticos y soporte nutricional.", tags: ["Urgencia"] },
                    { name: "Enfermedad Dental Adquirida", description: "Por desgaste insuficiente (poca fibra). Causa anorexia, ptialismo y abscesos. Requiere corrección dietética y limado dental regular.", tags: ["Crónico"] },
                    { name: "Abscesos", description: "A menudo por enfermedad dental (*Pasteurella*, *Staphylococcus*). Requieren extirpación quirúrgica completa de la cápsula; el drenaje simple no funciona.", tags: ["Cirugía"] },
                    { name: "Coccidiosis Hepática", description: "*Eimeria stiedae* ataca el hígado, causando ictericia y muerte, especialmente en crías.", tags: ["Infeccioso"] }
                ]
            },
            {
                category: "Urinario y Reproductivo",
                icon: "Droplet",
                diseases: [
                    { name: "Hipercalciuria / 'Vejiga de Lodo'", description: "Por dieta alta en calcio, inactividad o retención. Causa orina espesa y dermatitis. Tratamiento: Fluidos, analgesia, lavados vesiculares.", tags: ["Metabólico"] },
                    { name: "Adenocarcinoma Uterino", description: "Extremadamente común (50-80%) en hembras no castradas >3 años. Prevenible con castración temprana.", tags: ["Neoplasia", "Cirugía"] },
                    { name: "Sífilis del Conejo", description: "*Treponema cuniculi*. Causa costras y úlceras en labios, nariz y genitales.", tags: ["Infeccioso", "Venéreo"] }
                ]
            },
            {
                category: "Neurológico y Sistémico",
                icon: "Brain",
                diseases: [
                    { name: "Encefalitozoonosis", description: "*E. cuniculi*. Causa head-tilt, ataxia, signos oculares (uveítis) y renales. Tratamiento con Fenbendazol.", tags: ["Parasitario", "Zoonosis Potencial"] },
                    { name: "Pasteurelosis ('Snuffles')", description: "*P. multocida*. Causa descarga nasal, estornudos, otitis, y abscesos. El tratamiento puede controlar, no erradicar.", tags: ["Bacteriano", "Crónico"] },
                    { name: "Enfermedad Hemorrágica Viral (VHD)", description: "A menudo el único síntoma es la muerte súbita con sangrado nasal. La vacunación es la única protección.", tags: ["Viral", "Mortal"] }
                ]
            },
            {
                category: "Dermatológico",
                icon: "Hand",
                diseases: [
                    { name: "Pododermatitis ('Sore Hocks')", description: "Ulceración de las patas traseras por suelos duros o de rejilla. Tratamiento: mejorar lecho y analgesia.", tags: ["Manejo"] },
                    { name: "Miasis (Gusanera)", description: "Urgencia vital. Las larvas de mosca comen tejido vivo. Prevenible con limpieza.", tags: ["Urgencia", "Parasitario"] },
                    { name: "Ácaros de la piel y oídos", description: "*Psoroptes cuniculi* (orejas), *Cheyletiella* ('caspa andante', zoonótico).", tags: ["Parasitario", "Zoonosis"] },
                    { name: "Enfermedad del 'Pelaje Azul'", description: "*Pseudomonas aeruginosa* tiñe el pelaje de azul-verdoso en zonas húmedas (papada).", tags: ["Bacteriano", "Manejo"] }
                ]
            }
        ]
    },
    anestesia_apoyo: {
        title: "Anestesia y Cuidados de Apoyo",
        icon: "Syringe",
        content: {
            critical_points: [
                { title: "Sin Ayuno Preoperatorio", text: "Estrictamente contraindicado por riesgo de hipoglucemia e íleo GI.", icon: "Ban" },
                { title: "Prevenir Hipotermia", text: "Son muy susceptibles. Usar mantas térmicas, fluidos tibios y minimizar tiempo anestésico.", icon: "Thermometer" },
                { title: "Analgesia Multimodal", text: "Ocultan el dolor. Ser agresivo con el manejo del dolor (opioides + AINEs + locales).", icon: "Pill" },
                { title: "Soporte Nutricional", text: "Crítico en conejos anoréxicos para mantener motilidad. Usar jeringa o sonda nasogástrica.", icon: "Syringe" }
            ],
            anesthesia_risks: [
                { title: "Apnea por estrés", text: "Contienen la respiración si se usa solo mascarilla sin premedicación." },
                { title: "Laringoespasmo", text: "Aplicar spray de anestésico local en la glotis antes de intubar." },
                { title: "Monitoreo Ocular", text: "El ojo no rota. La profundidad se mide con el reflejo corneal." },
                { title: "Intubación difícil", text: "Requiere técnica especializada (a ciegas o con V-Gel) por su anatomía oral." }
            ]
        }
    },
    laboratorio: {
        title: "Valores de Laboratorio",
        icon: "TestTube",
        content: {
            hematology: {
                title: "Hematología",
                headers: ["Parámetro", "Rango de Referencia"],
                rows: [
                    { param: "RBC (x 10¹²/l)", value: "4–7" },
                    { param: "HCT/PCV (%)", value: "31–45" },
                    { param: "Hb (g/l)", value: "100–150" },
                    { param: "WBC (x 10⁹/l)", value: "5.2–10.0" },
                    { param: "Linfocitos (%)", value: "30–60" },
                    { param: "Neutrófilos (%)", value: "30–50" },
                    { param: "Plaquetas (x 10⁹/l)", value: "250–600" }
                ]
            },
            biochemistry: {
                title: "Bioquímica",
                headers: ["Parámetro", "Rango de Referencia"],
                rows: [
                    { param: "ALT (IU/l)", value: "27.4–72.2" },
                    { param: "AST (IU/l)", value: "10.0–78.0" },
                    { param: "BUN (mmol/l)", value: "6.14–8.38" },
                    { param: "Proteína total (g/l)", value: "49–71" },
                    { param: "Creatinina (μmol/l)", value: "44.2–229" },
                    { param: "Glucosa (mmol/l)", value: "4.2–7.8" },
                    { param: "Calcio (total) (mmol/l)", value: "3.0–4.2" },
                    { param: "Sodio (mmol/l)", value: "138–150" }
                ]
            }
        }
    }
  }
};
