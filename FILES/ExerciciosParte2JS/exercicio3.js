//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const aleatorio =  Math.floor(Math.random() * 10) + 1;
const sorteio =  Math.floor(Math.random() * 10) + 1;

console.log(aleatorio)
console.log(sorteio)

if(aleatorio==sorteio){
    console.log("Você ganhou 1 bicicleta!")
}else{
    console.log("Dessa vez não ganhou, tente mais 1 vez.")
}