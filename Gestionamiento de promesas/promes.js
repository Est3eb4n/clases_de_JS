//===================== GESTION DE PROMESAS ========================

// son objetos que representan un valor que puede estas ahora, en el futuro o nunca.Las promesas se utilizan para ralizar operaciones asincronicas en el lenguaje de programacion como JavaScrip

// Estados de la promesa

//======================= then(resolve) =============================

//ejecuta una funcion callback "resolve" cuando la promesa se cumple

// const promesa = new Promise(function(resolve, reject){

//   const cumplir = true;
//   const data =[
//     {id:1, username:"pepe",pasword:"123456"},
//     {id:2, username:"juan",pasword:"123456"}
//   ];

//   if(cumplir){
//     setTimeout(()=>{
//       console.log("Promesa ejecutada con exito");
//       resolve(data);
//     }, 3000);
//   }
//   else 
//     console.error("Error en la promesa. ");
//     reject(null);
// });

// console.log(promesa);

// promesa.then(res => {
//   console.log("Promesa devuelve",res);
// })
// .catch(res => {
//   console.log("promesa rechazada")
// })

//======================== catch(reject) ===========================

// Ejecuta una  funcion callback "Reject cuando la promesa se rechaza"

//======================= finally(end) =============================

// Ejecuta la funcion callback "end" tanto si se cumple como si se recahza

//====================== Promise.race[…]: ==========================

// Es un método estático de la clase Promise en JavaScript que toma un iterable de promesas como argumento y devuelve una nueva promesa. Esta nueva promesa se resolverá o se rechazará tan pronto como una de las promesas del iterable se resuelva o se rechace, con el valor o motivo de esa primera promesa que se complete.

// const prom1 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Promesa 1"), 5000);
// })
// const prom2 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Pormesa 2"), 3000);
// })
// const prom3 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Promesa 3"), 8000);
// })


// Promise.race([prom1,prom2,prom3]).then(valor =>{
//   console.log(valor);
// })
// .catch(valor =>{
//   console.log(valor);
// })

//====================== Promise.all[…]: ==========================

// Es un método en JavaScript que toma un iterable de promesas y devuelve una nueva promesa que se cumple con un array de resultados cuando todas las promesas en el iterable se han cumplido, o se rechaza con la razón de la primera promesa que se rechaza.

// const prom4 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Promesa 4"), 5000);
// })
// const prom5 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Pormesa 5"), 3000);
// })
// const prom6 = new Promise((resolve,reject)=>{
//   setTimeout(()=> resolve("Promesa 6"), 8000);
// })


// Promise.all([prom4,prom5,prom6]).then(valor =>{
//   console.log(valor);
// })
// .catch(res =>{
//   console.log(res);

// })

//====================== Promise.any[…]: ==========================

// Es un método introducido en ECMAScript 2021 que pertenece al objeto Promise. Este método devuelve una nueva promesa que se cumple tan pronto como al menos una de las promesas en el iterable se cumple. Si todas las promesas son rechazadas, entonces la promesa devuelta también será rechazada con un array que contiene los motivos de todos los rechazos.

const prom7 = new Promise((resolve,reject)=>{
  setTimeout(()=> resolve("Promesa 7"), 2000);
})
const prom8 = new Promise((resolve,reject)=>{
  setTimeout(()=> resolve("Pormesa 8"), 3000);
})
const prom9 = new Promise((resolve,reject)=>{
  setTimeout(()=> resolve("Promesa 9"), 1000);
})


Promise.any([prom7,prom8,prom9]).then(valor =>{
  console.log(valor);
})
.catch(res =>{
  console.log(res);

})