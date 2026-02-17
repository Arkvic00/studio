import type { Drug } from '@/lib/types';

export const altrenogestDrug: Drug = {
    "id": "altrenogest",
    "meta_data": {
    "nombre_generico": "Altrenogest",
    "nombres_comerciales": ["Regu-Mate", "Altosyn", "Matrix"],
    "grupo_farmacologico": "Progestina Sintética",
    "status_regulatorio": "Aprobado FDA (Equinos y Porcinos)."
    },
    "resumen_clinico": {
    "puntos_clave": [
    "ADVERTENCIA: Se absorbe fácilmente por la piel humana.",
    "Mujeres embarazadas o que planean estarlo NO deben manejarlo.",
    "Suprime el estro de forma predecible en yeguas.",
    "No es efectivo en yeguas con piómetra."
    ],
    "usos_principales": "Supresión del estro en yeguas para sincronización o control de comportamiento. Soporte del embarazo en yeguas con deficiencia de progesterona."
    },
    "informacion_cliente": [
    "Usar guantes de vinilo o polietileno (los de látex pueden ser permeables).",
    "Si hay contacto con la piel, lavar inmediatamente con agua y jabón.",
    "Administrar sobre la comida o directamente en la boca."
    ],
    "monitoreo_paciente": [
    "Actividad estral (ecografía, comportamiento).",
    "Estado uterino.",
    "Niveles de progesterona (si se usa para soporte de preñez)."
    ],
    "interferencia_laboratorio": [
    "No se reportan interferencias en pruebas de laboratorio estándar."
    ],
    "parametros_dosificacion": {
    "caballo": [
    {
    "indicacion": "Supresión del estro",
    "vias": ["PO"],
    "math": {
    "tipo_calculo": "mg_kg",
    "dosis_recomendada": 0.044,
    "unidad_calculo": "mg/kg"
    },
    "frecuencia": { "texto_ui": "Una vez al día por 15 días", "intervalo_horas": 24 },
    "notas_tecnicas": "El estro suele ocurrir 4-5 días después de suspender el tratamiento."
    }
    ]
    },
    "seguridad_y_alertas": {
    "contraindicaciones": [
    "Yeguas con inflamación uterina (endometritis).",
    "No usar en caballos destinados al consumo humano."
    ],
    "precauciones": [
    "Manejo extremadamente cuidadoso por humanos (riesgo de interrupción del ciclo menstrual o embarazo)."
    ],
    "efectos_adversos": [
    "Cambios mínimos en yeguas a dosis terapéuticas.",
    "Alteración de parámetros de calidad espermática en sementales (si se usa accidentalmente)."
    ],
    "sobredosis": {
    "signos": ["No se han reportado efectos agudos graves en caballos"],
    "tratamiento": "Soporte."
    },
    "interacciones_farmacologicas": [
    { "farmaco": "Rifampicina", "efecto": "Puede disminuir la eficacia del altrenogest", "severidad": "Leve" }
    ]
    },
    "farmacologia_clinica": {
    "mecanismo_accion": "Produce efectos similares a la progesterona natural, inhibiendo la liberación de gonadotropinas (LH/FSH) de la pituitaria.",
    "farmacocinetica": "Se une a proteínas plasmáticas. Metabolismo hepático."
    },
    "presentaciones_comerciales": [
    { "tipo": "Solución oral", "concentracion_texto": "2.2 mg/mL (0.22%)", "valor_concentracion": 2.2, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
