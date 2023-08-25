//ESSA CHAVE VC CONSEGUE NO SITE DO API PROFESSOR

let chave = "60dbbf79d4ce1457e90a21dd28f1ffaf"


function Tela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    Tela(dados)
}


function Push(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}