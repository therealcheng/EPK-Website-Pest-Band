import anime from './node_modules/animejs/lib/anime.es.js';

const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const navLogo = document.getElementById('#logo');

const init = () => {
  anime({
    targets: '#logo',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 3000,
  });

  anime({
    targets: '.nav-links',
    translateX: -250,
  });
};

init();
