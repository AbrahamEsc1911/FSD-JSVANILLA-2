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

module.exports = {
    calArea,
    numRamdon,
    esPrimo,
}