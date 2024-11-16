
const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
let current = 0;

setInterval(() => {
    current ++;
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(-${width*current}px)`;
}, 3000);