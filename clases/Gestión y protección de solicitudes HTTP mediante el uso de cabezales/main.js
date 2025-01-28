const url = new URL("http://spiderman08:123456@subdom.mipagina.com:5234/imagenes/paisajes/escocia.jpg?PaisColombia&reguion=Caribe#cascadas")

console.log("Este es el host ==>  ",url.host)
console.log("Este es el nombre del host ==>  ",url.hostname)
console.log("Este es el protocolo ==>  ",url.protocol)
console.log("Devuelve el protocolo y el host ==>  ", url.origin)
console.log("Indica el nombre de usuario ==>  ", url.username)
console.log("Indica la clave de usuario ==>  ", url.password)
console.log("Devuelve el puerto en el cual se encuentra ==>  ", url.port)
console.log("Devuelve la ruta completa ==>  ", url.pathname)
console.log("Devuelve el ancla ==>  ", url.hash)
console.log("Devuelve la URL completa, incluyendo las cadenas de consulta   ==>  ", url.href)

const query= url.searchParams

//      Agrega
query.append("Ciudad","Barranquilla")
console.log(url.search)

//      Elimina
query.delete("region")
console.log(url.search)

//      
query.set("pais","Venesuela")
console.log(url.search)

//      Ordena en forma alfavetica
query.sort()
console.log(url.search)

//      has
console.log(query.has("region"))

//      get
console.log(query.get("pais"))

//      getall
console.log([...query.keys()])

//      key
console.log([...query.values()])

//      entries
console.log([...query.entries()])


query.forEach((valor,llave)=>{
  console.log(`llave=>  ${llave},valor=>  ${valor}`)
})
console.log(URL.canParse("https://mariobross.com/juegos"))

const x = new URL(url2)

const url2 = "https:pataconesdelcaribe.acme.com";

if(URL.canParse(url2)){
  console.log("redirigiendo al dominio...")
}else{ 
  console.log("Dominio Invalido")
}