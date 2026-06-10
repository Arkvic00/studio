
import { Drug } from "@/lib/types/drug";

export const vitaminDDrug: Drug = {
  id: "vitamin-d",
  meta_data: {
    nombre_generico: "Vitamina D",
    nombres_comerciales: ["1,25-dihidroxicolecalciferol", "colecalciferol", "Alfacalcidol", "Calcijex", "Calcitriol", "One-alpha", "Rocaltrol"],
    grupo_farmacologico: "Nutracéutico",
    status_regulatorio: "POM-VPS, POM"
  },
  resumen_clinico: {
    usos_principales: "Manejo crónico de la hipocalcemia asociada con bajas concentraciones de hormona paratiroidea. También se ha utilizado en el manejo del hiperparatiroidismo secundario renal.",
    puntos_clave: [
      "El calcitriol y el alfacalcidol son las formas preferidas por su rápido inicio de acción y corta vida media.",
      "La vitamina D tiene un índice terapéutico muy estrecho; se pueden alcanzar fácilmente dosis tóxicas.",
      "Monitorear de cerca y con frecuencia las concentraciones de calcio sérico y preferiblemente de calcio ionizado.",
      "Evitar el uso de formulaciones para animales de granja, ya que son demasiado concentradas."
    ]
  },
  seguridad_y_manejo: {
    precauciones: [
      "Observar precauciones normales."
    ]
  },
  contraindicaciones: {
    puntos_clave: [
      "No usar en pacientes con hiperfosfatemia o síndromes de malabsorción.",
      "No usar en animales gestantes."
    ]
  },
  reacciones_adversas: {
    puntos_clave: [
      "Hipercalcemia, hiperfosfatemia."
    ]
  },
  interacciones: [
    {
      farmaco: "Corticosteroides",
      efecto: "Pueden anular el efecto de las preparaciones de vitamina D.",
      severidad: "Importante"
    },
    {
      farmaco: "Sucralfato",
      efecto: "Disminuye la absorción de vitamina D.",
      severidad: "Moderada"
    },
    {
      farmaco: "Inductores de enzimas hepáticas (ej. barbitúricos)",
      efecto: "Aumentarán el metabolismo de la vitamina D y reducirán su dosis efectiva.",
      severidad: "Moderada"
    },
    {
      farmaco: "Antiácidos con magnesio o calcio",
      efecto: "Pueden causar hipermagnesemia o hipercalcemia.",
      severidad: "Importante"
    },
    {
      farmaco: "Diuréticos tiazídicos",
      efecto: "Pueden causar hipercalcemia con el uso concurrente.",
      severidad: "Importante"
    },
    {
      farmaco: "Verapamilo o digoxina",
      efecto: "La hipercalcemia puede potenciar los efectos tóxicos de estos fármacos; monitorear cuidadosamente.",
      severidad: "Grave"
    }
  ],
  dosis: [
    {
      especie: "Perros",
      dosis: [
        { indicacion: "Hipocalcemia/deficiencia de vitamina D", via: "p.o.", dosis: "Calcitriol: 10–15 ng/kg q12h por 3–4 días, luego disminuir a 2.5–7.5 ng/kg q12h para mantenimiento; Alfacalcidol: 0.01-0.03 μg/kg q24h y luego titular al efecto." },
        { indicacion: "Hiperparatiroidismo secundario renal", via: "p.o.", dosis: "Calcitriol: 1.5–3.5 ng/kg q24h; algunos autores recomiendan dosis más altas de hasta 6 ng/kg/día si hay hiperparatiroidismo refractario y se pueden evaluar las concentraciones de calcio ionizado en suero. Evaluar los niveles séricos de calcio y fosfato en serie y mantener el producto calcio × fosfato total por debajo de 4.2 (calcio y fosfato en mmol/l). No usar si esto no es posible." }
      ]
    },
    {
      especie: "Gatos",
      dosis: [
        { indicacion: "Hipocalcemia", via: "p.o.", dosis: "Calcitriol: 10–15 ng/kg/día q12h por 3–4 días, luego disminuir a 2.5–7.5 ng/kg q12h para mantenimiento; Alfacalcidol: 0.01-0.03 μg/kg q24h y luego titular al efecto." },
        { indicacion: "Hiperparatiroidismo secundario renal", via: "p.o.", dosis: "Calcitriol: 2.5–3.5 ng/kg/día." }
      ]
    }
  ],
  farmacologia_clinica: {
    mecanismo_accion: "Regula la homeostasis del calcio junto con otras hormonas (calcitonina y parathormona) a través de numerosos mecanismos complejos, incluida la acumulación de calcio en las reservas óseas y la absorción de calcio de las fuentes dietéticas.",
    farmacocinetica: "No hay información disponible."
  },
  presentaciones_comerciales: [
    { tipo: "Oral", concentracion_texto: "Alfacalcidol 2 μg/ml solución, 0.25–1 μg cápsulas; Calcitriol 0.25 μg cápsulas." },
    { tipo: "Inyectable", concentracion_texto: "Calcitriol 1 μg/ml solución." }
  ]
};
