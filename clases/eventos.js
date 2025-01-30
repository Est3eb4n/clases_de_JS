// function changeBackgroundColor() {
//   document.body.style.backgroundColor = getRandomColor();
// }

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const button = document.querySelector("button");
// button.onclick=function(){
//   alert("Hello")
// }

const divOver = document.getElementById("cambiarFondo");
const texto = document.getElementById("texto");

let i = 0

divOver.setAttribute("onmouseover", "ponerSombra()");
// divOver.setAttribute("ondblclick", "alert('que pasa loco')");
divOver.setAttribute("onclick", "incrementar()");
texto.setAttribute("onchange", "replicar()");
texto.setAttribute("onkeydown", "replicar()");

function ponerSombra(){
  divOver.classList.toggle("shadow");
}

function incrementar(){
  i++;
  divOver.textContent = `conteo en ${i}`;
}

function replicar(){
  divOver.textContent=texto.value
}