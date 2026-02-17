import type { ExoticSpeciesData } from './types';

export const EXOTICS_FORMULARY_DATA: { [key: string]: ExoticSpeciesData } = {
    roedores: {
        id: "roedores",
        name: "Roedores",
        sections: {
            general: {
                title: "Consideraciones Generales",
                content: "Los roedores tienen un metabolismo rápido y requerimientos de dosificación específicos. Siempre verificar el peso exacto."
            },
            antibioticos: {
                title: "Antibióticos Comunes",
                content: "* **Enrofloxacina:** 5-10 mg/kg cada 12-24h PO/SC\n* **Trimetoprim-Sulfa:** 15-30 mg/kg cada 12h PO/SC\n* **Doxiciclina:** 5 mg/kg cada 12h PO"
            },
            analgesicos: {
                title: "Analgésicos",
                content: "* **Meloxicam:** 0.5-1 mg/kg cada 24h PO/SC\n* **Buprenorfina:** 0.05-0.1 mg/kg cada 6-12h SC"
            }
        }
    },
    conejo: {
        id: "conejo",
        name: "Conejo",
        sections: {
            general: {
                title: "Consideraciones Generales",
                content: "Los conejos son herbívoros con un sistema digestivo delicado. Ciertos antibióticos (como la penicilina oral) son tóxicos."
            },
            antibioticos: {
                title: "Antibióticos Seguros",
                content: "* **Enrofloxacina:** 5-20 mg/kg cada 12-24h PO/SC\n* **Trimetoprim-Sulfa:** 30 mg/kg cada 12h PO/SC\n* **Azitromicina:** 15-30 mg/kg cada 24h PO"
            },
             analgesicos: {
                title: "Analgésicos",
                content: "* **Meloxicam:** 0.5-1 mg/kg cada 12-24h PO/SC\n* **Buprenorfina:** 0.01-0.05 mg/kg cada 6-12h SC/IV"
            }
        }
    }
};
