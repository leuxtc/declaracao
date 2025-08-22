const nomeDeclarante = document.getElementById("lbl_declarante")
const nomeCidadao = document.getElementById("lbl_nomeCidadao")
const cpf = document.getElementById("lbl_cpf")
const dasHora = document.getElementById("lbl_dasHora")
const ateHora = document.getElementById("lbl_ateHora")

const dataAtual = new Date().toLocaleDateString()


const texto = document.getElementById("txt")

document.querySelector("#bttn").addEventListener('click', function() {
    let dados = {
        nomeDecl: nomeDeclarante.value,
        nomeCid: nomeCidadao.value,
        cpf: cpf.value,
        dasHora: dasHora.value,
        ateHora: ateHora.value
    }
    texto.innerHTML = `
    Meu nome é 
    <strong>${dados.nomeCid}</strong> 
    portador do CPF 
    <strong>${dados.cpf}</strong>  
    e estive aqui às 
    <strong>${dados.dasHora}</strong>  até 
    <strong>${dados.ateHora}</strong>  Responsável: 
    <strong>${dados.nomeDecl}</strong>
    <strong>${dataAtual}</strong> 
    `
})