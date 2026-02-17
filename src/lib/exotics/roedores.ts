import type { ExoticSpeciesData } from '@/lib/types';

export const roedoresData: ExoticSpeciesData = {
  id: "roedores",
  name: "Roedores",
  sections: {
    biologia: {
      title: "Biología y Fisiología",
      content: `**Esperanza de vida:**
* Ratones: 1-2.5 años
* Ratas: 2-3.5 años
* Hámsteres: 1.5-2 años
* Jerbos: 2-3 años

**Frecuencia Cardíaca y Respiratoria:**
* Tienen metabolismos muy altos. FC: 260-700 lpm. FR: 40-250 rpm.

**Aparato Digestivo:**
* Carecen de la capacidad física de vomitar.
* Practican la coprofagia (ingesta de heces) para recuperar nutrientes; es un comportamiento normal.

**Dentición:**
* Los incisivos crecen continuamente (elodontos). Su color amarillo/naranja es normal por la acumulación de hierro.
* La proporción ideal de longitud entre incisivos inferiores y superiores es de 3 a 1.

**Glándulas Odoríferas:**
* Hámsteres: Tienen glándulas en los flancos (costados), parecen lunares oscuros, más desarrolladas en machos.
* Jerbos: Tienen una glándula en el vientre (ventral).
* Ambas son propensas a inflamarse o desarrollar tumores.

**Hibernación/Torpor (Hámsteres):**
* Si la temp. baja a <4°C, entran en sueño profundo. Entre 4°C y 10°C entran en letargo (torpor), a menudo confundido con la muerte.

**Glándulas Adrenales (Jerbos):**
* Son naturalmente muy grandes en proporción a su peso, no debe confundirse con una patología.`
    },
    sexado_reproduccion: {
      title: "Sexado y Reproducción",
      content: `**Sexado:**
* Se realiza midiendo la distancia anogenital, que es significativamente más corta en las hembras.
* No es confiable buscar testículos, ya que pueden retraerlos.

**Parámetros Reproductivos:**
**Ratón:** Pubertad (1.5m), Ciclo (4-5d), Gestación (19-21d), Camada (7-12), Destete (18-21d).
**Rata:** Pubertad (1m), Ciclo (4-5d), Gestación (21-23d), Camada (6-13), Destete (21d).
**Hámster:** Pubertad (1.5-2m), Ciclo (4-5d), Gestación (16-23d), Camada (5-10), Destete (19-21d).
**Jerbo:** Pubertad (2-4.5m), Ciclo (4-6d), Gestación (23-46d), Camada (3-8), Destete (21-28d).

**Consideraciones:**
* **Canibalismo:** Puede ocurrir si se les molesta post-parto.
* **Hámsteres:** Si se asusta, una madre puede meter a sus crías en los abazones (bolsas de los cachetes), con riesgo de asfixia.
* **Tapones Eyaculatorios:** En ratas y ratones machos, es común encontrar tapones de semen coagulado en la vejiga por retro-eyaculación. No confundir con urolitos.`
    },
    alojamiento_manejo: {
      title: "Alojamiento, Nutrición y Manejo",
      content: `**Ambiente y Sustrato:**
* Se requiere excelente ventilación para evitar la acumulación de amoníaco.
* **Prohibido usar viruta de cedro**, sus aceites volátiles son tóxicos para el hígado.

**Dieta:**
* Requisitos de proteína: Ratones >14%, Ratas 20-27%, Hámsteres y Jerbos >16%.
* Las dietas basadas solo en semillas causan obesidad y osteoporosis.
* En ratas mayores, se recomienda bajar la proteína a 4-7% para frenar la nefropatía progresiva crónica.

**Manejo y Sujeción:**
* **Ratones:** Rápidos, tienden a morder. Levantar por la base de la cola y sujetar por la piel de la nuca (scruffing).
* **Ratas:** Muerden menos. Sujetar alrededor de los hombros, apoyando las patas traseras.
* **Hámsteres:** Tienden a morder. Sujetar el cuerpo con la cabeza entre los dedos para controlar mordidas.
* **Jerbos:** Rara vez muerden. **Nunca levantar por la cola**; la piel se desprende fácilmente (tail-slip).
* **Prevención de Epilepsia (Jerbos):** La manipulación frecuente durante las primeras 3 semanas de vida reduce la probabilidad de desarrollar epilepsia congénita.`
    },
    procedimientos: {
      title: "Vías de Inyección y Toma de Muestras",
      content: `**Vías y Volúmenes Máximos de Inyección (ml):**
**SC:** Ratón(2-3), Rata(5-10), Hámster(3-5), Jerbo(2-3).
**IM:** Ratón(0.03), Rata(0.2-0.3), Hámster(0.1), Jerbo(0.1).
**IP:** Ratón(1-3), Rata(10), Hámster(3-4), Jerbo(2-3).
**IV:** Ratón(0.2-0.3), Rata(0.5 lento), Hámster(No), Jerbo(0.2-0.3).

**Toma de Muestras:**
* **Sangre:** Se puede extraer de forma segura hasta un 10% del volumen sanguíneo total en 3-4 semanas. Sitios: Vena safena lateral, venas caudales (cola).
* **Orina:** La cistocentesis es difícil despiertos; suelen orinar al manipularlos.`
    },
    anestesia_cirugia: {
      title: "Anestesia, Cirugía y Terapia de Líquidos",
      content: `**Ayuno:** **Estrictamente contraindicado.** Riesgo de hipoglucemia fatal.
                
**Terapia de Líquidos (Mantenimiento):**
* General: ~100 ml/kg/día.
* Jerbos: Requieren menos (40-60 ml/kg/día) por su adaptación a climas desérticos.

**Cirugía y Anestesia:**
* **Odontología:** El sobrecrecimiento dental se corrige con fresas dentales. **Nunca usar cortaúñas**.
* **Vía IM:** Evitar en lo posible, causa dolor y necrosis muscular.
* **Hemostasia:** Una pérdida >0.3 ml puede ser mortal para un ratón de 30g.
* **Recuperación de Fracturas:** Tienen una formación de callo óseo muy rápida (7-10 días). Vendajes o férulas simples suelen funcionar bien.`
    },
    laboratorio: {
      title: "Valores de Laboratorio de Referencia",
      content: `**Hematología:**
**Vol. Sangre (ml/kg):** Ratón(70-80), Rata(50-65), Hámster(65-80), Jerbo(60-85).
**Extracción Máx (ml):** Ratón(0.14), Rata(1.3), Hámster(0.65), Jerbo(0.3).
**Hematocrito (%):** Ratón(37-46), Rata(36-52), Hámster(36.5-58), Jerbo(41-52).
**Hemoglobina (g/dl):** Ratón(11-14.5), Rata(11.1-17.4), Hámster(10.7-19.2), Jerbo(12.1-16.9).

**Bioquímica:**
* **Glucosa (mmol/l):** Ratón(4-10.1), Rata(4-8.9), Hámster(3.3-8.8), Jerbo(2.58-7.5).
* **Proteína Total (g/l):** Ratón(56-103), Rata(59-84), Hámster(55-72), Jerbo(43-147).`
    },
    patologias: {
      title: "Patologías Comunes",
      content: `**Enfermedades Virales y Ambientales:**
* **Poliomavirus:** Causa tumores en hámsteres.
* **Coriomeningitis Linfocítica (LCMV):** Zoonótico, afecta hámsteres.
* **Barbering:** Comportamiento de estrés donde un roedor arranca el pelo de otros.
* **Cola anillada ("Ring tail"):** Necrosis de la cola en crías de rata por baja humedad.

**Enfermedades Respiratorias y Oculares:**
* **Complejo Respiratorio:** Muy común en ratas y ratones (Mycoplasma, Virus Sendai).
* **Cromodacriorrea:** "Lágrimas rojas" por estrés o enfermedad.
* **Prolapso del ojo:** Común en hámsteres por mal manejo.

**Enfermedades Gastrointestinales (GI):**
* **Diarrea por antibióticos:** Penicilinas pueden ser fatales, especialmente en hámsteres.
* **Ileítis ("Cola Mojada"):** Diarrea bacteriana severa, a menudo fatal en hámsteres y jerbos jóvenes.
* **Parásitos GI:** Coccidias, Giardia, Oxiuros, Tenias (algunas zoonóticas).

**Dermatología y Neoplasias:**
* **Parásitos externos:** Ácaros (Myobia, Demodex) y piojos.
* **Dermatitis facial (Jerbos):** Irritación por exceso de secreciones glandulares.
* **Tumores:** Mamarios (comunes en ratas y ratones), linfoma cutáneo (hámsteres), tumores de la glándula de olor (jerbos).

**Enfermedades Urinarias, Reproductivas y Neurológicas:**
* **Falla renal:** Común por edad o dietas altas en proteína.
* **Piometra y quistes ováricos:** Requieren cirugía.
* **Signos vestibulares (ladeo de cabeza):** Por infecciones de oído.
* **Epilepsia:** Congénita en jerbos.
* **Toxicidad:** La estreptomicina es altamente tóxica para hámsteres y jerbos.`
    },
    zoonosis: {
      title: "Zoonosis (Riesgo para Humanos)",
      content: `* **Salmonelosis:** Rara, pero la recomendación suele ser la eutanasia debido al grave riesgo.
* **Tenia Enana (Rodentolepis/Hymenolepis nana):** Parásito intestinal con gran potencial zoonótico.
* **Coriomeningitis Linfocítica (LCMV):** Transmitida por hámsteres, causa síntomas similares a una gripe severa.
* **Tularemia:** El piojo del ratón (Polyplax serrata) actúa como vector.`
    }
  }
};
