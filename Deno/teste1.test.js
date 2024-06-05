let a = "Oi";
let b = "Olá";

    Deno.test("É oi", () => {
        if (a != "Oi") {
            throw new Error('${a} não é oi');
        }
})
    Deno.test("É olá", () => {
        if (b != "Olá") {
            throw new Error('${a} não é olá')
        }
});