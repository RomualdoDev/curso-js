let num = [5,8,9,2,3];
num[3] = 1;
num.push(3);
num.sort();
console.log(`O tamanho do vetor é ${num.length}.`);
console.log(`${num}`);

console.log("Imprimindo de outro jeito:")
for(let i in num){
    console.log(`${num[i]}`);
}

console.log(`Posição em que o numero 5 está: ${num.indexOf(5)}`);