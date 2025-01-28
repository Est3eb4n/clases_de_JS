// // paso 1: Creación del objeto XMLHttpRequest
// const xhr = new  XMLHttpRequest();

// // paso 2: Abrir la petición,
// xhr.open('GET','usuarios.js');  
// //GET => Indica que se realizará una petición de tipo GET para obtener datos. 
// //usuarios.js => Es la URL del recurso que se quiere obtener.


// // paso 3 se le indica el tipo de objeto
// xhr.setRequestHeader('content-type','application/json'); 
// //Indica al servidor que el tipo de contenido que se espera recibir en la respuesta es JSON. 
// //Esto es importante para que JavaScript pueda procesar correctamente los datos recibidos.

// xhr.responseType = 'json'

// xhr.onload = function(){  // paso 4 se le indica que cuando se carge el recurso, se ejecute la funcion
//   if(xhr.status >=200 && xhr.status <300){
//     console.log("Peticion exitosa ",xhr.status)
//     console.log(xhr.response)
//   }
//   else console.log('Error',xhr.statusText)
// }
// xhr.send()


// const client = new XMLHttpRequest();

// client.addEventListener("readystatechange", () => {
//   console.log("Estado: ", client.readyState);
// });

// client.open("GET", "usuarios.json");
// client.send();

//=========================== FETCH (Peticiones Asincronicas)=========================

// const peticion = fetch("usuarios.json",{
//   method: "GET",
//   headers: {
//     "Content-type":"application/json"
//   }
// });

// peticion.then(response => {
//   return response.json();
// }) .then(data => {console.log(data)})

const peticion = async()=>{
  const response = await fetch("usuarios.json");
  console.log(await response.json())
}

peticion()