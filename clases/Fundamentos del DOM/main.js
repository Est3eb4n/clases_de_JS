// document.getElementsByClassName // se usa para referenciar clases
// document.getElementById // se usa para referenciar id
// document.getElementsByTagName // se usa pra referencias a una etiqueta
// document.querySelector // se usa para referenciar al primer selector o un iterable de css
// document.querySelectorAll // devuelve un iterable que el cual cumpla con el selector

// const titulo=document.getElementById("titulo")
// const nuevoTitulo = prompt("ingrese un nuevo titulo")
// titulo.innerText = nuevoTitulo
// const grupoParrafo = document.getElementsByClassName("parrafo")
// const grupoParrafo = document.getElementsByTagName("p")

// for( let i = 0 ;i < grupoParrafo.length;i++){
  //   grupoParrafo[i].innerText = "Parrafo "+i
  // }
  // const arrClase=[...grupoParrafo];
  // arrClase.forEach(elemento =>{
    //   elemento.innerText="Parrafo con clase"
    // })
// const titulo=document.querySelector("#titulo")
// titulo.innerHTML = "<h1>El nuevo titulo</h1>" // se inserta una etiqueta h1 en el documento HTML

// const grupoParrafo=document.querySelectorAll(".parrafo")

// for(const elemento of grupoParrafo){
//   elemento.innerText = "parrafo X"
//}


const content = document.getElementById("content");
const sms = document.getElementById("sms");
const bot = document.getElementById("bot");

let setFlex=true


bot.addEventListener('click',()=>{
  setFlex = !setFlex//  negacion de setFlex
  content.toggleAttribute("style");
  sms.innerText = content.getAttributeNames();

  if(setFlex){
    content.setAttribute(
      "style", "display:flex; flex-direction: row-reverse"
      );
  }

})


// content.toggleAttribute("name");

// content.toggleAttribute("name");
// sms.innerText+="****"+content.getAttributeNames();