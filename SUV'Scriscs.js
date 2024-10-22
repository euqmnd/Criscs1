var x2 = document.getElementById('x2')
x2.addEventListener('mouseenter', show)
x2.addEventListener('mouseout', hide)
var bm = document.getElementById('bm')
function show(){
    bm.style.color = 'white'
    bm.style.transitionDuration = '1s'
    bm.style.transitionTimingFunction = 'ease'
}
function hide(){
    bm.style.color = 'transparent'
}
var haval = document.getElementById('haval')
haval.addEventListener('mouseenter' , allow)
haval.addEventListener('mouseout', an)
var hava = document.getElementById('hava')
function allow(){
    hava.style.color = 'white'
    hava.style.transitionDuration = '1s'
    hava.style.transitionTimingFunction = 'ease'
}
function an(){
    hava.style.color = 'transparent'
}
var jaaa = document.getElementById('jaa')
var ja = document.getElementById('ja')
jaaa.addEventListener('mouseenter', j)
jaaa.addEventListener('mouseout', a)
function j(){
    ja.style.color = 'white'
    ja.style.transitionDuration = '1s'
    ja.style.transitionTimingFunction = 'ease'
}
function a(){
    ja.style.color = 'transparent'
}