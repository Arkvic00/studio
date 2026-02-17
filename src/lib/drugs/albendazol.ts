import type { Drug } from '@/lib/types';

export const albendazolDrug: Drug = {
    "id": "albendazol",
    "meta_data": {
      "nombre_generico": "Albendazol",
      "nombres_comerciales": ["Valbazen", "Albenza"],
      "grupo_farmacologico": "Antiparasitario, Benzimidazol",
      "status_regulatorio": "Aprobado FDA para ganado bovino, ovino y caprino (no lactantes)."
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Amplio espectro: nematodos, cestodos y trematodos (fasciola).",
        "NO se recomienda en perros ni gatos por toxicidad en médula ósea.",
        "Teratogénico: evitar en el primer tercio de la gestación.",
        "Potencialmente tóxico en palomas y conejos."
      ],
      "usos_principales": "Control de fasciola hepática adulta, tenias, gusanos pulmonares e intestinales en ganado. Uso extra-label en conejos para Encephalitozoon cuniculi."
    },
    "informacion_cliente": [
      "Agitar bien antes de usar.",
      "Cumplir con los tiempos de retiro en carne.",
      "No usar en animales destinados a producción de leche para consumo humano."
    ],
    "monitoreo_paciente": [
      "Eficacia (conteo de huevos en heces).",
      "Hemograma (vigilar neutropenia si se usa extra-label).",
      "Enzimas hepáticas (en tratamientos largos)."
    ],
    "interferencia_laboratorio": [
      "No se reportan interferencias específicas en el manual."
    ],
    "parametros_dosificacion": {
      "bovino": [
        {
          "indicacion": "Parásitos gastrointestinales y Fasciola (Etiqueta)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 10,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 },
          "notas_tecnicas": "Tiempo de retiro en carne: 27 días."
        }
      ],
      "ovino": [
        {
          "indicacion": "Parásitos gastrointestinales (Etiqueta)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 7.5,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 }
        }
      ],
      "conejo": [
        {
          "indicacion": "Encephalitozoon cuniculi (Extra-label)",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "mg_kg",
            "dosis_recomendada": 20,
            "unidad_calculo": "mg/kg"
          },
          "frecuencia": { "texto_ui": "Una vez al día por 10 días", "intervalo_horas": 24 }
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": [
        "Primeros 45 días de gestación en vacas.",
        "Primeros 30 días de gestación en ovejas/cabras.",
        "Ganado lechero en edad reproductiva.",
        "Falla hepática."
      ],
      "precauciones": [
        "Aves (palomas): Muy sensibles, riesgo de necrosis intestinal.",
        "Conejos: Usar con extrema precaución."
      ],
      "efectos_adversos": [
        "Neutropenia y anemia aplásica (perros/gatos).",
        "Letargo y anorexia.",
        "Muerte fetal o malformaciones."
      ],
      "sobredosis": {
        "signos": ["Diarrea severa", "Falla multiorgánica", "Muerte"],
        "tratamiento": "Descontaminación GI y soporte."
      },
      "interacciones_farmacologicas": [
        { "farmaco": "Cimetidina", "efecto": "Aumenta niveles de albendazol en bilis", "severidad": "Leve" },
        { "farmaco": "Dexametasona", "efecto": "Aumenta concentraciones séricas de albendazol", "severidad": "Moderada" },
        { "farmaco": "Teofilina", "efecto": "Puede disminuir niveles de teofilina", "severidad": "Moderada" }
      ]
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe la polimerización de la tubulina, interrumpiendo el transporte intracelular de los parásitos.",
      "farmacocinetica": "Metabolismo rápido a albendazol sulfóxido (activo). Pico plasmático 11h en vacas, 24h en ovejas."
    },
    "presentaciones_comerciales": [
      { "tipo": "Suspensión oral", "concentracion_texto": "113.6 mg/mL", "valor_concentracion": 113.6, "unidad_concentracion": "mg/ml", "es_divisible": false }
    ]
  };
