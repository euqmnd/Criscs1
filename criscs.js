var cima = document.getElementById('cima')
cima.addEventListener('mouseenter', enter)
cima.addEventListener('mouseout', out)
function enter(){
    cima.style.width = '500px'
    cima.style.transitionTimingFunction = 'ease'
    cima.style.transitionDuration = '1s'
    phrase.style.color = 'white'
    tesa.style.color = 'white'
    chevrolet.style.color = 'white'
    briscs.style.color = 'black'
}
function out(){
    cima.style.width = '100px'
    phrase.style.color = 'transparent'
    tesa.style.color = 'transparent'
    chevrolet.style.color = 'transparent'
    briscs.style.color = 'white'
    briscs.style.transitionTimingFunction = 'ease-out'
    briscs.style.transitionDuration = '1s'
}
var phrase = document.getElementById('phrase')

var lamber = document.getElementById('lamber')
lamber.addEventListener('mouseenter', lamb)
lamber.addEventListener('mouseout', lambe)
function lamb(){
    cima.style.width = '500px'
    phrase.style.color = 'white'
    tesa.style.color = 'white'
    chevrolet.style.color = 'white'
    briscs.style.color = 'black'
}
function lambe(){
    cima.style.width = '500px'
    phrase.style.color = 'transparent'
    tesa.style.color = 'transparent'
    chevrolet.style.color = 'transparent'
    briscs.style.color = 'white'
    briscs.style.transitionTimingFunction = 'ease-out'
    briscs.style.transitionDuration = '1s'
}
var tesa = document.getElementById('tesla')
var teslalogo = document.getElementById('teslalogo')
teslalogo.addEventListener('mouseenter', tesla)
teslalogo.addEventListener('mouseout', logo)
function tesla(){
    cima.style.width = '500px'
    phrase.style.color = 'white'
    tesa.style.color = 'white'
    chevrolet.style.color = 'white'
    briscs.style.color = 'black'
}
function logo(){
    cima.style.width = '500px'
    phrase.style.color = 'transparent'
    tesa.style.color = 'transparent'
    chevrolet.style.color = 'transparent'
    briscs.style.color = 'white'
    briscs.style.transitionTimingFunction = 'ease-out'
    briscs.style.transitionDuration = '1s'
}
var chevrolet = document.getElementById('chevrolet')
var chevroletlogo = document.getElementById('chevroletlogo')
chevroletlogo.addEventListener('mouseenter', chev)
chevroletlogo.addEventListener('mouseout',vrolet)
function chev(){
    cima.style.width = '500px'
    phrase.style.color = 'white'
    tesa.style.color = 'white'
    chevrolet.style.color = 'white'
    briscs.style.color = 'black'
    
}
function vrolet(){
    cima.style.width = '500px'
    phrase.style.color = 'transparent'
    tesa.style.color = 'transparent'
    chevrolet.style.color = 'transparent'
    briscs.style.color = 'white'
    briscs.style.transitionTimingFunction = 'ease-out'
    briscs.style.transitionDuration = '1s'
}
var briscs = document.getElementById('briscs')
var bx = document.getElementById('baixo')
bx.addEventListener('mouseenter', bai)
bx.addEventListener('mouseout', xo)
function bai(){
    bx.style.height = '300px'
    bx.style.transitionTimingFunction = 'ease-out'
    bx.style.transitionDuration = '1s'
    set.style.color = 'white'
    gmails.style.color = 'white'
}
function xo(){
    bx.style.height = '60px'
    set.style.color = 'transparent'
    gmails.style.color ='transparent'
}
var set = document.getElementById('settings')
var setti = document.getElementById('setting')
setti.addEventListener('mouseenter', set)
setti.addEventListener('mouseout', ting)
function set(){
    bx.style.height = '300px'
}
function ting(){
    bx.style.height = '300px'
}
var gmails = document.getElementById('gmails')
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Tempo em milissegundos antes de esconder a tela de abertura (3000ms = 3 segundos)
    setTimeout(function() {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        // Espera a transição de opacidade antes de esconder completamente
        setTimeout(function() {
            splashScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // Tempo de espera deve coincidir com a duração da transição CSS
    }, 700); // Tempo de exibição da tela de abertura
});

