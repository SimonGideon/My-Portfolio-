// mobile-menu
const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
// pop-up
const btn1 = document.getElementById('wkbtn1');
const btn2 = document.getElementById('wkbtn2');
const btn3 = document.getElementById('wkbtn3');
const btn4 = document.getElementById('wkbtn4');

const worksArray = [
  {
    id: '0',
    title: 'Tonic',
    close: '\u00D7',
    subheadText1: 'APIs',
    subheadText2: 'Front End',
    subheadText3: '2022',
    image1: './images/project_1.jpeg',
    image2: './images/project_1.jpeg',
    paragraph:
      "Royal Meals Website is a Single Page Application that Displays a list of food and allows the viewer to add their likes and comments. This Page was developed with HTML, CSS, Javascript, and Webpack. I used Jest for Unit Testing is also SPA.", 
    paragraph2:
    "Royal Meals Website is a Single Page Application that Displays a list of food and allows the viewer to add their likes and comments. This Page was developed with HTML, CSS, Javascript, and Webpack. I used Jest for Unit Testing is also SPA.",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'Jest',
    language6: 'npm',
    liveBtn: ' https://simongideon.github.io/javascript-group-capstone-project/dist/',
    sourceBtn: 'https://github.com/SimonGideon/javascript-group-capstone-project',
  },

  {
    id: '1',
    title: 'THE GLOBAL UN REFUGEE SUMMIT 2022 Advert',
    close: '\u00D7',
    subheadText1: 'REFUGEE-CAMP ADVERT',
    subheadText2: 'Front End Dev',
    subheadText3: '2022',
    image1: './images/project_2.jpeg',
    image2: './images/project_2.jpeg',
    paragraph:
      "A fully Responsive website Built with HTML 5 CSS and JavaScript. This is a UN Global Summit Advertisement Page. The page gives information that attendees require to know about the Summit. I followed all the HTML, CSS, and JavaScript Best practices and Development for such a clean work.",
    paragraph2:
      "A fully Responsive website Built with HTML 5 CSS and JavaScript. This is a UN Global Summit Advertisement Page. The page gives information that attendees require to know about the Summit. I followed all the HTML, CSS, and JavaScript Best practices and Development for such a clean work.",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language6: 'bootstrap',
    liveBtn: ' https://simongideon.github.io/Capstone-project/',
    sourceBtn: 'https://github.com/SimonGideon/Capstone-project.git',
  },

  {
    id: '2',
    title: 'Store',
    close: '\u00D7',
    subheadText1: 'Bookstore',
    subheadText2: 'Front End Dev',
    subheadText3: '2022',
    image1: './images/project_3.jpeg',
    image2: './images/project_3.jpeg',
    paragraph:
      "React, Redux, and an external API was used to build a website that lets users see the list of books, add books to the list, and delete books from the list.",
    paragraph2:
      "React, Redux, and an external API was used to build a website that lets users see the list of books, add books to the list, and delete books from the list.",
    language1: 'React',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    liveBtn: ' https://book-stores.onrender.com/',
    sourceBtn: 'https://github.com/SimonGideon/space-travelers.git',
  },

  {
    id: '3',
    title: 'Space Travelers´ Hub',
    close: '\u00D7',
    subheadText1: 'Space Travelers',
    subheadText2: 'Front End Dev',
    subheadText3: '2022',
    image1: './images/project_4.jpeg',
    image2: './images/project_4.jpeg',
    paragraph:
      "This a React web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    paragraph2:
    "This a React web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    language1: 'React',
    language2: 'Redux',
    language3: 'javaScript',
    language4: 'CSS',
    liveBtn: 'https://space-travelers-iyfi.onrender.com/',
    sourceBtn: 'https://github.com/SimonGideon/-React-capstone-project.git',
  },

  {
    id: '4',
    title: 'Recipe App',
    close: '\u00D7',
    subheadText1: 'Recipe Centre App',
    subheadText2: 'Fullstack Developer',
    subheadText3: '2023',
    image1: './images/project_5.jpeg',
    image2: './images/project_5.jpeg',
    paragraph:
      "The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate",
    paragraph2:
      "a shopping list based on what you have and what you are missing from a recipe. All logged in users can share, create and Update Recipes. They can also share private recipe",
    language1: 'Ruby',
    language2: 'Rails',
    language3: 'CSS',
    language4: 'HTML',
    liveBtn: ' https://github.com/SimonGideon/ROR-RECIPE-APP',
    sourceBtn: 'https://github.com/SimonGideon/ROR-RECIPE-APP',
  }
];

function showNavbar() {
  mobileNav.classList.remove('hidden');
  navOpen.classList.add('hidden');
}
function hideNavbar() {
  mobileNav.classList.add('hidden');
  navOpen.classList.remove('hidden');
}
navOpen.addEventListener('click', showNavbar);
navClose.addEventListener('click', hideNavbar);
navPortfolio.addEventListener('click', hideNavbar);
navAbout.addEventListener('click', hideNavbar);
navContact.addEventListener('click', hideNavbar);

let j = 0;

function popup() {
  const popupScreen = document.querySelector('body');
  const popupDiv = document.createElement('div');
  const wrapperDiv = document.createElement('div');
  const wrapperHeadDiv = document.createElement('div');
  const divTitle = document.createElement('h2');
  const divSpan1 = document.createElement('span');
  const wrapperSubHeadDiv = document.createElement('div');
  const workSubText = document.createElement('p');
  const canopySpan = document.createElement('span');
  const dotSpan1 = document.createElement('span');
  const descrSpan1 = document.createElement('span');
  const dotSpan2 = document.createElement('span');
  const descrSpan2 = document.createElement('span');
  const wrapperImageDiv = document.createElement('div');
  const workImageDiv = document.createElement('div');
  const imageItem1 = document.createElement('img');
  const wrapperTextDiv = document.createElement('div');
  const wrapperTextP1 = document.createElement('p');
  const wrapperTextP2 = document.createElement('p');
  const p2Span1 = document.createElement('span');
  const p2Span2 = document.createElement('span');
  const p2Span3 = document.createElement('span');
  const hr = document.createElement('hr');
  const hr2 = document.createElement('hr');
  const wrapperBtnDiv = document.createElement('div');
  const wrapperBtn1 = document.createElement('button');
  const wrapperIBtn1 = document.createElement('i');
  const wrapperIBtn2 = document.createElement('i');
  const wrapperBtn2 = document.createElement('button');
  const fullModalDiv = document.createElement('div');
  const fullImgDiv = document.createElement('div');
  const fullDivImg = document.createElement('img');
  const fullMdlTxtDiv = document.createElement('div');
  const fullMdlP1 = document.createElement('p');
  const rightGridDiv = document.createElement('div');
  const fullMdlP2 = document.createElement('p');
  const fullSpan1 = document.createElement('span');
  const fullSpan2 = document.createElement('span');
  const fullSpan3 = document.createElement('span');
  const fullMdlP3 = document.createElement('p');
  const fullSpan4 = document.createElement('span');
  const fullSpan5 = document.createElement('span');
  const fullSpan6 = document.createElement('span');
  const seeLiveBtn = document.createElement('button');
  const seeLiveI = document.createElement('i');
  const seeSourceBtn = document.createElement('button');
  const seeSourceI = document.createElement('i');

  popupDiv.className = 'overlay';
  wrapperDiv.className = 'wrapper';
  wrapperHeadDiv.className = 'wrapper-head';
  divSpan1.className = 'close-btn';
  wrapperSubHeadDiv.className = 'wrapper-sub-head';
  workSubText.className = 'work-subtext';
  dotSpan1.className = 'dot';
  descrSpan1.className = 'description';
  dotSpan2.className = 'dot';
  descrSpan2.className = 'description2';
  wrapperImageDiv.className = 'wrapper-img';
  workImageDiv.className = 'work-image';
  wrapperTextDiv.className = 'wrapper-text';
  wrapperTextP1.className = 'long-paragraph';
  canopySpan.className = 'canopy';
  p2Span1.className = 'span1';
  p2Span2.className = 'span2';
  p2Span3.className = 'span3';
  fullSpan1.className = 'span4';
  fullSpan2.className = 'span5';
  fullSpan3.className = 'span6';
  fullSpan4.className = 'span7';
  fullSpan5.className = 'span8';
  fullSpan6.className = 'span9';
  fullMdlP1.className = 'left-grid';
  rightGridDiv.className = 'right-grid';
  hr2.className = 'hr2';
  wrapperBtnDiv.className = 'wrapper-btns';
  wrapperBtn1.className = 'btnA';
  wrapperBtn2.className = 'btnB';
  wrapperIBtn1.classList.add('bi', 'bi-box-arrow-up-right');
  wrapperIBtn2.classList.add('bi', 'bi-github');
  fullModalDiv.className = 'mdl-fullscreen';
  fullImgDiv.className = 'work-image-large';
  fullMdlTxtDiv.className = 'mdl-text';
  seeLiveBtn.className = 'btnA';
  seeSourceBtn.className = 'btnB';
  seeLiveI.classList.add('bi', 'bi-box-arrow-up-right');
  seeSourceI.classList.add('bi', 'bi-github');

  popupScreen.appendChild(popupDiv);
  popupDiv.appendChild(wrapperDiv);
  wrapperDiv.appendChild(wrapperHeadDiv);
  wrapperHeadDiv.appendChild(divTitle);
  wrapperHeadDiv.appendChild(divSpan1);
  wrapperDiv.appendChild(wrapperSubHeadDiv);
  wrapperSubHeadDiv.appendChild(workSubText);
  workSubText.appendChild(canopySpan);
  workSubText.appendChild(dotSpan1);
  workSubText.appendChild(descrSpan1);
  workSubText.appendChild(dotSpan2);
  workSubText.appendChild(descrSpan2);
  wrapperDiv.appendChild(wrapperImageDiv);
  wrapperImageDiv.appendChild(workImageDiv);
  workImageDiv.appendChild(imageItem1);
  wrapperDiv.appendChild(wrapperTextDiv);
  wrapperTextDiv.appendChild(wrapperTextP1);
  wrapperTextDiv.appendChild(wrapperTextP2);
  wrapperTextP2.appendChild(p2Span1);
  wrapperTextP2.appendChild(p2Span2);
  wrapperTextP2.appendChild(p2Span3);
  wrapperTextDiv.appendChild(hr);
  wrapperDiv.appendChild(wrapperBtnDiv);
  wrapperBtnDiv.appendChild(wrapperBtn1);
  wrapperBtn1.appendChild(wrapperIBtn1);
  wrapperBtnDiv.appendChild(wrapperBtn2);
  wrapperBtn2.appendChild(wrapperIBtn2);
  wrapperDiv.appendChild(fullModalDiv);
  fullModalDiv.appendChild(fullImgDiv);
  fullImgDiv.appendChild(fullDivImg);
  fullModalDiv.appendChild(fullMdlTxtDiv);
  fullMdlTxtDiv.appendChild(fullMdlP1);
  fullMdlTxtDiv.appendChild(rightGridDiv);
  rightGridDiv.appendChild(fullMdlP2);
  fullMdlP2.appendChild(fullSpan1);
  fullMdlP2.appendChild(fullSpan2);
  fullMdlP2.appendChild(fullSpan3);
  rightGridDiv.appendChild(fullMdlP3);
  fullMdlP3.appendChild(fullSpan4);
  fullMdlP3.appendChild(fullSpan5);
  fullMdlP3.appendChild(fullSpan6);
  rightGridDiv.appendChild(hr2);
  rightGridDiv.appendChild(seeLiveBtn);
  seeLiveBtn.appendChild(seeLiveI);
  rightGridDiv.appendChild(seeSourceBtn);
  seeSourceBtn.appendChild(seeSourceI);
  document.querySelector('.wrapper-head h2').textContent = worksArray[j].title;
  document.querySelector('.close-btn').textContent = worksArray[j].close;
  document.querySelector(
    '.wrapper-sub-head .work-subtext .canopy',
  ).textContent = worksArray[j].subheadText1;
  document.querySelector(
    '.wrapper-sub-head .work-subtext .description',
  ).textContent = worksArray[j].subheadText2;
  document.querySelector(
    '.wrapper-sub-head .work-subtext .description2',
  ).textContent = worksArray[j].subheadText3;
  document.querySelector('.wrapper-img .work-image img').src = worksArray[j].image1;
  document.querySelector('.mdl-fullscreen .work-image-large img').src = worksArray[j].image2;
  document.querySelector('.wrapper-text .long-paragraph').textContent = worksArray[j].paragraph;
  document.querySelector('.wrapper-text p .span1').textContent = worksArray[j].language1;
  document.querySelector('.wrapper-text p .span2').textContent = worksArray[j].language2;
  document.querySelector('.wrapper-text p .span3').textContent = worksArray[j].language3;
  document.querySelector('.mdl-fullscreen .mdl-text p').textContent = worksArray[j].paragraph2;
  document.querySelector('.mdl-fullscreen .mdl-text p .span4').textContent = worksArray[j].language1;
  document.querySelector('.mdl-fullscreen .mdl-text p .span5').textContent = worksArray[j].language2;
  document.querySelector('.mdl-fullscreen .mdl-text p .span6').textContent = worksArray[j].language3;
  document.querySelector('.mdl-fullscreen .mdl-text p .span7').textContent = worksArray[j].language4;
  document.querySelector('.mdl-fullscreen .mdl-text p .span8').textContent = worksArray[j].language5;
  document.querySelector('.mdl-fullscreen .mdl-text p .span9').textContent = worksArray[j].language6;
  document.querySelector('.wrapper .wrapper-btns .btnA').textContent = 'See Live';
  document.querySelector('.wrapper .wrapper-btns .btnB').textContent = 'See Source';
  document.querySelector('.mdl-fullscreen .mdl-text .btnA').textContent = 'See Live';
  document.querySelector('.mdl-fullscreen .mdl-text .btnB').textContent = 'See Source';
  divSpan1.addEventListener('click', () => {
    popupDiv.remove();
  });
  seeLiveBtn.addEventListener('click', () => {
    window.open(worksArray[j].liveBtn);
  });
  seeSourceBtn.addEventListener('click', () => {
    window.open(worksArray[j].sourceBtn);
  });
}
btn1.addEventListener('click', () => {
  j = 0;
  popup();
});

btn2.addEventListener('click', () => {
  j = 1;
  popup();
});

btn3.addEventListener('click', () => {
  j = 2;
  popup();
});

btn4.addEventListener('click', () => {
  j = 3;
  popup();
});

// form validation
const contactForm = document.querySelector('form');
const emailValidation = document.getElementById('email');
const error = document.querySelector('.error');

function mailValidation(input) {
  const low = input.toLowerCase();

  if (input !== low) {
    error.innerText = 'Check your email format and try';
    error.className = 'alert error';
    document.getElementById('email').style.border = '3px solid red';
    document.getElementById('email').style.boxShadow = 'box-shadow: 0 0 10px red;';
    return 0;
  }
  if (input === low) {
    error.innerText = 'Submitted Succesfully';
    error.className = 'alert success';
    return 1;
  }

  return null;
}

contactForm.addEventListener('submit', (e) => {
  if (mailValidation(emailValidation.value) === 0) {
    e.preventDefault();
  } else {
    e.run();
  }
});

// store data in a browser
const formLocal = document.querySelector('#form');

formLocal.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('#name').value = getDataValue.fullname;
    document.querySelector('#email').value = getDataValue.emailAdress;
    document.querySelector('#message').value = getDataValue.message;
  }
});
