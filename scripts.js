function nome() {
    var nome = document.getElementById('txtnome')
    var res = document.getElementById('res2')
    var s = String(nome.value)
    res.innerHTML = `Seja bem vindo(a) <strong>${s}</strong>!`
}
function idade() {
    var txt2 = document.getElementById('txtid')
    var res = document.getElementById('res3')
    var idade = Number(txt2.value)

    if (idade >= 18) {
        res.innerHTML = `Você já é de maior, tem <strong>${idade}</strong> anos!`
    } else {
        res.innerHTML = `Você ainda é de menor, tem <strong>${idade}</strong> anos!`
    }
}
function profissao() {
    var profissao = document.getElementById('txprof')
    var res = document.getElementById('res4')
    var s = String(profissao.value)
    res.innerHTML = `Que ótima profissão, você escolheu! <strong>${s}</strong>!`
}
function nacionalidade() {
    var txt1 = document.getElementById('txtnac')
    var res = document.getElementById('resp')
    var pais = String(txt1.value)

    if (pais == 'Brasil') {
        res.innerHTML = `Você nasceu no Brasil, sua nacionalidade é <strong>Brasileiro</strong>!`
    } else if (pais == 'Br') {
    res.innerHTML = `Você nasceu no Brasil, sua nacionalidade é <strong>Brasileiro</strong>!`
    } else if (pais == 'BR'){
    res.innerHTML = `Você nasceu no Brasil, sua nacionalidade é <strong>Brasileiro</strong>!`
    } else if (pais == 'br'){
    res.innerHTML = `Você nasceu no Brasil, sua nacionalidade é <strong>Brasileiro</strong>!`
    } else
        res.innerHTML = `Você é entrangeiro, pois nasceu na <strong>${pais}</strong>!`
}
function cidade() {
    var cidade = document.getElementById('txtcid')
    var res = document.getElementById('res5')
    var s = String(cidade.value)
    res.innerHTML = `Você nasceu em <strong>${s}</strong>!`
}
function estado() {
    var txt1 = document.getElementById('estado')
    var estado = document.getElementById('res6')
    var s = String(txt1.value)
    estado.innerHTML = `Você nasceu no estado <strong>${s}</strong>!`
}
function calcular() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre o número <strong>${n1}</strong> e o número <strong>${n2}</strong> é igual á <strong>${s}</strong>!`
}
function dividir() {
    var tn1 = document.getElementById('dividir')
    var tn2 = document.getElementById('dividir1')
    var res = document.getElementById('res7')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res.innerHTML = `A divisão entre o número <strong>${n1}</strong> e o número <strong>${n2}</strong> é igual á <strong>${s}</strong>!`
}
