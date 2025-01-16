function noBloqueante(funcionCallback){
  console.log("----->Inicio tarea!")
  setTimeout(() => {//se usa una funcion callback
    console.log("-->Tarea Asincrona ejecutada")
    funcionCallback()
  }, 3000)//indica el tiempo de retraso para la ejecucion de la tarea
}
console.log("**** Inicia programa ****")

noBloqueante(()=>{console.log("-->Callback Ejecutado"),console.log("Fin del programa")})// funcion flecha
