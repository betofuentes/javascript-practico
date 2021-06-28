// En este archivo se creará todo el análisis relacionado con los salarios.

// Array que solo contiene los salarios.
let salariosCol = colombia.map((x) => x.salary);

// Array ordenado ascendentemente de los salarios.
const salariosColSorted = salariosCol.sort((a,b) => a-b);

// Para calcullar la mediana necesito saber si es par .
const esPar = (numero) => {
    return (numero % 2 === 0);
}

// función que calcula la mediana de salarios.
medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];

        const mediana = (personaMitad1 + personaMitad2)/2;
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        const mediana = personaMitad;
        return mediana;
    }
}


// función que calcula la mediana del top 10% de salarios.
const spliceStart = (salariosColSorted.length * (90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);
const medianaGeneralCol = medianaSalarios(salariosColSorted);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})

