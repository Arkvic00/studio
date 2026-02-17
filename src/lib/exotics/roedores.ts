import type { ExoticSpeciesData } from '@/lib/types';

export const roedoresData: ExoticSpeciesData = {
  id: "roedores",
  name: "Roedores",
  sections: {
    biologia: {
      title: "Biología y Fisiología",
      content: [
        { 
          title: "Esperanza de vida", 
          icon: "Calendar",
          items: ["Ratones: 1-2.5 años", "Ratas: 2-3.5 años", "Hámsteres: 1.5-2 años", "Jerbos: 2-3 años"]
        },
        { 
          title: "Frecuencias",
          icon: "HeartPulse",
          items: ["Cardíaca: 260-700 lpm", "Respiratoria: 40-250 rpm"] 
        },
        {
          title: "Dentición",
          icon: "AlertCircle",
          items: ["Incisivos de crecimiento continuo (elodontos).", "Color amarillo/naranja es normal.", "Proporción ideal: inferiores 3x más largos que superiores."]
        },
        {
          title: "Aparato Digestivo",
          icon: "Utensils",
          items: ["No pueden vomitar.", "Practican la coprofagia (normal y necesario)."]
        },
        {
          title: "Glándulas Odoríferas",
          icon: "Atom",
          items: ["Hámsteres: en los flancos (costados).", "Jerbos: en el vientre (ventral).", "Propensas a inflamación o tumores."]
        },
        {
          title: "Hibernación/Torpor (Hámsteres)",
          icon: "Snowflake",
          items: ["< 4°C: sueño profundo.", "4-10°C: letargo (torpor).", "A menudo confundido con la muerte."]
        }
      ]
    },
    sexado_reproduccion: {
      title: "Sexado y Reproducción",
      content: {
        sexing: {
            title: "Sexado",
            text: "Se realiza midiendo la distancia anogenital, que es significativamente más corta en las hembras. No es confiable buscar testículos, ya que pueden retraerlos."
        },
        repro_table: {
          headers: ["", "Pubertad", "Ciclo Estral", "Gestación", "Camada", "Destete"],
          rows: [
            { species: "Ratón 🐭", puberty: "1.5m", estrous: "4-5d", gestation: "19-21d", litter: "7-12", weaning: "18-21d" },
            { species: "Rata 🐀", puberty: "1m", estrous: "4-5d", gestation: "21-23d", litter: "6-13", weaning: "21d" },
            { species: "Hámster 🐹", puberty: "1.5-2m", estrous: "4-5d", gestation: "16-23d", litter: "5-10", weaning: "19-21d" },
            { species: "Jerbo 🐭", puberty: "2-4.5m", estrous: "4-6d", gestation: "23-46d", litter: "3-8", weaning: "21-28d" },
          ]
        },
        considerations: {
            title: "Consideraciones",
            items: ["Canibalismo: puede ocurrir si se les molesta post-parto.", "Hámsteres: pueden meter a sus crías en los abazones (bolsas de los cachetes) por estrés.", "Tapones eyaculatorios: común en ratas y ratones machos, no confundir con urolitos."]
        }
      }
    },
    alojamiento_manejo: {
        title: "Alojamiento, Nutrición y Manejo",
        content: [
            {
                title: "Ambiente y Sustrato",
                icon: "Home",
                points: [
                    { text: "Se requiere excelente ventilación para evitar acumulación de amoníaco.", isProhibited: false },
                    { text: "Prohibido usar viruta de cedro (tóxica para el hígado).", isProhibited: true }
                ]
            },
            {
                title: "Dieta",
                icon: "Utensils",
                points: [
                    { text: "Proteína: Ratones >14%, Ratas 20-27%, Hámsteres/Jerbos >16%.", isProhibited: false },
                    { text: "Dietas basadas solo en semillas causan obesidad y osteoporosis.", isProhibited: true },
                    { text: "En ratas mayores, se recomienda bajar proteína (4-7%) para frenar nefropatía.", isProhibited: false }
                ]
            },
            {
                title: "Manejo y Sujeción",
                icon: "Hand",
                points: [
                    { text: "Ratones: Levantar por la base de la cola y sujetar por la nuca (scruffing).", isProhibited: false },
                    { text: "Ratas: Sujetar alrededor de los hombros, apoyando las patas traseras.", isProhibited: false },
                    { text: "Hámsteres: Sujetar el cuerpo con la cabeza entre los dedos para controlar mordidas.", isProhibited: false },
                    { text: "Jerbos: Nunca levantar por la cola (riesgo de 'tail-slip').", isProhibited: true }
                ]
            }
        ]
    },
    procedimientos: {
        title: "Vías de Inyección",
        content: {
            injection_table: {
                headers: ["Ruta", "Ratón", "Rata", "Hámster", "Jerbo"],
                rows: [
                  { route: "Subcutánea (SC)", mouse: "2-3 ml", rat: "5-10 ml", hamster: "3-5 ml", gerbil: "2-3 ml" },
                  { route: "Intramuscular (IM)", mouse: "0.03 ml", rat: "0.2-0.3 ml", hamster: "0.1 ml", gerbil: "0.1 ml" },
                  { route: "Intraperitoneal (IP)", mouse: "1-3 ml", rat: "10 ml", hamster: "3-4 ml", gerbil: "2-3 ml" },
                  { route: "Intravenosa (IV)", mouse: "0.2-0.3 ml", rat: "0.5 ml lento", hamster: "No descrito", gerbil: "0.2-0.3 ml" }
                ]
            }
        }
    },
    anestesia_cirugia: {
        title: "Anestesia, Cirugía y Fluidos",
        content: [
            { title: "Ayuno", text: "Estrictamente contraindicado por riesgo de hipoglucemia fatal.", icon: "Ban", isCritical: true },
            { title: "Fluidos (Mantenimiento)", text: "General: ~100 ml/kg/día. Jerbos requieren menos (40-60 ml/kg/día).", icon: "Droplet", isCritical: false },
            { title: "Odontología", text: "El sobrecrecimiento se corrige con fresas dentales. Nunca usar cortaúñas.", icon: "AlertCircle", isCritical: true },
            { title: "Hemostasia", text: "Pérdidas >0.3 ml pueden ser mortales para un ratón de 30g. Usar hemostasia cuidadosa.", icon: "HeartPulse", isCritical: false },
            { title: "Fracturas", text: "Formación de callo óseo muy rápida (7-10 días). Vendajes y férulas suelen funcionar bien.", icon: "Bone", isCritical: false },
        ]
    },
    laboratorio: {
        title: "Valores de Laboratorio",
        content: {
            blood_volume: [
                { species: "Ratón 🐭", volume: "70-80", max_extraction: "0.14" },
                { species: "Rata 🐀", volume: "50-65", max_extraction: "1.3" },
                { species: "Hámster 🐹", volume: "65-80", max_extraction: "0.65" },
                { species: "Jerbo 🐭", volume: "60-85", max_extraction: "0.3" }
            ],
            hematology: {
                headers: ["Parámetro", "Ratón", "Rata", "Hámster", "Jerbo"],
                rows: [
                    { param: "Hematocrito (%)", mouse: "37-46", rat: "36-52", hamster: "36.5-58", gerbil: "41-52" },
                    { param: "Hemoglobina (g/dl)", mouse: "11-14.5", rat: "11.1-17.4", hamster: "10.7-19.2", gerbil: "12.1-16.9" }
                ]
            },
            biochemistry: {
                headers: ["Parámetro", "Ratón", "Rata", "Hámster", "Jerbo"],
                rows: [
                    { param: "Glucosa (mmol/l)", mouse: "4.0-10.1", rat: "4.0-8.9", hamster: "3.3-8.8", gerbil: "2.58-7.5" },
                    { param: "Proteína Total (g/l)", mouse: "56-103", rat: "59-84", hamster: "55-72", gerbil: "43-147" }
                ]
            }
        }
    },
    patologias: {
        title: "Patologías Comunes",
        content: [
            { 
                category: "Virales y Ambientales",
                icon: "Bug",
                diseases: [
                    { name: "Poliomavirus", description: "Causa verrugas/tumores en hámsteres.", tags: ["Hámster"] },
                    { name: "Coriomeningitis Linfocítica (LCMV)", description: "Zoonótico, afecta hámsteres y causa síntomas gripales severos en humanos.", tags: ["Hámster", "Zoonosis"] },
                    { name: "Barbering", description: "Comportamiento de estrés/dominancia donde un roedor arranca el pelo de otros." },
                    { name: "Cola anillada (Ring tail)", description: "Necrosis de la cola en crías de rata por baja humedad.", tags: ["Rata"] }
                ]
            },
            {
                category: "Respiratorias y Oculares",
                icon: "Stethoscope",
                diseases: [
                    { name: "Complejo Respiratorio Murino", description: "Muy común en ratas y ratones (Mycoplasma, Virus Sendai). Requiere tratamiento agresivo, a veces de por vida.", tags: ["Rata", "Ratón"] },
                    { name: "Cromodacriorrea", description: "Secreción de 'lágrimas rojas' por estrés o enfermedad." },
                    { name: "Prolapso del ojo", description: "Común en hámsteres por mal manejo.", tags: ["Hámster"] }
                ]
            },
            {
                category: "Gastrointestinales (GI)",
                icon: "Utensils",
                diseases: [
                    { name: "Diarrea por Antibióticos", description: "Penicilinas pueden ser fatales, especialmente en hámsteres, al matar la flora benéfica.", tags: ["Hámster", "Jerbo"] },
                    { name: "Ileítis Proliferativa (Cola Mojada)", description: "Diarrea bacteriana severa, a menudo fatal en hámsteres y jerbos jóvenes.", tags: ["Hámster", "Jerbo"] },
                    { name: "Parásitos GI", description: "Coccidias, Giardia, Oxiuros, Tenias. Algunas zoonóticas." }
                ]
            },
            {
                category: "Dermatológicas y Neoplasias",
                icon: "Microscope",
                diseases: [
                    { name: "Parásitos externos", description: "Ácaros (Myobia, Demodex) y piojos. Causan pérdida de pelo y comezón." },
                    { name: "Dermatitis facial (Jerbos)", description: "Irritación por exceso de secreciones glandulares debido a estrés o humedad alta.", tags: ["Jerbo"] },
                    { name: "Tumores Mamarios", description: "Comunes en ratas (benignos) y ratones (malignos).", tags: ["Rata", "Ratón"] },
                    { name: "Linfoma Cutáneo", description: "Segundo cáncer más común en hámsteres, afecta la piel.", tags: ["Hámster"] },
                    { name: "Tumor glándula de olor", description: "Común en jerbos.", tags: ["Jerbo"] }
                ]
            },
            {
                category: "Urinarias, Reproductivas y Neurológicas",
                icon: "Brain",
                diseases: [
                    { name: "Falla renal crónica", description: "Común por edad o dietas altas en proteína." },
                    { name: "Piometra y quistes ováricos", description: "Requieren cirugía (ovariohisterectomía)." },
                    { name: "Signos vestibulares", description: "Ladeo de cabeza por infecciones de oído." },
                    { name: "Epilepsia (Jerbos)", description: "Congénita en 20-40% de la población.", tags: ["Jerbo"] },
                    { name: "Toxicidad por Estreptomicina", description: "Altamente tóxica para hámsteres y jerbos.", tags: ["Hámster", "Jerbo"] }
                ]
            }
        ]
    },
    zoonosis: {
        title: "Zoonosis (Riesgo para Humanos)",
        content: [
            { disease: "Salmonelosis", description: "Rara, pero de grave riesgo. La recomendación suele ser la eutanasia." },
            { disease: "Tenia Enana (Rodentolepis/Hymenolepis nana)", description: "Parásito intestinal con gran potencial zoonótico." },
            { disease: "Coriomeningitis Linfocítica (LCMV)", description: "Transmitida por hámsteres, causa síntomas gripales severos." },
            { disease: "Tularemia", description: "El piojo del ratón (Polyplax serrata) puede actuar como vector." }
        ]
    }
  }
};
