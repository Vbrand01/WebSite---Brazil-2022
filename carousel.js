const imgs = document.getElementById("img");

const img = document.querySelectorAll("#img img");

let idX = 0;


function carousel(){
    idX++;

    if(idX > img.length - 1){
        idX = 0;
    }

    imgs.style.transform = `translateX(${-idX * 252}px)`;
}

setInterval(carousel, 1000)