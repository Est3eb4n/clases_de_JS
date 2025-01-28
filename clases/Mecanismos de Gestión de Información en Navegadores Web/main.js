// // Es posible superar las 10mb de almacenamiento y si lo es que puede pasar?

// sessionStorage.setItem("nombre","Pepe")
// sessionStorage.setItem("apellido","Perez")
// sessionStorage.setItem("email","pepep@mail.com")

// console.log(sessionStorage.getItem("email"))
// console.log(sessionStorage.getItem("Apellido"))
// console.log(sessionStorage.getItem("nombre"))
// //console.log(localStorage.clear())


//======= INDEXDB ========

// Abrir la conexion con la base de daatos


// Abrir la conexión con la base de datos (o crearla si no existe)
const request = window.indexedDB.open('UsuariosDB', 1);

// Configurar la estructura de la base de datos
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Crear un almacén de objetos llamado 'usuarios'
  const usuariosStore = db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true });

  // Crear índice para buscar por correo electrónico
  usuariosStore.createIndex('email', 'email', { unique: true });
};

// Manejar el éxito al abrir la conexión
request.onsuccess = (event) => {
  const db = event.target.result;

  // Función para agregar un usuario a la base de datos
  function agregarUsuario(nombre, email) {
    const transaction = db.transaction(['usuarios'], 'readwrite');
    const usuariosStore = transaction.objectStore('usuarios');

    // Agregar un nuevo usuario
    const nuevoUsuario = { nombre, email };
    const agregarRequest = usuariosStore.add(nuevoUsuario);

    // ... (manejar el éxito o error de la operación de agregar)
  }
};