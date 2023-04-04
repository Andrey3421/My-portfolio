"use strict";

const navLinks = document.querySelectorAll('.nav__link');

function navSlider() {
  for(let index = 0; index < navLinks.length; index++) {
    const navLink = navLinks[index];
    
    navLink.addEventListener('click', function(e) {
      sliderMain.slideTo(index);
      e.preventDefault();
    });
  };
};



//Реализация бургера
const burger = document.querySelector('.burger');
const navBlock = document.querySelector('.nav__block');


burger.addEventListener('click', function(e) {
  if(e.target.closest('.burger__btn')) {
    burger.classList.toggle('_active');
  }
  //Следуйщий код добовляет блок вместо бургера чтобы флекс элемент из-за выпадения бургера сильно не менялся
  if(burger.classList.contains('_active')) {
    navBlock.style.display = 'block';
  } else {
    navBlock.style.display = 'none';
  }
});

const burgerBtn = document.querySelector('.burger__btn');

function burgerPositionCorrection() {
  if(sliderMain.realIndex == 0) {
    burgerBtn.style.top = "51px";
  } else {
    burgerBtn.style.top = "25px";
  }
}

//Реализация ссылок бургера
const burgerLinks = document.querySelectorAll('.burger__link');

function navSliderBurger() {
  for(let index = 0; index < burgerLinks.length; index++) {
    const burgerLink = burgerLinks[index];
    
    burgerLink.addEventListener('click', function(e) {
      sliderMain.slideTo(index);
      e.preventDefault();
      burger.classList.remove('_active');
      navBlock.style.display = 'none';
    });
  };
};




// Реализация кнопок для вопросов.
const boxQuestions = document.querySelector('.container__box-questions');
const allBoxQuestion = document.querySelectorAll('.container__box-question');
const arrayBoxQuestion = Array.from(allBoxQuestion);

function addRemoveClassActive() {
  for(let index = 0; index < arrayBoxQuestion.length; index++) {
    const boxQuestion = arrayBoxQuestion[index];
    boxQuestion.addEventListener('click', function(e) {
      arrayBoxQuestion.forEach(elem => {
        if(elem.classList.contains('_active') && arrayBoxQuestion.indexOf(elem) != index) {
          elem.classList.remove('_active');
        };
      });

      if(e.target.closest('.container__questin-btn')) {
        boxQuestion.classList.toggle('_active');
      };
    });
  };
};

addRemoveClassActive();

//Проверка формы перед отправкой
const footerForm = document.forms.footerForm;

footerForm.addEventListener('submit', function(e) {
  const name = footerForm.name;
  const email = footerForm.email;
  const textarea = footerForm.textarea;
  const help = document.querySelector('.footer-form__help');

  if(!name.value) {
    e.preventDefault();
    help.style.display = 'block';
  }
  if(!email.value) {
    e.preventDefault();
    help.style.display = 'block';
  }
  if(!textarea.innerText === '') {
    e.preventDefault();
    help.style.display = 'block';
  }
});



// Реализация слайдеров
const sliderMain = new Swiper('.slider-main', {
  wrapperClass: 'slider-main__wrapper',
  slideClass: 'slider-main__slide',
  direction: 'vertical',
  touchRatio: 0.5,

  navigation: {
    nextEl: '.slider-main-next-btn',
  },
  on: {
    init: function() {
      navSlider();
      navSliderBurger();
    },
    slideChange: function() {
      navPositionCorrection();
      burgerPositionCorrection();
      testOverflow();
      initOverflowContainer();
      addNavBackground();
    }
  },
});

const containerSlider = new Swiper('.container__slider', {
  wrapperClass: 'container__slider-wrapper',
  slideClass: 'container__slider-slide',
  spaceBetween: 30,
  navigation: {
    nextEl: '.container__slider-btn-next',
    prevEl: '.container__slider-btn-prev',
  },
});

//Коректирование позици nav
const wrapNav = document.querySelector('.wrap-nav');

function navPositionCorrection() {
  if(sliderMain.realIndex == 0) {
    if(window.innerWidth < 700) {
      wrapNav.style.top = "20px";
    } else {
      wrapNav.style.top = "43px";
    };
  } else {
    wrapNav.style.top = "17px";
  };
};

navPositionCorrection();

// Реализация скролла для контейнера
const containerAll = document.querySelectorAll('.container');
const containerContainerAll = document.querySelectorAll('.container__container');
let touchstartClientY;
let touchendClientY;

function testOverflow() {
  if(sliderMain.realIndex !== 0
    && containerAll[sliderMain.realIndex - 1].offsetHeight < containerContainerAll[sliderMain.realIndex - 1].scrollHeight) {
    sliderMain.params.noSwiping = true;
    sliderMain.params.noSwipingClass = 'container__container';
  } else {
    sliderMain.params.noSwiping = false;
    sliderMain.params.noSwipingClass = '';
  }
};

function initOverflowContainer() {
  if(sliderMain.realIndex != 0 && 
  containerAll[sliderMain.realIndex - 1].offsetHeight < 
  containerContainerAll[sliderMain.realIndex - 1].offsetHeight) {
    let containerIndex = sliderMain.realIndex - 1;
    
    containerContainerAll[sliderMain.realIndex - 1].addEventListener('touchend', function(e) {
    });
    swipe();
    containerAll[sliderMain.realIndex - 1].addEventListener('scroll', function(e) {
      swipe();
    });
  };
};



function swipe() {
  let containerScrollTop = containerAll[sliderMain.realIndex - 1].scrollTop;
  let containerHeight = containerAll[sliderMain.realIndex - 1].offsetHeight;
  let containerContainerHeight = containerContainerAll[sliderMain.realIndex - 1].scrollHeight;

  touchstartClientY = NaN;
  touchendClientY = NaN;

  if(containerScrollTop === 0) {
    containerContainerAll[sliderMain.realIndex - 1].addEventListener('touchstart', function(e) {
    touchstartClientY = e.changedTouches[0].clientY;
    });
    containerContainerAll[sliderMain.realIndex - 1].addEventListener('touchend', function(e) {
      touchendClientY = e.changedTouches[0].clientY;
      if(touchstartClientY < touchendClientY) {
        sliderMain.slideTo(sliderMain.realIndex - 1);
      };
    });
  } if(containerContainerHeight - containerHeight - containerScrollTop <= 1) {
    containerContainerAll[sliderMain.realIndex - 1].addEventListener('touchstart', function(e) {
    touchstartClientY = e.changedTouches[0].clientY;
    });
    containerContainerAll[sliderMain.realIndex - 1].addEventListener('touchend', function(e) {
      touchendClientY = e.changedTouches[0].clientY;
      if(touchstartClientY > touchendClientY) {
        sliderMain.slideTo(sliderMain.realIndex + 1);
      };
    });
  };
};

//Добовляем див nav--background в html
function addNavBackground() {
  let wrap = document.querySelector('.wrap');
  let navBackground;

  if(sliderMain.realIndex != 0) {
    navBackground = document.querySelector('.nav--background');
    if(!navBackground) {
      wrap.insertAdjacentHTML(
        'afterbegin',
        `<div class="nav--background"></div>`
      );
    }
  } else {
    navBackground = document.querySelector('.nav--background');
    navBackground.remove();
  };
};

// Отключаю свайп слайдера containerSlider при ширине экрана меньше 1100px и высоте меньше 750px
function checkAvailWidthHaight() {
  let screenAvailWidth = window.screen.availWidth;
  let screenAvailHaight = window.screen.availHeight;

  if (screenAvailWidth < 1100 || screenAvailHaight < 750) {
    containerSlider.allowTouchMove = false;
  };
};

checkAvailWidthHaight();