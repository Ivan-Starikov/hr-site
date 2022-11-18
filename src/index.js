import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import './styles/main.scss';

import logo from './images/logo.png'
import bg1 from './images/bg-1.svg';
import bg2 from './images/bg-2.svg';
import hat from './images/hat.svg';
import computer from './images/computer.svg';
import chill from './images/chill.svg';
import dentist from './images/dentist.svg';
import team1 from './images/team-1.jpg';
import team2 from './images/team-2.jpg';
import team3 from './images/team-3.jpg';
import team4 from './images/team-4.jpg';
import guy1 from './images/guy-1.jpg';
import guy2 from './images/guy-2.jpg';

const logoImg = document.getElementsByClassName('intro-section__logo');
logoImg[0].src = logo;

const bgImg1 = document.getElementsByClassName('intro-section__img');
bgImg1[0].src = bg1;

const bgImg2 = document.getElementsByClassName('about-section__img');
bgImg2[0].src = bg2;

const hatImg = document.getElementsByClassName('benifit__img');
hatImg[0].src = hat;

const computerImg = document.getElementsByClassName('benifit__img');
computerImg[1].src = computer;

const chillImg = document.getElementsByClassName('benifit__img');
chillImg[2].src = chill;

const dentistImg = document.getElementsByClassName('benifit__img');
dentistImg[3].src = dentist;

const team1Img = document.getElementsByClassName('team-section__img');
team1Img[0].src = team1;

const team2Img = document.getElementsByClassName('team-section__img');
team2Img[1].src = team2;

const team3Img = document.getElementsByClassName('team-section__img');
team3Img[2].src = team3;

const team4Img = document.getElementsByClassName('team-section__img');
team4Img[3].src = team4;

const person1Img = document.getElementsByClassName('people-section__img');
person1Img[0].src = guy1;

const person2Img = document.getElementsByClassName('people-section__img');
person2Img[1].src = guy2;

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperAbout = new Swiper('.about-section__swiper', {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    570: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1380: {
      slidesPerView: 4,
      noSwiping: true,
    },
  }
});
