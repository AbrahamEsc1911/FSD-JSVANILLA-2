//// Reto 1

const calArea = (data: string, radio: number, lado: number, base: number, altura: number): string => {
    let dataLC: string = data.toLowerCase();
    let msj: string;
    const pi: number = Math.round(Math.PI);

    switch (dataLC) {
        case "cuadrado":
            msj = `${lado * lado}`;
            break;
        case "circulo":
            msj = `${pi * radio * radio}`
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
        return num % i === 0 ? false : true;
    } return true;
}

//// Reto 4

const esFactorial = (num : number) : number => {
    let factorial : number = num;
    for(let i = num - 1; i > 0; i--){
        factorial *= i; 
    } return factorial
}

//// Reto 5
const esBinario = (num : number) : string => {
    let arraBinary : number[] = []; 
    while(num >= 1){
        arraBinary.unshift(num % 2)
        num = Math.floor(num / 2)
    } return `Del ${num} el número binario es ${arraBinary.join("")}`;
}

//// Reto 6
const numCifras = (num : number) : string => {
    let numArr : string = num.toString();
    let caunter : number = 0;
    for(let i = 0; i < numArr.length; i++){
        caunter += 1
    }
    return `El ${num} tiene ${caunter} cifras`;
}

//// Reto 7
const cambioMoneda = (euro : number, moneda : string) : string => {
    let strMoneda : string = moneda.toLowerCase()
    let tasaCambio : string;
    const yen : number = 170.51;
    const dolar : number = 1.07;
    const libras : number = 0.85;
    switch(strMoneda){
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


module.exports = {
    calArea,
    numRamdon,
    esPrimo,
    esFactorial,
    esBinario,
    numCifras,
    cambioMoneda,
}