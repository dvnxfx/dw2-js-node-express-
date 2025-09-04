// MANIPULAÇÃO DE DATAS 
document.write("<h3>Manipulando datas:</h3>") 

// Criar uma instância da classe Date() do avascript
const dataAtual = new Date();
document.write(dataAtual)

//Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Ho é dia: ${dia} </p>`)

// Pegando o mês atual:
const mês = dataAtual.getMonth()+1;
document.write (`<p>Estamos no mês: ${mês} </p>`)

// Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write (`<p>Estamos no ano: ${ano} </p>`)

// Pegando o dia da semana:
const semana = dataAtual.getDay();
document.write (`<p>Estamos na semana: ${semana} </p>`)

// Adicionando Dias, Mêses e Anos à data atual
// Adiconando 4 anos ao ano atual 
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()} </p>`);

// Adiconando mêses 
dataAtual.setMonth(dataAtual.getMonth() + 3)

// Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10)


document.write(`<p></p>`)

// FORMATAÇÃO DE MOEDAS 

// REAL 

document.write("<h3>Formatação de moedas:</h3>") 

const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é: ${salarioReal} .</p>`);

// DÓLAR 

const salarioDolar = salario.toLocaleString("en", {
    style: "currency",
    currency: "USD",
});

document.write(`<p>O salário em dólar é: ${salarioDolar} .</p>`)


const salarioConvertido = salario * 0.176 
document.write(`<p>Salário em valor de dólar: ${salarioConvertido.toLocaleString
("en", {
    style: "currency",
    currency: "USD",
})}</p>`);
// currency: EUR -> Euro

// FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings: </h3>")

// ALTERANDO PARA LETRAS MAIÚSCULAS - toUpperCase()
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`)

// ALTERANDO PARA LETRAS MINUSCULAS - toLowerCase()
document.write(`<p>Nome em minúsculas: ${nome.toLowerCase()}</p>`)

// REMOVENDO ESPAÇOS DE UMA STRING
const novoNome = nome.replace(/\s/g, "")


// CONTANDO CARACTERES DE UMA STRING - .lenght
document.write(`<p>Esse nome tem: ${nomeNome.lenght} letras.</p>`)

