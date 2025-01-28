const mensaje= document.getElementById('mensaje');
const elemento= document.querySelector('#content');

// // Contenido en el DOM

// nodeName
// Devuelve el nombre del nodo como una cadena de texto.
// mensaje.innerHTML = `Nombre del nodo: ${elemento.nodeName}`;

// textContent

// Devuelve el contenido de texto del elemento.
// mensaje.textContent = `Contenido de texto del elemento: ${elemento.textContent}`;

// // Modificar el contenido de texto del elemento.
// elemento.textContent = "Nuevo Texto";

// // Eliminar el contenido de texto del elemento.
// elemento.textContent = "";


// // Devuelve el contenido HTML.
// mensaje.innerText = `Contenido del elemento: ${elemento.innerHTML}`;

// // // Modificar el contenido HTML.
// elemento.innerHTML = "<strong>Nuevo Texto</strong>";

// // // Eliminar el contenido HTML.
// elemento.innerHTML = "";


// setHTML()

// Es una forma segura de agregar HTML a un elemento en el DOM.
// A diferencia de innerHTML, que puede inyectar código malicioso,
// .setHTML() desinfecta el código HTML para que no contenga código
// JavaScript o cualquier otro código potencialmente dañino.

// element.setHTML(htmlCode, options):
// htmlCode:
//   Una cadena de texto que representa el código HTML que se
//   agregará al elemento.

// options: Un objeto opcional que puede contener las siguientes propiedades:
//   > sanitize: Un valor booleano que indica si el código HTML debe
//               desinfectarse (el valor predeterminado es true).

//   > allowAttributes: Una matriz de nombres de atributos HTML que se
//               permitirán en el código HTML.
//               (el valor predeterminado es una matriz vacía).

// Modificar el contenido.
elemento.setHTML("<strong>Nuevo Texto</strong>");