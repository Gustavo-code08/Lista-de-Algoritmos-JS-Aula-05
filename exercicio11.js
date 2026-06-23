let inicio = Number(prompt("Digite um número inteiro (início): "));
let fim = Number(prompt("Digite um número inteiro (fim): "));
let soma = 0;

for(let i=inicio;i<=fim;i++){
    if(i%3===0 || i%5===0){
        soma += i;
    }
}

console.log (`A soma dos números múltiplos de 3 ou 5 de ${inicio} até ${fim} é ${soma}.`)