**Funções**

// Declaração de funções / Declaretion / Function Statement

- Criar um aplicativo de frases motivacionais:
   * function createPhrase() {
        console.log('Estudar é muito bom')
        console.log('Paciência e persistência')
        console.log('Revisão é mãe do aprendizado)
    }

- Executar função / rodar, chamar, invocar / execute, run, call, invoke / invocar a função:
  *  createPhrase()

- Declarar funções dentro de váriaveis
* const sum = function(number1, number2) { // adicionar parâmetros (parameters) - adicionar os números/argumentos de 'sum' na função;
    console.log(number1 + number2) //criar ações na função - nesse caso e soma;
}

sum(2,3) // argumentos - arguments

// Função é um linquidificador
* function fazerSuco(fruta1, fruta2) {  // a função 'fazerSuco' levar dois parametros (frutas);
    return 'suco de: '+ fruta1 + fruta2 // Queremos fazer uma soma desses parametros e retornar em uma frase;
}

const copo = fazerSuco('banana', 'maça') // A pessoa pode resgatar essa função á partir da variavel 'copo'.
console.log(copo)

// Arrow function
    * const sayMyName = (name) => {
        console.log(name)
    }

    sayMyName('Mayk')

// Callback Function
    * Callback é uma função que está passando como parametro para outra função;
    
     function sayMyName(name) {
        "name()" // exemplo de como ela ficou depois para ser chamar;
    }

    sayMayName(  // Na função SayMyName você passa uma arrow function;
        () => {
            console.log('estou em uma callback')
        }
    )

// Função construtora
    * Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:


    function Person(name) {
	    this.name = name
	    this.walk() = function() {
		    return this.name + "está andando")
	    }
    }

    const mayk = new Person("Mayk")
    const joao = new Person("João")

