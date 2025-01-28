// // declaracion de un objeto
// const persona={
//   nombre:'Pepe',
//   edad:30,
//   esTrabajador:true,
//   familia:['Miguel','Maria'],
//   direccion:{
//     calle:'Calle de la piruleta',
//     numero: 20,
//     ciudad:'Barcelona',
//   },
//   caminar(){// funcion anonima
//     console.log('Estoy caminando')
//   }
// }

//objetos json
// persona={
//   "nombre":"Lola",
//   "edad": "25",
//   "opcupacion":"ingeniero de sofeare",
//   direccion:{
//     ciudad:"Cali",
//     zipCode: 5289,
//   }
// };
// // metodo stringify
// // const edad = (key, value)=> {
// //   if(typeof value === "number"){
// //     return String(value)}
// //     else return value
// // }

// const convertir = (key, value)=> {
//   if(!isNaN(value)){
//     return Number(value)}
//     else return value
// }

// const jsonOBJ=JSON.stringify(persona, convertir,4) // metodo parse, converte un objeto JS a uno JSON 
// console.log(JSON.parse(jsonOBJ, convertir)) // metodo parse, converte un objeto json a uno JS
// console.log(jsonOBJ, persona)

//____________________________________________________________________________________

// Destructuracion de objetos

persona={
  "nombre":"Lola",
  "edad": "25",
  "opcupacion":"ingeniero de sofeare",
  direccion:{
    ciudad:"Cali",
    zipCode: 5289,
  }
};//    asignacion de un alias     //destructuracion de un objeto con otro objeto dentro
const { nombre: lpp, edad, opcupacion, direccion: { ciudad }, apellido = "no tiene apellido" } = persona // metodo para hacer una destructuracion
// console.log(lpp, edad, opcupacion, ciudad)

const arreglo=[1,50,20,80]
//const [ a,,b, ] = arreglo // se asigna un "alias" para poder extrater los numeros
const b = ['a','b']
// const c = [...arreglo,...b] // unifica "arreglo" y "B" dentro de la constante "C"
// const person = { ... persona, genero : "F"}
const { nombre, ...restante } = persona;
console.log(nombre, apellido) // con los alias se extraen los datos y se muestran en la consola
