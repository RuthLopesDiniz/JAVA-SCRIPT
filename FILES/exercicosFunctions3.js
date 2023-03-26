//Escreva um programa onde, você chame uma função, e ela diga a hora exata!

function time(){
    today = new Date();
    h=today.getHours();
    m=today.getMinutes();
    S=today.getSeconds();

    console.log("Hora exata:", h,":",m,":",S)
}

time()