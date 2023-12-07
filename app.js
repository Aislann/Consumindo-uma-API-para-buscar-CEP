function clicarBotao() {
    let cep = document.getElementById("cep").value //buscar pelo ID do html e pegar o valor dela
    buscarDados(cep)
}

async function buscarDados(cep) {
    console.log(cep)
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    dadosTela(dados) 
}

function dadosTela(dados) {
    document.getElementById("logradouro").value = dados.logradouro 
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}

function clicarBotaoApagar() {
    document.getElementById("logradouro").value = null 
    document.getElementById("bairro").value = null
    document.getElementById("cidade").value = null
    document.getElementById("estado").value = null
    document.getElementById("cep").value = null
}

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector("#submit");
        btn.click();
    }
})
