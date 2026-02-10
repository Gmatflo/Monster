# Monster Energy Landing Page

Un sitio web interactivo desarrollado con React y Vite para展示 diferentas sabores de Monster Energy, con cambios de tema dinámicos y una interfaz moderna.

## Características Principales

- **Temas Dinámicos:** El fondo y los colores de la interfaz cambian automáticamente según el sabor seleccionado.
- **Transiciones con Framer Motion:** Animaciones fluidas al cambiar entre productos y abrir el carrito.
- **Sección de Comunidad:** Espacio para contenido relacionado con skate, racing y gaming.
- **Carrito de Compras:** Sistema funcional para añadir productos y gestionar cantidades.

## Tecnologías Utilizadas

- **React 18**
- **Vite** (Build Tool)
- **Framer Motion** (Animaciones)
- **Lucide React** (Iconografía)
- **CSS Nativo** (Variables para el sistema de temas)

## Instalación y Uso

Si quieres probarlo localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/gmatflo/monster-landing.git
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Detalles Técnicos

El proyecto utiliza variables de CSS (`--bg-color`, `--accent-color`, etc.) que se actualizan mediante un `useEffect` en `App.jsx` cada vez que el usuario navega por el carrusel de sabores. Los datos de cada sabor están centralizados en `FlavorData.js`.


