// console.log("que narra la mojarra")
// var texto="hola";
// console.log(typeof texto);
// var obj=[1,2];
// console.log(typeof obj);
// console.log(obj.constructor.name);
// var num=5
// console.log(num.constructor.name,typeof num);
// //<--para hacer bloques de codigo se usan "{}"
// // VARIABLES
// // var

// function ejemplo(){//<---se declara la funcion y se inicia un nuevo bloque de codigo
//   if(true){//<---se habre un nuevo bloque de cod
//       var x = 1;
//   }//<---se cierra el bloque de cod
//   //x+=1//<-------------cuando se pone asi indica que no se encunentra dentro del if
//   console.log(x)
// }//<--- se cierra el bloque de codigo
// ejemplo()//<--- se llama la funcion para ser ejecutada

// // let
// function ejemplo2(){
//   let x=10;//<---Declaracion de variable global con let
//   if(true){
//     let y=20//<---Delcaracion de variabale local con let dentro del if
//     console.log(y)//<--puede mostrar la variable x y y
//   }
//   console.log(x)//<--solo puede mostrar la variable que se encuentrre fuera del if
// }
// ejemplo2()

// // const
// const pi=3.14159;//<--se declara la constante "pi"
// //pi=3,14 //<--al intentar cambiar el valor previamente declarado este genera error
// console.log(pi)

// //CLASE#2 OPERADORES

// console.log("OPERADORES ARITMETICOS")
// console.log("")
// //operador aritmetico de suma
// console.log("Operador aritmedico de Suma")
// let suma =50+30;// se declara la variable de suma y se le asigna los valores
// console.log("=>",suma)
// //operador aritmetico de resta
// console.log("Operador aritmedico de Resta")
// let resta=250-30;// se declara la variable de resta y se le asigna los valores
// console.log("=>",resta)
// //operador aritmetico de multiplicacion
// console.log("Operador aritmedico de Multiplicacion")
// let mult= 20*5;// se declara la variable de multiplicacion y se le asigna los valores
// console.log("=>",mult)
// //operador aritmetico de divicion
// console.log("Operador aritmedico de Divicion")
// let div=256/23;// se declara la variable de divicion y se le asigna los valores
// console.log("=>",div)
// //operador aritmetico exponencial
// console.log("Operador aritmedico de Exponenciacion")
// let expo= 2**5;// se declara la variable de exponenciacion y se le asigna los valores
// console.log("=>",expo)
// //operador aritmetico modulo o resto
// console.log("Operador aritmedico de Modulo o Resto")
// let modulo=10%3;// se declara la variable de modulo o resto y se le asigna los valores
// console.log("=>",modulo)
// //operador aritmetico decremento
// console.log("Operador aritmetico de decremento")
// let decremento=3;
// decremento--;
// console.log("=>",decremento)
// //operador aritmetico incremento
// console.log("Operador aritmetico de incremento")
// let incremento=5;
// incremento++;
// console.log("=>",incremento)
// console.log("____________________________________________________")
// //-----------------------------------------------------------------------------------------
// console.log("OPERADORES DE ASIGNACION")
// console.log("")
// //operador de asignacion "=" asigna un valor a una variable
// console.log("Operador de asignacion simple '='")
// let x= 5;//<---- con el operador "=" se asigna de manera simple un valor
// let y= 2;
// let z= x+y;
// console.log("=>",z)
// //operador de adicion
// console.log("Operador de Adicion")
// let a = 10;
// a+=3
// console.log("=>", a)
// //operador de sustraccion
// console.log("Operador de Susutraccion")
// let b = 10;
// b-=3
// console.log("=>", b)
// //operador de multiplicacion
// console.log("Operador de Multiplicacion")
// let c = 10;
// c*=3
// console.log("=>", c)
// //operador de Divicion
// console.log("Operador de Divicion")
// let d = 10;
// d/=3
// console.log("=>", d)
// //operador de exponenciacion
// console.log("Operador de Exponenciacion")
// let f = 2;
// f **= 3; // Equivalente a: f = f ** 3; // f ahora es igual a 8 (2 elevado a la 3)
// console.log("=>",f);
// //operador de modulo o resto
// console.log("Operador de Modulo o Resto")
// let e = 9;
// e %= 4; // Equivalente a: e = e % 4; // e ahora es igual a 1 (resto de la división por 4)
// console.log("=>",e);
// console.log("____________________________________________________")
// //-----------------------------------------------------------------------------------------
// console.log("Operadores de Desplazamiento con Asignación")

// //Operador |  Ejemplo  | Equivalente a
// //  <<=    |  x <<= y  |  x = x << y   
// //  >>=    |  x >>= y  |  x = x >> y 
// //  >>>=   |  x >>>= y |  x = x >>> y

// //Desplazamiento a la Izquierda con Asignación (<<=)
// console.log("Desplazamiento a la Izquierda")
// let g = 5;
// g <<= 2; // Equivalente a: x = x << 2; // x ahora es igual a 20 (5 desplazado a la izquierda por 2 bits)
// console.log("=>",g);
// //Desplazamiento a la Derecha con Signo con Asignación (>>=)
// console.log("Desplazamiento a la Derecha con signo de asignacion")
// let h = 16;
// h >>= 2; // Equivalente a: y = y >> 2; // y ahora es igual a 4 (16 desplazado a la derecha por 2 bits con signo)
// console.log("=>",h);
// //Desplazamiento a la Derecha sin Signo con Asignación (>>>=)
// console.log("Desplazamiento a la Derecha sin signo de asignacion")
// let i1 = -16;
// i1 >>>= 2; // Equivalente a: z = z >>> 2; // z ahora es igual a 1073741820 (representación sin signo de -16 desplazado a la derecha por 2 bits)
// console.log("=>",i1);

// console.log("____________________________________________________")
// //-----------------------------------------------------------------------------------------
// console.log("Operadores de Bits con Asignació")
// //AND Bitwise con Asignación (&=)
// let j = 5;
// j &= 3; // Equivalente a: x = x & 3; // x ahora es igual a 1 (5 AND 3 en representación binaria)
// console.log("=>",j);

// //XOR Bitwise con Asignació (^=)
// let k = 10;
// k ^= 6; // Equivalente a: k = k ^ 6; // y ahora es igual a 12 (10 XOR 6 en representación binaria)
// console.log("=>",k);
// //OR Bitwise con Asignación (|=)
// let l = 3;
// l |= 5; // Equivalente a: l = l | 5; // l ahora es igual a 7 (3 OR 5 en representación binaria)
// console.log("=>",l);
// console.log("____________________________________________________")
//-----------------------------------------------------------------------------------------
// console.log("Operadores Lógicos de Asignación")
// // |Operador  |  Ejemplo  |   Equivalente a  |
// // |   &&=    |  x &&= y  |  x = x && (x = y)|
// // |   ||=    |  x ||= y  |  x = x || (x = y)|
// // |   ??=    |  x ??= y  |  x = x ?? (x = y)|

// //AND Lógico con Asignación (&&=)
// console.log("AND Lógico con Asignación (&&=)")
// let x1 = true;
// let y2 = false;
// x1 &&= y2; // Equivalente a: x = x && (x = y); // x ahora es igual a false
// console.log("=>",x1);
// //OR Lógico con Asignación (||=)
// console.log("OR Lógico con Asignación (||=)")
// let a1 = false;
// let b2 = true;
// a1 ||= b2; // Equivalente a: a = a || (a = b); // a ahora es igual a true
// console.log("=>",a1);
// //Nullish Coalescing con Asignación (??=)
// console.log("Nullish Coalescing con Asignación (??=)")
// let p = null;
// let q = 42;
// p ??= q; // Equivalente a: p = p ?? (p = q); // p ahora es igual a 42
// console.log(p);
// console.log("____________________________________________________")
// //-----------------------------------------------------------------------------------------
// console.log("Operadores de comparación")
// |Operador  |  Descripción     |   Comparación  |  Resultado     |
// |---------------------------------------------------------------|
// |             |                  |    x == 8      |   false     |
// |     ==      |    igual a       |    x == 1      |   true      |
// |             |                  |    x == "1"    |   false     |
// |---------------------------------------------------------------|
// |             |    igual valor   |                |             |
// |     ===     |        y         |    x === 1     |   true      |
// |             |   tipo de dato   |    x === "5"   |   false     |
// |---------------------------------------------------------------|
// |    !=       |    no igual      |    x != 8      |   true      | 
// |---------------------------------------------------------------|
// |             |   no igual en    |    x !== 8     |   true      |
// |    !==      |     valor o      |    x !== "1"   |   true      |
// |             |   tipo de dato   |    x !== 1     |   false     |
// |---------------------------------------------------------------|
// |    >        |    mayor que     |      x > 8     |   false     |
// |---------------------------------------------------------------|
// |    <        |    menor que     |      x < 8     |   true      |   
// |---------------------------------------------------------------|
// |   >=        |   mayor o igual  |      x >= 8    |   false     |
// |             |      que         |                |             |
// |---------------------------------------------------------------|
// |   <=        |   menor o igual  |      x <= 8    |    true     |
// |             |       que        |                |             |

//Operador igual a (==)
// console.log("Operador igual a (==)")
// let x3 = 1;
// let y3 = x3 == 8;
// console.log("=>",y3);

// //Operador igual valor y tipo de dato (===)
// console.log("Operador igual valor y tipo de dato (===)")
// let x4 = 1;
// let y4 = x4 === "5"
// console.log("=>",y4);
// //Operador no igual (!=)
// console.log("Operador no igual (!=)")
// let x5 = 1;
// let y5 = x5 != 8;
// console.log("=>",y5);
// //Operador no igual en valor o tipo de dato (!==)
// console.log("Operador no igual en valor o tipo de dato (!==)")
// let x6 = 1;
// let y6 = x6 !== 8;
// console.log("=>",y6);
// //Operador mayor que (>)
// console.log("Operador mayor que (>)")
// let x7 = 1;
// let y7 = x7 > 8;
// console.log("=>",y7);
// //Operador menor que (<)
// console.log("Operador menor que (<)")
// let x8 = 1;
// let y8 = x8 < 8;
// console.log("=>",y8);
// //Operador mayor o igual que (>=)
// console.log("Operador mayor o igual que (>=)")
// let x9 = 1;
// let y9 = x9 >= 8;
// console.log("=>",y9);
// //Operador menor o igual que (<=)
// console.log("Operador menor o igual que (<=)")
// let x0 = 1;
// let y0 = x0 <= 8;
// console.log("=>",y0);
// console.log("____________________________________________________")
//-----------------------------------------------------------------------------------------
// console.log("Operadores lógicos")
// |Operador  |   Descripción   |      Ejemplo         | Resultado|
// |  &&      |     y (AND)     |  (x < 10 && y > 1)   | true     |
// |          |                 |                      |          |
// |  ||      |     o (OR)      |  (x == 5 || y == 5)  | false    |
// |          |                 |                      |          |
// |  !       |     no (NOT)    |     !(x == y)        | true     |
//Operador lógico AND (&&)
// console.log("Operador lógico AND (&&)")
// let a2 = 6;
// let b3 = 3;
// console.log(a2 < 10 && b3 > 1);
// //Operador lógico OR (||)
// console.log("Operador lógico OR (||)")
// let a3 = 6;
// let b4 = 3;
// console.log(a3 == 5 || b4 == 5);
// //Operador lógico NOT (!)
// console.log("Operador lógico NOT (!)")
// let a4 = 6;
// let b5 = 3;
// console.log(a4 == 5 || b5 == 5);

// console.log("")
// console.log("Uso del foreach")
// // Estructuras repetitivas

// xy=[1, "Alfa", 5,true]
// xy.forEach(element => {
//   console.log(typeof element, element)
// });
// console.log("")

// const libros = [
//   { titulo: 'Libro 1', paginas: 150 },
//   { titulo: 'Libro 2', paginas: 220 },
//   { titulo: 'Libro 3', paginas: 180 },
//   { titulo: 'Libro 4', paginas: 250 },
// ];

// const librosMasDe200Paginas = libros.filter(function(libro) {
//   return libro.paginas > 150;
// });
// console.log(librosMasDe200Paginas);

// fl=[
//   {"cuenta": "001", clave:"123"},
//   {"cuenta": "002", clave:"124"},
//   {"cuenta": "003", clave:"125"},
//   {"cuenta": "004", clave:"126"},
// ]
// const cta= prompt("Cuenta")
// const clv= prompt("Clave")
// const login = fl.some(element => {
//   return element.cuenta == cta && element["clave"]==clv
// });
// console.log(login)
// if (login){
//   alert("Autenticacion exitosa")
// }
// else{
//   alert("Autenticacion fallida")
// }

// const frutas = ["manzana", "banana", "pera", "uva", "pera"];
// const frutaBuscada = "uva";

// let indice = -1;
// let i = 0;

// do {
//   indice = frutas.indexOf(frutaBuscada, i);
//   if (indice !== -1) {
//     alert(`"${frutaBuscada}" encontrado en el índice ${indice}`);
//     i = indice + 1; // Buscar a partir del siguiente índice para encontrar ocurrencias adicionales
//   }
// } while (indice !== -1);

// const palabras = ["casa", "perro", "sol", "árbol"];

// const todasSonMasLargasQueTres = palabras.every(function(palabra) {
//   return palabra.length > 3;
// });

// alert(todasSonMasLargasQueTres);

// const numero = [1,2,8,6,4,2];

// const resultado = numero.reduce(function(total, valor) {
//   return total + valor;
// }, 0);

// alert(resultado);
console.log("____________________________________________________");

//FUNCIONES DECLARATIVAS

// const s = suma(1, 5, 8);

// console.log(s)

// function suma(n1, n2, n3) {
//   return n1 + n2 + n3
// }

//________________________________________________________________________________

//FUNCIONES ANONIMAS
//const suma = function (n1,n2,n3){
//  return n1+n2+n3
//}

//const a =suma  (5,8,3);
//console.log(a)

//________________________________________________________________________________
//FUNCIONES CALLBACK


// function cuadrado(numero){ // se declara la funcion cuadrado
//   return numero * numero
// }

// const numeros =[1,2,3,4,5];

// const numerosNumeros = numeros.map(cuadrado); // llama a la funcions "cuadrado y la pasa como parametro"
// //la función "map()" recibe como primer argumento un callback personalizado.

// console.log(numerosNumeros)


//________________________________________________________________________________
//FUNCIONES AUTOEJECUTABLES

// // Función autoejecutable
// (function() { //siempre que se inicialice una funcion auto ejecutable entre "()"
//   console.log("¡Hello world!");
// })();

// // Función autoejecutable con parámetros
// (function (name) {
//   console.log(`¡Hola, ${name}!`);
// })("Pepito");//<= en estos parentesis se pasan los parametros

//________________________________________________________________________________
//FUNCIONES FLECHA

// const funch = function () {
//   return "Función tradicional.";
// };

// const func = () => {// se define funcion fleca an uso de "=>" omitiendo la palabra reserbada "function"
//   return "Función flecha.";
// };

// // funccion flecha con un Parametro
// const suma = a => a + 2;

// // Arrow function con dos  Parametros
// const resta = (a, b) => a - b;

// // funccion flecha con un valor de retorno explícito
// const cuadrado = (numero) => {
//   return numero * numero;
// };

// // funccion flecha de una sola línea
// const esMayorQueDiez = (numero) => numero > 10;

// console.log(suma(5));
// console.log(resta(10,3));
// console.log(cuadrado(5));
// console.log(esMayorQueDiez(20));

//________________________________________________________________________________
// NUMEROS ENTEROS Y DECIMALES

// Los objetos Number tienen una serie de propiedades y métodos que se pueden usar para trabajar con números.
// Number es un tipo de datos primitivo que representa un número. Los valores de tipo Number pueden ser enteros, decimales o NaN (Not a Number).
// Hay varias formas de crear valores de tipo Number en JavaScript:

// - Usando el operador +: El operador + se puede usar para convertir cualquier valor a un número.
// - Usando la función Number(): La función Number() se puede usar para convertir explícitamente un valor a un número.
// - Usando el constructor Number(): El constructor Number() se puede usar para crear un nuevo objeto Number.

// // Usar el operador `+`
// const numero1 = +true; // 1
// // Usar la función `Number()`
// const numero2 = Number("10"); // 1
// // Usar el constructor `Number()`
// const numero3 = new Number(10); // Number {10}

// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

//________________________________________________________________________________
// Números NaN

// Operaciones problemáticas y resultados NaN


// console.log(numero1 = 0 / 0); // Dividiendo un número por cero

// console.log(Number("hola")); // Intentando convertir un valor no numérico a un número

// console.log(Math.sqrt(-1)) // Intentar calcular la raíz cuadrada de un número negativo produce NaN

// let textoNoNumerico = "Hola mundo";
// console.log(parseInt(textoNoNumerico)); // Intentar convertir una cadena no numérica a un entero produce NaN

// console.log(undefined * 5); // Operaciones con un valor indeterminado (undefined) producen NaN

// // Validación de no Números con isNaN

// console.log(isNaN(NaN));      // comprueba si el valor que se el pasa es true o false
// console.log(isNaN("Hola"));   // true, ya que "Hola" no se puede convertir a un número
// console.log(isNaN(123));      // false, ya que 123 es un número

// // Uso de Number.isNaN() para verificar si un valor es NaN

// console.log(Number.isNaN(NaN) );     // comprueba si el valor que se el pasa es true o false
// console.log(Number.isNaN("Hola"));   // false, ya que "Hola" no es NaN
// console.log(Number.isNaN(123));      // false, ya que 123 no es NaN

//________________________________________________________________________________
//  Números infinitos

// Trabajando con valores Infinity


// Infinito positivo
const numero1 = Infinity; // Infinity
// Infinito negativo
const numero2 = -Infinity; // -Infinity

console.log(numero1);
console.log(numero2);

// Conversiones Numéricas


console.log(Number("a10")); // Resultado: NaN (Not a Number), ya que no es una representación válida de un número.
console.log(Number("10")); // Resultado: 10, ya que la cadena "10" se puede convertir directamente en el número 10.
console.log(Number(true)); // Resultado: 1, ya que true se convierte en 1 al ser tratado como un número.
console.log(Number("false")); // Resultado: NaN, ya que "false" no es una representación válida de un número.
console.log(Number(false)); // Resultado: 0, ya que false se convierte en 0 al ser tratado como un número.
console.log(Number("50#")); // Resultado: NaN, ya que la cadena contiene caracteres no numéricos (el símbolo #) después del número 50.

//________________________________________________________________________________
// Cadenas

// Declaración de cadenas primitivas
const string1 = 'Hola mundo!';
const string2 = "Hola mundo!";

//  Cadenas de texto con comillas
let respuesta1 = "Está bien";
let respuesta2 = "Él se llama 'Johnny'";
let respuesta3 = 'Él se llama "Johnny"';
let respuesta4 = `'Él se llama "Johnny"'`;

// Métodos para la manipulación de cadenas "length"


// Devuelve la longitud de una cadena.

// ° Longitud de hola
const cadenah = 'hola';
console.log(cadenah.length); //  indica el nuemero de ceracteres de una cadena (4)

// Métodos para la manipulación de cadenas "slice"

//Extrae una subcadena de una cadena.

// ° Extracción de subcadena
const cadena = 'hola';
const subcadena = cadena.slice(1, 4);
console.log(subcadena); // "ola"

// Métodos para la manipulación de cadenas  "replace()"


//Reemplaza todas las ocurrencias de una subcadena en una cadena con otra subcadena.

// ° Sustitución de caracteres en una cadena de texto
const cadenar = 'hola';
const nuevaCadena = cadenar.replace('l', 'y');
console.log(nuevaCadena); // "hoya"

// Métodos para la manipulación de cadenas "toUpperCase()"

//Convierte una cadena a mayúsculas.
//° Sustitución de caracteres en una cadena de texto

const cadenat = 'hola';
const cadenaMayusculas = cadenat.toUpperCase();
console.log(cadenaMayusculas); // "HOLA"

// Métodos para la manipulación de cadenas "toLowerCase()"

// Convierte una cadena a minúsculas.
// ° Sustitución de caracteres en una cadena de texto
const cadenal = 'HOLA';
const cadenaMinusculas = cadenal.toLowerCase();
console.log(cadenaMinusculas); // "hola"

// Métodos para la manipulación de cadenas "concat()"

// Concatena dos o más cadenas.

// ° Concatenación de cadenas
const cadena1 = 'hola ';
const cadena2 = 'mundo';
const cadenaConcatenada = cadena1.concat(cadena2);
console.log(cadenaConcatenada); // "hola mundo"

 // Métodos para la manipulación de cadenas "trim()"


// Elimina los espacios en blanco de los extremos de una cadena.

//° Concatenación de cadenas
const cadenatr = '  hola mundo  ';
const cadenaSinEspacios = cadenatr.trim();
console.log(cadenaSinEspacios); // "hola mundo"

// Métodos para la manipulación de cadenas  "charAt()"

// Devuelve el carácter en una posición específica de una cadena.
// ° Obteniendo un carácter específico de una cadena
const cadenac = 'hola';
const caracter = cadenac.charAt(2);
console.log(caracter); // "l"

// Métodos de búsqueda en cadenas "indexOf()", "search()", "match()"

//            indexOf()

// Devuelve la posición de la primera aparición de una subcadena en una cadena, o -1 si no se encuentra.

//° Ubicación de subcadena, encontrando la posición de 'mundo' en 'hola mundo
const cadenai = 'hola mundo';
const posicioni = cadenai.indexOf('mundo');
console.log(posicioni); // 5

//            search()

// Busca una coincidencia con una expresión regular en una cadena. Devuelve la posición de la primera aparición de la coincidencia, o -1 si no se encuentra.

// ° Búsqueda de subcadena 
const cadenas = 'hola mundo';
const posicions = cadenas.search(/mundo/);
console.log(posicions); // 5

//            match()


// Busca una coincidencia con una expresión regular en una cadena. Devuelve un objeto MatchResult que contiene información sobre la coincidencia.
// ° Buscando 'mundo' en una cadena, resultado de la coincidencia

const cadenam = 'hola mundo';
const resultadom = cadenam.match(/mundo/);
console.log(resultadom);
// {
//   index: 6,
//   input: 'hola mundo',
//   groups: [],
//   lastIndex: 7
// }

//            includes()


// Devuelve true si una cadena incluye otra cadena, y false en caso contrario.
// ° Comprobando la presencia de 'mundo' en la cadena 'hola mundo'
const cadenan = 'hola mundo';
const resultadon = cadenan.includes('mundo');
console.log(resultadon); // true

//            startsWith()

// Devuelve true si una cadena comienza con otra cadena, y false en caso contrario.
// ° Verificación de inicio, validando si una cadena comienza con 'hola’

const cadenast = 'hola mundo';
const resultadost = cadenast.startsWith('hola');
console.log(resultadost); // true

//________________________________________________________________________________
//________________________________________________________________________________
//________________________________________________________________________________
//________________________________________________________________________________
//________________________________________________________________________________

console.log("____________________________________________________");


// EJERCISIO
//CODIGO DE CIUDAD

// ciudades={
//   BAQ : "Barranquilla",
//   BGA : "Bucaramanga",
//   BOG : "Bogota",
//   CLO : "Cali",
//   CTG : "Cartagena",
//   MDE : "Medellin",
//   PEI : "Pereira",
//   PSO : "Pasto",
// }
// // cod= prompt("Ingrece el codigo de la ciudad")
// for (const codigos in ciudades){ 
//   if (cod === codigos){
//     console.log("El codigo corresponde a la ciudad de "+ciudades[codigos])
//   }
// }


