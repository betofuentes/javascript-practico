const lista1 = [
    1, 2, 3,
    1, 2, 3,
    4, 2, 2,
    2, 1
]

const calcularModa = (lista) => {
    const lista1Count = {};
    // el método map recorre todo el array y agrega 1 objeto si es que no existía antes, en caso de que exista suma 1 a su valor.
    lista.map(
        (elemento) => {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;        
            } else {
                lista1Count[elemento] = 1;
            }
        }
    )
    // Object.entries transforma un objeto a un array, con .sort ordenamos ascendentemente según el elemento [1] para cada array, en el array principal.
    const listaArray = Object.entries(lista1Count).sort(
        (a,b) => {return a[1] - b[1]} 
    )
    // Dado que el array ya está ordenado ascendentemente, el último elemento será el que más se repite.
    const moda = listaArray[listaArray.length - 1];
    return moda;
}