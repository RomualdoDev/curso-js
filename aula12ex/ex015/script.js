function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[Erro] Verifique os dados!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'criançaH.gif')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemH.gif')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.gif')
            } else {
                img.setAttribute('src', 'idoso.gif')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'criançaM.gif')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemMu.gif')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.gif')
            } else {
                img.setAttribute('src', 'idosa.gif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
   
}