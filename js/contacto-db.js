// Realizado por: Jean Villegas
// "Base de datos" local usando IndexedDB para guardar los mensajes del formulario de contacto.

const DB_NAME = 'contactosDB';
const DB_VERSION = 1;
const STORE_NAME = 'contactos';

let db;

// Abrir o crear la base de datos
function abrirBaseDeDatos() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // Se ejecuta solo la primera vez o cuando se cambia la versión
    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      // Creamos el objectStore "contactos" si no existe
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true
        });
        // Índices opcionales para buscar por email o fecha
        store.createIndex('email', 'email', { unique: false });
        store.createIndex('fecha', 'fecha', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onerror = () => {
      reject(new Error('No se pudo abrir la base de datos IndexedDB.'));
    };
  });
}

// Guardar un contacto en el objectStore
function guardarContacto(datosContacto) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new Error('La base de datos no está abierta.'));
      return;
    }

    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(datosContacto);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(new Error('Error al guardar el contacto en IndexedDB.'));
    };
  });
}

// Inicializar lógica del formulario
document.addEventListener('DOMContentLoaded', async () => {
  const formulario = document.querySelector('.formulario-contenedor');
  const mensajeIntro = document.querySelector('.contacto-intro');

  try {
    await abrirBaseDeDatos();
  } catch (error) {
    console.error(error);
    if (mensajeIntro) {
      mensajeIntro.textContent = 'Ocurrió un problema al inicializar la base de datos local en el navegador.';
    }
    return; // No seguimos si no hay BD
  }

  if (!formulario) return;

  formulario.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar recarga de la página

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    const registro = {
      nombre,
      email,
      mensaje,
      fecha: new Date().toISOString()
    };

    try {
      await guardarContacto(registro);

      // Feedback al usuario: confirmación de guardado en la base de datos local
      if (mensajeIntro) {
        mensajeIntro.innerHTML = `Gracias <strong>${nombre}</strong>, tu mensaje se ha enviado correctamente.`;
      }

      formulario.reset();
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al guardar tu mensaje. Intenta de nuevo.');
    }
  });
});

