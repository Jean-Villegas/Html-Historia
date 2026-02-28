# Html-Css-Figma

Sitio web estático sobre la evolución del HTML, realizado con **HTML + CSS** y una **base de datos local en el navegador (IndexedDB)** para el formulario de contacto.

---

## 1. Requisitos previos

No es necesario instalar XAMPP, PHP ni ningún servidor especial.

Solo necesitas:

- Un navegador moderno (Chrome, Edge, Firefox, etc.).
- Git (opcional, solo si quieres clonar el repositorio por consola).

---

## 2. Descargar o clonar el proyecto

### Opción A: Clonar con Git

1. Abrir una terminal.
2. Ejecutar:

```bash
git clone https://github.com/Jean-Villegas/Html-Css-Figma.git
cd Html-Css-Figma
```

### Opción B: Descargar como ZIP

1. Ir al repositorio en GitHub.
2. Pulsar en **Code → Download ZIP**.
3. Extraer el ZIP en una carpeta de tu preferencia.

---

## 3. Ver el sitio web

### Opción rápida (doble clic)

1. Dentro de la carpeta del proyecto, abrir el archivo:
   - `index.html`
2. Se abrirá en el navegador y verás la **página de inicio**.
3. Desde el menú superior puedes navegar a:
   - `Historia`
   - `Características`
   - `Contacto`

### Opción recomendada (Live Server / servidor estático)

Si usas VS Code o Cursor:

1. Abrir la carpeta del proyecto en el editor.
2. Instalar la extensión **Live Server** (si no la tienes).
3. Hacer clic derecho sobre `index.html` → **Open with Live Server**.
4. El navegador se abrirá en una URL tipo:
   - `http://127.0.0.1:5500/index.html`

Esto evita problemas de rutas si usas más JS en el futuro.

---

## 4. Probar el formulario y la base de datos local

1. En el navegador, ir a la página:
   - `Contacto` (en el menú) o directamente `contacto.html`.
2. Rellenar el formulario:
   - Nombre
   - Email
   - Mensaje
3. Pulsar **Enviar**.
4. Verás un mensaje encima del formulario indicando que:
   - *“tu mensaje se ha guardado correctamente en la base de datos local del navegador”*.

Detrás de escena:

- El archivo `js/contacto-db.js` usa **IndexedDB** para guardar cada envío en una base de datos llamada `contactosDB`, en un almacén (`objectStore`) llamado `contactos`.

---

## 5. Cómo ver los datos guardados (IndexedDB)

1. Con la página `contacto.html` abierta en el navegador:
2. Abrir las herramientas de desarrollador:
   - Tecla **F12** o clic derecho → **Inspeccionar**.
3. Ir a la pestaña **Application** (o **Almacenamiento** en Firefox).
4. En el panel izquierdo, buscar:
   - **IndexedDB** → `contactosDB` → `contactos`
5. Hacer clic en `contactos`:
   - Aparecerá una tabla con los registros guardados:
     - `id`, `nombre`, `email`, `mensaje`, `fecha`.

Estos son los “registros” de la base de datos local generados por el formulario.

---

## 6. Estructura de carpetas (resumen)

- `index.html` → página de inicio.
- `historia.html` → historia de las versiones de HTML.
- `caracteristicas.html` → características del HTML moderno.
- `contacto.html` → formulario de contacto.
- `css/estilo.css` → estilos globales del sitio.
- `js/contacto-db.js` → lógica de la base de datos local (IndexedDB) para el formulario.
- `docs/arbol-dom.txt` → árbol DOM del documento principal.
- `docs/arbol-cssom.txt` → árbol CSSOM de la hoja de estilos.
- `docs/informe.docx` → informe de la actividad (versión Word).

---

## 7. Notas para la corrección

- El proyecto **no usa plantillas externas** ni frameworks.
- La base de datos utilizada es **IndexedDB**, integrada en el navegador.
- Todas las páginas comparten la misma cabecera y pie de página, con un diseño consistente y centrado en la legibilidad.

