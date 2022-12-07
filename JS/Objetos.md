  **Objetos**

// Criação de um objeto com propriedade e valor
const person = {
    name: 'John'
    age: '30'
    weight: 88.6
    isAdmin: true
}

// Para pegar somente o valor de uma propriedade
console.log(person.name)  or console.log(person.isAdmin)
// John //                      // true //


// Interpolação com os valores do objeto
console.log(`${person.name} tem ${person.age} anos`)