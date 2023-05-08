function pegarEstados(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(function (response){
        console.log(response)
        return response.json()
    }).then(function (data){
        console.log(data)
        const estados = data.map(function(estado){
            return `<option>${estado.sigla}</option>`
            //console.log(estado.sigla)
        })
        document.getElementById("states").insertAdjacentHTML('afterbegin', estados)
    })
}

pegarEstados()

