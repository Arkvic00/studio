# Guía Maestra de Recreación: DosisPaws

DosisPaws es una suite clínica veterinaria de alto rendimiento. Esta guía contiene todo lo necesario para replicar la aplicación en cualquier entorno de desarrollo o chat de IA.

## 1. Stack Tecnológico Obligatorio
- **Framework**: Next.js 15 (App Router)
- **Librería UI**: React 19 + Shadcn UI
- **Estilos**: Tailwind CSS con enfoque en Glassmorphism
- **Iconografía**: Lucide React
- **Persistencia**: `localStorage` (vía hooks personalizados)
- **Estado Global**: React Context API

## 2. Prompt Maestro (Copiar y Pegar)
> "Actúa como un experto desarrollador Senior en Next.js y React. Crea una aplicación veterinaria llamada 'DosisPaws'. La interfaz debe ser oscura (Dark Mode), con una estética moderna tipo 'Pinterest' usando tarjetas translúcidas (Glassmorphism). Implementa un Sidebar con: Calculadora de Dosis, Vademécum, Fluidoterapia, Gestación y Transfusión.
>
> Requisitos Críticos:
> 1. Crea un Contexto Global (`AppContext`) que maneje los datos del paciente (nombre, peso, especie) y persista en `localStorage`.
> 2. El Vademécum debe ser una base de datos modular en `src/lib/drugs/` donde cada medicamento sea un archivo TypeScript con una interfaz estricta.
> 3. Implementa una 'DoseCalculator' que cruce el peso del paciente con los parámetros del medicamento seleccionado.
> 4. Usa Tailwind para crear un componente `GlassInput` (con labels flotantes) y `PinterestCard` (bordes 4xl, sombras suaves).
> 5. Las fórmulas deben ser precisas según medicina veterinaria clínica."

## 3. Arquitectura de Datos (TypeScript)

### Interfaz del Medicamento (`Drug`)
Es vital que el objeto `Drug` siga esta estructura para que los cálculos funcionen:
```typescript
export interface Drug {
  id: string;
  meta_data: {
    nombre_generico: string;
    nombres_comerciales: string[];
    grupo_farmacologico: string;
    status_regulatorio: string;
  };
  parametros_dosificacion: {
    [especie: string]: {
      indicacion: string;
      vias: string | string[];
      math: {
        tipo_calculo: 'mg_kg' | 'fija';
        dosis_recomendada: number;
        unidad_calculo: string; // 'mg/kg' o 'ml'
      };
      frecuencia: { texto_ui: string; intervalo_horas: number; };
    }[];
  };
  presentaciones_comerciales: {
    tipo: string; // 'Tableta', 'Inyectable'
    valor_concentracion: number; // Ej: 50
    unidad_concentracion: string; // 'mg/ml'
  }[];
}
```

## 4. Lógica de Negocio (Fórmulas)

### A. Calculadora de Dosis
**Entradas**: `Peso (kg)`, `Dosis Elegida (mg/kg)`, `Concentración (mg/ml)`.
**Lógica**:
- Si `tipo_calculo === 'mg_kg'`: `Resultado (ml) = (Peso * Dosis) / Concentración`.
- Si `tipo_calculo === 'fija'`: `Resultado (ml) = Dosis / Concentración`.
- **Extra**: Calcular Superficie Corporal (ASC) en m²: `ASC = (K * (Peso_en_gramos ^ (2/3))) / 10000`. Donde K=10.1 para perros y K=10.0 para gatos.

### B. Fluidoterapia (Reposición)
**Fórmula**: `Total_24h = Déficit + Mantenimiento + Pérdidas`.
- `Déficit (ml) = Peso(kg) * %_Deshidratación * 10`.
- `Mantenimiento (ml) = Peso(kg) * 60` (promedio).
- `Gotas/min = (ml_por_hora * Factor_Goteo) / 60`. (Factor Goteo: 20 para Normo, 60 para Micro).

### C. Transfusión Sanguínea
**Fórmula**: `ml_a_transfundir = K * Peso * (HT_Deseado - HT_Receptor) / HT_Donante`.
- `K`: 90 para Perros, 66 para Gatos.

### D. Gestación
**Cálculo**: `Fecha_Parto = Fecha_Monta + Días_Especie`.
- Perro: 63 días.
- Gato: 65 días.
- Conejo: 31 días.

## 5. Diseño y Estética (globals.css)
Usa estos valores de color para replicar el "Look & Feel":
- `background`: `hsl(222 47% 11%)` (Azul muy oscuro)
- `primary`: `hsl(261 100% 86%)` (Lavanda brillante)
- `accent`: `hsl(174 45% 51%)` (Turquesa clínico)
- `destructive`: `hsl(0 63% 31%)` (Rojo sangre suave)
- **Bordes**: `rounded-4xl` para una apariencia orgánica.

## 6. Estructura de Archivos Clave
- `src/contexts/app-context.tsx`: Cerebro de la app, maneja el estado del paciente.
- `src/components/ui/glass-input.tsx`: Input estilizado con efectos de cristal.
- `src/components/layout/app-shell.tsx`: Maneja el Sidebar y la navegación.
- `src/lib/drugs/index.ts`: Punto central de exportación de la base de datos.
- `src/app/dosis/page.tsx`: La vista principal con la lógica de cruce de datos.
