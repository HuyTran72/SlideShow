
const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const length = imgs.length;
let current = 0;

setInterval(() => {
    if(current === length - 1) {

    } else {
        current ++;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(-${width*current}px)`;
    }
}, 3000);