const nota1 = 8
const nota2 = 10
const nota3 = 3
const media = (nota1 + nota2 + nota3) / 3
console.log("A média é:", Math.floor(media))


    if (media < 5) {
        console.log("Reprovação");
    } 
    else if (media >=5 && media <=7) {
        console.log("Recuperação");
    } 
    else{
        console.log("Aprovação");
    }

