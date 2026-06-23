let preco = Number(prompt("Digite o preço de custo de um produto: "));
let lucrodesej = Number(prompt("Digite a margem de lucro desejada: "));

const lucro = preco / (lucrodesej / 100);
const precofinal = preco + lucro;

console.log (`O lucro desejado foi de R$${lucro}.`);
console.log (`Para obter esse lucro, o produto deve ser vendido a R$${precofinal}.`);

alert (`O lucro desejado foi de R$${lucro}.`);
alert (`Para obter esse lucro, o produto deve ser vendido a R$${precofinal}.`);