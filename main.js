const btn = document.querySelector('.btn');

const openLink = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  console.log(`you've opened a link!`);
};

btn.addEventListener('click', openLink);
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
