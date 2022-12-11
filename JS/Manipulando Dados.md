**Prototype** 

* prototype-based language
* prototype chain
* _proto_

**Type Conversion**

Type conversion (typecasting) vs Type coersion
- Alterar de um tipo de dado para outro tipo;

// console.log(Number('9') + 5 )  //Transformar a String em Number;

**Manipulando String em Números**
- Transformar String em Número e Número em String
 // let strinh = "123"                   // (Number(string))
 // (Number(string))                     // (String(number))
 

 - Constar quantos caracateres tem uma palavra e quantos dígitos tem o número;
 let word = "Paralelepipedo"
 console.log(word.length)
 Console: 14

 - Transformar um número quebrado com 2 casas decimais e trocar ponto por virguça;
 let number = 345.33452345
 console.log(number.toFixed(2).replace(".", ","))

 - Transformar letra minúscula em maiúsculas. Faça o contrário disso também
 let word = "Programar é muito bacana!"
 cosole.log(word.toLowerCase().toUpperCase())

 - Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _;
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

- Verificar se o ttextp contém a palavra Amor
let phrase = "Eu quero viver amor!"
console.log(phrase,includes("amor"))
Console: true

- Criando Array com construtor
let myArray = new Array('a', 'b', 'c') // Cada argumento virará um elemento em meu array;
console.log(myArray)

- Conte elemento de um array
console.log(["a", {type: "array",}
function() { return "alo"}
]).length

- Transformar uma cadeia de caractéries em um array
let word = "manipulação"
console.log(Array.from(word))
