// console.log("Hello World!");

// Código del cuadrado
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado*4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

const areaCuadrada = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrada(ladoCuadrado) + "cm^2");


// Código del triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados de mi triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`)

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = (lado1, lado2, base) => (parseInt(lado1,10)+parseInt(lado2,10)+parseInt(base,10));
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)}cm`);

const areaTriangulo = (base,altura) => (parseInt(base,10) * parseInt(altura,10)) / 2;
// console.log(`El área del triángulo es de: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm^2`);


// Código del circulo
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo}cm`);
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es: ${diametroCirculo}cm`);
// const pi = Math.PI;
// console.log(`El valor de PI es: ${pi}`);
const circunferencia = (diametro) => diametro * Math.PI;
// console.log(`La circunferencia del circulo es: ${circunferencia(diametroCirculo, pi).toFixed(2)}cm`);
const areaCirculo = (radio) => Math.PI * Math.pow(radio,2);
// console.log(`El área del circulo es: ${areaCirculo(radioCirculo, pi).toFixed(2)}cm^2`);


//Aquí interactuamos con el HTML
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrada(value);
    alert(area);
}

const calcularPerimetroTriangulo = () => {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

const calcularAreaTriangulo = () => {
const base = document.getElementById("baseTriangulo").value;
const altura = document.getElementById("alturaTriangulo").value;

const area = areaTriangulo(base,altura);
alert(area);
}