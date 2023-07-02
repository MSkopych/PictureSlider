const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length;//get the number of images in the slider
const container = document.querySelector('.container'); 

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;  // -300vh  align the corresponding images

let activeSlideIndex = 0; 

upBtn.addEventListener('click', () => {
    chengeSlide('up');
})
downBtn.addEventListener('click', () => {
    chengeSlide('down');
})

function chengeSlide(direction){
   if (direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex === slideCount){
        activeSlideIndex = 0;
    }
   }
   else if(direction === 'down'){
    activeSlideIndex--
    if(activeSlideIndex < 0){
        activeSlideIndex = slideCount - 1;
    }
   }

   const height = container.clientHeight;

   mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
   sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}
