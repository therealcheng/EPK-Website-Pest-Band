import anime from './node_modules/animejs/lib/anime.es.js';

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
