// console.log("Hello World!");

// Código del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

const areaCuadrada = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada(ladoCuadrado) + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados de mi triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`)

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)}cm`);

const areaTriangulo = (base,altura) => (base * altura) / 2;
console.log(`El área del triángulo es de: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm^2`);

console.groupEnd();

// Código del circulo
console.group("Circulos");

const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`);
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}cm`);
const pi = Math.PI;
console.log(`El valor de PI es: ${pi}`);
const circunferencia = diametroCirculo * pi;
console.log(`La circunferencia del circulo es: ${circunferencia}cm`);
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log(`El área del circulo es: ${areaCirculo}cm^2`);


console.groupEnd();