
function getDataByCep(cep){
    let url = 'https://viacep.com.br/ws/'+cep+'/json/unicode/'
    
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET',url)

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            let txtJson = xmlHttp.responseText
            let objJson = JSON.parse(txtJson)

            document.getElementById("endereco").value= objJson.logradouro
            document.getElementById("bairro").value= objJson.bairro
            document.getElementById("cidade").value= objJson.localidade
            document.getElementById("uf").value= objJson.uf
        }
    }

    xmlHttp.send()
}