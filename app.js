const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections  = document.querySelectorAll('.main-content')[0];


function PageTransition(){
    //Button click active class
    for (let i =0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section transition
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransition();


