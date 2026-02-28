# Evolución del HTML 🚀

Sitio web educativo sobre la historia y evolución del lenguaje HTML, desde sus inicios hasta HTML5. El proyecto incluye un formulario de contacto con persistencia de datos local mediante **IndexedDB**.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** & **CSS3** (Estilos modernos y responsive)
- **JavaScript (ES6+)** para lógica dinámica.
- **IndexedDB** para almacenamiento de datos en el navegador.
- **Webpack** como empaquetador de módulos y optimización de assets.

---

## 🚀 Instalación y Ejecución Local

Para poner en marcha este proyecto en tu computadora, sigue estos pasos:

### 1. Clonar el repositorio
Abre una terminal y ejecuta:
```bash
git clone https://github.com/Jean-Villegas/Html-Historia.git
cd Html-Historia
```

### 2. Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, instala las librerías necesarias ejecutando:
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
Para ver el proyecto funcionando con recarga automática, usa:
```bash
npm start
```
Esto abrirá el navegador en `http://localhost:3001/` (o el puerto que indique la terminal).

### 4. Construir para producción
Si deseas generar la carpeta lista para subir a un servidor web:
```bash
npm run build
```
Los archivos optimizados aparecerán en la carpeta `/dist`.

---

## 📋 Estructura del Proyecto

- `src/index.html`: Página principal de bienvenida.
- `src/historia.html`: Sección detallada sobre las versiones de HTML.
- `src/caracteristicas.html`: Información sobre las etiquetas y potencia de HTML5.
- `src/contacto.html`: Formulario interactivo.
- `src/js/main.js`: Lógica principal y manejo del carrusel/navegación.
- `src/js/contacto-db.js`: Manejo de la base de datos local **IndexedDB**.
- `src/css/estilo.css`: Estilos visuales premium.

---

## 💾 ¿Cómo funciona el Formulario de Contacto?

El proyecto utiliza una base de datos local llamada `contactosDB`. Cuando un usuario envía el formulario:
1. El sistema verifica si la base de datos existe.
2. Guarda el nombre, correo y mensaje.
3. Puedes ver los datos guardados en tu navegador:
   - Presiona `F12` (Herramientas de Desarrollador).
   - Ve a la pestaña **Aplicación** (Application).
   - En el menú izquierdo, despliega **IndexedDB** -> `contactosDB`.

---

## ✒️ Autor
- **Jean Villegas** - [Perfil de GitHub](https://github.com/Jean-Villegas)

---
*Este proyecto fue realizado como parte de una evaluación sobre fundamentos de desarrollo web y manejo de estado local.*
