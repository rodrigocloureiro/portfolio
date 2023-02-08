const projectsItems = document.querySelectorAll('.projects li a');
projectsItems.forEach(item => {
    item.addEventListener('mouseover', () => item.parentNode.classList.add('projects-hover'));
    item.addEventListener('mouseleave', () => item.parentNode.classList.remove('projects-hover'));
});

const btnDownCV = document.querySelector('.download-cv');
function changeDownBtn() {
    const content = btnDownCV.innerHTML;
    btnDownCV.textContent = 'Concluído';
    btnDownCV.classList.toggle('download-cv-click');
    setTimeout(() => {
        btnDownCV.innerHTML = content;
        btnDownCV.classList.toggle('download-cv-click');
    }, 1500);
}

btnDownCV.addEventListener('click', () => changeDownBtn());

const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', (e) => {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    if(name.value !== '' && email.value !== '' && message.value !== '') {
        e.preventDefault();
        contactBtn.textContent = 'Enviado';
        setTimeout(() => {
            contactBtn.textContent = 'Enviar';
            name.value = '';
            email.value = '';
            message.value = '';
        }, 1500);
    }
});

const menuMobile = document.querySelector('.menu-mobile');
const menuIcon = document.querySelector('.menu-mobile-icon');

menuIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open');
});

const menuCV = document.querySelector('.menu-mobile a[title="Currículo"]');
menuCV.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open');
});
