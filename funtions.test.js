
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

describe("testin num is Prime", () =>{
    test("testing random num is prime", () => {
        const result = esPrimo(17);
        expect(result).toBe(true);
    })
    test("testing negative number", () =>{
        const result = esPrimo(-34);
        expect(result).toBe(false)
    })
})
