let num = document.getElementById("txtnum");
let tab = document.getElementById('txtvet');
let vet = [];

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function naLista(n) {
    let cont = 0;
    for (let i = 0; i < vet.length; i++) {
        if (n == vet[i]) {
            cont++;
        }
    }
    if (cont == 1) {
        return true;
    } else {
        return false;
    }
}

function soma() {
    let sum = 0;
    for (let i = 0; i < vet.length; i++) {
        sum += Number(vet[i]);
    }
    return sum;
}

function media() {
    return (soma() / vet.length);
}

function adiciona() {
    let n = Number(num.value);
    if (num.value.length != 0 && eNumero(n) && !naLista(n)) {
        vet.push(n);
        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado`;
        tab.appendChild(item);
        res.innerHTML = '';
    } else {
        alert("Número inválido ou já presente na lista");
    }
    num.value = '';
    num.focus();
}

function mostra() {
    let res = document.getElementById("res");
    if (vet.length != 0) {
        vet.sort();
        res.innerHTML = `<p>${vet.length} valores cadastrados.</p>`;
        res.innerHTML += `<p>${vet[vet.length - 1]} é o maior valor.</p>`;
        res.innerHTML += `<p>${vet[0]} é o menor valor.</p>`;
        res.innerHTML += `<p>A soma dos elementos é: ${soma()}.</p>`
        res.innerHTML += `<p>A média dos elementos é: ${media()}</p>.`
    } else {
        alert("Não há números para fazer esta operação!")
    }
}