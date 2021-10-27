const hamburger = document.querySelector('.hamburger');
const hamburgerNormal = document.querySelector('.hamburger.normal');
const hamburgerClose = document.querySelector('.hamburger.close');

const mainNav = document.querySelector('.main-nav');
const loginForm = document.querySelector('.loginform')

hamburger.addEventListener('click',()=>{

    mainNav.classList.add('act');
    loginForm.classList.add('active');

    hamburgerNormal.classList.toggle('hello');
    hamburgerClose.classList.toggle('cross');
});
hamburgerClose.addEventListener('click',()=>{

    mainNav.classList.remove('act');
    loginForm.classList.remove('active');

    hamburgerNormal.classList.toggle('hello');
    hamburgerClose.classList.toggle('cross');
});