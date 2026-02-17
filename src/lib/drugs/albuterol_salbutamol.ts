import type { Drug } from '@/lib/types';

export const albuterolSalbutamolDrug: Drug = {
    "id": "albuterol_salbutamol",
    "meta_data": {
    "nombre_generico": "Albuterol (Salbutamol)",
    "nombres_comerciales": ["Proventil", "Ventolin", "Salbutol"],
    "grupo_farmacologico": "Agonista Beta-2 Adrenérgico",
    "status_regulatorio": "Uso extra-label en perros, gatos y caballos."
    },
    "resumen_clinico": {
    "puntos_clave": [
    "Broncodilatador de acción rápida.",
    "Eficaz para alivio agudo, pero el uso crónico puede disminuir la densidad de receptores (tolerancia).",
    "La inhalación reduce drásticamente los efectos secundarios sistémicos en comparación con la vía oral."
    ],
    "usos_principales": "Broncoespasmo asociado a asma felina, bronquitis crónica en perros y enfermedad inflamatoria de las vías respiratorias en caballos."
    },
    "informacion_cliente": [
    "Se requiere un espaciador (como AeroKat o AeroDawg) para administración efectiva en mascotas.",
    "Limpiar el hocico tras la administración para evitar ingestión accidental.",
    "Contactar al veterinario si el animal presenta temblores o agitación severa."
    ],
    "monitoreo_paciente": [
    "Frecuencia respiratoria y esfuerzo.",
    "Frecuencia cardiaca (vigilar taquicardia).",
    "Potasio sérico (riesgo de hipopotasemia con dosis altas)."
    ],
    "interferencia_laboratorio": [
    "Potasio: Puede disminuir artificialmente los niveles séricos.",
    "Glucosa: Puede elevar ligeramente la glucemia."
    ],
    "parametros_dosificacion": {
    "gato": [
    {
    "indicacion": "Asma felina (Crisis aguda)",
    "vias": ["Inhalación (MDI)"],
    "math": {
    "tipo_calculo": "fija",
    "dosis_recomendada": 1,
    "unidad_calculo": "puff (90 mcg)"
    },
    "frecuencia": { "texto_ui": "Según sea necesario cada 4-6 horas", "intervalo_horas": 4 },
    "notas_tecnicas": "Usar solo para crisis. El uso diario crónico puede empeorar la inflamación de las vías respiratorias."
    }
    ],
    "caballo": [
    {
    "indicacion": "Broncoespasmo (RAO/IAD)",
    "vias": ["Inhalación"],
    "math": {
    "tipo_calculo": "mg_kg",
    "dosis_recomendada": 2,
    "unidad_calculo": "mcg/kg"
    },
    "frecuencia": { "texto_ui": "Cada 1-2 horas en crisis", "intervalo_horas": 1 }
    }
    ]
    },
    "seguridad_y_alertas": {
    "contraindicaciones": [
    "Hipersensibilidad.",
    "Arritmias cardiacas severas."
    ],
    "precauciones": [
    "Diabetes mellitus (puede causar hiperglucemia).",
    "Hipertiroidismo.",
    "Enfermedad cardiaca o hipertensión."
    ],
    "efectos_adversos": [
    "Taquicardia.",
    "Temblores musculares.",
    "Hipopotasemia.",
    "Agitación / Nerviosismo."
    ],
    "sobredosis": {
    "signos": ["Taquicardia severa", "Hipopotasemia crítica", "Vómitos", "Paro cardiaco"],
    "tratamiento": "Bloqueadores beta (propranolol) si la taquicardia es severa, suplementación con potasio."
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Bloqueadores Beta (Propranolol)", "efecto": "Antagonismo mutuo (anula el efecto del albuterol)", "severidad": "Grave" },
    { "farmaco": "Digoxina", "efecto": "Riesgo de arritmias por hipopotasemia", "severidad": "Moderada" },
    { "farmaco": "Anestésicos halogenados", "efecto": "Aumenta riesgo de arritmias ventriculares", "severidad": "Grave" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Estimula receptores beta-2 adrenérgicos en el músculo liso bronquial, activando la adenilciclasa y aumentando el AMP cíclico (relajación).",
    "farmacocinetica": "Inicio por inhalación: 5-15 min. Duración: 3-6 h."
    },
    "presentaciones_comerciales": [
    { "tipo": "Inhalador (MDI)", "concentracion_texto": "90 mcg por puff", "valor_concentracion": 0.09, "unidad_concentracion": "mg", "es_divisible": false }
    ]
  };
