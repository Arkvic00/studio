
import type { ExoticSpeciesData } from '@/lib/types';

export const mustelidosData: ExoticSpeciesData = {
  id: "mustelidos",
  name: "Mustélidos",
  sections: {
    introduccion: {
        title: "Introducción y Datos Biológicos",
        icon: "Info",
        content: [
            {
                title: "Hurón Doméstico (Mustela putorius furo)",
                icon: "Home",
                items: [
                    "Forma domesticada del turón europeo, usado como mascota y modelo de laboratorio para influenza.",
                    "Esperanza de vida: 8–10 años (promedio 5-7 en NA).",
                    "Peso: Machos ~1200 g, Hembras ~600 g.",
                    "Constantes: T° 37.8–40 °C; FC 200–250 lpm; FR 33–36 rpm."
                ]
            },
            {
                title: "Nutria Asiática de Uñas Pequeñas (Aonyx cinereus)",
                icon: "Droplet",
                items: [
                    "La nutria más pequeña del mundo, altamente social.",
                    "Datos físicos: Longitud ~90 cm; Peso <5 kg.",
                    "Constantes: T° 37.2–39.4 °C; FC 80–300 lpm; FR 16–60 rpm."
                ]
            }
        ]
    },
    alojamiento_nutricion: {
        title: "Alojamiento y Nutrición",
        icon: "Home",
        content: [
            {
                title: "Hurones",
                icon: "Home",
                points: [
                    { text: "Jaulas a prueba de escapes, fondo sólido, mínimo 4500 cm².", isProhibited: false },
                    { text: "Sustrato: Usar telas, toallas o camisetas. Prohibido heno, paja o virutas por irritación respiratoria.", isProhibited: true },
                    { text: "Muy susceptibles al golpe de calor (no sudan).", isProhibited: false, isCritical: true },
                    { text: "Dieta: Carnívoros estrictos. Proteína 35-40%, grasa 9-28%. Pellets secos o presas enteras.", isProhibited: false }
                ]
            },
            {
                title: "Nutrias",
                icon: "Droplet",
                points: [
                    { text: "Área terrestre el doble del tamaño de su piscina.", isProhibited: false },
                    { text: "Requieren madrigueras con pasto/hojas secas.", isProhibited: false },
                    { text: "Dieta: Pescado con suplementos de Vitamina E y tiamina. Alimentar 2x/día.", isProhibited: false }
                ]
            }
        ]
    },
    reproduccion_salud: {
        title: "Reproducción y Salud Preventiva",
        icon: "HeartPulse",
        content: [
             {
                title: "Hurones",
                icon: "Shield",
                items: [
                    "Hembras con ovulación inducida. El estro persistente sin cópula es fatal por toxicidad de estrógenos.",
                    "Vacunación: Esencial contra Moquillo Canino y Rabia.",
                    "Chequeos semestrales a partir de los 3 años por alta incidencia de cáncer."
                ]
            },
            {
                title: "Nutrias",
                icon: "Shield",
                items: [
                    "Monógamas de por vida. Gestación de ~62 días. Ambos padres cuidan a las crías.",
                    "Susceptibles a Moquillo Canino; vacunas vivas modificadas pueden inducir la enfermedad."
                ]
            }
        ]
    },
    manejo_anestesia: {
        title: "Manejo, Muestras y Anestesia",
        icon: "Syringe",
        content: [
            {
                title: "Hurones",
                icon: "Hand",
                items: [
                    "Manejo: Generalmente dóciles. El scruffing (sujeción del cuello) o distraer con pasta en el abdomen funciona bien.",
                    "Oídos: La cera marrón oscuro es normal pero puede enmascarar ácaros (muy comunes).",
                    "Sangre: Vena cefálica, safena o cava craneal. Extraer máx. 1% del peso corporal.",
                    "Anestesia: Ayuno máximo de 4-6 horas (riesgo de hipoglucemia). Inducción con mascarilla es bien tolerada. Prevenir hipotermia."
                ]
            },
            {
                title: "Nutrias",
                icon: "Ban",
                items: [
                    "No domesticadas. Requieren restricción química (anestesia) para ser examinadas."
                ]
            }
        ]
    },
    laboratorio: {
        title: "Valores de Laboratorio (Referencia Mustélidos)",
        icon: "TestTube",
        content: {
            hematology: {
                title: "Hematología",
                headers: ["Parámetro", "Rango"],
                rows: [
                    { param: "WBC (x10⁹/l)", value: "3.8–14" },
                    { param: "RBC (x10¹²/l)", value: "7.1–11.4" },
                    { param: "PCV (%)", value: "36–57" },
                    { param: "Plaquetas (x10⁹/l)", value: "206–937" }
                ]
            },
            biochemistry: {
                title: "Bioquímica",
                headers: ["Parámetro", "Rango"],
                rows: [
                    { param: "Glucosa (mmol/l)", value: "6.66–7.99" },
                    { param: "BUN (mmol/l)", value: "0.2–16.1" },
                    { param: "Creatinina (μmol/l)", value: "8.8–106" },
                    { param: "ALT (IU/l)", value: "48–292" },
                    { param: "Proteína total (g/l)", value: "43–60" }
                ]
            }
        }
    },
    patologias: {
        title: "Patologías Comunes",
        icon: "Stethoscope",
        content: [
            { 
                category: "Hurones",
                icon: "Bug",
                diseases: [
                    { name: "Enfermedad Adrenal (Hiperadrenocorticismo)", description: "Extremadamente común. Por exceso de hormonas sexuales (no cortisol). Ligado a castración temprana. Causa alopecia simétrica y vulva inflamada en hembras castradas.", tags: ["Endocrino", "Común"] },
                    { name: "Insulinoma", description: "Tumor pancreático frecuente. Causa hipoglucemia, mirada perdida, babeo, arrastre de patas traseras y colapso.", tags: ["Neoplasia", "Urgencia"] },
                    { name: "Cuerpos Extraños", description: "Obsesión por masticar goma/caucho. Causa letargo, diarrea, anorexia.", tags: ["Urgencia", "Cirugía"] },
                    { name: "Moquillo Canino", description: "Infección viral casi 100% fatal. Causa secreción purulenta y engrosamiento de almohadillas ('hardpad').", tags: ["Viral", "Mortal"] },
                    { name: "Influenza Humana", description: "Zoonosis bidireccional. El dueño puede contagiar al hurón. Generalmente autolimitante.", tags: ["Viral", "Zoonosis"] },
                    { name: "Enfermedad Aleutiana", description: "Parvovirus crónico que causa hipergammaglobulinemia y daño multiorgánico.", tags: ["Viral", "Crónico"] },
                    { name: "Gastritis por Helicobacter mustelae", description: "Casi todos son portadores. Causa úlceras gástricas y melena bajo estrés.", tags: ["Bacteriano"] },
                    { name: "Esplenomegalia", description: "Hallazgo físico común, usualmente benigno (hematopoyesis extramedular). No se extirpa a menos que haya sospecha de tumor.", tags: ["Común"] },
                    { name: "Mito del Olor", description: "El olor almizclado viene de glándulas sebáceas, no anales. La extracción de glándulas anales es considerada mutilación y no elimina el olor.", tags: ["Manejo"] }
                ]
            },
            {
                category: "Nutrias",
                icon: "Droplet",
                diseases: [
                     { name: "Cálculos Renales", description: "Afectan hasta al 75% de las nutrias cautivas (oxalato de calcio). Causan insuficiencia renal. El tratamiento médico es ineficaz y la cirugía tiene alta recurrencia.", tags: ["Metabólico", "Crónico"] }
                ]
            }
        ]
    },
    opciones_quirurgicas: {
        title: "Opciones Quirúrgicas y Endocrinas (Hurón)",
        icon: "Pill",
        content: [
            {
                title: "Esterilización Médica vs Quirúrgica",
                icon: "Shield",
                text: "Debido a que la castración tradicional predispone a la enfermedad adrenal, el tratamiento de elección hoy en día es el uso de implantes subcutáneos de agonistas de GnRH (Deslorelina). Actúa como una 'castración química' que dura ~2 años y previene tanto el estro mortal en hembras como el cáncer adrenal en ambos sexos.",
                isCritical: true
            }
        ]
    },
    resumen_clinico: {
        title: "Resumen Clínico",
        icon: "Info",
        content: "Los hurones son carnívoros estrictos con predisposiciones marcadas a enfermedad adrenal, insulinomas o linfoma después de los 3 años. Se recomienda la esterilización química con implantes de deslorelina en lugar de la cirugía tradicional. El calor es mortal para ellos. Por otro lado, las nutrias asiáticas en cautiverio se manejan bajo anestesia y su principal problema de salud es la formación crónica de cálculos renales."
    }
  }
};

    