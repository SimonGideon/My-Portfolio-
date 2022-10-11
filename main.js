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
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: './images/another1.svg',
    image2: './images/another1.svg',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: ' https://simongideon.github.io/Portfolio/',
    sourceBtn: 'https://github.com/SimonGideon/Portfolio',
  },

  {
    id: '1',
    title: 'Multi-Post Stories',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: './images/work2.svg',
    image2: './images/work-1-pop.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: ' https://simongideon.github.io/Portfolio/',
    sourceBtn: 'https://github.com/SimonGideon/Portfolio',
  },

  {
    id: '2',
    title: 'Tonic',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: './images/project_3.png',
    image2: './images/project_3.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: ' https://simongideon.github.io/Portfolio/',
    sourceBtn: 'https://github.com/SimonGideon/Portfolio',
  },

  {
    id: '3',
    title: 'Multi-Post Stories',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: 'images/work4.svg',
    image2: 'images/work-1-pop.png',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: ' https://simongideon.github.io/Portfolio/',
    sourceBtn: 'https://github.com/SimonGideon/Portfolio',
  },
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
  document.querySelector('.wrapper-sub-head .work-subtext .canopy').textContent = worksArray[j].subheadText1;
  document.querySelector('.wrapper-sub-head .work-subtext .description').textContent = worksArray[j].subheadText2;
  document.querySelector('.wrapper-sub-head .work-subtext .description2').textContent = worksArray[j].subheadText3;
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