const numbers= [29, 31, 11, 13]

switch (numbers) {
    case (numbers%2===1):
        console.log("Todos os números são impares ")
        break;

        case (numbers%2===0):
            console.log("Todos os números são pares")
            break;

    default:
        console.log("Há números pares e ímpares.")
        break;
}