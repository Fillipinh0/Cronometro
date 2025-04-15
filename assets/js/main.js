const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundo = 0;
let timer;

function criaHorasDosSegundos(segundos) {
  
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  })
}

function iniciaRelogio() {
  timer = setInterval(function() {
    segundo++;
    relogio.innerHTML = criaHorasDosSegundos(segundo);
  }, 1000);
}



iniciar.addEventListener("click", function (e) {
  clearInterval(timer);
  iniciaRelogio();
  relogio.classList.remove("pausado");
});

pausar.addEventListener("click", function (e) {
  
  clearInterval(timer);
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (e) {
  clearInterval(timer);
  segundo = 0;
  relogio.innerHTML = "00:00:00"; 
});

