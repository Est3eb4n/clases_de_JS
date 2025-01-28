// //COLECCIONES DE DATOS
// //ARREGLOS
// //    METODO PUSH()
// const arr=[1,"Juan",true,{"ciudad":"Barranquilla"}];

// arr[3].ciudad="Cali";// se accede a la pisicion y al objeto y se realzia una modificacion
// arr[3].zipcode="1245";// se accede a la posicion y se agrega un nuevo elemento

// arr.push(["a","b"]);

// arr. push(2,3,4);
// console.log(arr)

// //    METODO POP()
// const arr2=[2,"Lupe",true,{"ciudad":"Bogota"}];

// arr2.push(["a","b"]);

// arr2. push(2,3,4);
// console.log(arr2.pop());// elimina el ultimo elemento del array
// console.log(arr2);

// //    METODO SPLICE()
// const arr3=[3,"Pepe",true,{"ciaudad":"Pereira"}];

// arr3.push(["a","b"]);
// arr3.push(2,4,5);

// arr3.splice(3,1,"Nuevo1","Nuevo2");//elimina las posiciones indicadas y las puede reemplazar

// console.log(arr3);

// //     METODO toString() permite convertir un valor de cualquier tipo a una cadena de texto

// const arr4=["uno", "dos", "tres", "cuatro", "cinco"];

// console.log(arr4.toString());
// //     METODO JOIN()
// const arr5=["seis","ciete","ocho","nueve","diez"];

// console.log(arr5.join("---"));

// //     METODO FILL
// const arr6 = new Array(5).fill("Valor por defecto");

// console.log(arr6);

// //     METODO Object.preventExtensions

// const arr7 = new Array(5).fill("0");//se para un parametro para que se acepte la creacion de 5 elementos
// Object.preventExtensions(arr7);// evita que se le sigan agregando mas elementos
// arr7[2]=3//se accede a la posicion #2 y se modifica el dato
// // arr7.push("YZ"); // al momento de quiere agragar mas datos este nos indica un error
// console.log(arr7);

// //     METODO INDEX OF
// const arr8=["uno", "dos", "tres", "cuatro", "cinco","dos"];

// console.log(arr8.indexOf("dos"));// muestra la posicion en la cual se encuentra el elemento
// console.log(arr8.indexOf("d"));// al no existor este bota un -1
// console.log(arr8.indexOf("dos",2));// aparte de indicar el parametro se le indica la posicion que se desea omitir

// //     METODO LASTINDEXOF
// const arr9=["uno", "dos", "tres", "cuatro", "cinco","dos"];

// console.log(arr9.lastIndexOf("dos"));// indica la ultima posisicon del elemento

// //     METODO FIND
// const arr10=[
//   {id:1 ,nombre:"Pepe"},// 0
//   {id:2 ,nombre:"Maria"},// 1
//   {id:3 ,nombre:"Juan"},// 2
//   {id:4 ,nombre:"Peter"},// 3
//   {id:5 ,nombre:"Santiago"},// 4
//   {id:6 ,nombre:"Peter"},//5
//   {id:7 ,nombre:"Juan"},// 6
// ];

// //const elemento=arr10.find((val,i)=>val.nombre == "Peter" );
// //const elemento=arr10.find((val,i)=>val.id == 3);
// // const elemento=arr10.find((val,i)=>val.id%2==0);
// const elemento=arr10.findIndex((val,i)=>val.nombre == "Peter" );
// console.log(elemento)

// //     METODO SORT

// const arr11=[1,5,3,8,2]
// arr11.sort((a,b)=>a-b);

// console.log(arr11)
// //     METODO REVERSE()
// const colores = ["Rojo", "Verde", "Azul"];
// colores.reverse();
// console.log(colores); // Imprime ["Azul", "Verde", "Rojo"]

// //===================================================================================
// //            CONJUNTOS

// //            OBJETO TIPO SET(GLOBAL)

// //  sintaxis =======> set.add(valor);

// //     METODO ADD (agregar datos a set)
// let conj= new Set();
// conj.add(1);
// conj.add(2);

// console.log(conj); //{0: 1, 1: 2}

// //     METODO DELETE (Elimina datos de set)
// let conj1 = new Set();
// conj1.add(1);
// conj1.add(2);
// conj1.add(3);

// conj1.delete(1); // elimia el valor 1 del conjunto
// conj1.delete(3); // elimia el valor 3 del conjunto
// console.log(conj1)

// //     METODO has (Valida si existe un dato en el Set)
// let conj2 = new Set();
// conj2.add("a");

// console.log(conj2.has("a")); // Devuelve true
// console.log(conj2.has("b")); // Devuelve false

// //     METODO clear (Limpia todos los datos del Set)
// let conj3 = new Set();
// conj3.add(1);
// conj3.add(2);

// conj3.clear();
// console.log(conj3.size); // Devolverá 0

// //     METODO size (Cunta los datos del Set)
// let miSet = new Set();
// miSet.add(1);
// miSet.add(2);

// console.log(miSet.size); // Devolverá 2
// //===================================================================================
// //          MAP

// //               OBJETO DEL TIPO MAP
// //    sintaxis =====>   let map= new Map()

// //     METODO SET (llave, valor) (Permite crear una llave, valor dentro del map, Almacena información)

// let miMapa = new Map();
// miMapa.set("nombre", "Juan");// se define llave "Nombre" con su valor "Juan"
// miMapa.set({ id: 1 }, "Información adicional");// se declara un objeto como llave con el valor 
// console.log(miMapa);

// //     METODO GET (clave) (Recupera datos)

// let miMapa1 = new Map();
// miMapa1.set("nombre", "Juan");
// console.log(miMapa1.get("nombre"));

// //     METODO HAS (clave) (Comprobación de existencia)

// let miMapa2 = new Map();

// miMapa2.set("nombre","Pepe")

// console.log(miMapa2.has("nombre")); // Devolverá true
// console.log(miMapa2.has("edad")); // Devolverá false

// //     METODO delete (clave) (Eliminación de un elemento por clave)

// let miMapa3 = new Map();

// miMapa3.set("nombre", "Lola")
// miMapa3.set("apellido","Perez")
// console.log(miMapa3.delete("nombre"))




















// //----------------------------

// const conj0= new Set();
// const lista=[

// ]
// for (val of lista){
//   conj0.add(val)
// }