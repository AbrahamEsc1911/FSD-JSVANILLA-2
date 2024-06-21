//// Reto 1
var calArea = function (data, radio, lado, base, altura) {
    var dataLC = data.toLowerCase();
    var msj;
    var pi = Math.round(Math.PI);
    switch (dataLC) {
        case "cuadrado":
            msj = "".concat(lado * lado);
            break;
        case "circulo":
            msj = "".concat(pi * radio * radio);
            break;
        case "triangulo":
            msj = "".concat(base * altura);
            break;
        default:
            msj = "Its not correct";
            break;
    }
    return msj;
};
//// Reto 2
var numRamdon = function (cantNUm, numMin, numMax) {
    var numArr = [];
    for (var i = 0; i < cantNUm; i++) {
        numArr.push(Math.round(Math.random() * (numMax - numMin) + numMin));
    }
    return numArr;
};
//// Reto 3
var esPrimo = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < num; i++) {
        return num % i === 0 ? false : true;
    }
    return true;
};
//// Reto 4
var esFactorial = function (num) {
    var factorial = num;
    for (var i = num - 1; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
};
//// Reto 5
var esBinario = function (num) {
    var arraBinary = [];
    while (num >= 1) {
        arraBinary.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    return "El n\u00FAmero binario es ".concat(arraBinary.join(""));
};
module.exports = {
    calArea: calArea,
    numRamdon: numRamdon,
    esPrimo: esPrimo,
    esFactorial: esFactorial,
    esBinario: esBinario,
};
