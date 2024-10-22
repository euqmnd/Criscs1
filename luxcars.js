var ph = document.getElementById('ph911')
ph.addEventListener('mouseenter', p)
ph.addEventListener('mouseout', porsche)
var fr = document.getElementById('ferrari')
fr.addEventListener('mouseenter', fer)
fr.addEventListener('mouseout', rari)
var merced = document.getElementById('mercedes')
merced.addEventListener('mouseenter', me)
merced.addEventListener('mouseout', rcedes)
var pan = document.getElementById('panamera')
pan.addEventListener('mouseenter', pa)
pan.addEventListener('mouseout', namera)
var fe = document.getElementById('fer458')
fe.addEventListener('mouseenter', e)
fe.addEventListener('mouseout', r)
var m = document.getElementById('g63')
m.addEventListener('mouseenter', g)
m.addEventListener('mouseout', h)
var cay = document.getElementById('cayanne')
cay.addEventListener('mouseenter', ca)
cay.addEventListener('mouseout', sy)
var fw = document.getElementById('f40')
fw.addEventListener('mouseenter', id)
fw.addEventListener('mouseout',we)
var ag = document.getElementById('amg')
ag.addEventListener('mouseenter', aep)
ag.addEventListener('mouseout', tep)
function p(){
    ph.style.width = '500px'
    ph.style.transitionTimingFunction = 'ease'
    ph.style.transitionDuration = '1s'
}
function porsche(){
    ph.style.width = '400px'
}
function fer(){
    fr.style.width = '500px'
    fr.style.transitionTimingFunction = 'ease'
    fr.style.transitionDuration = '1s'
}
function rari(){
    fr.style.width = '400px'
}
function me(){
    merced.style.width = '500px'
    merced.style.transitionTimingFunction = 'ease'
    merced.style.transitionDuration = '1s'
}
function rcedes(){
    merced.style.width = '400px'
}
function pa(){
    pan.style.width = '500px'
    pan.style.transitionTimingFunction = 'ease'
    pan.style.transitionDuration = '1s'
}
function namera(){
    pan.style.width = '400px'
}
function e(){
    fe.style.width = '500px'
    fe.style.transitionTimingFunction = 'ease'
    fe.style.transitionDuration = '1s'
}
function r(){
    fe.style.width = '400px'
}
function g(){
    m.style.width = '500px'
    m.style.transitionTimingFunction = 'ease'
    m.style.transitionDuration = '1s'
}
function h(){
    m.style.width = '400px'
}
function ca(){
    cay.style.width = '500px'
    cay.style.transitionTimingFunction  ='ease'
    cay.style.transitionDuration = '1s'
}
function sy(){
    cay.style.width = '400px'
}
function id(){
    fw.style.width = '500px'
    fw.style.transitionTimingFunction = 'ease'
    fw.style.transitionDuration = '1s'
}
function we(){
    fw.style.width = '400px'
}
function aep(){
    ag.style.width = '500px'
    ag.style.transitionTimingFunction = 'ease'
    ag.style.transitionDuration = '1s'
}
function tep(){
    ag.style.width = '400px'
}
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
    }, 2400); // Tempo de exibição da tela de abertura
});
