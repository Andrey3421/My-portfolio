"use strict";

const navInner = document.querySelector('.nav__inner');
const navBackground = document.querySelector('.nav__background');
const navList = document.querySelector('.nav-list');
const navBurgerBtn = document.querySelector('.mobile-panel__burger');

const navBurgerBtnInit = () => {
  navBurgerBtn.addEventListener('click', (e) => {
    if(!navBackground.classList.contains('_active')) {
      navInner.classList.add('_active');
      navBackground.classList.add('_active');
      navList.classList.add('_active');
      navBurgerBtn.classList.add('_active');

      setTimeout(() => {
        if(navBurgerBtn.classList.contains('_active')) {
          navBackground.classList.add('_transition');
          navList.classList.add('_transition');
          navBurgerBtn.classList.add('_transition');
        }
      }, 5);
    } else {
      navBackground.classList.remove('_transition');
      navList.classList.remove('_transition');
      navBurgerBtn.classList.remove('_transition');

      setTimeout(() => {
        if(!navBurgerBtn.classList.contains('_transition')) {
          navInner.classList.remove('_active');
          navBackground.classList.remove('_active');
          navList.classList.remove('_active');
          navBurgerBtn.classList.remove('_active');
        }
      }, 750);
    }
  });
}
navBurgerBtnInit();