let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('gallery-img');
    let w = document.documentElement.clientWidth || window.innerWidth;

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (w <= 750) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
    }

    setTimeout(showSlides, 2000);
}


/*let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('gallery-img');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}*/