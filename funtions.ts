//// Reto 1

const calArea = (data: string, radio: number, lado: number, base: number, altura: number): string => {
    let dataLC: string = data.toString().toLowerCase();
    let msj: string;
    const pi: number = (Math.PI)

    switch (dataLC) {
        case "cuadrado":
            msj = `${lado * lado}`;
            break;
        case "circulo":
            msj = `${(pi * (radio * radio)).toFixed(2)}`
            break;
        case "triangulo":
            msj = `${base * altura}`
            break;
        default:
            msj = "Its not correct"
            break;
    }
    return msj
}

//// Reto 2

const numRamdon = (cantNUm: number, numMin: number, numMax: number): number[] => {
    let numArr: number[] = [];
    for (let i = 0; i < cantNUm; i++) {
        numArr.push(Math.round(Math.random() * (numMax - numMin) + numMin))
    }
    return numArr
}

//// Reto 3

const esPrimo = (num: number): boolean => {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            return false
        } 
    } return true;
}

//// Reto 4

const esFactorial = (num: number): number => {
    let factorial: number = num;
    for (let i = num - 1; i > 0; i--) {
        factorial *= i;
    } return factorial
}

//// Reto 5
const esBinario = (num: number): string => {
    let arraBinary: number[] = [];
    while (num >= 1) {
        arraBinary.unshift(num % 2)
        num = Math.floor(num / 2)
    } return `Del ${num} el número binario es ${arraBinary.join("")}`;
}

//// Reto 6
const numCifras = (num: number): string => {
    let numArr: string = num.toString();
    let caunter: number = 0;
    for (let i = 0; i < numArr.length; i++) {
        caunter += 1
    }
    return `El ${num} tiene ${caunter} cifras`;
}

//// Reto 7
const cambioMoneda = (euro: number, moneda: string): string => {
    let strMoneda: string = moneda.toLowerCase()
    let tasaCambio: string;
    const yen: number = 170.51;
    const dolar: number = 1.07;
    const libras: number = 0.85;
    switch (strMoneda) {
        case "dolar":
            tasaCambio = `Para ${euro} el cambio a dolar es: ${(euro * dolar).toFixed(2)}`;
            break;
        case "yen":
            tasaCambio = `Para ${euro} el cambio a yen es: ${(euro * yen).toFixed(2)}`;
            break;
        case "libras":
            tasaCambio = `Para ${euro} el cambio a libras es: ${(euro * libras).toFixed(2)}`;
            break;
        default:
            tasaCambio = "No tenemos cambio para ese tipo de moneda"
            break;
    }
    return tasaCambio;
}

//// Reto 8
const arraNum = (numArray: number): string => {
    let arrData: number[] = [];
    let sumCont: number = 0;
    for (let i = 0; i < numArray; i++) {
        arrData.push(Math.round(Math.random() * 10))
    } for (let x = 0; x < arrData.length; x++) {
        sumCont += (arrData[x])
    } return `el array es ${arrData} y la suma de los valores del array es ${sumCont}`
}

//// Reto 9
const primoAleatorio = (ind: number): string => {
    let numArrPri: number[] = [];
    while (numArrPri.length < ind) {
        let numAleatorio: number = Math.round(Math.random() * 100 + 1)
        if (esPrimo(numAleatorio)) {
            numArrPri.push(numAleatorio)
        }
    } return `El array completo es ${numArrPri} y el mayor es ${Math.max(...numArrPri)}`
}

//// Reto 10
const dosArrays = (arr1 : number) : string => {
    let array1 : number[] = []
    let array2 : number[] = []
    let multiArray : number[] = []

    for(let i = 0; i < arr1; i++){
        array1.push(Math.round(Math.random() * 100 + 1));
        array2.push(Math.round(Math.random() * 100 + 1));
    } for(let x = 0; x < arr1; x++){
        multiArray.push(array1[x] * array2[x]);
     }
     return `El array 1 es ${array1}, el array 2 es ${array2} y la mult de los arrays es ${multiArray}`
}

//// Reto 11
const arrDigits = (ind : number, digit : number) : string => {
    let arrDigit : number[] = [];
    for(let i = 0; i < ind; i++){
        arrDigit.push(Math.round(Math.random() * (300 - 1) + 1))
    }
    const arraDigitEspc : number[] = arrDigit.filter(num => num % 10 === digit)
    if(arraDigitEspc.length === 0){
        return `el Array original es ${arrDigit} y el correspondiente al digito ${digit} el nuevo array no tiene es digito.`
    }
    return `el Array original es ${arrDigit} y el correspondiente al digito ${digit} es: ${arraDigitEspc}`
}

module.exports = {
    calArea,
    numRamdon,
    esPrimo,
    esFactorial,
    esBinario,
    numCifras,
    cambioMoneda,
    arraNum,
    primoAleatorio,
    dosArrays,
    arrDigits,
}