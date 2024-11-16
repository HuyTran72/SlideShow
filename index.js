
const listImage = document.querySelectorAll('.list-images');
const imgs = document.getElementsByTagName('img');

setInterval(() => {
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1}px)`
}, 4000);