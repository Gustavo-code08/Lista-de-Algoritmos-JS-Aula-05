let vet = [];
let texto = " ";

for(let i=0;i<=9;i++){
    vet[i] = prompt(`Digite o ${i + 1} número:` );
}

console.log ("==== Vetor Original ====");
for (let i = 0; i <= 9; i++) {
    texto += vet[i] + "\t";
} 

console.log(texto);
texto = " ";

for (let i = 0; i < 5; i++) {
    let aux = vet[i];
    vet[i] = vet[9 - i];
    vet[9 - i] = aux;
}
console.log ("==== Vetor Invertido ====");
for (let i = 0; i <= 9; i++) {
    texto += vet[i] + "\t";
} 
console.log(texto);