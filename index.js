
const listImage = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')

setInterval(() => {
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(-${width}px)`;
}, 3000);