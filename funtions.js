//// Reto 1
var calArea = function (data, radio, lado, base, altura) {
    var dataLC = data.toString().toLowerCase();
    var msj;
    var pi = (Math.PI);
    switch (dataLC) {
        case "cuadrado":
            msj = "".concat(lado * lado);
            break;
        case "circulo":
            msj = "".concat((pi * (radio * radio)).toFixed(2));
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
        if (num % i === 0) {
            return false;
        }
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
    var numData = num;
    if (numData < 0) {
        return "Del ".concat(num, " el n\u00FAmero binario es 0");
    }
    while (numData >= 1) {
        arraBinary.unshift(numData % 2);
        numData = Math.floor(numData / 2);
    }
    return "Del ".concat(num, " el n\u00FAmero binario es ").concat(arraBinary.join(""));
};
//// Reto 6
var numCifras = function (num) {
    var numArr = num.toString();
    return num < 0 ? "el ".concat(num, " tiene ").concat(numArr.length - 1, " cifras") : "el ".concat(num, " tiene ").concat(numArr.length, " cifras");
};
//// Reto 7
var cambioMoneda = function (euro, moneda) {
    var strMoneda = moneda.toString().toLowerCase();
    var tasaCambio;
    var yen = 170.51;
    var dolar = 1.07;
    var libras = 0.85;
    if (euro < 0)
        return "Alguno de los valores que has ingresado no lo podemos procesar";
    switch (strMoneda) {
        case "dolar":
            tasaCambio = "Para ".concat(euro, " el cambio a dolar es: ").concat((euro * dolar).toFixed(2));
            break;
        case "yen":
            tasaCambio = "Para ".concat(euro, " el cambio a yen es: ").concat((euro * yen).toFixed(2));
            break;
        case "libras":
            tasaCambio = "Para ".concat(euro, " el cambio a libras es: ").concat((euro * libras).toFixed(2));
            break;
        default:
            tasaCambio = "Alguno de los valores que has ingresado no lo podemos procesar";
            break;
    }
    return tasaCambio;
};
//// Reto 8
var arraNum = function (numArray) {
    var arrData = [];
    var sumCont = 0;
    for (var i = 0; i < numArray; i++) {
        arrData.push(Math.round(Math.random() * 10));
    }
    for (var x = 0; x < arrData.length; x++) {
        sumCont += (arrData[x]);
    }
    return "el array es ".concat(arrData, " y la suma de los valores del array es ").concat(sumCont);
};
//// Reto 9
var primoAleatorio = function (ind) {
    var numArrPri = [];
    while (numArrPri.length < ind) {
        var numAleatorio = Math.round(Math.random() * 100 + 1);
        if (esPrimo(numAleatorio)) {
            numArrPri.push(numAleatorio);
        }
    }
    return "El array completo es ".concat(numArrPri, " y el mayor es ").concat(Math.max.apply(Math, numArrPri));
};
//// Reto 10
var dosArrays = function (arr1) {
    var array1 = [];
    var array2 = [];
    var multiArray = [];
    for (var i = 0; i < arr1; i++) {
        array1.push(Math.round(Math.random() * 100 + 1));
        array2.push(Math.round(Math.random() * 100 + 1));
    }
    for (var x = 0; x < arr1; x++) {
        multiArray.push(array1[x] * array2[x]);
    }
    return "El array 1 es ".concat(array1, ", el array 2 es ").concat(array2, " y la mult de los arrays es ").concat(multiArray);
};
//// Reto 11
var arrDigits = function (ind, digit) {
    var arrDigit = [];
    for (var i = 0; i < ind; i++) {
        arrDigit.push(Math.round(Math.random() * (300 - 1) + 1));
    }
    var arraDigitEspc = arrDigit.filter(function (num) { return num % 10 === digit; });
    if (arraDigitEspc.length === 0) {
        return "el Array original es ".concat(arrDigit, " y el correspondiente al digito ").concat(digit, " el nuevo array no tiene es digito.");
    }
    return "el Array original es ".concat(arrDigit, " y el correspondiente al digito ").concat(digit, " es: ").concat(arraDigitEspc);
};
module.exports = {
    calArea: calArea,
    numRamdon: numRamdon,
    esPrimo: esPrimo,
    esFactorial: esFactorial,
    esBinario: esBinario,
    numCifras: numCifras,
    cambioMoneda: cambioMoneda,
    arraNum: arraNum,
    primoAleatorio: primoAleatorio,
    dosArrays: dosArrays,
    arrDigits: arrDigits,
};
