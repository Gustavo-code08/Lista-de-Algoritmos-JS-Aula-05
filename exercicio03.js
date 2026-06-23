let ano = Number(prompt("Digite um ano qualquer: "));

if(ano %4 === 0 && ano %100 !== 0 || ano %400 === 0){
    console.log(`O ano de ${ano} é um ano bissexto.`);
}
else{
    console.log(`O ano de ${ano} não é um ano bissexto.`);
}