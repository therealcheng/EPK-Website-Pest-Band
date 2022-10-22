import anime from './node_modules/animejs/lib/anime.es.js';
import Swiper from 'swiper';
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.scss';

const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const navLogo = document.getElementById('#logo');

const init = () => {
  anime({
    targets: '.hero',
    translateY: 30,
    duration: 2000,
  });
  anime({
    targets: '.hero-p',
    translateY: 30,
    duration: 2000,
  });
  anime({
    targets: '.hero-p2',
    translateY: 30,
    duration: 2000,
  });
};

init();
