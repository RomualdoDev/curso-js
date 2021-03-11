function contar() {
    var ini = document.getElementById("txtini");
    var fim = document.getElementById("txtfim");
    var passo = document.getElementById("txtpass");
    var res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`;
        
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p == 0){
            res.innerHTML = `Passo inválido! Resultado para passo = 1: </br>`
            p = 1;
        }
        
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        }

    }

}