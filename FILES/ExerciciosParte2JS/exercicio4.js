//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const numbers = [5, 2, 1]

const menor = Math.min(...numbers)
const maior = Math.max(...numbers)

console.log('O menor número é: ' + menor)
console.log('O maior número é: ' + maior)