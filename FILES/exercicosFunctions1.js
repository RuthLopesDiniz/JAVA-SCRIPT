//Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os 
//número de 1 até o número que você enviou.

function numbers(contador){ //cria função e declara um parâmetro
    for (let i = 1; i < contador; i++) {//declara variávil i e inicia em 1, conta até o número que vai se definido posteriorimente.
        console.log(i)
    }
}

numbers(20)