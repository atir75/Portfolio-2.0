/* menu show and hidden */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* menu show */
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* menu hidden validate if constant exist */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}