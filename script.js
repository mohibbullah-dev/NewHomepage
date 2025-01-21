
// const munu_icon =document.getElementById('munu_icon');
// const close_icon =document.getElementById('close_icon');
// const menu_list =document.querySelector('.menu_list');
// const body =document.getElementById('body');



// // });

// munu_icon.addEventListener('click', OpenMenu);
// close_icon.addEventListener('click', CloseMenu);

// function OpenMenu(){
//     menu_list.style.transform="translateX(0%)";
//     munu_icon.style.display='none'
//     close_icon.style.display='block'
//     body.style.backgroundColor='#5c5e78af'
//     menu_list.style.opacity='1';


//     document.addEventListener('DOMContentLoaded', () => {
//         const mediaQue_size = window.matchMedia('(max-width: 678px)');
//         if (mediaQue_size.matches) {
//             munu_icon.style.display='block'
//               close_icon.style.display='block'
        
//         } else {
//             console.log('Viewport is larger than 678px');
//                     munu_icon.style.display='none'
//               close_icon.style.display='none'
//         }
//     });


// }


// function CloseMenu(){
//     menu_list.style.transform="translateX(100%)";
//     munu_icon.style.display='block'
//     close_icon.style.display='none'
//     body.style.backgroundColor=''



//     document.addEventListener('DOMContentLoaded', () => {
//         const mediaQue_size = window.matchMedia('(max-width: 678px)');
//         if (mediaQue_size.matches) {
//             munu_icon.style.display='block'
//               close_icon.style.display='block'
            
//         } else {
//             console.log('Viewport is larger than 678px');
//                     munu_icon.style.display='none'
//               close_icon.style.display='none'
//         }
//     });


// }





const menu_icon = document.getElementById('munu_icon'); // Typo fixed to `menu_icon`
const close_icon = document.getElementById('close_icon');
const menu_list = document.querySelector('.menu_list');
const body = document.getElementById('body');
const container = document.querySelector('.container');





menu_icon.addEventListener('click', openMenu);
close_icon.addEventListener('click', closeMenu);



function openMenu() {
    menu_list.style.transform = "translateX(0%)";
    menu_list.style.opacity = "1";
    menu_icon.style.display = 'none';
    close_icon.style.display = 'block';
    body.style.backgroundColor = '#fffdfa';
    container.style.backgroundColor = '#5c5e78af';

}

// Function to close the menu
function closeMenu() {
    menu_list.style.transform = "translateX(100%)";
    menu_list.style.opacity = "0";
    menu_icon.style.display = 'block';
    close_icon.style.display = 'none';
    body.style.backgroundColor = '';
    container.style.backgroundColor = '';
}
// menu_list.style.opacity = "1";
const mediaQuerySize = window.matchMedia('(max-width: 678px)');
mediaQuerySize.addEventListener('change', handleMediaChange);

function handleMediaChange(event) {

    if (event.matches) {

    menu_icon.style.display = 'block';
    close_icon.style.display = 'none';
    menu_list.style.transform = "translateX(0%)"; 
      menu_list.style.opacity='0'
    // menu_list.style.opacity = "1";
    } else {
        menu_icon.style.display = 'none';
        close_icon.style.display = 'none';
        menu_list.style.transform = "translateX(0%)";
        body.style.backgroundColor = '';
    container.style.backgroundColor = '';

  
        menu_list.style.opacity = "1";
    }
    // menu_list.style.transform = "translateX(0%)";
   
}


handleMediaChange(mediaQuerySize);
