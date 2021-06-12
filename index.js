const slides = document.querySelectorAll('.slide');
const buttonsContainer = document.querySelector('.js-buttons-container');


function clearActiveClasses() {
   slides.forEach((slide) => {
       slide.classList.remove('active');
   });
};

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
});


buttonsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    const buttons = buttonsContainer.querySelectorAll('button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    button.classList.add('active');
    const key = button.dataset['settingName'];
    const value = button.dataset['settingValue'];
    document.documentElement.dataset[key] = value;
});
