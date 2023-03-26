//Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e 
//escrever a tabuada de 1 a 10 do valor lido.

function tabuada(number) {
    if (number <= 0 || number > 10) {
        console.log("Não aceito")
    } else {
        for (let i = 1; i <= 10; i++) {
            let result
            console.log(' %d * %d = %d', i, number, (result = i*number))
        }
    }
}
tabuada(3)



