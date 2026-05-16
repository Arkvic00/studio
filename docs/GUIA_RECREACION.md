# Guía de Recreación: DosisPaws

DosisPaws es una herramienta clínica veterinaria construida con **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, y **Shadcn UI**. Utiliza `localStorage` para persistencia de datos.

## 1. Arquitectura y Estructura
La app se organiza de la siguiente manera:
- `/src/app`: Rutas principales (Dosis, Vademécum, Fluidoterapia, Gestación, Transfusión).
- `/src/components`: Componentes de UI personalizados y módulos por funcionalidad.
- `/src/lib`: Lógica de negocio, tipos de TypeScript y base de datos de medicamentos.
- `/src/contexts`: Contexto global para compartir datos del paciente entre pestañas.

## 2. Definiciones de Datos (Types)
Es fundamental definir los tipos en `src/lib/types.ts`:
- **Drug**: Interfaz completa que incluye `meta_data`, `parametros_dosificacion`, `seguridad_y_alertas` y `presentaciones_comerciales`.
- **Patient**: `nombre`, `especie`, `peso`.
- **Calculation**: Estado de una fila en la calculadora de dosis.

## 3. Lógica de los Módulos

### A. Calculadora de Dosis (`/dosis`)
- **Lógica**: Cruza el peso del paciente con el medicamento seleccionado.
- **Fórmula**: 
  - Si el cálculo es `mg_kg`: `(Peso * Dosis) / Concentración`.
  - Si el cálculo es `fija`: `Dosis / Concentración`.
- **UI**: Estilo "Pinterest" con `GlassInput` para entradas numéricas.

### B. Vademécum (`/vademecum`)
- **DrugList**: Buscador con `fuzzySearch` que filtra por nombre, familia o indicación.
- **DrugDetail**: Muestra toda la farmacología, contraindicaciones y tablas de dosis por especie.

### C. Fluidoterapia (`/fluidoterapia`)
- **Reposición**: `Total (ml) = (Peso * % Deshid * 10) + (Peso * Mant) + Pérdidas`.
- **CRI**: Calcula el volumen de fármaco a añadir a una bolsa basándose en `mcg/kg/min`.
- **Diluciones**: Implementa la fórmula `C1 * V1 = C2 * V2`.

### D. Gestación (`/gestacion`)
- **Lógica**: Genera un timeline basado en la fecha de monta y constantes por especie (Promedio 63 días para perros, 65 para gatos).

### E. Transfusión (`/transfusion`)
- **Volumen**: `ml = K * Peso * (HT_Meta - HT_Receptor) / HT_Donante`. Donde `K=90` para perros y `K=66` para gatos.

## 4. Componentes Clave de UI
- **PinterestCard**: Tarjetas con bordes redondeados y sombras suaves.
- **GlassInput**: Inputs con efecto translúcido y labels flotantes.
- **AppShell**: Maneja el Sidebar lateral y el Header dinámico.

## 5. Base de Datos de Medicamentos
Ubicada en `src/lib/drugs/`. Cada medicamento tiene su propio archivo `.ts` exportando un objeto de tipo `Drug`. El archivo `index.ts` centraliza las exportaciones.

## 6. Prompt Maestro para Recreación
"Crea una app veterinaria en Next.js con un sidebar que contenga: Calculadora de Dosis, Vademécum, Fluidoterapia, Gestación y Transfusión. Usa un diseño oscuro moderno con estética translúcida (glassmorphism). Implementa un contexto global para el paciente (nombre, peso, especie) que persista en localStorage. Los cálculos deben ser precisos y basados en guías clínicas veterinarias."
