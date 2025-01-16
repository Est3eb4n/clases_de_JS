const form= document.querySelector("form");

const formD = new FormData(form);
formD.append("edad",38, "nombre", "Luis")
formD.has("nombre")
formD.delete("edad")
formD.getAll("nombre")
console.log(formD);