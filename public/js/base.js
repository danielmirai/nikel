const nome = "Daniel Mirai";
let nome2 = "";
let pessoaDefault = {
    nome: "Daniel Mirai",
    idade: "20",
    trabalho: "Programador"
}

let nomes = ["Daniel Mirai", "Maria Silva", "Pedro Santos"];

let possoasListaVazia = [];

let pessoas = [
        {
            nome: "Daniel Mirai",
            idade: "30",
            trabalho: "Programado"
        },
        {
            nome: "Maria Silva",
            idade: "22",
            trabalho: "UX"
        }    
];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(nomeNovo) {
    nome2 = nomeNovo;
    console.log("Valor alterado recenbendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adcionarPessoa(pesssoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

        console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
    })}

imprimirPessoas();

adcionarPessoa({
    nome: "Pedro Santos",
    idade: "28",
    trabalho: "Pedreiro"
});

imprimirPessoas();
