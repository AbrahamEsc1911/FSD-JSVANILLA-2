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

const numRamdon = (cantNUm: number, numMin: number, numMax: number): Array<number> => {
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
    } return `El número binario es ${arraBinary.join("")}`;
}

module.exports = {
    calArea,
    numRamdon,
    esPrimo,
    esFactorial,
    esBinario,
}