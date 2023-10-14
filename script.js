// Aviso
if(window.screen.width > 500){
  console.log|('Esta página é responsiva apenas para dispositivos moveis') 
}

// Altura da Aba
var alturaAba = window.innerHeight;

// Altura do cabeçalho
var alturaHeader = document.querySelector("header").clientHeight;

// Ajusta a altura da página
document.querySelector("#inicio").style.height =
  alturaAba - alturaHeader + "px";
window.addEventListener('resize', function(){document.querySelector("#inicio").style.height =
  alturaAba - alturaHeader + "px";})
// Slide automático
let count = 1;
setInterval(() => {
  nextSlide();
}, 3000);
function nextSlide() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("s" + count).checked = true;
}

// Encarte ↓
//document.querySelector("#encarte").style.height = alturaAba * 0.8 + "px";

// Ajusta a altura do Slide
var slider = document.querySelector("#slide");
slider.style.height = (alturaAba - alturaHeader) * 0.5 + "px";
window.addEventListener('resize', function(){slider.style.height = (alturaAba - alturaHeader) * 0.5 + "px";})
// Controle do slide do encarte
let paginaEncarte = 1;
const Encarte = document.querySelector("#sliderEncarte");
const slidePageIcon = document.querySelectorAll(".p");

function pularEncarte() {
  if (paginaEncarte > 3) {
    paginaEncarte = 3;
  } else if (paginaEncarte < 1) {
    paginaEncarte = 1;
  }
  switch (paginaEncarte) {
    case 1:
      Encarte.style.marginLeft = "0%";
      break;
    case 2:
      Encarte.style.marginLeft = "-100%";
      break;
    case 3:
      Encarte.style.marginLeft = "-200%";
    default:
    // code
  }
  slidePageIcon.forEach((elem, i) => {
    elem.style.backgroundColor = "transparent";
  });
  document.querySelector(".p" + paginaEncarte).style.backgroundColor = "white";
}
var botoesEncarte = document.querySelectorAll(".botoesEncarte");
botoesEncarte[0].addEventListener("click", () => {
  ++paginaEncarte;
  pularEncarte();
});
botoesEncarte[1].addEventListener("click", () => {
  --paginaEncarte;
  pularEncarte();
});
/* Animação scroll */
const target = document.querySelectorAll("[data-show]");
function apresentar() {
  const janelaTop = window.pageYOffset + (window.innerHeight * 3.5) / 4;
  target.forEach((element) => {
    if (janelaTop > element.offsetTop) {
      element.classList.add("apresentar");
    }
  });
}
window.addEventListener("scroll", () => {
  apresentar();
});

//Variáveis do Horário
var horarioBotao = document.querySelector("#funcionamento div:last-child img");
var blocoHorario = document.querySelector("#horario");
var varFuncionamento = document.querySelector("#funcionamento div h3");
var varHorarioDoDia = document.querySelector("#funcionamento div p");
var tempo = new Date();
var semana = [
  "Hoje é Domingo",
  "Hoje é Segunda",
  "Hoje é Terça",
  "Hoje é Quarta",
  "Hoje é Quinta",
  "Hoje é Sexta",
  "Hoje é Sábado",
];
var dia = tempo.getDay();
var hora = tempo.getHours();
var min = tempo.getMinutes();

if (dia > 0) {
  horarioDoDia = "07:00-21:00";
  if (hora > 6 && hora < 21) {
    funcionamento = "Estamos abertos";
  } else {
    funcionamento = "Estamos fechados";
  }
} else {
  horarioDoDia = "07:00-20:00";
  if (hora > 6 && hora < 20) {
    funcionamento = "Estamos abertos";
  } else {
    funcionamento = "Estamos fechados";
  }
}
// Pré exibição do horário
varFuncionamento.innerHTML = funcionamento;
varHorarioDoDia.innerHTML = horarioDoDia;
var interruptor = false;

// Exibe o horário
function mostrarHorario() {
  if (interruptor === false) {
    interruptor = true;
    blocoHorario.style.height = "200px";
    horarioBotao.style.transform = "rotate(180deg)";
    varFuncionamento.innerHTML = semana[dia];
    varHorarioDoDia.innerHTML = funcionamento;
    scroll(0, 60);
  } else {
    interruptor = false;
    blocoHorario.style.height = "65px";
    horarioBotao.style.transform = "rotate(0deg)";
    varFuncionamento.innerHTML = funcionamento;
    varHorarioDoDia.innerHTML = horarioDoDia;
    scroll(0, 0);
  }
}
document
  .querySelector("#funcionamento div:last-child")
  .addEventListener("click", () => {
    mostrarHorario();
  });

// Avisos
const aviso = document.getElementById("botaoInfo");
let info = false;
function avisos() {
  if (info === false) {
    aviso.innerHTML = "X";
    info = true;
  } else {
    aviso.innerHTML = "Avisos";
    info = false;
  }
  aviso.classList.toggle("iconeAviso");
  document.querySelector("#informacoes").classList.toggle("mostrarAviso");
}
aviso.addEventListener("click", () => {
  avisos();
});
function fazerPedido() {

  document.location.assign("https://wa.me/558585383529");

}

