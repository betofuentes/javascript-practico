const lista1 = [
    100,
    200,
    300,
    500
]
// Calcular promedio
calcularMediaAritmetica = (lista) => {
    // let suma = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     suma = suma + lista[i];
    // }
    const suma = lista.reduce((acumulador, elemento) => acumulador + elemento);
    const promedio = suma / lista.length;
    return promedio;
}
