
const { isExpression } = require("typescript");
const { calArea, numRamdon, esPrimo, esFactorial, esBinario, numCifras, cambioMoneda, arraNum, primoAleatorio, dosArrays, arrDigits } = require("./funtions")

describe("Test to calculate area", () => {
    test("testing circle", () => {
        const result = calArea("CirCuLo", 23)
        expect(result).toBe("1661.90")
    });
    test("testin circle negative", () => {
        const result = calArea("CirCuLo" - 34)
        expect(result).toBe("Its not correct")
    });
});

describe("testin num is Prime", () => {
    test("testing random num is prime", () => {
        const result = esPrimo(17);
        expect(result).toBe(true);
    });
    test("testing negative number", () => {
        const result = esPrimo(-34);
        expect(result).toBe(false)
    });
});

describe("testing is factorial", () => {
    test("Any number", ()=>{
        const result = esFactorial(5);
        expect(result).toBe(120)
    })
    test("other number", () => {
        const result = esFactorial(9)
        expect(result).toBe(362880)
    });
});

describe("testing is Binary", () => {
    test("convert intnum to binary", () =>{
        const result = esBinario(12)
        expect(result).toBe("Del 12 el número binario es 1100")
    })
    test("convert intnum to binary", () =>{
        const result = esBinario(-28)
        expect(result).toBe("Del -28 el número binario es 0")
    })
})

describe("testing number of digits", () => {
    test("Test positivie number", () => {
        const result = numCifras(345)
        expect(result).toBe("el 345 tiene 3 cifras")
    });
    test("Test positivie number", () => {
        const result = numCifras(3456443)
        expect(result).toBe("el 3456443 tiene 7 cifras")
    });
    test("Test positivie number", () => {
        const result = numCifras(-2)
        expect(result).toBe("el -2 tiene 1 cifras")
    });
    test("Test positivie number", () => {
        const result = numCifras(0)
        expect(result).toBe("el 0 tiene 1 cifras")
    })
});

