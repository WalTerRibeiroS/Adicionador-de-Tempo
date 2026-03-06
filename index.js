
const tempoInicial = document.getElementById("tempoInicial");
const botaoInicial = document.getElementById("botaoInicial");
const tituloHoraInicial = document.getElementById("tituloHoraInicial");

let horaInicial

function inicio(){
    horaInicial = tempoInicial.value;
    tituloHoraInicial.textContent = `HORA INICIAL: ${horaInicial}`

    let splitHoraInicial = horaInicial.split(":");
    let horasInicio = Number(splitHoraInicial[0]);
    let minInicio = Number(splitHoraInicial[1]);

    return[horasInicio, minInicio];
}

botaoInicial.onclick = inicio;
    
const tempoAdicional = document.getElementById("tempoAdicional");
const botaoAdicional = document.getElementById("botaoAdicional");
const tituloHoraFinal = document.getElementById("tituloHoraFinal");


botaoAdicional.onclick = function final(){
    let splitHoraFinal = tempoAdicional.value.split(":");
    let horasFinal = Number(splitHoraFinal[0]);
    let minFinal = Number(splitHoraFinal[1]);

    let [horasInicio, minInicio] = inicio();

    minTotal = minInicio + minFinal;
    horasTotal = horasInicio + horasFinal;

    horasExtra = Math.floor(minTotal / 60)
    horasTotal += horasExtra

    minTotal = minTotal % 60

    minTotal = String(minTotal).padStart(2, "0");
    horasTotal = String(horasTotal).padStart(2, "0");
    tituloHoraFinal.textContent = `HORA FINAL: ${horasTotal}:${minTotal}`;
} 
