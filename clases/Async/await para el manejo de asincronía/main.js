// async function promesaAsincrona() { //Declaracion de funcion asincrona con "async"
//   // Código asíncrono
//   return "Hello, world";
// }
// console.log(promesaAsincrona());

async function usuarios(){
  const users= [
    {id:1, nombre:"Juan", pasword:"123456"},
    {id:2, nombre:"Lola", pasword:"123457"},
    {id:3, nombre:"Pepe", pasword:"123458"}
  ];
  setTimeout(()=>{
    console.log("Resulta la funcion async")
    return users;
  }, 3000);
};
async function peticion(){
  const x = await usuarios()
  console.log("Espere hasta que await terminara")
  return x
};
peticion()
console.log("Linea 15")
