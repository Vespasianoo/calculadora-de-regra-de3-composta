const btnGet = document.getElementById('get')

let valor1, valor2, produto1, valor3, produto2;
let tableValor1 = document.getElementById('tableValor1')
let tableValor2 = document.getElementById('tableValor2')
let tableProduto1 = document.getElementById('tableProduto1')
let tableValor3 = document.getElementById('tableValor3')
let tableProduto2 = document.getElementById('tableProduto2')

let resultado = document.getElementById('resultado')

let hideinputContainer = document.getElementById('input-container')
let containerTable = document.getElementById('container-table')

let calc1 = valor1 * valor2 * produto2
let calc2 = valor3 * produto1

let x = calc1 / calc2

function pegarDados() {
    
    valor1 = parseFloat(document.getElementById('valor1').value)
    valor2 = parseFloat(document.getElementById('valor2').value)

    produto1 = parseFloat(document.getElementById('produto1').value)

    valor3 = parseFloat(document.getElementById('valor3').value)

    produto2 = parseFloat(document.getElementById('produto2').value)

    let condicaoGet = valor1 + valor2 + valor3 + produto1 + produto2

    //console.log( condicaoGet )

    if (condicaoGet  <= 0 || condicaoGet > 0) {
        tableValor1.innerHTML = valor1
        tableValor2.innerHTML = valor2
        tableProduto1.innerHTML = produto1
        tableValor3.innerHTML = valor3
        tableProduto2.innerHTML = produto2
    } else {
        tableValor1.innerHTML = "valor 1"
        tableValor2.innerHTML = "valor 2"
        tableValor3.innerHTML = "valor 3"
        tableProduto1.innerHTML = "produto 1"
        tableProduto2.innerHTML = "produto 2"       
    }


    containerTable.classList.remove('hide')
    hideinputContainer.classList.add('hide')

}

function Calcular() {

    calc1 = valor1 * valor2 * produto2
    calc2 = valor3 * produto1

    x = calc1 / calc2
    let valorfinal =  x.toFixed(2)
   
let codicaoExibir = x <= 0 || x > 0
    if (codicaoExibir) {
        //console.log("exec numero")
        resultado.innerHTML = ""
        resultado.innerHTML = `O valor da incógnita é ${valorfinal}`
    } else {
        resultado.innerHTML = ""
        resultado.innerHTML = `Preencha todos os campos`
        //console.log("NaN")
    }

    //console.log(x)
}

function Voltar() {
    containerTable.classList.add('hide')
    hideinputContainer.classList.remove('hide')
    resultado.innerHTML = ""
}


btnGet.addEventListener("click", (evento) =>{
    evento.preventDefault();

    pegarDados()
})
