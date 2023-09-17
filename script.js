'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal)

for (let i = 0; i < btnOpenModal.length; i++) 
btnOpenModal[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

function closeContent() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeContent)
overlay.addEventListener('click',closeContent);

document.addEventListener('keydown', function(e){
    // console.log(e.key,'key is pressed');
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeContent();
        console.log('escape has been pressed!')
    }
})
