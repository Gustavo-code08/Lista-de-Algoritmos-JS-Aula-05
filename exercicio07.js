let base = Number(prompt("Digite a base (número real): "));
let expoente = Number(prompt("Digite o expoente (número inteiro positivo): "));
let resultado = 1;

for(let i=1;i<=expoente;i++){
    resultado *= base;
}

console.log (`${base} elevado a ${expoente} é igual a ${resultado}.`);