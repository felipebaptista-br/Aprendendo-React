// Usando operadores Spread e Rest

// --- Spread ---
// Esse operador permite usarmos dados de uma variável de referência sem alterá-la
const numeros = [1, 2, 3, 4];

// Adicionando novo número após copiar valores de outro array
const novosNumeros = [...numeros, 5];

console.log(novosNumeros);

// --- Rest ---
// Aqui indicamos em ...numeros que, o número de parâmetros, é variado
const somar = (...numeros) => {
    return numeros.reduce((a, b) => a + b, 0);
}

console.log(somar(2, 4, 3, 7, 257));