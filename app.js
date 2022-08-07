const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections  = document.querySelectorAll('.main-content');


function PageTransition(){
    //Button click active class
    for (let i =0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransition();

