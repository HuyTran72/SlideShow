
const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;

setInterval(() => {
    if(current == length - 1) {
        current = 0;
        listImage.style.transform = `translateX(0px)`;
    } else {
        current ++;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(-${width*current}px)`;
    }
}, 3000);

btnRight.addEventListener('click', () => {

});