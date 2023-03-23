const number = 07

if(number%2 == 0){
    if(number%5 == 0 ){
        console.log("Número é par e divisivel por 5.")}
        else{console.log("Número é par e não é divisivel por 5.n")}
    }else{
    for(let i=2; i<number; i++)
    if(number%i == 0){
        console.log("Número é impar, mas não é primo.")
        break
    }else{
    if(i == number -1) console.log("Ele é um número primo.")
    }
}
