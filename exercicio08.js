let num = Number(prompt("Digite um número inteiro positivo: "));

if (num === 0) {
    console.log("O número possui 1 dígito.");
} else {
let cont = 0;

while (num > 0) {
num = Math.floor(num / 10);
cont++;
}

console.log(`O número possui ${cont} dígito(s).`);
}