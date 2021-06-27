calcularMediaAritmetica = (lista) => {
    const suma = lista.reduce((acumulador, elemento) => acumulador + elemento);
    const promedio = suma / lista.length;
    return promedio;
}

const lista1 = [
    100,
    800,
    500,
    40000000,
];

lista1.sort((a,b) => a-b); // ordenando la lista númerica, https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort




esPar = (numero) => {
    if (numero % 2 == 0){
        return true;
    } else {
        return false;
    }
};

let mediana;
const calcularMediana = (lista) => {
    lista.sort((a,b) => a-b);
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        debugger;
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
        // necesitamos 2 elementos
        // -> el promedio de los 2 elementos en medio será la mediana.
    } else {
        debugger;
        mediana = lista[mitadLista];
    }
    return mediana;
}
