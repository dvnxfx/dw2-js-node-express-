// FUNÇÃO ANÔNIMA
// function (n1, n2) {
//   return n1 + n2
// }
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}.</p>`);
const tipo = typeof(soma);  //typeof -> mostra o tipo de algo EX: FUNCTION é o tipo dessa const
document.write(`${tipo}`);

// Você não precisa declarar o tipo; ele é determinado em tempo de execução.

// O valor de uma variável pode mudar de tipo.

// ARROW FUNCTION  (função anônima) apenas 1 parâmetro e podendo ser sem parênteses
const dobro = (x) => {  //mais de 1 parametro sempre aspas
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`)


// ARROW FUNCTION com mais de  um parâmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`); // eval no JS é uma função nativa que realiza cálculos a partir de dois números e um operador.
};

document.write (`<p>O resultado da operação é ${calc(1100, "-", 1)}. </p>`)

// SIMPLIFICANDO ARROW FUNCTION com um único retorno
const calculadora = (num1, operador, num2) => // sem chave funciona, ficam ocultadas, RETURN também
 eval(`${num1} ${operador} ${num2}`); // eval no JS é uma função nativa que realiza cálculos a partir de dois números e um operador.


document.write (`<p>O resultado da operação é ${calculadora(1100, "+", 1)}. </p>`)

// IIFE - Função Imediata (Immediately Invoked Function Expression)

const iife = (function (){
 document.write("<p>Estou sendo executada imediatamente!</p>") 
})();

const loadUser = (function(user){
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user} </strong>...</p>`
  )
}) ("Dani")