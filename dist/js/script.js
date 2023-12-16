// humberger
const  humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

// klik diluar humberger
window.addEventListener('click' , function(e){
if(e.target != humberger && e.target != navMenu) {
    humberger.classList.remove('humberger-active');
    navMenu.classList.add('hidden');
}
});
// navbar-fixed

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const topTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        topTop.classList.remove('hidden');
        topTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        topTop.classList.remove('flex');
        topTop.classList.add('hidden');
    }
};

// dark mode

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
      }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }