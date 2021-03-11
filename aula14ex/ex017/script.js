function tabuada() {
    var num = document.getElementById('txtnum');
    var res = document.getElementById('res');
    var tab = document.getElementById('seltab');
    if (num.value.length != 0) {
        let n = Number(num.value);
        tab.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            var item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`;
            tab.appendChild(item)
        }
    } else {
        alert("Digite um número!");
    }

}

