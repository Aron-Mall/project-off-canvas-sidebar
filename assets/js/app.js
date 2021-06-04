const hamburgerEl = document.querySelector('.hamburger')
const navEl = document.querySelector('.nav');
const hamburgerBarsEl = document.querySelectorAll('span');
const contentEl = document.querySelector('.content');


function toggle() {

  hamburgerEl.addEventListener("click", function(event) {
    navEl.classList.toggle('open');
    contentEl.classList.toggle('slide');
    [...hamburgerBarsEl].forEach(bar => bar.classList.toggle('change'))
  })
  
}

toggle()