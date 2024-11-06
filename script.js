function trocarfundo(){
    var fot=document.getElementById("footer")
    var check=document.getElementById("check")
var trocar=document.getElementById("lista1")
var trocar2=document.getElementById("lista2")
var section=document.getElementById("section")
var roda1=document.getElementById("roda")


roda1.classList.toggle("darkmode")
trocar.classList.toggle("darkmode")
trocar2.classList.toggle("darkmode")
if(check.checked){
    section.style.backgroundColor="black"
section.style.color="white"
    fot.style.backgroundColor="black"
fot.style.color="white"
}
else{
      section.style.backgroundColor="white"
section.style.color="black"
    fot.style.backgroundColor="white"
fot.style.color="black"

}
}

function rolar(){
    window.scrollTo({
        top: document.getElementById('lista1').offsetTop, // Posição vertical do destino
        behavior: 'smooth' // Rolagem suave
    });
}

function rolarmeio(){
    window.scrollTo({
        top: document.getElementById('section').offsetTop, // Posição vertical do destino
        behavior: 'smooth' // Rolagem suave
    });
}
function rolarbaixo(){
    window.scrollTo({
        top: document.getElementById('footer').offsetTop,
        behavior: 'smooth'
    });
}
$('.carousel').carousel()

$('#carouselExampleSlidesOnly').carousel({
    interval: 10
  })
  $('#carroselP').carousel({
    interval: 10
  })



  $('#meuModal').modal(options)
  $('#meuModal').modal('toggle')
  function modal(){

}