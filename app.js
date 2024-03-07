var typed = new Typed('.auto-type', {
    strings: ["Hello. I'm Htet Arkar Lin, a Website Developer from Yangon."],
    typeSpeed: 100,
  });

function setFontColor(color){
    let body=document.getElementsByTagName('body')[0];
    body.className='';
    body.classList.add(color);
}

let menuBar=document.getElementById('menu_bar');
let xMark=document.getElementById('x_mark');

menuBar.addEventListener('click',function(){
    let slideMenu = document.getElementById('slide-menu');
    slideMenu.style.width='80vw';

})
xMark.addEventListener('click',function(){
    let slideMenu = document.getElementById('slide-menu');
    slideMenu.style.width='0vw';

})