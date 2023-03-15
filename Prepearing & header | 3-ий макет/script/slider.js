const images = document.querySelectorAll('.slider-line img');
const stiderLine = document.querySelector('.slider-line');
let timer;
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    stiderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider()
}

window.addEventListener('resize', init)
init();


document.querySelector('.slider-next').addEventListener('click',
    function () {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider()
    })



function autoSlider() {
    timer= setTimeout(function () {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        autoSlider()
        rollSlider()
    }, 4000)
}
autoSlider();
  document.querySelector('.slider-prev').addEventListener('click',
    function () {
        count--;
        if (count <0) {
            count = images.length-1;
        }
        rollSlider()

    })

function rollSlider() {
    stiderLine.style.transform = 'translate(-' + count * width + 'px';
}
