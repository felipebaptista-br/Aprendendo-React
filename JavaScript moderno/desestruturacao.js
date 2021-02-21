const frutas = ["laranja", "banana", "uva"];

let [fruta1, , fruta3] = frutas;
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

// ------------------------------------------

// No exemplo temos a desestruturação da pessoa usando ela como atributo para a função de localidade
const pessoa = {
    nome: "João",
    idade: 20,
    pais: "Brasil",
    idioma: "Portugues",
}

const localidade = ({ pais, idioma }) => {
    `Você mora no ${pais} e fala ${idioma}`
}

console.log(localidade(pessoa));