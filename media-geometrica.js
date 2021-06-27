/*
¿Cuál tipo de promedio elegiste para trabajar?
    Media Geométrica 
¿Qué casos de uso tiene tu tipo de promedio?
    La media geométrica es un promedio muy útil en conjuntos de números que son interpretados en orden de su producto, no de su suma (tal y como ocurre con la media aritmética). Por ejemplo, las velocidades de crecimiento.
¿Cómo traduces su fórmula a código JavaScript?
*/

const lista1 = [1,2,3,4,5,9];


const calcularMediaGeometrica = (lista) =>{
    let acumulado = 0;
    producto = lista.map((elemento) => {
        if(acumulado == 0){
            acumulado = (elemento);
        } else {
            acumulado *= (elemento);
        }
    });
    const mediageometrica = Math.pow(acumulado,(1/lista.length));
    return mediageometrica;
}