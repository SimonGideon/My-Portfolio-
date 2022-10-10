const navOpen = document.getElementsByClassName('hambuger');
const navClose = document.getElementsByClassName('image-close');
const menu = document.getElementsByClassName('menu-items');
const work = document.getElementsById('work');
const aboutme = document.getElementsById('about-me');
const contactme = document.getElementsById('contact-me');

const navOpen1 = document.querySelector('.hamburger');
const navClose1 = document.querySelector('image-close');
const menu1 = document.querySelector('menu-items');
const work1 = document.querySelector('work');
const aboutme1 = document.querySelector('about-me');
const contactme1 = document.querySelector('contact-me');

function myFunction() {
    document.getElementsByClassName("menu-items").style.display = "flex";
  }

navOpen1.addEventListener('click', () => {
    document.getElementsByClassName('menu-items').style.display = 'none';
  });
  
