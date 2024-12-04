const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const mainContent = document.querySelector('.main-content');


// ONE WAY
// const openModal = () => {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//     mainContent.classList.add('blurred');
// }
// const closeModal = ()=> {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//     mainContent.classList.remove('blurred');
// }

// for(let i=0; i<btnOpenModal.length; i++) {
//     btnOpenModal[i].addEventListener('click', openModal)
// }

// btnCloseModal.addEventListener('click', closeModal)
// overlay.addEventListener('click', closeModal)

// document.addEventListener('keydown', (e)=>{
//     if (e.key =='Escape' && !modal.classList.contains('hidden')) closeModal();
// })



// ************************_ALTERNATE_Way_*******************************

// const toggleModal = (show) => {
//     show ? modal.classList.remove('hidden') : modal.classList.add('hidden');
//     show ? overlay.classList.remove('hidden') : overlay.classList.add('hidden');
//     show ? mainContent.classList.add('blurred') : mainContent.classList.remove('blurred');
// }

// const openModal = ()=> toggleModal(true);
// const closeModal = ()=> toggleModal(false);


// btnOpenModal.forEach((btn)=> btn.addEventListener('click', openModal));
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);  

// document.addEventListener('keydown', (e)=>{
//     if (e.key =='Escape' && !modal.classList.contains('hidden')) closeModal();
// })



// ************************_ANOTHER_Way_*******************************

const toggleModal = (show) => {
    modal.classList.toggle('hidden', !show);
    overlay.classList.toggle('hidden', !show);
    mainContent.classList.toggle('blurred', show);
}

btnOpenModal.forEach((btn)=> btn.addEventListener('click',()=> toggleModal(true)));
btnCloseModal.addEventListener('click', ()=> toggleModal(false));
overlay.addEventListener('click', ()=> toggleModal(false));  

document.addEventListener('keydown', (e)=>{
    if (e.key =='Escape' && !modal.classList.contains('hidden')) toggleModal(false);
})
