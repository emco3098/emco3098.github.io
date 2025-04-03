const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

const pictures = []
for(let i = 1; i<6; i++){
    let name = "imgs/pic" + i + ".JPG";
    console.log(name);
    pictures.push(name);
}

const allText = "arbitrary alt text cuz validation sux";

for(let i = 0; i < pictures.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pictures[i]);
    newImage.setAttribute('alt', allText);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
        console.log(displayedImage.src);
    });
}

btn.addEventListener('click', () => {
    const brightness = btn.getAttribute('class');
    if (brightness === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,.4)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
