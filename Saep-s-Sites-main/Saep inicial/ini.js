let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

let personagemIndex = 0;

function movePersonagemSlide(n) {
    const slides = document.querySelector('.personagens-slides');
    const totalSlides = slides.children.length;
    const maxVisible = Math.floor(slides.parentElement.clientWidth / slides.children[0].clientWidth);

    personagemIndex += n;

    if (personagemIndex > totalSlides - maxVisible) {
        personagemIndex = 0;
    } else if (personagemIndex < 0) {
        personagemIndex = totalSlides - maxVisible;
    }

    slides.style.transform = `translateX(${-personagemIndex * (100 / maxVisible)}%)`;
}

let InimigoIndex = 0;

function moveInimigoSlide(n) {
    const slides = document.querySelector('.inimigos-slides');
    const totalSlides = slides.children.length;
    const maxVisible = Math.floor(slides.parentElement.clientWidth / slides.children[0].clientWidth);

    InimigoIndex += n;

    if (InimigoIndex > totalSlides - maxVisible) { 
        InimigoIndex = 0;
    } else if (InimigoIndex < 0) {
        InimigoIndex = totalSlides - maxVisible;
    }

    slides.style.transform = `translateX(${-InimigoIndex * (100 / maxVisible)}%)`;
}

let ArmasIndex = 0;

function moveArmasSlide(n) {
    const slides = document.querySelector('.armas-slides');
    const totalSlides = slides.children.length;
    const maxVisible = Math.floor(slides.parentElement.clientWidth / slides.children[0].clientWidth);

    ArmasIndex += n;

    if (ArmasIndex > totalSlides - maxVisible) {
        ArmasIndex = 0;
    } else if (ArmasIndex < 0) {
        ArmasIndex = totalSlides - maxVisible;
    }

    slides.style.transform = `translateX(${-ArmasIndex * (100 / maxVisible)}%)`;
}