//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
//A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; 
//- O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const people=[
    {
        numberChildren: 2,
        salary: 2000
    },

    {
        numberChildren: 1,
        salary: 2000
    },
    {
        numberChildren: 3,
        salary: 1000
    },
    {
        numberChildren: 2,
        salary: 5500
    },
    {
        numberChildren: 2,
        salary: -5000
    },
]

function findAvarageAndHighestSalary(peopleInformation){
    let avarageSalary = 0
    let avarageChildren = 0
    let highestSalary = 0

    for(let i=0; i<=peopleInformation.length; i++){
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberChildren

        if(salary>highestSalary) highestSalary=salary

        if(salary<0){
            console.log(`Média de salário: R$ ${(avarageSalary/i).toFixed(0)} `)
            console.log(`Média de filhos: ${(avarageChildren/i).toFixed(0)} `)
            console.log(`Maior salário: R$ ${highestSalary} `)
            break
        }else{
            avarageSalary=avarageSalary+salary;
            avarageChildren=children
        }
    }
}
findAvarageAndHighestSalary(people)
        