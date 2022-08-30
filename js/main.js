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

/* remove menu mobile */

const navLink = document.querySelectorAll('.nav_link'); 

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction)); 



/* accordion skills */ 

const skillsContent = document.getElementsByClassName('skills_content'),
        skillsHeader = document.querySelectorAll('.skills_header')


function toggleSkills(){
    let itemClass = this.parentNode.getElementsByClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsCOntent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content '){
        this.parentNode.className = 'skills_content skills_open'
    }
}