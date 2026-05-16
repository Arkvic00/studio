# 📘 Guía Maestra de Recreación: DosisPaws (V2.0)

DosisPaws es una suite clínica veterinaria de alto rendimiento diseñada con una estética "Glassmorphism" sobre un modo oscuro profundo. Esta guía contiene el ADN técnico completo para replicar la aplicación.

## 1. Stack Tecnológico & Configuración
- **Framework**: Next.js 15 (App Router).
- **Librería UI**: React 19 + Shadcn UI (Radix Primitives).
- **Estilos**: Tailwind CSS 3.4+ con animaciones personalizadas.
- **Iconografía**: Lucide React (Obligatorio).
- **Persistencia**: Custom Hook `useLocalStorage` para estado síncrono entre pestañas.
- **Estado Global**: React Context API (`AppContext`).

## 2. Mega-Prompt de Recreación (Para IA)
> "Actúa como un Desarrollador Fullstack Senior. Crea una aplicación Next.js 15 llamada 'DosisPaws'.
> **Estética**: Dark Mode profundo (`#0b111e`), Glassmorphism (tarjetas con `backdrop-blur-xl` y bordes `white/10`), bordes orgánicos `rounded-4xl` y sombras suaves.
> **Funcionalidad**: Sidebar colapsable con: Calculadora de Dosis, Vademécum, Fluidoterapia, Gestación y Transfusión.
> **Requisitos**:
> 1. Implementa un `AppContext` que gestione un objeto `Patient` (nombre, especie, peso) y persista en `localStorage`.
> 2. Crea un componente `PinterestCard` que envuelva el contenido con un diseño translúcido.
> 3. Crea un componente `GlassInput` con labels flotantes y diseño minimalista.
> 4. El Vademécum debe ser una carpeta modular `src/lib/drugs/` donde cada medicamento sea un objeto TypeScript exportado individualmente.
> 5. Usa `lucide-react` para toda la iconografía."

## 3. Arquitectura de Datos (Modelos de Datos)

### A. Interfaz de Medicamento (`Drug`)
```typescript
export interface Drug {
  id: string;
  meta_data: {
    nombre_generico: string;
    nombres_comerciales: string[];
    grupo_farmacologico: string;
    status_regulatorio: string;
  };
  resumen_clinico: { puntos_clave: string[]; usos_principales: string; };
  informacion_cliente: string[];
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
    tipo: string;
    concentracion_texto: string;
    valor_concentracion: number;
    unidad_concentracion: string;
  }[];
}
```

## 4. Lógica Clínica (Fórmulas Matemáticas)

### A. Calculadora de Dosis
Cruza el peso del paciente global con los parámetros del medicamento:
- **Dosis en mL**: `(Peso_Kg * Dosis_mg_kg) / Concentracion_mg_ml`.
- **Dosis Fija**: `Dosis_Total / Concentracion_mg_ml`.
- **Superficie Corporal (ASC)**: `(K * (Peso_en_gramos ^ (2/3))) / 10000`.
  - *K Perro*: 10.1
  - *K Gato*: 10.0

### B. Fluidoterapia (3 Pilares)
1. **Déficit**: `Peso_Kg * %_Deshidratación * 10` (Resultado en mL).
2. **Mantenimiento**: `Peso_Kg * Tasa_Mantenimiento` (Default 60 mL/kg/día).
3. **Pérdidas**: Estimación directa en mL (vómitos/diarrea).
- **Tasa Infusión**: `Total_24h / Horas_Plan`.
- **Gotas por Minuto**: `(mL_Hora * Factor_Goteo) / 60`.
  - *Microgotero*: 60 gotas/mL.
  - *Normogotero*: 20 gotas/mL.

### C. Transfusión Sanguínea
- **Volumen a Transfundir**: `K * Peso * (HT_Deseado - HT_Receptor) / HT_Donante`.
  - *K Perro*: 90
  - *K Gato*: 66
- **Anticoagulante (CPDA-1)**: Proporción 1:7 (1 mL anticoagulante por cada 7 mL de sangre).

### D. Gestación (Timeline)
- **Fecha de Parto**: `Fecha_Monta + Dias_Especie`.
- **Hitos (Perro/Gato)**:
  - Ecografía: Día 25.
  - Desparasitación: Día 40.
  - Rayos X (Osificación): Día 45.

## 5. Diseño Visual (Theming)

### Paleta de Colores (CSS Variables)
```css
:root {
  --background: 222 47% 11%;      /* Azul Profundo #0b111e */
  --primary: 261 100% 86%;       /* Lavanda Brillante */
  --accent: 174 45% 51%;         /* Turquesa Clínico */
  --destructive: 0 63% 31%;      /* Rojo Sangre */
  --card: 215 28% 17%;           /* Gris Azulado */
  --radius: 0.5rem;              /* Radio base */
}
```

### Clase PinterestCard (Componente core)
```tsx
const PinterestCard = ({ children }) => (
  <div className="bg-secondary/20 backdrop-blur-xl border border-white/5 rounded-4xl shadow-2xl p-6 transition-all hover:scale-[1.01]">
    {children}
  </div>
)
```

## 6. Estructura de Archivos Recomendada
- `/src`
  - `/app` -> Rutas del framework.
  - `/components`
    - `/ui` -> Shadcn y componentes Glassmorphism.
    - `/layout` -> `AppShell`, `Sidebar`, `Header`.
  - `/contexts` -> `AppContext.tsx` (Maneja `Patient` y `Calculations`).
  - `/lib`
    - `/drugs` -> Base de datos modular (archivos `.ts`).
    - `types.ts` -> Interfaces globales.
    - `utils.ts` -> Funciones de formato y lógica matemática.

## 7. Comportamiento Esperado
1. Al cambiar el peso del paciente en la pestaña "Dosis", todas las dosis de los medicamentos añadidos deben recalcularse instantáneamente.
2. Al cambiar la especie, el Vademécum debe filtrar automáticamente los protocolos válidos para ese animal.
3. El Sidebar debe ser colapsable en móvil mediante un botón flotante ("Hambuguer Menu").
4. El sistema de impresión debe ocultar los elementos de navegación y mostrar solo las tarjetas de dosis en blanco y negro para ahorro de tinta.
