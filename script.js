
const munu_icon =document.getElementById('munu_icon');
const close_icon =document.getElementById('close_icon');
const menu_list =document.querySelector('.menu_list');
const body =document.getElementById('body');

close_icon.style.display='none'
 close_icon.style.display='none'
menu_list.style.opacity='0';

// body.addEventListener('click', function(){
    
// })

munu_icon.addEventListener('click', function(){
menu_list.style.transform="translateX(0%)";
munu_icon.style.display='none'
close_icon.style.display='block'
body.style.backgroundColor='#5c5e78af'
menu_list.style.opacity='1';
});


close_icon.addEventListener('click', function(){
    menu_list.style.transform="translateX(100%)";
    munu_icon.style.display='block'
    close_icon.style.display='none'
    body.style.backgroundColor=''
})