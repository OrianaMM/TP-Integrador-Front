function tarifaFinal(descuentos) {
    let numEntradas = parseInt(document.getElementById("cantidad").value);
    let tipoDescuento = document.getElementById("descuento").value;
    let precioDeEntrada = 200

    switch (tipoDescuento) {
        case 'junior':
            precioDeEntrada -= ((15 * 200) / 100);
            break;
        case 'estudiante':
            precioDeEntrada -= ((80 * 200) / 100);
            break;
        case 'trainee':
            precioDeEntrada -= ((50 * 200) / 100);
            break;

    }

    let precioTotal = numEntradas * precioDeEntrada;

    document.getElementById("precio").innerHTML = "Total a pagar: $" + precioTotal.toFixed(2);
}

function borrar() {
    document.getElementById("precio").innerHTML = "Total a pagar: $"
}