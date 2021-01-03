let slides = document.querySelector('.slider-items').children;
let prevSlide = document.querySelector('.left-slide');
let nextSlide = document.querySelector('.right-slide');
let totalSlides = slides.length;
let index = 0;

prevSlide.onclick = function(){
    next("prev");
}

nextSlide.onclick = function(){
    next("next");
}

/* Function Next */
function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }else{
        if(index==0){
            index=totalSlides-1;
        }else{
            index--;
        }
    }


    for(let i=0; i < slides.length;i++){
        slides[i].classList.remove('active');
        
    }
    slides[index].classList.add('active');
}

/* Function AutoPlay */
function autoPlay(){
    next("next");
}

let timer = setInterval(autoPlay, 4000);