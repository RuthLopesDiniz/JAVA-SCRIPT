
    const student = {
        name: "CAIO",
        age: 26,
        genre: "male"   
    }

    console.log(student["name"])

    for(let property in student){
        console.log(`${property}:${student[property]}`)
    }