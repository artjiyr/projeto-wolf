const slider = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.slider .dots li');

let active = 0;
let max = items.length - 1;

// Função principal do slider
function reloadSlider() {

    // mover slider
    slider.style.transform = `translateX(-${items[active].offsetLeft}px)`;

    // atualizar dots
    document.querySelector('.dots li.active').classList.remove('active');
    dots[active].classList.add('active');

    // efeito FADE
    items.forEach(item => item.classList.remove("active"));
    items[active].classList.add("active");
}

// botões
next.onclick = () => {
    active = active + 1 > max ? 0 : active + 1;
    reloadSlider();
}

prev.onclick = () => {
    active = active - 1 < 0 ? max : active - 1;
    reloadSlider();
}

// controle pelos dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active = index;
        reloadSlider();
    });
});

// resize
window.addEventListener("resize", reloadSlider);

// autoplay
setInterval(() => next.click(), 5000);

// iniciar
reloadSlider();
