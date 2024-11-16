
const listImage = document.querySelectorAll('.list-images');
const imgs = document.getElementsByTagName('img');

function next() {
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(-${width}px)`;
}

setInterval(next, 4000);

// setInterval(() => {
//     let width = imgs[0].offsetWidth
//     listImage.style.transform = `translateX(-${width}px)`;
// }, 4000);