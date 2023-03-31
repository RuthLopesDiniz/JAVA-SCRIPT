//E
//console.log(true && true) //TRUE
//console.log(true && false) // FALSE
//console.log(false && false) //FALSE

function calculate(valorInicial, valorAtual, tempo){
    const juros=(valorAtual - valorInicial)/(valorInicial * tempo)

    console.log((juros*100).toFixed(2) + '%')
}
calculate(1000, 1200, 10)