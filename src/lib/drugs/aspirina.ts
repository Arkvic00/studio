import type { Drug } from '@/lib/types';

export const aspirinaDrug: Drug = {
    "id": "aspirina",
    "meta_data": {
      "nombre_generico": "Aspirina (Ácido Acetilsalicílico)",
      "nombres_comerciales": [
        "Bayer",
        "Bufferin",
        "Ecotrin"
      ],
      "grupo_farmacologico": "AINE (Antiinflamatorio No Esteroideo) / Antiplaquetario",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos y en algunos productos veterinarios antiguos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "AINE clásico con propiedades analgésicas, antipiréticas y antiinflamatorias.",
        "Efecto antiplaquetario irreversible (adelgaza la sangre) que dura la vida de la plaqueta (7-10 días).",
        "Los gatos son extremadamente sensibles debido a su incapacidad para metabolizarla rápidamente (vida media ~30-40 horas).",
        "Riesgo alto de úlceras gástricas."
      ],
      "usos_principales": "Analgesia (leve a moderada), antiinflamatorio, antipirético y prevención de tromboembolismo arterial (especialmente en gatos con enfermedad cardiaca o perros con IMHA)."
    },
    "informacion_cliente": [
      "NUNCA dar Tylenol (Acetaminofén) por error; la Aspirina es diferente pero también peligrosa si no se dosifica bien.",
      "Dar siempre con comida para proteger el estómago.",
      "Si el animal vomita \"granos de café\" (sangre digerida) o tiene heces negras, suspender y llamar al veterinario.",
      "En gatos, una sola dosis dura días; no repetir sin instrucción."
    ],
    "monitoreo_paciente": [
      "Signos gastrointestinales (vómito, diarrea, melena).",
      "Hematocrito (anemia por sangrado oculto).",
      "Función renal y hepática en tratamientos largos.",
      "Tiempos de coagulación de mucosas."
    ],
    "interferencia_laboratorio": [
      "Glucosa urinaria: Falsos positivos (reacción de sulfato de cobre).",
      "T3/T4: Puede disminuir niveles séricos.",
      "Pruebas de coagulación: Aumenta tiempo de sangrado."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Analgesia / Antiinflamatorio",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "dosis_min": 10,
            "dosis_max": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 horas",
            "intervalo_horas": 12
          }
        },
        {
          "indicacion": "Antiplaquetario (Prevención trombos)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 0.5,
            "dosis_min": 0.5,
            "dosis_max": 5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 12 a 24 horas",
            "intervalo_horas": 24
          },
          "notas_tecnicas": "Dosis \"ultra-baja\" (0.5 mg/kg) es efectiva para inhibir tromboxano sin afectar prostaciclina."
        }
      ],
      "gato": [
        {
          "indicacion": "Analgesia (Uso limitado)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 48 a 72 horas (2-3 días)",
            "intervalo_horas": 48
          },
          "notas_tecnicas": "¡PELIGRO! Vida media muy larga. Usar solo si no hay alternativas más seguras (Meloxicam/Robenacoxib)."
        },
        {
          "indicacion": "Antiplaquetario (Cardiomiopatía)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 81,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": {
            "texto_ui": "Cada 72 horas (3 días)",
            "intervalo_horas": 72
          },
          "notas_tecnicas": "Comúnmente se usa 1/4 de tableta de 81 mg (aspirina de bebé) cada 3 días."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Úlcera gástrica activa o sospechada.",
        "Trastornos de la coagulación (Von Willebrand).",
        "Asma sensible a aspirina.",
        "Falla renal severa."
      ],
      "precauciones": [
        "Gatos (metabolismo deficiente).",
        "Uso concurrente con esteroides (alto riesgo de úlcera)."
      ],
      "efectos_adversos": [
        "Irritación gástrica / Ulceración / Sangrado.",
        "Vómitos.",
        "Acidosis metabólica (sobredosis).",
        "Falla renal (necrosis papilar)."
      ],
      "sobredosis": {
        "signos": ["Depresión", "Vómitos (sangre)", "Respiración rápida (acidosis)", "Fiebre", "Convulsiones"],
        "tratamiento": "Lavado gástrico, carbón activado, fluidos alcalinizantes (Bicarbonato) para forzar excreción renal, protectores gástricos."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Corticosteroides (Prednisona)",
          "efecto": "Riesgo extremo de ulceración gastrointestinal",
          "severidad": "Grave"
        },
        {
          "farmaco": "Furosemida",
          "efecto": "Puede competir por excreción renal (toxicidad)",
          "severidad": "Moderada"
        },
        {
          "farmaco": "Fenobarbital",
          "efecto": "Aumenta metabolismo de aspirina (reduce efecto)",
          "severidad": "Leve"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe irreversiblemente la enzima Ciclooxigenasa (COX-1 y COX-2), reduciendo prostaglandinas y tromboxanos.",
      "farmacocinetica": "Absorción rápida en estómago/intestino (depende del pH). Metabolismo hepático (glucuronidación) que es muy lento en gatos."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Tableta",
        "concentracion_texto": "81 mg (Bebé), 325 mg (Adulto), 500 mg (Extra fuerte)",
        "valor_concentracion": 325,
        "unidad_concentracion": "mg",
        "es_divisible": true
      }
    ]
  };