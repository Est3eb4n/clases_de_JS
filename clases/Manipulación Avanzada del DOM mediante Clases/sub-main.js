const mensaje = document.getElementById('mensaje');

// PROPIEDAD classList
// Sintaxis general: elemento.classList

// obteniendo elemento del DOM
const elemento = document.getElementById('item1');

// classList.length
// Devuelve la cantidad de clases que tiene un elemento

// mensaje.innerText = `Cantidad de clases en el elemento: ${elemento.classList.length}`;

// classList.item
// Devuelve la clase en la posición n de la lista de clases de un elemento.

// mensaje.innerText = `Clase en la posición 2 del elemento: ${elemento.classList.item(2)}`;

// classList.contains
// Devuelve true si la clase está presente y false si no lo está.

// mensaje.innerText = `Existe la clase container en el item: ${elemento.classList.contains('container') ? "SI":"NO"}`;

// classList.add
// Agrega una o más clases a los atributos de clases de un elemento HTML
elemento.classList.add('clase1', 'clase2');
mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`;


const txtClase=document.getElementById("clase");
const txtClasenNueva=document.getElementById("claseNueva");
const btnAdd=document.getElementById("btnAdd");
const btnRemove=document.getElementById("btnRemove");
const btnTogle=document.getElementById("btnTogle");
const btnReplace=document.getElementById("btnReplace");

btnAdd.addEventListener("click",()=>{
  elemento.classList.add(txtClase.value);
})

btnRemove.addEventListener("click",()=>{
  elemento.classList.remove(txtClase.value);
})

btnTogle.addEventListener("click",()=>{
  elemento.classList.toggle(txtClase.value);
  mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`;
})

btnReplace.addEventListener("click",()=>{
  elemento.classList.replace(txtClase.value, txtClasenNueva.value);
  mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`;
})