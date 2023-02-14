const imagesRandom=[
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
]
const image = document.getElementById('image');
const button = document.getElementById('button');

button.onclick = function(){
image.src = imagesRandom[Math.floor(Math.random()*imagesRandom.length)];
}
