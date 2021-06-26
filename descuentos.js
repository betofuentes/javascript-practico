const precioOriginal = 120;
const descuento = 18;

const calcularPrecioConDescuento = (precio,descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioCondescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioCondescuento;
}

const calcularDescuento = () =>{
    const inputP = document.getElementById("InputPrice");
    const priceValue = inputP.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,priceDiscount);
    
    const resulP = document.getElementById("ResultPrice");
    resulP.innerText = "El precio con descuento es: " + precioConDescuento;
};

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioCondescuento,
// })