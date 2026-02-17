import type { Drug } from '@/lib/types';

export const atovacuonaDrug: Drug = {
    "id": "atovacuona",
    "meta_data": {
      "nombre_generico": "Atovacuona",
      "nombres_comerciales": [
        "Mepron",
        "Malarone (con Proguanil)"
      ],
      "grupo_farmacologico": "Antiprotozoario",
      "status_regulatorio": "Uso extra-label en veterinaria. Aprobado FDA humanos."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Tratamiento principal para Babesiosis (B. gibsoni) y Cytauxzoonosis felina.",
        "Debe administrarse SIEMPRE con una comida grasa para que se absorba.",
        "Suele combinarse con Azitromicina para mayor efectividad.",
        "Es una suspensión amarilla espesa que mancha."
      ],
      "usos_principales": "Babesia gibsoni (perros), Cytauxzoon felis (gatos), Neumocistosis."
    },
    "informacion_cliente": [
      "Es CRÍTICO dar este medicamento junto con una comida rica en grasa (ej. comida enlatada), o no funcionará.",
      "El tratamiento es costoso y largo.",
      "La medicina mancha la ropa de amarillo brillante."
    ],
    "monitoreo_paciente": [
      "PCR para confirmar eliminación del parásito (seguimiento).",
      "Hematocrito (resolución de anemia).",
      "Función hepática."
    ],
    "interferencia_laboratorio": [
      "Ninguna reportada comúnmente."
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Babesia gibsoni",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 13.3,
            "dosis_min": 13.3,
            "dosis_max": 13.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas por 10 días",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Combinar con Azitromicina (10 mg/kg SID)."
        }
      ],
      "gato": [
        {
          "indicacion": "Cytauxzoonosis (C. felis)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 15,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": {
            "texto_ui": "Cada 8 horas por 10 días",
            "intervalo_horas": 8
          },
          "notas_tecnicas": "Combinar con Azitromicina. Tasa de supervivencia ~60% (mejor que sin tratamiento)."
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Hipersensibilidad."
      ],
      "precauciones": [
        "Enfermedad hepática."
      ],
      "efectos_adversos": [
        "Vómitos (dar antiemético si es necesario para no perder la dosis).",
        "Diarrea.",
        "Rash cutáneo (raro)."
      ],
      "sobredosis": {
        "signos": ["Molestias GI"],
        "tratamiento": "Sintomático."
      },
      "interacciones_farmacologicas": [
        {
          "farmaco": "Tetraciclinas / Metoclopramida",
          "efecto": "Pueden reducir niveles plasmáticos de atovacuona",
          "severidad": "Moderada"
        }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe el transporte de electrones mitocondrial en el parásito (complejo citocromo bc1), colapsando la membrana mitocondrial.",
      "farmacocinetica": "Absorción altamente dependiente de grasas. Vida media larga (~60-70h)."
    },
    "presentaciones_comerciales": [
      {
        "tipo": "Suspensión Oral",
        "concentracion_texto": "750 mg/5 mL (150 mg/mL)",
        "valor_concentracion": 150,
        "unidad_concentracion": "mg/ml",
        "es_divisible": false
      }
    ]
  };
