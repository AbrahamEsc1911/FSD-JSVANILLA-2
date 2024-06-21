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
module.exports = {
    calArea: calArea,
    numRamdon: numRamdon
};
