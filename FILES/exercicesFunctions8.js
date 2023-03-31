function calculaDesconto(nome, valor, ehPrimeriraCompra, ehPagamentoVista){
    if(ehPrimeriraCompra && ehPagamentoVista)
    {
        if(valor > 1000){"30% de desconto:" ,console.log ("30% de desconto:" ,valor - (valor*0.30))}

        else if(valor > 500 && valor < 1000){
            console.log ("Obrigado por comprar conosco! 25% de desconto:" ,valor - (valor*0.25))
        }

        else{console.log ("Obrigado por comprar conosco! 20% de desconto:" , valor - (valor*0.20))}
    }
    //-------------------------------------------------------------------------------------------------
    if(ehPrimeriraCompra && !ehPagamentoVista)
    {
        if(valor > 1000){console.log("Obrigado por comprar conosco! 20% de desconto:" , valor - (valor*0.20))}

        else if(valor > 500 && valor < 1000){console.log("Obrigado por comprar conosco! 15% de desconto:" , valor - (valor*0.15))}

        else{console.log("Obrigado por comprar conosco! 10% de desconto:" , valor - (valor*0.10))}
    }
    //--------------------------------------------------------------------------------------------------
    if(!ehPrimeriraCompra && ehPagamentoVista)
    {
        if(valor > 1000){console.log("20% de desconto:" , valor - (valor*0.20))}

        else if(valor < 1000 && valor > 500){console.log("Obrigado por comprar conosco! 15% de desconto:" , valor - (valor*0.15))}
        else{console.log("Obrigado por comprar conosco! 10% de desconto:" , valor - (valor*0.10))}
    }
    //--------------------------------------------------------------------------------------------------
    if(!ehPrimeriraCompra && !ehPagamentoVista){
        if(valor > 1000){console.log("10% de desconto:" , valor - (valor*0.10))}

        else if(valor < 1000 && valor > 500){
            console.log("Obrigado por comprar conosco! 5% de desconto:" , valor - (valor*0.05))
        }

        else{console.log("SEM DESCONTO. Valor de pagamento:", valor)
        console.log("Obrigado por comprar conosco!")
               console.log("Pegue seu cupom aleatório de desconto:" , Math.floor( Math.random()*(20 - 10) + 10 ), "%");}
    }
}

calculaDesconto('Ruth', 1000, false, false)