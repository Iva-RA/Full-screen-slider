
const sliderContainer = document.querySelector('.slider')
const btnLeft = document.querySelector('.slider__btn-left');
const sliderTitle = document.querySelector('.slider-title');
const sliderTxt = document.querySelector('.slider-text');
const sliderBtn = document.querySelector('.slider-btn');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
    {
        src: 'https://image.dnevnik.hr/media/images/804x607/Jan2019/61627704-tortilja-piletina-burrito.jpg',
        title: 'Tortillas',
        text: 'Fast food',
    },
    {
        src: 'https://gladkokken.imgix.net/Biffwok-9.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.5&fp-y=0.5&h=833&q=90&w=1500&s=588dd9a3702e76ad6aacb061ecaeafbf',
        title: 'Wok',
        text: 'Fast food',
    },
    {
        src: 'https://img.taste.com.au/IoNPc-q6/w643-h428-cfill-q90/taste/2019/07/3-ingredient-banana-pancakes-151444-1.jpg',
        title: 'Banana pancakes',
        text: 'Fast food',
    },
];

let sliderCounter = 0;

const startSlider = () => {
    sliderContainer.style.backgroundImage = `
    url(${sliderImages[0].src})`
    sliderTitle.innerHTML = sliderImages[0].title
    sliderTxt.innerHTML = sliderImages[0].text
}

btnRight.addEventListener('click', function(){
    if(sliderCounter === sliderImages.length - 1) {
        sliderCounter = -1;
    } 
    slideRight();
});

function slideRight() {
    sliderContainer.style.backgroundImage = `
    url(${sliderImages[sliderCounter + 1].src})`
    sliderTitle.innerHTML = sliderImages[sliderCounter + 1].title;
    sliderTxt.innerHTML = sliderImages[sliderCounter + 1].text;
    sliderCounter++;
}

btnLeft.addEventListener('click', function(){
    if(sliderCounter === 0) {
        sliderCounter = sliderImages.length;
    } 
    slideLeft();
});

function slideLeft() {
    sliderContainer.style.backgroundImage = `
    url(${sliderImages[sliderCounter - 1].src})`
    sliderTitle.innerHTML = sliderImages[sliderCounter - 1].title;
    sliderTxt.innerHTML = sliderImages[sliderCounter - 1].text;
    sliderCounter--;
}

//startSlider();
document.addEventListener('DOMContentLoaded', startSlider);