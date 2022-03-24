let body = document.querySelector("body")
let divLampada = document.createElement("div")
divLampada.setAttribute("id","lampada")
let divButton = document.createElement("div")
divButton.setAttribute("id","button")
let acessa = document.createElement("img")
acessa.setAttribute("src","./imagens/acessa.png")
let cima = document.createElement("img")
cima.setAttribute("src","./imagens/intCima.png")

divLampada.append(acessa)
divButton.append(cima)
body.append(divLampada)
body.append(divButton)

divButton.onclick=function(){
    if(acessa.getAttribute("src")=="./imagens/desligada.png"){
        acessa.setAttribute("src","./imagens/acessa.png")
        cima.setAttribute("src","./imagens/intCima.png")
        body.style.background="#fff";
    }
    else{
    acessa.setAttribute("src","./imagens/desligada.png")
    cima.setAttribute("src","./imagens/intBaixo.png")
    body.style.background="#000";
}
}
