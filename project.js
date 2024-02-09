var body =document.querySelector('#navbar');
var open =document.querySelector('#open');
var close = document.querySelector('#close');

open.addEventListener('click',()=>{
    body.style.display='block';
    open.style.display='none';
    close.style.display='block';
})
close.addEventListener('click',()=>{
    body.style.display='none';
    open.style.display='block';
    close.style.display='none';

})