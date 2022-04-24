/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F */

let nota = 49;
let returnNotaFinal

if (nota >= 90 && nota <=100) 
{
    returnNotaFinal = "A" 
}
else if (nota >=80 && nota <= 89) 
{
    returnNotaFinal = "B"
}
else if (nota >=70 && nota <= 79) 
{
    returnNotaFinal = "C"
}
else if (nota >=60 && nota <= 69) 
{
    returnNotaFinal = "D"
}
else if (nota <=50) 
{
    returnNotaFinal = "F"
}

console.log(returnNotaFinal)